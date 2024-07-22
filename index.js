"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var attack_1 = require("./src/core/attack");
//console.log(new Attack(''))
var att1 = new attack_1.Attack();
//att1.chance = 1;
//att1.modifiers = ModifierFactory.getAll().filter((x: any) => {return x.name.includes('Apply')}).get(1) as Modifier[];
//att1.range = 1;
//att1.damage = new DescriptiveNumber(15);
//att1.type = Attack.Type.Weapon;
att1.generate();
//console.dir(att1, { depth: null })
console.log(att1.getDescription());
/*
let att3 = new Attack();
att3.chance = 1;
att3.modifiers = [modifiers.get(1)[0] as Modifier];
att3.range = 1;
att3.generate();*/
//console.log(att3);
