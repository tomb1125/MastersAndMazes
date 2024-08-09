(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (global){(function (){
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

}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./src/core/attack":22,"./src/core/characterContext":23,"./src/core/utilityFactory":25}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbilityObject = void 0;
var AbilityObject = /** @class */ (function () {
    function AbilityObject(name) {
        this.weight = function (x) { return 1; };
        this.isAnimal = false;
        this.isCommunication = false;
        this.name = name;
    }
    return AbilityObject;
}());
exports.AbilityObject = AbilityObject;

},{}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbilityObjectFactory = void 0;
var weightedList_1 = require("../core/weightedList");
var allAnimalsAbilityObject_1 = require("./abilityObjectRepository/animals/allAnimalsAbilityObject");
var catAbilityObject_1 = require("./abilityObjectRepository/animals/catAbilityObject");
var gainUnderstandingAbilityObject_1 = require("./abilityObjectRepository/symetricCommunications/gainUnderstandingAbilityObject");
var symetricTelepathyAbilityObject_1 = require("./abilityObjectRepository/symetricCommunications/symetricTelepathyAbilityObject");
var AbilityObjectFactory = /** @class */ (function () {
    function AbilityObjectFactory() {
    }
    AbilityObjectFactory.get = function (count) {
        return this.getAll().get(count);
    };
    AbilityObjectFactory.getAll = function () {
        var objs = new weightedList_1.WeightedList();
        //animals
        objs.push(new allAnimalsAbilityObject_1.allAnimalsAbilityObject());
        objs.push(new catAbilityObject_1.catAbilityObject());
        //communications
        objs.push(new gainUnderstandingAbilityObject_1.gainUnderstandingAbilityObject());
        objs.push(new symetricTelepathyAbilityObject_1.symetricTelepathyAbilityObject());
        return objs;
    };
    return AbilityObjectFactory;
}());
exports.AbilityObjectFactory = AbilityObjectFactory;

},{"../core/weightedList":28,"./abilityObjectRepository/animals/allAnimalsAbilityObject":4,"./abilityObjectRepository/animals/catAbilityObject":5,"./abilityObjectRepository/symetricCommunications/gainUnderstandingAbilityObject":6,"./abilityObjectRepository/symetricCommunications/symetricTelepathyAbilityObject":7}],4:[function(require,module,exports){
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
        _this.prefix = 'Animal';
        _this.isAnimal = true;
        return _this;
    }
    return allAnimalsAbilityObject;
}(abilityObject_1.AbilityObject));
exports.allAnimalsAbilityObject = allAnimalsAbilityObject;

},{"../../abilityObject":2}],5:[function(require,module,exports){
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
        _this.rarity = 0.3;
        _this.prefix = 'Feline';
        _this.isAnimal = true;
        return _this;
    }
    return catAbilityObject;
}(abilityObject_1.AbilityObject));
exports.catAbilityObject = catAbilityObject;

},{"../../abilityObject":2}],6:[function(require,module,exports){
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

},{"../../abilityObject":2}],7:[function(require,module,exports){
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
        _this.description = 'For the duration you can read each other minds as long as you\'ve seen the target within an hour. ';
        _this.rarity = 1.2;
        _this.prefix = 'Telepatic';
        _this.isCommunication = true;
        return _this;
    }
    return symetricTelepathyAbilityObject;
}(abilityObject_1.AbilityObject));
exports.symetricTelepathyAbilityObject = symetricTelepathyAbilityObject;

},{"../../abilityObject":2}],8:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescriptiveNumber = void 0;
var DescriptiveNumber = /** @class */ (function () {
    function DescriptiveNumber(value) {
        this.type = DescriptiveNumber.Type.Common;
        this.weight = function (x) { return 1; };
        this.value = value == undefined ? 0 : value;
    }
    ;
    DescriptiveNumber.prototype.getDescription = function () {
        if (this.description != undefined)
            return this.description;
        if (this.value != undefined)
            return this.value;
        throw 'Undefined Descriptive Number Error';
    };
    DescriptiveNumber.prototype.getValue = function () {
        return this.value;
    };
    DescriptiveNumber.prototype.getLowValue = function () {
        return this.lowValue == undefined ? this.value : this.lowValue;
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

},{}],9:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescriptiveNumberFactory = void 0;
var weightedList_1 = require("../core/weightedList");
var AdjacentEnemiesDescriptiveNumber_1 = require("./descriptiveNumberRepository/AdjacentEnemiesDescriptiveNumber");
var assassinDescriptiveNumber_1 = require("./descriptiveNumberRepository/assassinDescriptiveNumber");
var currentHealthDescriptiveNumber_1 = require("./descriptiveNumberRepository/currentHealthDescriptiveNumber");
var d10DescriptiveNumber_1 = require("./descriptiveNumberRepository/d10DescriptiveNumber");
var d4DescriptiveNumber_1 = require("./descriptiveNumberRepository/d4DescriptiveNumber");
var d4MinuteDescriptiveNumber_1 = require("./descriptiveNumberRepository/duration/d4MinuteDescriptiveNumber");
var aneHourDescriptiveNumber_1 = require("./descriptiveNumberRepository/duration/aneHourDescriptiveNumber");
var numberOfEnemiesDescriptiveNumber_1 = require("./descriptiveNumberRepository/numberOfEnemiesDescriptiveNumber");
var numberOfTurnsDescriptiveNumber_1 = require("./descriptiveNumberRepository/numberOfTurnsDescriptiveNumber");
var damageTakenDescriptiveNumber_1 = require("./descriptiveNumberRepository/damageTakenDescriptiveNumber");
var DescriptiveNumberFactory = /** @class */ (function () {
    function DescriptiveNumberFactory() {
    }
    DescriptiveNumberFactory.get = function (count) {
        return this.getAll().get(count);
    };
    DescriptiveNumberFactory.getAll = function () {
        var nums = new weightedList_1.WeightedList();
        nums.push(new AdjacentEnemiesDescriptiveNumber_1.adjacentEnemiesDescriptiveNumber());
        nums.push(new assassinDescriptiveNumber_1.assassinDescriptiveNumber());
        nums.push(new currentHealthDescriptiveNumber_1.currentHealthDescriptiveNumber());
        nums.push(new d4DescriptiveNumber_1.d4DescriptiveNumber());
        nums.push(new d10DescriptiveNumber_1.d10DescriptiveNumber());
        nums.push(new damageTakenDescriptiveNumber_1.damageTakenDescriptiveNumber());
        nums.push(new numberOfEnemiesDescriptiveNumber_1.numberOfEnemiesDescriptiveNumber());
        nums.push(new numberOfTurnsDescriptiveNumber_1.numberOfTurnsDescriptiveNumber());
        nums.push(new d4MinuteDescriptiveNumber_1.d4MinuteDescriptiveNumber());
        nums.push(new aneHourDescriptiveNumber_1.oneHourDescriptiveNumber());
        return nums;
    };
    return DescriptiveNumberFactory;
}());
exports.DescriptiveNumberFactory = DescriptiveNumberFactory;

},{"../core/weightedList":28,"./descriptiveNumberRepository/AdjacentEnemiesDescriptiveNumber":10,"./descriptiveNumberRepository/assassinDescriptiveNumber":11,"./descriptiveNumberRepository/currentHealthDescriptiveNumber":12,"./descriptiveNumberRepository/d10DescriptiveNumber":13,"./descriptiveNumberRepository/d4DescriptiveNumber":14,"./descriptiveNumberRepository/damageTakenDescriptiveNumber":15,"./descriptiveNumberRepository/duration/aneHourDescriptiveNumber":16,"./descriptiveNumberRepository/duration/d4MinuteDescriptiveNumber":17,"./descriptiveNumberRepository/numberOfEnemiesDescriptiveNumber":18,"./descriptiveNumberRepository/numberOfTurnsDescriptiveNumber":19}],10:[function(require,module,exports){
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
var descriptiveNumber_1 = require("../descriptiveNumber");
var adjacentEnemiesDescriptiveNumber = /** @class */ (function (_super) {
    __extends(adjacentEnemiesDescriptiveNumber, _super);
    function adjacentEnemiesDescriptiveNumber(value) {
        var _this = _super.call(this, value) || this;
        _this.value = 3;
        _this.type = descriptiveNumber_1.DescriptiveNumber.Type.Small;
        _this.name = 'the number of enemies adjacent to you.';
        return _this;
    }
    return adjacentEnemiesDescriptiveNumber;
}(descriptiveNumber_1.DescriptiveNumber));
exports.adjacentEnemiesDescriptiveNumber = adjacentEnemiesDescriptiveNumber;

},{"../descriptiveNumber":8}],11:[function(require,module,exports){
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
        _this.description = 'the number of enemies you defeated today';
        _this.type = descriptiveNumber_1.DescriptiveNumber.Type.Common;
        _this.name = 'assassin';
        return _this;
    }
    return assassinDescriptiveNumber;
}(descriptiveNumber_1.DescriptiveNumber));
exports.assassinDescriptiveNumber = assassinDescriptiveNumber;

},{"../../core/utils":27,"../descriptiveNumber":8}],12:[function(require,module,exports){
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
        _this.description = 'your current health';
        _this.type = descriptiveNumber_1.DescriptiveNumber.Type.Common;
        return _this;
    }
    return currentHealthDescriptiveNumber;
}(descriptiveNumber_1.DescriptiveNumber));
exports.currentHealthDescriptiveNumber = currentHealthDescriptiveNumber;

},{"../../core/utils":27,"../descriptiveNumber":8}],13:[function(require,module,exports){
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
exports.d10DescriptiveNumber = void 0;
var utils_1 = require("../../core/utils");
var descriptiveNumber_1 = require("../descriptiveNumber");
var d10DescriptiveNumber = /** @class */ (function (_super) {
    __extends(d10DescriptiveNumber, _super);
    function d10DescriptiveNumber(value) {
        var _this = _super.call(this, value) || this;
        _this.value = Math.ceil(utils_1.Utils.random() * 10);
        _this.type = descriptiveNumber_1.DescriptiveNumber.Type.Common;
        return _this;
    }
    return d10DescriptiveNumber;
}(descriptiveNumber_1.DescriptiveNumber));
exports.d10DescriptiveNumber = d10DescriptiveNumber;

},{"../../core/utils":27,"../descriptiveNumber":8}],14:[function(require,module,exports){
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
exports.d4DescriptiveNumber = void 0;
var utils_1 = require("../../core/utils");
var descriptiveNumber_1 = require("../descriptiveNumber");
var d4DescriptiveNumber = /** @class */ (function (_super) {
    __extends(d4DescriptiveNumber, _super);
    function d4DescriptiveNumber(value) {
        var _this = _super.call(this, value) || this;
        _this.value = Math.ceil(utils_1.Utils.random() * 4);
        _this.type = descriptiveNumber_1.DescriptiveNumber.Type.Small;
        _this.name = 'D4';
        return _this;
    }
    return d4DescriptiveNumber;
}(descriptiveNumber_1.DescriptiveNumber));
exports.d4DescriptiveNumber = d4DescriptiveNumber;

},{"../../core/utils":27,"../descriptiveNumber":8}],15:[function(require,module,exports){
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
        _this.description = 'your current damage taken';
        _this.type = descriptiveNumber_1.DescriptiveNumber.Type.Common;
        return _this;
    }
    return damageTakenDescriptiveNumber;
}(descriptiveNumber_1.DescriptiveNumber));
exports.damageTakenDescriptiveNumber = damageTakenDescriptiveNumber;

},{"../../core/utils":27,"../descriptiveNumber":8}],16:[function(require,module,exports){
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
        _this.value = 1;
        _this.description = 'one hour';
        _this.type = descriptiveNumber_1.DescriptiveNumber.Type.UtilityDuration;
        _this.name = 'One Hour';
        return _this;
    }
    return oneHourDescriptiveNumber;
}(descriptiveNumber_1.DescriptiveNumber));
exports.oneHourDescriptiveNumber = oneHourDescriptiveNumber;

},{"../../descriptiveNumber":8}],17:[function(require,module,exports){
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
        var initValue = [1, 5].sort(function () { return 0.5 - utils_1.Utils.random(); })[0];
        _this.value = initValue / 10;
        _this.type = descriptiveNumber_1.DescriptiveNumber.Type.UtilityDuration;
        _this.name = 'D4 Minutes';
        _this.description = initValue + ' minutes';
        return _this;
    }
    return d4MinuteDescriptiveNumber;
}(descriptiveNumber_1.DescriptiveNumber));
exports.d4MinuteDescriptiveNumber = d4MinuteDescriptiveNumber;

},{"../../../core/utils":27,"../../descriptiveNumber":8}],18:[function(require,module,exports){
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
exports.numberOfEnemiesDescriptiveNumber = void 0;
var utils_1 = require("../../core/utils");
var descriptiveNumber_1 = require("../descriptiveNumber");
var numberOfEnemiesDescriptiveNumber = /** @class */ (function (_super) {
    __extends(numberOfEnemiesDescriptiveNumber, _super);
    function numberOfEnemiesDescriptiveNumber(value) {
        var _this = _super.call(this, 5 * utils_1.Utils.AVG_ENEMIES_PER_PLAYER) || this;
        _this.lowValue = 1;
        _this.description = '5 times the number of enemies per player in combat (rounded up)';
        _this.type = descriptiveNumber_1.DescriptiveNumber.Type.Common;
        return _this;
    }
    return numberOfEnemiesDescriptiveNumber;
}(descriptiveNumber_1.DescriptiveNumber));
exports.numberOfEnemiesDescriptiveNumber = numberOfEnemiesDescriptiveNumber;

},{"../../core/utils":27,"../descriptiveNumber":8}],19:[function(require,module,exports){
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
        var _this = _super.call(this, 2 * utils_1.Utils.AVG_TURN) || this;
        _this.lowValue = 1;
        _this.description = 'two times the number of rounds in combat';
        _this.type = descriptiveNumber_1.DescriptiveNumber.Type.Common;
        return _this;
    }
    return numberOfTurnsDescriptiveNumber;
}(descriptiveNumber_1.DescriptiveNumber));
exports.numberOfTurnsDescriptiveNumber = numberOfTurnsDescriptiveNumber;

},{"../../core/utils":27,"../descriptiveNumber":8}],20:[function(require,module,exports){
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
        Type[Type["Weapon"] = 0] = "Weapon";
        Type[Type["Spell"] = 1] = "Spell";
        Type[Type["Technique"] = 2] = "Technique";
        Type[Type["Passive"] = 3] = "Passive";
        Type[Type["Utility"] = 4] = "Utility";
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
    })(Cooldown = Ability.Cooldown || (Ability.Cooldown = {}));
})(Ability || (exports.Ability = Ability = {}));

},{}],21:[function(require,module,exports){
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

},{"./ability":20}],22:[function(require,module,exports){
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
        _this.cooldown = ability_1.Ability.Cooldown.Encounter;
        return _this;
    }
    Attack.prototype.generate = function () {
        this.initMana();
        this.initType();
        this.initModifiers();
        this.initChance();
        this.initRange();
        this.initDamage();
        this.finalAdjustments();
        this.compensate();
    };
    Attack.prototype.initMana = function () {
        this.manaCost = 0;
    };
    Attack.prototype.initType = function () {
        if (this.type === undefined) {
            var roll = utils_1.Utils.random();
            if (roll > 0.5) {
                this.type = activity_1.Activity.Type.Weapon;
            }
            else {
                this.type = activity_1.Activity.Type.Spell;
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
            if (this.type === ability_1.Ability.Type.Weapon) {
                this.range = 1;
            }
            else {
                this.range = (Math.ceil(utils_1.Utils.random() * 3) * 5);
            }
        }
    };
    Attack.prototype.initDamage = function () {
        var tempDamage = this.getTempDamage();
        if (!this.damage && utils_1.Utils.random() < utils_1.Utils.ATTACK_DESCRIPTIVE_NUMBER_CHANCE) {
            this.damage = descriptiveNumberFactory_1.DescriptiveNumberFactory.getAll().filter(function (x) { return x.type === descriptiveNumber_1.DescriptiveNumber.Type.Common; }).get(1)[0];
        }
        //if((this.damage && this.damage?.getValue() < 5) || (!this.damage && tempDamage < 5)) {
        //  this.modifiers.push(new ModifierFactory().filter(mod => mod.modifierType === Modifier.Type.Constraint && !this.modifiers.map(mod => mod.name).includes(mod.name)).get(1, this)[0]);
        //}
        if (!this.damage) {
            this.damage = new descriptiveNumber_1.DescriptiveNumber(tempDamage);
        }
        else {
            if (tempDamage > 0) {
                this.chance = this.chance * tempDamage / this.damage.getValue(); //TODO this calculation is wrong when descriptive number is applied and we have modifier
            }
            else {
            }
        }
    };
    Attack.prototype.getTempDamage = function () {
        return ((this.manaCost +
            characterContext_1.CharacterContext.getDPS()) * this.getDPSMultiplier()
            + this.getDPSBonus())
            * utils_1.Utils.getRangeCoeficient(this.range)
            * utils_1.Utils.getDPSCoefficient(this.chance)
            / this.chance;
    };
    Attack.prototype.getPower = function () {
        var power = (this.damage.value *
            this.chance
            / utils_1.Utils.getRangeCoeficient(this.range)
            / utils_1.Utils.getDPSCoefficient(this.chance)
            - this.getDPSBonus()) / this.getDPSMultiplier()
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
                    _this.modifiers = new modifierFactory_1.ModifierFactory().get(numberOfModifiers, _this);
                }
                else {
                    _this.modifiers = [];
                }
            });
        }
    };
    Attack.prototype.finalAdjustments = function () {
        if (this.type === ability_1.Ability.Type.Spell) { //TODO allow for disabling compensation
            if (this.damage.description != null) {
                this.damage.value += Math.ceil(utils_1.Utils.random() * 2.1);
            }
            this.chance = Math.min(1, this.chance + 0.1);
            this.range = (this.range === 1 ? 0 : this.range) + 5;
        }
    };
    Attack.prototype.compensate = function () {
        if (this.damage.value < 3.5 && this.damage.description == undefined) {
            this.damage.value = 3.5;
        }
        if (this.chance > 1) {
            this.chance = 1;
        }
        var tempMana = Math.ceil(this.getPower() - 0.00001);
        if (tempMana < 0) {
            this.chance += 0.1;
            if (this.chance > 1) {
                this.damage = new descriptiveNumber_1.DescriptiveNumber(this.damage.getValue() + 1);
            }
            this.compensate();
        }
        this.manaCost += tempMana;
    };
    Attack.prototype.getDPSBonus = function () {
        var _this = this;
        var dps = 0;
        this.modifiers.forEach(function (m) {
            if (m.powerBonus) {
                dps += m.powerBonus(_this);
            }
        });
        return dps;
    };
    Attack.prototype.getDPSMultiplier = function () {
        var _this = this;
        var dps = 1;
        this.modifiers.forEach(function (m) {
            if (m.powerMultiplier) {
                dps *= m.powerMultiplier(_this);
            }
        });
        return dps;
    };
    Attack.prototype.getDescription = function () {
        return '' +
            '<b>Name: ' + this.generateName() +
            '</b><br><b>Chance</b>: ' + Math.ceil(this.chance * 100) + '%' +
            '<br><b>Damage</b>: ' + (this.damage.description ? this.damage.getDescription() : utils_1.Utils.valueToDiceRoll(this.damage.value)) +
            '<br><b>Mana Cost</b>: ' + this.manaCost +
            '<br><b>Range</b>: ' + this.range +
            '<br><b>Modifiers</b>: ' + this.modifiers.reduce(function (sum, mod) { return sum + ', ' + (mod.name === undefined ? mod.namePrefix : mod.name); }, '').slice(2) +
            '<br><b>Type</b>: ' + ability_1.Ability.Type[this.type] +
            '<br><b>Description</b>: ' + this.modifiers.reduce(function (sum, mod) { return sum + ' ' + mod.description; }, '').slice(1) +
            '<br><b>Cooldown</b>: ' + ability_1.Ability.Cooldown[this.cooldown];
    };
    Attack.prototype.generateName = function () {
        var attackPortion = this.type === activity_1.Activity.Type.Weapon ? [
            'Slam',
            'Stab',
            'Strike',
            'Slash',
            'Pummel'
        ].sort(function () { return 0.5 - utils_1.Utils.random(); })[0] : '';
        var spellPortion = this.type === activity_1.Activity.Type.Spell ? [
            'Blast',
            'Ray',
            'Missile',
            'Dart',
            'Beam'
        ].sort(function () { return 0.5 - utils_1.Utils.random(); })[0] : '';
        var randomPortion = [
            this.chance > 0.75 ? 'Precise ' : '',
            this.chance > 0.75 ? 'Accurate ' : '',
            this.chance < 0.3 ? 'Heavy ' : '',
            this.chance < 0.3 ? 'Slow ' : '',
            this.modifiers.length === 0 ? 'Boring ' : '',
            this.modifiers.length === 0 ? 'Basic ' : '',
            this.modifiers.length === 0 ? 'Nothing-To-Write-Home-About ' : '',
            this.manaCost > 8 ? 'Costly ' : '',
            this.manaCost > 8 ? 'Exhausting ' : '',
            '',
            '',
            'Gruesome ',
            'Deadly ',
            'Awesome ',
            'Flashy ',
            'Outstanding ',
            'Ruthless '
        ].sort(function () { return 0.5 - utils_1.Utils.random(); })[0];
        return this.modifiers.reduce(function (sum, mod) { return sum + ' ' + mod.namePrefix; }, '').slice(1) +
            (this.modifiers.length > 0 ? ' ' : '') +
            randomPortion +
            attackPortion +
            spellPortion;
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

},{"../components/descriptiveNumber":8,"../components/descriptiveNumberFactory":9,"./../modifiers/modifierFactory":38,"./ability":20,"./activity":21,"./characterContext":23,"./utils":27}],23:[function(require,module,exports){
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
    CharacterContext.class = 0;
    CharacterContext.seed = '' + Math.random();
    return CharacterContext;
}());
exports.CharacterContext = CharacterContext;
(function (CharacterContext) {
    var Class;
    (function (Class) {
        Class[Class["Cleric"] = 0] = "Cleric";
        Class[Class["Fighter"] = 1] = "Fighter";
        Class[Class["Leader"] = 2] = "Leader";
        Class[Class["Paladin"] = 3] = "Paladin";
        Class[Class["Ranger"] = 4] = "Ranger";
        Class[Class["Rogue"] = 5] = "Rogue";
        Class[Class["Sorcerer"] = 6] = "Sorcerer";
        Class[Class["Wizard"] = 7] = "Wizard";
        Class[Class["Assassin"] = 8] = "Assassin";
        Class[Class["Barbarian"] = 9] = "Barbarian";
        Class[Class["Bard"] = 10] = "Bard";
        Class[Class["Druid"] = 11] = "Druid";
        Class[Class["Monk"] = 12] = "Monk";
        Class[Class["Runepriest"] = 13] = "Runepriest";
        Class[Class["Shaman"] = 14] = "Shaman";
        Class[Class["Warlock"] = 15] = "Warlock";
    })(Class = CharacterContext.Class || (CharacterContext.Class = {}));
})(CharacterContext || (exports.CharacterContext = CharacterContext = {}));

},{"./utils":27}],24:[function(require,module,exports){
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
            'Name: ' + this.generateName() +
            '\nChance: ' + Math.ceil(this.chance * 100) + '%' +
            '\nModifiers: ' + this.modifiers.reduce(function (sum, mod) { return sum + ', ' + (mod.name === undefined ? mod.namePrefix : mod.name); }, '').slice(2) +
            //  '\nType: ' + Ability.Type[this.type] + 
            '\nDescription: ' + this.description + this.modifiers.reduce(function (sum, mod) { return sum + ' ' + mod.description; }, '').slice(1) +
            '\nCooldown: ' + ability_1.Ability.Cooldown[this.cooldown];
    };
    Utility.prototype.generateName = function () {
        return this.objects.reduce(function (sum, mod) { return sum + ' ' + (mod.prefix === undefined ? mod.name : mod.prefix); }, '') + ' ' + this.name;
    };
    Utility.prototype.compensate = function () {
        var repeat = new repeatableModifier_1.repeatableModifier();
        if (this.chance > 5) {
            repeat.setValue(10);
            this.chance /= 10;
            this.chance = Math.min(1, this.chance);
            this.modifiers.push(repeat);
            console.error('reaching top end of chance conpensation');
        }
        else if (this.chance > 4) {
            repeat.setValue(8);
            this.chance /= 8;
            this.modifiers.push(repeat);
        }
        else if (this.chance > 3) {
            repeat.setValue(6);
            this.chance /= 6;
            this.modifiers.push(repeat);
        }
        else if (this.chance > 2) {
            repeat.setValue(4);
            this.chance /= 4;
            this.modifiers.push(repeat);
        }
        else if (this.chance > 1) {
            repeat.setValue(2);
            this.chance /= 2;
            this.modifiers.push(repeat);
        }
    };
    return Utility;
}(activity_1.Activity));
exports.Utility = Utility;

},{"../modifiers/modifiersRepository/repeatableModifier":50,"./ability":20,"./activity":21}],25:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilityFactory = void 0;
var animalSpeak_1 = require("./utilityRepository/animalSpeak");
var weightedList_1 = require("./weightedList");
var UtilityFactory = /** @class */ (function () {
    function UtilityFactory() {
    }
    UtilityFactory.get = function (count) {
        return this.getAll().get(count);
    };
    UtilityFactory.getAll = function () {
        var utls = new weightedList_1.WeightedList();
        utls.push(new animalSpeak_1.AnimalSpeak());
        return utls;
    };
    return UtilityFactory;
}());
exports.UtilityFactory = UtilityFactory;

},{"./utilityRepository/animalSpeak":26,"./weightedList":28}],26:[function(require,module,exports){
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
exports.AnimalSpeak = void 0;
var abilityObjectFactory_1 = require("../../components/abilityObjectFactory");
var descriptiveNumber_1 = require("../../components/descriptiveNumber");
var descriptiveNumberFactory_1 = require("../../components/descriptiveNumberFactory");
var utility_1 = require("../utility");
var AnimalSpeak = /** @class */ (function (_super) {
    __extends(AnimalSpeak, _super);
    function AnimalSpeak() {
        var _this = _super.call(this, 'Speak') || this;
        _this.objects.push(abilityObjectFactory_1.AbilityObjectFactory.getAll().filter(function (x) { return x.isAnimal; }).get(1)[0]);
        _this.objects.push(abilityObjectFactory_1.AbilityObjectFactory.getAll().filter(function (x) { return x.isCommunication; }).get(1)[0]);
        //this.duration = new DescriptiveNumber(1); //TODO move to new 
        //this.duration.description = '1 minute';
        _this.duration = descriptiveNumberFactory_1.DescriptiveNumberFactory.getAll().filter(function (x) { return x.type === descriptiveNumber_1.DescriptiveNumber.Type.UtilityDuration; }).get(1)[0];
        _this.chance = 0.6
            / _this.objects[0].rarity
            / _this.objects[1].rarity
            / _this.duration.getValue();
        _this.description = 'You can communicate with ' + _this.objects[0].description + ' for ' + _this.duration.getDescription() + '. ' + _this.objects[1].description;
        _this.compensate();
        return _this;
    }
    return AnimalSpeak;
}(utility_1.Utility));
exports.AnimalSpeak = AnimalSpeak;

},{"../../components/abilityObjectFactory":3,"../../components/descriptiveNumber":8,"../../components/descriptiveNumberFactory":9,"../utility":24}],27:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utils = void 0;
var Utils = /** @class */ (function () {
    function Utils() {
    }
    Utils.random = function () {
        return Math.random();
    };
    ;
    //since High Accuracy and Low Accuracy attacks are easily exploitable. Thus we provide bonus to Medium Accuracy attacks.
    Utils.getDPSCoefficient = function (chance) {
        //return 1.1 - 0.2 * Math.abs(0.5 - chance);
        return 1; //TODO restore
    };
    Utils.getDPS = function (level) {
        return Utils.DPS + Utils.POWER_PER_LEVEL * (level - 1);
    };
    Utils.getRangeCoeficient = function (range) {
        return (21 + range) / (20 + 2 * range);
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
    Utils.DPS = 5;
    Utils.POWER_PER_LEVEL = 0.2;
    Utils.BASIC_ATTACK_DPS = 2.5;
    Utils.ATTACK_DESCRIPTIVE_NUMBER_CHANCE = 0.15;
    Utils.BoonValue = Utils.DPS * 5;
    Utils.avgHealth = 25;
    Utils.AVG_ENEMIES_PER_PLAYER = 1.7;
    Utils.AVG_TURN = 4;
    return Utils;
}());
exports.Utils = Utils;

},{}],28:[function(require,module,exports){
"use strict";
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
    WeightedList.prototype.get = function (num, affector) {
        return WeightedList.getRandomFromList(__spreadArray([], this.items, true), num, affector);
    };
    WeightedList.getRandomFromList = function (array, num, affector) {
        if (array.length < num) {
            throw 'cannot find ' + num + ' items in array with ' + array.length + ' elements';
        }
        var allWeight = array.reduce(function (sum, item) { return sum + item.weight(affector); }, 0);
        var roll = utils_1.Utils.random() * allWeight;
        var randomElement;
        var newArray;
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
                return __spreadArray([randomElement], WeightedList.getRandomFromList(newArray, num - 1), true);
            }
        }
        throw 'bad randomness';
    };
    return WeightedList;
}());
exports.WeightedList = WeightedList;

},{"./utils":27}],29:[function(require,module,exports){
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

},{"./modifier":37}],30:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EffectFactory = void 0;
var weightedList_1 = require("../core/weightedList");
var dotEffect_1 = require("./effectRepository/dotEffect");
var stunEffect_1 = require("./effectRepository/stunEffect");
var instakillEffect_1 = require("./effectRepository/instakillEffect");
var guidingEffect_1 = require("./effectRepository/guidingEffect");
var damageBonusEffect_1 = require("./effectRepository/damageBonusEffect");
var EffectFactory = /** @class */ (function () {
    function EffectFactory() {
    }
    EffectFactory.getAll = function () {
        var eff = new weightedList_1.WeightedList();
        eff.push(new stunEffect_1.stunEffect());
        eff.push(new instakillEffect_1.instakillEffect());
        eff.push(new dotEffect_1.dotEffect());
        eff.push(new guidingEffect_1.guidingEffect());
        eff.push(new damageBonusEffect_1.damageBonusEffect());
        return eff;
    };
    EffectFactory.get = function (count) {
        return EffectFactory.getAll().get(count);
    };
    return EffectFactory;
}());
exports.EffectFactory = EffectFactory;

},{"../core/weightedList":28,"./effectRepository/damageBonusEffect":31,"./effectRepository/dotEffect":32,"./effectRepository/guidingEffect":33,"./effectRepository/instakillEffect":34,"./effectRepository/stunEffect":36}],31:[function(require,module,exports){
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
        _this.value = Math.ceil(Math.random() * 4) + 1;
        _this.duration = Math.ceil(Math.random() * 2 + 0.5);
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

},{"../../core/ability":20,"../../core/utils":27,"../effect":29}],32:[function(require,module,exports){
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
exports.dotEffect = void 0;
var ability_1 = require("../../core/ability");
var utils_1 = require("../../core/utils");
var effect_1 = require("../effect");
var dotEffect = /** @class */ (function (_super) {
    __extends(dotEffect, _super);
    function dotEffect() {
        var _this = _super.call(this) || this;
        var dotInit = [[ability_1.Ability.Element.Physical, 'Bleeding'], [ability_1.Ability.Element.Fire, 'Burning'], [ability_1.Ability.Element.Poison, 'Poisoned']].sort(function () { return 0.5 - utils_1.Utils.random(); })[0];
        _this.value = Math.ceil(utils_1.Utils.DPS * (utils_1.Utils.random()));
        _this.duration = Math.ceil(utils_1.Utils.random() * 3 + 1) + 1;
        _this.powerBonus = function (x) { return -_this.value * utils_1.Utils.getDurationCoeficient(_this.duration); };
        _this.elements = [dotInit[0]];
        _this.name = dotInit[1] + ' ' + _this.value + 'x' + _this.duration;
        _this.namePrefix = dotInit[1];
        _this.description = _this.namePrefix + ' - at the end of each turn target takes ' + _this.value + ' damage, lasts for ' + _this.duration + ' turns.';
        _this.subtype = effect_1.Effect.Subtype.Debuff;
        return _this;
    }
    return dotEffect;
}(effect_1.Effect));
exports.dotEffect = dotEffect;

},{"../../core/ability":20,"../../core/utils":27,"../effect":29}],33:[function(require,module,exports){
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
        _this.value = Math.ceil(Math.random() * 2.2);
        _this.duration = Math.ceil(Math.random() * 2 + 0.5);
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

},{"../../core/ability":20,"../../core/utils":27,"../effect":29}],34:[function(require,module,exports){
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
        _this.weight = function () { return 0.1; };
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

},{"../../core/ability":20,"../../core/utils":27,"../effect":29}],35:[function(require,module,exports){
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

},{"../../core/ability":20,"../../core/utils":27,"../effect":29}],36:[function(require,module,exports){
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
var characterContext_1 = require("../../core/characterContext");
var utils_1 = require("../../core/utils");
var effect_1 = require("../effect");
var stunEffect = /** @class */ (function (_super) {
    __extends(stunEffect, _super);
    function stunEffect() {
        var _this = _super.call(this) || this;
        _this.powerBonus = function () { return -1.5 * characterContext_1.CharacterContext.getDPS(); };
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

},{"../../core/ability":20,"../../core/characterContext":23,"../../core/utils":27,"../effect":29}],37:[function(require,module,exports){
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

},{}],38:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModifierFactory = void 0;
var weightedList_1 = require("../core/weightedList");
var nightlyModifier_1 = require("./modifiersRepository/nightlyModifier");
var laylineModifier_1 = require("./modifiersRepository/laylineModifier");
var bloodiedModifier_1 = require("./modifiersRepository/bloodiedModifier");
var ultimateModifier_1 = require("./modifiersRepository/ultimateModifier");
var signatureModifier_1 = require("./modifiersRepository/signatureModifier");
var vengefulModifier_1 = require("./modifiersRepository/vengefulModifier");
var momentumModifier_1 = require("./modifiersRepository/momentumModifier");
var exhaustingModifer_1 = require("./modifiersRepository/exhaustingModifer");
var multipleModifer_1 = require("./modifiersRepository/multipleModifer");
var cleaveModifier_1 = require("./modifiersRepository/cleaveModifier");
var fastModifier_1 = require("./modifiersRepository/fastModifier");
var selfHealModifier_1 = require("./modifiersRepository/selfHealModifier");
var applyEffectModifier_1 = require("./modifiersRepository/applyEffectModifier");
var gainEffectModifier_1 = require("./modifiersRepository/gainEffectModifier");
var lifestealModifier_1 = require("./modifiersRepository/lifestealModifier");
var scalingDotEffect_1 = require("./effectRepository/scalingDotEffect");
var ModifierFactory = /** @class */ (function () {
    function ModifierFactory(list) {
        if (list === undefined) {
            this.modifiers = new weightedList_1.WeightedList();
            this.modifiers.push(new applyEffectModifier_1.applyEffectModifier());
            this.modifiers.push(new bloodiedModifier_1.bloodiedModifier());
            this.modifiers.push(new cleaveModifier_1.cleaveModifier());
            this.modifiers.push(new exhaustingModifer_1.exhaustingModifer());
            this.modifiers.push(new fastModifier_1.fastModifier());
            this.modifiers.push(new gainEffectModifier_1.gainEffectModifier());
            this.modifiers.push(new laylineModifier_1.laylineModifier());
            this.modifiers.push(new lifestealModifier_1.lifestealModifier());
            this.modifiers.push(new momentumModifier_1.momentumModifier());
            this.modifiers.push(new multipleModifer_1.multipleModifier());
            this.modifiers.push(new nightlyModifier_1.nightlyModifier());
            this.modifiers.push(new selfHealModifier_1.selfHealModifier());
            this.modifiers.push(new signatureModifier_1.signatureModifier());
            this.modifiers.push(new vengefulModifier_1.vengefulModifier());
            this.modifiers.push(new ultimateModifier_1.ultimateModifier());
            //this.modifiers.push(new repeatableModifier()); //this modifier is excluded for now purposfully. It behaves differently for utilities and for attacks.
            this.modifiers.push(new scalingDotEffect_1.scalingDotEffect());
        }
        else {
            this.modifiers = list;
        }
    }
    ModifierFactory.prototype.getAll = function () {
        return this.modifiers;
    };
    ModifierFactory.prototype.get = function (count, affector) {
        return this.modifiers.get(count, affector);
    };
    ModifierFactory.prototype.filter = function (z) {
        this.modifiers = this.modifiers.filter(z);
        return this;
    };
    return ModifierFactory;
}());
exports.ModifierFactory = ModifierFactory;

},{"../core/weightedList":28,"./effectRepository/scalingDotEffect":35,"./modifiersRepository/applyEffectModifier":39,"./modifiersRepository/bloodiedModifier":40,"./modifiersRepository/cleaveModifier":41,"./modifiersRepository/exhaustingModifer":42,"./modifiersRepository/fastModifier":43,"./modifiersRepository/gainEffectModifier":44,"./modifiersRepository/laylineModifier":45,"./modifiersRepository/lifestealModifier":46,"./modifiersRepository/momentumModifier":47,"./modifiersRepository/multipleModifer":48,"./modifiersRepository/nightlyModifier":49,"./modifiersRepository/selfHealModifier":51,"./modifiersRepository/signatureModifier":52,"./modifiersRepository/ultimateModifier":53,"./modifiersRepository/vengefulModifier":54}],39:[function(require,module,exports){
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
var utils_1 = require("../../core/utils");
var effect_1 = require("../effect");
var effectFactory_1 = require("../effectFactory");
var modifier_1 = require("../modifier");
var applyEffectModifier = /** @class */ (function (_super) {
    __extends(applyEffectModifier, _super);
    function applyEffectModifier() {
        var _this = _super.call(this) || this;
        _this.longDescription = '';
        _this.modifierType = modifier_1.Modifier.Type.Improvement;
        _this.weight = function () { return 4; };
        _this.effect = effectFactory_1.EffectFactory.getAll().filter(function (eff) { return eff.subtype === effect_1.Effect.Subtype.Debuff; }).get(1)[0];
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

},{"../../core/utils":27,"../effect":29,"../effectFactory":30,"../modifier":37}],40:[function(require,module,exports){
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
var modifier_1 = require("../modifier");
var bloodiedModifier = /** @class */ (function (_super) {
    __extends(bloodiedModifier, _super);
    function bloodiedModifier() {
        var _this = _super.call(this) || this;
        _this.powerMultiplier = function () { return 1.5; };
        //this.weight = (x?: AffectsWeight) => {return x?.type === Ability.Type.Weapon ? 1000 : 1}
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

},{"../modifier":37}],41:[function(require,module,exports){
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
var modifier_1 = require("../modifier");
var cleaveModifier = /** @class */ (function (_super) {
    __extends(cleaveModifier, _super);
    function cleaveModifier() {
        var _this = _super.call(this) || this;
        _this.powerMultiplier = function () { return 0.5; };
        _this.name = 'Cleave';
        _this.namePrefix = 'Cleaving'; //TODO cleave could scale
        _this.description = 'After this action, repeat this action 1 time, without paying mana cost. With this repeated attack you must target an enemy adjacent to you or last target.';
        _this.longDescription = '';
        _this.modifierType = modifier_1.Modifier.Type.Improvement;
        return _this;
    }
    return cleaveModifier;
}(modifier_1.Modifier));
exports.cleaveModifier = cleaveModifier;

},{"../modifier":37}],42:[function(require,module,exports){
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
var modifier_1 = require("../modifier");
var exhaustingModifer = /** @class */ (function (_super) {
    __extends(exhaustingModifer, _super);
    function exhaustingModifer() {
        var _this = _super.call(this) || this;
        _this.powerMultiplier = function () { return 2.5; };
        _this.name = 'Exhausting';
        _this.namePrefix = 'Exhausting';
        _this.description = 'When you hit or miss with this action, reduce your health to 1.';
        _this.modifierType = modifier_1.Modifier.Type.Constraint;
        return _this;
    }
    return exhaustingModifer;
}(modifier_1.Modifier));
exports.exhaustingModifer = exhaustingModifer;

},{"../modifier":37}],43:[function(require,module,exports){
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
var utils_1 = require("../../core/utils");
var modifier_1 = require("../modifier");
var fastModifier = /** @class */ (function (_super) {
    __extends(fastModifier, _super);
    function fastModifier() {
        var _this = _super.call(this) || this;
        _this.powerBonus = function () { return -utils_1.Utils.DPS; };
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

},{"../../core/utils":27,"../modifier":37}],44:[function(require,module,exports){
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
var effect_1 = require("../effect");
var effectFactory_1 = require("../effectFactory");
var modifier_1 = require("../modifier");
var gainEffectModifier = /** @class */ (function (_super) {
    __extends(gainEffectModifier, _super);
    function gainEffectModifier() {
        var _this = _super.call(this) || this;
        _this.modifierType = modifier_1.Modifier.Type.Improvement;
        _this.weight = function () { return 4; };
        _this.effect = effectFactory_1.EffectFactory.getAll().filter(function (eff) { return eff.subtype === effect_1.Effect.Subtype.Buff; }).get(1)[0];
        _this.description = 'When you hit, gain an effect: ' + _this.effect.description;
        _this.namePrefix = _this.effect.namePrefix;
        _this.name = 'Gain ' + _this.effect.name;
        _this.powerBonus = function (x) { return x.chance != null ? x.chance * _this.effect.powerBonus(x) : -100000; };
        _this.powerMultiplier = function (x) { return _this.effect.powerMultiplier(x); }; //TODO test if true
        return _this;
    }
    return gainEffectModifier;
}(modifier_1.Modifier));
exports.gainEffectModifier = gainEffectModifier;

},{"../effect":29,"../effectFactory":30,"../modifier":37}],45:[function(require,module,exports){
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
var modifier_1 = require("../modifier");
var laylineModifier = /** @class */ (function (_super) {
    __extends(laylineModifier, _super);
    function laylineModifier() {
        var _this = _super.call(this) || this;
        _this.powerMultiplier = function (x) { return x.range ? Math.max(1.1, 2.4 - x.range / 10) : 1; };
        1.7;
        _this.name = 'Layline';
        _this.namePrefix = 'Layline';
        _this.description = 'Can be used only while adjacent to place of power.';
        _this.longDescription = '';
        _this.modifierType = modifier_1.Modifier.Type.Constraint;
        return _this;
    }
    return laylineModifier;
}(modifier_1.Modifier));
exports.laylineModifier = laylineModifier;

},{"../modifier":37}],46:[function(require,module,exports){
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
var descriptiveNumberFactory_1 = require("../../components/descriptiveNumberFactory");
var modifier_1 = require("../modifier");
var lifestealModifier = /** @class */ (function (_super) {
    __extends(lifestealModifier, _super);
    function lifestealModifier() {
        var _this = _super.call(this) || this;
        _this.modifierType = modifier_1.Modifier.Type.Improvement;
        _this.name = 'Lifesteal';
        _this.numericComponents = descriptiveNumberFactory_1.DescriptiveNumberFactory.get(1);
        _this.namePrefix = 'Leeching';
        _this.description = 'When you hit, heal yourself equal to damage taken by enemy.';
        _this.powerMultiplier = function (x) { return 0.55; }; //TODO this should be bonus equal to damage... however damage is set after modifiers...s
        _this.longDescription = '';
        return _this;
    }
    return lifestealModifier;
}(modifier_1.Modifier));
exports.lifestealModifier = lifestealModifier;

},{"../../components/descriptiveNumberFactory":9,"../modifier":37}],47:[function(require,module,exports){
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
var descriptiveNumberFactory_1 = require("../../components/descriptiveNumberFactory");
var modifier_1 = require("../modifier");
var momentumModifier = /** @class */ (function (_super) {
    __extends(momentumModifier, _super);
    function momentumModifier() {
        var _this = _super.call(this) || this;
        _this.name = 'Inertia';
        _this.numericComponents = descriptiveNumberFactory_1.DescriptiveNumberFactory.getAll().filter(function (x) { return x.name === 'D4'; }).get(1);
        _this.namePrefix = 'Inertia';
        _this.description = 'Can be only used when you fail chance roll with ' + _this.numericComponents[0].getValue() + ' ' + (_this.numericComponents[0].getValue() === 1 ? 'ability' : 'abilities') + ' in a row. '; //TODO better wording when 1
        _this.longDescription = '';
        _this.powerMultiplier = function (x) { return Math.pow(1.58, _this.numericComponents[0].getValue()); };
        _this.modifierType = modifier_1.Modifier.Type.Constraint;
        return _this;
    }
    return momentumModifier;
}(modifier_1.Modifier));
exports.momentumModifier = momentumModifier;

},{"../../components/descriptiveNumberFactory":9,"../modifier":37}],48:[function(require,module,exports){
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
var weightedList_1 = require("../../core/weightedList");
var modifier_1 = require("../modifier");
var multipleModifier = /** @class */ (function (_super) {
    __extends(multipleModifier, _super);
    function multipleModifier() {
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

},{"../../components/descriptiveNumber":8,"../../core/weightedList":28,"../modifier":37}],49:[function(require,module,exports){
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
    function nightlyModifier() {
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

},{"../modifier":37}],50:[function(require,module,exports){
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
    function repeatableModifier() {
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
        _this.powerMultiplier = function () { return 1 / _this.numericComponents[0].getValue(); };
        _this.name = 'Repeat ' + _this.numericComponents[0].getValue();
        _this.namePrefix = 'Repeatable ';
        _this.description = 'You can use this ability ' + _this.numericComponents[0].getValue() + ' times before it goes on cooldown.';
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

},{"../../components/descriptiveNumber":8,"../../core/weightedList":28,"../modifier":37}],51:[function(require,module,exports){
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
var descriptiveNumberFactory_1 = require("../../components/descriptiveNumberFactory");
var ability_1 = require("../../core/ability");
var utils_1 = require("../../core/utils");
var modifier_1 = require("../modifier");
var selfHealModifier = /** @class */ (function (_super) {
    __extends(selfHealModifier, _super);
    function selfHealModifier() {
        var _this = _super.call(this) || this;
        _this.modifierType = modifier_1.Modifier.Type.Improvement;
        _this.numericComponents = [descriptiveNumberFactory_1.DescriptiveNumberFactory.getAll().filter(function (x) { return x.type === descriptiveNumber_1.DescriptiveNumber.Type.Small; }).get(1)[0]];
        _this.name = 'Self Heal ' + _this.numericComponents[0].getValue();
        _this.namePrefix = 'Healing';
        _this.description = 'When you hit, heal yourself equal to: ' + _this.numericComponents[0].getDescription() + '.';
        _this.powerBonus = function () { return -_this.numericComponents[0].getValue(); };
        _this.longDescription = '';
        _this.elements = [[ability_1.Ability.Element.Radiant, ability_1.Ability.Element.Dark, ability_1.Ability.Element.Emotion].sort(function () { return 0.5 - utils_1.Utils.random(); })[1]];
        return _this;
    }
    return selfHealModifier;
}(modifier_1.Modifier));
exports.selfHealModifier = selfHealModifier;

},{"../../components/descriptiveNumber":8,"../../components/descriptiveNumberFactory":9,"../../core/ability":20,"../../core/utils":27,"../modifier":37}],52:[function(require,module,exports){
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
var modifier_1 = require("../modifier");
var signatureModifier = /** @class */ (function (_super) {
    __extends(signatureModifier, _super);
    function signatureModifier() {
        var _this = _super.call(this) || this;
        _this.powerMultiplier = function () { return 1.2; };
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

},{"../modifier":37}],53:[function(require,module,exports){
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
var modifier_1 = require("../modifier");
var ultimateModifier = /** @class */ (function (_super) {
    __extends(ultimateModifier, _super);
    function ultimateModifier() {
        var _this = _super.call(this) || this;
        _this.powerMultiplier = function () { return 2.5; };
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

},{"../modifier":37}],54:[function(require,module,exports){
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
var modifier_1 = require("../modifier");
var vengefulModifier = /** @class */ (function (_super) {
    __extends(vengefulModifier, _super);
    function vengefulModifier() {
        var _this = _super.call(this) || this;
        _this.powerMultiplier = function (x) { return 1.3; };
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

},{"../modifier":37}]},{},[1]);
