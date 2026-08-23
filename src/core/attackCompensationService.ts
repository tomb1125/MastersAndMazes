import { Compensation } from "../modifiers/compensation.js";
import { ModifierFactory } from "../modifiers/modifierFactory.js";
import { Attack } from "./attack.js";
import { Utils } from "./utils.js";

// An attack row is balanced as it is authored. Everything the generator adds on top of it -
// alterations, a flavoured damage number, the spell adjustment - is paid back here by moving
// exactly one of chance, damage or mana back to the power the row started with.

interface Adjustment {
    property: string;
    read: () => number;
    set: (value: number) => void;
    probeOffset: number;
    min: number;
    max: number;
    round?: (value: number) => number;
    quotable?: () => boolean;
}

interface Candidate {
    adjustment: Adjustment;
    fits: boolean;
    residual: number;
    apply: () => void;
}

interface AttackState {
    chance: number;
    manaCost: number;
    damageBonus: number;
    damageMultiplier: number;
}

export class AttackCompensationService {
    static MANA_TO_DAMAGE: number = 2;
    static MIN_CHANCE: number = 0.1;
    static MAX_CHANCE: number = 0.9;
    static MIN_DAMAGE: number = 1;
    static MIN_MANA: number = 0;

    private static EPSILON: number = 0.00001;

    private attack: Attack;
    private balancedPower: number;

    constructor(attack: Attack) {
        this.attack = attack;
        this.balancedPower = this.powerOf(attack.damage.getValue(), attack.chance, attack.manaCost, 0, 1);
    }

    public compensate(): void {
        this.enforceLimits();

        const candidates: Candidate[] = this.shuffled([this.chance(), this.damage(), this.mana()])
            .map(adjustment => this.attempt(adjustment));
        const fitting: Candidate[] = candidates.filter(candidate => candidate.fits);
        const chosen: Candidate = fitting.length > 0 ? fitting[0] : this.closest(candidates);

        const before: number = chosen.adjustment.read();
        chosen.apply();

        this.note(chosen.adjustment, before, chosen.adjustment.read());
    }

    private shuffled(adjustments: Adjustment[]): Adjustment[] {
        for(let i = adjustments.length - 1; i > 0; i--) {
            const j: number = Math.floor(Utils.random() * (i + 1));
            const swapped: Adjustment = adjustments[i];

            adjustments[i] = adjustments[j];
            adjustments[j] = swapped;
        }

        return adjustments;
    }

    private chance(): Adjustment {
        return {
            property: 'Chance',
            read: () => this.attack.chance,
            set: value => this.attack.chance = value,
            probeOffset: 0.1,
            min: AttackCompensationService.MIN_CHANCE,
            max: AttackCompensationService.MAX_CHANCE
        };
    }

    private damage(): Adjustment {
        return {
            property: 'Damage',
            read: () => this.attack.damage.getValue(),
            set: value => this.setDamage(value),
            probeOffset: 1,
            min: AttackCompensationService.MIN_DAMAGE,
            max: Infinity,
            // Flavoured damage renders as a marker rather than a figure, so there is no before and
            // after the card could quote - the compensation then only states which way it moved.
            quotable: () => !this.attack.damage.description
        };
    }

    private mana(): Adjustment {
        return {
            property: 'Mana',
            read: () => this.attack.manaCost,
            set: value => this.attack.manaCost = value,
            probeOffset: 1,
            min: AttackCompensationService.MIN_MANA,
            max: Infinity,
            round: value => this.roundMana(value)
        };
    }

    private note(adjustment: Adjustment, before: number, after: number): void {
        if(Math.abs(after - before) <= AttackCompensationService.EPSILON) {
            return;
        }

        const compensation = new Compensation(adjustment.property, before, after,
            !adjustment.quotable || adjustment.quotable());

        this.attack.compensation = compensation;
        this.attack.modifiers.push(compensation);
    }

