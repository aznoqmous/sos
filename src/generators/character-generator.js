import Generator from "./generator";
import Utils from "../utils";

export default class CharacterGenerator {

    static generate(secret){
        secret = Generator.getSaltedArr(secret, 10)

        let headWidth = Utils.minMax(secret[0] / 9 * 4, 1)
        let headHeight = Utils.minMax(secret[1] / 9 * 4, headWidth * 0.5, headWidth * 2)
        let bodyWidth = Utils.minMax(secret[2] / 9 * 8, headWidth)
        let bodyHeight = Utils.minMax(secret[3] / 9 * 8, bodyWidth)
        let legWidth = Utils.minMax(secret[4] / 9 * bodyWidth / 2, 1, Math.floor((bodyWidth-1) / 2))
        let legHeight = secret[5] / 9 * 7 + 1
        let armHeight = Utils.minMax((secret[7] / 9) * bodyHeight, 1, bodyHeight)
        let armWidth  = Utils.minMax((secret[6] / 9) * bodyWidth / 2, 1, armHeight / 2)

        let width = bodyWidth + armWidth * 2
        let height = headHeight + bodyHeight + legHeight

        let headColor = `hsl(${secret[1] * secret[2] * secret[3] % 255 * 255}, 30%, 60%)`
        let bodyColor = `hsl(${secret[4] * secret[5] * secret[6] % 255 * 255}, 30%, 70%)`
        let legColor  = `hsl(${secret[7] * secret[8] * secret[9] % 255 * 255}, 30%, 50%)`
        let armColor  = `hsl(${secret[7] * secret[8] * secret[9] % 255 * 255}, 30%, 50%)`

        return {
            headWidth: Math.floor(headWidth),
            headHeight: Math.floor(headHeight),
            bodyWidth: Math.floor(bodyWidth),
            bodyHeight: Math.floor(bodyHeight),
            legWidth: Math.floor(legWidth),
            legHeight: Math.floor(legHeight),
            armHeight: Math.floor(armHeight),
            armWidth: Math.floor(armWidth),
            width: Math.floor(width),
            height: Math.floor(height),
            headColor,
            bodyColor,
            legColor,
            armColor
        }

    }
}