import { DescriptiveNumberFactory } from "../../components/descriptiveNumberFactory";
import { PowerModifier } from "../../core/powerModifier";
import { Modifier } from "../modifier";

export class lifestealModifier extends Modifier {
    
    constructor() {
        super();
        this.weight = 1000; 
        this.type = Modifier.Type.Improvement;
        this.name = 'Lifesteal'; 
        this.numericComponents = DescriptiveNumberFactory.get(1);
        this.namePrefix = 'Leeching'; 
        this.description = 'When you hit, heal yourself equal to damage taken by enemy.';
        this.powerMultiplier = (x: PowerModifier) => {return 0.55};
        this.longDescription = '';
    }
}
