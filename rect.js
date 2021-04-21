class Rect {
    constructor(x, y) {
      var option={
        isStatic:true
      }
      this.x=x;
      this.y=y;
      this.dustbinWidth=200;
      this.dustbinHeight=213;
      this.wallThickness=20;
     
      this.image=loadImage("dustbinEDIT.png")
      this.bottomBody=Bodies.rectangle(this.x,this.y,this.dustbinWidth,this.wallThickness,option);
      this.leftWallBody=Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, option);
      this.rightWallBody=Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, option);

      World.add(myWorld,this.bottomBody);
      World.add(myWorld,this.leftWallBody);
      World.add(myWorld,this.rightWallBody);
    }
    display(){
      var posBottom =this.bottomBody.position;
      var posLeft =this.leftWallBody.position;
      var posRight =this.rightWallBody.position;

      push();
      translate(posLeft.x, posLeft.y);
      rectMode(CENTER);
      strokeWeight(4);
      angleMode(RADIANS);
      rectMode(CENTER);
      fill("white");
      rotate(this.angle);
      rect(0, 0, this.wallThickness, this.dustbinHeight);
      pop();

      push();
      translate(posRight.x, posRight.y);
      rectMode(CENTER);
      strokeWeight(4);
      angleMode(RADIANS);
      rectMode(CENTER);
      fill("white");
      rotate(this.angle);
      rect(0, 0, this.wallThickness, this.dustbinHeight);
      pop();

      push();
      translate(posBottom.x, posBottom.y);
      rectMode(CENTER);
      strokeWeight(4);
      angleMode(RADIANS);
      imageMode(CENTER);
      fill("white");
      rotate(this.angle);
      image(this.image,0, -this.dustbinHeight/2,this.dustbinWidth,this.dustbinHeight);
      pop();
    }
  }
  