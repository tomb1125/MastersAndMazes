import { Attack } from "./src/core/attack";
import { Modifier } from "./src/modifiers/modifier";
import { Utils } from "./src/core/utils";
import { ModifierFactory } from "./src/modifiers/modifierFactory";
import { HasWeigth } from "./src/core/hasWeigth";
//console.log(new Attack(''))
let att1 = new Attack();
//att1.chance = 1;
att1.modifiers = [] as Modifier[]; //ModifierFactory.getAll().filter((x: any) => {return x.name.includes('Lifesteal')}).get(1) as Modifier[];
att1.range = 1;
att1.damage = 15;
att1.type = Attack.Type.Attack;
att1.generate();

//console.dir(att1, { depth: null })
console.log(att1.getDescription())

/*
let att3 = new Attack();
att3.chance = 1;
att3.modifiers = [modifiers.get(1)[0] as Modifier];
att3.range = 1;
att3.generate();*/
//console.log(att3);