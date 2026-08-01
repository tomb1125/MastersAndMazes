import { DescriptiveNumber } from "../../components/descriptiveNumber.js";
import { DescriptiveNumberFactory } from "../../components/descriptiveNumberFactory.js";
import { Ability } from "../../core/ability.js";
import { AffectsWeight } from "../../core/affectsWeight.js";
import { CanAffectModifier } from "../../core/canAffectModifier.js";
import { Utils } from "../../core/utils.js";
import { Modifier } from "../modifier.js";

export class momentumModifier extends Modifier {
    
    constructor(affector: AffectsWeight) {
        super();
        this.numericComponents = [new DescriptiveNumber(Math.ceil(Utils.random()* 4))];
        this.weight = (x?: AffectsWeight) => {return x?.cooldown === Ability.Cooldown.Encounter ? Utils.COMMON_MODIFIER : 0}
        this.name = 'Inertia '+this.numericComponents[0].getValue(); 
        this.namePrefix = 'Inertia';
        this.description = 'Can be only used when you fail ability chance roll with '+this.numericComponents[0].getValue()+' '+(this.numericComponents[0].getValue() === 1 ? 'ability' : 'abilities')+' in a row. ';
        this.powerMultiplier = (x: CanAffectModifier) => Math.pow(1.5, this.numericComponents[0].getValue()); //used to be 1.58
        this.modifierType = Modifier.Type.Constraint;
    }
}
