import {CanvasImage} from "../helpers/CanvasImage.js";
import {random} from "../helpers/functions.js";

class Bottle extends CanvasImage {
    constructor(canvas, img) {
        super(img, 0, 0, 100, 200)
        let x = random(0, canvas.width)
        let y = random(0, canvas.height)

        this.moveTo(x, y)

        this.state = 'alive'
        setTimeout(() => this.kill(), 3000)
    }

    kill() {
        this.state = 'killed'
    }

    isAlive() {
        return this.state === 'alive';
    }
}

export {Bottle}