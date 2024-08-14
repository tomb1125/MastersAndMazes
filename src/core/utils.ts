import { ModifierFactory } from "../modifiers/modifierFactory";
import { Factory } from "./factory";
import { HasWeigth } from "./hasWeigth";
import { RandomNumberGenerator } from "./randomNumberGenerator";

export class Utils {
    public static DPS: number = 5;
    public static POWER_PER_LEVEL = 0.2;
    public static BASIC_ATTACK_DPS: number = 2.5
    public static ATTACK_DESCRIPTIVE_NUMBER_CHANCE: number = 0.15;
    public static AVG_ENEMIES_ADJACENT: number = 1.9;
    public static AVG_ENEMIES_PER_PLAYER: number = 1.7;
    public static AVG_TURN: number = 4;
    
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
        return Utils.DPS + Utils.POWER_PER_LEVEL * (level - 1)
    }
    
    public static getRangeCoeficient(range: number): number {
        return (21 + range )/(20 + 2 * range)
    }

    public static getDurationCoeficient(dur: number): number {
        let coef: number = 0;
        if(dur >= 1) coef += 0.7;
        if(dur >= 2) coef += 0.6;
        if(dur >= 3) coef += 0.5;
        if(dur >= 4) coef += 0.4;
        if(dur >= 5) {
            coef += (dur - 4) * 0.3
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
}