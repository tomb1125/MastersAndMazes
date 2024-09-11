import { AffectsWeight } from "../../affectsWeight";
import { Attack } from "../../attack";
import { CharacterContext } from "../../characterContext";

export class radiantRayAttack extends Attack {

    constructor(affector?: AffectsWeight) {
        super('Radiant Flame');
        this.weight = () => {return CharacterContext.classes.includes(CharacterContext.Class.Cleric) ? CharacterContext.IN_CLASS_MODIFIER : CharacterContext.OUT_OF_CLASS_WEIGHT}
        this.chance = 0.8;
        this.manaCost = 2;
        this.range = 1;
        

        //this.generate();
    }

    
    '<b>Name: ' + this.generateName() +
    '</b><br><b>Chance</b>: ' + Math.ceil(this.chance * 100) + '%' +
    '<br><b>Damage</b>: ' + (this.damage.description ? this.damage.getDescription() : Utils.valueToDiceRoll(this.damage.getValue())) +
    '<br><b>Mana Cost</b>: ' + this.manaCost +
    '<br><b>Range</b>: ' + this.range +
    '<br><b>Modifiers</b>: ' + this.modifiers.reduce(function (sum, mod) { return sum + ', ' + (mod.name === undefined ? mod.namePrefix : mod.name); }, '').slice(2) +
    '<br><b>Description</b>: ' + this.modifiers.reduce(function (sum, mod) { return sum + ' ' + mod.description; }, '').slice(1) +
    '<br><b>Type</b>: ' + Attack.Subtype[this.subtype] + 
    '<br><b>Cooldown</b>: ' + Ability.Cooldown[this.cooldown];
}
