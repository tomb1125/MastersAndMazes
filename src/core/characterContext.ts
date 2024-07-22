import { Utils } from "./utils";

export class CharacterContext {
    public static level: number = 1;

    public static getDPS() {
        return Utils.getDPS(CharacterContext.level);
    }
}