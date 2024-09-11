"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./src/core/utils");
var utilityFactory_1 = require("./src/core/utilityFactory");
var characterContext_1 = require("./src/core/characterContext");
var ability_1 = require("./src/core/ability");
var randomNumberGenerator_1 = require("./src/core/randomNumberGenerator");
var attackFactory_1 = require("./src/core/attackFactory");
global.onSeedChange = function (val) {
    characterContext_1.CharacterContext.seed = val;
};
global.onLevelChange = function (val) {
    characterContext_1.CharacterContext.level = val;
    global.generateAbilities();
};
global.onClassChange = function (val) {
    characterContext_1.CharacterContext.classes = [
        Number(Object.keys(characterContext_1.CharacterContext.Class).find(function (cls) { return characterContext_1.CharacterContext.Class[cls] === val; }))
    ];
    global.generateAbilities();
};
global.generateAbilities = function () {
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
    var levelMode = characterContext_1.CharacterContext.level % 2;
    var description = '';
    if (levelMode === 1) {
        var factory1 = new attackFactory_1.AttackFactory(new ability_1.Ability()).get(2);
        var factory2 = new attackFactory_1.AttackFactory(new ability_1.Ability()).get(2);
        var att1 = factory1[0];
        var att2 = factory1[1];
        var att3 = factory2[0];
        var att4 = factory2[1];
        description = '<br>' +
            att1.getDescription() + '<br><br>' +
            att2.getDescription() + '<br><br>' +
            att3.getDescription() + '<br><br>' +
            att4.getDescription() + '<br><br>';
    }
    else if (levelMode === 0) {
        var utl = new utilityFactory_1.UtilityFactory(new ability_1.Ability()).get(4);
        description = '<br>' +
            utl[0].getDescription() + '<br><br>' +
            utl[1].getDescription() + '<br><br>' +
            utl[2].getDescription() + '<br><br>' +
            utl[3].getDescription() + '<br><br>';
        var debugName_1 = 'Entice Respect';
        description = '<br>' +
            new utilityFactory_1.UtilityFactory(new ability_1.Ability()).filter(function (utl) { return utl.name === debugName_1; }).get(1)[0].getDescription() + '<br><br>' +
            new utilityFactory_1.UtilityFactory(new ability_1.Ability()).filter(function (utl) { return utl.name === debugName_1; }).get(1)[0].getDescription() + '<br><br>' +
            new utilityFactory_1.UtilityFactory(new ability_1.Ability()).filter(function (utl) { return utl.name === debugName_1; }).get(1)[0].getDescription() + '<br><br>' +
            new utilityFactory_1.UtilityFactory(new ability_1.Ability()).filter(function (utl) { return utl.name === debugName_1; }).get(1)[0].getDescription() + '<br><br>';
    }
    outputDiv.innerHTML = description;
};
