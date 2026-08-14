# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A browser-based, procedural generator for a tabletop-style RPG ("Monsters and Mazes" / "Masters and Mazes"). Given a **seed**, **level**, and **vendor**, it deterministically rolls a set of balanced character abilities (Attacks on odd levels, Utilities on even levels) and renders their descriptions into `index.html`. There is no game engine or runtime combat — the entire codebase is a weighted-random content generator plus a power-budget balancer.

## Commands

There is no test suite (`npm test` is a stub that exits 1) and no linter.

```sh
npm run dev            # tsc --watch + static server on http://localhost:8080 — the normal debug loop
npm run build          # tsc (reads tsconfig.json): compiles index.ts + src/**/*.ts to dist/ as native ES modules
npm run buildFactories # regenerates the six factory .ts files from their repository folders (see below)
npm run rebuild        # buildFactories → build
npm run serve          # static server only; `npm run serve -- 8081` for another port
npm run site           # build → assemble _site/, byte-for-byte what GitHub Pages deploys
npm run preview        # serve _site/ on http://localhost:8080
npm run clean          # removes dist/, _site/, and any legacy in-place .js (alias: cleanJs)
```

Typical loop: `npm run dev`, edit a `.ts`, wait for tsc to print *Found 0 errors*, reload the page. Only run `npm run buildFactories` when you add or remove a file in a repository folder — `dev` does not watch that generation step. `dist/` and `_site/` are gitignored; only `.ts`, `index.html`, and `styles.css` are source.

**Debugging:** `sourceMap: true` is on and `serve.js` also serves the raw `.ts` files, so devtools breakpoints land in the original TypeScript rather than the emitted JS. Responses are sent `Cache-Control: no-store` so a reload never picks up a stale build.

**There is no bundler.** `index.html` loads `dist/index.js` with `<script type="module">` and the browser fetches the ~186 modules itself. Two consequences:

- **You cannot open `index.html` from the filesystem** — browsers block ES modules over `file://` (CORS). Always go through `npm run serve`.
- **Every relative import must end in `.js`**, e.g. `import { Utils } from "./utils.js";` even though the file on disk is `utils.ts`. TypeScript resolves `.js` → `.ts` and passes the specifier through to the emitted output untouched; a missing extension compiles fine but 404s in the browser.

The project has **no runtime or `dependencies` entries** — only `typescript` as a devDependency. Keep it that way; a bare specifier like `import x from "some-pkg"` would need a bundler or an import map to resolve.

## Deployment

`.github/workflows/pages.yml` builds on push to `master` and deploys to GitHub Pages: `npm ci` → `npm run site` → upload/deploy. The workflow deliberately calls the same `npm run site` you run locally (`scripts/buildSite.js`, which copies `index.html`, `styles.css`, and `dist/` into `_site/`), so CI and local deploys cannot drift apart — verify a deploy with `npm run site && npm run preview` before pushing. No build output is committed. The workflow needs Pages configured with **Source: GitHub Actions** in the repository settings.

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

**Weighted random selection:** everything selectable implements `HasWeigth` (a `weight(affector?)` function). `WeightedList.get(n, affector)` does weighted sampling without replacement. `Factory` (base of every `*Factory`) holds a `WeightedList` and an `affector` (`AffectsWeight`).

**Abilities are narrowed by vendor, never by character class.** Which content a character can get is decided by the active `Vendor`'s stock (`src/core/vendor.ts`), not by a class affinity on the content itself. Generation must never read a selected class — there is deliberately no `CharacterContext.classes` to read. `weight` stays for genuine rolling odds (rarity, or a component that only makes sense on one kind of ability, e.g. `manaFumeModifier` returning `0` unless the affector is an `Attack`); leave it at the default `1` when the vendor is the only thing that should gate availability. Content still lives in class-named folders (`wizardAttacks/`, `wizardModifiers/`) — that is flavour grouping, not a linkage.

