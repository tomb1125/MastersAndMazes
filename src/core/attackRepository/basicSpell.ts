import { ClassUtils } from "../../characters/classUtils";
import { AffectsWeight } from "../affectsWeight";
import { Attack } from "../attack";
import { CharacterContext } from "../characterContext";
import { Utils } from "../utils";

export class basicSpell extends Attack {

    constructor(affector?: AffectsWeight) {
        super('Basic Spell');

        this.weight = (x?: AffectsWeight) => {
            
            const classRoll = Utils.D(CharacterContext.classes.length) - 1;
            const primaryStat = ClassUtils.getClass(CharacterContext.Class[CharacterContext.classes[classRoll]]).primaryAttribute;

            if([CharacterContext.Attribute.Intelligence, CharacterContext.Attribute.Wisdom, CharacterContext.Attribute.Charisma].includes(primaryStat)) {
                return 1;
            } else {
                return 0.2;
            }
        }
        this.subtype = Attack.Subtype.Spell;
        this.coreDescription = 'When you hit, deal damage. '
        this.generate();
    }
}
