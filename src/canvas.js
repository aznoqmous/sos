import DOM from "./dom";

export default class Canvas {

    constructor(options={}) {
        this.options = Object.assign({
            width: 32,
            height: 32,
            background: '#000',
            zoom: 3
        }, options)

        this.build()
    }

    build(){
        this.c = document.createElement('canvas')
        this.c.width = this.options.width
        this.c.height = this.options.height
        this.ctx = this.c.getContext('2d')

        document.body.appendChild(this.c)

        DOM.setStyles({
            imageRendering: 'pixelated'
        }, this.c)

        this.fill()
    }

    setFill(color){
        this.ctx.fillStyle = color
    }

    setStroke(color) {
        this.ctx.strokeStyle = color
    }

    fill(color=null){
        if(color) this.setFill(color)
        else this.setFill(this.options.background)
        this.ctx.fillRect(0, 0, this.c.width, this.c.height)
    }

    arc(x, y, size){
        this.ctx.beginPath()
        x = this.c.width / 2 + x * this.options.zoom
        y = this.c.height / 2 + y * this.options.zoom
        size *= this.options.zoom
        this.ctx.arc(x, y, size, 0, 2 * Math.PI)
        this.ctx.fill()
    }

    fillRect(x, y, w, h){
        x = this.c.width / 2 + x * this.options.zoom
        y = this.c.height / 2 + y * this.options.zoom

        w *= this.options.zoom
        h *= this.options.zoom

        this.ctx.fillRect(x, y, w, h)
    }

}