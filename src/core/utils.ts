export class Utils {
    public static DPS: number = 10;

    public static random(): number {
        return Math.random();
    };

    //since High Accuracy and Low Accuracy attacks are easily exploitable. Thus we provide bonus to Medium Accuracy attacks.
    public static getDPSCoefficient(chance: number): number {
        return 1 - 0.2 * Math.abs(0.5 - chance);
    }


    //TODO continue from here
    public static getRandomWeightedObject(objectList: [any]): any {
        return 0;
    }

}