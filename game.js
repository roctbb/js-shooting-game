import {loadAllImages} from './helpers/functions.js';
import {Game} from "./objects/Game.js";


const IMAGES = {
    "cross": "images/cross.png",
    "bottle": "images/bottle.png"
}


const canvas = document.getElementById("screen");
loadAllImages(IMAGES).then(() => {
    let game = new Game(canvas, IMAGES)
    game.start()
})