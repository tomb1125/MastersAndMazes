(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (global){(function (){
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

}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./src/core/ability":62,"./src/core/attackFactory":65,"./src/core/characterContext":72,"./src/core/randomNumberGenerator":74,"./src/core/utilityFactory":76,"./src/core/utils":94}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassDetails = void 0;
var ClassDetails = /** @class */ (function () {
    function ClassDetails() {
    }
    return ClassDetails;
}());
exports.ClassDetails = ClassDetails;

},{}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassUtils = void 0;
var characterContext_1 = require("../core/characterContext");
var cleric_1 = require("./classes/cleric");
var rogue_1 = require("./classes/rogue");
var fighter_1 = require("./classes/fighter");
var ClassUtils = /** @class */ (function () {
    function ClassUtils() {
    }
    ClassUtils.getClass = function (className) {
        if (className === 'Cleric') {
            return new cleric_1.ClericClass();
        }
        else if (className === 'Rogue') {
            return new rogue_1.RogueClass();
        }
        else if (className === 'Fighter') {
            return new fighter_1.FighterClass();
        }
        else {
            throw 'unsupported class ' + className;
        }
    };
    ClassUtils.SKILL_TO_ATTRIBUTE = new Map([
        [characterContext_1.CharacterContext.Skill.Athletics, characterContext_1.CharacterContext.Attribute.Strength],
        [characterContext_1.CharacterContext.Skill.Intimidation, characterContext_1.CharacterContext.Attribute.Strength],
        [characterContext_1.CharacterContext.Skill.Acrobatics, characterContext_1.CharacterContext.Attribute.Dexterity],
        [characterContext_1.CharacterContext.Skill.Stealth, characterContext_1.CharacterContext.Attribute.Dexterity],
        [characterContext_1.CharacterContext.Skill.Endurance, characterContext_1.CharacterContext.Attribute.Constitution],
        [characterContext_1.CharacterContext.Skill.Survival, characterContext_1.CharacterContext.Attribute.Constitution],
        [characterContext_1.CharacterContext.Skill.Knowledge, characterContext_1.CharacterContext.Attribute.Intelligence],
        [characterContext_1.CharacterContext.Skill.Crafting, characterContext_1.CharacterContext.Attribute.Intelligence],
        [characterContext_1.CharacterContext.Skill.Medicine, characterContext_1.CharacterContext.Attribute.Wisdom],
        [characterContext_1.CharacterContext.Skill.Perception, characterContext_1.CharacterContext.Attribute.Wisdom],
        [characterContext_1.CharacterContext.Skill.Persuasion, characterContext_1.CharacterContext.Attribute.Charisma],
        [characterContext_1.CharacterContext.Skill.Streetwise, characterContext_1.CharacterContext.Attribute.Charisma]
    ]);
    return ClassUtils;
}());
exports.ClassUtils = ClassUtils;

},{"../core/characterContext":72,"./classes/cleric":4,"./classes/fighter":5,"./classes/rogue":6}],4:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClericClass = void 0;
var characterContext_1 = require("../../core/characterContext");
var classDetails_1 = require("../classDetails");
var ClericClass = /** @class */ (function (_super) {
    __extends(ClericClass, _super);
    function ClericClass() {
        var _this = _super.call(this) || this;
        _this.type = characterContext_1.CharacterContext.Class.Cleric;
        _this.primaryAttribute = characterContext_1.CharacterContext.Attribute.Wisdom;
        _this.secondaryAttribute = characterContext_1.CharacterContext.Attribute.Charisma;
        _this.armorProficiency = characterContext_1.CharacterContext.ArmorProficiency.Heavy;
        return _this;
    }
    return ClericClass;
}(classDetails_1.ClassDetails));
exports.ClericClass = ClericClass;

},{"../../core/characterContext":72,"../classDetails":2}],5:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.FighterClass = void 0;
var characterContext_1 = require("../../core/characterContext");
var classDetails_1 = require("../classDetails");
var FighterClass = /** @class */ (function (_super) {
    __extends(FighterClass, _super);
    function FighterClass() {
        var _this = _super.call(this) || this;
        _this.type = characterContext_1.CharacterContext.Class.Rogue;
        _this.primaryAttribute = characterContext_1.CharacterContext.Attribute.Strength;
        _this.secondaryAttribute = characterContext_1.CharacterContext.Attribute.Constitution;
        _this.armorProficiency = characterContext_1.CharacterContext.ArmorProficiency.Heavy;
        return _this;
    }
    return FighterClass;
}(classDetails_1.ClassDetails));
exports.FighterClass = FighterClass;

},{"../../core/characterContext":72,"../classDetails":2}],6:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.RogueClass = void 0;
var characterContext_1 = require("../../core/characterContext");
var classDetails_1 = require("../classDetails");
var RogueClass = /** @class */ (function (_super) {
    __extends(RogueClass, _super);
    function RogueClass() {
        var _this = _super.call(this) || this;
        _this.type = characterContext_1.CharacterContext.Class.Rogue;
        _this.primaryAttribute = characterContext_1.CharacterContext.Attribute.Dexterity;
        _this.secondaryAttribute = characterContext_1.CharacterContext.Attribute.Intelligence;
        _this.armorProficiency = characterContext_1.CharacterContext.ArmorProficiency.Medium;
        return _this;
    }
    return RogueClass;
}(classDetails_1.ClassDetails));
exports.RogueClass = RogueClass;

},{"../../core/characterContext":72,"../classDetails":2}],7:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbilityObject = void 0;
var AbilityObject = /** @class */ (function () {
    function AbilityObject(name) {
        this.weight = function (x) { return 1; };
        this.isAnimal = false;
        this.isCommunication = false;
        this.isCorpse = false;
        this.isLight = false;
        this.isMovement = false;
        this.isPerson = false;
        this.isQuestion = false;
        this.isStealth = false;
        this.name = name;
    }
    return AbilityObject;
}());
exports.AbilityObject = AbilityObject;

},{}],8:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbilityObjectFactory = void 0;
var factory_1 = require("../core/factory");
var weightedList_1 = require("../core/weightedList");
//factory imports
var symetricTelepathyAbilityObject_1 = require("./abilityObjectRepository/symetricCommunications/symetricTelepathyAbilityObject");
var symetricEmpathicAbilityObject_1 = require("./abilityObjectRepository/symetricCommunications/symetricEmpathicAbilityObject");
var gainUnderstandingAbilityObject_1 = require("./abilityObjectRepository/symetricCommunications/gainUnderstandingAbilityObject");
var dreamConnectionAbilityObject_1 = require("./abilityObjectRepository/symetricCommunications/dreamConnectionAbilityObject");
var shadowStealthAbilityObject_1 = require("./abilityObjectRepository/stealth/shadowStealthAbilityObject");
var prowlingStealthAbilityObject_1 = require("./abilityObjectRepository/stealth/prowlingStealthAbilityObject");
var potionStealthAbilityObject_1 = require("./abilityObjectRepository/stealth/potionStealthAbilityObject");
var harmlessStealthAbilityObject_1 = require("./abilityObjectRepository/stealth/harmlessStealthAbilityObject");
var yesNoAbilityObject_1 = require("./abilityObjectRepository/questions/yesNoAbilityObject");
var oneWordAbilityObject_1 = require("./abilityObjectRepository/questions/oneWordAbilityObject");
var noeDetailedAbilityObject_1 = require("./abilityObjectRepository/questions/noeDetailedAbilityObject");
var detailedAbilityObject_1 = require("./abilityObjectRepository/questions/detailedAbilityObject");
var warriorHumanoidAbilityObject_1 = require("./abilityObjectRepository/persons/warriorHumanoidAbilityObject");
var scumHumanoidAbilityObject_1 = require("./abilityObjectRepository/persons/scumHumanoidAbilityObject");
var mageHumanoidAbilityObject_1 = require("./abilityObjectRepository/persons/mageHumanoidAbilityObject");
var humanoidAbilityObject_1 = require("./abilityObjectRepository/persons/humanoidAbilityObject");
var distractedHumanoidAbilityObject_1 = require("./abilityObjectRepository/persons/distractedHumanoidAbilityObject");
var straightMovementAbilityObject_1 = require("./abilityObjectRepository/movements/straightMovementAbilityObject");
var normalMovementAbilityObject_1 = require("./abilityObjectRepository/movements/normalMovementAbilityObject");
var chargeMovementAbilityObject_1 = require("./abilityObjectRepository/movements/chargeMovementAbilityObject");
var blinkMovementAbilityObject_1 = require("./abilityObjectRepository/movements/blinkMovementAbilityObject");
var agileMovementAbilityObject_1 = require("./abilityObjectRepository/movements/agileMovementAbilityObject");
var revealingLightAbilityObject_1 = require("./abilityObjectRepository/light/revealingLightAbilityObject");
var controllableLightAbilityObject_1 = require("./abilityObjectRepository/light/controllableLightAbilityObject");
var colorfulLightAbilityObject_1 = require("./abilityObjectRepository/light/colorfulLightAbilityObject");
var blindingLightAbilityObject_1 = require("./abilityObjectRepository/light/blindingLightAbilityObject");
var warriorCorpseAbilityObject_1 = require("./abilityObjectRepository/corpses/warriorCorpseAbilityObject");
var unfinishedBusinessAbilityObject_1 = require("./abilityObjectRepository/corpses/unfinishedBusinessAbilityObject");
var soulStealingAbilityObject_1 = require("./abilityObjectRepository/corpses/soulStealingAbilityObject");
var skeletonAbilityObject_1 = require("./abilityObjectRepository/corpses/skeletonAbilityObject");
var humanoidCorpseAbilityObject_1 = require("./abilityObjectRepository/corpses/humanoidCorpseAbilityObject");
var freshCorpseAbilityObject_1 = require("./abilityObjectRepository/corpses/freshCorpseAbilityObject");
var wildAbilityObject_1 = require("./abilityObjectRepository/animals/wildAbilityObject");
var reptileAbilityObject_1 = require("./abilityObjectRepository/animals/reptileAbilityObject");
var ratAbilityObject_1 = require("./abilityObjectRepository/animals/ratAbilityObject");
var magicalAbilityObject_1 = require("./abilityObjectRepository/animals/magicalAbilityObject");
var catAbilityObject_1 = require("./abilityObjectRepository/animals/catAbilityObject");
var birdAbilityObject_1 = require("./abilityObjectRepository/animals/birdAbilityObject");
var allAnimalsAbilityObject_1 = require("./abilityObjectRepository/animals/allAnimalsAbilityObject");
var AbilityObjectFactory = /** @class */ (function (_super) {
    __extends(AbilityObjectFactory, _super);
    function AbilityObjectFactory(affector, list) {
        var _this = _super.call(this, affector) || this;
        if (list === undefined) {
            _this.items = new weightedList_1.WeightedList();
            _this.items.push(new symetricTelepathyAbilityObject_1.symetricTelepathyAbilityObject());
            _this.items.push(new symetricEmpathicAbilityObject_1.symetricEmpathicAbilityObject());
            _this.items.push(new gainUnderstandingAbilityObject_1.gainUnderstandingAbilityObject());
            _this.items.push(new dreamConnectionAbilityObject_1.dreamConnectionAbilityObject());
            _this.items.push(new shadowStealthAbilityObject_1.shadowStealthAbilityObject());
            _this.items.push(new prowlingStealthAbilityObject_1.prowlingStealthAbilityObject());
            _this.items.push(new potionStealthAbilityObject_1.potionStealthAbilityObject());
            _this.items.push(new harmlessStealthAbilityObject_1.harmlessStealthAbilityObject());
            _this.items.push(new yesNoAbilityObject_1.yesNoAbilityObject());
            _this.items.push(new oneWordAbilityObject_1.oneWordAbilityObject());
            _this.items.push(new noeDetailedAbilityObject_1.noeDetailedAbilityObject());
            _this.items.push(new detailedAbilityObject_1.detailedAbilityObject());
            _this.items.push(new warriorHumanoidAbilityObject_1.warriorHumanoidAbilityObject());
            _this.items.push(new scumHumanoidAbilityObject_1.scumHumanoidAbilityObject());
            _this.items.push(new mageHumanoidAbilityObject_1.mageHumanoidAbilityObject());
            _this.items.push(new humanoidAbilityObject_1.humanoidAbilityObject());
            _this.items.push(new distractedHumanoidAbilityObject_1.distractedHumanoidAbilityObject());
            _this.items.push(new straightMovementAbilityObject_1.straightMovementAbilityObject());
            _this.items.push(new normalMovementAbilityObject_1.normalMovementAbilityObject());
            _this.items.push(new chargeMovementAbilityObject_1.chargeMovementAbilityObject());
            _this.items.push(new blinkMovementAbilityObject_1.blinkMovementAbilityObject());
            _this.items.push(new agileMovementAbilityObject_1.agileMovementAbilityObject());
            _this.items.push(new revealingLightAbilityObject_1.revealingLightAbilityObject());
            _this.items.push(new controllableLightAbilityObject_1.controllableLightAbilityObject());
            _this.items.push(new colorfulLightAbilityObject_1.colorfulLightAbilityObject());
            _this.items.push(new blindingLightAbilityObject_1.blindingLightAbilityObject());
            _this.items.push(new warriorCorpseAbilityObject_1.warriorCorpseAbilityObject());
            _this.items.push(new unfinishedBusinessAbilityObject_1.unfinishedBusinessAbilityObject());
            _this.items.push(new soulStealingAbilityObject_1.soulStealingAbilityObject());
            _this.items.push(new skeletonAbilityObject_1.skeletonAbilityObject());
            _this.items.push(new humanoidCorpseAbilityObject_1.humanoidCorpseAbilityObject());
            _this.items.push(new freshCorpseAbilityObject_1.freshCorpseAbilityObject());
            _this.items.push(new wildAbilityObject_1.wildAbilityObject());
            _this.items.push(new reptileAbilityObject_1.reptileAbilityObject());
            _this.items.push(new ratAbilityObject_1.ratAbilityObject());
            _this.items.push(new magicalAbilityObject_1.magicalAbilityObject());
            _this.items.push(new catAbilityObject_1.catAbilityObject());
            _this.items.push(new birdAbilityObject_1.birdAbilityObject());
            _this.items.push(new allAnimalsAbilityObject_1.allAnimalsAbilityObject());
        }
        else {
            _this.items = list;
        }
        return _this;
    }
    AbilityObjectFactory.prototype.get = function (count) {
        return _super.prototype.get.call(this, count);
    };
    AbilityObjectFactory.prototype.filter = function (z) {
        return _super.prototype.filter.call(this, z);
    };
    return AbilityObjectFactory;
}(factory_1.Factory));
exports.AbilityObjectFactory = AbilityObjectFactory;

},{"../core/factory":73,"../core/weightedList":95,"./abilityObjectRepository/animals/allAnimalsAbilityObject":9,"./abilityObjectRepository/animals/birdAbilityObject":10,"./abilityObjectRepository/animals/catAbilityObject":11,"./abilityObjectRepository/animals/magicalAbilityObject":12,"./abilityObjectRepository/animals/ratAbilityObject":13,"./abilityObjectRepository/animals/reptileAbilityObject":14,"./abilityObjectRepository/animals/wildAbilityObject":15,"./abilityObjectRepository/corpses/freshCorpseAbilityObject":16,"./abilityObjectRepository/corpses/humanoidCorpseAbilityObject":17,"./abilityObjectRepository/corpses/skeletonAbilityObject":18,"./abilityObjectRepository/corpses/soulStealingAbilityObject":19,"./abilityObjectRepository/corpses/unfinishedBusinessAbilityObject":20,"./abilityObjectRepository/corpses/warriorCorpseAbilityObject":21,"./abilityObjectRepository/light/blindingLightAbilityObject":22,"./abilityObjectRepository/light/colorfulLightAbilityObject":23,"./abilityObjectRepository/light/controllableLightAbilityObject":24,"./abilityObjectRepository/light/revealingLightAbilityObject":25,"./abilityObjectRepository/movements/agileMovementAbilityObject":26,"./abilityObjectRepository/movements/blinkMovementAbilityObject":27,"./abilityObjectRepository/movements/chargeMovementAbilityObject":28,"./abilityObjectRepository/movements/normalMovementAbilityObject":29,"./abilityObjectRepository/movements/straightMovementAbilityObject":30,"./abilityObjectRepository/persons/distractedHumanoidAbilityObject":31,"./abilityObjectRepository/persons/humanoidAbilityObject":32,"./abilityObjectRepository/persons/mageHumanoidAbilityObject":33,"./abilityObjectRepository/persons/scumHumanoidAbilityObject":34,"./abilityObjectRepository/persons/warriorHumanoidAbilityObject":35,"./abilityObjectRepository/questions/detailedAbilityObject":36,"./abilityObjectRepository/questions/noeDetailedAbilityObject":37,"./abilityObjectRepository/questions/oneWordAbilityObject":38,"./abilityObjectRepository/questions/yesNoAbilityObject":39,"./abilityObjectRepository/stealth/harmlessStealthAbilityObject":40,"./abilityObjectRepository/stealth/potionStealthAbilityObject":41,"./abilityObjectRepository/stealth/prowlingStealthAbilityObject":42,"./abilityObjectRepository/stealth/shadowStealthAbilityObject":43,"./abilityObjectRepository/symetricCommunications/dreamConnectionAbilityObject":44,"./abilityObjectRepository/symetricCommunications/gainUnderstandingAbilityObject":45,"./abilityObjectRepository/symetricCommunications/symetricEmpathicAbilityObject":46,"./abilityObjectRepository/symetricCommunications/symetricTelepathyAbilityObject":47}],9:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.allAnimalsAbilityObject = void 0;
var abilityObject_1 = require("../../abilityObject");
var allAnimalsAbilityObject = /** @class */ (function (_super) {
    __extends(allAnimalsAbilityObject, _super);
    function allAnimalsAbilityObject() {
        var _this = _super.call(this, 'AllAnimals') || this;
        _this.description = 'any animal';
        _this.rarity = 1;
        _this.weight = function () { return 3; };
        _this.prefix = 'Animal';
        _this.isAnimal = true;
        return _this;
    }
    return allAnimalsAbilityObject;
}(abilityObject_1.AbilityObject));
exports.allAnimalsAbilityObject = allAnimalsAbilityObject;

},{"../../abilityObject":7}],10:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.birdAbilityObject = void 0;
var abilityObject_1 = require("../../abilityObject");
var birdAbilityObject = /** @class */ (function (_super) {
    __extends(birdAbilityObject, _super);
    function birdAbilityObject() {
        var _this = _super.call(this, 'Bird') || this;
        _this.description = 'any bird';
        _this.rarity = 0.5;
        _this.prefix = 'Avian';
        _this.isAnimal = true;
        return _this;
    }
    return birdAbilityObject;
}(abilityObject_1.AbilityObject));
exports.birdAbilityObject = birdAbilityObject;

},{"../../abilityObject":7}],11:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.catAbilityObject = void 0;
var abilityObject_1 = require("../../abilityObject");
var catAbilityObject = /** @class */ (function (_super) {
    __extends(catAbilityObject, _super);
    function catAbilityObject() {
        var _this = _super.call(this, 'Cat') || this;
        _this.description = 'any feline';
        _this.rarity = 0.2;
        _this.prefix = 'Feline';
        _this.isAnimal = true;
        return _this;
    }
    return catAbilityObject;
}(abilityObject_1.AbilityObject));
exports.catAbilityObject = catAbilityObject;

},{"../../abilityObject":7}],12:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.magicalAbilityObject = void 0;
var abilityObject_1 = require("../../abilityObject");
var magicalAbilityObject = /** @class */ (function (_super) {
    __extends(magicalAbilityObject, _super);
    function magicalAbilityObject() {
        var _this = _super.call(this, 'Magical') || this;
        _this.description = 'any elemental, magical or otherwise enhanced animal';
        _this.rarity = 0.4;
        _this.prefix = 'Magical';
        _this.isAnimal = true;
        return _this;
    }
    return magicalAbilityObject;
}(abilityObject_1.AbilityObject));
exports.magicalAbilityObject = magicalAbilityObject;

},{"../../abilityObject":7}],13:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ratAbilityObject = void 0;
var abilityObject_1 = require("../../abilityObject");
var ratAbilityObject = /** @class */ (function (_super) {
    __extends(ratAbilityObject, _super);
    function ratAbilityObject() {
        var _this = _super.call(this, 'Rat') || this;
        _this.description = 'any rat or other rodent';
        _this.rarity = 0.3;
        _this.prefix = 'Rodent';
        _this.isAnimal = true;
        return _this;
    }
    return ratAbilityObject;
}(abilityObject_1.AbilityObject));
exports.ratAbilityObject = ratAbilityObject;

},{"../../abilityObject":7}],14:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.reptileAbilityObject = void 0;
var abilityObject_1 = require("../../abilityObject");
var reptileAbilityObject = /** @class */ (function (_super) {
    __extends(reptileAbilityObject, _super);
    function reptileAbilityObject() {
        var _this = _super.call(this, 'Reptile') || this;
        _this.description = 'any reptile or amphibian';
        _this.rarity = 0.4;
        _this.prefix = 'Reptile';
        _this.isAnimal = true;
        return _this;
    }
    return reptileAbilityObject;
}(abilityObject_1.AbilityObject));
exports.reptileAbilityObject = reptileAbilityObject;

},{"../../abilityObject":7}],15:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.wildAbilityObject = void 0;
var abilityObject_1 = require("../../abilityObject");
var wildAbilityObject = /** @class */ (function (_super) {
    __extends(wildAbilityObject, _super);
    function wildAbilityObject() {
        var _this = _super.call(this, 'Wild') || this;
        _this.description = 'any wild, not domesticated nor city, animal';
        _this.rarity = 0.7;
        _this.weight = function () { return 2; };
        _this.prefix = 'Wild';
        _this.isAnimal = true;
        return _this;
    }
    return wildAbilityObject;
}(abilityObject_1.AbilityObject));
exports.wildAbilityObject = wildAbilityObject;

},{"../../abilityObject":7}],16:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.freshCorpseAbilityObject = void 0;
var abilityObject_1 = require("../../abilityObject");
var freshCorpseAbilityObject = /** @class */ (function (_super) {
    __extends(freshCorpseAbilityObject, _super);
    function freshCorpseAbilityObject() {
        var _this = _super.call(this, 'Fresh Corpse') || this;
        _this.description = 'any fresh humanoid corpse (3 days or less)';
        _this.rarity = 1.1;
        _this.prefix = 'Fresh';
        _this.isCorpse = true;
        return _this;
    }
    return freshCorpseAbilityObject;
}(abilityObject_1.AbilityObject));
exports.freshCorpseAbilityObject = freshCorpseAbilityObject;

},{"../../abilityObject":7}],17:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.humanoidCorpseAbilityObject = void 0;
var abilityObject_1 = require("../../abilityObject");
var humanoidCorpseAbilityObject = /** @class */ (function (_super) {
    __extends(humanoidCorpseAbilityObject, _super);
    function humanoidCorpseAbilityObject() {
        var _this = _super.call(this, 'Humanoid Corpse') || this;
        _this.description = 'any humanoid corpse';
        _this.rarity = 1.4;
        _this.weight = function () { return 1.5; };
        _this.prefix = 'Humanoid';
        _this.isCorpse = true;
        return _this;
    }
    return humanoidCorpseAbilityObject;
}(abilityObject_1.AbilityObject));
exports.humanoidCorpseAbilityObject = humanoidCorpseAbilityObject;

},{"../../abilityObject":7}],18:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.skeletonAbilityObject = void 0;
var abilityObject_1 = require("../../abilityObject");
var skeletonAbilityObject = /** @class */ (function (_super) {
    __extends(skeletonAbilityObject, _super);
    function skeletonAbilityObject() {
        var _this = _super.call(this, 'Skeleton') || this;
        _this.description = 'any skeleton (humanoid who died at least 10 years ago)';
        _this.rarity = 0.7;
        _this.prefix = 'Skeleton';
        _this.isCorpse = true;
        return _this;
    }
    return skeletonAbilityObject;
}(abilityObject_1.AbilityObject));
exports.skeletonAbilityObject = skeletonAbilityObject;

},{"../../abilityObject":7}],19:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.soulStealingAbilityObject = void 0;
var abilityObject_1 = require("../../abilityObject");
var soulStealingAbilityObject = /** @class */ (function (_super) {
    __extends(soulStealingAbilityObject, _super);
    function soulStealingAbilityObject() {
        var _this = _super.call(this, 'Soul Steal') || this;
        _this.description = 'any person you killed or assisted in killing (they are intimidiated by you and will cooperate)';
        _this.rarity = 0.5;
        _this.prefix = 'Soul Stealing';
        _this.isCorpse = true;
        return _this;
    }
    return soulStealingAbilityObject;
}(abilityObject_1.AbilityObject));
exports.soulStealingAbilityObject = soulStealingAbilityObject;

},{"../../abilityObject":7}],20:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.unfinishedBusinessAbilityObject = void 0;
var abilityObject_1 = require("../../abilityObject");
var unfinishedBusinessAbilityObject = /** @class */ (function (_super) {
    __extends(unfinishedBusinessAbilityObject, _super);
    function unfinishedBusinessAbilityObject() {
        var _this = _super.call(this, 'Unfinished Business') || this;
        _this.description = 'any corpse of a person with unfinished business';
        _this.rarity = 1;
        _this.prefix = 'Completing';
        _this.isCorpse = true;
        return _this;
    }
    return unfinishedBusinessAbilityObject;
}(abilityObject_1.AbilityObject));
exports.unfinishedBusinessAbilityObject = unfinishedBusinessAbilityObject;

},{"../../abilityObject":7}],21:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.warriorCorpseAbilityObject = void 0;
var abilityObject_1 = require("../../abilityObject");
var warriorCorpseAbilityObject = /** @class */ (function (_super) {
    __extends(warriorCorpseAbilityObject, _super);
    function warriorCorpseAbilityObject() {
        var _this = _super.call(this, 'Warrior Corpse') || this;
        _this.description = 'any corpse of a warrior or someone with fighting spirit';
        _this.rarity = 0.8;
        _this.prefix = 'Warrior';
        _this.isCorpse = true;
        return _this;
    }
    return warriorCorpseAbilityObject;
}(abilityObject_1.AbilityObject));
exports.warriorCorpseAbilityObject = warriorCorpseAbilityObject;

},{"../../abilityObject":7}],22:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.blindingLightAbilityObject = void 0;
var abilityObject_1 = require("../../abilityObject");
var blindingLightAbilityObject = /** @class */ (function (_super) {
    __extends(blindingLightAbilityObject, _super);
    function blindingLightAbilityObject() {
        var _this = _super.call(this, 'Blinding') || this;
        _this.description = 'All enemies have 1 Bane for attack rolls in this area, this effect does not stack with any other Banes. ';
        _this.rarity = 4;
        _this.prefix = 'Blinding';
        _this.isLight = true;
        return _this;
    }
    return blindingLightAbilityObject;
}(abilityObject_1.AbilityObject));
exports.blindingLightAbilityObject = blindingLightAbilityObject;

},{"../../abilityObject":7}],23:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.colorfulLightAbilityObject = void 0;
var abilityObject_1 = require("../../abilityObject");
var colorfulLightAbilityObject = /** @class */ (function (_super) {
    __extends(colorfulLightAbilityObject, _super);
    function colorfulLightAbilityObject() {
        var _this = _super.call(this, 'Colorful') || this;
        _this.description = 'The light can have any color you want and you can change its color by swift action. ';
        _this.rarity = 1;
        _this.prefix = 'Colorful';
        _this.isLight = true;
        return _this;
    }
    return colorfulLightAbilityObject;
}(abilityObject_1.AbilityObject));
exports.colorfulLightAbilityObject = colorfulLightAbilityObject;

},{"../../abilityObject":7}],24:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.controllableLightAbilityObject = void 0;
var abilityObject_1 = require("../../abilityObject");
var controllableLightAbilityObject = /** @class */ (function (_super) {
    __extends(controllableLightAbilityObject, _super);
    function controllableLightAbilityObject() {
        var _this = _super.call(this, 'Controllable') || this;
        _this.description = 'The light can be moved by 10 meters, disabled or enabled, by a swift action. ';
        _this.rarity = 1.1;
        _this.prefix = 'Controllable';
        _this.isLight = true;
        return _this;
    }
    return controllableLightAbilityObject;
}(abilityObject_1.AbilityObject));
exports.controllableLightAbilityObject = controllableLightAbilityObject;

},{"../../abilityObject":7}],25:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.revealingLightAbilityObject = void 0;
var abilityObject_1 = require("../../abilityObject");
var revealingLightAbilityObject = /** @class */ (function (_super) {
    __extends(revealingLightAbilityObject, _super);
    function revealingLightAbilityObject() {
        var _this = _super.call(this, 'Revealing') || this;
        _this.description = 'The light reveals invisible creatures and illussions. ';
        _this.rarity = 1.4;
        _this.prefix = 'Revealing';
        _this.isLight = true;
        return _this;
    }
    return revealingLightAbilityObject;
}(abilityObject_1.AbilityObject));
exports.revealingLightAbilityObject = revealingLightAbilityObject;

},{"../../abilityObject":7}],26:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.agileMovementAbilityObject = void 0;
var abilityObject_1 = require("../../abilityObject");
var agileMovementAbilityObject = /** @class */ (function (_super) {
    __extends(agileMovementAbilityObject, _super);
    function agileMovementAbilityObject() {
        var _this = _super.call(this, 'Agile Movement') || this;
        _this.description = 'As part of this movement you can jump and climb on any surface. ';
        _this.rarity = 1.2;
        _this.weight = function () { return 1; };
        _this.prefix = 'Straigth';
        _this.isMovement = true;
        return _this;
    }
    return agileMovementAbilityObject;
}(abilityObject_1.AbilityObject));
exports.agileMovementAbilityObject = agileMovementAbilityObject;

},{"../../abilityObject":7}],27:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.blinkMovementAbilityObject = void 0;
var abilityObject_1 = require("../../abilityObject");
var blinkMovementAbilityObject = /** @class */ (function (_super) {
    __extends(blinkMovementAbilityObject, _super);
    function blinkMovementAbilityObject() {
        var _this = _super.call(this, 'Blink Movement') || this;
        _this.description = 'Instead of moving you can teleport directly to destination. ';
        _this.rarity = 1.3;
        _this.weight = function () { return 1; };
        _this.prefix = 'Blink';
        _this.isMovement = true;
        return _this;
    }
    return blinkMovementAbilityObject;
}(abilityObject_1.AbilityObject));
exports.blinkMovementAbilityObject = blinkMovementAbilityObject;

},{"../../abilityObject":7}],28:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.chargeMovementAbilityObject = void 0;
var abilityObject_1 = require("../../abilityObject");
var chargeMovementAbilityObject = /** @class */ (function (_super) {
    __extends(chargeMovementAbilityObject, _super);
    function chargeMovementAbilityObject() {
        var _this = _super.call(this, 'Charge Movement') || this;
        _this.description = 'During movement you can push each adjacent enemy 2 squares. ';
        _this.rarity = 1.2;
        _this.weight = function () { return 1; };
        _this.prefix = 'Powerful';
        _this.isMovement = true;
        return _this;
    }
    return chargeMovementAbilityObject;
}(abilityObject_1.AbilityObject));
exports.chargeMovementAbilityObject = chargeMovementAbilityObject;

},{"../../abilityObject":7}],29:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalMovementAbilityObject = void 0;
var abilityObject_1 = require("../../abilityObject");
var normalMovementAbilityObject = /** @class */ (function (_super) {
    __extends(normalMovementAbilityObject, _super);
    function normalMovementAbilityObject() {
        var _this = _super.call(this, 'Normal Movement') || this;
        _this.description = '';
        _this.rarity = 1;
        _this.weight = function () { return 1; };
        _this.prefix = '';
        _this.isMovement = true;
        return _this;
    }
    return normalMovementAbilityObject;
}(abilityObject_1.AbilityObject));
exports.normalMovementAbilityObject = normalMovementAbilityObject;

},{"../../abilityObject":7}],30:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.straightMovementAbilityObject = void 0;
var abilityObject_1 = require("../../abilityObject");
var straightMovementAbilityObject = /** @class */ (function (_super) {
    __extends(straightMovementAbilityObject, _super);
    function straightMovementAbilityObject() {
        var _this = _super.call(this, 'Straigth Movement') || this;
        _this.description = 'This movement must be made in a straigth line. ';
        _this.rarity = 0.9;
        _this.weight = function () { return 1; };
        _this.prefix = 'Straigth';
        _this.isMovement = true;
        return _this;
    }
    return straightMovementAbilityObject;
}(abilityObject_1.AbilityObject));
exports.straightMovementAbilityObject = straightMovementAbilityObject;

},{"../../abilityObject":7}],31:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.distractedHumanoidAbilityObject = void 0;
var abilityObject_1 = require("../../abilityObject");
var distractedHumanoidAbilityObject = /** @class */ (function (_super) {
    __extends(distractedHumanoidAbilityObject, _super);
    function distractedHumanoidAbilityObject() {
        var _this = _super.call(this, 'Distracted Humanoid') || this;
        _this.description = 'any distracted humanoid';
        _this.rarity = 1.2;
        _this.prefix = 'Distracted';
        _this.isPerson = true;
        return _this;
    }
    return distractedHumanoidAbilityObject;
}(abilityObject_1.AbilityObject));
exports.distractedHumanoidAbilityObject = distractedHumanoidAbilityObject;

},{"../../abilityObject":7}],32:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.humanoidAbilityObject = void 0;
var abilityObject_1 = require("../../abilityObject");
var humanoidAbilityObject = /** @class */ (function (_super) {
    __extends(humanoidAbilityObject, _super);
    function humanoidAbilityObject() {
        var _this = _super.call(this, 'Humanoid') || this;
        _this.description = 'any humanoid';
        _this.rarity = 1.6;
        _this.weight = function () { return 1.5; };
        _this.prefix = 'Common';
        _this.isPerson = true;
        return _this;
    }
    return humanoidAbilityObject;
}(abilityObject_1.AbilityObject));
exports.humanoidAbilityObject = humanoidAbilityObject;

},{"../../abilityObject":7}],33:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.mageHumanoidAbilityObject = void 0;
var abilityObject_1 = require("../../abilityObject");
var mageHumanoidAbilityObject = /** @class */ (function (_super) {
    __extends(mageHumanoidAbilityObject, _super);
    function mageHumanoidAbilityObject() {
        var _this = _super.call(this, 'Mage') || this;
        _this.description = 'any mage, cleric or practicioner of magic';
        _this.rarity = 0.8;
        _this.prefix = 'Mage';
        _this.isPerson = true;
        return _this;
    }
    return mageHumanoidAbilityObject;
}(abilityObject_1.AbilityObject));
exports.mageHumanoidAbilityObject = mageHumanoidAbilityObject;

},{"../../abilityObject":7}],34:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.scumHumanoidAbilityObject = void 0;
var abilityObject_1 = require("../../abilityObject");
var scumHumanoidAbilityObject = /** @class */ (function (_super) {
    __extends(scumHumanoidAbilityObject, _super);
    function scumHumanoidAbilityObject() {
        var _this = _super.call(this, 'Scum') || this;
        _this.description = 'any citizen, peasant, thief or someone of lower standing';
        _this.rarity = 0.7;
        _this.prefix = 'Lowly';
        _this.isPerson = true;
        return _this;
    }
    return scumHumanoidAbilityObject;
}(abilityObject_1.AbilityObject));
exports.scumHumanoidAbilityObject = scumHumanoidAbilityObject;

},{"../../abilityObject":7}],35:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.warriorHumanoidAbilityObject = void 0;
var abilityObject_1 = require("../../abilityObject");
var warriorHumanoidAbilityObject = /** @class */ (function (_super) {
    __extends(warriorHumanoidAbilityObject, _super);
    function warriorHumanoidAbilityObject() {
        var _this = _super.call(this, 'Warrior') || this;
        _this.description = 'any warrior, soldier or someone of martial abilities';
        _this.rarity = 0.8;
        _this.prefix = 'Warrior';
        _this.isPerson = true;
        return _this;
    }
    return warriorHumanoidAbilityObject;
}(abilityObject_1.AbilityObject));
exports.warriorHumanoidAbilityObject = warriorHumanoidAbilityObject;

},{"../../abilityObject":7}],36:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.detailedAbilityObject = void 0;
var abilityObject_1 = require("../../abilityObject");
var detailedAbilityObject = /** @class */ (function (_super) {
    __extends(detailedAbilityObject, _super);
    function detailedAbilityObject() {
        var _this = _super.call(this, 'Detailed') || this;
        _this.description = 'Questions are answered truthfully, in one or two sentences including details you should be interested in. ';
        _this.rarity = 3;
        _this.prefix = 'Detailed';
        _this.isQuestion = true;
        return _this;
    }
    return detailedAbilityObject;
}(abilityObject_1.AbilityObject));
exports.detailedAbilityObject = detailedAbilityObject;

},{"../../abilityObject":7}],37:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.noeDetailedAbilityObject = void 0;
var abilityObject_1 = require("../../abilityObject");
var noeDetailedAbilityObject = /** @class */ (function (_super) {
    __extends(noeDetailedAbilityObject, _super);
    function noeDetailedAbilityObject() {
        var _this = _super.call(this, 'Noe') || this;
        _this.description = 'Questions are answered truthfully in one sentence, but only if question does not contain letter "e". ';
        _this.rarity = 0.7;
        _this.prefix = 'Noe';
        _this.isQuestion = true;
        return _this;
    }
    return noeDetailedAbilityObject;
}(abilityObject_1.AbilityObject));
exports.noeDetailedAbilityObject = noeDetailedAbilityObject;

},{"../../abilityObject":7}],38:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.oneWordAbilityObject = void 0;
var abilityObject_1 = require("../../abilityObject");
var oneWordAbilityObject = /** @class */ (function (_super) {
    __extends(oneWordAbilityObject, _super);
    function oneWordAbilityObject() {
        var _this = _super.call(this, 'One Word') || this;
        _this.description = 'Your question cannot be a yes/no question and will be answered truthfully with one word. ';
        _this.rarity = 0.9;
        _this.prefix = 'One Word';
        _this.isQuestion = true;
        return _this;
    }
    return oneWordAbilityObject;
}(abilityObject_1.AbilityObject));
exports.oneWordAbilityObject = oneWordAbilityObject;

},{"../../abilityObject":7}],39:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.yesNoAbilityObject = void 0;
var abilityObject_1 = require("../../abilityObject");
var yesNoAbilityObject = /** @class */ (function (_super) {
    __extends(yesNoAbilityObject, _super);
    function yesNoAbilityObject() {
        var _this = _super.call(this, 'Yes/No') || this;
        _this.description = 'Questions must be a Yes or No question, but will be answered truthfully. ';
        _this.rarity = 1.2;
        _this.prefix = 'Yes/No';
        _this.isQuestion = true;
        return _this;
    }
    return yesNoAbilityObject;
}(abilityObject_1.AbilityObject));
exports.yesNoAbilityObject = yesNoAbilityObject;

},{"../../abilityObject":7}],40:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.harmlessStealthAbilityObject = void 0;
var abilityObject_1 = require("../../abilityObject");
var harmlessStealthAbilityObject = /** @class */ (function (_super) {
    __extends(harmlessStealthAbilityObject, _super);
    function harmlessStealthAbilityObject() {
        var _this = _super.call(this, 'Harmless Stealth') || this;
        _this.description = 'First attack you make within 10 minutes of using this ability has 3 Banes. ';
        _this.rarity = 0.7;
        _this.prefix = 'Harmless';
        _this.isStealth = true;
        return _this;
    }
    return harmlessStealthAbilityObject;
}(abilityObject_1.AbilityObject));
exports.harmlessStealthAbilityObject = harmlessStealthAbilityObject;

},{"../../abilityObject":7}],41:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.potionStealthAbilityObject = void 0;
var abilityObject_1 = require("../../abilityObject");
var potionStealthAbilityObject = /** @class */ (function (_super) {
    __extends(potionStealthAbilityObject, _super);
    function potionStealthAbilityObject() {
        var _this = _super.call(this, 'Potion Stealth') || this;
        _this.description = 'You must drink special Invisibility Potion before using this ability (additional uses from Repeatable modifier do not require this). Each costs 10G and is a rare consumable. When you add this ability to your character gain 5 such potions. ';
        _this.rarity = 1;
        _this.prefix = 'Potion';
        _this.isStealth = true;
        return _this;
    }
    return potionStealthAbilityObject;
}(abilityObject_1.AbilityObject));
exports.potionStealthAbilityObject = potionStealthAbilityObject;

},{"../../abilityObject":7}],42:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.prowlingStealthAbilityObject = void 0;
var abilityObject_1 = require("../../abilityObject");
var prowlingStealthAbilityObject = /** @class */ (function (_super) {
    __extends(prowlingStealthAbilityObject, _super);
    function prowlingStealthAbilityObject() {
        var _this = _super.call(this, 'Prowling Stealth') || this;
        _this.description = 'First attack you make within 10 minutes of using this ability deals +10 bonus damage. ';
        _this.rarity = 1.6;
        _this.prefix = 'Prowling';
        _this.isStealth = true;
        return _this;
    }
    return prowlingStealthAbilityObject;
}(abilityObject_1.AbilityObject));
exports.prowlingStealthAbilityObject = prowlingStealthAbilityObject;

},{"../../abilityObject":7}],43:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.shadowStealthAbilityObject = void 0;
var abilityObject_1 = require("../../abilityObject");
var shadowStealthAbilityObject = /** @class */ (function (_super) {
    __extends(shadowStealthAbilityObject, _super);
    function shadowStealthAbilityObject() {
        var _this = _super.call(this, 'Shadow Stealth') || this;
        _this.description = 'Any bright light immiedietly reveals you (one torch is not enough to well lit area though). ';
        _this.rarity = 1.4;
        _this.prefix = 'Dark';
        _this.isStealth = true;
        return _this;
    }
    return shadowStealthAbilityObject;
}(abilityObject_1.AbilityObject));
exports.shadowStealthAbilityObject = shadowStealthAbilityObject;

},{"../../abilityObject":7}],44:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.dreamConnectionAbilityObject = void 0;
var abilityObject_1 = require("../../abilityObject");
var dreamConnectionAbilityObject = /** @class */ (function (_super) {
    __extends(dreamConnectionAbilityObject, _super);
    function dreamConnectionAbilityObject() {
        var _this = _super.call(this, 'Dream Connection') || this;
        _this.description = 'Upon casting the spell seemingly has no effect, but you will see the target in your dream tonight, and then you will be able to talk. ';
        _this.rarity = 0.6;
        _this.prefix = 'Dream Connecting';
        _this.isCommunication = true;
        return _this;
    }
    return dreamConnectionAbilityObject;
}(abilityObject_1.AbilityObject));
exports.dreamConnectionAbilityObject = dreamConnectionAbilityObject;

},{"../../abilityObject":7}],45:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.gainUnderstandingAbilityObject = void 0;
var abilityObject_1 = require("../../abilityObject");
var gainUnderstandingAbilityObject = /** @class */ (function (_super) {
    __extends(gainUnderstandingAbilityObject, _super);
    function gainUnderstandingAbilityObject() {
        var _this = _super.call(this, 'Gain Understanding') || this;
        _this.description = 'For the duration you can both speak in your languages, yet you can understand each other. ';
        _this.rarity = 1;
        _this.prefix = 'Polyglotic';
        _this.isCommunication = true;
        return _this;
    }
    return gainUnderstandingAbilityObject;
}(abilityObject_1.AbilityObject));
exports.gainUnderstandingAbilityObject = gainUnderstandingAbilityObject;

},{"../../abilityObject":7}],46:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.symetricEmpathicAbilityObject = void 0;
var abilityObject_1 = require("../../abilityObject");
var symetricEmpathicAbilityObject = /** @class */ (function (_super) {
    __extends(symetricEmpathicAbilityObject, _super);
    function symetricEmpathicAbilityObject() {
        var _this = _super.call(this, 'Symetric Empathy') || this;
        _this.description = 'For the duration you can sense and send emotions to each other as long as you\' re close to each other. ';
        _this.rarity = 0.8;
        _this.prefix = 'Empathic';
        _this.isCommunication = true;
        return _this;
    }
    return symetricEmpathicAbilityObject;
}(abilityObject_1.AbilityObject));
exports.symetricEmpathicAbilityObject = symetricEmpathicAbilityObject;

},{"../../abilityObject":7}],47:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.symetricTelepathyAbilityObject = void 0;
var abilityObject_1 = require("../../abilityObject");
var symetricTelepathyAbilityObject = /** @class */ (function (_super) {
    __extends(symetricTelepathyAbilityObject, _super);
    function symetricTelepathyAbilityObject() {
        var _this = _super.call(this, 'Symetric Telepathy') || this;
        _this.description = 'For the duration you can read each other minds as long as you\'re close to each other. ';
        _this.rarity = 1.2;
        _this.prefix = 'Telepathic';
        _this.isCommunication = true;
        return _this;
    }
    return symetricTelepathyAbilityObject;
}(abilityObject_1.AbilityObject));
exports.symetricTelepathyAbilityObject = symetricTelepathyAbilityObject;

},{"../../abilityObject":7}],48:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescriptiveNumber = void 0;
var DescriptiveNumber = /** @class */ (function () {
    function DescriptiveNumber(value) {
        this.type = DescriptiveNumber.Type.Common;
        this.weight = function (x) { return 1; };
        this.value = value == undefined ? 0 : value;
    }
    DescriptiveNumber.prototype.getDescription = function () {
        if (this.description) {
            if (this.bonus) {
                return (this.multiplier ? this.multiplier + 'x ' : '') + this.description + (this.bonus >= 0 ? ' + ' : ' ') + Math.ceil(this.bonus);
            }
            else {
                return (this.multiplier ? this.multiplier + 'x ' : '') + this.description;
            }
        }
        if (this.value) {
            return (this.multiplier ? this.multiplier : 1) * this.value + (this.bonus ? Math.ceil(this.bonus) : 0);
        }
        throw 'Undefined Descriptive Number Error';
    };
    DescriptiveNumber.prototype.getValue = function () {
        var bonus = this.bonus ? this.bonus : 0;
        var multiplier = this.multiplier ? this.multiplier : 1;
        return multiplier * this.value + bonus;
    };
    DescriptiveNumber.prototype.getLowValue = function () {
        var lowValue = this.lowValue ? this.lowValue : this.value;
        var multiplier = this.multiplier ? this.multiplier : 1;
        var bonus = this.bonus ? this.bonus : 0;
        return multiplier * lowValue + bonus;
    };
    DescriptiveNumber.prototype.addBonus = function (val) {
        if (this.bonus === undefined) {
            this.bonus = 0;
        }
        this.bonus += val;
    };
    DescriptiveNumber.prototype.addMultiplier = function (val) {
        if (this.multiplier === undefined) {
            this.multiplier = 1;
        }
        this.multiplier += val;
    };
    DescriptiveNumber.prototype.compensate = function () {
        if (!this.bonus) {
            return;
        }
        if (this.bonus >= this.value && this.value > 0) {
            this.bonus -= this.value;
            this.addMultiplier(1);
            this.compensate();
        }
    };
    return DescriptiveNumber;
}());
exports.DescriptiveNumber = DescriptiveNumber;
(function (DescriptiveNumber) {
    var Type;
    (function (Type) {
        Type[Type["Common"] = 0] = "Common";
        Type[Type["Range"] = 1] = "Range";
        Type[Type["Small"] = 2] = "Small";
        Type[Type["UtilityDuration"] = 3] = "UtilityDuration";
    })(Type = DescriptiveNumber.Type || (DescriptiveNumber.Type = {}));
})(DescriptiveNumber || (exports.DescriptiveNumber = DescriptiveNumber = {}));

},{}],49:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescriptiveNumberFactory = void 0;
var weightedList_1 = require("../core/weightedList");
var factory_1 = require("../core/factory");
//factory imports
var adjacentEnemiesDescriptiveNumber_1 = require("./descriptiveNumberRepository/small/adjacentEnemiesDescriptiveNumber");
var potionsDrankDescriptiveNumber_1 = require("./descriptiveNumberRepository/potionsDrankDescriptiveNumber");
var numberOfTurnsDescriptiveNumber_1 = require("./descriptiveNumberRepository/numberOfTurnsDescriptiveNumber");
var numberOfScarsDescriptiveNumber_1 = require("./descriptiveNumberRepository/numberOfScarsDescriptiveNumber");
var numberOfRalliesDescriptiveNumber_1 = require("./descriptiveNumberRepository/numberOfRalliesDescriptiveNumber");
var minimumDistanceDescriptiveNumber_1 = require("./descriptiveNumberRepository/minimumDistanceDescriptiveNumber");
var maximumDistanceDescriptiveNumber_1 = require("./descriptiveNumberRepository/maximumDistanceDescriptiveNumber");
var oneHourDescriptiveNumber_1 = require("./descriptiveNumberRepository/duration/oneHourDescriptiveNumber");
var d4MinuteDescriptiveNumber_1 = require("./descriptiveNumberRepository/duration/d4MinuteDescriptiveNumber");
var damageTakenDescriptiveNumber_1 = require("./descriptiveNumberRepository/damageTakenDescriptiveNumber");
var currentHealthDescriptiveNumber_1 = require("./descriptiveNumberRepository/currentHealthDescriptiveNumber");
var assassinDescriptiveNumber_1 = require("./descriptiveNumberRepository/assassinDescriptiveNumber");
var DescriptiveNumberFactory = /** @class */ (function (_super) {
    __extends(DescriptiveNumberFactory, _super);
    function DescriptiveNumberFactory(affector, list) {
        var _this = _super.call(this, affector) || this;
        if (list === undefined) {
            _this.items = new weightedList_1.WeightedList();
            _this.items.push(new adjacentEnemiesDescriptiveNumber_1.adjacentEnemiesDescriptiveNumber());
            _this.items.push(new potionsDrankDescriptiveNumber_1.potionsDrankDescriptiveNumber());
            _this.items.push(new numberOfTurnsDescriptiveNumber_1.numberOfTurnsDescriptiveNumber());
            _this.items.push(new numberOfScarsDescriptiveNumber_1.numberOfScarsDescriptiveNumber());
            _this.items.push(new numberOfRalliesDescriptiveNumber_1.numberOfRalliesDescriptiveNumber());
            _this.items.push(new minimumDistanceDescriptiveNumber_1.minimumDistanceDescriptiveNumber());
            _this.items.push(new maximumDistanceDescriptiveNumber_1.maximumDistanceDescriptiveNumber());
            _this.items.push(new oneHourDescriptiveNumber_1.oneHourDescriptiveNumber());
            _this.items.push(new d4MinuteDescriptiveNumber_1.d4MinuteDescriptiveNumber());
            _this.items.push(new damageTakenDescriptiveNumber_1.damageTakenDescriptiveNumber());
            _this.items.push(new currentHealthDescriptiveNumber_1.currentHealthDescriptiveNumber());
            _this.items.push(new assassinDescriptiveNumber_1.assassinDescriptiveNumber());
        }
        else {
            _this.items = list;
        }
        return _this;
    }
    DescriptiveNumberFactory.prototype.get = function (count) {
        return _super.prototype.get.call(this, count);
    };
    DescriptiveNumberFactory.prototype.filter = function (z) {
        return _super.prototype.filter.call(this, z);
    };
    return DescriptiveNumberFactory;
}(factory_1.Factory));
exports.DescriptiveNumberFactory = DescriptiveNumberFactory;

},{"../core/factory":73,"../core/weightedList":95,"./descriptiveNumberRepository/assassinDescriptiveNumber":50,"./descriptiveNumberRepository/currentHealthDescriptiveNumber":51,"./descriptiveNumberRepository/damageTakenDescriptiveNumber":52,"./descriptiveNumberRepository/duration/d4MinuteDescriptiveNumber":53,"./descriptiveNumberRepository/duration/oneHourDescriptiveNumber":54,"./descriptiveNumberRepository/maximumDistanceDescriptiveNumber":55,"./descriptiveNumberRepository/minimumDistanceDescriptiveNumber":56,"./descriptiveNumberRepository/numberOfRalliesDescriptiveNumber":57,"./descriptiveNumberRepository/numberOfScarsDescriptiveNumber":58,"./descriptiveNumberRepository/numberOfTurnsDescriptiveNumber":59,"./descriptiveNumberRepository/potionsDrankDescriptiveNumber":60,"./descriptiveNumberRepository/small/adjacentEnemiesDescriptiveNumber":61}],50:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.assassinDescriptiveNumber = void 0;
var utils_1 = require("../../core/utils");
var descriptiveNumber_1 = require("../descriptiveNumber");
var assassinDescriptiveNumber = /** @class */ (function (_super) {
    __extends(assassinDescriptiveNumber, _super);
    function assassinDescriptiveNumber(value) {
        var _this = _super.call(this, utils_1.Utils.AVG_ENEMIES_PER_PLAYER * 1.5) || this;
        _this.prefix = 'Killers';
        _this.lowValue = 0;
        _this.description = 'the number of enemies you defeated today';
        _this.type = descriptiveNumber_1.DescriptiveNumber.Type.Common;
        _this.name = 'assassin';
        return _this;
    }
    return assassinDescriptiveNumber;
}(descriptiveNumber_1.DescriptiveNumber));
exports.assassinDescriptiveNumber = assassinDescriptiveNumber;

},{"../../core/utils":94,"../descriptiveNumber":48}],51:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.currentHealthDescriptiveNumber = void 0;
var utils_1 = require("../../core/utils");
var descriptiveNumber_1 = require("../descriptiveNumber");
var currentHealthDescriptiveNumber = /** @class */ (function (_super) {
    __extends(currentHealthDescriptiveNumber, _super);
    function currentHealthDescriptiveNumber(value) {
        var _this = _super.call(this, utils_1.Utils.avgHealth) || this;
        _this.prefix = 'Vital';
        _this.lowValue = 1;
        _this.description = 'your current health';
        _this.type = descriptiveNumber_1.DescriptiveNumber.Type.Common;
        return _this;
    }
    return currentHealthDescriptiveNumber;
}(descriptiveNumber_1.DescriptiveNumber));
exports.currentHealthDescriptiveNumber = currentHealthDescriptiveNumber;

},{"../../core/utils":94,"../descriptiveNumber":48}],52:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.damageTakenDescriptiveNumber = void 0;
var utils_1 = require("../../core/utils");
var descriptiveNumber_1 = require("../descriptiveNumber");
var damageTakenDescriptiveNumber = /** @class */ (function (_super) {
    __extends(damageTakenDescriptiveNumber, _super);
    function damageTakenDescriptiveNumber(value) {
        var _this = _super.call(this, utils_1.Utils.avgHealth - 1) || this;
        _this.prefix = 'Enraged';
        _this.lowValue = 0;
        _this.description = 'your current damage taken';
        _this.type = descriptiveNumber_1.DescriptiveNumber.Type.Common;
        return _this;
    }
    return damageTakenDescriptiveNumber;
}(descriptiveNumber_1.DescriptiveNumber));
exports.damageTakenDescriptiveNumber = damageTakenDescriptiveNumber;

},{"../../core/utils":94,"../descriptiveNumber":48}],53:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.d4MinuteDescriptiveNumber = void 0;
var utils_1 = require("../../../core/utils");
var descriptiveNumber_1 = require("../../descriptiveNumber");
var d4MinuteDescriptiveNumber = /** @class */ (function (_super) {
    __extends(d4MinuteDescriptiveNumber, _super);
    function d4MinuteDescriptiveNumber(value) {
        var _this = _super.call(this, value) || this;
        var initValue = [1, 5, 10].sort(function () { return 0.5 - utils_1.Utils.random(); })[0];
        _this.value = (initValue + 5) / 15;
        _this.type = descriptiveNumber_1.DescriptiveNumber.Type.UtilityDuration;
        _this.name = 'D4 Minutes';
        _this.description = initValue + (initValue === 1 ? ' minute' : ' minutes');
        return _this;
    }
    return d4MinuteDescriptiveNumber;
}(descriptiveNumber_1.DescriptiveNumber));
exports.d4MinuteDescriptiveNumber = d4MinuteDescriptiveNumber;

},{"../../../core/utils":94,"../../descriptiveNumber":48}],54:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.oneHourDescriptiveNumber = void 0;
var descriptiveNumber_1 = require("../../descriptiveNumber");
var oneHourDescriptiveNumber = /** @class */ (function (_super) {
    __extends(oneHourDescriptiveNumber, _super);
    function oneHourDescriptiveNumber(value) {
        var _this = _super.call(this, value) || this;
        _this.prefix = 'Hourly';
        _this.value = 2;
        _this.description = 'one hour';
        _this.type = descriptiveNumber_1.DescriptiveNumber.Type.UtilityDuration;
        _this.name = 'One Hour';
        return _this;
    }
    return oneHourDescriptiveNumber;
}(descriptiveNumber_1.DescriptiveNumber));
exports.oneHourDescriptiveNumber = oneHourDescriptiveNumber;

},{"../../descriptiveNumber":48}],55:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.maximumDistanceDescriptiveNumber = void 0;
var utils_1 = require("../../core/utils");
var descriptiveNumber_1 = require("../descriptiveNumber");
var maximumDistanceDescriptiveNumber = /** @class */ (function (_super) {
    __extends(maximumDistanceDescriptiveNumber, _super);
    function maximumDistanceDescriptiveNumber(value) {
        var _this = _super.call(this, utils_1.Utils.AVG_LONGEST_DISTANCE) || this;
        _this.prefix = 'Runners';
        _this.lowValue = 1;
        _this.description = 'the distance to your starting location in this combat';
        _this.type = descriptiveNumber_1.DescriptiveNumber.Type.Common;
        return _this;
    }
    return maximumDistanceDescriptiveNumber;
}(descriptiveNumber_1.DescriptiveNumber));
exports.maximumDistanceDescriptiveNumber = maximumDistanceDescriptiveNumber;

},{"../../core/utils":94,"../descriptiveNumber":48}],56:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.minimumDistanceDescriptiveNumber = void 0;
var utils_1 = require("../../core/utils");
var descriptiveNumber_1 = require("../descriptiveNumber");
var minimumDistanceDescriptiveNumber = /** @class */ (function (_super) {
    __extends(minimumDistanceDescriptiveNumber, _super);
    function minimumDistanceDescriptiveNumber(value) {
        var _this = _super.call(this, utils_1.Utils.AVG_CLOSTEST_DISTANCE) || this;
        _this.prefix = 'Loners';
        _this.lowValue = 1;
        _this.description = 'the distance to the closest ally in combat';
        _this.type = descriptiveNumber_1.DescriptiveNumber.Type.Common;
        return _this;
    }
    return minimumDistanceDescriptiveNumber;
}(descriptiveNumber_1.DescriptiveNumber));
exports.minimumDistanceDescriptiveNumber = minimumDistanceDescriptiveNumber;

},{"../../core/utils":94,"../descriptiveNumber":48}],57:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.numberOfRalliesDescriptiveNumber = void 0;
var utils_1 = require("../../core/utils");
var descriptiveNumber_1 = require("../descriptiveNumber");
var numberOfRalliesDescriptiveNumber = /** @class */ (function (_super) {
    __extends(numberOfRalliesDescriptiveNumber, _super);
    function numberOfRalliesDescriptiveNumber(value) {
        var _this = _super.call(this, utils_1.Utils.AVG_RALLIES) || this;
        _this.prefix = 'Stalwart';
        _this.lowValue = 0;
        _this.description = 'the number of times you rallied today (see rules)';
        _this.type = descriptiveNumber_1.DescriptiveNumber.Type.Common;
        return _this;
    }
    return numberOfRalliesDescriptiveNumber;
}(descriptiveNumber_1.DescriptiveNumber));
exports.numberOfRalliesDescriptiveNumber = numberOfRalliesDescriptiveNumber;

},{"../../core/utils":94,"../descriptiveNumber":48}],58:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.numberOfScarsDescriptiveNumber = void 0;
var utils_1 = require("../../core/utils");
var descriptiveNumber_1 = require("../descriptiveNumber");
var numberOfScarsDescriptiveNumber = /** @class */ (function (_super) {
    __extends(numberOfScarsDescriptiveNumber, _super);
    function numberOfScarsDescriptiveNumber(value) {
        var _this = _super.call(this, utils_1.Utils.AVG_SCARS) || this;
        _this.prefix = 'Veterans';
        _this.lowValue = 0;
        _this.description = 'the number of your Scars';
        _this.type = descriptiveNumber_1.DescriptiveNumber.Type.Common;
        return _this;
    }
    return numberOfScarsDescriptiveNumber;
}(descriptiveNumber_1.DescriptiveNumber));
exports.numberOfScarsDescriptiveNumber = numberOfScarsDescriptiveNumber;

},{"../../core/utils":94,"../descriptiveNumber":48}],59:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.numberOfTurnsDescriptiveNumber = void 0;
var utils_1 = require("../../core/utils");
var descriptiveNumber_1 = require("../descriptiveNumber");
var numberOfTurnsDescriptiveNumber = /** @class */ (function (_super) {
    __extends(numberOfTurnsDescriptiveNumber, _super);
    function numberOfTurnsDescriptiveNumber(value) {
        var _this = _super.call(this, utils_1.Utils.AVG_TURN) || this;
        _this.prefix = 'Growing';
        _this.lowValue = 1;
        _this.description = 'the number of rounds in combat';
        _this.type = descriptiveNumber_1.DescriptiveNumber.Type.Common;
        return _this;
    }
    return numberOfTurnsDescriptiveNumber;
}(descriptiveNumber_1.DescriptiveNumber));
exports.numberOfTurnsDescriptiveNumber = numberOfTurnsDescriptiveNumber;

},{"../../core/utils":94,"../descriptiveNumber":48}],60:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.potionsDrankDescriptiveNumber = void 0;
var utils_1 = require("../../core/utils");
var descriptiveNumber_1 = require("../descriptiveNumber");
var potionsDrankDescriptiveNumber = /** @class */ (function (_super) {
    __extends(potionsDrankDescriptiveNumber, _super);
    function potionsDrankDescriptiveNumber(value) {
        var _this = _super.call(this, utils_1.Utils.AVG_POTIONS) || this;
        _this.prefix = 'Thirsty';
        _this.lowValue = 0;
        _this.description = 'the number of potions you drank today';
        _this.type = descriptiveNumber_1.DescriptiveNumber.Type.Common;
        return _this;
    }
    return potionsDrankDescriptiveNumber;
}(descriptiveNumber_1.DescriptiveNumber));
exports.potionsDrankDescriptiveNumber = potionsDrankDescriptiveNumber;

},{"../../core/utils":94,"../descriptiveNumber":48}],61:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.adjacentEnemiesDescriptiveNumber = void 0;
var utils_1 = require("../../../core/utils");
var descriptiveNumber_1 = require("../../descriptiveNumber");
var adjacentEnemiesDescriptiveNumber = /** @class */ (function (_super) {
    __extends(adjacentEnemiesDescriptiveNumber, _super);
    function adjacentEnemiesDescriptiveNumber(value) {
        var _this = _super.call(this, value) || this;
        _this.prefix = 'Battle';
        _this.value = utils_1.Utils.AVG_ENEMIES_ADJACENT;
        _this.type = descriptiveNumber_1.DescriptiveNumber.Type.Small;
        _this.name = 'the number of enemies adjacent to you';
        return _this;
    }
    return adjacentEnemiesDescriptiveNumber;
}(descriptiveNumber_1.DescriptiveNumber));
exports.adjacentEnemiesDescriptiveNumber = adjacentEnemiesDescriptiveNumber;

},{"../../../core/utils":94,"../../descriptiveNumber":48}],62:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ability = void 0;
var Ability = /** @class */ (function () {
    function Ability(otherName) {
        if (otherName !== undefined) {
            this.name = otherName;
        }
    }
    Ability.prototype.generate = function () {
    };
    return Ability;
}());
exports.Ability = Ability;
(function (Ability) {
    var Type;
    (function (Type) {
        Type[Type["Attack"] = 0] = "Attack";
        Type[Type["Technique"] = 1] = "Technique";
        Type[Type["Passive"] = 2] = "Passive";
        Type[Type["Utility"] = 3] = "Utility";
    })(Type = Ability.Type || (Ability.Type = {}));
    var Source;
    (function (Source) {
        Source[Source["Alchemical"] = 0] = "Alchemical";
        Source[Source["Arcane"] = 1] = "Arcane";
        Source[Source["Curse"] = 2] = "Curse";
        Source[Source["Holy"] = 3] = "Holy";
        Source[Source["Nature"] = 4] = "Nature";
        Source[Source["Psychic"] = 5] = "Psychic";
        Source[Source["Skill"] = 6] = "Skill";
        Source[Source["Shadow"] = 7] = "Shadow";
        Source[Source["Technology"] = 8] = "Technology";
    })(Source = Ability.Source || (Ability.Source = {}));
    var Element;
    (function (Element) {
        Element[Element["Dark"] = 0] = "Dark";
        Element[Element["Emotion"] = 1] = "Emotion";
        Element[Element["Fire"] = 2] = "Fire";
        Element[Element["Force"] = 3] = "Force";
        Element[Element["Ice"] = 4] = "Ice";
        Element[Element["Lightning"] = 5] = "Lightning";
        Element[Element["Physical"] = 6] = "Physical";
        Element[Element["Poison"] = 7] = "Poison";
        Element[Element["Radiant"] = 8] = "Radiant";
    })(Element = Ability.Element || (Ability.Element = {}));
    var Cooldown;
    (function (Cooldown) {
        Cooldown[Cooldown["Encounter"] = 0] = "Encounter";
        Cooldown[Cooldown["Daily"] = 1] = "Daily";
        Cooldown[Cooldown["Adventure"] = 2] = "Adventure";
    })(Cooldown = Ability.Cooldown || (Ability.Cooldown = {}));
    var Attribute;
    (function (Attribute) {
        Attribute[Attribute["Strength"] = 0] = "Strength";
        Attribute[Attribute["Dexterity"] = 1] = "Dexterity";
        Attribute[Attribute["Constitution"] = 2] = "Constitution";
        Attribute[Attribute["Intelligence"] = 3] = "Intelligence";
        Attribute[Attribute["Wisdom"] = 4] = "Wisdom";
        Attribute[Attribute["Charisma"] = 5] = "Charisma";
    })(Attribute = Ability.Attribute || (Ability.Attribute = {}));
})(Ability || (exports.Ability = Ability = {}));

},{}],63:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Activity = void 0;
var ability_1 = require("./ability");
var Activity = /** @class */ (function (_super) {
    __extends(Activity, _super);
    function Activity(otherName) {
        return _super.call(this, otherName) || this;
    }
    Activity.prototype.generate = function () {
    };
    return Activity;
}(ability_1.Ability));
exports.Activity = Activity;

},{"./ability":62}],64:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Attack = void 0;
var activity_1 = require("./activity");
var utils_1 = require("./utils");
var modifierFactory_1 = require("./../modifiers/modifierFactory");
var ability_1 = require("./ability");
var descriptiveNumber_1 = require("../components/descriptiveNumber");
var characterContext_1 = require("./characterContext");
var descriptiveNumberFactory_1 = require("../components/descriptiveNumberFactory");
var Attack = /** @class */ (function (_super) {
    __extends(Attack, _super);
    function Attack(otherName) {
        var _this = _super.call(this, otherName) || this;
        _this.weight = function () { return 1; };
        _this.cooldown = ability_1.Ability.Cooldown.Encounter;
        _this.type = ability_1.Ability.Type.Attack;
        return _this;
    }
    Attack.prototype.generate = function () {
        this.initCommon();
        this.initType();
        this.initModifiers();
        this.initChance();
        this.initRange();
        this.initDamage();
        this.finalAdjustments();
        this.compensate();
    };
    Attack.prototype.initCommon = function () {
        this.manaCost = 0;
        this.target = new descriptiveNumber_1.DescriptiveNumber(1);
    };
    Attack.prototype.initType = function () {
        if (this.subtype === undefined) {
            var roll = utils_1.Utils.random();
            if (roll > 0.5) {
                this.subtype = Attack.Subtype.Weapon;
            }
            else {
                this.subtype = Attack.Subtype.Spell;
            }
        }
    };
    Attack.prototype.initChance = function () {
        if (!this.chance) {
            this.chance = (Math.floor(utils_1.Utils.random() * 13) + 4) / 20;
        }
    };
    Attack.prototype.initRange = function () {
        if (!this.range) {
            if (this.subtype === Attack.Subtype.Weapon) {
                this.range = 1;
            }
            else {
                this.range = (Math.ceil(utils_1.Utils.random() * 3) * 5);
            }
        }
    };
    Attack.prototype.setDamage = function (num) {
        this.rollForDescriptiveDamage();
        if (!this.damage) {
            this.damage = new descriptiveNumber_1.DescriptiveNumber(num);
        }
    };
    Attack.prototype.rollForDescriptiveDamage = function () {
        if (!this.damage && utils_1.Utils.random() < utils_1.Utils.ATTACK_DESCRIPTIVE_NUMBER_CHANCE) {
            this.damage = new descriptiveNumberFactory_1.DescriptiveNumberFactory(this).filter(function (x) { return x.type === descriptiveNumber_1.DescriptiveNumber.Type.Common; }).get(1)[0];
        }
    };
    Attack.prototype.initDamage = function () {
        var tempDamage = this.getTempDamage();
        if (tempDamage > 30 && this.chance < 0.3) {
            this.chance += 0.1;
        }
        this.rollForDescriptiveDamage();
        if (!this.damage) {
            this.damage = new descriptiveNumber_1.DescriptiveNumber(tempDamage);
        }
        else {
            if (tempDamage > 0) {
                this.chance = this.chance * tempDamage / this.damage.getValue();
            }
            else {
                //I can't shake suspition something should be here
            }
        }
    };
    Attack.prototype.getTempDamage = function () {
        return ((this.manaCost +
            characterContext_1.CharacterContext.getDPS()) * modifierFactory_1.ModifierFactory.getDPSMultiplier(this.modifiers, this)
            + modifierFactory_1.ModifierFactory.getDPSBonus(this.modifiers, this))
            * utils_1.Utils.getRangeCoeficient(this.range)
            * utils_1.Utils.getDPSCoefficient(this.chance)
            / this.chance;
    };
    Attack.prototype.getPower = function () {
        var power = (this.damage.getValue() *
            this.chance
            / utils_1.Utils.getRangeCoeficient(this.range)
            / utils_1.Utils.getDPSCoefficient(this.chance)
            - modifierFactory_1.ModifierFactory.getDPSBonus(this.modifiers, this)) / modifierFactory_1.ModifierFactory.getDPSMultiplier(this.modifiers, this)
            - characterContext_1.CharacterContext.getDPS()
            - this.manaCost;
        return power;
    };
    //TODO split modifiers and improvements
    Attack.prototype.initModifiers = function () {
        var _this = this;
        var roll = utils_1.Utils.random();
        var numberOfModifiers = -1;
        if (!this.modifiers) {
            Attack.MODIFIER_CHANCE.forEach(function (value, key) {
                if (roll <= key && numberOfModifiers === -1) {
                    numberOfModifiers = value;
                }
                if (numberOfModifiers > 0) {
                    _this.modifiers = new modifierFactory_1.ModifierFactory(_this).get(numberOfModifiers);
                }
                else {
                    _this.modifiers = [];
                }
            });
        }
    };
    Attack.prototype.finalAdjustments = function () {
        if (this.subtype === Attack.Subtype.Spell) { //TODO allow for disabling compensation
            //if(this.damage.description != null) {
            this.damage.addBonus(1);
            //}
            this.chance = Math.min(1, this.chance + 0.1);
            this.range = (this.range === 1 ? 0 : this.range) + 5;
        }
    };
    Attack.prototype.compensate = function () {
        if (this.damage.getValue() < 3.5 && this.damage.description == undefined) {
            this.damage = new descriptiveNumber_1.DescriptiveNumber(3.5);
        }
        var maxChance = 0.9;
        if (this.chance > maxChance) {
            this.chance = maxChance;
        }
        var tempMana = Math.ceil(this.getPower() - 0.00001);
        if (this.manaCost + tempMana < 0) {
            this.chance += 0.1;
            if (this.chance > maxChance) {
                this.damage.addBonus(1);
                this.damage.compensate(); ///= new DescriptiveNumber(this.damage.getValue()+1); //TODO allow DescriptiveNumbers to get static bonuses
            }
            this.compensate();
        }
        else if (this.manaCost + tempMana > 10 && this.chance > 0.4) {
            this.chance -= 0.1;
            this.compensate();
        }
        else {
            this.manaCost += tempMana;
        }
    };
    Attack.prototype.getDescription = function () {
        return '' +
            '<b>Name: ' + this.generateName() +
            '</b><br><b>Chance</b>: ' + Math.ceil(this.chance * 100) + '%' +
            '<br><b>Damage</b>: ' + (this.damage.description ? this.damage.getDescription() : utils_1.Utils.valueToDiceRoll(this.damage.getValue())) +
            '<br><b>Mana Cost</b>: ' + this.manaCost +
            '<br><b>Range</b>: ' + this.range +
            '<br><b>Modifiers</b>: ' + this.modifiers.reduce(function (sum, mod) { return sum + ', ' + (mod.name === undefined ? mod.namePrefix : mod.name); }, '').slice(2) +
            '<br><b>Description</b>: ' + this.coreDescription + this.modifiers.reduce(function (sum, mod) { return sum + ' ' + mod.description; }, '').slice(1) +
            '<br><b>Type</b>: ' + Attack.Subtype[this.subtype] +
            '<br><b>Cooldown</b>: ' + ability_1.Ability.Cooldown[this.cooldown];
    };
    Attack.prototype.generateName = function () {
        var damagePortion = this.damage.prefix ? this.damage.prefix + ' ' : '';
        return damagePortion +
            this.modifiers.reduce(function (sum, mod) { return sum + ' ' + mod.namePrefix; }, '').slice(1) +
            (this.modifiers.length > 0 ? ' ' : '') +
            this.name;
    };
    Attack.MODIFIER_CHANCE = new Map([
        [0.1, 0],
        [0.7, 1],
        [1, 2],
        [1.2, 3],
        [1.4, 4]
    ]);
    return Attack;
}(activity_1.Activity));
exports.Attack = Attack;
(function (Attack) {
    var Subtype;
    (function (Subtype) {
        Subtype[Subtype["Weapon"] = 0] = "Weapon";
        Subtype[Subtype["Spell"] = 1] = "Spell";
    })(Subtype = Attack.Subtype || (Attack.Subtype = {}));
})(Attack || (exports.Attack = Attack = {}));

},{"../components/descriptiveNumber":48,"../components/descriptiveNumberFactory":49,"./../modifiers/modifierFactory":109,"./ability":62,"./activity":63,"./characterContext":72,"./utils":94}],65:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttackFactory = void 0;
var factory_1 = require("./factory");
var weightedList_1 = require("./weightedList");
//factory imports
var poisonedDartAttack_1 = require("./attackRepository/rogueAttacks/poisonedDartAttack");
var backstabAttack_1 = require("./attackRepository/rogueAttacks/backstabAttack");
var radiantRayAttack_1 = require("./attackRepository/clericAttacks/radiantRayAttack");
var empoweringStrikeAttack_1 = require("./attackRepository/clericAttacks/empoweringStrikeAttack");
var basicSpell_1 = require("./attackRepository/basicSpell");
var basicAttack_1 = require("./attackRepository/basicAttack");
var AttackFactory = /** @class */ (function (_super) {
    __extends(AttackFactory, _super);
    function AttackFactory(affector, list) {
        var _this = _super.call(this, affector) || this;
        if (list === undefined) {
            _this.items = new weightedList_1.WeightedList();
            _this.items.push(new poisonedDartAttack_1.poisonedDartAttack(affector));
            _this.items.push(new backstabAttack_1.backstabAttack(affector));
            _this.items.push(new radiantRayAttack_1.radiantRayAttack(affector));
            _this.items.push(new empoweringStrikeAttack_1.empoweringStrikeAttack(affector));
            _this.items.push(new basicSpell_1.basicSpell(affector));
            _this.items.push(new basicAttack_1.basicAttack(affector));
        }
        else {
            _this.items = list;
        }
        return _this;
    }
    AttackFactory.prototype.get = function (count) {
        return _super.prototype.get.call(this, count);
    };
    AttackFactory.prototype.filter = function (z) {
        return _super.prototype.filter.call(this, z);
    };
    return AttackFactory;
}(factory_1.Factory));
exports.AttackFactory = AttackFactory;

},{"./attackRepository/basicAttack":66,"./attackRepository/basicSpell":67,"./attackRepository/clericAttacks/empoweringStrikeAttack":68,"./attackRepository/clericAttacks/radiantRayAttack":69,"./attackRepository/rogueAttacks/backstabAttack":70,"./attackRepository/rogueAttacks/poisonedDartAttack":71,"./factory":73,"./weightedList":95}],66:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.basicAttack = void 0;
var classUtils_1 = require("../../characters/classUtils");
var attack_1 = require("../attack");
var characterContext_1 = require("../characterContext");
var utils_1 = require("../utils");
var basicAttack = /** @class */ (function (_super) {
    __extends(basicAttack, _super);
    function basicAttack(affector) {
        var _this = _super.call(this, 'Basic Attack') || this;
        _this.subtype = attack_1.Attack.Subtype.Weapon;
        _this.coreDescription = 'When you hit, deal damage. ';
        _this.weight = function (x) {
            var classRoll = utils_1.Utils.D(characterContext_1.CharacterContext.classes.length) - 1;
            var primaryStat = classUtils_1.ClassUtils.getClass(characterContext_1.CharacterContext.Class[characterContext_1.CharacterContext.classes[classRoll]]).primaryAttribute;
            if ([characterContext_1.CharacterContext.Attribute.Strength, characterContext_1.CharacterContext.Attribute.Dexterity, characterContext_1.CharacterContext.Attribute.Constitution].includes(primaryStat)) {
                return 1;
            }
            else {
                return 0.2;
            }
        };
        _this.generate();
        return _this;
    }
    return basicAttack;
}(attack_1.Attack));
exports.basicAttack = basicAttack;

},{"../../characters/classUtils":3,"../attack":64,"../characterContext":72,"../utils":94}],67:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.basicSpell = void 0;
var classUtils_1 = require("../../characters/classUtils");
var attack_1 = require("../attack");
var characterContext_1 = require("../characterContext");
var utils_1 = require("../utils");
var basicSpell = /** @class */ (function (_super) {
    __extends(basicSpell, _super);
    function basicSpell(affector) {
        var _this = _super.call(this, 'Basic Spell') || this;
        _this.weight = function (x) {
            var classRoll = utils_1.Utils.D(characterContext_1.CharacterContext.classes.length) - 1;
            var primaryStat = classUtils_1.ClassUtils.getClass(characterContext_1.CharacterContext.Class[characterContext_1.CharacterContext.classes[classRoll]]).primaryAttribute;
            if ([characterContext_1.CharacterContext.Attribute.Intelligence, characterContext_1.CharacterContext.Attribute.Wisdom, characterContext_1.CharacterContext.Attribute.Charisma].includes(primaryStat)) {
                return 1;
            }
            else {
                return 0.2;
            }
        };
        _this.subtype = attack_1.Attack.Subtype.Spell;
        _this.coreDescription = 'When you hit, deal damage. ';
        _this.generate();
        return _this;
    }
    return basicSpell;
}(attack_1.Attack));
exports.basicSpell = basicSpell;

},{"../../characters/classUtils":3,"../attack":64,"../characterContext":72,"../utils":94}],68:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.empoweringStrikeAttack = void 0;
var compensationModifier_1 = require("../../../modifiers/modifiersRepository/compensationModifier");
var attack_1 = require("../../attack");
var characterContext_1 = require("../../characterContext");
var empoweringStrikeAttack = /** @class */ (function (_super) {
    __extends(empoweringStrikeAttack, _super);
    function empoweringStrikeAttack(affector) {
        var _this = _super.call(this, 'Empowering Strike') || this;
        _this.weight = function () { return characterContext_1.CharacterContext.classes.includes(characterContext_1.CharacterContext.Class.Cleric) ? characterContext_1.CharacterContext.IN_CLASS_MODIFIER : characterContext_1.CharacterContext.OUT_OF_CLASS_WEIGHT; };
        _this.chance = 0.3;
        _this.manaCost = 1;
        _this.range = 10;
        _this.coreDescription = 'When you hit, deal damage and gain 5 Righteus Lights until end of the encounter. You and each ally within 10 squares can use one of the lights with a Swift Action to either heal 5 Health or gain 1 Boon on nearest chance roll. ';
        _this.subtype = attack_1.Attack.Subtype.Spell;
        _this.initModifiers();
        _this.modifiers.push(new compensationModifier_1.compensationModifier(_this, 'Righteus Lights', 0, -15));
        _this.initDamage();
        _this.compensate();
        return _this;
    }
    return empoweringStrikeAttack;
}(attack_1.Attack));
exports.empoweringStrikeAttack = empoweringStrikeAttack;

},{"../../../modifiers/modifiersRepository/compensationModifier":119,"../../attack":64,"../../characterContext":72}],69:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.radiantRayAttack = void 0;
var compensationModifier_1 = require("../../../modifiers/modifiersRepository/compensationModifier");
var attack_1 = require("../../attack");
var characterContext_1 = require("../../characterContext");
var radiantRayAttack = /** @class */ (function (_super) {
    __extends(radiantRayAttack, _super);
    function radiantRayAttack(affector) {
        var _this = _super.call(this, 'Radiant Flame') || this;
        _this.weight = function () { return characterContext_1.CharacterContext.classes.includes(characterContext_1.CharacterContext.Class.Cleric) ? characterContext_1.CharacterContext.IN_CLASS_MODIFIER : characterContext_1.CharacterContext.OUT_OF_CLASS_WEIGHT; };
        _this.chance = 0.8;
        _this.manaCost = 1;
        _this.range = 10;
        _this.coreDescription = 'When you hit, deal damage and apply effect: Holy Flame - enemy sheds light in 5 squares radius, cannot become invisible and has 1 Bane on all attacks (this Bane does not stack). This effect lasts until end of encounter. ';
        _this.subtype = attack_1.Attack.Subtype.Spell;
        _this.initModifiers();
        _this.modifiers.push(new compensationModifier_1.compensationModifier(_this, 'Radiant Flame', 0.8, 0));
        _this.initDamage();
        _this.compensate();
        return _this;
    }
    return radiantRayAttack;
}(attack_1.Attack));
exports.radiantRayAttack = radiantRayAttack;

},{"../../../modifiers/modifiersRepository/compensationModifier":119,"../../attack":64,"../../characterContext":72}],70:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.backstabAttack = void 0;
var compensationModifier_1 = require("../../../modifiers/modifiersRepository/compensationModifier");
var attack_1 = require("../../attack");
var characterContext_1 = require("../../characterContext");
var backstabAttack = /** @class */ (function (_super) {
    __extends(backstabAttack, _super);
    function backstabAttack(affector) {
        var _this = _super.call(this, 'Backstab') || this;
        _this.weight = function () { return characterContext_1.CharacterContext.classes.includes(characterContext_1.CharacterContext.Class.Rogue) ? characterContext_1.CharacterContext.IN_CLASS_MODIFIER : characterContext_1.CharacterContext.OUT_OF_CLASS_WEIGHT; };
        _this.chance = 0.9;
        _this.manaCost = 0;
        _this.range = 1;
        _this.coreDescription = 'When you hit, deal damage. Double this damage if an enemy is not aware of you, is Stunned, is affected by Rogue\'s Poison or both is adjacent to your ally and did not attack you last turn';
        _this.subtype = attack_1.Attack.Subtype.Spell;
        _this.initModifiers();
        _this.modifiers.push(new compensationModifier_1.compensationModifier(_this, 'Backstab', 0.75, 0));
        _this.initDamage();
        _this.compensate();
        return _this;
    }
    return backstabAttack;
}(attack_1.Attack));
exports.backstabAttack = backstabAttack;

},{"../../../modifiers/modifiersRepository/compensationModifier":119,"../../attack":64,"../../characterContext":72}],71:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.poisonedDartAttack = void 0;
var compensationModifier_1 = require("../../../modifiers/modifiersRepository/compensationModifier");
var attack_1 = require("../../attack");
var characterContext_1 = require("../../characterContext");
var poisonedDartAttack = /** @class */ (function (_super) {
    __extends(poisonedDartAttack, _super);
    function poisonedDartAttack(affector) {
        var _this = _super.call(this, 'Poisoned Dart') || this;
        _this.weight = function () { return characterContext_1.CharacterContext.classes.includes(characterContext_1.CharacterContext.Class.Rogue) ? characterContext_1.CharacterContext.IN_CLASS_MODIFIER : characterContext_1.CharacterContext.OUT_OF_CLASS_WEIGHT; };
        _this.chance = 0.4;
        _this.manaCost = 0;
        _this.range = 10;
        _this.coreDescription = 'When you hit, deal damage and apply effect - Rogue\'s Poison which lasts 3 turns. When it expires from duration, target takes 50 damage.';
        _this.subtype = attack_1.Attack.Subtype.Spell;
        _this.initModifiers();
        _this.modifiers.push(new compensationModifier_1.compensationModifier(_this, 'Poisoned Dart', 0, -20));
        _this.initDamage();
        _this.compensate();
        return _this;
    }
    return poisonedDartAttack;
}(attack_1.Attack));
exports.poisonedDartAttack = poisonedDartAttack;

},{"../../../modifiers/modifiersRepository/compensationModifier":119,"../../attack":64,"../../characterContext":72}],72:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterContext = void 0;
var utils_1 = require("./utils");
var CharacterContext = /** @class */ (function () {
    function CharacterContext() {
    }
    CharacterContext.getDPS = function () {
        return utils_1.Utils.getDPS(CharacterContext.level);
    };
    CharacterContext.level = 1;
    CharacterContext.classes = [0];
    CharacterContext.OUT_OF_CLASS_WEIGHT = 0.0001; //TODO should be 0.01 after go-live
    CharacterContext.IN_CLASS_MODIFIER = 1.7;
    return CharacterContext;
}());
exports.CharacterContext = CharacterContext;
(function (CharacterContext) {
    var Class;
    (function (Class) {
        Class[Class["Cleric"] = 0] = "Cleric";
        Class[Class["Fighter"] = 1] = "Fighter";
        Class[Class["Paladin"] = 2] = "Paladin";
        Class[Class["Ranger"] = 3] = "Ranger";
        Class[Class["Rogue"] = 4] = "Rogue";
        Class[Class["Sorcerer"] = 5] = "Sorcerer";
        Class[Class["Druid"] = 6] = "Druid";
        Class[Class["Wizard"] = 7] = "Wizard";
        Class[Class["Assassin"] = 8] = "Assassin";
        Class[Class["Barbarian"] = 9] = "Barbarian";
        Class[Class["Bard"] = 10] = "Bard";
        Class[Class["Monk"] = 11] = "Monk";
        Class[Class["Runepriest"] = 12] = "Runepriest";
        Class[Class["Shaman"] = 13] = "Shaman";
        Class[Class["Swordmage"] = 14] = "Swordmage";
        Class[Class["Warlock"] = 15] = "Warlock";
    })(Class = CharacterContext.Class || (CharacterContext.Class = {}));
    var Attribute;
    (function (Attribute) {
        Attribute[Attribute["Strength"] = 0] = "Strength";
        Attribute[Attribute["Dexterity"] = 1] = "Dexterity";
        Attribute[Attribute["Constitution"] = 2] = "Constitution";
        Attribute[Attribute["Intelligence"] = 3] = "Intelligence";
        Attribute[Attribute["Wisdom"] = 4] = "Wisdom";
        Attribute[Attribute["Charisma"] = 5] = "Charisma"; //rare items
    })(Attribute = CharacterContext.Attribute || (CharacterContext.Attribute = {}));
    var Skill;
    (function (Skill) {
        Skill[Skill["Athletics"] = 0] = "Athletics";
        Skill[Skill["Intimidation"] = 1] = "Intimidation";
        Skill[Skill["Acrobatics"] = 2] = "Acrobatics";
        Skill[Skill["Stealth"] = 3] = "Stealth";
        Skill[Skill["Endurance"] = 4] = "Endurance";
        Skill[Skill["Survival"] = 5] = "Survival";
        Skill[Skill["Knowledge"] = 6] = "Knowledge";
        Skill[Skill["Crafting"] = 7] = "Crafting";
        Skill[Skill["Medicine"] = 8] = "Medicine";
        Skill[Skill["Perception"] = 9] = "Perception";
        Skill[Skill["Persuasion"] = 10] = "Persuasion";
        Skill[Skill["Streetwise"] = 11] = "Streetwise";
    })(Skill = CharacterContext.Skill || (CharacterContext.Skill = {}));
    var ArmorProficiency;
    (function (ArmorProficiency) {
        ArmorProficiency[ArmorProficiency["Heavy"] = 0] = "Heavy";
        ArmorProficiency[ArmorProficiency["Medium"] = 1] = "Medium";
        ArmorProficiency[ArmorProficiency["Light"] = 2] = "Light";
    })(ArmorProficiency = CharacterContext.ArmorProficiency || (CharacterContext.ArmorProficiency = {}));
})(CharacterContext || (exports.CharacterContext = CharacterContext = {}));

},{"./utils":94}],73:[function(require,module,exports){
"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Factory = void 0;
var Factory = /** @class */ (function () {
    function Factory(affector) {
        this.affector = affector;
        Factory.evenItems = [];
    }
    Factory.prototype.getAll = function () {
        return this.items;
    };
    Factory.prototype.get = function (count) {
        return this.items.get(count, this.affector);
    };
    Factory.prototype.getEvenly = function (count) {
        if (Factory.evenItems.length == 0) {
            Factory.evenItems = this.get(Factory.EVEN_LIST_SIZE);
        }
        console.log(Factory.evenItems.length);
        var index = 0;
        var newItem = Factory.evenItems[index];
        Factory.evenItems.splice(index, 1);
        if (count == 0) {
            return [];
        }
        if (count == 1) {
            return [newItem];
        }
        return __spreadArray([newItem], __read(this.getEvenly(count - 1)), false);
    };
    Factory.prototype.filter = function (z) {
        this.items = this.items.filter(z);
        return this;
    };
    Factory.EVEN_LIST_SIZE = 5;
    return Factory;
}());
exports.Factory = Factory;

},{}],74:[function(require,module,exports){
"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomNumberGenerator = void 0;
var RandomNumberGenerator = /** @class */ (function () {
    function RandomNumberGenerator(initSeed) {
        var e_1, _a;
        this.seed = 0;
        var i = 1;
        try {
            for (var initSeed_1 = __values(initSeed), initSeed_1_1 = initSeed_1.next(); !initSeed_1_1.done; initSeed_1_1 = initSeed_1.next()) {
                var c = initSeed_1_1.value;
                this.seed += c.charCodeAt(0) * i;
                i = (i + 50);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (initSeed_1_1 && !initSeed_1_1.done && (_a = initSeed_1.return)) _a.call(initSeed_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    }
    RandomNumberGenerator.prototype.random = function () {
        this.seed += 1;
        var x = Math.sin(this.seed) * 100000;
        return x - Math.floor(x);
    };
    return RandomNumberGenerator;
}());
exports.RandomNumberGenerator = RandomNumberGenerator;

},{}],75:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utility = void 0;
var repeatableModifier_1 = require("../modifiers/modifiersRepository/repeatableModifier");
var ability_1 = require("./ability");
var activity_1 = require("./activity");
var modifierFactory_1 = require("../modifiers/modifierFactory");
var utils_1 = require("./utils");
var characterContext_1 = require("./characterContext");
var Utility = /** @class */ (function (_super) {
    __extends(Utility, _super);
    function Utility(otherName) {
        var _this = _super.call(this, otherName) || this;
        _this.weight = function (x) { return 1; };
        _this.cooldown = ability_1.Ability.Cooldown.Daily;
        _this.objects = [];
        _this.modifiers = [];
        _this.type = ability_1.Ability.Type.Utility;
        return _this;
    }
    Utility.prototype.getDescription = function () {
        return '' +
            '<b>Name: ' + this.generateName() +
            '<br>Chance</b>: ' + Math.ceil(this.chance * 100) + '%' +
            '<br><b>Modifiers</b>: ' + this.modifiers.reduce(function (sum, mod) { return sum + ', ' + (mod.name === undefined ? mod.namePrefix : mod.name); }, '').slice(2) +
            '<br><b>Components</b>: ' + this.objects.reduce(function (sum, mod) { return sum + ', ' + mod.name; }, '').slice(2) +
            '<br><b>Description</b>: ' + this.description + this.modifiers.reduce(function (sum, mod) { return sum + ' ' + mod.description; }, '').slice(1) +
            '<br><b>Cooldown</b>: ' + ability_1.Ability.Cooldown[this.cooldown];
    };
    Utility.prototype.generateName = function () {
        return this.modifiers.reduce(function (sum, mod) { return sum + ' ' + mod.namePrefix; }, '').slice(1) + (this.modifiers.length > 0 ? ' ' : '') +
            this.objects.reduce(function (sum, mod) { return sum + ' ' + (mod.prefix === undefined ? mod.name : mod.prefix); }, '') + ' ' + this.name;
    };
    Utility.prototype.compensate = function () {
        var _this = this;
        var extraMods = utils_1.Utils.getNumberFromValueMap(Utility.MODIFIER_CHANCE, new modifierFactory_1.ModifierFactory(this));
        extraMods.forEach(function (mod) {
            _this.modifiers.push(mod);
        });
        this.chance = this.chance * modifierFactory_1.ModifierFactory.getDPSMultiplier(this.modifiers, this);
        var bonus = modifierFactory_1.ModifierFactory.getDPSBonus(this.modifiers, this);
        if (bonus != 0) {
            if (this.value) {
                this.value.addBonus(bonus * this.value.getValue() / utils_1.Utils.getDPS(1));
            }
            else {
                this.chance += bonus / utils_1.Utils.getDPS(characterContext_1.CharacterContext.level);
            }
        }
        var repeat = new repeatableModifier_1.repeatableModifier();
        if (this.chance > 1) {
            if (this.cooldown === ability_1.Ability.Cooldown.Encounter) {
                if (!this.value) {
                    throw 'cooldown ability with no value to compensate ' + JSON.stringify(this);
                }
                var newChanceNumeric = 0.9;
                this.value.addBonus(Math.ceil(this.value.getValue() * (this.chance - newChanceNumeric) / newChanceNumeric));
                this.value.compensate();
                this.chance = newChanceNumeric;
            }
            else {
                var tempRepeat = Math.ceil(this.chance);
                this.chance /= tempRepeat;
                repeat.setValue(tempRepeat);
                this.modifiers.push(repeat);
            }
        }
    };
    Utility.MODIFIER_CHANCE = new Map([
        [0.3, 0],
        [0.8, 1],
        [1, 2], //TODO restore this
    ]);
    return Utility;
}(activity_1.Activity));
exports.Utility = Utility;

},{"../modifiers/modifierFactory":109,"../modifiers/modifiersRepository/repeatableModifier":139,"./ability":62,"./activity":63,"./characterContext":72,"./utils":94}],76:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilityFactory = void 0;
var factory_1 = require("./factory");
var weightedList_1 = require("./weightedList");
//factory imports
var skillBonusUtility_1 = require("./utilityRepository/skillBonusUtility");
var tumbleUtility_1 = require("./utilityRepository/rogueUtilities/tumbleUtility");
var shiftBlameUtility_1 = require("./utilityRepository/rogueUtilities/shiftBlameUtility");
var shadowStrideUtility_1 = require("./utilityRepository/rogueUtilities/shadowStrideUtility");
var shadowMeldUtility_1 = require("./utilityRepository/rogueUtilities/shadowMeldUtility");
var pickpocketUtility_1 = require("./utilityRepository/rogueUtilities/pickpocketUtility");
var lockpickingUtility_1 = require("./utilityRepository/rogueUtilities/lockpickingUtility");
var equipmentMaintenanceUtility_1 = require("./utilityRepository/fighterUtilities/equipmentMaintenanceUtility");
var enticeRespectUtility_1 = require("./utilityRepository/fighterUtilities/enticeRespectUtility");
var blockUtility_1 = require("./utilityRepository/fighterUtilities/blockUtility");
var animalSpeak_1 = require("./utilityRepository/druidUtilities/animalSpeak");
var seanceUtility_1 = require("./utilityRepository/clericUtilities/seanceUtility");
var restorationUtility_1 = require("./utilityRepository/clericUtilities/restorationUtility");
var piousPrayerUtility_1 = require("./utilityRepository/clericUtilities/piousPrayerUtility");
var lightUtility_1 = require("./utilityRepository/clericUtilities/lightUtility");
var holyHealUtility_1 = require("./utilityRepository/clericUtilities/holyHealUtility");
var auguryUtility_1 = require("./utilityRepository/clericUtilities/auguryUtility");
var UtilityFactory = /** @class */ (function (_super) {
    __extends(UtilityFactory, _super);
    function UtilityFactory(affector, list) {
        var _this = _super.call(this, affector) || this;
        if (list === undefined) {
            _this.items = new weightedList_1.WeightedList();
            _this.items.push(new skillBonusUtility_1.skillBonusUtility());
            _this.items.push(new tumbleUtility_1.tumbleUtility());
            _this.items.push(new shiftBlameUtility_1.shiftBlameUtility());
            _this.items.push(new shadowStrideUtility_1.shadowStrideUtility());
            _this.items.push(new shadowMeldUtility_1.shadowMeldUtility());
            _this.items.push(new pickpocketUtility_1.pickpocketUtility());
            _this.items.push(new lockpickingUtility_1.lockpickingUtility());
            _this.items.push(new equipmentMaintenanceUtility_1.equipmentMaintenanceUtility());
            _this.items.push(new enticeRespectUtility_1.enticeRespectUtility());
            _this.items.push(new blockUtility_1.blockUtility());
            _this.items.push(new animalSpeak_1.animalSpeak());
            _this.items.push(new seanceUtility_1.seanceUtility());
            _this.items.push(new restorationUtility_1.restorationUtility());
            _this.items.push(new piousPrayerUtility_1.piousPrayerUtility());
            _this.items.push(new lightUtility_1.lightUtility());
            _this.items.push(new holyHealUtility_1.holyHealUtility());
            _this.items.push(new auguryUtility_1.auguryUtility());
        }
        else {
            _this.items = list;
        }
        return _this;
    }
    UtilityFactory.prototype.get = function (count) {
        return _super.prototype.get.call(this, count);
    };
    UtilityFactory.prototype.filter = function (z) {
        return _super.prototype.filter.call(this, z);
    };
    return UtilityFactory;
}(factory_1.Factory));
exports.UtilityFactory = UtilityFactory;

},{"./factory":73,"./utilityRepository/clericUtilities/auguryUtility":77,"./utilityRepository/clericUtilities/holyHealUtility":78,"./utilityRepository/clericUtilities/lightUtility":79,"./utilityRepository/clericUtilities/piousPrayerUtility":80,"./utilityRepository/clericUtilities/restorationUtility":81,"./utilityRepository/clericUtilities/seanceUtility":82,"./utilityRepository/druidUtilities/animalSpeak":83,"./utilityRepository/fighterUtilities/blockUtility":84,"./utilityRepository/fighterUtilities/enticeRespectUtility":85,"./utilityRepository/fighterUtilities/equipmentMaintenanceUtility":86,"./utilityRepository/rogueUtilities/lockpickingUtility":87,"./utilityRepository/rogueUtilities/pickpocketUtility":88,"./utilityRepository/rogueUtilities/shadowMeldUtility":89,"./utilityRepository/rogueUtilities/shadowStrideUtility":90,"./utilityRepository/rogueUtilities/shiftBlameUtility":91,"./utilityRepository/rogueUtilities/tumbleUtility":92,"./utilityRepository/skillBonusUtility":93,"./weightedList":95}],77:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.auguryUtility = void 0;
var abilityObjectFactory_1 = require("../../../components/abilityObjectFactory");
var descriptiveNumber_1 = require("../../../components/descriptiveNumber");
var ability_1 = require("../../ability");
var characterContext_1 = require("../../characterContext");
var utility_1 = require("../../utility");
var auguryUtility = /** @class */ (function (_super) {
    __extends(auguryUtility, _super);
    function auguryUtility() {
        var numberOfQuestions;
        var _this = _super.call(this, 'Augury') || this;
        _this.objects.push(new abilityObjectFactory_1.AbilityObjectFactory(_this).filter(function (x) { return x.isQuestion; }).get(1)[0]);
        _this.cooldown = ability_1.Ability.Cooldown.Adventure;
        _this.weight = function () { return characterContext_1.CharacterContext.classes.includes(characterContext_1.CharacterContext.Class.Cleric) ? characterContext_1.CharacterContext.IN_CLASS_MODIFIER : characterContext_1.CharacterContext.OUT_OF_CLASS_WEIGHT; };
        var tempChance = 1.5
            / _this.objects[0].rarity;
        if (tempChance > 2) {
            numberOfQuestions = new descriptiveNumber_1.DescriptiveNumber(3);
        }
        else if (tempChance > 1) {
            numberOfQuestions = new descriptiveNumber_1.DescriptiveNumber(2);
        }
        else {
            numberOfQuestions = new descriptiveNumber_1.DescriptiveNumber(1);
        }
        _this.chance = tempChance / numberOfQuestions.getValue();
        _this.description = 'After few minutes of meditation you can ask ' + numberOfQuestions.getValue() + ' question' +
            (numberOfQuestions.getValue() === 1 ? '' : 's') +
            ' to the higher power. ' +
            _this.objects[0].description;
        _this.compensate();
        return _this;
    }
    return auguryUtility;
}(utility_1.Utility));
exports.auguryUtility = auguryUtility;

},{"../../../components/abilityObjectFactory":8,"../../../components/descriptiveNumber":48,"../../ability":62,"../../characterContext":72,"../../utility":75}],78:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.holyHealUtility = void 0;
var descriptiveNumber_1 = require("../../../components/descriptiveNumber");
var descriptiveNumberFactory_1 = require("../../../components/descriptiveNumberFactory");
var ability_1 = require("../../ability");
var characterContext_1 = require("../../characterContext");
var utility_1 = require("../../utility");
var utils_1 = require("../../utils");
var holyHealUtility = /** @class */ (function (_super) {
    __extends(holyHealUtility, _super);
    function holyHealUtility() {
        var _this = _super.call(this, 'Heal') || this;
        _this.weight = function () { return characterContext_1.CharacterContext.classes.includes(characterContext_1.CharacterContext.Class.Cleric) ? characterContext_1.CharacterContext.IN_CLASS_MODIFIER : characterContext_1.CharacterContext.OUT_OF_CLASS_WEIGHT; };
        _this.cooldown = ability_1.Ability.Cooldown.Encounter;
        _this.chance = 0.7;
        var normalValue = 10;
        if (!_this.value && utils_1.Utils.random() < utils_1.Utils.ATTACK_DESCRIPTIVE_NUMBER_CHANCE) {
            _this.value = new descriptiveNumberFactory_1.DescriptiveNumberFactory(_this).filter(function (x) { return x.type === descriptiveNumber_1.DescriptiveNumber.Type.Common; }).get(1)[0];
            _this.value.addBonus(Math.ceil(normalValue - _this.value.getValue()));
            _this.value.compensate();
        }
        else {
            _this.value = new descriptiveNumber_1.DescriptiveNumber(normalValue);
        }
        _this.compensate();
        _this.description = 'Using Standard Action, restore ' + _this.value.getDescription() + ' health to yourself and one ally within 5 squares. ';
        return _this;
    }
    return holyHealUtility;
}(utility_1.Utility));
exports.holyHealUtility = holyHealUtility;

},{"../../../components/descriptiveNumber":48,"../../../components/descriptiveNumberFactory":49,"../../ability":62,"../../characterContext":72,"../../utility":75,"../../utils":94}],79:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.lightUtility = void 0;
var abilityObjectFactory_1 = require("../../../components/abilityObjectFactory");
var descriptiveNumber_1 = require("../../../components/descriptiveNumber");
var repeatableModifier_1 = require("../../../modifiers/modifiersRepository/repeatableModifier");
var ability_1 = require("../../ability");
var characterContext_1 = require("../../characterContext");
var utility_1 = require("../../utility");
var utils_1 = require("../../utils");
var lightUtility = /** @class */ (function (_super) {
    __extends(lightUtility, _super);
    function lightUtility() {
        var _this = _super.call(this, 'Light') || this;
        _this.value = new descriptiveNumber_1.DescriptiveNumber(5);
        _this.range = 10;
        _this.objects.push(new abilityObjectFactory_1.AbilityObjectFactory(_this).filter(function (x) { return x.isLight; }).get(1)[0]);
        _this.weight = function () { return characterContext_1.CharacterContext.classes.includes(characterContext_1.CharacterContext.Class.Cleric) ? characterContext_1.CharacterContext.IN_CLASS_MODIFIER : characterContext_1.CharacterContext.OUT_OF_CLASS_WEIGHT; };
        _this.chance = 1.5
            * utils_1.Utils.getRangeCoeficient(_this.range)
            * utils_1.Utils.getRangeCoeficient(_this.value.getValue());
        _this.cooldown = ability_1.Ability.Cooldown.Encounter;
        var repeat = new repeatableModifier_1.repeatableModifier();
        repeat.setValue(2);
        _this.modifiers.push(repeat);
        _this.compensate();
        _this.description = 'Using a Swift Action shine a light in an area centered on a point within ' + _this.range + 'm, with a ' + Math.ceil(_this.value.getValue()) + 'm radius, until end of the encounter. ' +
            _this.objects[0].description;
        return _this;
        //TODO add light as an object
    }
    return lightUtility;
}(utility_1.Utility));
exports.lightUtility = lightUtility;

},{"../../../components/abilityObjectFactory":8,"../../../components/descriptiveNumber":48,"../../../modifiers/modifiersRepository/repeatableModifier":139,"../../ability":62,"../../characterContext":72,"../../utility":75,"../../utils":94}],80:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.piousPrayerUtility = void 0;
var descriptiveNumber_1 = require("../../../components/descriptiveNumber");
var ability_1 = require("../../ability");
var characterContext_1 = require("../../characterContext");
var utility_1 = require("../../utility");
var piousPrayerUtility = /** @class */ (function (_super) {
    __extends(piousPrayerUtility, _super);
    function piousPrayerUtility() {
        var _this = _super.call(this, 'Prayer') || this;
        _this.weight = function () { return characterContext_1.CharacterContext.classes.includes(characterContext_1.CharacterContext.Class.Cleric) ? characterContext_1.CharacterContext.IN_CLASS_MODIFIER : characterContext_1.CharacterContext.OUT_OF_CLASS_WEIGHT; };
        _this.cooldown = ability_1.Ability.Cooldown.Encounter;
        _this.chance = 0.7;
        var normalValue = 7;
        _this.value = new descriptiveNumber_1.DescriptiveNumber(normalValue);
        _this.compensate();
        _this.description = 'If you are in combat, gain ' + _this.value.getDescription() + ' Blessing Points (see rules) and your next ability chance roll will gain 1 Boon. Double both values if you are fighting Undead, Devils or Demons. This ability can be only used in first two rounds of combat. ';
        return _this;
    }
    return piousPrayerUtility;
}(utility_1.Utility));
exports.piousPrayerUtility = piousPrayerUtility;

},{"../../../components/descriptiveNumber":48,"../../ability":62,"../../characterContext":72,"../../utility":75}],81:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.restorationUtility = void 0;
var ability_1 = require("../../ability");
var characterContext_1 = require("../../characterContext");
var utility_1 = require("../../utility");
var restorationUtility = /** @class */ (function (_super) {
    __extends(restorationUtility, _super);
    function restorationUtility() {
        var _this = _super.call(this, 'Restoration') || this;
        _this.cooldown = ability_1.Ability.Cooldown.Adventure;
        _this.weight = function () { return characterContext_1.CharacterContext.classes.includes(characterContext_1.CharacterContext.Class.Cleric) ? characterContext_1.CharacterContext.IN_CLASS_MODIFIER : characterContext_1.CharacterContext.OUT_OF_CLASS_WEIGHT; };
        _this.chance = 0.6;
        _this.description = 'After an hour of ritual, you can cause one wound effect like limb loss, blindness or statistics loss to be removed from one character. Additionally the target loses 1 Scar. You can use this ability in a moderate size city to alternatively gain 150G on success. ';
        _this.compensate();
        return _this;
    }
    return restorationUtility;
}(utility_1.Utility));
exports.restorationUtility = restorationUtility;

},{"../../ability":62,"../../characterContext":72,"../../utility":75}],82:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.seanceUtility = void 0;
var abilityObjectFactory_1 = require("../../../components/abilityObjectFactory");
var descriptiveNumber_1 = require("../../../components/descriptiveNumber");
var characterContext_1 = require("../../characterContext");
var utility_1 = require("../../utility");
var seanceUtility = /** @class */ (function (_super) {
    __extends(seanceUtility, _super);
    function seanceUtility() {
        var _this = _super.call(this, 'Seance') || this;
        _this.weight = function () { return characterContext_1.CharacterContext.classes.includes(characterContext_1.CharacterContext.Class.Cleric) ? characterContext_1.CharacterContext.IN_CLASS_MODIFIER : characterContext_1.CharacterContext.OUT_OF_CLASS_WEIGHT; };
        _this.objects.push(new abilityObjectFactory_1.AbilityObjectFactory(_this).filter(function (x) { return x.isCommunication; }).get(1)[0]);
        _this.objects.push(new abilityObjectFactory_1.AbilityObjectFactory(_this).filter(function (x) { return x.isCorpse; }).get(1)[0]);
        _this.duration = new descriptiveNumber_1.DescriptiveNumber(1);
        _this.duration.description = 'ten minutes';
        _this.chance = 0.85
            / _this.objects[0].rarity
            / _this.objects[1].rarity
            / _this.duration.getValue();
        _this.description = 'You can communicate with ' + _this.objects[1].description + ' for ' + _this.duration.getDescription() + '. ' + _this.objects[0].description;
        _this.compensate();
        return _this;
    }
    return seanceUtility;
}(utility_1.Utility));
exports.seanceUtility = seanceUtility;

},{"../../../components/abilityObjectFactory":8,"../../../components/descriptiveNumber":48,"../../characterContext":72,"../../utility":75}],83:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.animalSpeak = void 0;
var abilityObjectFactory_1 = require("../../../components/abilityObjectFactory");
var descriptiveNumber_1 = require("../../../components/descriptiveNumber");
var characterContext_1 = require("../../characterContext");
var utility_1 = require("../../utility");
var animalSpeak = /** @class */ (function (_super) {
    __extends(animalSpeak, _super);
    function animalSpeak() {
        var _this = _super.call(this, 'Speak') || this;
        _this.weight = function () { return characterContext_1.CharacterContext.classes.includes(characterContext_1.CharacterContext.Class.Druid) ? characterContext_1.CharacterContext.IN_CLASS_MODIFIER : characterContext_1.CharacterContext.OUT_OF_CLASS_WEIGHT; };
        _this.objects.push(new abilityObjectFactory_1.AbilityObjectFactory(_this).filter(function (x) { return x.isCommunication; }).get(1)[0]);
        _this.objects.push(new abilityObjectFactory_1.AbilityObjectFactory(_this).filter(function (x) { return x.isAnimal; }).get(1)[0]);
        _this.duration = new descriptiveNumber_1.DescriptiveNumber(1);
        _this.duration.description = 'ten minutes'; //new DescriptiveNumberFactory(this).filter((x: DescriptiveNumber) => x.type === DescriptiveNumber.Type.UtilityDuration).get(1)[0] as DescriptiveNumber;
        _this.chance = 0.5
            / _this.objects[0].rarity
            / _this.objects[1].rarity
            / _this.duration.getValue();
        _this.description = 'You can communicate with ' + _this.objects[1].description + ' for ' + _this.duration.getDescription() + '. ' + _this.objects[0].description;
        _this.compensate();
        return _this;
    }
    return animalSpeak;
}(utility_1.Utility));
exports.animalSpeak = animalSpeak;

},{"../../../components/abilityObjectFactory":8,"../../../components/descriptiveNumber":48,"../../characterContext":72,"../../utility":75}],84:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.blockUtility = void 0;
var descriptiveNumber_1 = require("../../../components/descriptiveNumber");
var ability_1 = require("../../ability");
var characterContext_1 = require("../../characterContext");
var utility_1 = require("../../utility");
var blockUtility = /** @class */ (function (_super) {
    __extends(blockUtility, _super);
    function blockUtility() {
        var _this = _super.call(this, 'Block') || this;
        _this.weight = function () { return characterContext_1.CharacterContext.classes.includes(characterContext_1.CharacterContext.Class.Fighter) ? characterContext_1.CharacterContext.IN_CLASS_MODIFIER : characterContext_1.CharacterContext.OUT_OF_CLASS_WEIGHT; };
        _this.cooldown = ability_1.Ability.Cooldown.Encounter;
        _this.chance = 0.45;
        _this.value = new descriptiveNumber_1.DescriptiveNumber(15);
        _this.compensate();
        _this.description = 'Use as reaction when being attacked. If you succeed you reduce damage by ' + _this.value.getDescription() + '. You gain 2 Boons for chance roll if you use a shield. ';
        return _this;
    }
    return blockUtility;
}(utility_1.Utility));
exports.blockUtility = blockUtility;

},{"../../../components/descriptiveNumber":48,"../../ability":62,"../../characterContext":72,"../../utility":75}],85:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.enticeRespectUtility = void 0;
var abilityObjectFactory_1 = require("../../../components/abilityObjectFactory");
var characterContext_1 = require("../../characterContext");
var utility_1 = require("../../utility");
var enticeRespectUtility = /** @class */ (function (_super) {
    __extends(enticeRespectUtility, _super);
    function enticeRespectUtility() {
        var _this = _super.call(this, 'Entice Respect') || this;
        _this.weight = function () { return characterContext_1.CharacterContext.classes.includes(characterContext_1.CharacterContext.Class.Fighter) ? characterContext_1.CharacterContext.IN_CLASS_MODIFIER : characterContext_1.CharacterContext.OUT_OF_CLASS_WEIGHT; };
        _this.objects.push(new abilityObjectFactory_1.AbilityObjectFactory(_this).filter(function (x) { return x.isPerson; }).get(1)[0]);
        _this.chance = 0.8;
        _this.compensate();
        _this.description = 'If you succeed you entice respect among ' + _this.objects[0].description + '. They will forgive minor missteps, give minor benefits or back away from conflict. This lasts until end of the day. ';
        return _this;
    }
    return enticeRespectUtility;
}(utility_1.Utility));
exports.enticeRespectUtility = enticeRespectUtility;

},{"../../../components/abilityObjectFactory":8,"../../characterContext":72,"../../utility":75}],86:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.equipmentMaintenanceUtility = void 0;
var descriptiveNumber_1 = require("../../../components/descriptiveNumber");
var ability_1 = require("../../ability");
var characterContext_1 = require("../../characterContext");
var utility_1 = require("../../utility");
var equipmentMaintenanceUtility = /** @class */ (function (_super) {
    __extends(equipmentMaintenanceUtility, _super);
    function equipmentMaintenanceUtility() {
        var _this = _super.call(this, 'Equipment Maintenance') || this;
        _this.weight = function () { return characterContext_1.CharacterContext.classes.includes(characterContext_1.CharacterContext.Class.Fighter) ? characterContext_1.CharacterContext.IN_CLASS_MODIFIER : characterContext_1.CharacterContext.OUT_OF_CLASS_WEIGHT; };
        _this.cooldown = ability_1.Ability.Cooldown.Daily;
        _this.chance = 0.9;
        _this.value = new descriptiveNumber_1.DescriptiveNumber(10);
        _this.compensate();
        _this.description = 'If you succeed repair and maintain equipment. You can repair weapons and armor after being damaged by acid and similar effects. Additionally until end of the day maintained armor or shield grants extra ' + _this.value.getDescription() + ' Armor Points. ';
        return _this;
    }
    return equipmentMaintenanceUtility;
}(utility_1.Utility));
exports.equipmentMaintenanceUtility = equipmentMaintenanceUtility;

},{"../../../components/descriptiveNumber":48,"../../ability":62,"../../characterContext":72,"../../utility":75}],87:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.lockpickingUtility = void 0;
var ability_1 = require("../../ability");
var characterContext_1 = require("../../characterContext");
var utility_1 = require("../../utility");
var lockpickingUtility = /** @class */ (function (_super) {
    __extends(lockpickingUtility, _super);
    function lockpickingUtility() {
        var _this = _super.call(this, 'Lockpicking') || this;
        _this.weight = function () { return characterContext_1.CharacterContext.classes.includes(characterContext_1.CharacterContext.Class.Rogue) ? characterContext_1.CharacterContext.IN_CLASS_MODIFIER : characterContext_1.CharacterContext.OUT_OF_CLASS_WEIGHT; };
        _this.cooldown = ability_1.Ability.Cooldown.Daily;
        _this.chance = 1.5;
        _this.description = 'You can spend some time to open an lock silently and without leaving a trace. ';
        _this.compensate();
        return _this;
    }
    return lockpickingUtility;
}(utility_1.Utility));
exports.lockpickingUtility = lockpickingUtility;

},{"../../ability":62,"../../characterContext":72,"../../utility":75}],88:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.pickpocketUtility = void 0;
var abilityObjectFactory_1 = require("../../../components/abilityObjectFactory");
var characterContext_1 = require("../../characterContext");
var utility_1 = require("../../utility");
var pickpocketUtility = /** @class */ (function (_super) {
    __extends(pickpocketUtility, _super);
    function pickpocketUtility() {
        var _this = _super.call(this, 'Pickpocketing') || this;
        _this.objects.push(new abilityObjectFactory_1.AbilityObjectFactory(_this).filter(function (x) { return x.isPerson; }).get(1)[0]);
        _this.weight = function () { return characterContext_1.CharacterContext.classes.includes(characterContext_1.CharacterContext.Class.Rogue) ? characterContext_1.CharacterContext.IN_CLASS_MODIFIER : characterContext_1.CharacterContext.OUT_OF_CLASS_WEIGHT; };
        _this.chance = 0.9;
        _this.description = 'You can quickly steal one object from target ' + _this.objects[0].description + '. If this ability fails, the target might suspect someone trying to steal from them. ';
        _this.compensate();
        return _this;
    }
    return pickpocketUtility;
}(utility_1.Utility));
exports.pickpocketUtility = pickpocketUtility;

},{"../../../components/abilityObjectFactory":8,"../../characterContext":72,"../../utility":75}],89:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.shadowMeldUtility = void 0;
var abilityObjectFactory_1 = require("../../../components/abilityObjectFactory");
var ability_1 = require("../../ability");
var characterContext_1 = require("../../characterContext");
var utility_1 = require("../../utility");
var shadowMeldUtility = /** @class */ (function (_super) {
    __extends(shadowMeldUtility, _super);
    function shadowMeldUtility() {
        var _this = _super.call(this, 'Shadow Meld') || this;
        _this.weight = function () { return characterContext_1.CharacterContext.classes.includes(characterContext_1.CharacterContext.Class.Rogue) ? characterContext_1.CharacterContext.IN_CLASS_MODIFIER : characterContext_1.CharacterContext.OUT_OF_CLASS_WEIGHT; };
        _this.objects.push(new abilityObjectFactory_1.AbilityObjectFactory(_this).filter(function (x) { return x.isStealth; }).get(1)[0]);
        _this.cooldown = ability_1.Ability.Cooldown.Daily;
        _this.chance = 1.6
            / _this.objects[0].rarity;
        _this.description = 'You slowly becoome almost undetectable, this effect lasts until you move. ' + _this.objects[0].description;
        _this.compensate();
        return _this;
    }
    return shadowMeldUtility;
}(utility_1.Utility));
exports.shadowMeldUtility = shadowMeldUtility;

},{"../../../components/abilityObjectFactory":8,"../../ability":62,"../../characterContext":72,"../../utility":75}],90:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.shadowStrideUtility = void 0;
var abilityObjectFactory_1 = require("../../../components/abilityObjectFactory");
var ability_1 = require("../../ability");
var characterContext_1 = require("../../characterContext");
var utility_1 = require("../../utility");
var shadowStrideUtility = /** @class */ (function (_super) {
    __extends(shadowStrideUtility, _super);
    function shadowStrideUtility() {
        var _this = _super.call(this, 'Shadow Stride') || this;
        _this.weight = function () { return characterContext_1.CharacterContext.classes.includes(characterContext_1.CharacterContext.Class.Rogue) ? characterContext_1.CharacterContext.IN_CLASS_MODIFIER : characterContext_1.CharacterContext.OUT_OF_CLASS_WEIGHT; };
        _this.objects.push(new abilityObjectFactory_1.AbilityObjectFactory(_this).filter(function (x) { return x.isStealth; }).get(1)[0]);
        _this.cooldown = ability_1.Ability.Cooldown.Daily;
        _this.chance = 1.4
            / _this.objects[0].rarity;
        _this.description = 'You move about 50 meters in half a minute, being almost undetectable. ' + _this.objects[0].description;
        _this.compensate();
        return _this;
    }
    return shadowStrideUtility;
}(utility_1.Utility));
exports.shadowStrideUtility = shadowStrideUtility;

},{"../../../components/abilityObjectFactory":8,"../../ability":62,"../../characterContext":72,"../../utility":75}],91:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.shiftBlameUtility = void 0;
var abilityObjectFactory_1 = require("../../../components/abilityObjectFactory");
var characterContext_1 = require("../../characterContext");
var utility_1 = require("../../utility");
var shiftBlameUtility = /** @class */ (function (_super) {
    __extends(shiftBlameUtility, _super);
    function shiftBlameUtility() {
        var _this = _super.call(this, 'Shift Blame') || this;
        _this.weight = function () { return characterContext_1.CharacterContext.classes.includes(characterContext_1.CharacterContext.Class.Rogue) ? characterContext_1.CharacterContext.IN_CLASS_MODIFIER : characterContext_1.CharacterContext.OUT_OF_CLASS_WEIGHT; };
        _this.objects.push(new abilityObjectFactory_1.AbilityObjectFactory(_this).filter(function (x) { return x.isPerson; }).get(1)[0]);
        _this.chance = 0.7;
        _this.description = 'When you are accussed of something immiedietly shift blame to someone else. For about 15 minutes ' + _this.objects[0].description + ' will believe this lie, before starting to investigate it more thoroughly. ';
        _this.compensate();
        return _this;
    }
    return shiftBlameUtility;
}(utility_1.Utility));
exports.shiftBlameUtility = shiftBlameUtility;

},{"../../../components/abilityObjectFactory":8,"../../characterContext":72,"../../utility":75}],92:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.tumbleUtility = void 0;
var abilityObjectFactory_1 = require("../../../components/abilityObjectFactory");
var descriptiveNumber_1 = require("../../../components/descriptiveNumber");
var ability_1 = require("../../ability");
var characterContext_1 = require("../../characterContext");
var utility_1 = require("../../utility");
var tumbleUtility = /** @class */ (function (_super) {
    __extends(tumbleUtility, _super);
    function tumbleUtility() {
        var _this = _super.call(this, 'Tumble') || this;
        _this.weight = function () { return characterContext_1.CharacterContext.classes.includes(characterContext_1.CharacterContext.Class.Rogue) ? characterContext_1.CharacterContext.IN_CLASS_MODIFIER : characterContext_1.CharacterContext.OUT_OF_CLASS_WEIGHT; };
        _this.objects.push(new abilityObjectFactory_1.AbilityObjectFactory(_this).filter(function (x) { return x.isMovement; }).get(1)[0]);
        _this.cooldown = ability_1.Ability.Cooldown.Encounter;
        _this.chance = 0.35;
        _this.value = new descriptiveNumber_1.DescriptiveNumber(5);
        _this.compensate();
        _this.description = 'Use as reaction when being attacked. If you succeed you can move away ' + _this.value.getDescription() + ' meters. ' + _this.objects[0].description + ' If you can move outside attack range or behind cover, you dodge the attack. ';
        return _this;
    }
    return tumbleUtility;
}(utility_1.Utility));
exports.tumbleUtility = tumbleUtility;

},{"../../../components/abilityObjectFactory":8,"../../../components/descriptiveNumber":48,"../../ability":62,"../../characterContext":72,"../../utility":75}],93:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.skillBonusUtility = void 0;
var classUtils_1 = require("../../characters/classUtils");
var descriptiveNumber_1 = require("../../components/descriptiveNumber");
var characterContext_1 = require("../characterContext");
var utility_1 = require("../utility");
var utils_1 = require("../utils");
var skillBonusUtility = /** @class */ (function (_super) {
    __extends(skillBonusUtility, _super);
    function skillBonusUtility() {
        var _this = this;
        var skill;
        var roll = utils_1.Utils.random();
        var classRoll = utils_1.Utils.D(characterContext_1.CharacterContext.classes.length) - 1;
        if (roll < 0.55) {
            skill = __spreadArray([], __read(classUtils_1.ClassUtils.SKILL_TO_ATTRIBUTE.keys()), false).filter(function (key) {
                return classUtils_1.ClassUtils.SKILL_TO_ATTRIBUTE.get(key) === classUtils_1.ClassUtils.getClass(characterContext_1.CharacterContext.Class[characterContext_1.CharacterContext.classes[classRoll]]).primaryAttribute;
            }).sort(function () { return 0.5 - utils_1.Utils.random(); })[0];
        }
        else if (roll < 0.8) {
            skill = __spreadArray([], __read(classUtils_1.ClassUtils.SKILL_TO_ATTRIBUTE.keys()), false).filter(function (key) {
                return classUtils_1.ClassUtils.SKILL_TO_ATTRIBUTE.get(key) === classUtils_1.ClassUtils.getClass(characterContext_1.CharacterContext.Class[characterContext_1.CharacterContext.classes[classRoll]]).secondaryAttribute;
            }).sort(function () { return 0.5 - utils_1.Utils.random(); })[0];
        }
        else {
            skill = __spreadArray([], __read(classUtils_1.ClassUtils.SKILL_TO_ATTRIBUTE.keys()), false).sort(function () { return 0.5 - utils_1.Utils.random(); })[0];
        }
        _this = _super.call(this, characterContext_1.CharacterContext.Skill[skill] + ' Bonus') || this;
        _this.weight = function () { return 1; };
        var boonNumbers = new descriptiveNumber_1.DescriptiveNumber(2);
        _this.chance = 2 * Math.pow(5 / 6, boonNumbers.getValue());
        _this.description = 'For duration of an Encounter, gain ' + boonNumbers.getDescription() + ' Boons when rolling for ' + characterContext_1.CharacterContext.Skill[skill] + '. This bonus does not stack. ';
        _this.compensate();
        return _this;
    }
    return skillBonusUtility;
}(utility_1.Utility));
exports.skillBonusUtility = skillBonusUtility;

},{"../../characters/classUtils":3,"../../components/descriptiveNumber":48,"../characterContext":72,"../utility":75,"../utils":94}],94:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utils = void 0;
var Utils = /** @class */ (function () {
    function Utils() {
    }
    Utils.random = function () {
        return this.gen.random(); // Math.random();
    };
    ;
    //since High Accuracy and Low Accuracy attacks are easily exploitable. Thus we provide bonus to Medium Accuracy attacks.
    Utils.getDPSCoefficient = function (chance) {
        //return 1.1 - 0.2 * Math.abs(0.5 - chance);
        return 1; //TODO restore
    };
    Utils.getDPS = function (level) {
        return Utils.DPS; //+ Utils.POWER_PER_LEVEL * (level - 1)
    };
    Utils.getRangeCoeficient = function (range) {
        if (range <= 1)
            return 1;
        if (range <= 5)
            return 0.95;
        if (range <= 10)
            return 0.90;
        if (range <= 15)
            return 0.85;
        if (range <= 20)
            return 0.80;
        if (range <= 25)
            return 0.75;
        throw 'unsupported range ' + range;
        //return (21 + range )/(20 + 2 * range)
    };
    Utils.getDurationCoeficient = function (dur) {
        var coef = 0;
        if (dur >= 1)
            coef += 0.7;
        if (dur >= 2)
            coef += 0.6;
        if (dur >= 3)
            coef += 0.5;
        if (dur >= 4)
            coef += 0.4;
        if (dur >= 5) {
            coef += (dur - 4) * 0.3;
        }
        return coef;
    };
    Utils.valueToDiceRoll = function (num) {
        if (num < 0)
            throw ('damage too low to represent');
        if (num < 2.25)
            return Math.round(num) + '';
        if (num < 3)
            return 'D4';
        if (num < 4)
            return 'D6';
        if (num < 5)
            return 'D8';
        if (num < 6)
            return 'D10';
        if (num < 14)
            return 'D10 + ' + Math.round(num - 5.5);
        if (num < 20) {
            if (this.isOneDie(num)) {
                return 'D10 + ' + Math.round(num - 5.5);
            }
            return '2D6 + ' + Math.round(num - 7);
        }
        if (num < 100) {
            if (this.isOneDie(num)) {
                return 'D20 + ' + Math.round(num - 10.5);
            }
            return '2D10 + ' + Math.round(num - 11);
        }
        if (num < 200) {
            if (this.isOneDie(num)) {
                return 'D100 + ' + Math.round(num - 50.5);
            }
            return '2D20 + ' + Math.round(num - 21);
        }
        return Math.round(num) + '';
    };
    Utils.isOneDie = function (num) {
        return Math.round(num * 2) % 2 === 1;
    };
    Utils.getNumberFromValueMap = function (orderedValueMap, factory) {
        var roll = Utils.random();
        var items = [];
        orderedValueMap.forEach(function (value, key) {
            if (roll <= key) {
                return;
            }
            items = factory.get(value);
        });
        return items;
    };
    Utils.D = function (value) {
        return Math.ceil(Utils.random() * value);
    };
    Utils.DPS = 5;
    Utils.ENEMY_DPS = 10;
    Utils.POWER_PER_LEVEL = 0.2;
    Utils.BASIC_ATTACK_DPS = 2.5;
    Utils.ATTACK_DESCRIPTIVE_NUMBER_CHANCE = 0.25;
    Utils.AVG_ENEMIES_ADJACENT = 1.9;
    Utils.AVG_PLAYERS = 3;
    Utils.AVG_ENEMIES_PER_PLAYER = 2;
    Utils.AVG_TURN = 4;
    Utils.AVG_SCARS = 2.5;
    Utils.AVG_RALLIES = 0.8;
    Utils.AVG_POTIONS = 2.5;
    Utils.AVG_CLOSTEST_DISTANCE = 10;
    Utils.AVG_LONGEST_DISTANCE = 20;
    Utils.EFFECT_WEIGHT_MOD = 1.1;
    Utils.RARE_MODIFIER = 0.1;
    Utils.BoonValue = Utils.DPS * 5;
    Utils.avgHealth = 25;
    return Utils;
}());
exports.Utils = Utils;

},{}],95:[function(require,module,exports){
"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeightedList = void 0;
var utils_1 = require("./utils");
var WeightedList = /** @class */ (function () {
    function WeightedList(items) {
        this.items = [];
        if (items) {
            this.items = items;
        }
    }
    WeightedList.prototype.filter = function (z) {
        return new WeightedList(this.items.filter(z));
    };
    WeightedList.prototype.push = function (item) {
        this.items.push(item);
    };
    WeightedList.prototype.get = function (num, affector, banList) {
        return WeightedList.getRandomFromList(__spreadArray([], __read(this.items), false), num, affector);
    };
    WeightedList.getRandomFromList = function (array, num, affector) {
        if (array.length < num) {
            throw 'cannot find ' + num + ' items in array with ' + array.length + ' elements';
        }
        var allWeight = array.reduce(function (sum, item) {
            return sum + item.weight(affector);
        }, 0);
        var roll = utils_1.Utils.random() * allWeight;
        var randomElement;
        var newArray;
        if (allWeight <= 0) {
            throw 'not enought weight to choose element: ' + allWeight;
        }
        for (var i = 0; i < array.length; i++) {
            roll -= array[i].weight(affector);
            if (roll < 0) {
                randomElement = array[i];
                newArray = array.filter(function (n) { return n != randomElement; });
                break;
            }
        }
        if (randomElement && newArray) {
            if (num <= 1) {
                return [randomElement];
            }
            else {
                return __spreadArray([randomElement], __read(WeightedList.getRandomFromList(newArray, num - 1, affector)), false);
            }
        }
        throw 'bad randomness';
    };
    return WeightedList;
}());
exports.WeightedList = WeightedList;

},{"./utils":94}],96:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Effect = void 0;
var modifier_1 = require("./modifier");
var Effect = /** @class */ (function (_super) {
    __extends(Effect, _super);
    function Effect(otherName) {
        var _this = _super.call(this, otherName) || this;
        _this.modifierType = modifier_1.Modifier.Type.Effect;
        return _this;
    }
    return Effect;
}(modifier_1.Modifier));
exports.Effect = Effect;
(function (Effect) {
    var Subtype;
    (function (Subtype) {
        Subtype[Subtype["Buff"] = 0] = "Buff";
        Subtype[Subtype["Debuff"] = 1] = "Debuff";
        Subtype[Subtype["Single"] = 2] = "Single";
    })(Subtype = Effect.Subtype || (Effect.Subtype = {}));
})(Effect || (exports.Effect = Effect = {}));

},{"./modifier":108}],97:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.EffectFactory = void 0;
var weightedList_1 = require("../core/weightedList");
var factory_1 = require("../core/factory");
//factory imports
var vulnerableEffect_1 = require("./effectRepository/vulnerableEffect");
var stunEffect_1 = require("./effectRepository/stunEffect");
var scalingDotEffect_1 = require("./effectRepository/scalingDotEffect");
var protectedEffect_1 = require("./effectRepository/protectedEffect");
var retributionEffect_1 = require("./effectRepository/multiclassEffects/retributionEffect");
var invisibilityEffect_1 = require("./effectRepository/multiclassEffects/invisibilityEffect");
var instakillEffect_1 = require("./effectRepository/instakillEffect");
var guidingEffect_1 = require("./effectRepository/guidingEffect");
var exposeEffect_1 = require("./effectRepository/exposeEffect");
var damageBonusEffect_1 = require("./effectRepository/damageBonusEffect");
var EffectFactory = /** @class */ (function (_super) {
    __extends(EffectFactory, _super);
    function EffectFactory(affector, list) {
        var _this = _super.call(this, affector) || this;
        if (list === undefined) {
            _this.items = new weightedList_1.WeightedList();
            _this.items.push(new vulnerableEffect_1.vulnerableEffect());
            _this.items.push(new stunEffect_1.stunEffect());
            _this.items.push(new scalingDotEffect_1.scalingDotEffect());
            _this.items.push(new protectedEffect_1.protectedEffect());
            _this.items.push(new retributionEffect_1.retributionEffect());
            _this.items.push(new invisibilityEffect_1.invisibilityEffect());
            _this.items.push(new instakillEffect_1.instakillEffect());
            _this.items.push(new guidingEffect_1.guidingEffect());
            _this.items.push(new exposeEffect_1.exposeEffect());
            _this.items.push(new damageBonusEffect_1.damageBonusEffect());
        }
        else {
            _this.items = list;
        }
        return _this;
    }
    EffectFactory.prototype.get = function (count) {
        return _super.prototype.get.call(this, count);
    };
    EffectFactory.prototype.filter = function (z) {
        return _super.prototype.filter.call(this, z);
    };
    return EffectFactory;
}(factory_1.Factory));
exports.EffectFactory = EffectFactory;

},{"../core/factory":73,"../core/weightedList":95,"./effectRepository/damageBonusEffect":98,"./effectRepository/exposeEffect":99,"./effectRepository/guidingEffect":100,"./effectRepository/instakillEffect":101,"./effectRepository/multiclassEffects/invisibilityEffect":102,"./effectRepository/multiclassEffects/retributionEffect":103,"./effectRepository/protectedEffect":104,"./effectRepository/scalingDotEffect":105,"./effectRepository/stunEffect":106,"./effectRepository/vulnerableEffect":107}],98:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.damageBonusEffect = void 0;
var ability_1 = require("../../core/ability");
var utils_1 = require("../../core/utils");
var effect_1 = require("../effect");
var damageBonusEffect = /** @class */ (function (_super) {
    __extends(damageBonusEffect, _super);
    function damageBonusEffect() {
        var _this = _super.call(this) || this;
        _this.weight = function () { return 1000; };
        _this.value = Math.ceil(utils_1.Utils.random() * 4) + 1;
        _this.duration = Math.ceil(utils_1.Utils.random() * 2 + 0.5);
        _this.name = 'Empower ' + _this.value + 'x' + _this.duration;
        _this.namePrefix = 'Empowering';
        _this.description = 'Empower ' + _this.value + ' - when dealing damage with an Ability deal +' + _this.value + ' bonus damage. This effect lasts for ' + _this.duration + ' turns. ';
        _this.subtype = effect_1.Effect.Subtype.Buff;
        _this.elements = [[ability_1.Ability.Element.Physical, ability_1.Ability.Element.Lightning, ability_1.Ability.Element.Fire, ability_1.Ability.Element.Ice, ability_1.Ability.Element.Dark].sort(function () { return 0.5 - utils_1.Utils.random(); })[1]];
        _this.powerBonus = function (x) { return -0.5 * _this.value * utils_1.Utils.getDurationCoeficient(_this.duration); };
        return _this;
    }
    return damageBonusEffect;
}(effect_1.Effect));
exports.damageBonusEffect = damageBonusEffect;

},{"../../core/ability":62,"../../core/utils":94,"../effect":96}],99:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.exposeEffect = void 0;
var utils_1 = require("../../core/utils");
var effect_1 = require("../effect");
var exposeEffect = /** @class */ (function (_super) {
    __extends(exposeEffect, _super);
    function exposeEffect() {
        var _this = _super.call(this) || this;
        _this.value = Math.ceil(utils_1.Utils.random() * 2.2);
        _this.name = 'Expose ' + _this.value;
        _this.namePrefix = 'Exposing';
        _this.description = 'Exposed - when rolling for an ability targeting this creature, any attacker gains ' + _this.value + ' Boons. This effect lasts until end of your next turn. ';
        _this.subtype = effect_1.Effect.Subtype.Debuff;
        _this.powerBonus = function (x) { return -utils_1.Utils.BoonValue * (1 - Math.pow(5 / 6, _this.value)) * utils_1.Utils.AVG_PLAYERS * 0.8; };
        return _this;
    }
    return exposeEffect;
}(effect_1.Effect));
exports.exposeEffect = exposeEffect;

},{"../../core/utils":94,"../effect":96}],100:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.guidingEffect = void 0;
var ability_1 = require("../../core/ability");
var utils_1 = require("../../core/utils");
var effect_1 = require("../effect");
var guidingEffect = /** @class */ (function (_super) {
    __extends(guidingEffect, _super);
    function guidingEffect() {
        var _this = _super.call(this) || this;
        _this.value = Math.ceil(utils_1.Utils.random() * 2.2);
        _this.duration = Math.ceil(utils_1.Utils.random() * 2 + 0.5);
        _this.name = 'Guide ' + _this.value + 'x' + _this.duration;
        _this.namePrefix = 'Guiding';
        _this.description = 'Guide - when rolling for an Ability chance gain ' + _this.value + ' Boon. This effect lasts for ' + _this.duration + ' turns. ';
        _this.subtype = effect_1.Effect.Subtype.Buff;
        _this.elements = [[ability_1.Ability.Element.Radiant, ability_1.Ability.Element.Emotion].sort(function () { return 0.5 - utils_1.Utils.random(); })[1]];
        _this.powerBonus = function (x) { return -utils_1.Utils.BoonValue * (1 - Math.pow(5 / 6, _this.value)) * utils_1.Utils.getDurationCoeficient(_this.duration); };
        return _this;
    }
    return guidingEffect;
}(effect_1.Effect));
exports.guidingEffect = guidingEffect;

},{"../../core/ability":62,"../../core/utils":94,"../effect":96}],101:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.instakillEffect = void 0;
var ability_1 = require("../../core/ability");
var utils_1 = require("../../core/utils");
var effect_1 = require("../effect");
var instakillEffect = /** @class */ (function (_super) {
    __extends(instakillEffect, _super);
    function instakillEffect() {
        var _this = _super.call(this) || this;
        _this.powerBonus = function () { return -1000; };
        _this.weight = function () { return utils_1.Utils.RARE_MODIFIER; };
        _this.name = 'Instakill';
        _this.namePrefix = 'Instakill';
        _this.description = 'Instakill - if applied successfully, target dies.';
        _this.subtype = effect_1.Effect.Subtype.Debuff;
        _this.elements = [[ability_1.Ability.Element.Dark, ability_1.Ability.Element.Physical, ability_1.Ability.Element.Poison].sort(function () { return 0.5 - utils_1.Utils.random(); })[1]];
        return _this;
    }
    return instakillEffect;
}(effect_1.Effect));
exports.instakillEffect = instakillEffect;

},{"../../core/ability":62,"../../core/utils":94,"../effect":96}],102:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.invisibilityEffect = void 0;
var characterContext_1 = require("../../../core/characterContext");
var utils_1 = require("../../../core/utils");
var effect_1 = require("../../effect");
var invisibilityEffect = /** @class */ (function (_super) {
    __extends(invisibilityEffect, _super);
    function invisibilityEffect() {
        var _this = _super.call(this) || this;
        _this.duration = Math.ceil(utils_1.Utils.random() * 2 + 0.5);
        _this.powerBonus = function () { return -utils_1.Utils.DPS / 2 * utils_1.Utils.getDurationCoeficient(_this.duration); };
        _this.weight = function () {
            return characterContext_1.CharacterContext.classes.includes(characterContext_1.CharacterContext.Class.Rogue) ||
                characterContext_1.CharacterContext.classes.includes(characterContext_1.CharacterContext.Class.Wizard)
                ? characterContext_1.CharacterContext.IN_CLASS_MODIFIER
                : characterContext_1.CharacterContext.OUT_OF_CLASS_WEIGHT;
        };
        _this.name = 'Invisibilty ' + _this.duration;
        _this.namePrefix = 'Vanishing';
        _this.description = 'Invisibilty - if you moved while invisible, you cannot be targeted by enemies without truesight and are considered hidden until you attack. This effect lasts ' + _this.duration + ' turns.';
        _this.subtype = effect_1.Effect.Subtype.Buff;
        return _this;
    }
    return invisibilityEffect;
}(effect_1.Effect));
exports.invisibilityEffect = invisibilityEffect;

},{"../../../core/characterContext":72,"../../../core/utils":94,"../../effect":96}],103:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.retributionEffect = void 0;
var characterContext_1 = require("../../../core/characterContext");
var utils_1 = require("../../../core/utils");
var effect_1 = require("../../effect");
var retributionEffect = /** @class */ (function (_super) {
    __extends(retributionEffect, _super);
    function retributionEffect() {
        var _this = _super.call(this) || this;
        _this.duration = Math.ceil(utils_1.Utils.random() * 2 + 0.5);
        _this.powerBonus = function () { return -utils_1.Utils.ENEMY_DPS * 0.9 * utils_1.Utils.getDurationCoeficient(_this.duration); };
        _this.weight = function () {
            return characterContext_1.CharacterContext.classes.includes(characterContext_1.CharacterContext.Class.Cleric) ||
                characterContext_1.CharacterContext.classes.includes(characterContext_1.CharacterContext.Class.Paladin)
                ? characterContext_1.CharacterContext.IN_CLASS_MODIFIER
                : characterContext_1.CharacterContext.OUT_OF_CLASS_WEIGHT;
        };
        _this.name = 'Retribution ' + _this.duration;
        _this.namePrefix = 'Retributive';
        _this.description = 'Retribution - whenever you are dealt damage, the source of the damage immidietly takes the same amount of damage ignoring its resistances. This effect lasts ' + _this.duration + ' turns.';
        _this.subtype = effect_1.Effect.Subtype.Buff;
        return _this;
    }
    return retributionEffect;
}(effect_1.Effect));
exports.retributionEffect = retributionEffect;

},{"../../../core/characterContext":72,"../../../core/utils":94,"../../effect":96}],104:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.protectedEffect = void 0;
var utils_1 = require("../../core/utils");
var effect_1 = require("../effect");
var protectedEffect = /** @class */ (function (_super) {
    __extends(protectedEffect, _super);
    function protectedEffect() {
        var _this = _super.call(this) || this;
        _this.value = Math.ceil(utils_1.Utils.DPS * (utils_1.Utils.random()));
        _this.duration = Math.ceil(utils_1.Utils.random() * 3) + 1;
        _this.weight = function () { return 1; };
        _this.powerBonus = function (x) { return -utils_1.Utils.ENEMY_DPS * 5 / 10 * utils_1.Utils.getDurationCoeficient(_this.duration); };
        _this.name = 'Protection ' + _this.duration;
        _this.namePrefix = 'Protecting';
        _this.description = _this.namePrefix + ' - whenever you take damage and/or are affected by an enemy, roll D10, on 8-0 you ignore this damage/effect. This lasts for ' + _this.duration + ' turns.';
        _this.subtype = effect_1.Effect.Subtype.Buff;
        return _this;
    }
    return protectedEffect;
}(effect_1.Effect));
exports.protectedEffect = protectedEffect;

},{"../../core/utils":94,"../effect":96}],105:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.scalingDotEffect = void 0;
var ability_1 = require("../../core/ability");
var utils_1 = require("../../core/utils");
var effect_1 = require("../effect");
var scalingDotEffect = /** @class */ (function (_super) {
    __extends(scalingDotEffect, _super);
    function scalingDotEffect() {
        var _this = _super.call(this) || this;
        var dotInit = [[ability_1.Ability.Element.Physical, 'Bleeding'], [ability_1.Ability.Element.Fire, 'Burning'], [ability_1.Ability.Element.Poison, 'Poisoned']].sort(function () { return 0.5 - utils_1.Utils.random(); })[0];
        _this.value = Math.ceil(utils_1.Utils.DPS * (utils_1.Utils.random()));
        _this.duration = Math.ceil(utils_1.Utils.random() * 3) + 1;
        _this.powerMultiplier = function (x) { return 1 / (1 + utils_1.Utils.getDurationCoeficient(_this.duration)); };
        _this.elements = [dotInit[0]];
        _this.name = dotInit[1] + ' ?x' + _this.duration;
        _this.namePrefix = dotInit[1];
        _this.description = _this.namePrefix + ' - at the end of each turn target takes damage taken from this power again, lasts for ' + _this.duration + ' turns.';
        _this.subtype = effect_1.Effect.Subtype.Debuff;
        return _this;
    }
    return scalingDotEffect;
}(effect_1.Effect));
exports.scalingDotEffect = scalingDotEffect;

},{"../../core/ability":62,"../../core/utils":94,"../effect":96}],106:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.stunEffect = void 0;
var ability_1 = require("../../core/ability");
var utils_1 = require("../../core/utils");
var effect_1 = require("../effect");
var stunEffect = /** @class */ (function (_super) {
    __extends(stunEffect, _super);
    function stunEffect() {
        var _this = _super.call(this) || this;
        _this.powerBonus = function () { return -1.5 * utils_1.Utils.getDPS(1); };
        _this.name = 'Stun';
        _this.namePrefix = 'Stunning';
        _this.description = 'Stunned - character cannot take actions. Stunned ends at the end of a turn.';
        _this.subtype = effect_1.Effect.Subtype.Debuff;
        _this.elements = [[ability_1.Ability.Element.Physical, ability_1.Ability.Element.Ice].sort(function () { return 0.5 - utils_1.Utils.random(); })[1]];
        return _this;
    }
    return stunEffect;
}(effect_1.Effect));
exports.stunEffect = stunEffect;

},{"../../core/ability":62,"../../core/utils":94,"../effect":96}],107:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.vulnerableEffect = void 0;
var utils_1 = require("../../core/utils");
var effect_1 = require("../effect");
var vulnerableEffect = /** @class */ (function (_super) {
    __extends(vulnerableEffect, _super);
    function vulnerableEffect() {
        var _this = _super.call(this) || this;
        _this.value = Math.ceil(utils_1.Utils.random() * 4) + 1;
        _this.name = 'Vulnerable ' + _this.value;
        _this.namePrefix = 'Debilitating';
        _this.description = 'Vulnerable ' + _this.value + ' - when taking damage from an Ability take +' + _this.value + ' bonus damage. This effect lasts for 1 turns. ';
        _this.subtype = effect_1.Effect.Subtype.Debuff;
        _this.powerBonus = function (x) { return -0.5 * _this.value * utils_1.Utils.AVG_PLAYERS * 0.8; };
        return _this;
    }
    return vulnerableEffect;
}(effect_1.Effect));
exports.vulnerableEffect = vulnerableEffect;

},{"../../core/utils":94,"../effect":96}],108:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modifier = void 0;
var Modifier = /** @class */ (function () {
    function Modifier(otherName) {
        this.powerBonus = function (x) { return 0; };
        this.powerMultiplier = function (x) { return 1; };
        this.weight = function (x) { return 1; };
        this.chance = 1;
        if (otherName !== undefined) {
            this.name = otherName;
        }
    }
    return Modifier;
}());
exports.Modifier = Modifier;
(function (Modifier) {
    var Type;
    (function (Type) {
        Type[Type["Constraint"] = 0] = "Constraint";
        Type[Type["Improvement"] = 1] = "Improvement";
        Type[Type["Effect"] = 2] = "Effect";
        Type[Type["Other"] = 3] = "Other";
    })(Type = Modifier.Type || (Modifier.Type = {}));
})(Modifier || (exports.Modifier = Modifier = {}));

},{}],109:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModifierFactory = void 0;
var weightedList_1 = require("../core/weightedList");
var factory_1 = require("../core/factory");
//factory imports
var vengefulModifier_1 = require("./modifiersRepository/vengefulModifier");
var unlockedModifier_1 = require("./modifiersRepository/unlockedModifier");
var ultimateModifier_1 = require("./modifiersRepository/ultimateModifier");
var signatureModifier_1 = require("./modifiersRepository/signatureModifier");
var selfHealModifier_1 = require("./modifiersRepository/selfHealModifier");
var sneakyModifier_1 = require("./modifiersRepository/rogueModifiers/sneakyModifier");
var luckyModifier_1 = require("./modifiersRepository/rogueModifiers/luckyModifier");
var greedyModifier_1 = require("./modifiersRepository/rogueModifiers/greedyModifier");
var daggerModifier_1 = require("./modifiersRepository/rogueModifiers/daggerModifier");
var cityModifier_1 = require("./modifiersRepository/rogueModifiers/cityModifier");
var restedModifer_1 = require("./modifiersRepository/restedModifer");
var repeatableModifier_1 = require("./modifiersRepository/repeatableModifier");
var piercingModifier_1 = require("./modifiersRepository/piercingModifier");
var opportunistModifier_1 = require("./modifiersRepository/opportunistModifier");
var nightlyModifier_1 = require("./modifiersRepository/nightlyModifier");
var multipleModifier_1 = require("./modifiersRepository/multipleModifier");
var undeadBaneModifier_1 = require("./modifiersRepository/multiclassModifiers/undeadBaneModifier");
var cleanModifier_1 = require("./modifiersRepository/multiclassModifiers/cleanModifier");
var momentumModifier_1 = require("./modifiersRepository/momentumModifier");
var managainModifier_1 = require("./modifiersRepository/managainModifier");
var lifestealModifier_1 = require("./modifiersRepository/lifestealModifier");
var laylineModifier_1 = require("./modifiersRepository/laylineModifier");
var instinctiveModifier_1 = require("./modifiersRepository/instinctiveModifier");
var grazedModifier_1 = require("./modifiersRepository/grazedModifier");
var gainEffectModifier_1 = require("./modifiersRepository/gainEffectModifier");
var forcefulModifier_1 = require("./modifiersRepository/forcefulModifier");
var legendaryWeaponModifier_1 = require("./modifiersRepository/fighterModifiers/legendaryWeaponModifier");
var breachingModifier_1 = require("./modifiersRepository/fighterModifiers/breachingModifier");
var battleModifier_1 = require("./modifiersRepository/fighterModifiers/battleModifier");
var fastModifier_1 = require("./modifiersRepository/fastModifier");
var exhaustingModifer_1 = require("./modifiersRepository/exhaustingModifer");
var compensationModifier_1 = require("./modifiersRepository/compensationModifier");
var templeModifier_1 = require("./modifiersRepository/clericModifiers/templeModifier");
var pristineModifier_1 = require("./modifiersRepository/clericModifiers/pristineModifier");
var preachingModifier_1 = require("./modifiersRepository/clericModifiers/preachingModifier");
var pacifistModifier_1 = require("./modifiersRepository/clericModifiers/pacifistModifier");
var episcopalModifier_1 = require("./modifiersRepository/clericModifiers/episcopalModifier");
var candleModifier_1 = require("./modifiersRepository/clericModifiers/candleModifier");
var cleaveModifier_1 = require("./modifiersRepository/cleaveModifier");
var bloodiedModifier_1 = require("./modifiersRepository/bloodiedModifier");
var applyEffectModifier_1 = require("./modifiersRepository/applyEffectModifier");
var ModifierFactory = /** @class */ (function (_super) {
    __extends(ModifierFactory, _super);
    function ModifierFactory(affector, list) {
        var _this = _super.call(this, affector) || this;
        if (list === undefined) {
            _this.items = new weightedList_1.WeightedList();
            _this.items.push(new vengefulModifier_1.vengefulModifier(affector));
            _this.items.push(new unlockedModifier_1.unlockedModifier(affector));
            _this.items.push(new ultimateModifier_1.ultimateModifier(affector));
            _this.items.push(new signatureModifier_1.signatureModifier(affector));
            _this.items.push(new selfHealModifier_1.selfHealModifier(affector));
            _this.items.push(new sneakyModifier_1.sneakyModifier(affector));
            _this.items.push(new luckyModifier_1.luckyModifier(affector));
            _this.items.push(new greedyModifier_1.greedyModifier(affector));
            _this.items.push(new daggerModifier_1.daggerModifier(affector));
            _this.items.push(new cityModifier_1.cityModifier(affector));
            _this.items.push(new restedModifer_1.restedModifer(affector));
            _this.items.push(new repeatableModifier_1.repeatableModifier(affector));
            _this.items.push(new piercingModifier_1.piercingModifier(affector));
            _this.items.push(new opportunistModifier_1.opportunistModifier(affector));
            _this.items.push(new nightlyModifier_1.nightlyModifier(affector));
            _this.items.push(new multipleModifier_1.multipleModifier(affector));
            _this.items.push(new undeadBaneModifier_1.undeadBaneModifier(affector));
            _this.items.push(new cleanModifier_1.cleanModifier(affector));
            _this.items.push(new momentumModifier_1.momentumModifier(affector));
            _this.items.push(new managainModifier_1.managainModifier(affector));
            _this.items.push(new lifestealModifier_1.lifestealModifier(affector));
            _this.items.push(new laylineModifier_1.laylineModifier(affector));
            _this.items.push(new instinctiveModifier_1.instinctiveModifier(affector));
            _this.items.push(new grazedModifier_1.grazedModifier(affector));
            _this.items.push(new gainEffectModifier_1.gainEffectModifier(affector));
            _this.items.push(new forcefulModifier_1.forcefulModifier(affector));
            _this.items.push(new legendaryWeaponModifier_1.legendaryWeaponModifier(affector));
            _this.items.push(new breachingModifier_1.breachingModifier(affector));
            _this.items.push(new battleModifier_1.battleModifier(affector));
            _this.items.push(new fastModifier_1.fastModifier(affector));
            _this.items.push(new exhaustingModifer_1.exhaustingModifer(affector));
            _this.items.push(new compensationModifier_1.compensationModifier(affector));
            _this.items.push(new templeModifier_1.templeModifier(affector));
            _this.items.push(new pristineModifier_1.pristineModifier(affector));
            _this.items.push(new preachingModifier_1.preachingModifier(affector));
            _this.items.push(new pacifistModifier_1.pacifistModifier(affector));
            _this.items.push(new episcopalModifier_1.episcopalModifier(affector));
            _this.items.push(new candleModifier_1.candleModifier(affector));
            _this.items.push(new cleaveModifier_1.cleaveModifier(affector));
            _this.items.push(new bloodiedModifier_1.bloodiedModifier(affector));
            _this.items.push(new applyEffectModifier_1.applyEffectModifier(affector));
        }
        else {
            _this.items = list;
        }
        return _this;
    }
    ModifierFactory.prototype.get = function (count) {
        return _super.prototype.get.call(this, count);
    };
    ModifierFactory.prototype.filter = function (z) {
        return _super.prototype.filter.call(this, z);
    };
    ModifierFactory.getDPSBonus = function (modifiers, affector) {
        var dps = 0;
        modifiers.forEach(function (m) {
            if (m.powerBonus) {
                console.log('aff: ' + JSON.stringify(affector) + ' m:' + JSON.stringify(m) + ' power:' + m.powerBonus(affector));
                dps += m.powerBonus(affector);
            }
        });
        return dps;
    };
    ModifierFactory.getDPSMultiplier = function (modifiers, affector) {
        var dps = 1;
        modifiers.forEach(function (m) {
            if (m.powerMultiplier) {
                dps *= m.powerMultiplier(affector);
            }
        });
        return dps;
    };
    return ModifierFactory;
}(factory_1.Factory));
exports.ModifierFactory = ModifierFactory;

},{"../core/factory":73,"../core/weightedList":95,"./modifiersRepository/applyEffectModifier":110,"./modifiersRepository/bloodiedModifier":111,"./modifiersRepository/cleaveModifier":112,"./modifiersRepository/clericModifiers/candleModifier":113,"./modifiersRepository/clericModifiers/episcopalModifier":114,"./modifiersRepository/clericModifiers/pacifistModifier":115,"./modifiersRepository/clericModifiers/preachingModifier":116,"./modifiersRepository/clericModifiers/pristineModifier":117,"./modifiersRepository/clericModifiers/templeModifier":118,"./modifiersRepository/compensationModifier":119,"./modifiersRepository/exhaustingModifer":120,"./modifiersRepository/fastModifier":121,"./modifiersRepository/fighterModifiers/battleModifier":122,"./modifiersRepository/fighterModifiers/breachingModifier":123,"./modifiersRepository/fighterModifiers/legendaryWeaponModifier":124,"./modifiersRepository/forcefulModifier":125,"./modifiersRepository/gainEffectModifier":126,"./modifiersRepository/grazedModifier":127,"./modifiersRepository/instinctiveModifier":128,"./modifiersRepository/laylineModifier":129,"./modifiersRepository/lifestealModifier":130,"./modifiersRepository/managainModifier":131,"./modifiersRepository/momentumModifier":132,"./modifiersRepository/multiclassModifiers/cleanModifier":133,"./modifiersRepository/multiclassModifiers/undeadBaneModifier":134,"./modifiersRepository/multipleModifier":135,"./modifiersRepository/nightlyModifier":136,"./modifiersRepository/opportunistModifier":137,"./modifiersRepository/piercingModifier":138,"./modifiersRepository/repeatableModifier":139,"./modifiersRepository/restedModifer":140,"./modifiersRepository/rogueModifiers/cityModifier":141,"./modifiersRepository/rogueModifiers/daggerModifier":142,"./modifiersRepository/rogueModifiers/greedyModifier":143,"./modifiersRepository/rogueModifiers/luckyModifier":144,"./modifiersRepository/rogueModifiers/sneakyModifier":145,"./modifiersRepository/selfHealModifier":146,"./modifiersRepository/signatureModifier":147,"./modifiersRepository/ultimateModifier":148,"./modifiersRepository/unlockedModifier":149,"./modifiersRepository/vengefulModifier":150}],110:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyEffectModifier = void 0;
var ability_1 = require("../../core/ability");
var utils_1 = require("../../core/utils");
var effect_1 = require("../effect");
var effectFactory_1 = require("../effectFactory");
var modifier_1 = require("../modifier");
var applyEffectModifier = /** @class */ (function (_super) {
    __extends(applyEffectModifier, _super);
    function applyEffectModifier(aff) {
        var _this = this;
        var debuffFactory = new effectFactory_1.EffectFactory(aff).filter(function (eff) { return eff.subtype === effect_1.Effect.Subtype.Debuff; });
        _this = _super.call(this) || this;
        _this.longDescription = '';
        _this.modifierType = modifier_1.Modifier.Type.Improvement;
        _this.weight = function (x) { return (x === null || x === void 0 ? void 0 : x.type) === ability_1.Ability.Type.Attack ? debuffFactory.items.items.length * utils_1.Utils.EFFECT_WEIGHT_MOD : 0; };
        _this.effect = debuffFactory.get(1)[0];
        _this.description = 'When you hit, apply effect: ' + _this.effect.description;
        _this.namePrefix = _this.effect.namePrefix;
        _this.name = 'Apply ' + _this.effect.name;
        _this.powerBonus = function (x) { return x.chance != null && x.range != null ? x.chance / utils_1.Utils.getRangeCoeficient(x.range) * _this.effect.powerBonus(x) : -1000000; };
        _this.powerMultiplier = function (x) { return _this.effect.powerMultiplier(x); }; //TODO test if true
        return _this;
    }
    return applyEffectModifier;
}(modifier_1.Modifier));
exports.applyEffectModifier = applyEffectModifier;

},{"../../core/ability":62,"../../core/utils":94,"../effect":96,"../effectFactory":97,"../modifier":108}],111:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.bloodiedModifier = void 0;
var ability_1 = require("../../core/ability");
var utils_1 = require("../../core/utils");
var modifier_1 = require("../modifier");
var bloodiedModifier = /** @class */ (function (_super) {
    __extends(bloodiedModifier, _super);
    function bloodiedModifier(affector) {
        var _this = _super.call(this) || this;
        _this.powerMultiplier = function () { return 1.5; };
        _this.weight = function (x) { return (x === null || x === void 0 ? void 0 : x.cooldown) === ability_1.Ability.Cooldown.Encounter ? 1 : utils_1.Utils.RARE_MODIFIER; };
        _this.weight = function () { return 1; };
        _this.name = 'Bloody';
        _this.namePrefix = 'Bloody';
        _this.description = 'Can be used only when you have half or less Health.';
        _this.longDescription = '';
        _this.modifierType = modifier_1.Modifier.Type.Constraint;
        return _this;
    }
    return bloodiedModifier;
}(modifier_1.Modifier));
exports.bloodiedModifier = bloodiedModifier;

},{"../../core/ability":62,"../../core/utils":94,"../modifier":108}],112:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.cleaveModifier = void 0;
var ability_1 = require("../../core/ability");
var modifier_1 = require("../modifier");
var cleaveModifier = /** @class */ (function (_super) {
    __extends(cleaveModifier, _super);
    function cleaveModifier(affector) {
        var _this = _super.call(this) || this;
        _this.powerMultiplier = function () { return 0.5; };
        _this.weight = function (x) { return (x === null || x === void 0 ? void 0 : x.type) === ability_1.Ability.Type.Attack ? 1 : 0; };
        _this.name = 'Cleave';
        _this.namePrefix = 'Cleaving'; //TODO cleave could scale
        _this.description = 'After this action, repeat this action 1 time, without paying mana cost. With this repeated action you must target creature adjacent to you or last target.';
        _this.longDescription = '';
        _this.modifierType = modifier_1.Modifier.Type.Improvement;
        return _this;
    }
    return cleaveModifier;
}(modifier_1.Modifier));
exports.cleaveModifier = cleaveModifier;

},{"../../core/ability":62,"../modifier":108}],113:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.candleModifier = void 0;
var characterContext_1 = require("../../../core/characterContext");
var modifier_1 = require("../../modifier");
var candleModifier = /** @class */ (function (_super) {
    __extends(candleModifier, _super);
    function candleModifier(affector) {
        var _this = _super.call(this) || this;
        _this.powerMultiplier = function () { return 1.4; };
        _this.weight = function () { return characterContext_1.CharacterContext.classes.includes(characterContext_1.CharacterContext.Class.Cleric) ? characterContext_1.CharacterContext.IN_CLASS_MODIFIER : characterContext_1.CharacterContext.OUT_OF_CLASS_WEIGHT; };
        _this.name = 'Ritual';
        _this.namePrefix = 'Ritual';
        _this.description = 'Can be only used in a ritual circle made by you with chalk (it has radius of 5).';
        _this.modifierType = modifier_1.Modifier.Type.Constraint;
        return _this;
    }
    return candleModifier;
}(modifier_1.Modifier));
exports.candleModifier = candleModifier;

},{"../../../core/characterContext":72,"../../modifier":108}],114:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.episcopalModifier = void 0;
var characterContext_1 = require("../../../core/characterContext");
var utils_1 = require("../../../core/utils");
var modifier_1 = require("../../modifier");
var episcopalModifier = /** @class */ (function (_super) {
    __extends(episcopalModifier, _super);
    function episcopalModifier(affector) {
        var _this = _super.call(this) || this;
        _this.powerMultiplier = function () { return 2.7; };
        _this.weight = function () { return utils_1.Utils.RARE_MODIFIER * (characterContext_1.CharacterContext.classes.includes(characterContext_1.CharacterContext.Class.Cleric) ? characterContext_1.CharacterContext.IN_CLASS_MODIFIER : characterContext_1.CharacterContext.OUT_OF_CLASS_WEIGHT); };
        _this.name = 'Episcopal';
        _this.namePrefix = 'Episcopal';
        _this.description = 'Can be only used if you are a Bishop or you were personally blessed by a pope.';
        _this.longDescription = '';
        _this.modifierType = modifier_1.Modifier.Type.Constraint;
        return _this;
    }
    return episcopalModifier;
}(modifier_1.Modifier));
exports.episcopalModifier = episcopalModifier;

},{"../../../core/characterContext":72,"../../../core/utils":94,"../../modifier":108}],115:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.pacifistModifier = void 0;
var characterContext_1 = require("../../../core/characterContext");
var modifier_1 = require("../../modifier");
var pacifistModifier = /** @class */ (function (_super) {
    __extends(pacifistModifier, _super);
    function pacifistModifier(affector) {
        var _this = _super.call(this) || this;
        _this.powerMultiplier = function () { return 1.7; };
        _this.weight = function () { return characterContext_1.CharacterContext.classes.includes(characterContext_1.CharacterContext.Class.Cleric) ? characterContext_1.CharacterContext.IN_CLASS_MODIFIER : characterContext_1.CharacterContext.OUT_OF_CLASS_WEIGHT; };
        _this.name = 'Pacifist';
        _this.namePrefix = 'Pacifists';
        _this.description = 'This ability has a Bane for each creature you reduced to 0 HP today.';
        _this.longDescription = '';
        _this.modifierType = modifier_1.Modifier.Type.Constraint;
        return _this;
    }
    return pacifistModifier;
}(modifier_1.Modifier));
exports.pacifistModifier = pacifistModifier;

},{"../../../core/characterContext":72,"../../modifier":108}],116:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.preachingModifier = void 0;
var ability_1 = require("../../../core/ability");
var characterContext_1 = require("../../../core/characterContext");
var modifier_1 = require("../../modifier");
var preachingModifier = /** @class */ (function (_super) {
    __extends(preachingModifier, _super);
    function preachingModifier(affector) {
        var _this = _super.call(this) || this;
        _this.powerMultiplier = function () { return 1.5; };
        _this.weight = function (affector) {
            return affector != undefined && (affector === null || affector === void 0 ? void 0 : affector.cooldown) != ability_1.Ability.Cooldown.Encounter
                ? characterContext_1.CharacterContext.classes.includes(characterContext_1.CharacterContext.Class.Cleric)
                    ? characterContext_1.CharacterContext.IN_CLASS_MODIFIER
                    : characterContext_1.CharacterContext.OUT_OF_CLASS_WEIGHT
                : 0;
        };
        _this.name = 'Sermon';
        _this.namePrefix = 'Preaching';
        _this.description = 'This ability can be only used as you complete a sermon in front of at least 10 people.';
        _this.longDescription = '';
        _this.modifierType = modifier_1.Modifier.Type.Constraint;
        return _this;
    }
    return preachingModifier;
}(modifier_1.Modifier));
exports.preachingModifier = preachingModifier;

},{"../../../core/ability":62,"../../../core/characterContext":72,"../../modifier":108}],117:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.pristineModifier = void 0;
var characterContext_1 = require("../../../core/characterContext");
var modifier_1 = require("../../modifier");
var pristineModifier = /** @class */ (function (_super) {
    __extends(pristineModifier, _super);
    function pristineModifier(affector) {
        var _this = _super.call(this) || this;
        _this.powerMultiplier = function () { return 1.4; };
        _this.weight = function () { return characterContext_1.CharacterContext.classes.includes(characterContext_1.CharacterContext.Class.Cleric) ? characterContext_1.CharacterContext.IN_CLASS_MODIFIER : 0.3; };
        _this.name = 'Pristine';
        _this.namePrefix = 'Pristine';
        _this.description = 'Can be only used when you are undamaged.';
        _this.longDescription = '';
        _this.modifierType = modifier_1.Modifier.Type.Constraint;
        return _this;
    }
    return pristineModifier;
}(modifier_1.Modifier));
exports.pristineModifier = pristineModifier;

},{"../../../core/characterContext":72,"../../modifier":108}],118:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.templeModifier = void 0;
var characterContext_1 = require("../../../core/characterContext");
var modifier_1 = require("../../modifier");
var templeModifier = /** @class */ (function (_super) {
    __extends(templeModifier, _super);
    function templeModifier(affector) {
        var _this = _super.call(this) || this;
        _this.powerMultiplier = function () { return 1.6; };
        _this.weight = function () { return characterContext_1.CharacterContext.classes.includes(characterContext_1.CharacterContext.Class.Cleric) ? characterContext_1.CharacterContext.IN_CLASS_MODIFIER : characterContext_1.CharacterContext.OUT_OF_CLASS_WEIGHT; };
        _this.name = 'Temple';
        _this.namePrefix = 'Temple';
        _this.description = 'Can be only used within 10 km of a temple or a relic of your faith.';
        _this.longDescription = '';
        _this.modifierType = modifier_1.Modifier.Type.Constraint;
        return _this;
    }
    return templeModifier;
}(modifier_1.Modifier));
exports.templeModifier = templeModifier;

},{"../../../core/characterContext":72,"../../modifier":108}],119:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.compensationModifier = void 0;
var utils_1 = require("../../core/utils");
var modifier_1 = require("../modifier");
var compensationModifier = /** @class */ (function (_super) {
    __extends(compensationModifier, _super);
    function compensationModifier(affector, name, mult, bonus) {
        var _this = _super.call(this) || this;
        _this.name = 'Radiant Flame';
        _this.namePrefix = '';
        _this.description = '';
        _this.weight = function () { return 0; }; //this is purposfully excluded by design
        _this.name = name ? name : '';
        if (mult) {
            _this.powerMultiplier = function () { return mult; };
        }
        if (bonus) {
            _this.powerBonus = function (x) { return x.chance != null && x.range != null ? x.chance / utils_1.Utils.getRangeCoeficient(x.range) * bonus : -1000000; };
        }
        return _this;
    }
    return compensationModifier;
}(modifier_1.Modifier));
exports.compensationModifier = compensationModifier;

},{"../../core/utils":94,"../modifier":108}],120:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.exhaustingModifer = void 0;
var ability_1 = require("../../core/ability");
var modifier_1 = require("../modifier");
var exhaustingModifer = /** @class */ (function (_super) {
    __extends(exhaustingModifer, _super);
    function exhaustingModifer(affector) {
        var _this = _super.call(this) || this;
        _this.powerMultiplier = function () { return 2.5; };
        _this.weight = function (x) { return (x === null || x === void 0 ? void 0 : x.cooldown) != ability_1.Ability.Cooldown.Encounter ? 0.5 : 1; };
        _this.name = 'Exhausting';
        _this.namePrefix = 'Exhausting';
        _this.description = 'After you use this ability, reduce your health to 1.';
        _this.modifierType = modifier_1.Modifier.Type.Constraint;
        return _this;
    }
    return exhaustingModifer;
}(modifier_1.Modifier));
exports.exhaustingModifer = exhaustingModifer;

},{"../../core/ability":62,"../modifier":108}],121:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.fastModifier = void 0;
var ability_1 = require("../../core/ability");
var utils_1 = require("../../core/utils");
var modifier_1 = require("../modifier");
var fastModifier = /** @class */ (function (_super) {
    __extends(fastModifier, _super);
    function fastModifier(affector) {
        var _this = _super.call(this) || this;
        _this.powerBonus = function () { return -utils_1.Utils.DPS; };
        _this.weight = function (x) { return (x === null || x === void 0 ? void 0 : x.type) === ability_1.Ability.Type.Attack ? 1 : 0; };
        _this.name = 'Fast';
        _this.namePrefix = 'Fast';
        _this.description = 'You can use Swift Action to use this ability.';
        _this.longDescription = '';
        _this.modifierType = modifier_1.Modifier.Type.Improvement;
        return _this;
    }
    return fastModifier;
}(modifier_1.Modifier));
exports.fastModifier = fastModifier;

},{"../../core/ability":62,"../../core/utils":94,"../modifier":108}],122:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.battleModifier = void 0;
var characterContext_1 = require("../../../core/characterContext");
var modifier_1 = require("../../modifier");
var battleModifier = /** @class */ (function (_super) {
    __extends(battleModifier, _super);
    function battleModifier(affector) {
        var _this = _super.call(this) || this;
        _this.powerMultiplier = function () { return 1.5; };
        _this.weight = function () { return characterContext_1.CharacterContext.classes.includes(characterContext_1.CharacterContext.Class.Fighter) ? characterContext_1.CharacterContext.IN_CLASS_MODIFIER : characterContext_1.CharacterContext.OUT_OF_CLASS_WEIGHT; };
        _this.name = 'Battle';
        _this.namePrefix = 'Battle';
        _this.description = 'Can only be used when you are adjacent to two enemies.';
        _this.longDescription = '';
        _this.modifierType = modifier_1.Modifier.Type.Constraint;
        return _this;
    }
    return battleModifier;
}(modifier_1.Modifier));
exports.battleModifier = battleModifier;

},{"../../../core/characterContext":72,"../../modifier":108}],123:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.breachingModifier = void 0;
var characterContext_1 = require("../../../core/characterContext");
var modifier_1 = require("../../modifier");
var breachingModifier = /** @class */ (function (_super) {
    __extends(breachingModifier, _super);
    function breachingModifier(affector) {
        var _this = _super.call(this) || this;
        _this.powerMultiplier = function () { return 2; };
        _this.weight = function () { return characterContext_1.CharacterContext.classes.includes(characterContext_1.CharacterContext.Class.Fighter) ? characterContext_1.CharacterContext.IN_CLASS_MODIFIER : characterContext_1.CharacterContext.OUT_OF_CLASS_WEIGHT; };
        _this.name = 'Breaching';
        _this.namePrefix = 'Breaching';
        _this.description = 'Can only be used in a room you\'ve kicked the door down to enter.';
        _this.longDescription = '';
        _this.modifierType = modifier_1.Modifier.Type.Constraint;
        return _this;
    }
    return breachingModifier;
}(modifier_1.Modifier));
exports.breachingModifier = breachingModifier;

},{"../../../core/characterContext":72,"../../modifier":108}],124:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.legendaryWeaponModifier = void 0;
var ability_1 = require("../../../core/ability");
var characterContext_1 = require("../../../core/characterContext");
var utils_1 = require("../../../core/utils");
var modifier_1 = require("../../modifier");
var legendaryWeaponModifier = /** @class */ (function (_super) {
    __extends(legendaryWeaponModifier, _super);
    function legendaryWeaponModifier(affector) {
        var _this = _super.call(this) || this;
        _this.powerMultiplier = function () { return 2.7; };
        _this.weight = function (affector) {
            return affector != undefined && affector.type === ability_1.Ability.Type.Attack
                ? characterContext_1.CharacterContext.classes.includes(characterContext_1.CharacterContext.Class.Fighter)
                    ? utils_1.Utils.RARE_MODIFIER * characterContext_1.CharacterContext.IN_CLASS_MODIFIER
                    : utils_1.Utils.RARE_MODIFIER * characterContext_1.CharacterContext.OUT_OF_CLASS_WEIGHT
                : 0;
        };
        _this.name = 'Legendary';
        _this.namePrefix = 'Legendary';
        _this.description = 'This attack can be only made with a legendary weapon.';
        _this.longDescription = '';
        _this.modifierType = modifier_1.Modifier.Type.Constraint;
        return _this;
    }
    return legendaryWeaponModifier;
}(modifier_1.Modifier));
exports.legendaryWeaponModifier = legendaryWeaponModifier;

},{"../../../core/ability":62,"../../../core/characterContext":72,"../../../core/utils":94,"../../modifier":108}],125:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.forcefulModifier = void 0;
var ability_1 = require("../../core/ability");
var modifier_1 = require("../modifier");
var forcefulModifier = /** @class */ (function (_super) {
    __extends(forcefulModifier, _super);
    function forcefulModifier(affector) {
        var _this = _super.call(this) || this;
        _this.powerBonus = function (x) { return -2; };
        _this.weight = function (x) { return (x === null || x === void 0 ? void 0 : x.type) === ability_1.Ability.Type.Attack ? 1 : 0; };
        _this.name = 'Forceful';
        _this.namePrefix = 'Forceful';
        _this.description = 'When you hit, push target 5 squares. You can push into dangereous terrain, pushing into solid obstacles deals extra damage equal to unresolved squares of push. ';
        _this.longDescription = '';
        _this.modifierType = modifier_1.Modifier.Type.Improvement;
        return _this;
    }
    return forcefulModifier;
}(modifier_1.Modifier));
exports.forcefulModifier = forcefulModifier;

},{"../../core/ability":62,"../modifier":108}],126:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.gainEffectModifier = void 0;
var ability_1 = require("../../core/ability");
var utils_1 = require("../../core/utils");
var effect_1 = require("../effect");
var effectFactory_1 = require("../effectFactory");
var modifier_1 = require("../modifier");
var gainEffectModifier = /** @class */ (function (_super) {
    __extends(gainEffectModifier, _super);
    function gainEffectModifier(aff) {
        var _this = _super.call(this) || this;
        var buffFactory = new effectFactory_1.EffectFactory(aff).filter(function (eff) { return eff.subtype === effect_1.Effect.Subtype.Buff; });
        _this.modifierType = modifier_1.Modifier.Type.Improvement;
        _this.weight = function (x) { return (x === null || x === void 0 ? void 0 : x.cooldown) === ability_1.Ability.Cooldown.Encounter ? buffFactory.items.items.length * utils_1.Utils.EFFECT_WEIGHT_MOD : 0; };
        _this.effect = buffFactory.get(1)[0];
        _this.description = 'When you succeed roll, also gain an effect: ' + _this.effect.description;
        _this.namePrefix = _this.effect.namePrefix;
        _this.name = 'Gain ' + _this.effect.name;
        _this.powerBonus = function (x) { return x.chance != null ? x.chance * _this.effect.powerBonus(x) : -100000; };
        _this.powerMultiplier = function (x) { return _this.effect.powerMultiplier(x); };
        return _this;
    }
    return gainEffectModifier;
}(modifier_1.Modifier));
exports.gainEffectModifier = gainEffectModifier;

},{"../../core/ability":62,"../../core/utils":94,"../effect":96,"../effectFactory":97,"../modifier":108}],127:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.grazedModifier = void 0;
var modifier_1 = require("../modifier");
var grazedModifier = /** @class */ (function (_super) {
    __extends(grazedModifier, _super);
    function grazedModifier(affector) {
        var _this = _super.call(this) || this;
        _this.powerMultiplier = function () { return 1.2; };
        _this.name = 'Grazed';
        _this.namePrefix = 'Grazed';
        _this.description = 'When you add this ability to your character gain 2 Scars (each Scar brings character slightly closer to death, see rules for more).';
        _this.modifierType = modifier_1.Modifier.Type.Constraint;
        return _this;
    }
    return grazedModifier;
}(modifier_1.Modifier));
exports.grazedModifier = grazedModifier;

},{"../modifier":108}],128:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.instinctiveModifier = void 0;
var ability_1 = require("../../core/ability");
var modifier_1 = require("../modifier");
var instinctiveModifier = /** @class */ (function (_super) {
    __extends(instinctiveModifier, _super);
    function instinctiveModifier(affector) {
        var _this = _super.call(this) || this;
        _this.powerMultiplier = function (x) { return 0.9; };
        _this.weight = function (x) { return (x === null || x === void 0 ? void 0 : x.type) === ability_1.Ability.Type.Attack ? 1 : 0; };
        _this.name = 'Instinct';
        _this.namePrefix = 'Instinctive';
        _this.description = 'If you are stunned, you can use this ability as a swift action. You can ignore Banes when rolling for this ability. ';
        _this.longDescription = '';
        _this.modifierType = modifier_1.Modifier.Type.Improvement;
        return _this;
    }
    return instinctiveModifier;
}(modifier_1.Modifier));
exports.instinctiveModifier = instinctiveModifier;

},{"../../core/ability":62,"../modifier":108}],129:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.laylineModifier = void 0;
var ability_1 = require("../../core/ability");
var modifier_1 = require("../modifier");
var laylineModifier = /** @class */ (function (_super) {
    __extends(laylineModifier, _super);
    function laylineModifier(affector) {
        var _this = _super.call(this) || this;
        _this.powerMultiplier = function (x) { return x.range ? Math.max(1.2, 2.1 - x.range / 20) : 1; };
        1.7;
        _this.weight = function (x) { return (x === null || x === void 0 ? void 0 : x.cooldown) === ability_1.Ability.Cooldown.Encounter ? 1 : 0; };
        _this.name = 'Layline';
        _this.namePrefix = 'Layline';
        _this.description = 'Can be used only while adjacent to place of power (usually you can detect 2-4 places of power each encounter).';
        _this.longDescription = '';
        _this.modifierType = modifier_1.Modifier.Type.Constraint;
        return _this;
    }
    return laylineModifier;
}(modifier_1.Modifier));
exports.laylineModifier = laylineModifier;

},{"../../core/ability":62,"../modifier":108}],130:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.lifestealModifier = void 0;
var ability_1 = require("../../core/ability");
var modifier_1 = require("../modifier");
var lifestealModifier = /** @class */ (function (_super) {
    __extends(lifestealModifier, _super);
    function lifestealModifier(affector) {
        var _this = _super.call(this) || this;
        _this.modifierType = modifier_1.Modifier.Type.Improvement;
        _this.weight = function (x) { return (x === null || x === void 0 ? void 0 : x.type) === ability_1.Ability.Type.Attack ? 1 : 0; };
        _this.name = 'Lifesteal';
        _this.namePrefix = 'Leeching';
        _this.description = 'When you hit, heal yourself equal to damage taken by enemy.';
        _this.powerMultiplier = function (x) { return 0.55; }; //TODO this should be bonus equal to damage... however damage is set after modifiers...s
        _this.longDescription = '';
        return _this;
    }
    return lifestealModifier;
}(modifier_1.Modifier));
exports.lifestealModifier = lifestealModifier;

},{"../../core/ability":62,"../modifier":108}],131:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.managainModifier = void 0;
var ability_1 = require("../../core/ability");
var modifier_1 = require("../modifier");
var managainModifier = /** @class */ (function (_super) {
    __extends(managainModifier, _super);
    function managainModifier(affector) {
        var _this = _super.call(this) || this;
        _this.modifierType = modifier_1.Modifier.Type.Improvement;
        _this.weight = function (x) { return (x === null || x === void 0 ? void 0 : x.type) === ability_1.Ability.Type.Attack ? 1 : 0; };
        _this.name = 'Mana Gain';
        _this.namePrefix = 'Mana Leeching';
        _this.description = 'When you hit, gain mana equal to damage taken by enemy.';
        _this.powerMultiplier = function (x) { return 0.75; };
        _this.longDescription = '';
        return _this;
    }
    return managainModifier;
}(modifier_1.Modifier));
exports.managainModifier = managainModifier;

},{"../../core/ability":62,"../modifier":108}],132:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.momentumModifier = void 0;
var descriptiveNumber_1 = require("../../components/descriptiveNumber");
var ability_1 = require("../../core/ability");
var utils_1 = require("../../core/utils");
var modifier_1 = require("../modifier");
var momentumModifier = /** @class */ (function (_super) {
    __extends(momentumModifier, _super);
    function momentumModifier(affector) {
        var _this = _super.call(this) || this;
        _this.numericComponents = [new descriptiveNumber_1.DescriptiveNumber(Math.ceil(utils_1.Utils.random() * 4))];
        _this.weight = function (x) { return (x === null || x === void 0 ? void 0 : x.cooldown) === ability_1.Ability.Cooldown.Encounter ? 1 : 0; };
        _this.name = 'Inertia ' + _this.numericComponents[0].getValue();
        _this.namePrefix = 'Inertia';
        _this.description = 'Can be only used when you fail ability chance roll with ' + _this.numericComponents[0].getValue() + ' ' + (_this.numericComponents[0].getValue() === 1 ? 'ability' : 'abilities') + ' in a row. ';
        _this.longDescription = '';
        _this.powerMultiplier = function (x) { return Math.pow(1.5, _this.numericComponents[0].getValue()); }; //used to be 1.58
        _this.modifierType = modifier_1.Modifier.Type.Constraint;
        return _this;
    }
    return momentumModifier;
}(modifier_1.Modifier));
exports.momentumModifier = momentumModifier;

},{"../../components/descriptiveNumber":48,"../../core/ability":62,"../../core/utils":94,"../modifier":108}],133:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.cleanModifier = void 0;
var characterContext_1 = require("../../../core/characterContext");
var modifier_1 = require("../../modifier");
var cleanModifier = /** @class */ (function (_super) {
    __extends(cleanModifier, _super);
    function cleanModifier(affector) {
        var _this = _super.call(this) || this;
        _this.powerMultiplier = function () { return 1.2; };
        _this.weight = function (affector) {
            return characterContext_1.CharacterContext.classes.includes(characterContext_1.CharacterContext.Class.Cleric) ||
                characterContext_1.CharacterContext.classes.includes(characterContext_1.CharacterContext.Class.Wizard)
                ? characterContext_1.CharacterContext.IN_CLASS_MODIFIER
                : characterContext_1.CharacterContext.OUT_OF_CLASS_WEIGHT;
        };
        _this.name = 'Clean';
        _this.namePrefix = 'Clean';
        _this.description = 'Can be only used if your clothes are clean and you are not wet.';
        _this.longDescription = '';
        _this.modifierType = modifier_1.Modifier.Type.Constraint;
        return _this;
    }
    return cleanModifier;
}(modifier_1.Modifier));
exports.cleanModifier = cleanModifier;

},{"../../../core/characterContext":72,"../../modifier":108}],134:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.undeadBaneModifier = void 0;
var ability_1 = require("../../../core/ability");
var characterContext_1 = require("../../../core/characterContext");
var modifier_1 = require("../../modifier");
var undeadBaneModifier = /** @class */ (function (_super) {
    __extends(undeadBaneModifier, _super);
    function undeadBaneModifier(affector) {
        var _this = _super.call(this) || this;
        _this.powerMultiplier = function () { return 0.95; };
        _this.weight = function (affector) {
            return affector != undefined && affector.type === ability_1.Ability.Type.Attack
                ? characterContext_1.CharacterContext.classes.includes(characterContext_1.CharacterContext.Class.Cleric) ||
                    characterContext_1.CharacterContext.classes.includes(characterContext_1.CharacterContext.Class.Paladin)
                    ? characterContext_1.CharacterContext.IN_CLASS_MODIFIER
                    : characterContext_1.CharacterContext.OUT_OF_CLASS_WEIGHT
                : 0;
        };
        _this.name = "Evil Bane";
        _this.namePrefix = "Baning Evil";
        _this.description =
            "If this targets an undead, demon or devil repeat the attack once.";
        _this.longDescription = "";
        _this.modifierType = modifier_1.Modifier.Type.Improvement;
        return _this;
    }
    return undeadBaneModifier;
}(modifier_1.Modifier));
exports.undeadBaneModifier = undeadBaneModifier;

},{"../../../core/ability":62,"../../../core/characterContext":72,"../../modifier":108}],135:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.multipleModifier = void 0;
var descriptiveNumber_1 = require("../../components/descriptiveNumber");
var ability_1 = require("../../core/ability");
var weightedList_1 = require("../../core/weightedList");
var modifier_1 = require("../modifier");
var multipleModifier = /** @class */ (function (_super) {
    __extends(multipleModifier, _super);
    function multipleModifier(affector) {
        var _this = _super.call(this) || this;
        var multiDistribution = new weightedList_1.WeightedList();
        var two = new descriptiveNumber_1.DescriptiveNumber(2);
        two.weight = function () { return 9; };
        two.name = 'Double';
        var three = new descriptiveNumber_1.DescriptiveNumber(3);
        three.weight = function () { return 3; };
        three.name = 'Triple';
        var four = new descriptiveNumber_1.DescriptiveNumber(4);
        four.weight = function () { return 1; };
        four.name = 'Quadruple';
        var five = new descriptiveNumber_1.DescriptiveNumber(5);
        five.weight = function () { return 0.33; };
        five.name = 'Quintiple';
        multiDistribution.items = [two, three, four, five];
        _this.numericComponents = multiDistribution.get(1);
        _this.weight = function (x) { return (x === null || x === void 0 ? void 0 : x.type) === ability_1.Ability.Type.Attack ? 1 : 0; };
        _this.powerMultiplier = function () { return 0.8 / _this.numericComponents[0].getValue(); };
        _this.name = 'Multi ' + _this.numericComponents[0].getValue();
        _this.namePrefix = _this.numericComponents[0].name;
        _this.description = 'After this action, repeat this action ' + (_this.numericComponents[0].getValue() - 1) + ' time, without paying mana cost. You cannot change targets.';
        _this.modifierType = modifier_1.Modifier.Type.Improvement;
        return _this;
    }
    return multipleModifier;
}(modifier_1.Modifier));
exports.multipleModifier = multipleModifier;

},{"../../components/descriptiveNumber":48,"../../core/ability":62,"../../core/weightedList":95,"../modifier":108}],136:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.nightlyModifier = void 0;
var modifier_1 = require("../modifier");
var nightlyModifier = /** @class */ (function (_super) {
    __extends(nightlyModifier, _super);
    function nightlyModifier(affector) {
        var _this = _super.call(this) || this;
        _this.powerMultiplier = function () { return 1.35; };
        _this.name = 'Nightly';
        _this.namePrefix = 'Nightly';
        _this.description = 'Can be used only in the night.';
        _this.longDescription = 'Can be also used on planes without sun.';
        _this.modifierType = modifier_1.Modifier.Type.Constraint;
        return _this;
    }
    return nightlyModifier;
}(modifier_1.Modifier));
exports.nightlyModifier = nightlyModifier;

},{"../modifier":108}],137:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.opportunistModifier = void 0;
var ability_1 = require("../../core/ability");
var modifier_1 = require("../modifier");
var opportunistModifier = /** @class */ (function (_super) {
    __extends(opportunistModifier, _super);
    function opportunistModifier(affector) {
        var _this = _super.call(this) || this;
        _this.powerMultiplier = function () { return 1.4; };
        _this.weight = function (x) { return (x === null || x === void 0 ? void 0 : x.type) === ability_1.Ability.Type.Attack ? 1 : 0; };
        _this.name = 'Opportunist';
        _this.namePrefix = 'Opportunists';
        _this.description = 'Can only be used against enemies that rolled 90-00 on D100 during their last turn. ';
        _this.longDescription = '';
        _this.modifierType = modifier_1.Modifier.Type.Constraint;
        return _this;
    }
    return opportunistModifier;
}(modifier_1.Modifier));
exports.opportunistModifier = opportunistModifier;

},{"../../core/ability":62,"../modifier":108}],138:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.piercingModifier = void 0;
var ability_1 = require("../../core/ability");
var modifier_1 = require("../modifier");
var piercingModifier = /** @class */ (function (_super) {
    __extends(piercingModifier, _super);
    function piercingModifier(affector) {
        var _this = _super.call(this) || this;
        _this.powerMultiplier = function () { return 0.8; };
        _this.weight = function (x) { return (x === null || x === void 0 ? void 0 : x.type) === ability_1.Ability.Type.Attack ? 1 : 0; };
        _this.name = 'Piercing';
        _this.namePrefix = 'Piercing';
        _this.description = 'When you hit deal damage to Health directly, additionally reduce enemy Armor by the same value. ';
        _this.longDescription = '';
        _this.modifierType = modifier_1.Modifier.Type.Improvement;
        return _this;
    }
    return piercingModifier;
}(modifier_1.Modifier));
exports.piercingModifier = piercingModifier;

},{"../../core/ability":62,"../modifier":108}],139:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.repeatableModifier = void 0;
var descriptiveNumber_1 = require("../../components/descriptiveNumber");
var weightedList_1 = require("../../core/weightedList");
var modifier_1 = require("../modifier");
var repeatableModifier = /** @class */ (function (_super) {
    __extends(repeatableModifier, _super);
    function repeatableModifier(affector) {
        var _this = _super.call(this) || this;
        var multiDistribution = new weightedList_1.WeightedList();
        var two = new descriptiveNumber_1.DescriptiveNumber(2);
        two.weight = function () { return 9; };
        var three = new descriptiveNumber_1.DescriptiveNumber(3);
        three.weight = function () { return 3; };
        var four = new descriptiveNumber_1.DescriptiveNumber(4);
        four.weight = function () { return 1; };
        var five = new descriptiveNumber_1.DescriptiveNumber(5);
        five.weight = function () { return 0.333; };
        multiDistribution.items = [two, three, four, five];
        _this.numericComponents = multiDistribution.get(1);
        _this.weight = function (x) { return 0; }; //this modifier is excluded for now purposfully. It behaves differently for utilities and for attacks.
        _this.powerMultiplier = function () { return 1 / _this.numericComponents[0].getValue(); };
        _this.name = 'Repeat ' + _this.numericComponents[0].getValue();
        _this.namePrefix = '';
        _this.description = 'You can use this ability ' + _this.numericComponents[0].getValue() + ' times before it goes on cooldown. If you fail a chance roll for this ability and this ability is not on cooldown yet, you can immiedietly use another charge to try to roll again before facing consequences of failure.';
        _this.modifierType = modifier_1.Modifier.Type.Improvement;
        return _this;
    }
    repeatableModifier.prototype.setValue = function (x) {
        this.description = this.description.replace(this.numericComponents[0].getValue() + '', x);
        this.namePrefix = this.namePrefix.replace(this.numericComponents[0].getValue() + '', x);
        this.name = this.name.replace(this.numericComponents[0].getValue() + '', x);
        this.numericComponents = [new descriptiveNumber_1.DescriptiveNumber(x)];
    };
    return repeatableModifier;
}(modifier_1.Modifier));
exports.repeatableModifier = repeatableModifier;

},{"../../components/descriptiveNumber":48,"../../core/weightedList":95,"../modifier":108}],140:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.restedModifer = void 0;
var modifier_1 = require("../modifier");
var restedModifer = /** @class */ (function (_super) {
    __extends(restedModifer, _super);
    function restedModifer(affector) {
        var _this = _super.call(this) || this;
        _this.powerMultiplier = function () { return 1.3; };
        _this.name = 'Rested';
        _this.namePrefix = 'Rested';
        _this.description = 'Can only be used if you managed to rest well during last night.';
        _this.longDescription = 'Camping in front of dungeon or having to keeping watch makes you not well reseted. Being well rested is usually only achieved by spending last night in room in a city.';
        _this.modifierType = modifier_1.Modifier.Type.Constraint;
        return _this;
    }
    return restedModifer;
}(modifier_1.Modifier));
exports.restedModifer = restedModifer;

},{"../modifier":108}],141:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.cityModifier = void 0;
var characterContext_1 = require("../../../core/characterContext");
var modifier_1 = require("../../modifier");
var cityModifier = /** @class */ (function (_super) {
    __extends(cityModifier, _super);
    function cityModifier(affector) {
        var _this = _super.call(this) || this;
        _this.powerMultiplier = function () { return 1.8; };
        _this.weight = function () { return characterContext_1.CharacterContext.classes.includes(characterContext_1.CharacterContext.Class.Rogue) ? characterContext_1.CharacterContext.IN_CLASS_MODIFIER : 0.2; };
        _this.name = 'City';
        _this.namePrefix = 'City';
        _this.description = 'Can be only used within walls of a city.';
        _this.longDescription = '';
        _this.modifierType = modifier_1.Modifier.Type.Constraint;
        return _this;
    }
    return cityModifier;
}(modifier_1.Modifier));
exports.cityModifier = cityModifier;

},{"../../../core/characterContext":72,"../../modifier":108}],142:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.daggerModifier = void 0;
var ability_1 = require("../../../core/ability");
var characterContext_1 = require("../../../core/characterContext");
var modifier_1 = require("../../modifier");
var daggerModifier = /** @class */ (function (_super) {
    __extends(daggerModifier, _super);
    function daggerModifier(affector) {
        var _this = _super.call(this) || this;
        _this.powerMultiplier = function () { return 1.3; };
        _this.weight = function (affector) {
            return affector != undefined && affector.type === ability_1.Ability.Type.Attack
                ? characterContext_1.CharacterContext.classes.includes(characterContext_1.CharacterContext.Class.Rogue)
                    ? characterContext_1.CharacterContext.IN_CLASS_MODIFIER
                    : characterContext_1.CharacterContext.OUT_OF_CLASS_WEIGHT
                : 0;
        };
        _this.name = 'Dagger';
        _this.namePrefix = 'Stabbing';
        _this.description = 'This ability can be only used when you are wielding a dagger.';
        _this.longDescription = '';
        _this.modifierType = modifier_1.Modifier.Type.Constraint;
        return _this;
    }
    return daggerModifier;
}(modifier_1.Modifier));
exports.daggerModifier = daggerModifier;

},{"../../../core/ability":62,"../../../core/characterContext":72,"../../modifier":108}],143:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.greedyModifier = void 0;
var characterContext_1 = require("../../../core/characterContext");
var modifier_1 = require("../../modifier");
var greedyModifier = /** @class */ (function (_super) {
    __extends(greedyModifier, _super);
    function greedyModifier(affector) {
        var _this = _super.call(this) || this;
        _this.powerMultiplier = function () { return 1.2; };
        _this.weight = function () { return characterContext_1.CharacterContext.classes.includes(characterContext_1.CharacterContext.Class.Rogue) ? characterContext_1.CharacterContext.IN_CLASS_MODIFIER : characterContext_1.CharacterContext.OUT_OF_CLASS_WEIGHT; };
        _this.name = 'Greedy';
        _this.namePrefix = 'Greedy';
        _this.description = 'Can be only used when this action is going to grant you more wealth (going on quest for a reward counts as well).';
        _this.longDescription = 'If you took price as a party, count only your share.';
        _this.modifierType = modifier_1.Modifier.Type.Constraint;
        return _this;
    }
    return greedyModifier;
}(modifier_1.Modifier));
exports.greedyModifier = greedyModifier;

},{"../../../core/characterContext":72,"../../modifier":108}],144:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.luckyModifier = void 0;
var characterContext_1 = require("../../../core/characterContext");
var modifier_1 = require("../../modifier");
var luckyModifier = /** @class */ (function (_super) {
    __extends(luckyModifier, _super);
    function luckyModifier(affector) {
        var _this = _super.call(this) || this;
        _this.powerMultiplier = function () { return 1.4; };
        _this.weight = function () { return characterContext_1.CharacterContext.classes.includes(characterContext_1.CharacterContext.Class.Rogue) ? characterContext_1.CharacterContext.IN_CLASS_MODIFIER : characterContext_1.CharacterContext.OUT_OF_CLASS_WEIGHT; };
        _this.name = 'Trinket';
        _this.namePrefix = 'Trinket';
        _this.description = 'When you add this ability to your character you gain "Lucky Coin", "Favourite Hat" or similar trinket (unless they have one). You cannot use this ability if you lose this trinket.';
        _this.modifierType = modifier_1.Modifier.Type.Constraint;
        return _this;
    }
    return luckyModifier;
}(modifier_1.Modifier));
exports.luckyModifier = luckyModifier;

},{"../../../core/characterContext":72,"../../modifier":108}],145:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.sneakyModifier = void 0;
var characterContext_1 = require("../../../core/characterContext");
var modifier_1 = require("../../modifier");
var sneakyModifier = /** @class */ (function (_super) {
    __extends(sneakyModifier, _super);
    function sneakyModifier(affector) {
        var _this = _super.call(this) || this;
        _this.powerMultiplier = function () { return 2.1; };
        _this.weight = function () { return characterContext_1.CharacterContext.classes.includes(characterContext_1.CharacterContext.Class.Rogue) ? characterContext_1.CharacterContext.IN_CLASS_MODIFIER : characterContext_1.CharacterContext.OUT_OF_CLASS_WEIGHT; };
        _this.name = 'Sneaky';
        _this.namePrefix = 'Sneaky';
        _this.description = 'Can be only used when you started last turn hidden.';
        _this.modifierType = modifier_1.Modifier.Type.Constraint;
        return _this;
    }
    return sneakyModifier;
}(modifier_1.Modifier));
exports.sneakyModifier = sneakyModifier;

},{"../../../core/characterContext":72,"../../modifier":108}],146:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.selfHealModifier = void 0;
var descriptiveNumber_1 = require("../../components/descriptiveNumber");
var ability_1 = require("../../core/ability");
var utils_1 = require("../../core/utils");
var modifier_1 = require("../modifier");
var selfHealModifier = /** @class */ (function (_super) {
    __extends(selfHealModifier, _super);
    function selfHealModifier(affector) {
        var _this = _super.call(this) || this;
        _this.modifierType = modifier_1.Modifier.Type.Improvement;
        _this.numericComponents = [new descriptiveNumber_1.DescriptiveNumber(utils_1.Utils.D(10))]; //[new DescriptiveNumberFactory(affector).filter((x: DescriptiveNumber) => x.type === DescriptiveNumber.Type.Small).get(1)[0] as DescriptiveNumber];
        _this.name = 'Self Heal ' + _this.numericComponents[0].getValue();
        _this.weight = function (x) { return (x === null || x === void 0 ? void 0 : x.cooldown) === ability_1.Ability.Cooldown.Encounter ? 1 : 0; };
        _this.namePrefix = 'Healing';
        _this.description = 'When you hit, heal yourself ' + _this.numericComponents[0].getDescription() + '.';
        _this.powerBonus = function () { return -_this.numericComponents[0].getValue(); };
        _this.elements = [[ability_1.Ability.Element.Radiant, ability_1.Ability.Element.Dark, ability_1.Ability.Element.Emotion].sort(function () { return 0.5 - utils_1.Utils.random(); })[1]];
        return _this;
    }
    return selfHealModifier;
}(modifier_1.Modifier));
exports.selfHealModifier = selfHealModifier;

},{"../../components/descriptiveNumber":48,"../../core/ability":62,"../../core/utils":94,"../modifier":108}],147:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.signatureModifier = void 0;
var ability_1 = require("../../core/ability");
var modifier_1 = require("../modifier");
var signatureModifier = /** @class */ (function (_super) {
    __extends(signatureModifier, _super);
    function signatureModifier(affector) {
        var _this = _super.call(this) || this;
        _this.powerMultiplier = function () { return 1.2; };
        _this.weight = function (x) { return (x === null || x === void 0 ? void 0 : x.type) === ability_1.Ability.Type.Attack ? 1 : 0; };
        _this.name = 'Signature';
        _this.namePrefix = 'Signature';
        _this.description = 'This is a Signature Ability - First Signature Ability you use each combat gains 1 Boon for its chance and +2 damage, before rolling.';
        _this.longDescription = '';
        _this.modifierType = modifier_1.Modifier.Type.Constraint;
        return _this;
    }
    return signatureModifier;
}(modifier_1.Modifier));
exports.signatureModifier = signatureModifier;

},{"../../core/ability":62,"../modifier":108}],148:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ultimateModifier = void 0;
var ability_1 = require("../../core/ability");
var modifier_1 = require("../modifier");
var ultimateModifier = /** @class */ (function (_super) {
    __extends(ultimateModifier, _super);
    function ultimateModifier(affector) {
        var _this = _super.call(this) || this;
        _this.powerMultiplier = function () { return 2.5; };
        _this.weight = function (x) { return (x === null || x === void 0 ? void 0 : x.cooldown) === ability_1.Ability.Cooldown.Encounter ? 1 : 0; };
        _this.name = 'Ultimate';
        _this.namePrefix = 'Ultimate'; //numeric component
        _this.description = 'Can be used only on turn 8 or later.';
        _this.longDescription = '';
        _this.modifierType = modifier_1.Modifier.Type.Constraint;
        return _this;
    }
    return ultimateModifier;
}(modifier_1.Modifier));
exports.ultimateModifier = ultimateModifier;

},{"../../core/ability":62,"../modifier":108}],149:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.unlockedModifier = void 0;
var ability_1 = require("../../core/ability");
var modifier_1 = require("../modifier");
var unlockedModifier = /** @class */ (function (_super) {
    __extends(unlockedModifier, _super);
    function unlockedModifier(affector) {
        var _this = _super.call(this) || this;
        _this.powerMultiplier = function () { return 1.65; };
        _this.weight = function (x) { return (x === null || x === void 0 ? void 0 : x.cooldown) === ability_1.Ability.Cooldown.Encounter ? 1 : 0; };
        _this.name = 'Unlock';
        _this.namePrefix = 'Unlocked';
        _this.description = 'Can only be used when you rolled 01-20 on your first D100 roll last turn. ';
        _this.longDescription = '';
        _this.modifierType = modifier_1.Modifier.Type.Constraint;
        return _this;
    }
    return unlockedModifier;
}(modifier_1.Modifier));
exports.unlockedModifier = unlockedModifier;

},{"../../core/ability":62,"../modifier":108}],150:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.vengefulModifier = void 0;
var ability_1 = require("../../core/ability");
var modifier_1 = require("../modifier");
var vengefulModifier = /** @class */ (function (_super) {
    __extends(vengefulModifier, _super);
    function vengefulModifier(affector) {
        var _this = _super.call(this) || this;
        _this.powerMultiplier = function (x) { return 1.3; };
        _this.weight = function (x) { return (x === null || x === void 0 ? void 0 : x.type) === ability_1.Ability.Type.Attack ? 1 : 0; };
        _this.name = 'Vengeance';
        _this.namePrefix = 'Vengeful';
        _this.description = 'Can be only used against enemy which attacked, damaged or affected you last turn. ';
        _this.longDescription = '';
        _this.modifierType = modifier_1.Modifier.Type.Constraint;
        return _this;
    }
    return vengefulModifier;
}(modifier_1.Modifier));
exports.vengefulModifier = vengefulModifier;

},{"../../core/ability":62,"../modifier":108}]},{},[1]);
