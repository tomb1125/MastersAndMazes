import { Ability } from "../ability.js";
import { AffectsWeight } from "../affectsWeight.js";
import { Attack } from "../attack.js";
import { Utils } from "../utils.js";

export class basicAttack extends Attack {

    constructor(affector?: AffectsWeight) {
        super('Basic Attack');
        this.subtype = Attack.Subtype.Weapon;
        this.coreDescription = 'When you hit, deal damage. '

        this.elements = [Ability.WEAPON_ELEMENTS[Utils.D(Ability.WEAPON_ELEMENTS.length) - 1]];
        this.generate();
    }
}
