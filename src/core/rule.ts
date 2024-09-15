export class Rule {
    public description: string;
    public name: Rule.Name
    constructor(name: Rule.Name, description: string) {
        this.description = description;
        this.name = name;
    }
}


export namespace Rule
{
    export enum Name
    {
        ForcefulPush
    }
}