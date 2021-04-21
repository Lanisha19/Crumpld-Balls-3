
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var ball;
var ground;
var dustbin,dustbinImg;
var leftRect,rightRect;
var slingShot;
var myWorld,myEngine;



function setup() {
	createCanvas(1000, 400);

  myEngine = Engine.create();
	myWorld = myEngine.world;
 
  ball = new Ball(200,355,70);
  ground = new Ground(500,380,1000,20);
  
  dustbin = new Rect(800,360);

  slingShot = new SlingShot(ball.body,{x:250, y:50});
  
}


function draw() {
  background("grey");
  Engine.update(myEngine);
 

  drawSprites();
  ball.display();
  ground.display();
  dustbin.display();
  slingShot.display();
  //leftRect.display();
  //rightRect.display();
 
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingShot.fly();
}


