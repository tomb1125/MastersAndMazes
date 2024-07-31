import { Modifier } from "../modifiers/modifier";
import { Ability } from "./ability";
export class Activity extends Ability {
    range : number;
    modifiers: Modifier[];
   
    constructor(otherName?: string) {
      super(otherName);
    }

    override generate() {

    }
  }