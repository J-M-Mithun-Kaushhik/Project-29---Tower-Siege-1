class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.3,
            length: 10,
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);

    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;

            line(pointA.x + 20, pointA.y + 20, pointB.x, pointB.y);
            }
        }
    }