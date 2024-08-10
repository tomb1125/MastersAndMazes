import { CanAffectModifier } from "../../core/canAffectModifier";
import { Utils } from "../../core/utils";
import { Modifier } from "../modifier";

export class fastModifier extends Modifier {
    
    constructor() {
        super();
        this.powerBonus = () => {return - Utils.DPS};
        this.name = 'Fast'
        this.namePrefix = 'Fast';
        this.description = 'You can use Swift Action to use this ability.';
        this.longDescription = '';
        this.modifierType =Modifier.Type.Improvement;
    }
}
