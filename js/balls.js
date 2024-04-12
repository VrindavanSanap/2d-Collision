class Balls { 
    constructor(n_balls, width_, height_) {
        this.height = height_
        this.width=width_ 
        this.n_balls = n_balls;
        this.balls = []
        for (let i = 0; i < n_balls; i++){
            this.balls.push(new Ball(this.width, this.height))
        }
    }
    display() {
        for (let i = 0; i < this.n_balls;i++) {
            this.balls[i].display()
        }
    }
    update() { 
        for (let i = 0; i < this.n_balls; i++) {
            for (let  j = i + 1; j < this.n_balls; j++) {
                this.balls[i].check_collision(this.balls[j])
            }
        }
        for (let i = 0; i < this.n_balls;i++) {
            this.balls[i].update()
        }
    }
}