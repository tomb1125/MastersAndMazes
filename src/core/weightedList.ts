import { AffectsWeight } from "./affectsWeight.js";
import { HasWeigth } from "./hasWeigth.js"
import { Utils } from "./utils.js"


export class WeightedList {
    public items: HasWeigth[] = []

    constructor(items?: HasWeigth[]) {
        if(items) {
            this.items = items;
        }
    }

    filter(z: (x: any) => boolean): WeightedList {
        return new WeightedList(this.items.filter(z));
    }

    push(item: HasWeigth): void {
        this.items.push(item);
    }

    totalWeight(affector?: AffectsWeight): number {
        return this.items.reduce((sum: number, item: HasWeigth) => sum + item.weight(affector), 0);
    }

    get(num: number, affector?: AffectsWeight, banList?: WeightedList): HasWeigth[] {
        return WeightedList.getRandomFromList([...this.items], num, affector);
    }

    getEven(num: number, affector?: AffectsWeight): HasWeigth[] {
        if(num <= 0) {
            return [];
        }

        // Zero-weight items are dropped up front: they can never be drawn, and leaving
        // them in would let a pass run out of weight and throw.
        const pool: HasWeigth[] = this.items.filter(item => item.weight(affector) > 0);
        if(pool.length === 0) {
            throw 'cannot evenly draw '+num+' items, no item in list of '+this.items.length+' has weight';
        }

        const drawn: HasWeigth[] = [];
        let pass: HasWeigth[] = [];

        while(drawn.length < num) {
            if(pass.length === 0) {
                pass = [...pool];
            }

            const item: HasWeigth = WeightedList.getRandomFromList(pass, 1, affector)[0];
            drawn.push(item);
            pass = pass.filter(n => n !== item);
        }

        return drawn;
    }

    private static getRandomFromList(array: HasWeigth[], num: number, affector?: AffectsWeight): HasWeigth[] {
        if(array.length < num) {
            throw 'cannot find '+num+' items in array with '+array.length+' elements';
        }


        const allWeight = array.reduce((sum: number, item: HasWeigth) => {
            return sum + item.weight(affector)
        }, 0);
        let roll: number = Utils.random() * allWeight;
        let randomElement: HasWeigth;
        let newArray: HasWeigth[];
        
        if(allWeight <= 0) {
            throw 'not enought weight to choose element: '+allWeight;
        }
        
        for(let i = 0; i < array.length; i++) {
            roll -= array[i].weight(affector);
            if(roll < 0) {
                randomElement = array[i];
                newArray = array.filter( n => n != randomElement)
                break;
            }
        }

        if(randomElement! && newArray!) { 
            if(num <= 1) {
                return [randomElement];
            } else {
                return [randomElement, ...WeightedList.getRandomFromList(newArray, num - 1, affector)]
            }
        }

        throw 'bad randomness';
    }
}