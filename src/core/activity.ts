import { Modifier } from "../modifiers/modifier";
import { Ability } from "./ability";
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