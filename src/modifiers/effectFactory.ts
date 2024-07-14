import { PowerModifier } from "../core/powerModifier";
import { Utils } from "../core/utils";
import { WeightedList } from "../core/weightedList";
import { Modifier } from "./modifier"
import { Effect } from "./effect"


export class EffectFactory {

    public static getAll(): WeightedList {
 
        const eff : WeightedList = new WeightedList();

        const stun = new Effect(); 
        stun.powerBonus = () => {return - Utils.DPS}; 
        stun.name = 'Stun'; 
        stun.namePrefix = 'Stunning'; 
        stun.description = 'Stunned - character cannot take actions. Stunned ends at the end of a turn.';
        stun.subtype = Effect.Subtype.Debuff;
        stun.elements =  [[Modifier.Element.Physical, Modifier.Element.Ice].sort(() => 0.5 - Utils.random())[1]];
        eff.push(stun);


        const eviscerate = new Effect(); 
        eviscerate.powerBonus = () => {return -1000};
        eviscerate.weight = 0.1; 
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
        dot.namePrefix = dotInit[1] as string;  
        dot.description = dot.namePrefix + ' - at the end of each turn take '+dot.value+' damage, lasts for '+dot.duration+' turns.';
        dot.subtype = Effect.Subtype.Debuff;
        eff.push(dot);


        const accuracy = new Effect(); 
        accuracy.powerBonus = () => {return - Utils.DPS}; 
        accuracy.weight = 100;
        accuracy.duration = Math.ceil(Math.random() * 3) + 1;
        accuracy.name = 'Accuracy'; 
        accuracy.namePrefix = 'Accurate'; 
        accuracy.description = 'Accuract - when making attacks gain 1 Boon, lasts for '+accuracy.description+'turns. ';
        accuracy.subtype = Effect.Subtype.Buff;
        accuracy.elements =  [[Modifier.Element.Physical, Modifier.Element.Ice].sort(() => 0.5 - Utils.random())[1]];
        eff.push(accuracy);
                
        return eff;
    }

    public static get(count: number) {
        return EffectFactory.getAll().get(count) as Modifier[];
    }
    
}