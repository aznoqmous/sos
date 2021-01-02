import Generator from "./generator";

export default class PlanetGenerator {
    static generate(secret){
        secret = Generator.getSaltedArr(secret)
        return {
            color: Generator.getColor(secret.join('')),
            size: parseInt(secret[0])
        }
    }
}