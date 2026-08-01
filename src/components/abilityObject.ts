import { AffectsWeight } from "../core/affectsWeight.js";
import { HasWeigth } from "../core/hasWeigth.js";

export class AbilityObject implements HasWeigth {
    rarity: number;
    name: string;
    description: string;
    prefix: string;
    weight = (x?: AffectsWeight) => {return 1};
    
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