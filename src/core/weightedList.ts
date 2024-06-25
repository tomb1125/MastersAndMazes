import { HasWeigth } from "./hasWeigth"
import { Utils } from "./utils"


export class WeightedList {
    public items: HasWeigth[] = []
    
    push(item :HasWeigth): void {
        this.items.push(item);
    }

    get(): HasWeigth {
        const allWeight = this.items.reduce((sum: number, item: HasWeigth) => {return sum + item.weight}, 0);
        let roll = Utils.random() * allWeight;
        console.log(roll);
        for(let i = 0; i < this.items.length; i++) {
            roll -= this.items[i].weight;
            if(roll < 0) {
                return this.items[i];
            }
        }

        throw 'randomness out of bound';
    }
}