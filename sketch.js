
var monkey , monkey_running
var banana ,bananaImage, Obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  ObstacleImage = loadImage("obstacle.png");
  
  FoodGroup=createGroup();
  ObstacleGroup=createGroup();
 
}



function setup() {
  
//creatig Monkey
  monkey=createSprite(80,315,30,30);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  //ground
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
}


function draw() {
  background("lightBlue");

  if(ground.x<0){
    ground.x=ground.width/2;
  }
  //space key
  if(keyDown("space")) {
    monkey.velocityY=-12;
  }
  monkey.velocityY=monkey.velocityY+0.8;
  monkey.collide(ground);
  
  

 if (frameCount % 60 === 0){
   var Obstacle = createSprite(600,340,10,40);
   Obstacle.velocityX = -(6 + score/100);
   Obstacle.addImage(ObstacleImage);
   
   //
    //assign scale and lifetime to the obstacle           
   Obstacle.scale = 0.1;
      Obstacle.lifetime = 300;
 
   //add each obstacle to the group
    ObstacleGroup.add(Obstacle);
 }
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var Food = createSprite(600,120,40,10);
    Food.y = Math.round(random(80,120));
    Food.addImage(bananaImage);
    Food.scale = 0.09;
    Food.velocityX = -3;
    
     //assign lifetime to the variable
    Food.lifetime = 200;
    
    
    
    //add each cloud to the group
    FoodGroup.add(Food);
  }  
  drawSprites();
 
}