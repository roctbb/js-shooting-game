import {GameObject} from "./GameObject.js";

class CanvasImage extends GameObject {
    constructor(img, x, y, w, h) {
        super(x, y)
        this.width = w
        this.height = h
        this.image = img
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.x - this.width / 2, this.y - this.height / 2, this.width, this.height)
    }

    moveTo(x, y) {
        this.x = x
        this.y = y
    }

    intersects(x, y) {
        return this.x - this.width / 2 <= x && x <= this.x + this.width / 2 && this.y - this.height / 2 <= y && y <= this.y + this.height / 2
    }
}

export {CanvasImage}