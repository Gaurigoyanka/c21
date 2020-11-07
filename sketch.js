var fixedrect,movingrect


function setup() {
  createCanvas(800,400);
 fixedrect=createSprite(400, 200, 50, 50);
 movingrect=createSprite(600,200,50,50);
 object11=createSprite(500,300,50,50);
 object21=createSprite(700,300,50,50);
 object11.velocityX=(8)
 object21.velocityX=(-8)
}

function draw() {
  background(255,255,255);
  movingrect.x=mouseX
  movingrect.y=mouseY
  if(isTouching(fixedrect,movingrect)){
    movingrect.shapeColor="blue"
    fixedrect.shapeColor="blue"
  }
  else{
    movingrect.shapeColor="violet"
    fixedrect.shapeColor="brown"
  }
  bounceoff(object11,object21)
  drawSprites();
}