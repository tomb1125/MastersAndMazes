import { PowerModifier } from "../../core/powerModifier";
import { Modifier } from "../modifier";

export class fastModifier extends Modifier {
    
    constructor() {
        super();
        this.powerMultiplier = () => {return 0.5};
        this.name = 'Fast'
        this.namePrefix = 'Fast';
        this.description = 'You can use Swift Action to use this ability.';
        this.longDescription = '';
        this.type = Modifier.Type.Improvement;
    }
}
