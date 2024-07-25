export class Ability {
    readonly name: string;
    chance: number;
    manaCost: number;
    type: Ability.Type;
   
    constructor(otherName?: string) {
      if (otherName !== undefined) {
        this.name = otherName;
      }
    }

    generate() {

    }
  }
  export namespace Ability
  {
      export enum Type
      {
        Weapon,
        Spell,
        Technique,
        Passive
      }

      export enum Source
      {
        Alchemical,
        Arcane, 
        Curse,
        Holy,
        Nature,
        Psychic,
        Skill,
        Shadow,
        Technology
      }

      export enum Element
      {
        Dark,
        Emotion,
        Fire, 
        Force,
        Ice,
        Lightning,
        Physical,
        Poison,
        Radiant
      }
  }