    private attempt(adjustment: Adjustment): Candidate {
        const before: AttackState = this.snapshot();
        const start: number = adjustment.read();
        const solved: number = this.solve(adjustment, start);
        const usable: boolean = isFinite(solved);

        adjustment.set(usable ? this.limit(adjustment, solved) : start);

        const solution: AttackState = this.snapshot();
        const residual: number = usable ? Math.abs(this.power() - this.balancedPower) : Infinity;

        this.restore(before);

        return {
            adjustment: adjustment,
            fits: usable && this.fits(adjustment, solved),
            residual: residual,
            apply: () => this.restore(solution)
        };
    }

    // Power is a straight line in each of the three stats - a modifier only ever scales the stat
    // it reads or adds a constant - so the line is read off two probes and inverted in one step.
    // A modifier that made power curve would need a solver here instead.
    private solve(adjustment: Adjustment, start: number): number {
        const startResidual: number = this.residualAt(adjustment, start);

        if(Math.abs(startResidual) <= AttackCompensationService.EPSILON) {
            return start;
        }

        const probe: number = start + adjustment.probeOffset;
        const probeResidual: number = this.residualAt(adjustment, probe);

        if(Math.abs(probeResidual) <= AttackCompensationService.EPSILON) {
            return probe;
        }

        const slope: number = (probeResidual - startResidual) / (probe - start);

        return isFinite(slope) && slope !== 0 ? probe - probeResidual / slope : NaN;
    }

    private residualAt(adjustment: Adjustment, value: number): number {
        adjustment.set(value);

        return this.power() - this.balancedPower;
    }

    private limit(adjustment: Adjustment, solved: number): number {
        return Math.min(adjustment.max, Math.max(adjustment.min, this.rounded(adjustment, solved)));
    }

    private fits(adjustment: Adjustment, solved: number): boolean {
        const value: number = this.rounded(adjustment, solved);

        return value >= adjustment.min && value <= adjustment.max;
    }

    private rounded(adjustment: Adjustment, value: number): number {
        return adjustment.round ? adjustment.round(value) : value;
    }

    private closest(candidates: Candidate[]): Candidate {
        return candidates.reduce((best, candidate) => candidate.residual < best.residual ? candidate : best);
    }

    private enforceLimits(): void {
        this.attack.chance = Math.min(AttackCompensationService.MAX_CHANCE,
            Math.max(AttackCompensationService.MIN_CHANCE, this.attack.chance));

        this.attack.manaCost = Math.max(AttackCompensationService.MIN_MANA, this.attack.manaCost);

        // A described damage holds an estimate the card never prints, so clamping it up to a
        // minimum would only charge the row for a figure no one reads.
        if(!this.attack.damage.description
            && this.attack.damage.getValue() < AttackCompensationService.MIN_DAMAGE) {
            this.setDamage(AttackCompensationService.MIN_DAMAGE);
        }
    }

    private roundMana(value: number): number {
        return Math.ceil(value - AttackCompensationService.EPSILON);
    }

    private snapshot(): AttackState {
        return {
            chance: this.attack.chance,
            manaCost: this.attack.manaCost,
            damageBonus: this.attack.damage.bonus,
            damageMultiplier: this.attack.damage.multiplier
        };
    }

    private restore(state: AttackState): void {
        this.attack.chance = state.chance;
        this.attack.manaCost = state.manaCost;
        this.attack.damage.bonus = state.damageBonus;
        this.attack.damage.multiplier = state.damageMultiplier;
    }

    private setDamage(value: number): void {
        this.attack.damage.addBonus(value - this.attack.damage.getValue());
        this.attack.damage.compensate();
    }

    private power(): number {
        return this.powerOf(this.attack.damage.getValue(), this.attack.chance, this.attack.manaCost,
            this.bonus(), this.multiplier());
    }

    private powerOf(damage: number, chance: number, manaCost: number, bonus: number, multiplier: number): number {
        return (damage * chance - bonus) / multiplier
            - manaCost * AttackCompensationService.MANA_TO_DAMAGE;
    }

    private bonus(): number {
        return ModifierFactory.getDPSBonus(this.attack.modifiers, this.attack);
    }

    private multiplier(): number {
        return ModifierFactory.getDPSMultiplier(this.attack.modifiers, this.attack);
    }
}
