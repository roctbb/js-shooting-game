import {CanvasImage} from "../helpers/CanvasImage.js";

class Riffle extends CanvasImage {
    constructor(mouse, bottler, score, img) {
        super(img, 0, 0, 50, 50)
        this.mouse = mouse
        this.bottler = bottler

        this.mouse.onClick((x, y) => {
            this.bottler.get().forEach((bottle) => {
                if (bottle.intersects(x, y)) {
                    bottle.kill()
                    score.addPoints(1)
                }
            });
        })
    }

    draw(ctx) {
        this.moveTo(this.mouse.X(), this.mouse.Y())
        super.draw(ctx)
    }
}

export {Riffle}