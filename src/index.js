import DOM from "./dom";
import Character from "./entities/character";
import Renderer from "./renderer";
import Canvas from "./canvas";

import Planet from "./entities/planet";
import md5 from 'md5'
import Spaceship from "./entities/spaceship";

DOM.loaded()
    .then(()=>{

        let canvas = new Canvas({
            width: document.body.getBoundingClientRect().width,
            height: document.body.getBoundingClientRect().height
        })
        let renderer = new Renderer(canvas)

        generateRandomEntities(renderer)

        renderer.addSpaceship(new Spaceship({}))
        renderer.play()

        DOM.wheelup(()=>{
            canvas.options.zoom *= 1.1
        })
        DOM.wheeldown(()=>{
            canvas.options.zoom /= 1.1
        })

        function generateRandomEntities(){
            let countX = 20
            let size = canvas.options.width / countX
            let countY = canvas.options.height / size
            for(let y = 0; y < countY; y++){
                for(let x = 0; x < countX; x++){
                    renderer.addSpaceship(new Spaceship({
                        secret: md5(x+'o'+y),
                        x: - canvas.options.width/2 + x * size,
                        y: - canvas.options.height/2 + y * size
                    }))
                    renderer.addPlanet(new Planet({
                        secret: md5(x+'o'+y),
                        x: - canvas.options.width/2 + x * size,
                        y: - canvas.options.height/2 + y * size
                    }))
                    renderer.addCharacter(new Character({
                        secret: md5(x+'o'+y),
                        x: - canvas.options.width/2 + x * size,
                        y: - canvas.options.height/2 + y * size
                    }))
                }
            }
        }
    })

