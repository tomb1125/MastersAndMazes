import { AffectsWeight } from "../core/affectsWeight";
import { HasWeigth } from "../core/hasWeigth";

export class DescriptiveNumber implements HasWeigth{
    value: number;
    lowValue: number;
    name: string;
    description: string;
    type: DescriptiveNumber.Type = DescriptiveNumber.Type.Common;
    weight = (x?: AffectsWeight) => {return 1};;

    constructor(value?: number) {
        this.value = value == undefined ? 0 : value;
    }

    public getDescription(): string {
        if(this.description != undefined) return this.description;
        if(this.value != undefined) return this.value as unknown as string;
        
        throw 'Undefined Descriptive Number Error';

    }

    public getValue() : number {
        return this.value;
    }

    public getLowValue() : number {
        return this.lowValue == undefined ? this.value : this.lowValue;
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