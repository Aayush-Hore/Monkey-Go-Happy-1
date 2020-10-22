
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var survivalTime = 0;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 createCanvas(600,600); 
 monkey = createSprite(80,315,20,20);
monkey.addAnimation("moving",monkey_running);
 monkey.scale = 0.1 
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2
  console.log(ground.x);
 
  FoodGroup = new Group()
  obstacleGroup = new Group()
}


function draw() {
background(255,255,255)
 stroke("white")
  textSize(20)
  fill("white")
  text("Score :"+score,500,50)
  
  stroke("black")
  textSize(20)
  fill("black")
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time :"+survivalTime,100,50)
//adding infinite ground effect 
  ground.x = ground.width/2
   //adding that the monkey jumps when space is pressed
  if(keyDown("space")&& monkey.y >= 300){
    monkey.velocityY = -15
  }
  //adding gravity
  monkey.velocityY = monkey.velocityY + 0.5
  //making the monkey collide
  monkey.collide(ground)
  //calling the functions
  food();
  obstacles(); 
  
  
  drawSprites();
}
function food(){
  if(frameCount%80 === 0){
   banana = createSprite(200,120,10,10) 
   banana.y = Math.round(random(120,200))
  banana.addImage(bananaImage)
    banana.scale = 0.1
  banana.velocityX = -4
   banana.lifetime = 150
    FoodGroup.add(banana)  
  }
}
function obstacles(){
 if(frameCount%300 === 0){
  obstacle = createSprite(400,330,20,20)
   obstacle.addImage(obstacleImage)
   obstacle.scale = 0.1
   obstacle.velocityX = -6
   obstacle.lifetime = 100
   obstacleGroup.add(obstacle)
 }
}