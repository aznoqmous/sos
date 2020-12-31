export default class Renderer {

    constructor(canvas) {
        this.canvas = canvas

        this.planets = []
        this.characters = []

        this.playing = false
    }

    play(){
        this.playing = true
        this.loop()
    }
    stop(){
        this.playing = false
    }
    loop(){
        this.render()
        if(this.playing) requestAnimationFrame(this.loop.bind(this))
    }

    render(){
        this.canvas.fill()
        this.planets.map(p => {
            this.renderPlanet(p)
        })
        this.characters.map(c => {
            this.renderCharacter(c)
        })
    }

    addPlanet(planet){
        this.planets.push(planet)
    }

    addCharacter(character){
        this.characters.push(character)
    }

    renderPlanet(planet){
        let x = planet.x
        let y = planet.y
        this.canvas.setFill(planet.skeleton.color)
        this.canvas.arc(x, y, planet.skeleton.size)
    }

    renderCharacter(character){

        let x = character.x - character.skeleton.width / 2
        let y = character.y - character.skeleton.height

        /**
         * head
         */
        this.canvas.setFill(character.skeleton.headColor)
        this.canvas.fillRect(
            x + character.skeleton.width / 2 - character.skeleton.headWidth / 2,
            y,
            character.skeleton.headWidth,
            character.skeleton.headHeight
        )

        /**
         * body
         */
        this.canvas.setFill(character.skeleton.bodyColor)
        this.canvas.fillRect(
            x + character.skeleton.width / 2 - character.skeleton.bodyWidth / 2,
            y + character.skeleton.headHeight,
            character.skeleton.bodyWidth,
            character.skeleton.bodyHeight
        )

        /**
         * arms
         */
        this.canvas.setFill(character.skeleton.armColor)
        this.canvas.fillRect(
            x,
            y + character.skeleton.headHeight + this.getBreath(),
            character.skeleton.armWidth,
            character.skeleton.armHeight
        )
        this.canvas.fillRect(
            x + character.skeleton.armWidth + character.skeleton.bodyWidth,
            y + character.skeleton.headHeight + this.getBreath(),
            character.skeleton.armWidth,
            character.skeleton.armHeight
        )

        /**
         * legs
         */
        this.canvas.setFill(character.skeleton.legColor)
        this.canvas.fillRect(
            x + character.skeleton.width / 2 - character.skeleton.bodyWidth / 2,
            y + character.skeleton.headHeight + character.skeleton.bodyHeight,
            character.skeleton.legWidth,
            character.skeleton.legHeight
        )
        this.canvas.fillRect(
            x + character.skeleton.width / 2 + character.skeleton.bodyWidth / 2 - character.skeleton.legWidth,
            y + character.skeleton.headHeight + character.skeleton.bodyHeight,
            character.skeleton.legWidth,
            character.skeleton.legHeight
        )
    }

    getBreath(time=1000){
        return (Math.sin(Date.now() / time * 2 ) + 1) / 2
    }

}