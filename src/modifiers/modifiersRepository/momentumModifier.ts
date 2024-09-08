import { DescriptiveNumber } from "../../components/descriptiveNumber";
import { DescriptiveNumberFactory } from "../../components/descriptiveNumberFactory";
import { Ability } from "../../core/ability";
import { AffectsWeight } from "../../core/affectsWeight";
import { CanAffectModifier } from "../../core/canAffectModifier";
import { Utils } from "../../core/utils";
import { Modifier } from "../modifier";

export class momentumModifier extends Modifier {
    
    constructor(affector: AffectsWeight) {
        super();
        this.numericComponents = [new DescriptiveNumber(Math.ceil(Utils.random()* 4))];
        this.weight = (x?: AffectsWeight) => {return x?.cooldown === Ability.Cooldown.Encounter ? 1 : 0}
        this.name = 'Inertia '+this.numericComponents[0].getValue(); 
        this.namePrefix = 'Inertia';
        this.description = 'Can be only used when you fail chance roll with '+this.numericComponents[0].getValue()+' '+(this.numericComponents[0].getValue() === 1 ? 'ability' : 'abilities')+' in a row. ';
        this.longDescription = '';
        this.powerMultiplier = (x: CanAffectModifier) => Math.pow(1.5, this.numericComponents[0].getValue()); //used to be 1.58
        this.modifierType = Modifier.Type.Constraint;
    }
}
