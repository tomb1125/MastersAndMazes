"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var attack_1 = require("./src/core/attack");
var utilityFactory_1 = require("./src/core/utilityFactory");
var characterContext_1 = require("./src/core/characterContext");
//console.log(new Attack(''))
var att1 = new attack_1.Attack();
//att1.chance = 1;
//att1.modifiers = ModifierFactory.getAll().filter((x: any) => {return x.name.includes('Apply')}).get(1) as Modifier[];
att1.range = 1;
//att1.damage = new DescriptiveNumber(15);
att1.type = attack_1.Attack.Type.Spell;
att1.generate();
//console.dir(att1, { depth: null })
console.log(att1.getDescription());
var utl = utilityFactory_1.UtilityFactory.get(1)[0];
//console.log(utl.getDescription());
/*
let att3 = new Attack();
att3.chance = 1;
att3.modifiers = [modifiers.get(1)[0] as Modifier];
att3.range = 1;
att3.generate();*/
//console.log(att3);
global.onSeedChange = function (val) {
    //TODO seed randomness
};
global.onLevelChange = function (val) {
    characterContext_1.CharacterContext.level = val;
};
global.onClassChange = function (val) {
    characterContext_1.CharacterContext.class = Object.keys(characterContext_1.CharacterContext.Class).find(function (cls) { return characterContext_1.CharacterContext.Class[cls] === val; });
    console.log(characterContext_1.CharacterContext.class);
};
global.generateAbilities = function (val) {
    var outputDiv = document.getElementById('output');
    if (outputDiv == null) {
        throw 'null output';
    }
    var att1 = new attack_1.Attack();
    att1.generate();
    var att2 = new attack_1.Attack();
    att2.generate();
    var att3 = new attack_1.Attack();
    att3.generate();
    outputDiv.innerHTML = '<br>' +
        att1.getDescription() + '<br><br>' +
        att2.getDescription() + '<br><br>' +
        att3.getDescription() + '<br><br>';
};
