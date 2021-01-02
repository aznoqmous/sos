export default class Renderer {

    constructor(canvas) {
        this.canvas = canvas

        this.planets = []
        this.characters = []
        this.spaceships = []

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
        this.spaceships.map(s => {
            this.renderSpaceship(s)
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

    addSpaceship(spaceship){
        this.spaceships.push(spaceship)
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

    renderSpaceship(spaceship){
        let s = spaceship.skeleton
        let height = s.noseHeight + s.cabinHeight + s.bodyHeight + s.engineHeight
        let width = s.noseWidth + s.cabinWidth + s.bodyWidth + s.engineWidth
        let x = spaceship.x + width / 2
        let y = spaceship.y - height / 2


        this.canvas.setFill(s.color)

        // nose
        this.canvas.fillRect(
            x - s.noseWidth / 2, y - height / 2,
            s.noseWidth, s.noseHeight
        )
        // cabin
        this.canvas.fillRect(
            x - s.cabinWidth / 2, y - height / 2 + s.noseHeight,
            s.cabinWidth, s.cabinHeight
        )
        // body
        this.canvas.fillRect(
            x - s.bodyWidth / 2, y - height / 2 + s.noseHeight + s.cabinHeight,
            s.bodyWidth, s.bodyHeight
        )
        // engine
        this.canvas.fillRect(
            x - s.engineWidth / 2, y + height / 2 - s.engineHeight,
            s.engineWidth, s.engineHeight
        )
        // wings
        this.canvas.fillRect(
            x - s.bodyWidth / 2 - s.wing, y - height / 2 + s.noseHeight + s.cabinHeight,
            s.wing, s.bodyHeight - 1
        )
        this.canvas.fillRect(
            x + s.bodyWidth / 2, y - height / 2 + s.noseHeight + s.cabinHeight,
            s.wing, s.bodyHeight - 1
        )

    }

    getBreath(time=1000){
        return ( Math.sin(Date.now() / time * 2 ) + 1 ) / 2
    }

    clear(){
        this.characters = []
        this.planets = []
    }
}