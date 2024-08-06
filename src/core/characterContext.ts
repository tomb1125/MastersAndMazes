import { Utils } from "./utils";

export class CharacterContext {
    public static level: number = 1;

    public static getDPS() {
        return Utils.getDPS(CharacterContext.level);
    }

    public static
}

export namespace CharacterContext
{
    export enum Class
    {
      Cleric, //Heavy
      Fighter, //Heavy, Medium
      Leader, //Medium, Light
      Paladin, //Heavy
      Ranger, //Medium
      Rogue, //Medium
      Warlock, //Light
      Wizard, //Light

      Assassin, 
      Barbarian,
      Bard,
      Druid,
      Monk,
      Runepriest,
      Shaman,
      Sorcerer

    }
}