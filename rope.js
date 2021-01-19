class Rope{
    constructor(bodyA, pointB){
        var options={
        bodyA :bodyA,
        pointB : pointB,
       
        stiffness: 0
        
        }
        this.pointB= pointB;
        this.rope=Constraint.create(options);
        World.add(world,this.rope);
    }
    display(){
        var pointA = this.rope.bodyA;
        var pointB = this.pointB;

        line(pointA.position.x, pointA.position.y, pointB.x, pointB.y);


    }
}