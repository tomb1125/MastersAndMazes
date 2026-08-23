import { CharacterContext } from "../core/characterContext.js";
import { ClassDetails } from "./classDetails.js";
import { WizardClass } from "./classes/wizard.js";

export class ClassUtils {
  
  static SKILL_TO_ATTRIBUTE: Map<number, number> = new Map([ //TODO move this to better place in characer context
    [CharacterContext.Skill.Athletics, CharacterContext.Attribute.Strength],
    [CharacterContext.Skill.Endurance, CharacterContext.Attribute.Strength],
    [CharacterContext.Skill.Skulldudgery, CharacterContext.Attribute.Dexterity],
    [CharacterContext.Skill.Stealth, CharacterContext.Attribute.Dexterity],
    [CharacterContext.Skill.Knowledge, CharacterContext.Attribute.Intelligence],
    [CharacterContext.Skill.Crafting, CharacterContext.Attribute.Intelligence],
    [CharacterContext.Skill.Survival, CharacterContext.Attribute.Wisdom],
    [CharacterContext.Skill.Perception, CharacterContext.Attribute.Wisdom],
    [CharacterContext.Skill.Persuasion, CharacterContext.Attribute.Charisma],
    [CharacterContext.Skill.Streetwise, CharacterContext.Attribute.Charisma]
  ]);

    public static getClass(className: string): ClassDetails {
      if(className === 'Wizard') {
        return new WizardClass();
      } else {
        throw 'unsupported class '+className;
      }
    }
  }