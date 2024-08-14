"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var attack_1 = require("./src/core/attack");
var utils_1 = require("./src/core/utils");
var utilityFactory_1 = require("./src/core/utilityFactory");
var characterContext_1 = require("./src/core/characterContext");
var ability_1 = require("./src/core/ability");
var randomNumberGenerator_1 = require("./src/core/randomNumberGenerator");
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
global.onSeedChange = function (val) {
    characterContext_1.CharacterContext.seed = val;
};
global.onLevelChange = function (val) {
    characterContext_1.CharacterContext.level = val;
};
global.onClassChange = function (val) {
    characterContext_1.CharacterContext.classes = [Object.keys(characterContext_1.CharacterContext.Class).find(function (cls) { return characterContext_1.CharacterContext.Class[cls] === val; })];
    console.log(characterContext_1.CharacterContext.classes);
};
global.generateAbilities = function (val) {
    var currentSeed = '';
    if (characterContext_1.CharacterContext.seed) {
        currentSeed = characterContext_1.CharacterContext.seed;
    }
    else {
        currentSeed = '' + Math.random();
    }
    currentSeed += characterContext_1.CharacterContext.level + characterContext_1.CharacterContext.classes.join('');
    utils_1.Utils.gen = new randomNumberGenerator_1.RandomNumberGenerator(currentSeed);
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
    var utl = new utilityFactory_1.UtilityFactory(new ability_1.Ability()).get(1)[0];
    outputDiv.innerHTML = '<br>' +
        att1.getDescription() + '<br><br>' +
        att2.getDescription() + '<br><br>' +
        att3.getDescription() + '<br><br>' +
        utl.getDescription();
};
