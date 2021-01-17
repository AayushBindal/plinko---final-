const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
 
var particle;
var plinkos = [];
var divisions = [];
var score = 0;
var PLAY = 0;
var END = 1;
var gameState = PLAY;
var count = 0;

var divisionHeight=300;
var score =0;

function setup() {
  createCanvas(800, 730);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

    for (var k = 0; k < width; k = k + 80) {
      divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
    } 
     if(keyCode === 32){
    
  }

    for (var j = 75; j < width; j=j+50) {
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j < width-10; j=j+50) {
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) {
       plinkos.push(new Plinko(j,275));
    }
     for (var j = 50; j < width-10; j=j+50) {   
       plinkos.push(new Plinko(j,375));
    }
}

function draw() {
  background("black");
  textSize(20);
  fill(255);
  text("score: "+score, 20, 20);
  Engine.update(engine);

   for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();
   }

   for (var k = 0; k < divisions.length; k++) {
     divisions[k].display();
   }

   if(count === 2){
    console.log("dh");
   }
   if(count>5){
     gameState = END;
     console.log("gameState is end");
   }
   ground.display();
   
  if(particle != null){
     particle.display();

     if(particle.body.position.y > 600){
      if(particle.body.position.x < 300){
        score = score +500;
        particle = null;
      }
     }
     if(particle.body.position.y > 600){
      if(particle.body.position.x >301 &&  particle.body.position.x < 600){
        score = score +200;
        particle = null;
      }
     }
     if(particle.body.position.y > 600 && particle.body.position.x >601 &&  particle.body.position.x < 900){
      score = score +100;
      particle = null;
 }
    }
}

function keyPressed(){
  count++;
  console.log(count);
  if(gameState ===  PLAY && keyCode === 32){
    particle = new Particle(mouseX, 10, 10, 10);
}
}