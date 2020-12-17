const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
var canvas,engine,world,ball;
var box1,box2,ground,pig1,box3,log1;

function setup(){
 canvas=createCanvas(1200,400);
 engine=Engine.create();
 world=engine.world;
 
box1 = new Box(700, 320, 70,70);
box2 = new Box(920,320,70,70);
ground = new Ground(600,height,1200,20);
pig1 = new Pig (810,350);

log1 = new Log (810,260,300, PI/2);




}

function draw(){
    background(0);
    Engine.update(engine);
   // ellipseMode(RADIUS);
   // ellipse(ball.position.x,ball.position.y,20,20);
    box1.display();
    box2.display();  
    ground.display(); 
    pig1.display(); 
    log1.display();
}

