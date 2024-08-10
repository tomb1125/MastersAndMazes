import { DescriptiveNumberFactory } from "../../components/descriptiveNumberFactory";
import { CanAffectModifier } from "../../core/canAffectModifier";
import { Modifier } from "../modifier";

export class lifestealModifier extends Modifier {
    
    constructor() {
        super();
        this.modifierType =Modifier.Type.Improvement;
        this.name = 'Lifesteal'; 
        this.namePrefix = 'Leeching'; 
        this.description = 'When you hit, heal yourself equal to damage taken by enemy.';
        this.powerMultiplier = (x: CanAffectModifier) => {return 0.55}; //TODO this should be bonus equal to damage... however damage is set after modifiers...s
        this.longDescription = '';
    }
}
