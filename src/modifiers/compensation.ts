import { StatChange } from "../core/activity.js";
import { Utils } from "../core/utils.js";
import { Modifier } from "./modifier.js";

// The note AttackCompensationService leaves behind on the ability it balanced. It is generator
// output rather than stock, so it lives outside modifiersRepository and is never rolled.

interface CompensatedStat {
    noun: string;
    format: (value: number) => string;
    higherIsBetter: boolean;
}

export class Compensation extends Modifier implements StatChange {
    private static STATS: Map<string, CompensatedStat> = new Map([
        ['Chance', {noun: 'Accuracy', format: (value: number) => Math.ceil(value * 100) + '%', higherIsBetter: true}],
        ['Damage', {noun: 'Damage', format: (value: number) => Utils.valueToDiceRoll(value), higherIsBetter: true}],
        ['Mana', {noun: 'Mana Cost', format: (value: number) => value + '', higherIsBetter: false}]
    ]);

    property: string;
    up: boolean;
    better: boolean;
    detail: string;

    constructor(property: string, before: number, after: number, quotable: boolean) {
        super(Compensation.nameOf(property, after > before));

        const stat: CompensatedStat = Compensation.statOf(property);
        const raised: boolean = after > before;
        const move: string = raised ? ' raised' : ' lowered';

        this.property = property;
        this.up = raised;
        this.better = raised === stat.higherIsBetter;
        this.detail = quotable
            ? property + ' was ' + stat.format(before) + ' before compensation'
            : property + ' was' + move + ' by compensation';
        this.description = property + move
            + (quotable ? ' from ' + stat.format(before) + ' to ' + stat.format(after) : '');
        this.modifierType = this.better ? Modifier.Type.Improvement : Modifier.Type.Constraint;
    }

    private static statOf(property: string): CompensatedStat {
        return Compensation.STATS.has(property)
            ? Compensation.STATS.get(property)
            : {noun: property, format: (value: number) => value + '', higherIsBetter: true};
    }

    private static nameOf(property: string, raised: boolean): string {
        return (raised ? 'Increased ' : 'Reduced ') + Compensation.statOf(property).noun;
    }
}
