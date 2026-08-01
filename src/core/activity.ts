import { Modifier } from "../modifiers/modifier.js";
import { Ability } from "./ability.js";
export class Activity extends Ability {
    range : number;
    modifiers: Modifier[];
    longDescription: String;
   
    constructor(otherName?: string) {
      super(otherName);
      this.longDescription = '';
    }

    override generate() {

    }
  }