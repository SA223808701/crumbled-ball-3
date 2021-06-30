class Slingshot{
    constructor(bodyA, pointB){
        var options = {
    bodyA: bodyA,
    pointB: pointB,
    stiffness: 0.04,
    lenght:10        

        }
        this.pointB = pointBthis.Slingshot = Constraint.create(options);
        World.add(world, this.Slingshot);
    }
    fly(){
        this.Sligshot.bodyA=null;
    }

    display(){
        if(this.Slingshot.bodyA){
            var pointA = this.Slingshot.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
           line(point.x, pointA.y, pointB.x, pointB.y);


        }

    }




}