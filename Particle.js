class Particle {
    constructor(x, y, radius) {
        var options = {
            'restitution':0.8,
            'friction': 0.1,
            'density': 1
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        noStroke();
        fill(random(0, 255), random(0, 255), random(0, 255))
        ellipseMode(CENTER);
        ellipse(pos.x, pos.y, this.radius +5);
    }
}