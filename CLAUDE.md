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

Each factory draws from **two paired folders**, and the script emits the imports and the push lines for both:

- a **repository** (e.g. `utilityFactory.ts` ↔ `src/core/utilityRepository/`) — one class per file, walked one subfolder deep, emitted as `this.items.push(new <ClassName>(...))`;
- a **tables** folder (e.g. `src/core/utilityTables/`) — one builder function per file, emitted as `<functionName>().forEach(x => this.items.push(x))`.

It replaces everything between the `//factory imports` marker and the `export class` line, and everything after `new WeightedList();`. Either folder may be empty or missing (git does not carry empty directories) — the script skips it.

Consequences:
- **Never hand-edit the import block or the push list in a factory constructor** — `buildFactories` will overwrite it. Add content by creating a new file in a repository or tables folder and re-running the script.
- **File name must equal the exported class name** — or, in a tables folder, the exported function name (the script strips `.ts` to derive it). Names are conventionally camelCase with a lowercase first letter (e.g. `fireballAttack`, `sneakyModifier`; `bulkMaterials`, `debuffs`).
- The generated imports carry a `.js` extension (`from "./utilityRepository/foo.js"`) because there is no bundler — see Commands above.
- Factories with `hasAffector: true` (`modifierFactory`, `attackFactory`) pass an `affector` argument into each repository **constructor**; the others pass none. Match your constructor signature accordingly. Table builders never take one — a row's `weight` is handed the affector at call time.

### Repository class or table row?

Every factory has a `*Table.ts` next to it (`modifierTable.ts`, `attackTable.ts`, …) exporting a `*Row` interface and a `build*` function. **Content that is nothing but field assignments belongs in a table**; content that needs real logic at construction stays a class in the repository. `fireballAttack` (slips a `compensationModifier` into the middle of the generate run) and `applyEffectModifier` (rolls itself an effect) are the classes worth looking at; `basicAttack`, `grazedModifier`, `stunEffect` and `wallUtility` are all rows now. Both formats land in the same `WeightedList`, so a row can be promoted to a class later without any caller noticing.

- `typeName` on a row stands in for the class name a repository entry would have, and is what vendors narrow stock by — every row of a table shares one constructor, so without it they are indistinguishable. `Ability`, `Modifier`, `AbilityObject` and `DescriptiveNumber` all default `typeName` to `this.constructor.name` for the repository case.
- **Category enums are not row fields.** A table holds one category and tags all of its rows at once through the `categorise` callback: `buildModifiers(ROWS, m => m.modifierType = Modifier.Type.Constraint)`, `buildAttacks(ROWS, a => a.subtype = Attack.Subtype.Spell)`. That is what the table files are named after (`constraints.ts`, `spells.ts`, `debuffs.ts`), and it is the grouping the vendor rule below permits. `buildUtilities` is the exception — a `Utility` has no category enum, so its `cooldown` is a plain row field.
- A row literal is evaluated when its table module loads. The modifier tables load while `Utils` is still loading (`Utils` → `ModifierFactory` → the tables), so a row that wants a `Utils` or `CharacterContext` constant must read it inside one of its functions, never in the literal.

## Core architecture

**Class hierarchy:** `Ability` (`src/core/ability.ts`, base — name, chance, cooldown, elements, mana) → `Activity` (adds range, modifiers) → `Attack` and `Utility`. `Ability` also defines the shared enums (`Type`, `Source`, `Element`, `Cooldown`, `Range`) in a merged namespace. `Range` members carry their distance in squares as the enum value (`Touch = 1`, `Short = 5`, `Medium = 10`, `Long = 20`), and `Ability.RANGES` lists them in order for stepping between them.

**Weighted random selection:** everything selectable implements `HasWeigth` (a `weight(affector?)` function). `WeightedList.get(n, affector)` does weighted sampling without replacement. `Factory` (base of every `*Factory`) holds a `WeightedList` and an `affector` (`AffectsWeight`).

