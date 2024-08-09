import { Modifier } from "../modifier";

export class cleaveModifier extends Modifier {
    
    constructor() {
        super();
        this.powerMultiplier = () => {return 0.5};
        this.name = 'Cleave'
        this.namePrefix = 'Cleaving'; //TODO cleave could scale
        this.description = 'After this action, repeat this action 1 time, without paying mana cost. With this repeated attack you must target an enemy adjacent to you or last target.';
        this.longDescription = '';
        this.modifierType =Modifier.Type.Improvement;

    }
}
