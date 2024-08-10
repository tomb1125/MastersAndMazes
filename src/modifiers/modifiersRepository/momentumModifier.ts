import { DescriptiveNumber } from "../../components/descriptiveNumber";
import { DescriptiveNumberFactory } from "../../components/descriptiveNumberFactory";
import { AffectsWeight } from "../../core/affectsWeight";
import { CanAffectModifier } from "../../core/canAffectModifier";
import { Modifier } from "../modifier";

export class momentumModifier extends Modifier {
    
    constructor(affector: AffectsWeight) {
        super();
        this.name = 'Inertia' 
        this.numericComponents = new DescriptiveNumberFactory(affector).filter((x: any) => {return x.name ==='D4'}).get(1) as DescriptiveNumber[];
        this.namePrefix = 'Inertia';
        this.description = 'Can be only used when you fail chance roll with '+this.numericComponents[0].getValue()+' '+(this.numericComponents[0].getValue() === 1 ? 'ability' : 'abilities')+' in a row. '; //TODO better wording when 1
        this.longDescription = '';
        this.powerMultiplier = (x: CanAffectModifier) => Math.pow(1.58, this.numericComponents[0].getValue());
        this.modifierType =Modifier.Type.Constraint;
    }
}
