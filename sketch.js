var garden,rabbit;
var gardenImg,rabbitImg;
var apple, appleImg;
var leaf, leafImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);


}


function draw() {
  background(0);

  rabbit.x = World.mouseX;
   
  createApples()
  createLeaf()

  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  

  drawSprites();
}

function createApples(){
  if (frameCount%80==0){

  apple = createSprite(200,40,10,10);
  apple.addImage(appleImg);
  apple.scale = 0.07
  apple.velocityY = 5;
  apple.x = Math.round(random(5,400));
  apple.depth=rabbit.depth;
  rabbit.depth=rabbit.depth+1;

  }
}


function createLeaf(){
  if (frameCount%180==0){

  leaf = createSprite(140,40,10,10);
  leaf.addImage(leafImg);
  leaf.scale = 0.07
  leaf.velocityY = 4;
  leaf.x = Math.round(random(50,400));
  leaf.depth=rabbit.depth;
  rabbit.depth=rabbit.depth+1;
  }
}

