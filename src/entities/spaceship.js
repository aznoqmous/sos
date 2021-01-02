import SpaceshipGenerator from "../generators/spaceship-generator";

export default class Spaceship {
    constructor(options) {
        options = Object.assign({
            x: 0,
            y: 0,
            th: 0,
            secret: 'sinospace'
        }, options)
        for(let key in options) this[key] = options[key]
        this.skeleton = SpaceshipGenerator.generate(this.secret)
    }
}