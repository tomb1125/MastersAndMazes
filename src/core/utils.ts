import { ModifierFactory } from "../modifiers/modifierFactory";
import { CharacterContext } from "./characterContext";
import { Factory } from "./factory";
import { HasWeigth } from "./hasWeigth";
import { RandomNumberGenerator } from "./randomNumberGenerator";
import { Rule } from "./rule";

export class Utils {
    public static DPS: number = 5;
    public static ENEMY_DPS: number = 10;

    public static POWER_PER_LEVEL: number = 0.2;
    public static BASIC_ATTACK_DPS: number = 2.5
    public static ATTACK_DESCRIPTIVE_NUMBER_CHANCE: number = 0.25;
    public static AVG_ENEMIES_ADJACENT: number = 1.9;
    public static AVG_PLAYERS: number = 3;
    public static AVG_ENEMIES_PER_PLAYER: number = 2;
    public static AVG_TURN: number = 4;
    public static AVG_SCARS: number = 2.5;
    public static AVG_RALLIES: number = 0.8;
    public static AVG_POTIONS: number = 2.5;
    public static AVG_CLOSTEST_DISTANCE: number = 10;
    public static AVG_LONGEST_DISTANCE: number = 20;

    public static EFFECT_WEIGHT_MOD: number = 1.1;
    public static RARE_MODIFIER: number = 0.1;
    public static COMMON_MODIFIER: number = 0.75;

    public static BoonValue: number = Utils.DPS * 5;
    public static avgHealth: number = 25;

    public static gen: RandomNumberGenerator;

    public static random(): number {
        return this.gen.random();// Math.random();
    };

    //since High Accuracy and Low Accuracy attacks are easily exploitable. Thus we provide bonus to Medium Accuracy attacks.
    public static getDPSCoefficient(chance: number): number {
        //return 1.1 - 0.2 * Math.abs(0.5 - chance);
        return 1; //TODO restore
    }

    public static getDPS(level: number) {
        return Utils.DPS; //+ Utils.POWER_PER_LEVEL * (level - 1)
    }
    
    public static getRangeCoeficient(range: number): number {
        if(range <= 1) return 1;
        if(range <= 5) return 0.95;
        if(range <= 10) return 0.90;
        if(range <= 15) return 0.85;
        if(range <= 20) return 0.80;
        if(range <= 25) return 0.75;

        throw 'unsupported range '+range;

        //return (21 + range )/(20 + 2 * range)
    }

    public static getDurationCoeficient(dur: number): number {
        let coef: number = 0;
        if(dur >= 1) coef += 0.7;
        if(dur >= 2) coef += 0.6;
        if(dur >= 3) coef += 0.5;
        if(dur >= 4) coef += 0.4;
        if(dur >= 5) coef += 0.3;
        if(dur >= 6) coef += 0.2;
        if(dur >= 7) {
            coef += (dur - 6) * 0.1
        }
        
        return coef;
    }
    

    public static valueToDiceRoll(num: number): string {
        if(num < 0) throw('damage too low to represent');
        if(num < 2.25) return Math.round(num) + '';
        if(num < 3) return 'D4';
        if(num < 4) return 'D6';
        if(num < 5) return 'D8';
        if(num < 6) return 'D10';
        if(num < 14) return 'D10 + '+Math.round(num - 5.5);
        if(num < 20) {
            if(this.isOneDie(num)) {
                return 'D10 + '+Math.round(num - 5.5);
            } 
            return '2D6 + '+Math.round(num - 7)
        }
        if(num < 100) {
            if(this.isOneDie(num)) {
                return 'D20 + '+Math.round(num - 10.5);
            } 
            return '2D10 + '+Math.round(num - 11)
        }
        if(num < 200) {
            if(this.isOneDie(num)) {
                return 'D100 + '+Math.round(num - 50.5);
            } 
            return '2D20 + '+Math.round(num - 21)
        }

        return Math.round(num) +'';
    }

    public static isOneDie(num: number) {
        return Math.round(num * 2) % 2 === 1
    }

    public static getNumberFromValueMap(orderedValueMap: Map<number,number>, factory: Factory): HasWeigth[] {
        const roll = Utils.random();
        let items: HasWeigth[] = [];

        orderedValueMap.forEach((value: number, key: number) => { //TODO allow init of one of many modifiers.
            if(roll <= key) {
                return
            }
    
            items = factory.get(value);
          });

        return items;
    }

    public static D(value: number): number {
        return Math.ceil(Utils.random() * value) 
    }

    public static rules: Rule[] = [
        new Rule(Rule.Name.ForcefulPush, 
            'Forceful Push X - move target X squares. Each square of movement must be further than the previous one. You can push into hazardoous terrain. Each square of movent that is wasted by an obstacle deals 1 damage to them<br>'
        ),
        new Rule(Rule.Name.Blessing, 
            'Blessing - Blessing Points are permanent. Whenever you reach 100 or more Blessing, reduce your Blessing by 100 and roll in below table:<br>'+
            '&ensp;1 - Remove all Scars you have.<br>'+
            '&ensp;2 - All rolls have 1 Boon until the end of the next adventure.<br>'+
            '&ensp;3 - Gain 10 Experience points.<br>'+
            '&ensp;4 - Permanently gain 5 maximum Health.<br>'+
            '&ensp;5 - Raise any of your attributes by 10, but not above 50.<br>'+
            '&ensp;6 - Next time you see "you die" effect (eg. dying roll or corruption roll) you can ignore it.<br>'
        ),
        new Rule(Rule.Name.FighterStance, 
            'Fighter Stance - choose one effect below, you benefit from it until end of encounter. Only one fighter stance can be active at a time.<br>'+
            '&ensp;Precision - Gain 1 Boon with Weapon Attacks<br>'+
            '&ensp;Power - Deal +2 damage with Weapon Attacks<br>'+
            '&ensp;Endurance - At the end of each turn regain 1 Mana or 3 Mana if you have less than 5 Mana.<br>'
        )
    
    ]

    public static getRule(name: Rule.Name): Rule {
        return Utils.rules.filter((r :Rule) => r.name === name)[0];
    }

    
}