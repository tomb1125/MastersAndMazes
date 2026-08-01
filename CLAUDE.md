# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A browser-based, procedural generator for a tabletop-style RPG ("Monsters and Mazes" / "Masters and Mazes"). Given a **seed**, **level**, and **class**, it deterministically rolls a set of balanced character abilities (Attacks on odd levels, Utilities on even levels) and renders their descriptions into `index.html`. There is no game engine or runtime combat — the entire codebase is a weighted-random content generator plus a power-budget balancer.

## Commands

There is no test suite (`npm test` is a stub that exits 1) and no linter.

```sh
npm run build          # tsc (reads tsconfig.json): compiles index.ts + src/**/*.ts to dist/ as native ES modules
npm run serve          # zero-dependency static server on http://localhost:8080
npm run buildFactories # regenerates the six factory .ts files from their repository folders (see below)
npm run cleanJs        # removes dist/ plus any legacy in-place .js
```

Typical loop: `npm run buildFactories` (only if you added/removed a repository item) → `npm run build` → `npm run serve` → open `http://localhost:8080`. `dist/` is gitignored; only `.ts`, `index.html`, and `styles.css` are source.

**There is no bundler.** `index.html` loads `dist/index.js` with `<script type="module">` and the browser fetches the ~186 modules itself. Two consequences:

- **You cannot open `index.html` from the filesystem** — browsers block ES modules over `file://` (CORS). Always go through `npm run serve`.
- **Every relative import must end in `.js`**, e.g. `import { Utils } from "./utils.js";` even though the file on disk is `utils.ts`. TypeScript resolves `.js` → `.ts` and passes the specifier through to the emitted output untouched; a missing extension compiles fine but 404s in the browser.

The project has **no runtime or `dependencies` entries** — only `typescript` as a devDependency. Keep it that way; a bare specifier like `import x from "some-pkg"` would need a bundler or an import map to resolve.

## Deployment

`.github/workflows/pages.yml` builds on push to `master` and deploys to GitHub Pages: `npm ci` → `npm run build` → copy `index.html`, `styles.css`, `dist/` into `_site/` → upload/deploy. No build output is committed. The workflow needs Pages configured with **Source: GitHub Actions** in the repository settings.

## The factory generation system (important)

`scripts/buildFactories.js` **rewrites the constructor bodies** of six factory files:
`effectFactory.ts`, `modifierFactory.ts`, `utilityFactory.ts`, `abilityObjectFactory.ts`, `descriptiveNumberFactory.ts`, `attackFactory.ts`.

For each, it scans the paired repository directory (e.g. `utilityFactory.ts` ↔ `src/core/utilityRepository/`), walking one level of subfolders, and emits an `import` plus a `this.items.push(new <ClassName>(...))` line for every `.ts` file. It replaces everything between the `//factory imports` marker and the `export class` line, and everything after `new WeightedList();`.

Consequences:
- **Never hand-edit the import block or the push list in a factory constructor** — `buildFactories` will overwrite it. Add content by creating a new file in the repository folder and re-running the script.
- **File name must equal the exported class name** (the script strips `.ts` to derive the class). Class names are conventionally camelCase with a lowercase first letter (e.g. `holyHealUtility`, `fireballAttack`, `sneakyModifier`).
- The generated imports carry a `.js` extension (`from "./utilityRepository/foo.js"`) because there is no bundler — see Commands above.
- Factories with `hasAffector: true` (`modifierFactory`, `attackFactory`) pass an `affector` argument into each constructor; the others pass none. Match your constructor signature accordingly.

## Core architecture

**Class hierarchy:** `Ability` (`src/core/ability.ts`, base — name, chance, cooldown, elements, mana) → `Activity` (adds range, modifiers) → `Attack` and `Utility`. `Ability` also defines the shared enums (`Type`, `Source`, `Element`, `Cooldown`) in a merged namespace.

**Weighted random selection:** everything selectable implements `HasWeigth` (a `weight(affector?)` function). `WeightedList.get(n, affector)` does weighted sampling without replacement. `Factory` (base of every `*Factory`) holds a `WeightedList` and an `affector` (`AffectsWeight`). A class-affinity `weight` is the standard mechanism for making a class's own content likely and other classes' content nearly impossible — see `CharacterContext.IN_CLASS_MODIFIER` (1.7) vs `OUT_OF_CLASS_WEIGHT` (~0), used like:
```ts
this.weight = () => CharacterContext.classes.includes(CharacterContext.Class.Cleric)
    ? CharacterContext.IN_CLASS_MODIFIER : CharacterContext.OUT_OF_CLASS_WEIGHT;
```

**Composition of an ability:** Attacks/Utilities are assembled from smaller weighted components, each with its own repository + factory:
- `Modifier` (`src/modifiers/`) — name prefixes + `powerBonus`/`powerMultiplier` functions that feed the power budget, optionally an `Effect`.
- `AbilityObject` (`src/components/`) — flavor components (animals, corpses, lights, movements…) with `rarity` and `is*` category flags.
- `DescriptiveNumber` (`src/components/`) — a value that may be flat OR a flavored variable (e.g. "10 × potions drank"), with bonus/multiplier; `Utils.valueToDiceRoll` converts a number to dice notation.
- `Effect` (`src/modifiers/`) — status effects attached to modifiers.

**The balancing pass (`compensate()`):** the heart of the generator. Both `Attack.compensate()` and `Utility.compensate()` reconcile a generated ability against a fixed DPS/power budget (`Utils.getDPS`, `CharacterContext.getDPS`), adjusting chance, mana cost, damage/value, range coefficients, and even injecting extra modifiers (`MODIFIER_CHANCE` maps) or a `repeatableModifier` when power overflows. When editing generation, preserve the budget math here rather than fudging output numbers. Balancing constants live in `src/core/utils.ts` and `src/core/characterContext.ts`.

**Determinism:** all randomness goes through `Utils.random()`, backed by `Utils.gen` (a `RandomNumberGenerator` seeded in `index.ts` from `seed + level + classes`). Do not call `Math.random()` directly — it breaks seed reproducibility.

**Entry point:** `index.ts` attaches `onSeedChange`/`onLevelChange`/`onClassChange`/`onRulingChange`/`generateAbilities` to `global`. Level parity chooses the path: odd → `AttackFactory().get(2)`, even → `UtilityFactory().get(4)`. `getDescription(showRulings)` produces the HTML; the `showRulings` flag appends the `<b>Rulings</b>` long-description block.

## Conventions & gotchas

- `CharacterContext` (level, classes, seed) and `Utils` (RNG, constants) are effectively global singletons via static members — generation reads them implicitly, so order of assignment matters.
- Many `// TODO` comments mark deliberately disabled balancing (e.g. `getDPSCoefficient` returns `1`, `OUT_OF_CLASS_WEIGHT` noted as pre-go-live). Don't "fix" these without understanding the intended value.
- No `tsconfig.json`; compiler options are inline flags in the `build` script. New files just need to be reachable via imports from `index.ts` (directly or through a regenerated factory).
