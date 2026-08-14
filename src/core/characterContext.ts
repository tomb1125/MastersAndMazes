import { Utils } from "./utils.js";
export class CharacterContext {
    public static level: number = 1;
    public static seed: string;

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
      Paladin,
      Ranger,
      Rogue,
      Sorcerer,
      Druid,
      Wizard, 

      Assassin, 
      Barbarian,
      Bard,
      Monk,
      Runepriest,
      Shaman,
      Swordmage,
      Warlock,
    }

    export enum Attribute {
        Strength, 
        Dexterity, //initiative?
        Constitution, //max hp?
        Intelligence, //max mana?
        Wisdom,
        Charisma //rare items
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

        Medicine,
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

