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
var unarmoredStealthAbilityObject_1 = require("./abilityObjectRepository/stealth/unarmoredStealthAbilityObject");
var shadowStealthAbilityObject_1 = require("./abilityObjectRepository/stealth/shadowStealthAbilityObject");
var potionStealthAbilityObject_1 = require("./abilityObjectRepository/stealth/potionStealthAbilityObject");
var yesNoAbilityObject_1 = require("./abilityObjectRepository/questions/yesNoAbilityObject");
var oneWordAbilityObject_1 = require("./abilityObjectRepository/questions/oneWordAbilityObject");
var noeDetailedAbilityObject_1 = require("./abilityObjectRepository/questions/noeDetailedAbilityObject");
var detailedAbilityObject_1 = require("./abilityObjectRepository/questions/detailedAbilityObject");
var warriorHumanoidAbilityObject_1 = require("./abilityObjectRepository/persons/warriorHumanoidAbilityObject");
var mageHumanoidAbilityObject_1 = require("./abilityObjectRepository/persons/mageHumanoidAbilityObject");
var humanoidAbilityObject_1 = require("./abilityObjectRepository/persons/humanoidAbilityObject");
var distractedHumanoidAbilityObject_1 = require("./abilityObjectRepository/persons/distractedHumanoidAbilityObject");
var revealingLightAbilityObject_1 = require("./abilityObjectRepository/light/revealingLightAbilityObject");
var controllableLightAbilityObject_1 = require("./abilityObjectRepository/light/controllableLightAbilityObject");
var colorfulLightAbilityObject_1 = require("./abilityObjectRepository/light/colorfulLightAbilityObject");
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
            _this.items.push(new unarmoredStealthAbilityObject_1.unarmoredStealthAbilityObject());
            _this.items.push(new shadowStealthAbilityObject_1.shadowStealthAbilityObject());
            _this.items.push(new potionStealthAbilityObject_1.potionStealthAbilityObject());
            _this.items.push(new yesNoAbilityObject_1.yesNoAbilityObject());
            _this.items.push(new oneWordAbilityObject_1.oneWordAbilityObject());
            _this.items.push(new noeDetailedAbilityObject_1.noeDetailedAbilityObject());
            _this.items.push(new detailedAbilityObject_1.detailedAbilityObject());
            _this.items.push(new warriorHumanoidAbilityObject_1.warriorHumanoidAbilityObject());
            _this.items.push(new mageHumanoidAbilityObject_1.mageHumanoidAbilityObject());
            _this.items.push(new humanoidAbilityObject_1.humanoidAbilityObject());
            _this.items.push(new distractedHumanoidAbilityObject_1.distractedHumanoidAbilityObject());
            _this.items.push(new revealingLightAbilityObject_1.revealingLightAbilityObject());
            _this.items.push(new controllableLightAbilityObject_1.controllableLightAbilityObject());
            _this.items.push(new colorfulLightAbilityObject_1.colorfulLightAbilityObject());
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