**Abilities are narrowed by vendor, never by character class.** Which content a character can get is decided by the active `Vendor`'s stock (`src/core/vendor.ts`), not by a class affinity on the content itself. Generation must never read a selected class — there is deliberately no `CharacterContext.classes` to read. `weight` stays for genuine rolling odds (rarity, or a component that only makes sense on one kind of ability, e.g. `manaFumeModifier` returning `0` unless the affector is an `Attack`); leave it at the default `1` when the vendor is the only thing that should gate availability. Repository folders are flat and must not be grouped by class — no `wizardAttacks/`, no `wizardModifiers/`. If a repository grows enough to need subfolders, split it on something the generator actually reads (subtype, element, rarity), never on a character class.

This constrains the **content**, not the vendor: a class-flavoured vendor is free to stock whatever it likes, attacks included, by naming them in its `VendorStock`. The owner has explicitly settled this — class vendors **will** sell attacks. So do not read the current `Wizard` vendor as doctrine that a class sells no combat; it is there to exercise `Vendor.NOTHING` and the every-level fallback, and giving it an `attacks` stock is a one-line change to `vendors.ts` whenever its spell list is ready. Nothing else may grow a "does this class fight?" notion in response.

**Vendor stock slots** (`VendorStockList` in `src/core/vendor.ts`): `abilities` is shorthand covering both ability factories; `attacks` and `utilities` override it individually; `modifiers`, `abilityObjects`, and `descriptiveNumbers` cover the components. **An omitted slot stocks everything**, so refusing a slot has to be explicit — `attacks: Vendor.NOTHING`, which is how the `Wizard` vendor currently stocks no attacks. Prefer the narrow slot over `abilities` when declaring a vendor: `abilities` silently narrows utilities too, which is rarely what a "teaches these attacks" vendor means.

Empty stock means two different things depending on the factory, controlled by `Factory.canSellNothing()`. The ability factories override it to `true` — a vendor that stocks no attacks sells none. The component factories leave it `false` and fall back to the full pool, because they are built midway through assembling an ability that is already committed to; returning nothing there strands callers like `buildUtilities`, which indexes straight into `get(1)[0]` when drawing a row's components. `Factory.stocksAnything()` asks whether the active vendor stocks anything rollable, which is how `index.ts` decides what to generate.

**Composition of an ability:** Attacks/Utilities are assembled from smaller weighted components, each with its own repository + factory:
- `Modifier` (`src/modifiers/`) — name prefixes + `powerBonus`/`powerMultiplier` functions that feed the power budget, optionally an `Effect`.
- `AbilityObject` (`src/components/`) — flavor components (animals, corpses, lights, movements…) with `rarity` and `is*` category flags.
- `DescriptiveNumber` (`src/components/`) — a value that may be flat OR a flavored variable (e.g. "10 × potions drank"), with bonus/multiplier; `Utils.valueToDiceRoll` converts a number to dice notation.
- `Effect` (`src/modifiers/`) — status effects attached to modifiers.

**Attacks are set, not rolled.** An attack row fixes `chance`, `damage`, `manaCost` and `range`; what varies between two draws of the same row is its *alterations*. `Attack.initAlterations()` rolls how many from `Attack.ALTERATION_CHANCE`, then spends each one on either a `Modifier` or a `DescriptiveNumber` that replaces the flat damage with a flavored one. Which of the two it spends on is decided by comparing `Factory.getTotalWeight()` of the two pools **as the active vendor stocks them**, so narrowing a vendor's `modifiers` slot shifts attacks toward flavored damage on its own. A row's damage may only be replaced once; every further alteration is a modifier.

**The balancing pass (`compensate()`):** the heart of the generator. Both `Attack.compensate()` and `Utility.compensate()` reconcile a generated ability against a fixed DPS/power budget (`Utils.getDPS`, `CharacterContext.getDPS`), adjusting chance, mana cost, damage/value, range coefficients, and even injecting extra modifiers (`Utility.MODIFIER_CHANCE`) or a `repeatableModifier` when power overflows. When editing generation, preserve the budget math here rather than fudging output numbers. Balancing constants live in `src/core/utils.ts` and `src/core/characterContext.ts`.

**Determinism:** all randomness goes through `Utils.random()`, backed by `Utils.gen` (a `RandomNumberGenerator` seeded in `index.ts` from `seed + level + vendor name`). Do not call `Math.random()` directly — it breaks seed reproducibility.