**Composition of an ability:** Attacks/Utilities are assembled from smaller weighted components, each with its own repository + factory:
- `Modifier` (`src/modifiers/`) — name prefixes + `powerBonus`/`powerMultiplier` functions that feed the power budget, optionally an `Effect`.
- `AbilityObject` (`src/components/`) — flavor components (animals, corpses, lights, movements…) with `rarity` and `is*` category flags.
- `DescriptiveNumber` (`src/components/`) — a value that may be flat OR a flavored variable (e.g. "10 × potions drank"), with bonus/multiplier; `Utils.valueToDiceRoll` converts a number to dice notation.
- `Effect` (`src/modifiers/`) — status effects attached to modifiers.

**The balancing pass (`compensate()`):** the heart of the generator. Both `Attack.compensate()` and `Utility.compensate()` reconcile a generated ability against a fixed DPS/power budget (`Utils.getDPS`, `CharacterContext.getDPS`), adjusting chance, mana cost, damage/value, range coefficients, and even injecting extra modifiers (`MODIFIER_CHANCE` maps) or a `repeatableModifier` when power overflows. When editing generation, preserve the budget math here rather than fudging output numbers. Balancing constants live in `src/core/utils.ts` and `src/core/characterContext.ts`.

**Determinism:** all randomness goes through `Utils.random()`, backed by `Utils.gen` (a `RandomNumberGenerator` seeded in `index.ts` from `seed + level + vendor name`). Do not call `Math.random()` directly — it breaks seed reproducibility.

**Entry point:** `index.ts` attaches `onSeedChange`/`onLevelChange`/`onVendorChange`/`onRulingChange`/`generateAbilities` to `window`. Level parity chooses the path: odd → `AttackFactory().get(2)`, even → `UtilityFactory().get(4)`. `getDescription(showRulings)` produces the HTML; the `showRulings` flag appends the `<b>Rulings</b>` long-description block.

## Conventions & gotchas

- **Never write comments.** No inline comments, no trailing comments, no comments inside function bodies, no doc blocks on fields or methods, no commented-out code. Express intent through naming and structure instead. Only three kinds of comment belong in this repo:
  1. **A block on top of a top-level declaration** (a class, an interface, an exported function) or at the very top of a file, saying what the thing is for.
  2. **A note about an uncommon interaction** — something a reader cannot infer from the code because the reason lives somewhere else: another file, the build script, a browser or platform constraint, a deliberate non-obvious tradeoff. `Factory.vendorFilter` being declared below the constructor so `buildFactories.js` doesn't overwrite it, `.ts` served as `text/plain` so devtools can fetch sourcemapped originals, or `AbilityObject.typeName` existing because table rows all share one constructor. If removing the comment would let someone break the thing by accident, keep it.
  3. **Anything the repo owner wrote themselves.** Their `//TODO`s, question marks on enum members, commented-out formulas, and notes-to-self are records of intent — never delete or reword them, even when they look like clutter or contain typos. If unsure who wrote a comment, `git blame` it and leave it alone.
  - `//factory imports` in the six factory files is a functional marker `scripts/buildFactories.js` matches on, not a comment. Leave it.
- Some balancing is deliberately disabled and looks like a bug: `Utils.getDPSCoefficient` returns a flat `1`, `Utils.getDPS` ignores its `level` argument, and `compensationModifier`/`repeatableModifier` are weight-`0` on purpose. The owner's `//TODO` comments at each site record the intended values — don't "fix" the code or drop the comments.
- `CharacterContext` (level, seed) and `Utils` (RNG, constants) are effectively global singletons via static members — generation reads them implicitly, so order of assignment matters. It also holds the `Class`/`Attribute`/`Skill`/`ArmorProficiency` enums, which describe characters as data; nothing in generation reads them.
- `src/characters/` (`ClassDetails`, `ClassUtils`, `classes/wizard.ts`) is currently unreferenced — it was the class-linkage model. Nothing imports it, so the browser never fetches it. Kept for a future character sheet; don't wire it back into generation.
- Compiler options live in `tsconfig.json` (`target: es2017`, `module: es2020`, `outDir: dist`, `sourceMap: true`; `scripts/` is excluded — those are plain CommonJS Node scripts, not part of the browser build). New files just need to be reachable via imports from `index.ts` (directly or through a regenerated factory).
