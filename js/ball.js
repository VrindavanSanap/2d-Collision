class Ball {
    constructor(height, width, radius = 20, x = null, y = null, vx = null, vy = null) {
        this.bounds = createVector(width, height)
        this.radius = radius;
        this.bounds.sub()
        this.pos = createVector(Math.random() * (this.bounds.x - this.radius),
            Math.random() * (this.bounds.y - this.radius));
        this.vel = createVector(Math.random() * 10, Math.random() * 10);
        if (x) {
            this.pos = createVector(x, y)
        }
        if (vx) {

            this.vel = createVector(vx, vy);
         }

    }

    update() { 
        if (this.pos.x > this.bounds.x -this.radius || this.pos.x < this.radius) {
            this.vel.x *= -1;
        }
        
        if (this.pos.y > this.bounds.y -this.radius|| this.pos.y < this.radius) {
            this.vel.y *= -1;
        }
        this.pos.add(this.vel)
    }

    display() {
        fill(255)
        stroke(0,0)
        circle(this.pos.x, this.pos.y, this.radius * 2);
    }
    highlight() {
        fill(255,80,80)
        circle(this.pos.x, this.pos.y, this.radius * 2);
    }
    check_collision(other) {
        let dist_ = p5.Vector.dist(other.pos, this.pos)
        if ( dist_< this.radius + other.radius) {
            this.highlight()
            other.highlight()
            let norm = p5.Vector.sub(this.pos , other.pos)
            norm.normalize()
            console.log(norm)
            let this_norm = p5.Vector.dot(this.vel,norm)
            let other_norm= p5.Vector.dot(other.vel,norm)
            console.log(this_norm,other_norm)
            let sv = p5.Vector.mult(norm, other_norm - this_norm)
            this.vel = p5.Vector.add( this.vel, sv);
            other.vel = p5.Vector.sub(other.vel, sv);
        } else {

        }
    }
}