var balls;
function setup() {

    createCanvas(400, 400);
    balls = new Balls(5, width, height)
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
