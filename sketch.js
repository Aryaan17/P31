const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles = [];
var plinko = [];
var divisions = [];
var divisionHeight = 300;
var ground;


function setup() {
  var canvas = createCanvas(480,700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240, 680, 800, 20);
}

function draw() {
  background("#2C307A");  
  Engine.update(engine);

  for(var i = 0; i<=480; i = i + 80){
    divisions.push(new Division(i, 680-divisionHeight/2, 10, divisionHeight));
  }

  for(var k = 0; k< divisions.length; k++){
    divisions[k].display();
  }

  for(var j = 40; j<=440; j = j + 20){
    plinko.push(new Plinko(j, 80, 5));
  }

  for(var a = 0; a < plinko.length; a++){
    plinko[a].display();
  }

  ground.display();

  for(var i = 30; i<=450; i = i + 20){
    plinko.push(new Plinko(i, 120, 5));
  }

  for(var b = 0; b < plinko.length; b++){
    plinko[b].display();
  }

  for(var r = 40; r<=440; r = r + 20){
    plinko.push(new Plinko(r, 160, 5));
  }

  for(var b = 0; b < plinko.length; b++){
    plinko[b].display();
  }

  for(var i = 30; i<=450; i = i + 20){
    plinko.push(new Plinko(i, 200, 5));
  }

  for(var b = 0; b < plinko.length; b++){
    plinko[b].display();
  }
  for(var i = 40; i<=440; i = i + 20){
    plinko.push(new Plinko(i, 240, 5));
  }

  for(var b = 0; b < plinko.length; b++){
    plinko[b].display();
  }

  if(frameCount % 20 === 0){
    particles.push(new Particle(random(220, 260), 15, 5));
    console.log("Particle dropped");
  }

  for(var b = 0; b < particles.length; b++){
    particles[b].display();
  }



  //console.log(divisions);

  /*d1.display();
  d2.display();
  d3.display();
  d4.display();
  d5.display();
  d6.display();
  d7.display();*/


}