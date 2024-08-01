import { allAnimalsAbilityObject } from "../components/abilityObjectRepository/animals/allAnimalsAbilityObject";
import { HasWeigth } from "./hasWeigth"
import { Utils } from "./utils"


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

    get(num: number): HasWeigth[] {
        return WeightedList.getRandomFromList([...this.items], num);
    }

    private static getRandomFromList(array: HasWeigth[], num: number): HasWeigth[] {
        if(array.length < num) {
            throw 'cannot find '+num+' items in array with '+array.length+' elements';
        }

        const allWeight = array.reduce((sum: number, item: HasWeigth) => {return sum + item.weight}, 0);
        let roll: number = Utils.random() * allWeight;
        let randomElement: HasWeigth;
        let newArray: HasWeigth[];
        for(let i = 0; i < array.length; i++) {
            roll -= array[i].weight;
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
                return [randomElement, ...WeightedList.getRandomFromList(newArray, num - 1)]
            }
        }

        throw 'bad randomness';
    }
}