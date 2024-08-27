import { Attack } from "./src/core/attack";
import { Modifier } from "./src/modifiers/modifier";
import { Utils } from "./src/core/utils";
import { ModifierFactory } from "./src/modifiers/modifierFactory";
import { HasWeigth } from "./src/core/hasWeigth";
import { DescriptiveNumber } from "./src/components/descriptiveNumber";
import { UtilityFactory } from "./src/core/utilityFactory";
import { Utility } from "./src/core/utility";
import { CharacterContext } from "./src/core/characterContext";
import { Ability } from "./src/core/ability";
import { RandomNumberGenerator } from "./src/core/randomNumberGenerator";

global.onSeedChange = (val): void => {
  CharacterContext.seed = val;
};

global.onLevelChange = (val): void => {
  CharacterContext.level = val as number;
};

global.onClassChange = (val): void => {
  CharacterContext.classes = [
    Number(Object.keys(CharacterContext.Class).find(cls => CharacterContext.Class[cls] === val) as any as string)
  ];
};


global.generateAbilities = (val): void => {
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

  let levelMode: number = CharacterContext.level % 3;
  let description: string = '';

  if(levelMode === 1) {
    let att1 = new Attack();
    att1.generate()
    let att2 = new Attack();
    att2.generate()
    let att3 = new Attack();
    att3.generate()

    description = '<br>'+ 
      att1.getDescription() +'<br><br>'+
      att2.getDescription() +'<br><br>'+
      att3.getDescription() +'<br><br>'
  } else if(levelMode === 2) {
  
    const utl: Utility[] = new UtilityFactory(new Ability()).get(3);

    description = '<br>'+ 
      utl[0].getDescription() +'<br><br>'+
      utl[1].getDescription() +'<br><br>'+
      utl[2].getDescription() +'<br><br>'

  } else {

  }

  outputDiv.innerHTML = description;
};



