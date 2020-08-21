const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

const Constraint = Matter.Constraint;

var block1, block2, block3 ,block4, block5, block6, block7, block8, block9, block10, block11,
block12, block13, block14, block15;
var ground;
var polygon, polyi;
var score = 0;

function preload(){
   polyi = loadImage("polygon.png")
}

function setup() {
  createCanvas(800,400); 

  var pol_opt = {
    'restitution':0.8,
  }
  polygon = createSprite(100,350,50,180,pol_opt);
  polygon.addImage(polyi);
  polygon.scale =0.4;


	engine = Engine.create();
  world = engine.world;

block1 = new Box(580,320,30,40);
block2 = new Box(550,320,30,40);
block3 = new Box(520,320,30,40);
block4 = new Box(490,320,30,40);
block5 = new Box(460,320,30,40);
block6 = new Box(430,320,30,40);
block7 = new Box(610,320,30,40);
block8 = new Box(640,320,30,40);

block9 = new Box(490,280,30,40);
block10 = new Box(520,280,30,40);
block11 = new Box(580,280,30,40);
block12 = new Box(550,280,30,40);

block13 = new Box(520,240,30,40);
block14 = new Box(550,240,30,40);

block15 = new Box(535,200,30,40);

ground = new Ground(550,350,400,20);

chain1 = new Chain(this.polygon,{x:200, y:310});


}

function draw() {
  background(255,255,255);  
  drawSprites();

  text("Score : " + score, 120,110);

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();

  block9.display();
  block10.display();
  block11.display();
  block12.display();

  block13.display();
  block14.display();

  block15.display();

  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();

  ground.display();

  chain1.display();
 
  drawSprites();
}

function mouseDragged() {
  Matter.Body.setPosition(polygon.body,{x: mouseX, y: mouseY});
}

function mouseReleased(){
   chain1.fly();
}

