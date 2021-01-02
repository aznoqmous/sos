import Generator from "./generator";

export default class SpaceshipGenerator {
    static generate(secret){
        let color = Generator.getColor(secret)
        secret = Generator.getSaltedArr(secret)

        return {
            noseHeight: secret[0] + 1,
            noseWidth: secret[1] + 1,
            cabinHeight: secret[2] + 1,
            cabinWidth: secret[3] + 3,
            bodyHeight: secret[4] + 4,
            bodyWidth: secret[5] + 4,
            wing: secret[6] + 1,
            engineHeight: secret[7] + 1,
            engineWidth: secret[8] + 1,
            tail: secret[9] + 1,
            color: color
        }
    }
}