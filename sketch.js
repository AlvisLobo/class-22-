const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;

var tower,towerImg;
var backgroundImg;

var cannon1

function preload() {
 towerImg=loadImage("./assets/tower.png");
 backgroundImg=loadImage("./assets/background.gif")

}
function setup() {



  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;

  cannon1=new Cannon(180,110,130,100);  


 options={
 isStatic:true
 }
 


 ground= Bodies.rectangle(0,height-1, width*2,1,options);
 World.add(world,ground);
 

 
tower=Bodies.rectangle(160,350,160,310,options);
World.add(world,tower); 

}



function draw() {
  //background(backgroundImg);

image(backgroundImg,0,0,width,height);

  Engine.update(engine);
 
 rect(ground.position.x, ground.position.y,width*2,1);
 
 push()
 imageMode(CENTER);
 image(towerImg,tower.position.x,tower.position.y,160,310); 
   pop(); 

   cannon1.show(); 
}
 
