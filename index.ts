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
//console.log(new Attack(''))
//let att1 = new Attack();
//att1.chance = 1;
//att1.modifiers = ModifierFactory.getAll().filter((x: any) => {return x.name.includes('Apply')}).get(1) as Modifier[];
//att1.range = 1;
//att1.damage = new DescriptiveNumber(15);
//att1.type = Attack.Type.Spell;
//att1.generate();

//console.dir(att1, { depth: null })
//console.log(att1.getDescription())

//const utl: Utility = new UtilityFactory(new Ability()).get(1)[0];
//console.log(utl.getDescription());

global.onSeedChange = (val): void => {
  CharacterContext.seed = val;
};

global.onLevelChange = (val): void => {
  CharacterContext.level = val as number;
};

global.onClassChange = (val): void => {
  CharacterContext.classes = [Object.keys(CharacterContext.Class).find(cls => CharacterContext.Class[cls] === val) as any as number];
  console.log(CharacterContext.classes);
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

  let att1 = new Attack();
  att1.generate()
  let att2 = new Attack();
  att2.generate()
  let att3 = new Attack();
  att3.generate()
  
  const utl: Utility = new UtilityFactory(new Ability()).get(1)[0];

  outputDiv.innerHTML = '<br>'+ 
    att1.getDescription() +'<br><br>'+
    att2.getDescription() +'<br><br>'+
    att3.getDescription() +'<br><br>'+
    utl.getDescription()
};



