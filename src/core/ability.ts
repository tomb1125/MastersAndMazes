import { AffectsWeight } from "./affectsWeight";

export class Ability implements AffectsWeight {
    readonly name: string;
    chance: number;
    cooldown: Ability.Cooldown;
    description: string;
    manaCost: number;
    type: Ability.Type;
    elements: Ability.Element[];
   
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
        Attack,
        Technique, //?
        Passive, //?
        Utility
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
        Poison,
        Radiant,
        Heavy,
        Finesse,
        Tactic
      }

      export enum Cooldown
      {
        Encounter,
        Daily,
        Adventure
      }

      export enum Attribute
      {
        Strength,
        Dexterity,
        Constitution,
        Intelligence,
        Wisdom,
        Charisma
      }
  }