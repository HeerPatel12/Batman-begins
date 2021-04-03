const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var engine,world;


function preload(){
thunderImage=loadImage("images/thunderbolt/1.png")


}
function setup(){
   createCanvas(600,600);
   
   engine=Engine.create();
world=engine.world;
   
   drop = createSprite(100,100,5,5);
   drop.shapeColor="blue";

  if(frameCount%200===0){
   for(var i=0; i<maxDrops;i++){
     drop.push(new createDrop(random(0,400), random(0,400)));
  }
       }
    
}

function draw(){
    background("black")
    Engine.update(engine)
   
drawSprites();
}   

