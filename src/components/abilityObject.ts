import { AffectsWeight } from "../core/affectsWeight.js";
import { HasWeigth } from "../core/hasWeigth.js";

export class AbilityObject implements HasWeigth {
    rarity: number;
    name: string;
    description: string;
    prefix: string;
    weight = (x?: AffectsWeight) => {return 1};

    // Defaults to the class name, which is what a repository entry wants; a table row
    // overrides it, since every row of a table shares the one AbilityObject constructor
    // and would otherwise be indistinguishable to a vendor.
    typeName: string = this.constructor.name;
    
    isAnimal : boolean = false;
    isBulkMaterial : boolean = false;
    isCommunication : boolean = false;
    isCorpse : boolean = false;
    isIllusion : boolean = false;
    isLight: boolean = false;
    isMovement: boolean = false;
    isPerson: boolean = false;
    isQuestion: boolean = false;
    isStealth: boolean = false;
    isTraining: boolean = false;

    constructor(name: string) {
        this.name = name;
    }
}