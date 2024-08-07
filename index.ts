import { Attack } from "./src/core/attack";
import { Modifier } from "./src/modifiers/modifier";
import { Utils } from "./src/core/utils";
import { ModifierFactory } from "./src/modifiers/modifierFactory";
import { HasWeigth } from "./src/core/hasWeigth";
import { DescriptiveNumber } from "./src/components/descriptiveNumber";
import { UtilityFactory } from "./src/core/utilityFactory";
import { Utility } from "./src/core/utility";
import { CharacterContext } from "./src/core/characterContext";
//console.log(new Attack(''))
let att1 = new Attack();
//att1.chance = 1;
//att1.modifiers = ModifierFactory.getAll().filter((x: any) => {return x.name.includes('Apply')}).get(1) as Modifier[];
att1.range = 1;
//att1.damage = new DescriptiveNumber(15);
att1.type = Attack.Type.Spell;
att1.generate();

//console.dir(att1, { depth: null })
console.log(att1.getDescription())

const utl: Utility = UtilityFactory.get(1)[0];
//console.log(utl.getDescription());

/*
let att3 = new Attack();
att3.chance = 1;
att3.modifiers = [modifiers.get(1)[0] as Modifier];
att3.range = 1;
att3.generate();*/
//console.log(att3);

global.onSeedChange = (val): void => {
    //TODO seed randomness
};

global.onLevelChange = (val): void => {
  CharacterContext.level = val as number;
};

global.onClassChange = (val): void => {
  CharacterContext.class = Object.keys(CharacterContext.Class).find(cls => CharacterContext.Class[cls] === val) as any as number;
  console.log(CharacterContext.class);
};


global.generateAbilities = (val): void => {
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

  outputDiv.innerHTML = '<br>'+ 
    att1.getDescription() +'<br><br>'+
    att2.getDescription() +'<br><br>'+
    att3.getDescription() +'<br><br>'
};



