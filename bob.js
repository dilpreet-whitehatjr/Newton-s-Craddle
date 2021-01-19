class Bob{
    constructor(x,y,radius){
        var options={
            'restitution':1,
            'friction':1,
            'density':1,
            'frictionAir':0,
            'isStatic': false
        }
       
        this.body = Bodies.circle(x,y,radius,options);
        this.radius= radius;
        World.add(world,this.body);
    }
    display(){
       push();
       translate(this.body.position.x,this.body.position.y)
        ellipseMode(RADIUS);
        fill("white");
        ellipse(0,0,this.radius);
        pop();
    }
}