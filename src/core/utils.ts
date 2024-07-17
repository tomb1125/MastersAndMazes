export class Utils {
    public static DPS: number = 5;
    public static BoonValue: number = Utils.DPS * 6;
    public static avgHealth: number = 25;
    public static avgEnemies: number = 7;
    public static avgTurn: number = 5;

    public static random(): number {
        return Math.random();
    };

    //since High Accuracy and Low Accuracy attacks are easily exploitable. Thus we provide bonus to Medium Accuracy attacks.
    public static getDPSCoefficient(chance: number): number {
        //return 1.1 - 0.2 * Math.abs(0.5 - chance);
        return 1; //TODO restore
    }

    
    public static getRangeCoeficient(range: number): number {
        return (21 + range )/(20 + 2 * range)
    }
    
    public static getInefficiencyCurve(num: number): number {
        return num + num/5 * (num/5 - 2)
    }

    public static getRandomMultipler(): number {
        if(Utils.random() > 0.9) {
            return 2 * Utils.getRandomMultipler();
        }

        if(Utils.random() > 0.3) {
            return 1 + Utils.getRandomMultipler();
        }

        return 1;
    }

    public static valueToDiceRoll(num: number): string {
        if(num < 0) throw('damage too low to represent');
        if(num < 2.25) return Math.round(num) + '';
        if(num < 3) return 'D4';
        if(num < 4) return 'D6';
        if(num < 5) return 'D8';
        if(num < 6) return 'D10';
        if(num < 14) return 'D10 + '+Math.round(num - 5.5);
        if(num < 20) {
            if(this.isOneDie(num)) {
                return 'D10 + '+Math.round(num - 5.5);
            } 
            return '2D6 + '+Math.round(num - 7)
        }
        if(num < 100) {
            if(this.isOneDie(num)) {
                return 'D20 + '+Math.round(num - 10.5);
            } 
            return '2D10 + '+Math.round(num - 11)
        }
        if(num < 200) {
            if(this.isOneDie(num)) {
                return 'D100 + '+Math.round(num - 50.5);
            } 
            return '2D20 + '+Math.round(num - 21)
        }

        return Math.round(num) +'';
    }

    public static isOneDie(num: number) {
        return Math.round(num * 2) % 2 === 1
    }
}