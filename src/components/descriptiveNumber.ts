import { AffectsWeight } from "../core/affectsWeight";
import { HasWeigth } from "../core/hasWeigth";

export class DescriptiveNumber implements HasWeigth{
    protected value: number;
    lowValue: number;

    bonus: number;
    multiplier: number;

    name: string;
    description: string;
    type: DescriptiveNumber.Type = DescriptiveNumber.Type.Common;
    weight = (x?: AffectsWeight) => {return 1};

    constructor(value?: number) {
        this.value = value == undefined ? 0 : value;
    }

    public getDescription(): string {
        if(this.description) {
            if(this.bonus) {
                return (this.multiplier ? this.multiplier + 'x ' : '') + this.description + (this.bonus >= 0 ? ' + ' : ' - ') + this.bonus;
            } else {
                return (this.multiplier ? this.multiplier + 'x ' : '') + this.description;
            }
        }

        if(this.value) {
            return  (this.multiplier ? this.multiplier : 1) * this.value + (this.bonus ? this.bonus : 0) as unknown as string;
        }
        
        throw 'Undefined Descriptive Number Error';

    }

    public getValue() : number {
        let bonus = this.bonus ? this.bonus : 0;
        let multiplier = this.multiplier ? this.multiplier : 1;
        return multiplier * this.value + bonus;
    }

    public getLowValue() : number {
        let lowValue = this.lowValue ? this.lowValue : this.value;
        let multiplier = this.multiplier ? this.multiplier : 1;
        let bonus = this.bonus ? this.bonus : 0;
        return multiplier * lowValue + bonus;
    }

    public addBonus(val: number) : void {
        if(this.bonus === undefined) {
            this.bonus = 0;
        }

        this.bonus += val;
    }

    public addMultiplier(val: number) : void {
        if(this.multiplier === undefined) {
            this.multiplier = 1;
        }

        this.multiplier += val;
    }

    public compensate() {
        if(this.bonus > this.value && this.value > 0) {
            this.bonus -= Math.ceil(this.value);
            this.addMultiplier(1);

            this.compensate();
        }
    }

}


export namespace DescriptiveNumber
{
    export enum Type
    {
        
      Common, //damage and healing
      Range,
      Small, //duration etc.
      UtilityDuration
    }
}