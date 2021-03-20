const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var engine, world;

var bob;

function setup(){
  createCanvas(400, 400);

  engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic: true
  }
  bob = Bodies.rectangle(120, 50, 30, 40, options);
  World.add(world, bob);

  console.log(bob.position.x);
  console.log(bob.position.y);

}

function draw(){
  background("grey");
  Engine.update(engine);

  rectMode(CENTER);
  rect(bob.position.x, bob.position.y, 50, 50);



}