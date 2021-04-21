class SlingShot {
    constructor(bodyA,pointB){
     var option = {
         bodyA : bodyA,
         pointB : pointB,
         length : 10
         
     }
     this.pointB = pointB;
     this.sling = Constraint.create(option);
     World.add(myWorld, this.sling);
    }
    fly(){
        this.sling.bodyA = null;
    }
    display(){
        if(this.sling.bodyA){
          var bodyA = this.sling.bodyA.position;
          var pointB = this.pointB;
          strokeWeight(4);
          line(bodyA.x, bodyA.y, pointB.x, pointB.y);
        }
    }
}