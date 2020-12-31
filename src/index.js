import DOM from "./dom";
import Character from "./entities/character";
import Renderer from "./renderer";
import Canvas from "./canvas";
import Planet from "./entities/planet";
import md5 from 'md5'

DOM.loaded()
    .then(()=>{



        let canvas = new Canvas({
            width: document.body.getBoundingClientRect().width,
            height: document.body.getBoundingClientRect().height
        })

        let renderer = new Renderer(canvas)


        let size = 20
        let countX = canvas.options.width / size
        let countY = canvas.options.height / size

        for(let y = 0; y < countY; y++){
        for(let x = 0; x < countX; x++){

            renderer.addPlanet(new Planet({
                secret: md5(x + ' ' + y),
                x: x * size - size * countX / 2,
                y: y * size - size * countY / 2
            }))
            renderer.addCharacter(new Character({
                secret: md5(x + ' ' + y),
                x: x * size - size * countX / 2,
                y: y * size - size * countY / 2
            }))
        }
        }


        renderer.play()

        DOM.wheelup(()=>{
            canvas.options.zoom *= 1.1
        })
        DOM.wheeldown(()=>{
            canvas.options.zoom /= 1.1
        })
    })