**Entry point:** `index.ts` attaches `onSeedChange`/`onLevelChange`/`onVendorChange`/`onRulingChange`/`generateAbilities` to `window`. **A visit always teaches `ABILITIES_PER_VISIT` (4) abilities.** That count is fixed and belongs to `index.ts` alone — the vendor decides *which kind* a visit teaches and never *how many*. `teach()` draws them one at a time, each from a factory it builds for that one draw, precisely so the number cannot follow the depth of the stock: an ability is rolled in its constructor, so a vendor holding a single utility teaches four different rolls of it. Do not reintroduce a "draws × abilities per draw" split — `Factory.get` clamps a request to what the vendor stocks, so any draw wider than 1 silently turns a thin stock into a short visit. Level parity only chooses the **preferred** kind (odd → attacks, even → utilities); if the active vendor stocks none of that kind it teaches the other instead, which is what makes a vendor narrow enough to sell a single kind worth visiting at every level. A vendor stocking neither renders a "has nothing to teach" note. `getDescription(showRulings)` produces the HTML; the `showRulings` flag appends the `<b>Rulings</b>` long-description block.

## Conventions & gotchas

- **Never write comments.** No inline comments, no trailing comments, no comments inside function bodies, no doc blocks on fields or methods, no commented-out code. Express intent through naming and structure instead. The default for a new file, class, interface, or function is **zero** comments: a comment is something you have to justify writing, not something a declaration is owed. Only three kinds belong in this repo:
  1. **At most one short block at the very top of a file**, two or three lines, saying what the file is for when its name does not already. Not one per exported declaration — a `build*` function beside the `*Row` interface it fills in gets nothing, and neither does anything whose name and signature already read as its own description. Never write a usage example in a comment; the call sites are the examples.
  2. **A note about an uncommon interaction** — something a reader cannot infer from the code because the reason lives somewhere else: another file, the build script, a browser or platform constraint, a deliberate non-obvious tradeoff. `Factory.vendorFilter` being declared below the constructor so `buildFactories.js` doesn't overwrite it, `.ts` served as `text/plain` so devtools can fetch sourcemapped originals, or `AbilityObject.typeName` existing because table rows all share one constructor. If removing the comment would let someone break the thing by accident, keep it — in one sentence, at the single site where they would break it. An explanation that would fit in five files belongs in this file instead, and then the code gets none of it: `AbilityObject.typeName` carries that note for all four classes that declare a `typeName`, and the other three say nothing.
  3. **Anything the repo owner wrote themselves.** Their `//TODO`s, question marks on enum members, commented-out formulas, and notes-to-self are records of intent — never delete or reword them, even when they look like clutter or contain typos. If unsure who wrote a comment, `git blame` it and leave it alone.
  - `//factory imports` in the six factory files is a functional marker `scripts/buildFactories.js` matches on, not a comment. Leave it.
- Some balancing is deliberately disabled and looks like a bug: `Utils.getDPSCoefficient` returns a flat `1`, `Utils.getDPS` ignores its `level` argument, and `compensationModifier`/`repeatableModifier` are weight-`0` on purpose. The owner's `//TODO` comments at each site record the intended values — don't "fix" the code or drop the comments.
- `CharacterContext` (level, seed) and `Utils` (RNG, constants) are effectively global singletons via static members — generation reads them implicitly, so order of assignment matters. It also holds the `Class`/`Attribute`/`Skill`/`ArmorProficiency` enums, which describe characters as data; nothing in generation reads them.
- `src/characters/` (`ClassDetails`, `ClassUtils`, `classes/wizard.ts`) is currently unreferenced — it was the class-linkage model. Nothing imports it, so the browser never fetches it. Kept for a future character sheet; don't wire it back into generation.
- Compiler options live in `tsconfig.json` (`target: es2017`, `module: es2020`, `outDir: dist`, `sourceMap: true`; `scripts/` is excluded — those are plain CommonJS Node scripts, not part of the browser build). New files just need to be reachable via imports from `index.ts` (directly or through a regenerated factory).
