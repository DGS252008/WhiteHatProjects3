const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var maxdrops = 100

function preload(){
    
}

function setup(){
   createCanvas(500, 800)
    
   engine = Engine.create();
   world = engine.world;

   Engine.run(engine);

   for(i=0; i<100; i++){
       Drops.push(new createDrop(random(0, 400), random(0, 400)));
   }
}

function draw(){
    background(33, 33, 33);

}   



