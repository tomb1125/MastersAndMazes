import { Attack } from "./src/core/attack";
import { Utils } from "./src/core/utils";
import { UtilityFactory } from "./src/core/utilityFactory";
import { Utility } from "./src/core/utility";
import { CharacterContext } from "./src/core/characterContext";
import { Ability } from "./src/core/ability";
import { RandomNumberGenerator } from "./src/core/randomNumberGenerator";
import { AttackFactory } from "./src/core/attackFactory";

global.onSeedChange = (val): void => {
  CharacterContext.seed = val;
};

global.onLevelChange = (val): void => {
  CharacterContext.level = val as number;
  global.generateAbilities();
};

global.onClassChange = (val): void => {
  CharacterContext.classes = [
    Number(Object.keys(CharacterContext.Class).find(cls => CharacterContext.Class[cls] === val) as any as string)
  ];
  global.generateAbilities();
};


global.generateAbilities = (): void => {
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

    description = '<br>'+ 
      att1.getDescription() +'<br><br>'+
      att2.getDescription() +'<br><br>'+
      att3.getDescription() +'<br><br>'+
      att4.getDescription() +'<br><br>'
  } else if(levelMode === 0) {
  
    const utl: Utility[] = new UtilityFactory(new Ability()).get(4);

    description = '<br>'+ 
      utl[0].getDescription() +'<br><br>'+
      utl[1].getDescription() +'<br><br>'+
      utl[2].getDescription() +'<br><br>'+
      utl[3].getDescription() +'<br><br>'

    
    /*const debugName = 'Light';
    description = '<br>'+ 
      new UtilityFactory(new Ability()).filter(utl => utl.name === debugName).get(1)[0].getDescription() +'<br><br>'+
      new UtilityFactory(new Ability()).filter(utl => utl.name === debugName).get(1)[0].getDescription() +'<br><br>'+
      new UtilityFactory(new Ability()).filter(utl => utl.name === debugName).get(1)[0].getDescription() +'<br><br>'+
      new UtilityFactory(new Ability()).filter(utl => utl.name === debugName).get(1)[0].getDescription() +'<br><br>'
      */
  } 

  outputDiv.innerHTML = description;
};



