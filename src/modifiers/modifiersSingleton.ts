import { Modifier } from "./modifier"
import { Utils } from "../core/utils"
import { effects } from "./../modifiers/effectsSingleton"
import { PowerModifier } from "../core/powerModifier";
import { WeightedList } from "../core/weightedList";
import { Effect } from "./effect";


//TODO Make this cleaner
const mods: WeightedList = new WeightedList();


const nightly = new Modifier();
nightly.powerMultiplier = () => {return 1.35};
nightly.namePrefix = 'Nightly';
nightly.description = 'Can be used only in the night.';
nightly.longDescription = 'Can be also used on planes without sun.';
nightly.type = Modifier.Type.Constraint;
mods.push(nightly);

const bloodied = new Modifier();
bloodied.powerMultiplier = () => {return 1.5};
bloodied.namePrefix = 'Bloody';
bloodied.description = 'Can be used only when you have half or less Health.';
bloodied.longDescription = '';
bloodied.type = Modifier.Type.Constraint;
mods.push(bloodied);

const ultimate = new Modifier();
ultimate.powerMultiplier = () => {return 2.5};
ultimate.namePrefix = 'Ultimate';
ultimate.description = 'Can be used on turn 8 or later.';
ultimate.longDescription = '';
ultimate.type = Modifier.Type.Constraint;
mods.push(ultimate);

const signature = new Modifier();
signature.powerMultiplier = () => {return 1.2};
signature.namePrefix = 'Signature';
signature.description = 'Only one player can use Signature power in a single round.';
signature.longDescription = '';
signature.type = Modifier.Type.Constraint;
mods.push(signature);

const layline = new Modifier();
layline.powerMultiplier = (x: PowerModifier) => {return x.range ? Math.max(1.1, 2.4 - x.range/10) : 1}; 1.7; 
layline.namePrefix = 'Layline';
layline.description = 'Can be used while adjacent to place of power.';
layline.longDescription = '';
layline.type = Modifier.Type.Constraint;
mods.push(layline);

const doubleStrike = new Modifier();
doubleStrike.powerMultiplier = () => {return 0.4};
doubleStrike.namePrefix = 'Double Strike';
doubleStrike.description = 'After this action, repeat this action once, without paying any costs. You cannot change targets.';
doubleStrike.longDescription = '';
doubleStrike.type = Modifier.Type.Improvement;
mods.push(doubleStrike);


const cleave = new Modifier();
cleave.powerMultiplier = () => {return 0.5};
cleave.namePrefix = 'Cleave';
cleave.description = 'After this action, repeat this action once, without paying any costs. The repeated action must change the target to an adjacent one to you or initial target.';
cleave.longDescription = '';
cleave.type = Modifier.Type.Improvement;
mods.push(cleave);

const fast = new Modifier();
fast.powerMultiplier = () => {return 0.5};
fast.namePrefix = 'Fast';
fast.description = 'Once per turn when you use Fast Action, gain Action.';
fast.longDescription = '';
fast.type = Modifier.Type.Improvement;
mods.push(fast);

const applyEffect = new Modifier();
applyEffect.namePrefix = '';
applyEffect.description = 'There is a chance to apply following effect, when you hit:';
applyEffect.longDescription = '';
applyEffect.type = Modifier.Type.Improvement;
applyEffect.weight = mods.items.length/3;
applyEffect.effect = effects.get() as Effect;
mods.push(applyEffect);

export const modifiers: WeightedList = mods;
