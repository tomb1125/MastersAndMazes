import { DescriptiveNumber } from "../../components/descriptiveNumber";
import { DescriptiveNumberFactory } from "../../components/descriptiveNumberFactory";
import { PowerModifier } from "../../core/powerModifier";
import { Modifier } from "../modifier";

export class momentumModifier extends Modifier {
    
    constructor() {
        super();
        this.name = 'Inertia' 
        this.numericComponents = DescriptiveNumberFactory.getAll().filter((x: any) => {return x.name?.includes('D4')}).get(1) as DescriptiveNumber[];
        this.namePrefix = 'Inertia';
        this.description = 'Can be only used when you fail chance roll with '+this.numericComponents[0].getValue()+' '+(this.numericComponents[0].getValue() === 1 ? 'ability' : 'abilities')+' in a row. ';
        this.longDescription = '';
        this.powerMultiplier = (x: PowerModifier) => Math.pow(1.58, this.numericComponents[0].getValue());
        this.type = Modifier.Type.Constraint;
    }
}
