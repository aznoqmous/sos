import CharacterGenerator from "../generators/character-generator";

export default class Character {
    constructor(options) {
        options = Object.assign({
            x: 0,
            y: 0,
            secret: 'sos'
        }, options)
        for(let key in options) this[key] = options[key]
        this.skeleton = CharacterGenerator.generate(this.secret)
    }
}