import { Utils } from "../core/utils";
import { WeightedList } from "../core/weightedList";
import { DescriptiveNumber } from "./descriptiveNumber";

export class DescriptiveNumberFactory {
    
    public static get(count: number): DescriptiveNumber[] {

        const nums: WeightedList = new WeightedList();

        
        const numericD10 = new DescriptiveNumber(Math.ceil(Utils.random() * 10));
        numericD10.type = DescriptiveNumber.Type.Common;
        nums.push(numericD10);

        const numberOfEnemies = new DescriptiveNumber(Utils.avgEnemies);
        numberOfEnemies.description = 'the number of enemies in this combat';
        numberOfEnemies.type = DescriptiveNumber.Type.Common;
        nums.push(numberOfEnemies);

        const numberOfTurns = new DescriptiveNumber(Utils.avgTurn);
        numberOfTurns.description = 'the turn number of this combat';
        numberOfTurns.type = DescriptiveNumber.Type.Common;
        nums.push(numberOfTurns);
        
        const currentHealth = new DescriptiveNumber(Utils.avgHealth);
        currentHealth.description = 'your current health';
        currentHealth.type = DescriptiveNumber.Type.Common;
        nums.push(currentHealth);

        
        const assassin = new DescriptiveNumber(Utils.avgEnemies * 2);
        assassin.description = 'the number of enemies you defeated today';
        assassin.type = DescriptiveNumber.Type.Common;
        nums.push(assassin);

        return nums.get(count) as DescriptiveNumber[];
    }
}