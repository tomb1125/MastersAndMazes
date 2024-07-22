import { Modifier } from "../modifier";

export class cleaveModifier extends Modifier {
    
    constructor() {
        super();
        this.powerMultiplier = () => {return 0.5};
        this.name = 'Cleave'
        this.namePrefix = 'Cleaving';
        this.description = 'This action also targets one creature adjacent to initial target.';
        this.longDescription = '';
        this.type = Modifier.Type.Improvement;

    }
}
