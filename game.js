let canvasW;
let canvasH;

let mouseX = 0;
let mouseY = 0;

const canvas = document.getElementById("screen");

let bottles = []
// сдесь будем хранить счет
let score = 0
let loaded_images = 0;

const images = {
    "cross": "images/cross.png",
    "bottle": "images/bottle.png"
}

function loadAllImages() {
    Object.keys(images).forEach((image_title) => {
        let img = new Image()

        img.addEventListener("load", () => {
            loaded_images += 1
            if (loaded_images === Object.keys(images).length) {
                startGame()
            }
        });

        img.src = images[image_title]
        images[image_title] = img
    })
}

function random(a, b) {
    return Math.random() * (b - a) + a
}

function createBottle() {
    const bottle = {
        x: random(0, canvasW),
        y: random(0, canvasH),
    }
    bottles.push(bottle)
}

function removeOldBottles() {
    if (bottles.length > 3) {
        bottles.shift()
    }
}

function mouseClick(e) {
    makeShot(e.clientX, e.clientY)
}

// функция для обработки выстрела
function makeShot(x, y) {
    let currentSize = bottles.length
    bottles = bottles.filter(bottle => !(bottle.x - 50 <= x && x <= bottle.x + 50 && bottle.y - 100 <= y && y <= bottle.y + 100))

    // прибавляем к счету количество бутылок, по которым мы попали
    score += currentSize - bottles.length
}

function makeFullscreen() {
    canvas.width = document.body.clientWidth
    canvas.height = document.body.clientHeight

    canvasW = canvas.width
    canvasH = canvas.height
}

function saveMousePosition(e) {
    mouseX = e.clientX
    mouseY = e.clientY
}

function drawBackground(ctx) {
    ctx.fillStyle = "#f5f5dc"
    ctx.fillRect(0, 0, canvasW, canvasH)
}

function drawCursor(ctx) {
    // рисуем курсор (размер 50 на 50)
    ctx.drawImage(images.cross, mouseX - 25, mouseY - 25, 50, 50)
}

function drawBottles(ctx) {
    bottles.forEach((bottle) => {
        // рисуем цели (размер 100 на 200)
        ctx.drawImage(images.bottle, bottle.x - 50, bottle.y - 100, 100, 200)
    })
}

// функция для вывода счета на экран
function drawScore(ctx) {
    ctx.font = "48px serif";
    let textSize = ctx.measureText(score)
    ctx.fillText(score, canvasW - 50 - textSize.width, 50);
}

function drawFrame() {
    makeFullscreen()
    removeOldBottles()

    const ctx = canvas.getContext("2d")

    drawBackground(ctx)
    drawBottles(ctx)
    drawCursor(ctx)
    drawScore(ctx)
}

function startGame() {
    setInterval(drawFrame, 20)
    setInterval(createBottle, 1000)
    addEventListener("mousemove", saveMousePosition)
    addEventListener("mousedown", mouseClick)
}

loadAllImages()