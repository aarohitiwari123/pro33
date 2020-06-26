var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

var particle;
var turns = 0;
var divisions = [];
var particles = [];
var plinkos = [];
var divisionHeight=300;
var score =0;
var gameState = "start";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,height,width,5);
  
   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }
}

function draw() {
  background("black");
  textSize(20)
  text("50",20,600);
  text("300",100,600);
  text("200",180,600);
  text("250",260,600);
  text("50",350,600);
  text("100",420,600);
  text("50",510,600);
  text("100",580,600);
  text("250",660,600);
  text("200",740,600);

  text("Score : "+score,20,30);
  Engine.update(engine);
 
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   /*if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
   }*/
   
   if(particle!=null){
     particle.display();
     if(particle.body.position.y > 760){
       
       if(particle.body.position.x > 0 && particle.body.position.x < 80){
        score = score + 50;
        particle = null;
        if(turns>= 5) gameState = "end";
       }
     }
   }

   if(particle!=null){
    particle.display();

    if(particle.body.position.y > 760){
      if(particle.body.position.x > 80 && particle.body.position.x < 160){
       score = score + 300;
       particle = null;
       if(turns>= 5) gameState = "end";
      }
    }
  }
  if(particle!=null){
    particle.display();

    if(particle.body.position.y > 760){
      if(particle.body.position.x > 160 && particle.body.position.x < 240){
       score = score + 200;
       particle = null;
       if(turns>= 5) gameState = "end";
      }
    }
  }
  if(particle!=null){
    particle.display();

    if(particle.body.position.y > 760){
      if(particle.body.position.x > 240 && particle.body.position.x < 320){
       score = score + 250;
       particle = null;
       if(turns>= 5) gameState = "end";
      }
    }
  }
  if(particle!=null){
    particle.display();

    if(particle.body.position.y > 760){
      if(particle.body.position.x > 320 && particle.body.position.x < 400){
       score = score + 50;
       particle = null;
       if(turns>= 5) gameState = "end";
      }
    }
  }
  if(particle!=null){
    particle.display();

    if(particle.body.position.y > 760){
      if(particle.body.position.x > 400 && particle.body.position.x < 480){
       score = score + 100;
       particle = null;
       if(turns>= 5) gameState = "end";
      }
    }
  }
  if(particle!=null){
    particle.display();

    if(particle.body.position.y > 760){
      if(particle.body.position.x > 480 && particle.body.position.x < 560){
       score = score + 50;
       particle = null;
       if(turns>= 5) gameState = "end";
      }
    }
  }
  if(particle!=null){
    particle.display();

    if(particle.body.position.y > 760){
      if(particle.body.position.x > 560 && particle.body.position.x < 640){
       score = score + 100;
       particle = null;
       if(turns>= 5) gameState = "end";
      }
    }
  }
  if(particle!=null){
    particle.display();

    if(particle.body.position.y > 760){
      if(particle.body.position.x > 640 && particle.body.position.x < 720){
       score = score + 250;
       particle = null;
       if(turns>= 5) gameState = "end";
      }
    }
  }
  if(particle!=null){
    particle.display();

    if(particle.body.position.y > 760){
      if(particle.body.position.x > 720 && particle.body.position.x < 800){
       score = score + 200;
       particle = null;
       if(turns>= 5) gameState = "end";
      }
    }
  }

   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   gameEnd();
}

function mousePressed(){
  if(gameState !== "end"){
    turns++;
    particle = new Particle(mouseX,10,10,10)
  }
}

function gameEnd(){
  if(gameState === "end"){
    textSize(55);
    text("GAME OVER",200,250);
  }
}