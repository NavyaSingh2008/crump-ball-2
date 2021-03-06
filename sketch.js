const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;
var ground;
var line1,line2,line3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


	
   paper = new Paper(100,590,20);
   ground = new Ground(400,600,800,10);
   line1 = new Bucket(590,590,150,10);
   line2 = new Bucket(510,550,10,80);
   line3 = new Bucket(670,550,10,80);
  
}


function draw() {
  background(0);
  Engine.update(engine);
  paper.display();
  ground.display();
  line1.display();
  line2.display();
  line3.display();
  drawSprites();
  paperObject.display();
  dustbingreenObject.display();
  groundObject.display();
  
}

function keyPressed() {
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(paper.body,paper.body.position,{x:10,y:-20});

  
  }
}