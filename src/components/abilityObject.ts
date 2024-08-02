import { HasWeigth } from "../core/hasWeigth";

export class AbilityObject implements HasWeigth {
    rarity: number;
    name: string;
    description: string;
    weight: number = 1;
    prefix: string;
    
    isAnimal : boolean = false;
    isCommunication : boolean = false;

    constructor(name: string) {
        this.name = name;
    }
}