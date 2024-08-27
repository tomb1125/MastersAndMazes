import { CharacterContext } from "../core/characterContext";
import { ClassDetails } from "./classDetails";
import { ClericClass } from "./classes/cleric";
import { RogueClass } from "./classes/rogue";

export class ClassUtils {
  
  static SKILL_TO_ATTRIBUTE: Map<number, number> = new Map([ //TODO move this to better place in characer context
    [CharacterContext.Skill.Athletics, CharacterContext.Attribute.Strength],
    [CharacterContext.Skill.Intimidation, CharacterContext.Attribute.Strength],
    [CharacterContext.Skill.Acrobatics, CharacterContext.Attribute.Dexterity],
    [CharacterContext.Skill.Stealth, CharacterContext.Attribute.Dexterity],
    [CharacterContext.Skill.Endurance, CharacterContext.Attribute.Constitution],
    [CharacterContext.Skill.Survival, CharacterContext.Attribute.Constitution],
    [CharacterContext.Skill.Knowledge, CharacterContext.Attribute.Intelligence],
    [CharacterContext.Skill.Crafting, CharacterContext.Attribute.Intelligence],
    [CharacterContext.Skill.Dungeoneering, CharacterContext.Attribute.Wisdom],
    [CharacterContext.Skill.Perception, CharacterContext.Attribute.Wisdom],
    [CharacterContext.Skill.Persuasion, CharacterContext.Attribute.Charisma],
    [CharacterContext.Skill.Streetwise, CharacterContext.Attribute.Charisma]
  ]);

    public static getClass(className: string): ClassDetails {
      if(className === 'Cleric') {
        return new ClericClass();
      } else if(className === 'Rogue') {
        return new RogueClass();
      } else {
        throw 'unsupported class '+className;
      }
    }
  }