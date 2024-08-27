import { Utils } from "./utils";
export class CharacterContext {
    public static level: number = 1;
    public static classes: CharacterContext.Class[] = [0];
    public static seed: string;
    
    public static OUT_OF_CLASS_WEIGHT = 0.01;
    public static IN_CLASS_MODIFIER = 1.7


    public static getDPS() {
        return Utils.getDPS(CharacterContext.level);
    }
}

export namespace CharacterContext
{
    export enum Class
    {
      Cleric,
      Fighter,
      Leader,
      Paladin,
      Ranger,
      Rogue,
      Sorcerer,
      Wizard, 

      Assassin, 
      Barbarian,
      Bard,
      Druid,
      Monk,
      Runepriest,
      Shaman,
      Warlock,
    }

    export enum Attribute {
        Strength, 
        Dexterity, //initiative?
        Constitution, //max hp?
        Intelligence, //max mana?
        Wisdom,
        Charisma
    }

    export enum Skill {
        Athletics,
        Intimidation,

        Acrobatics,
        Stealth,

        Endurance,
        Survival,

        Knowledge, 
        Crafting,

        Dungeoneering,
        Perception,

        Persuasion,
        Streetwise
    }

    export enum ArmorProficiency {
        Heavy,
        Medium,
        Light
    }

}

