import { Modifier } from "./modifier"
import { Utils } from "../core/utils"


//TODO Make this cleaner
const nightly = new Modifier();
nightly.powerMultiplier = 1.35;
nightly.namePrefix = 'Nightly';
nightly.description = 'Can be used only in the night.';
nightly.longDescription = 'Can be also used on planes without sun.';
nightly.type = Modifier.Type.Constraint;

const bloodied = new Modifier();
bloodied.powerMultiplier = 1.5;
bloodied.namePrefix = 'Bloody';
bloodied.description = 'Can be used only when you have half or less Health.';
bloodied.longDescription = '';
bloodied.type = Modifier.Type.Constraint;

const ultimate = new Modifier();
ultimate.powerMultiplier = 2.5;
ultimate.namePrefix = 'Ultimate';
ultimate.description = 'Can be used on turn 8 or later.';
ultimate.longDescription = '';
ultimate.type = Modifier.Type.Constraint;

const signature = new Modifier();
signature.powerMultiplier = 1.2;
signature.namePrefix = 'Signature';
signature.description = 'Only one player can use Signature power in a single round.';
signature.longDescription = '';
signature.type = Modifier.Type.Constraint;

const layline = new Modifier();
layline.powerMultiplier = 1.7; //TODO should be related to range ZROBIĆ TO INTERFACEM!
layline.namePrefix = 'Layline';
layline.description = 'Can be used while adjacent to place of power.';
layline.longDescription = '';
layline.type = Modifier.Type.Constraint;

const doubleStrike = new Modifier();
doubleStrike.powerMultiplier = 0.4;
doubleStrike.namePrefix = 'Double Strike';
doubleStrike.description = 'After this action, repeat this action once, without paying any costs. You cannot change targets.';
doubleStrike.longDescription = '';
doubleStrike.type = Modifier.Type.Improvement;

const cleave = new Modifier();
cleave.powerMultiplier = 0.5;
cleave.namePrefix = 'Cleave';
cleave.description = 'After this action, repeat this action once, without paying any costs. The repeated action must change the target to an adjacent one to you or initial target.';
cleave.longDescription = '';
cleave.type = Modifier.Type.Improvement;

const fast = new Modifier();
fast.powerMultiplier = 0.5;
fast.namePrefix = 'Fast';
fast.description = 'Once per turn when you use Fast Action, gain Action.';
fast.longDescription = '';
fast.type = Modifier.Type.Improvement;

//TODO
const applyEffect = new Modifier();
applyEffect.powerBonus = Utils.DPS - 1;
applyEffect.namePrefix = 'Stun';
applyEffect.description = 'There is a chance to apply effect, when you hit.';
applyEffect.longDescription = '';
applyEffect.type = Modifier.Type.Improvement;
applyEffect.weight = 6;

export const modifiers: Modifier[] = [
    nightly,
    bloodied,
    ultimate,
    signature,
    layline,

    doubleStrike,
    cleave,
    fast,
    applyEffect
];
