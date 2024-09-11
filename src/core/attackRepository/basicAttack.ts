import { AffectsWeight } from "../affectsWeight";
import { Attack } from "../attack";

export class basicAttack extends Attack {

    constructor(affector?: AffectsWeight) {
        super('Basic Attack');
        this.coreDescription = 'When you hit, deal damage. '
        this.generate();
    }
}
