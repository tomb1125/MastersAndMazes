import { AffectsWeight } from "../core/affectsWeight";
import { HasWeigth } from "../core/hasWeigth";

export class DescriptiveNumber implements HasWeigth{
    protected value: number;
    lowValue: number;

    bonus: number;
    name: string;
    description: string;
    type: DescriptiveNumber.Type = DescriptiveNumber.Type.Common;
    weight = (x?: AffectsWeight) => {return 1};;

    constructor(value?: number) {
        this.value = value == undefined ? 0 : value;
    }

    public getDescription(): string {
        if(this.description != undefined) {
            if(this.bonus != undefined) {
                return this.description + (this.bonus >= 0 ? ' + ' : ' - ') + this.bonus;
            } else {
                return this.description;
            }
        }
        if(this.value != undefined) {
            return this.value + (this.bonus != undefined ? this.bonus : 0) as unknown as string;
        }
        
        throw 'Undefined Descriptive Number Error';

    }

    public getValue() : number {
        return this.value + (this.bonus != undefined ? this.bonus : 0);
    }

    public getLowValue() : number {
        return (this.lowValue === undefined ? this.value : this.lowValue) + (this.bonus != undefined ? this.bonus : 0);
    }

    public addBonus(val: number) : void {
        if(this.bonus === undefined) {
            this.bonus = 0;
        }

        this.bonus += val;
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