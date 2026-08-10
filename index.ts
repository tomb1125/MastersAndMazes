import { Attack } from "./src/core/attack.js";
import { Utils } from "./src/core/utils.js";
import { UtilityFactory } from "./src/core/utilityFactory.js";
import { Utility } from "./src/core/utility.js";
import { CharacterContext } from "./src/core/characterContext.js";
import { Ability } from "./src/core/ability.js";
import { RandomNumberGenerator } from "./src/core/randomNumberGenerator.js";
import { AttackFactory } from "./src/core/attackFactory.js";

// The inline handlers in index.html call these by bare name, so they have to
// live on window — a module script no longer shares scope with the document.
declare global {
  interface Window {
    onSeedChange(val: string): void;
    onLevelChange(val: number): void;
    onClassChange(val: string): void;
    onRulingChange(val: boolean): void;
    generateAbilities(): void;
  }
}

window.onSeedChange = (val): void => {
  CharacterContext.seed = val;
  window.generateAbilities();
};

window.onLevelChange = (val): void => {
  CharacterContext.level = val as number;
  window.generateAbilities();
};

window.onClassChange = (val): void => {
  CharacterContext.classes = [
    Number(Object.keys(CharacterContext.Class).find(cls => CharacterContext.Class[cls] === val) as any as string)
  ];
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

  currentSeed += CharacterContext.level + CharacterContext.classes.join('');
  Utils.gen = new RandomNumberGenerator(currentSeed);

  var outputDiv = document.getElementById('output');
  if(outputDiv == null) {
    throw 'null output';
  }

  let levelMode: number = CharacterContext.level % 2;
  let description: string = '';

  if(levelMode === 1) {
    let factory1 = new AttackFactory(new Ability()).get(2);
    let factory2 = new AttackFactory(new Ability()).get(2);
    let att1 = factory1[0];
    let att2 = factory1[1];
    let att3 = factory2[0];
    let att4 = factory2[1];

    //The cards are laid out by the .output grid in styles.css, so no separators here.
    description =
      att1.getDescription(showRulings) +
      att2.getDescription(showRulings) +
      att3.getDescription(showRulings) +
      att4.getDescription(showRulings);
  } else if(levelMode === 0) {

    const utl: Utility[] = new UtilityFactory(new Ability()).get(1);

    description = utl[0].getDescription(showRulings);
  }

  outputDiv.innerHTML = description;
};



