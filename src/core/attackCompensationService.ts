import { Compensation } from "../modifiers/compensation.js";
import { ModifierFactory } from "../modifiers/modifierFactory.js";
import { Attack } from "./attack.js";
import { Utils } from "./utils.js";

// An attack row is balanced as it is authored. Everything the generator adds on top of it -
// alterations, a flavoured damage number, the spell adjustment - is paid back here by moving
// exactly one of chance, damage or mana back to the power the row started with.

interface Knob {
    label: string;
    read: () => number;
    set: (value: number) => void;
    step: number;
    limit: (solved: number) => number;
    fits: (solved: number) => boolean;
    format: (value: number) => string;
    higherIsBetter: boolean;
}

interface Candidate {
    knob: Knob;
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

    private static SOLVER_PASSES: number = 24;
    private static EPSILON: number = 0.00001;

    private attack: Attack;
    private balancedPower: number;

    constructor(attack: Attack) {
        this.attack = attack;
        this.balancedPower = this.powerOf(attack.damage.getValue(), attack.chance, attack.manaCost, 0, 1);
    }

    public compensate(): void {
        this.enforceLimits();

        const candidates: Candidate[] = this.shuffled([this.chanceKnob(), this.damageKnob(), this.manaKnob()])
            .map(knob => this.attempt(knob));
        const fitting: Candidate[] = candidates.filter(candidate => candidate.fits);
        const chosen: Candidate = fitting.length > 0 ? fitting[0] : this.closest(candidates);

        const before: number = chosen.knob.read();
        chosen.apply();

        this.note(chosen.knob, before, chosen.knob.read());
    }

    private shuffled(knobs: Knob[]): Knob[] {
        for(let i = knobs.length - 1; i > 0; i--) {
            const j: number = Math.floor(Utils.random() * (i + 1));
            const swapped: Knob = knobs[i];

            knobs[i] = knobs[j];
            knobs[j] = swapped;
        }

        return knobs;
    }

    private chanceKnob(): Knob {
        return {
            label: 'Chance',
            read: () => this.attack.chance,
            set: value => this.attack.chance = value,
            step: 0.1,
            limit: solved => Math.min(AttackCompensationService.MAX_CHANCE,
                Math.max(AttackCompensationService.MIN_CHANCE, solved)),
            fits: solved => solved >= AttackCompensationService.MIN_CHANCE
                && solved <= AttackCompensationService.MAX_CHANCE,
            format: value => Math.ceil(value * 100) + '%',
            higherIsBetter: true
        };
    }

    private damageKnob(): Knob {
        return {
            label: 'Damage',
            read: () => this.attack.damage.getValue(),
            set: value => this.setDamage(value),
            step: 1,
            limit: solved => Math.max(AttackCompensationService.MIN_DAMAGE, solved),
            fits: solved => solved >= AttackCompensationService.MIN_DAMAGE,
            // Flavoured damage renders as a marker rather than a figure, so there is no before and
            // after the card could quote - the compensation then only states which way it moved.
            format: value => this.attack.damage.description ? undefined : Utils.valueToDiceRoll(value),
            higherIsBetter: true
        };
    }

    private manaKnob(): Knob {
        return {
            label: 'Mana',
            read: () => this.attack.manaCost,
            set: value => this.attack.manaCost = value,
            step: 1,
            limit: solved => Math.max(AttackCompensationService.MIN_MANA, this.roundMana(solved)),
            fits: solved => this.roundMana(solved) >= AttackCompensationService.MIN_MANA,
            format: value => value + '',
            higherIsBetter: false
        };
    }

    private note(knob: Knob, before: number, after: number): void {
        if(Math.abs(after - before) <= AttackCompensationService.EPSILON) {
            return;
        }

        const raised: boolean = after > before;
        const compensation = new Compensation(knob.label, knob.format(before), knob.format(after),
            raised, raised === knob.higherIsBetter);

        this.attack.compensation = compensation;
        this.attack.modifiers.push(compensation);
    }

    private attempt(knob: Knob): Candidate {
        const before: AttackState = this.snapshot();
        const start: number = knob.read();
        const solved: number = this.solve(knob, start);
        const usable: boolean = isFinite(solved);

        knob.set(usable ? knob.limit(solved) : start);

        const solution: AttackState = this.snapshot();
        const residual: number = usable ? Math.abs(this.power() - this.balancedPower) : Infinity;

        this.restore(before);

        return {
            knob: knob,
            fits: usable && knob.fits(solved),
            residual: residual,
            apply: () => this.restore(solution)
        };
    }

    // A modifier's power may itself read the chance or damage being solved for, so the knob is
    // found by walking the residual to zero rather than by inverting the power formula once.
    private solve(knob: Knob, start: number): number {
        let previous: number = start;
        let previousResidual: number = this.residualAt(knob, previous);

        if(Math.abs(previousResidual) <= AttackCompensationService.EPSILON) {
            return previous;
        }

        let current: number = previous + knob.step;
        let currentResidual: number = this.residualAt(knob, current);

        for(let pass = 0; pass < AttackCompensationService.SOLVER_PASSES; pass++) {
            if(Math.abs(currentResidual) <= AttackCompensationService.EPSILON) {
                return current;
            }

            const slope: number = (currentResidual - previousResidual) / (current - previous);
            if(!isFinite(slope) || slope === 0) {
                return NaN;
            }

            previous = current;
            previousResidual = currentResidual;
            current = current - currentResidual / slope;
            currentResidual = this.residualAt(knob, current);
        }

        return Math.abs(currentResidual) <= AttackCompensationService.EPSILON ? current : NaN;
    }

    private residualAt(knob: Knob, value: number): number {
        knob.set(value);

        return this.power() - this.balancedPower;
    }

    private closest(candidates: Candidate[]): Candidate {
        return candidates.reduce((best, candidate) => candidate.residual < best.residual ? candidate : best);
    }

    private enforceLimits(): void {
        this.attack.chance = Math.min(AttackCompensationService.MAX_CHANCE,
            Math.max(AttackCompensationService.MIN_CHANCE, this.attack.chance));

        this.attack.manaCost = Math.max(AttackCompensationService.MIN_MANA, this.attack.manaCost);

        if(this.attack.damage.getValue() < AttackCompensationService.MIN_DAMAGE) {
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
