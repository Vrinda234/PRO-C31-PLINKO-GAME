const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300;

function setup() {
  createCanvas(800,700);
  engine = Engine.create();
  world = engine.world;

  //ground
  ground1 = new ground(400,690,800,20)

  for (var k = 0; k <= width; k = k +80){
    divisions.push(new division(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var j=75; j<width; j=j+50){
    plinkos.push(new plinko(j,74))
  }

  for (var j=50; j<=width-10; j=j+50){
    plinkos.push(new plinko(j,175))
  }

  for (var j=75; j<=width; j=j+50){
    plinkos.push(new plinko(j,275))
  }
  
  for (var j=50; j<=width-10; j=j+50){
    plinkos.push(new plinko(j,375))
  }

  Engine.run(engine);
}


function draw() {
  rectMode(CENTER)
  background(0);  

  drawSprites();

  for(var n = 0; n<divisions.length; n++){
    divisions[n].display();
  }

  if(frameCount%60===0){
    particles.push(new particle(random(width/2-10, width/2+10), 10, 10));
  }

  for(var h=0; h<particles.length; h++){
    particles[h].display();
  }

  for(var j=0; j<plinkos.length; j++){
    plinkos[j].display();
  }

  ground1.display();
  
}


  

  

