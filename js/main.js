var balls;
function setup() {

    let canvas = createCanvas(400, 400);
    canvas.parent('canvas');

    balls = new Balls(10, width, height)
}
function update() {
}
function draw() {
    background(0);


   balls.display(width, height)
   balls.update()
}

function windowResized() {
    resizeCanvas(400, 400);
}
