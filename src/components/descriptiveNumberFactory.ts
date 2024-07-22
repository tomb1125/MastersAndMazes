import { Utils } from "../core/utils";
import { WeightedList } from "../core/weightedList";
import { DescriptiveNumber } from "./descriptiveNumber";
import { d10DescriptiveNumber } from "./descriptiveNumberRepository/d10DescriptiveNumber";
import { d4DescriptiveNumber } from "./descriptiveNumberRepository/d4DescriptiveNumber";

export class DescriptiveNumberFactory {
    
    public static get(count: number) : DescriptiveNumber[] {
        return this.getAll().get(count) as DescriptiveNumber[];
    }

    public static getAll(): WeightedList {

        const nums: WeightedList = new WeightedList();

        nums.push(new d10DescriptiveNumber());
        nums.push(new d4DescriptiveNumber());

        const numberOfEnemies = new DescriptiveNumber(Utils.avgEnemies);
        numberOfEnemies.description = 'the number of enemies in this combat';
        numberOfEnemies.type = DescriptiveNumber.Type.Common;
        nums.push(numberOfEnemies);

        const numberOfTurns = new DescriptiveNumber(Utils.avgTurn);
        numberOfTurns.description = 'the turn number of this combat';
        numberOfTurns.type = DescriptiveNumber.Type.Common;
        nums.push(numberOfTurns); //add low and high value
        
        const currentHealth = new DescriptiveNumber(Utils.avgHealth);
        currentHealth.description = 'your current health';
        currentHealth.type = DescriptiveNumber.Type.Common;
        nums.push(currentHealth);

        const currentDamage = new DescriptiveNumber(Utils.avgHealth - 1);
        currentDamage.description = 'your current damage taken';
        currentDamage.type = DescriptiveNumber.Type.Common;
        nums.push(currentDamage);
        
        const assassin = new DescriptiveNumber(Utils.avgEnemies * 2);
        assassin.description = 'the number of enemies you defeated today';
        assassin.type = DescriptiveNumber.Type.Common;
        nums.push(assassin);

        return nums as WeightedList;
    }
}