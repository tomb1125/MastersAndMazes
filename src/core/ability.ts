import { AffectsWeight } from "./affectsWeight.js";

export class Ability implements AffectsWeight {
    readonly name: string;
    chance: number;
    cooldown: Ability.Cooldown;
    description: string;
    manaCost: number;
    type: Ability.Type;
    elements: Ability.Element[];

    typeName: string = this.constructor.name;

    constructor(otherName?: string) {
      if (otherName !== undefined) {
        this.name = otherName;
      }

      this.elements = [];
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

      /**
       * The elements a weapon attack and a spell can respectively roll. Content picks from
       * one of these by subtype - abilities are narrowed by vendor, not by a character
       * class, so there is no per-class element list to draw from.
       */
      export const WEAPON_ELEMENTS: Element[] = [
        Element.Heavy,
        Element.Finesse,
        Element.Tactic
      ];

      export const MAGIC_ELEMENTS: Element[] = [
        Element.Dark,
        Element.Emotion,
        Element.Fire,
        Element.Force,
        Element.Ice,
        Element.Lightning,
        Element.Poison,
        Element.Radiant
      ];

      export enum Cooldown
      {
        Encounter,
        Daily,
        Adventure
      }

      export enum Range
      {
        Touch = 1,
        Short = 5,
        Medium = 10,
        Long = 20
      }

      export const RANGES: Range[] = [
        Range.Touch,
        Range.Short,
        Range.Medium,
        Range.Long
      ];

      export enum Attribute
      {
        Strength,
        Dexterity,
        Intelligence,
        Wisdom,
        Charisma
      }
  }