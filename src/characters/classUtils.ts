import { ClassDetails } from "./classDetails";
import { ClericClass } from "./classes/cleric";
import { RogueClass } from "./classes/rogue";

export class ClassUtils {

    public static getClass(className: string): ClassDetails {
      if(className === 'Cleric') {
        return new ClericClass();
      } else if(className === 'Rogue') {
        return new RogueClass();
      } else {
        throw 'unsupported class '+className;
      }
    }
  }