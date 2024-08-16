import { ClassDetails } from "../../characters/classDetails";
import { ClassUtils } from "../../characters/classUtils";
import { DescriptiveNumber } from "../../components/descriptiveNumber";
import { CharacterContext } from "../characterContext";
import { Utility } from "../utility";
import { Utils } from "../utils";


export class SkillBonusUtility extends Utility {

    constructor() {
        super('Skill Bonus');
        this.weight = () => {return 1}        
        let boonNumbers = new DescriptiveNumber(Utils.D(3));
        this.chance = 2 * Math.pow(5/6, boonNumbers.getValue());
        

        let skill: CharacterContext.Skill;
        const roll = Utils.random();
        if(roll < 0.5) {
            skill = [...Utils.SKILL_TO_ATTRIBUTE.keys()].filter((key: number) => {
                Utils.SKILL_TO_ATTRIBUTE[key] === ClassUtils.getClass(CharacterContext.Class[CharacterContext.classes[Utils.D(CharacterContext.classes.length) - 1]]).primaryAttribute
            }).sort(() => 0.5 - Utils.random())[0]
        } else if(roll < 0.8) {
            skill = [...Utils.SKILL_TO_ATTRIBUTE.keys()].filter((key: number) => {
                Utils.SKILL_TO_ATTRIBUTE[key] === ClassUtils.getClass(CharacterContext.Class[CharacterContext.classes[Utils.D(CharacterContext.classes.length) - 1]]).secondaryAttribute
            }).sort(() => 0.5 - Utils.random())[0]
        } else {
            skill = [...Utils.SKILL_TO_ATTRIBUTE.keys()].sort(() => 0.5 - Utils.random())[0]
        }
        
        this.description = 'For duration of an Encounter, gain ' + boonNumbers.getDescription()+ ' Boons when rolling for '+skill
        this.compensate();
    }
}