import CharacterGenerator from "../generators/character-generator";
import PlanetGenerator from "../generators/planet-generator";

export default class Planet {
    constructor(options) {
        options = Object.assign({
            x: 0,
            y: 0,
            secret: 'sos'
        }, options)
        for(let key in options) this[key] = options[key]
        this.skeleton = PlanetGenerator.generate(this.secret)
    }
}