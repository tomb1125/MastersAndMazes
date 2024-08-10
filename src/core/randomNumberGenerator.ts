export class RandomNumberGenerator {
    seed: number;

    constructor(initSeed: string) {
        this.seed = 0;
        let i: number = 1;
        for (const c of initSeed) {
            this.seed += c.charCodeAt(0) * i;
            i = (i + 50);
        }
    }

    random(): number {
        this.seed += 1;

        let x = Math.sin(this.seed) * 100000;
        return x - Math.floor(x);
    }
}