import { Ability } from "../ability.js";
import { AffectsWeight } from "../affectsWeight.js";
import { Attack } from "../attack.js";
import { Utils } from "../utils.js";

export class basicSpell extends Attack {

    constructor(affector?: AffectsWeight) {
        super('Basic Spell');

        this.elements = [Ability.MAGIC_ELEMENTS[Utils.D(Ability.MAGIC_ELEMENTS.length) - 1]];
        this.subtype = Attack.Subtype.Spell;
        this.coreDescription = 'When you hit, deal damage. '
        this.generate();
    }
}
