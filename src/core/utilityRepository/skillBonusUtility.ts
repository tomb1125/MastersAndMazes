import { ClassDetails } from "../../characters/classDetails";
import { ClassUtils } from "../../characters/classUtils";
import { DescriptiveNumber } from "../../components/descriptiveNumber";
import { CharacterContext } from "../characterContext";
import { Utility } from "../utility";
import { Utils } from "../utils";


export class SkillBonusUtility extends Utility {

    constructor() {
        let skill: CharacterContext.Skill;
        const roll = Utils.random();
        const roll2 = Utils.D(CharacterContext.classes.length) - 1;

        if(roll < 0.55) {
            skill = [...Utils.SKILL_TO_ATTRIBUTE.keys()].filter((key: number) => {
                return Utils.SKILL_TO_ATTRIBUTE.get(key) === ClassUtils.getClass(CharacterContext.Class[CharacterContext.classes[roll2]]).primaryAttribute
            }).sort(() => 0.5 - Utils.random())[0]
        } else if(roll < 0.8) {
            skill = [...Utils.SKILL_TO_ATTRIBUTE.keys()].filter((key: number) => {
                return Utils.SKILL_TO_ATTRIBUTE.get(key) === ClassUtils.getClass(CharacterContext.Class[CharacterContext.classes[roll2]]).secondaryAttribute
            }).sort(() => 0.5 - Utils.random())[0]
        } else {
            skill = [...Utils.SKILL_TO_ATTRIBUTE.keys()].sort(() => 0.5 - Utils.random())[0]
        }

        super(CharacterContext.Skill[skill]+' Bonus');
        this.weight = () => {return 1}        
        let boonNumbers = new DescriptiveNumber(Utils.D(3));
        this.chance = 2 * Math.pow(5/6, boonNumbers.getValue());
        


        
        this.description = 'For duration of an Encounter, gain ' + boonNumbers.getDescription()+ ' Boons when rolling for '+CharacterContext.Skill[skill]+'. '
        this.compensate();
    }
}