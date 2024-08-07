import { Utils } from "./utils";

export class CharacterContext {
    public static level: number = 1;
    public static class: CharacterContext.Class = 0;
    public static seed: string = '' + Math.random();

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
      Sorcerer,
      Wizard, 

      Assassin, 
      Barbarian,
      Bard,
      Druid,
      Monk,
      Runepriest,
      Shaman,
      Warlock

    }
}