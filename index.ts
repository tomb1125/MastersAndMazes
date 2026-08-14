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
    if(levelMode === 1) {
      const attacks: Attack[] = [
        ...new AttackFactory(new Ability()).get(2),
        ...new AttackFactory(new Ability()).get(2)
      ];

      return attacks.map(attack => attack.getDescription(showRulings)).join('');
    }

    if(levelMode === 0) {
      const utl: Utility[] = new UtilityFactory(new Ability()).get(1);
      return utl.map(utility => utility.getDescription(showRulings)).join('');
    }

    return '';
  });

  outputDiv.innerHTML = description;
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



