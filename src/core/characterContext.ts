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
      Cleric,
      Fighter,
      Leader,
      Paladin,
      Ranger,
      Rogue,
      Warlock,
      Wizard,

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