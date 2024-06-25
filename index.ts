import { Attack } from "./src/core/attack";
import { Modifier } from "./src/modifiers/modifier";
import { modifiers } from "./src/modifiers/modifiersSingleton"

//console.log(new Attack(''))
let att1 = new Attack();
att1.chance = 0.5;
att1.modifiers = [modifiers.get() as Modifier];
att1.range = 1;
att1.generate();
console.log(att1);

let att2 = new Attack();
att2.chance = 0.25
att2.modifiers = [modifiers.get() as Modifier];
att2.range = 1;
att2.generate();
//console.log(att2);

let att3 = new Attack();
att3.chance = 1;
att3.modifiers = [modifiers.get() as Modifier];
att3.range = 1;
att3.generate();
//console.log(att3);