import { PowerModifier } from "../core/powerModifier";
import { Utils } from "../core/utils";
import { WeightedList } from "../core/weightedList";
import { Modifier } from "./modifier"
import { Effect } from "./effect"


export class EffectFactory {

    public static getAll(): WeightedList {
 
        const eff : WeightedList = new WeightedList();

        const stun = new Effect(); 
        stun.powerBonus = () => {return - 1.5 * Utils.DPS}; //something is wrong here
        stun.name = 'Stun'; 
        stun.weight = 1;
        stun.namePrefix = 'Stunning'; 
        stun.description = 'Stunned - character cannot take actions. Stunned ends at the end of a turn.';
        stun.subtype = Effect.Subtype.Debuff;
        stun.elements =  [[Modifier.Element.Physical, Modifier.Element.Ice].sort(() => 0.5 - Utils.random())[1]];
        eff.push(stun);


        const eviscerate = new Effect(); 
        eviscerate.powerBonus = () => {return -1000};
        eviscerate.weight = 0.1; 
        eviscerate.name = 'Mortal'; 
        eviscerate.namePrefix = 'Mortal'; 
        eviscerate.description = 'Instakill - if applied successfully, character dies.';
        eviscerate.subtype = Effect.Subtype.Debuff;
        eviscerate.elements =  [[Modifier.Element.Physical, Modifier.Element.Shadow, Modifier.Element.Curse, Modifier.Element.Nature].sort(() => 0.5 - Utils.random())[1]];
        eff.push(eviscerate);


        const dotInit: any [] = [[Modifier.Element.Physical, 'Bleeding'], [Modifier.Element.Fire, 'Burning'], [Modifier.Element.Curse, 'Diseased']].sort(() => 0.5 - Utils.random())[0];
        const dot = new Effect(); 
        dot.value = Math.ceil(Utils.DPS * (Math.random()));
        dot.duration = Math.ceil(Math.random() * 3) + 1;
        dot.powerBonus = (x: PowerModifier) => {return - dot.value * dot.duration * 0.5 * (x.chance ?? 1) }; //this means stun is worth regular DPS damage
        dot.elements =  [dotInit[0] as Modifier.Element];
        dot.name = dotInit[1] as string;  
        dot.namePrefix = dotInit[1] as string;  
        dot.description = dot.namePrefix + ' - at the end of each turn take '+dot.value+' damage, lasts for '+dot.duration+' turns.';
        dot.subtype = Effect.Subtype.Debuff;
        eff.push(dot);


        const accuracy = new Effect(); 
        accuracy.weight = 1;
        accuracy.value = Math.ceil(Math.random() * 2.2);
        accuracy.duration = Math.ceil(Math.random() * 2 + 0.5);
        accuracy.name = 'Accuracy'; 
        accuracy.namePrefix = 'Accurate'; 
        accuracy.description = 'Accuracy - when rolling for an Ability chance gain '+accuracy.value+' Boon, lasts for '+accuracy.duration+' turns. ';
        accuracy.subtype = Effect.Subtype.Buff;
        accuracy.elements =  [[Modifier.Element.Holy, Modifier.Element.Psychic].sort(() => 0.5 - Utils.random())[1]];
        accuracy.powerBonus = (x: PowerModifier) => {return - Utils.BoonValue * (1 - Math.pow(5/6, accuracy.value)) * accuracy.duration / 2}; 
        eff.push(accuracy);
                
        return eff;
    }

    public static get(count: number) {
        return EffectFactory.getAll().get(count) as Modifier[];
    }
    
}