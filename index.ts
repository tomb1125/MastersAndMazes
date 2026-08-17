import { Attack } from "./src/core/attack.js";
import { Utils } from "./src/core/utils.js";
import { UtilityFactory } from "./src/core/utilityFactory.js";
import { Utility } from "./src/core/utility.js";
import { CharacterContext } from "./src/core/characterContext.js";
import { Ability } from "./src/core/ability.js";
import { RandomNumberGenerator } from "./src/core/randomNumberGenerator.js";
import { AttackFactory } from "./src/core/attackFactory.js";
import { Vendor } from "./src/core/vendor.js";
import { VENDORS } from "./src/core/vendors.js";

// The inline handlers in index.html call these by bare name, so they have to
// live on window — a module script no longer shares scope with the document.
declare global {
  interface Window {
    onSeedChange(val: string): void;
    onLevelChange(val: number): void;
    onVendorChange(val: string): void;
    onRulingChange(val: boolean): void;
    generateAbilities(): void;
  }
}

let activeVendor: Vendor = VENDORS[0];

window.onSeedChange = (val): void => {
  CharacterContext.seed = val;
  window.generateAbilities();
};

window.onLevelChange = (val): void => {
  CharacterContext.level = val as number;
  window.generateAbilities();
};

window.onVendorChange = (val): void => {
  const picked = VENDORS.find(vendor => vendor.name === val);
  if(picked) {
    activeVendor = picked;
  }
  window.generateAbilities();
};

let showRulings: boolean = false;
window.onRulingChange = (val): void => {
  showRulings = val;
  window.generateAbilities();
};

const ABILITIES_PER_VISIT: number = 4;

// Drawn one at a time from a factory built per ability, so the count never depends on how
// deep the vendor's stock is: an ability is rolled in its constructor, and a vendor with a
// single thing in stock teaches four different rolls of it rather than one. That is the
// whole point of the fixed count, and it is why a vendor that rolls nothing is taught by
// teachWholeStock instead.
const teach = (openFactory: () => AttackFactory | UtilityFactory): (Attack | Utility)[] => {
  const abilities: (Attack | Utility)[] = [];

  for(let i = 0; i < ABILITIES_PER_VISIT; i++) {
    const drawn: (Attack | Utility)[] = openFactory().get(1);
    abilities.push(...drawn);
  }

  return abilities;
};

// A vendor teaching its rows as authored has nothing to reroll them with, so repeating a
// draw would repeat a row verbatim. Its whole shelf is taught instead, each row once -
// four rows if it holds four, two if it holds two, all of them if it holds more.
const teachWholeStock = (factories: (AttackFactory | UtilityFactory)[]): (Attack | Utility)[] => {
  const abilities: (Attack | Utility)[] = [];

  factories.forEach(factory => abilities.push(...factory.get(factory.getStockCount())));

  return abilities;
};

const teachRolls = (): (Attack | Utility)[] => {
  // Which kind a draw teaches follows nothing but the two pools as this vendor stocks them,
  // weighed against each other the way an attack weighs modifiers against descriptive
  // numbers. The level never enters into it: a vendor sells attacks because its stock says
  // so, so refusing a kind is said with a filter and in no other way.
  const attackWeight: number = new AttackFactory(new Ability()).getTotalWeight();
  const utilityWeight: number = new UtilityFactory(new Ability()).getTotalWeight();
  const stockedWeight: number = attackWeight + utilityWeight;

  if(stockedWeight <= 0) {
    return [];
  }

  return teach(() => Utils.random() * stockedWeight < attackWeight
    ? new AttackFactory(new Ability())
    : new UtilityFactory(new Ability()));
};

window.generateAbilities = (): void => {
  let currentSeed = '';
  if(CharacterContext.seed) {
    currentSeed = CharacterContext.seed;
  } else {
    currentSeed = ''+Math.random();
  }

  // The vendor is part of the seed so switching shops rerolls rather than redrawing a
  // correlated hand from the same random stream.
  currentSeed += CharacterContext.level + activeVendor.name;
  Utils.gen = new RandomNumberGenerator(currentSeed);

  var outputDiv = document.getElementById('output');
  if(outputDiv == null) {
    throw 'null output';
  }

  // Everything the vendor trains is generated inside train(), so the factories built deep
  // in Attack/Utility see its stock too.
  const description: string = activeVendor.train((): string => {
    const abilities: (Attack | Utility)[] = Vendor.altersAbilities()
      ? teachRolls()
      : teachWholeStock([new AttackFactory(new Ability()), new UtilityFactory(new Ability())]);

    return abilities.map(ability => ability.getDescription(showRulings)).join('');
  });

  // A vendor is allowed to stock nothing at all, so an empty result is a real answer here
  // rather than a generation failure.
  outputDiv.innerHTML = description === ''
    ? '<p class="output__empty">' + activeVendor.name + ' has nothing to teach.</p>'
    : description;
};

const vendorPicklist = document.getElementById('vendor') as HTMLSelectElement | null;
if(vendorPicklist) {
  VENDORS.forEach(vendor => {
    const option = document.createElement('option');
    option.value = vendor.name;
    option.text = vendor.name;
    vendorPicklist.add(option);
  });
  vendorPicklist.value = activeVendor.name;
}



