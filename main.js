(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (global){(function (){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var attack_1 = require("./src/core/attack");
var utils_1 = require("./src/core/utils");
var utilityFactory_1 = require("./src/core/utilityFactory");
var characterContext_1 = require("./src/core/characterContext");
var ability_1 = require("./src/core/ability");
var randomNumberGenerator_1 = require("./src/core/randomNumberGenerator");
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
    var levelMode = characterContext_1.CharacterContext.level % 3;
    var description = '';
    if (levelMode === 1) {
        var att1 = new attack_1.Attack();
        att1.generate();
        var att2 = new attack_1.Attack();
        att2.generate();
        var att3 = new attack_1.Attack();
        att3.generate();
        description = '<br>' +
            att1.getDescription() + '<br><br>' +
            att2.getDescription() + '<br><br>' +
            att3.getDescription() + '<br><br>';
    }
    else if (levelMode === 2) {
        var utl = new utilityFactory_1.UtilityFactory(new ability_1.Ability()).get(3);
        description = '<br>' +
            utl[0].getDescription() + '<br><br>' +
            utl[1].getDescription() + '<br><br>' +
            utl[2].getDescription() + '<br><br>';
    }
    else {
    }
    outputDiv.innerHTML = description;
};

}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./src/core/ability":28,"./src/core/attack":30,"./src/core/characterContext":31,"./src/core/randomNumberGenerator":33,"./src/core/utilityFactory":35,"./src/core/utils":39}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbilityObject = void 0;
var AbilityObject = /** @class */ (function () {
    function AbilityObject(name) {
        this.weight = function (x) { return 1; };
        this.isAnimal = false;
        this.isCommunication = false;
        this.isQuestion = false;
        this.isLight = false;
        this.name = name;
    }
    return AbilityObject;
}());
exports.AbilityObject = AbilityObject;

},{}],3:[function(require,module,exports){
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
var allAnimalsAbilityObject_1 = require("./abilityObjectRepository/animals/allAnimalsAbilityObject");
var birdAbilityObject_1 = require("./abilityObjectRepository/animals/birdAbilityObject");
var reptileAbilityObject_1 = require("./abilityObjectRepository/animals/reptileAbilityObject");
var catAbilityObject_1 = require("./abilityObjectRepository/animals/catAbilityObject");
var magicalAbilityObject_1 = require("./abilityObjectRepository/animals/magicalAbilityObject");
var ratAbilityObject_1 = require("./abilityObjectRepository/animals/ratAbilityObject");
var wildAbilityObject_1 = require("./abilityObjectRepository/animals/wildAbilityObject");
var gainUnderstandingAbilityObject_1 = require("./abilityObjectRepository/symetricCommunications/gainUnderstandingAbilityObject");
var symetricEmpathicAbilityObject_1 = require("./abilityObjectRepository/symetricCommunications/symetricEmpathicAbilityObject");
var symetricTelepathyAbilityObject_1 = require("./abilityObjectRepository/symetricCommunications/symetricTelepathyAbilityObject");
var detailedAbilityObject_1 = require("./abilityObjectRepository/questions/detailedAbilityObject");
var yesNoAbilityObject_1 = require("./abilityObjectRepository/questions/yesNoAbilityObject");
var colorofulLightAbilityObject_1 = require("./abilityObjectRepository/light/colorofulLightAbilityObject");
var controllableLightAbilityObject_1 = require("./abilityObjectRepository/light/controllableLightAbilityObject");
var AbilityObjectFactory = /** @class */ (function (_super) {
    __extends(AbilityObjectFactory, _super);
    function AbilityObjectFactory(affector, list) {
        var _this = _super.call(this, affector) || this;
        if (list === undefined) {
            _this.items = new weightedList_1.WeightedList();
            //animals
            _this.items.push(new allAnimalsAbilityObject_1.allAnimalsAbilityObject());
            _this.items.push(new birdAbilityObject_1.birdAbilityObject());
            _this.items.push(new catAbilityObject_1.catAbilityObject());
            _this.items.push(new magicalAbilityObject_1.magicalAbilityObject());
            _this.items.push(new reptileAbilityObject_1.reptileAbilityObject());
            _this.items.push(new ratAbilityObject_1.ratAbilityObject());
            _this.items.push(new wildAbilityObject_1.wildAbilityObject());
            //communications
            _this.items.push(new gainUnderstandingAbilityObject_1.gainUnderstandingAbilityObject());
            _this.items.push(new symetricTelepathyAbilityObject_1.symetricTelepathyAbilityObject());
            _this.items.push(new symetricEmpathicAbilityObject_1.symetricEmpathicAbilityObject());
            //questions
            _this.items.push(new detailedAbilityObject_1.detailedAbilityObject());
            _this.items.push(new yesNoAbilityObject_1.yesNoAbilityObject());
            //light
            _this.items.push(new colorofulLightAbilityObject_1.colorfulLightAbilityObject());
            _this.items.push(new controllableLightAbilityObject_1.controllableLightAbilityObject());
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

},{"../core/factory":32,"../core/weightedList":40,"./abilityObjectRepository/animals/allAnimalsAbilityObject":4,"./abilityObjectRepository/animals/birdAbilityObject":5,"./abilityObjectRepository/animals/catAbilityObject":6,"./abilityObjectRepository/animals/magicalAbilityObject":7,"./abilityObjectRepository/animals/ratAbilityObject":8,"./abilityObjectRepository/animals/reptileAbilityObject":9,"./abilityObjectRepository/animals/wildAbilityObject":10,"./abilityObjectRepository/light/colorofulLightAbilityObject":11,"./abilityObjectRepository/light/controllableLightAbilityObject":12,"./abilityObjectRepository/questions/detailedAbilityObject":13,"./abilityObjectRepository/questions/yesNoAbilityObject":14,"./abilityObjectRepository/symetricCommunications/gainUnderstandingAbilityObject":15,"./abilityObjectRepository/symetricCommunications/symetricEmpathicAbilityObject":16,"./abilityObjectRepository/symetricCommunications/symetricTelepathyAbilityObject":17}],4:[function(require,module,exports){
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

},{"../../abilityObject":2}],8:[function(require,module,exports){
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

},{"../../abilityObject":2}],9:[function(require,module,exports){
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

},{"../../abilityObject":2}],10:[function(require,module,exports){
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

},{"../../abilityObject":2}],11:[function(require,module,exports){
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
        _this.rarity = 1.1;
        _this.prefix = 'Controllable';
        _this.isLight = true;
        return _this;
    }
    return colorfulLightAbilityObject;
}(abilityObject_1.AbilityObject));
exports.colorfulLightAbilityObject = colorfulLightAbilityObject;

},{"../../abilityObject":2}],12:[function(require,module,exports){
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
        _this.rarity = 1.2;
        _this.prefix = 'Controllable';
        _this.isLight = true;
        return _this;
    }
    return controllableLightAbilityObject;
}(abilityObject_1.AbilityObject));
exports.controllableLightAbilityObject = controllableLightAbilityObject;

},{"../../abilityObject":2}],13:[function(require,module,exports){
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

},{"../../abilityObject":2}],14:[function(require,module,exports){
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

},{"../../abilityObject":2}],15:[function(require,module,exports){
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

},{"../../abilityObject":2}],16:[function(require,module,exports){
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

},{"../../abilityObject":2}],17:[function(require,module,exports){
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

},{"../../abilityObject":2}],18:[function(require,module,exports){
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
        if (this.description != undefined) {
            if (this.bonus != undefined) {
                return this.description + (this.bonus >= 0 ? ' + ' : ' - ') + this.bonus;
            }
            else {
                return this.description;
            }
        }
        if (this.value != undefined) {
            return this.value + (this.bonus != undefined ? this.bonus : 0);
        }
        throw 'Undefined Descriptive Number Error';
    };
    DescriptiveNumber.prototype.getValue = function () {
        return this.value + (this.bonus != undefined ? this.bonus : 0);
    };
    DescriptiveNumber.prototype.getLowValue = function () {
        return (this.lowValue === undefined ? this.value : this.lowValue) + (this.bonus != undefined ? this.bonus : 0);
    };
    DescriptiveNumber.prototype.addBonus = function (val) {
        if (this.bonus === undefined) {
            this.bonus = 0;
        }
        this.bonus += val;
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

},{}],19:[function(require,module,exports){
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
var AdjacentEnemiesDescriptiveNumber_1 = require("./descriptiveNumberRepository/AdjacentEnemiesDescriptiveNumber");
var assassinDescriptiveNumber_1 = require("./descriptiveNumberRepository/assassinDescriptiveNumber");
var currentHealthDescriptiveNumber_1 = require("./descriptiveNumberRepository/currentHealthDescriptiveNumber");
var d4MinuteDescriptiveNumber_1 = require("./descriptiveNumberRepository/duration/d4MinuteDescriptiveNumber");
var aneHourDescriptiveNumber_1 = require("./descriptiveNumberRepository/duration/aneHourDescriptiveNumber");
var numberOfEnemiesDescriptiveNumber_1 = require("./descriptiveNumberRepository/numberOfEnemiesDescriptiveNumber");
var numberOfTurnsDescriptiveNumber_1 = require("./descriptiveNumberRepository/numberOfTurnsDescriptiveNumber");
var damageTakenDescriptiveNumber_1 = require("./descriptiveNumberRepository/damageTakenDescriptiveNumber");
var factory_1 = require("../core/factory");
var DescriptiveNumberFactory = /** @class */ (function (_super) {
    __extends(DescriptiveNumberFactory, _super);
    function DescriptiveNumberFactory(affector, list) {
        var _this = _super.call(this, affector) || this;
        if (list === undefined) {
            _this.items = new weightedList_1.WeightedList();
            _this.items.push(new AdjacentEnemiesDescriptiveNumber_1.adjacentEnemiesDescriptiveNumber());
            _this.items.push(new assassinDescriptiveNumber_1.assassinDescriptiveNumber());
            _this.items.push(new currentHealthDescriptiveNumber_1.currentHealthDescriptiveNumber());
            _this.items.push(new damageTakenDescriptiveNumber_1.damageTakenDescriptiveNumber());
            _this.items.push(new numberOfEnemiesDescriptiveNumber_1.numberOfEnemiesDescriptiveNumber());
            _this.items.push(new numberOfTurnsDescriptiveNumber_1.numberOfTurnsDescriptiveNumber());
            _this.items.push(new d4MinuteDescriptiveNumber_1.d4MinuteDescriptiveNumber());
            _this.items.push(new aneHourDescriptiveNumber_1.oneHourDescriptiveNumber());
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

},{"../core/factory":32,"../core/weightedList":40,"./descriptiveNumberRepository/AdjacentEnemiesDescriptiveNumber":20,"./descriptiveNumberRepository/assassinDescriptiveNumber":21,"./descriptiveNumberRepository/currentHealthDescriptiveNumber":22,"./descriptiveNumberRepository/damageTakenDescriptiveNumber":23,"./descriptiveNumberRepository/duration/aneHourDescriptiveNumber":24,"./descriptiveNumberRepository/duration/d4MinuteDescriptiveNumber":25,"./descriptiveNumberRepository/numberOfEnemiesDescriptiveNumber":26,"./descriptiveNumberRepository/numberOfTurnsDescriptiveNumber":27}],20:[function(require,module,exports){
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

},{"../descriptiveNumber":18}],21:[function(require,module,exports){
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

},{"../../core/utils":39,"../descriptiveNumber":18}],22:[function(require,module,exports){
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

},{"../../core/utils":39,"../descriptiveNumber":18}],23:[function(require,module,exports){
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

},{"../../core/utils":39,"../descriptiveNumber":18}],24:[function(require,module,exports){
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
        _this.value = 2;
        _this.description = 'one hour';
        _this.type = descriptiveNumber_1.DescriptiveNumber.Type.UtilityDuration;
        _this.name = 'One Hour';
        return _this;
    }
    return oneHourDescriptiveNumber;
}(descriptiveNumber_1.DescriptiveNumber));
exports.oneHourDescriptiveNumber = oneHourDescriptiveNumber;

},{"../../descriptiveNumber":18}],25:[function(require,module,exports){
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

},{"../../../core/utils":39,"../../descriptiveNumber":18}],26:[function(require,module,exports){
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
        var _this = _super.call(this, utils_1.Utils.AVG_ENEMIES_ADJACENT) || this;
        _this.lowValue = 1;
        _this.description = 'Number of adjacent enemies.';
        _this.type = descriptiveNumber_1.DescriptiveNumber.Type.Common;
        return _this;
    }
    return numberOfEnemiesDescriptiveNumber;
}(descriptiveNumber_1.DescriptiveNumber));
exports.numberOfEnemiesDescriptiveNumber = numberOfEnemiesDescriptiveNumber;

},{"../../core/utils":39,"../descriptiveNumber":18}],27:[function(require,module,exports){
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

},{"../../core/utils":39,"../descriptiveNumber":18}],28:[function(require,module,exports){
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

},{}],29:[function(require,module,exports){
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

},{"./ability":28}],30:[function(require,module,exports){
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
        this.attackTemplate = 'Standard';
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
    Attack.prototype.initDamage = function () {
        var tempDamage = this.getTempDamage();
        if (!this.damage && utils_1.Utils.random() < utils_1.Utils.ATTACK_DESCRIPTIVE_NUMBER_CHANCE) {
            this.damage = new descriptiveNumberFactory_1.DescriptiveNumberFactory(this).filter(function (x) { return x.type === descriptiveNumber_1.DescriptiveNumber.Type.Common; }).get(1)[0];
        }
        //if((this.damage && this.damage?.getValue() < 5) || (!this.damage && tempDamage < 5)) {
        //  this.modifiers.push(new ModifierFactory().filter(mod => mod.modifierType === Modifier.Type.Constraint && !this.modifiers.map(mod => mod.name).includes(mod.name)).get(1, this)[0]);
        //}
        if (!this.damage) {
            this.damage = new descriptiveNumber_1.DescriptiveNumber(tempDamage);
        }
        else {
            if (tempDamage > 0) {
                this.chance = this.chance * tempDamage / this.damage.getValue();
            }
            else {
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
        if (this.chance > 1) {
            this.chance = 1;
        }
        var tempMana = Math.ceil(this.getPower() - 0.00001);
        if (this.manaCost + tempMana < 0) {
            this.chance += 0.1;
            if (this.chance > 1) {
                this.damage.addBonus(1); ///= new DescriptiveNumber(this.damage.getValue()+1); //TODO allow DescriptiveNumbers to get static bonuses
            }
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
            '<br><b>Description</b>: ' + this.modifiers.reduce(function (sum, mod) { return sum + ' ' + mod.description; }, '').slice(1) +
            '<br><b>Type</b>: ' + Attack.Subtype[this.subtype] +
            '<br><b>Cooldown</b>: ' + ability_1.Ability.Cooldown[this.cooldown];
    };
    Attack.prototype.generateName = function () {
        var attackPortion = this.subtype === Attack.Subtype.Weapon ? [
            'Basic Attack'
        ].sort(function () { return 0.5 - utils_1.Utils.random(); })[0] : '';
        var spellPortion = this.subtype === Attack.Subtype.Spell ? [
            'Basic Bolt'
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
(function (Attack) {
    var Subtype;
    (function (Subtype) {
        Subtype[Subtype["Weapon"] = 0] = "Weapon";
        Subtype[Subtype["Spell"] = 1] = "Spell";
    })(Subtype = Attack.Subtype || (Attack.Subtype = {}));
})(Attack || (exports.Attack = Attack = {}));

},{"../components/descriptiveNumber":18,"../components/descriptiveNumberFactory":19,"./../modifiers/modifierFactory":49,"./ability":28,"./activity":29,"./characterContext":31,"./utils":39}],31:[function(require,module,exports){
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
    CharacterContext.OUT_OF_CLASS_WEIGHT = 0.01;
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
    var Attribute;
    (function (Attribute) {
        Attribute[Attribute["Strength"] = 0] = "Strength";
        Attribute[Attribute["Dexterity"] = 1] = "Dexterity";
        Attribute[Attribute["Constitution"] = 2] = "Constitution";
        Attribute[Attribute["Intelligence"] = 3] = "Intelligence";
        Attribute[Attribute["Wisdom"] = 4] = "Wisdom";
        Attribute[Attribute["Charisma"] = 5] = "Charisma";
    })(Attribute = CharacterContext.Attribute || (CharacterContext.Attribute = {}));
    var Skill;
    (function (Skill) {
        Skill[Skill["Athletics"] = 0] = "Athletics";
        Skill[Skill["Intimidation"] = 1] = "Intimidation";
        Skill[Skill["SleightOfHand"] = 2] = "SleightOfHand";
        Skill[Skill["Stealth"] = 3] = "Stealth";
        Skill[Skill["Endurance"] = 4] = "Endurance";
        Skill[Skill["Survival"] = 5] = "Survival";
        Skill[Skill["Knowledge"] = 6] = "Knowledge";
        Skill[Skill["Crafting"] = 7] = "Crafting";
        Skill[Skill["Dungeoneering"] = 8] = "Dungeoneering";
        Skill[Skill["Perception"] = 9] = "Perception";
        Skill[Skill["Persuasion"] = 10] = "Persuasion";
        Skill[Skill["Streetwise"] = 11] = "Streetwise";
    })(Skill = CharacterContext.Skill || (CharacterContext.Skill = {}));
})(CharacterContext || (exports.CharacterContext = CharacterContext = {}));

},{"./utils":39}],32:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Factory = void 0;
var Factory = /** @class */ (function () {
    function Factory(affector) {
        this.affector = affector;
    }
    Factory.prototype.getAll = function () {
        return this.items;
    };
    Factory.prototype.get = function (count) {
        return this.items.get(count, this.affector);
    };
    Factory.prototype.filter = function (z) {
        this.items = this.items.filter(z);
        return this;
    };
    return Factory;
}());
exports.Factory = Factory;

},{}],33:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomNumberGenerator = void 0;
var RandomNumberGenerator = /** @class */ (function () {
    function RandomNumberGenerator(initSeed) {
        this.seed = 0;
        var i = 1;
        for (var _i = 0, initSeed_1 = initSeed; _i < initSeed_1.length; _i++) {
            var c = initSeed_1[_i];
            this.seed += c.charCodeAt(0) * i;
            i = (i + 50);
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

},{}],34:[function(require,module,exports){
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
var Utility = /** @class */ (function (_super) {
    __extends(Utility, _super);
    function Utility(otherName) {
        var _this = _super.call(this, otherName) || this;
        _this.weight = function (x) { return 1; };
        _this.cooldown = ability_1.Ability.Cooldown.Daily;
        _this.objects = [];
        //this.modifiers = [] as Modifier[];
        _this.type = ability_1.Ability.Type.Utility;
        _this.modifiers = utils_1.Utils.getNumberFromValueMap(Utility.MODIFIER_CHANCE, new modifierFactory_1.ModifierFactory(_this));
        return _this;
    }
    Utility.prototype.getDescription = function () {
        return '' +
            '<b>Name: ' + this.generateName() +
            '<br>Chance</b>: ' + Math.ceil(this.chance * 100) + '%' +
            '<br><b>Modifiers</b>: ' + this.modifiers.reduce(function (sum, mod) { return sum + ', ' + (mod.name === undefined ? mod.namePrefix : mod.name); }, '').slice(2) +
            //  '\nType: ' + Ability.Type[this.type] + 
            '<br><b>Description</b>: ' + this.description + this.modifiers.reduce(function (sum, mod) { return sum + ' ' + mod.description; }, '').slice(1) +
            '<br><b>Cooldown</b>: ' + ability_1.Ability.Cooldown[this.cooldown];
    };
    Utility.prototype.generateName = function () {
        return this.modifiers.reduce(function (sum, mod) { return sum + ' ' + mod.namePrefix; }, '').slice(1) + (this.modifiers.length > 0 ? ' ' : '') +
            this.objects.reduce(function (sum, mod) { return sum + ' ' + (mod.prefix === undefined ? mod.name : mod.prefix); }, '') + ' ' + this.name;
    };
    Utility.prototype.compensate = function () {
        var repeat = new repeatableModifier_1.repeatableModifier();
        if (this.chance > 1) {
            var tempRepeat = Math.ceil(this.chance);
            this.chance /= tempRepeat;
            repeat.setValue(tempRepeat);
            this.modifiers.push(repeat);
        }
    };
    Utility.MODIFIER_CHANCE = new Map([
        [0.3, 0],
        [0.8, 1],
        [1, 2],
    ]);
    return Utility;
}(activity_1.Activity));
exports.Utility = Utility;

},{"../modifiers/modifierFactory":49,"../modifiers/modifiersRepository/repeatableModifier":64,"./ability":28,"./activity":29,"./utils":39}],35:[function(require,module,exports){
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
var animalSpeak_1 = require("./utilityRepository/druidUtilities/animalSpeak");
var auguryUtility_1 = require("./utilityRepository/clericUtilities/auguryUtility");
var weightedList_1 = require("./weightedList");
var lightUtility_1 = require("./utilityRepository/clericUtilities/lightUtility");
var UtilityFactory = /** @class */ (function (_super) {
    __extends(UtilityFactory, _super);
    function UtilityFactory(affector, list) {
        var _this = _super.call(this, affector) || this;
        if (list === undefined) {
            _this.items = new weightedList_1.WeightedList();
            //animals
            _this.items.push(new animalSpeak_1.AnimalSpeak());
            _this.items.push(new auguryUtility_1.Augury());
            _this.items.push(new lightUtility_1.Light());
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

},{"./factory":32,"./utilityRepository/clericUtilities/auguryUtility":36,"./utilityRepository/clericUtilities/lightUtility":37,"./utilityRepository/druidUtilities/animalSpeak":38,"./weightedList":40}],36:[function(require,module,exports){
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
exports.Augury = void 0;
var abilityObjectFactory_1 = require("../../../components/abilityObjectFactory");
var descriptiveNumber_1 = require("../../../components/descriptiveNumber");
var modifierFactory_1 = require("../../../modifiers/modifierFactory");
var ability_1 = require("../../ability");
var characterContext_1 = require("../../characterContext");
var utility_1 = require("../../utility");
var Augury = /** @class */ (function (_super) {
    __extends(Augury, _super);
    function Augury() {
        var numberOfQuestions;
        var _this = _super.call(this, 'Augury') || this;
        _this.objects.push(new abilityObjectFactory_1.AbilityObjectFactory(_this).filter(function (x) { return x.isQuestion; }).get(1)[0]);
        _this.cooldown = ability_1.Ability.Cooldown.Adventure;
        _this.weight = function () { return characterContext_1.CharacterContext.classes.includes(characterContext_1.CharacterContext.Class.Cleric) ? 1 : characterContext_1.CharacterContext.OUT_OF_CLASS_WEIGHT; };
        var tempChance = 1.5
            / _this.objects[0].rarity
            * modifierFactory_1.ModifierFactory.getDPSMultiplier(_this.modifiers, _this);
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
    return Augury;
}(utility_1.Utility));
exports.Augury = Augury;

},{"../../../components/abilityObjectFactory":3,"../../../components/descriptiveNumber":18,"../../../modifiers/modifierFactory":49,"../../ability":28,"../../characterContext":31,"../../utility":34}],37:[function(require,module,exports){
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
exports.Light = void 0;
var abilityObjectFactory_1 = require("../../../components/abilityObjectFactory");
var descriptiveNumber_1 = require("../../../components/descriptiveNumber");
var modifierFactory_1 = require("../../../modifiers/modifierFactory");
var ability_1 = require("../../ability");
var characterContext_1 = require("../../characterContext");
var utility_1 = require("../../utility");
var utils_1 = require("../../utils");
var Light = /** @class */ (function (_super) {
    __extends(Light, _super);
    function Light() {
        var _this = this;
        var range = new descriptiveNumber_1.DescriptiveNumber(utils_1.Utils.D(3) * 5);
        var radius = new descriptiveNumber_1.DescriptiveNumber(utils_1.Utils.D(3) * 5);
        _this = _super.call(this, 'Light') || this;
        _this.objects.push(new abilityObjectFactory_1.AbilityObjectFactory(_this).filter(function (x) { return x.isLight; }).get(1)[0]);
        _this.weight = function () { return characterContext_1.CharacterContext.classes.includes(characterContext_1.CharacterContext.Class.Cleric) ? 1 : characterContext_1.CharacterContext.OUT_OF_CLASS_WEIGHT; };
        _this.chance = 1.5
            * utils_1.Utils.getRangeCoeficient(range.getValue())
            * utils_1.Utils.getRangeCoeficient(radius.getValue())
            * modifierFactory_1.ModifierFactory.getDPSMultiplier(_this.modifiers, _this); //TODO move to compensate
        _this.cooldown = ability_1.Ability.Cooldown.Encounter;
        _this.description = 'Using a Swift Action shine a light in an area centered on a point within ' + range.getValue() + ' with ' + radius.getValue() + ' radius, until end of the encounter. ' +
            _this.objects[0].description;
        //TODO add light as an object
        _this.compensate();
        return _this;
    }
    return Light;
}(utility_1.Utility));
exports.Light = Light;

},{"../../../components/abilityObjectFactory":3,"../../../components/descriptiveNumber":18,"../../../modifiers/modifierFactory":49,"../../ability":28,"../../characterContext":31,"../../utility":34,"../../utils":39}],38:[function(require,module,exports){
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
var abilityObjectFactory_1 = require("../../../components/abilityObjectFactory");
var descriptiveNumber_1 = require("../../../components/descriptiveNumber");
var modifierFactory_1 = require("../../../modifiers/modifierFactory");
var characterContext_1 = require("../../characterContext");
var utility_1 = require("../../utility");
var AnimalSpeak = /** @class */ (function (_super) {
    __extends(AnimalSpeak, _super);
    function AnimalSpeak() {
        var _this = _super.call(this, 'Speak') || this;
        _this.weight = function () { return characterContext_1.CharacterContext.classes.includes(characterContext_1.CharacterContext.Class.Druid) ? 1 : characterContext_1.CharacterContext.OUT_OF_CLASS_WEIGHT; };
        _this.objects.push(new abilityObjectFactory_1.AbilityObjectFactory(_this).filter(function (x) { return x.isCommunication; }).get(1)[0]);
        _this.objects.push(new abilityObjectFactory_1.AbilityObjectFactory(_this).filter(function (x) { return x.isAnimal; }).get(1)[0]);
        _this.duration = new descriptiveNumber_1.DescriptiveNumber(1);
        _this.duration.description = 'ten minutes'; //new DescriptiveNumberFactory(this).filter((x: DescriptiveNumber) => x.type === DescriptiveNumber.Type.UtilityDuration).get(1)[0] as DescriptiveNumber;
        _this.chance = 0.5
            / _this.objects[0].rarity
            / _this.objects[1].rarity
            / _this.duration.getValue()
            * modifierFactory_1.ModifierFactory.getDPSMultiplier(_this.modifiers, _this);
        _this.description = 'You can communicate with ' + _this.objects[1].description + ' for ' + _this.duration.getDescription() + '. ' + _this.objects[0].description;
        _this.compensate();
        return _this;
    }
    return AnimalSpeak;
}(utility_1.Utility));
exports.AnimalSpeak = AnimalSpeak;

},{"../../../components/abilityObjectFactory":3,"../../../components/descriptiveNumber":18,"../../../modifiers/modifierFactory":49,"../../characterContext":31,"../../utility":34}],39:[function(require,module,exports){
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
    Utils.POWER_PER_LEVEL = 0.2;
    Utils.BASIC_ATTACK_DPS = 2.5;
    Utils.ATTACK_DESCRIPTIVE_NUMBER_CHANCE = 0.15;
    Utils.AVG_ENEMIES_ADJACENT = 1.9;
    Utils.AVG_ENEMIES_PER_PLAYER = 1.7;
    Utils.AVG_TURN = 4;
    Utils.BoonValue = Utils.DPS * 5;
    Utils.avgHealth = 25;
    return Utils;
}());
exports.Utils = Utils;

},{}],40:[function(require,module,exports){
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
    WeightedList.prototype.get = function (num, affector, banList) {
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

},{"./utils":39}],41:[function(require,module,exports){
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

},{"./modifier":48}],42:[function(require,module,exports){
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
var stunEffect_1 = require("./effectRepository/stunEffect");
var instakillEffect_1 = require("./effectRepository/instakillEffect");
var guidingEffect_1 = require("./effectRepository/guidingEffect");
var damageBonusEffect_1 = require("./effectRepository/damageBonusEffect");
var factory_1 = require("../core/factory");
var scalingDotEffect_1 = require("./effectRepository/scalingDotEffect");
var EffectFactory = /** @class */ (function (_super) {
    __extends(EffectFactory, _super);
    function EffectFactory(affector, list) {
        var _this = _super.call(this, affector) || this;
        if (list === undefined) {
            _this.items = new weightedList_1.WeightedList();
            _this.items.push(new stunEffect_1.stunEffect());
            _this.items.push(new instakillEffect_1.instakillEffect());
            _this.items.push(new guidingEffect_1.guidingEffect());
            _this.items.push(new damageBonusEffect_1.damageBonusEffect());
            _this.items.push(new scalingDotEffect_1.scalingDotEffect());
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

},{"../core/factory":32,"../core/weightedList":40,"./effectRepository/damageBonusEffect":43,"./effectRepository/guidingEffect":44,"./effectRepository/instakillEffect":45,"./effectRepository/scalingDotEffect":46,"./effectRepository/stunEffect":47}],43:[function(require,module,exports){
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

},{"../../core/ability":28,"../../core/utils":39,"../effect":41}],44:[function(require,module,exports){
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

},{"../../core/ability":28,"../../core/utils":39,"../effect":41}],45:[function(require,module,exports){
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

},{"../../core/ability":28,"../../core/utils":39,"../effect":41}],46:[function(require,module,exports){
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

},{"../../core/ability":28,"../../core/utils":39,"../effect":41}],47:[function(require,module,exports){
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

},{"../../core/ability":28,"../../core/utils":39,"../effect":41}],48:[function(require,module,exports){
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
var factory_1 = require("../core/factory");
var templeModifier_1 = require("./modifiersRepository/clericModifiers/templeModifier");
var pristineModifier_1 = require("./modifiersRepository/clericModifiers/pristineModifier");
var undeadBaneModifier_1 = require("./modifiersRepository/clericModifiers/undeadBaneModifier");
var restedModifer_1 = require("./modifiersRepository/restedModifer");
var ModifierFactory = /** @class */ (function (_super) {
    __extends(ModifierFactory, _super);
    function ModifierFactory(affector, list) {
        var _this = _super.call(this, affector) || this;
        if (list === undefined) {
            _this.items = new weightedList_1.WeightedList();
            _this.items.push(new applyEffectModifier_1.applyEffectModifier(affector));
            _this.items.push(new bloodiedModifier_1.bloodiedModifier());
            _this.items.push(new cleaveModifier_1.cleaveModifier());
            _this.items.push(new exhaustingModifer_1.exhaustingModifer());
            _this.items.push(new fastModifier_1.fastModifier());
            _this.items.push(new gainEffectModifier_1.gainEffectModifier(affector));
            _this.items.push(new laylineModifier_1.laylineModifier());
            _this.items.push(new lifestealModifier_1.lifestealModifier());
            _this.items.push(new momentumModifier_1.momentumModifier(affector));
            _this.items.push(new multipleModifer_1.multipleModifier());
            _this.items.push(new nightlyModifier_1.nightlyModifier());
            _this.items.push(new restedModifer_1.restedModifer());
            _this.items.push(new selfHealModifier_1.selfHealModifier(affector));
            _this.items.push(new signatureModifier_1.signatureModifier());
            _this.items.push(new vengefulModifier_1.vengefulModifier());
            _this.items.push(new ultimateModifier_1.ultimateModifier());
            _this.items.push(new templeModifier_1.templeModifier());
            _this.items.push(new undeadBaneModifier_1.undeadBaneModifier(affector));
            _this.items.push(new pristineModifier_1.pristineModifier());
            //this.items.push(new repeatableModifier()); //this modifier is excluded for now purposfully. It behaves differently for utilities and for attacks.
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

},{"../core/factory":32,"../core/weightedList":40,"./modifiersRepository/applyEffectModifier":50,"./modifiersRepository/bloodiedModifier":51,"./modifiersRepository/cleaveModifier":52,"./modifiersRepository/clericModifiers/pristineModifier":53,"./modifiersRepository/clericModifiers/templeModifier":54,"./modifiersRepository/clericModifiers/undeadBaneModifier":55,"./modifiersRepository/exhaustingModifer":56,"./modifiersRepository/fastModifier":57,"./modifiersRepository/gainEffectModifier":58,"./modifiersRepository/laylineModifier":59,"./modifiersRepository/lifestealModifier":60,"./modifiersRepository/momentumModifier":61,"./modifiersRepository/multipleModifer":62,"./modifiersRepository/nightlyModifier":63,"./modifiersRepository/restedModifer":65,"./modifiersRepository/selfHealModifier":66,"./modifiersRepository/signatureModifier":67,"./modifiersRepository/ultimateModifier":68,"./modifiersRepository/vengefulModifier":69}],50:[function(require,module,exports){
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
        var _this = _super.call(this) || this;
        _this.longDescription = '';
        _this.modifierType = modifier_1.Modifier.Type.Improvement;
        _this.weight = function (x) { return (x === null || x === void 0 ? void 0 : x.type) === ability_1.Ability.Type.Attack ? 4 : 0; };
        //this.weight = () => {return 4};
        _this.effect = new effectFactory_1.EffectFactory(aff).filter(function (eff) { return eff.subtype === effect_1.Effect.Subtype.Debuff; }).get(1)[0];
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

},{"../../core/ability":28,"../../core/utils":39,"../effect":41,"../effectFactory":42,"../modifier":48}],51:[function(require,module,exports){
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
var modifier_1 = require("../modifier");
var bloodiedModifier = /** @class */ (function (_super) {
    __extends(bloodiedModifier, _super);
    function bloodiedModifier() {
        var _this = _super.call(this) || this;
        _this.powerMultiplier = function () { return 1.5; };
        _this.weight = function (x) { return (x === null || x === void 0 ? void 0 : x.type) === ability_1.Ability.Type.Attack ? 1 : 0; };
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

},{"../../core/ability":28,"../modifier":48}],52:[function(require,module,exports){
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
    function cleaveModifier() {
        var _this = _super.call(this) || this;
        _this.powerMultiplier = function () { return 0.5; };
        _this.weight = function (x) { return (x === null || x === void 0 ? void 0 : x.type) === ability_1.Ability.Type.Attack ? 1 : 0; };
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

},{"../../core/ability":28,"../modifier":48}],53:[function(require,module,exports){
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
    function pristineModifier() {
        var _this = _super.call(this) || this;
        _this.powerMultiplier = function () { return 1.5; };
        _this.weight = function () { return characterContext_1.CharacterContext.classes.includes(characterContext_1.CharacterContext.Class.Cleric) ? 1 : 0.3; };
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

},{"../../../core/characterContext":31,"../../modifier":48}],54:[function(require,module,exports){
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
    function templeModifier() {
        var _this = _super.call(this) || this;
        _this.powerMultiplier = function () { return 1.5; };
        _this.weight = function () { return characterContext_1.CharacterContext.classes.includes(characterContext_1.CharacterContext.Class.Cleric) ? 1 : characterContext_1.CharacterContext.OUT_OF_CLASS_WEIGHT; };
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

},{"../../../core/characterContext":31,"../../modifier":48}],55:[function(require,module,exports){
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
                    ? 1
                    : characterContext_1.CharacterContext.OUT_OF_CLASS_WEIGHT
                : 0;
        };
        _this.name = "Undead Bane";
        _this.namePrefix = "Baning Undead";
        _this.description =
            "If this targets an undead, demon or devil repeat the attack once.";
        _this.longDescription = "";
        _this.modifierType = modifier_1.Modifier.Type.Improvement;
        return _this;
    }
    return undeadBaneModifier;
}(modifier_1.Modifier));
exports.undeadBaneModifier = undeadBaneModifier;

},{"../../../core/ability":28,"../../../core/characterContext":31,"../../modifier":48}],56:[function(require,module,exports){
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
    function exhaustingModifer() {
        var _this = _super.call(this) || this;
        _this.powerMultiplier = function () { return 2.5; };
        _this.weight = function (x) { return (x === null || x === void 0 ? void 0 : x.type) === ability_1.Ability.Type.Utility ? 0.5 : 1; };
        _this.name = 'Exhausting';
        _this.namePrefix = 'Exhausting';
        _this.description = 'When you hit or miss with this action, reduce your health to 1.';
        _this.modifierType = modifier_1.Modifier.Type.Constraint;
        return _this;
    }
    return exhaustingModifer;
}(modifier_1.Modifier));
exports.exhaustingModifer = exhaustingModifer;

},{"../../core/ability":28,"../modifier":48}],57:[function(require,module,exports){
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
    function fastModifier() {
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

},{"../../core/ability":28,"../../core/utils":39,"../modifier":48}],58:[function(require,module,exports){
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
var effect_1 = require("../effect");
var effectFactory_1 = require("../effectFactory");
var modifier_1 = require("../modifier");
var gainEffectModifier = /** @class */ (function (_super) {
    __extends(gainEffectModifier, _super);
    function gainEffectModifier(aff) {
        var _this = _super.call(this) || this;
        _this.modifierType = modifier_1.Modifier.Type.Improvement;
        _this.weight = function (x) { return (x === null || x === void 0 ? void 0 : x.type) === ability_1.Ability.Type.Attack ? 4 : 0; };
        _this.effect = new effectFactory_1.EffectFactory(aff).filter(function (eff) { return eff.subtype === effect_1.Effect.Subtype.Buff; }).get(1)[0];
        _this.description = 'When you hit, gain an effect: ' + _this.effect.description;
        _this.namePrefix = _this.effect.namePrefix;
        _this.name = 'Gain ' + _this.effect.name;
        _this.powerBonus = function (x) { return x.chance != null ? x.chance * _this.effect.powerBonus(x) : -100000; };
        _this.powerMultiplier = function (x) { return _this.effect.powerMultiplier(x); };
        return _this;
    }
    return gainEffectModifier;
}(modifier_1.Modifier));
exports.gainEffectModifier = gainEffectModifier;

},{"../../core/ability":28,"../effect":41,"../effectFactory":42,"../modifier":48}],59:[function(require,module,exports){
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
    function laylineModifier() {
        var _this = _super.call(this) || this;
        _this.powerMultiplier = function (x) { return x.range ? Math.max(1.1, 2.4 - x.range / 10) : 1; };
        1.7;
        _this.weight = function (x) { return (x === null || x === void 0 ? void 0 : x.type) === ability_1.Ability.Type.Attack ? 1 : 0; };
        _this.name = 'Layline';
        _this.namePrefix = 'Layline';
        _this.description = 'Can be used only while adjacent to place of power (usually you can detect 2-3 places of power each combat).';
        _this.longDescription = '';
        _this.modifierType = modifier_1.Modifier.Type.Constraint;
        return _this;
    }
    return laylineModifier;
}(modifier_1.Modifier));
exports.laylineModifier = laylineModifier;

},{"../../core/ability":28,"../modifier":48}],60:[function(require,module,exports){
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
    function lifestealModifier() {
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

},{"../../core/ability":28,"../modifier":48}],61:[function(require,module,exports){
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
        _this.weight = function (x) { return (x === null || x === void 0 ? void 0 : x.type) === ability_1.Ability.Type.Attack ? 1 : 0; };
        _this.name = 'Inertia ' + _this.numericComponents[0].getValue();
        _this.namePrefix = 'Inertia';
        _this.description = 'Can be only used when you fail chance roll with ' + _this.numericComponents[0].getValue() + ' ' + (_this.numericComponents[0].getValue() === 1 ? 'ability' : 'abilities') + ' in a row. ';
        _this.longDescription = '';
        _this.powerMultiplier = function (x) { return Math.pow(1.5, _this.numericComponents[0].getValue()); }; //used to be 1.58
        _this.modifierType = modifier_1.Modifier.Type.Constraint;
        return _this;
    }
    return momentumModifier;
}(modifier_1.Modifier));
exports.momentumModifier = momentumModifier;

},{"../../components/descriptiveNumber":18,"../../core/ability":28,"../../core/utils":39,"../modifier":48}],62:[function(require,module,exports){
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

},{"../../components/descriptiveNumber":18,"../../core/ability":28,"../../core/weightedList":40,"../modifier":48}],63:[function(require,module,exports){
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

},{"../modifier":48}],64:[function(require,module,exports){
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

},{"../../components/descriptiveNumber":18,"../../core/weightedList":40,"../modifier":48}],65:[function(require,module,exports){
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
    function restedModifer() {
        var _this = _super.call(this) || this;
        _this.powerMultiplier = function () { return 1.3; };
        _this.name = 'Rested';
        _this.namePrefix = 'Rested';
        _this.description = 'Can only be used if you managed to rest well during last night.';
        _this.longDescription = 'Camping in front of dungeon or having to keeping watch makes you not well reseted.';
        _this.modifierType = modifier_1.Modifier.Type.Constraint;
        return _this;
    }
    return restedModifer;
}(modifier_1.Modifier));
exports.restedModifer = restedModifer;

},{"../modifier":48}],66:[function(require,module,exports){
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
    function selfHealModifier(affector) {
        var _this = _super.call(this) || this;
        _this.modifierType = modifier_1.Modifier.Type.Improvement;
        _this.numericComponents = [new descriptiveNumberFactory_1.DescriptiveNumberFactory(affector).filter(function (x) { return x.type === descriptiveNumber_1.DescriptiveNumber.Type.Small; }).get(1)[0]];
        _this.name = 'Self Heal ' + _this.numericComponents[0].getValue();
        _this.weight = function (x) { return (x === null || x === void 0 ? void 0 : x.type) === ability_1.Ability.Type.Attack ? 1 : 0; };
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

},{"../../components/descriptiveNumber":18,"../../components/descriptiveNumberFactory":19,"../../core/ability":28,"../../core/utils":39,"../modifier":48}],67:[function(require,module,exports){
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
    function signatureModifier() {
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

},{"../../core/ability":28,"../modifier":48}],68:[function(require,module,exports){
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
    function ultimateModifier() {
        var _this = _super.call(this) || this;
        _this.powerMultiplier = function () { return 2.5; };
        _this.weight = function (x) { return (x === null || x === void 0 ? void 0 : x.type) === ability_1.Ability.Type.Attack ? 1 : 0; };
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

},{"../../core/ability":28,"../modifier":48}],69:[function(require,module,exports){
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
    function vengefulModifier() {
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

},{"../../core/ability":28,"../modifier":48}]},{},[1]);
