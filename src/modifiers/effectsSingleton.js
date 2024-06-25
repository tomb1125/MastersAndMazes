"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.effects = void 0;
var effect_1 = require("./effect");
var utils_1 = require("../core/utils");
var weightedList_1 = require("../core/weightedList");
var eff = new weightedList_1.WeightedList();
var stun = new effect_1.Effect();
stun.powerBonus = function (x) { return x.chance ? -x.chance * utils_1.Utils.DPS : -utils_1.Utils.DPS; }; //this means stun is worth regular DPS damage
stun.namePrefix = 'Stun';
stun.description = 'When Stunned player cannot make action. Stunned ends at the end of a turn.';
stun.longDescription = '';
stun.subtype = effect_1.Effect.Subtype.Single;
eff.push(stun);
exports.effects = eff;
