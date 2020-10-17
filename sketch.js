
var ground;
var Wall, Wall2, Wall3;
var Paper;
var slingshot;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   ground = new Ground(600, 600, 1200, 20);
    Wall = new wall();
  Paper = new paper(200,200,40);
  slingshot = new chain(Paper.body,{x:200, y:100});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255, 255, 255);

  ground.display();
 
  Wall.display();
 slingshot.display()
 Paper.display()
  
 
  drawSprites();
 
}

function mouseDragged(){
  Matter.Body.setPosition(Paper.body,{x:mouseX, y:mouseY})
  
  }

function mouseReleased(){
  slingshot.fly();
  
  }
  


