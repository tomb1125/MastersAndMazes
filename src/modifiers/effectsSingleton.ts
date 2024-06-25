import { Effect } from "./effect"
import { Utils } from "../core/utils"
import { PowerModifier } from "../core/powerModifier";
import { WeightedList } from "../core/weightedList";

const eff : WeightedList = new WeightedList();

const stun = new Effect(); 
stun.powerBonus = (x: PowerModifier) => {return x.chance ? - x.chance * Utils.DPS : - Utils.DPS}; //this means stun is worth regular DPS damage
stun.namePrefix = 'Stun'; 
stun.description = 'When Stunned player cannot make action. Stunned ends at the end of a turn.';
stun.longDescription = '';
stun.subtype = Effect.Subtype.Single;
eff.push(stun);

export const effects: WeightedList = eff;