import { Modifier } from "./modifier"

export class Effect extends Modifier {
    subtype: Effect.Subtype;
    duration: number;
    value: number;
    
    constructor(otherName?: string) {
      super(otherName);
      this.type = Modifier.Type.Effect;
    }
}

export namespace Effect
{
    export enum Subtype
    {
      Buff,
      Debuff,
      Single
    }
}