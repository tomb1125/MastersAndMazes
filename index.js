"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var attack_1 = require("./src/core/attack");
//console.log(new Attack(''))
var att1 = new attack_1.Attack();
att1.chance = 0.5;
att1.range = 1;
att1.generate();
console.log(att1);
//let att2 = new Attack();
//att2.chance = 0.5
//att2.range = 1;
//att2.generate();
//console.log(att2);
//let att3 = new Attack();
//att3.chance = 0.8;
//att3.range = 1;
//att3.generate();
//console.log(att3);
