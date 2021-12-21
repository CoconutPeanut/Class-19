var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  ghost = createSprite(200,200, 50, 50);
  ghost.addImage("ghost",ghostImg);
  ghost.scale = 0.35;
  
}

function draw() {
  background(200);
  
  if(tower.y > 400){
      tower.y = 300
    }

    if(keyDown(RIGHT_ARROW)){
      ghost.x = ghost.x+2;
    }

    if(keyDown(LEFT_ARROW)){
      ghost.x = ghost.x-2;
    }

    if(keyDown("space")){
    ghost.velocityY = -10;
    }
    ghost.velocityY = ghost.velocityY+0.8;

   

    drawSprites();
 spawnDoor();
}

function spawnDoor(){
  if (frameCount % 240 === 0) {
    var door = createSprite(200,-50);
    door.x = Math.round(random(120, 400));
    door.addImage(doorImg);
    door.scale = 0.8;
    door.velocityX = 1;
    
    
    //add each cloud to the group
  //  cloudsGroup.add(cloud);
  }
}
