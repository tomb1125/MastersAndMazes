import { ClassDetails } from "../../characters/classDetails";
import { ClassUtils } from "../../characters/classUtils";
import { AffectsWeight } from "../affectsWeight";
import { Attack } from "../attack";
import { CharacterContext } from "../characterContext";
import { Utils } from "../utils";

export class basicAttack extends Attack {

    constructor(affector?: AffectsWeight) {
        super('Basic Attack');
        this.subtype = Attack.Subtype.Weapon;
        this.coreDescription = 'When you hit, deal damage. '

        this.weight = (x?: AffectsWeight) => {
            
            const classRoll = Utils.D(CharacterContext.classes.length) - 1;
            const characterClass: ClassDetails = ClassUtils.getClass(CharacterContext.Class[CharacterContext.classes[classRoll]])
            const primaryStat = characterClass.primaryAttribute;

            if([CharacterContext.Attribute.Strength, CharacterContext.Attribute.Dexterity, CharacterContext.Attribute.Constitution].includes(primaryStat)) {
                return 1;
            } else {
                return 0.2;
            }
        }
        
        const classRoll = Utils.D(CharacterContext.classes.length) - 1;
        const characterClass: ClassDetails = ClassUtils.getClass(CharacterContext.Class[CharacterContext.classes[classRoll]])
        this.elements = [characterClass.elements.sort(() => 0.5 - Utils.random())[0]];
        this.generate();
    }
}
