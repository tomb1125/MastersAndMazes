import { Modifier } from "./modifier"

export class Effect extends Modifier {
    subtype: Effect.Subtype;
    
    constructor(otherName?: string) {
      super(otherName);
      this.type = Modifier.Type.Effect;
    }
}

export namespace Effect
{
    export enum Subtype
    {
        Idle,
        Loading,
        Ready,
        Error
    }
}