import {Riffle} from "./Riffle.js";
import {Mouse} from "./Mouse.js";
import {Bottler} from "./Bottler.js";
import {Score} from "./Score.js";

class Game {
    constructor(canvas, images) {
        this.canvas = canvas
        this.bottler = new Bottler(canvas, images.bottle)
        this.score = new Score(canvas)
        this.riffle = new Riffle(new Mouse(), this.bottler, this.score, images.cross)
        this.interval = undefined
    }

    start() {
        this.bottler.start()
        this.interval = setInterval(() => this.frame(), 30)
    }

    stop() {
        clearInterval(this.interval)
        this.bottler.stop()
    }

    frame() {
        const ctx = this.canvas.getContext('2d')

        this.makeFullscreen(ctx)
        this.bottler.draw(ctx)
        this.riffle.draw(ctx)
        this.score.draw(ctx)
    }

    makeFullscreen(ctx) {
        this.canvas.width = document.body.clientWidth
        this.canvas.height = document.body.clientHeight

        ctx.fillStyle = "#f5f5dc"
        ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
    }
}

export {Game}