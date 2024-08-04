import { Modifier } from "../modifier";

export class bloodiedModifier extends Modifier {
    
    constructor() {
        super();
        this.powerMultiplier = () => {return 1.5};
        //this.weight = (x?: AffectsWeight) => {return x?.type === Ability.Type.Weapon ? 1000 : 1}
        this.weight = () => {return 1}
        this.name = 'Bloody';
        this.namePrefix = 'Bloody';
        this.description = 'Can be used only when you have half or less Health.';
        this.longDescription = '';
        this.modifierType = Modifier.Type.Constraint;
    }
}
