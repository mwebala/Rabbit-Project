var garden,rabbit;
var gardenImg,rabbitImg;
var apple,leaf,orangeLeaf;
var appleImg,leafImg,orange;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png")
  orange = loadImage("orangeLeaf.png")
}

function setup(){
  
  createCanvas(600,600);
  
// Moving background
garden=createSprite(300,300);
garden.addImage(gardenImg);
garden.scale = 1.4

//creating boy running
rabbit = createSprite(300,610,10,30);
rabbit.scale =0.2;
rabbit.addImage(rabbitImg);

apple = createSprite(50,-140,20,20)
apple.scale = 0.13
apple.addImage(appleImg)
apple.velocityY = 8

leaf = createSprite(300,-420,20,20)
leaf.scale = 0.2
leaf.addImage(leafImg)
leaf.velocityY = 8

orangeLeaf= createSprite(500,-280,20,20)
orangeLeaf.scale = 0.2
orangeLeaf.addImage(orange)
orangeLeaf.velocityY = 8




}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x= mouseX

if(rabbit.isTouching(apple)){
  apple.visible = false
}else if(rabbit.isTouching(leaf)){
  leaf.visible = false
}else if(rabbit.isTouching(orangeLeaf)){
  orangeLeaf.visible = false
}




  var rand =  Math.round(random(-3,100))
  spawnObjects();
  drawSprites();
}

function spawnObjects(){
  if(frameCount%234==0){
    apple = createSprite(50, Math.round(random(-342,100)),20,20)
    apple.scale = 0.13
    apple.addImage(appleImg)
    apple.velocityY = 10
      
  }
  if(frameCount%753==0){
    leaf = createSprite(300, Math.round(random(-242,100)),20,20)
    leaf.scale = 0.2
    leaf.addImage(leafImg)
    leaf.velocityY = 10

      
  }

  if(frameCount%346==0){
    orangeLeaf= createSprite(500, Math.round(random(-142,100)),20,20)
    orangeLeaf.scale = 0.2
    orangeLeaf.addImage(orange)
    orangeLeaf.velocityY = 10
      
  }
}