import { StatChange } from "../core/activity.js";
import { Modifier } from "./modifier.js";

// The note AttackCompensationService leaves behind on the ability it balanced. It is generator
// output rather than stock, so it lives outside modifiersRepository and is never rolled.

export class Compensation extends Modifier implements StatChange {
    private static NOUNS: Map<string, string> = new Map([
        ['Chance', 'Accuracy'],
        ['Damage', 'Damage'],
        ['Mana', 'Mana Cost']
    ]);

    property: string;
    up: boolean;
    better: boolean;
    detail: string;

    constructor(property: string, before: string, after: string, raised: boolean, better: boolean) {
        super(Compensation.nameOf(property, raised));

        this.property = property;
        this.up = raised;
        this.better = better;
        this.detail = property + ' was ' + before + ' before compensation';
        this.description = property + (raised ? ' raised from ' : ' lowered from ')
            + before + ' to ' + after + ' to balance the rest of the attack.';
        this.modifierType = better ? Modifier.Type.Improvement : Modifier.Type.Constraint;
    }

    private static nameOf(property: string, raised: boolean): string {
        const noun: string = Compensation.NOUNS.has(property) ? Compensation.NOUNS.get(property) : property;

        return (raised ? 'Increased ' : 'Reduced ') + noun;
    }
}
