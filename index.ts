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
// single thing in stock teaches four different rolls of it rather than one.
const teach = (openFactory: () => AttackFactory | UtilityFactory): string => {
  const abilities: (Attack | Utility)[] = [];

  for(let i = 0; i < ABILITIES_PER_VISIT; i++) {
    const drawn: (Attack | Utility)[] = openFactory().get(1);
    abilities.push(...drawn);
  }

  return abilities.map(ability => ability.getDescription(showRulings)).join('');
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

  let levelMode: number = CharacterContext.level % 2;

  // Everything the vendor trains is generated inside train(), so the factories built deep
  // in Attack/Utility see its stock too.
  const description: string = activeVendor.train((): string => {
    const sellsAttacks: boolean = new AttackFactory(new Ability()).stocksAnything();
    const sellsUtilities: boolean = new UtilityFactory(new Ability()).stocksAnything();

    // Level parity only picks which kind is preferred. A vendor that stocks none of that
    // kind teaches the other one instead, so a vendor narrow enough to sell one kind is
    // worth visiting at every level rather than half of them.
    const attacksWanted: boolean = levelMode === 1 ? sellsAttacks : !sellsUtilities;

    if(attacksWanted && sellsAttacks) {
      return teach(() => new AttackFactory(new Ability()));
    }

    if(sellsUtilities) {
      return teach(() => new UtilityFactory(new Ability()));
    }

    return '';
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



