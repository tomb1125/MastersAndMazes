import { HasWeigth } from "../core/hasWeigth";

export class DescriptiveNumber implements HasWeigth{
    value: number;
    description: String;
    type: DescriptiveNumber.Type = DescriptiveNumber.Type.Common;
    weight: number = 1;

    constructor(value: number) {
        this.value = value == undefined ? 0 : value;
    }

    public getDescription(): String {
        if(this.description != undefined) return this.description;
        if(this.value != undefined) return this.value as unknown as String;
        
        console.dir(this);
        throw 'Undefined Descriptive Number Error';

    }

    public getNumber() : number {
        return this.value;
    }

}


export namespace DescriptiveNumber
{
    export enum Type
    {
        
      Common, //damage and healing
      Range,
      Small //duration etc.
    }
}