import { AbilityObject } from "../../../components/abilityObject.js";
import { AbilityObjectFactory } from "../../../components/abilityObjectFactory.js";
import { Ability } from "../../ability.js";
import { CharacterContext } from "../../characterContext.js";
import { Utility } from "../../utility.js";


export class shadowMeldUtility extends Utility {

    constructor() {
        super('Shadow Meld');        
        this.weight = () => {return CharacterContext.classes.includes(CharacterContext.Class.Rogue) ? CharacterContext.IN_CLASS_MODIFIER : CharacterContext.OUT_OF_CLASS_WEIGHT}
        this.objects.push(new AbilityObjectFactory(this).filter((x: AbilityObject) => x.isStealth).get(1)[0]);

        this.cooldown = Ability.Cooldown.Daily;
        this.chance = 1.2 
        this.description = 'You slowly becoome almost undetectable, this effect lasts until you move. '+this.objects[0].description;
        this.compensate();
    }
}