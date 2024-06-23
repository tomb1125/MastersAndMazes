import { Ability } from "./ability";
export class Activity extends Ability {
    range : number;
   
    constructor(otherName?: string) {
      super(otherName);
    }

    override generate() {

    }
  }