var covid1,covid2;
var lady,lady2;
var sanitiser,mask;
var bg1,bg2;
var girl;
var score=0;
var n = 0;
var virusArray = [];

function preload() {
  
  covid1=loadImage("Image/virus1.png");
  girlImg =loadImage("Image/girl.png");
  sanitiserImg=loadImage("Image/sanitizerImg.jpg");
  bg2=loadImage("Image/background2.jpg");
  bg1=loadImage("Image/backgroundImage.png");
  win=loadImage("Image/winImg.jpg")

}

function setup() {
  createCanvas(windowWidth,windowHeight);

  //width refers to canvas width
  //height refers to canvas height
  
  girl = createSprite(width/10,height-290,10,10);
  girl.addImage(girlImg);
  girl.scale=0.8

  sanitiser = createSprite(width/5,height-275,10,10);
  sanitiser.addImage(sanitiserImg);
  sanitiser.scale=0.3
}

function draw() {
  background(bg1);
  drawSprites()

  //if frameCount is a multiple of 100 create a virus
  if (frameCount % 100 === 0){
    virus();
  }
  textSize(30)
  fill("blue");
  text('Drag the sanitizer towards the viruses to kill them',10,50)

  textSize(30);
  text('Score = ' + n, 0.8 * width,50)

  if(n > 15){
    background(win)
    textSize(40)
    fill(0)
    text('Yay, you saved the Earth from the viruses!!',width-1000,height-100)

  }
  n = 0;
  for (var i in virusArray){
    if(virusArray[i][1] === 1)
    n++;
  }
  console.log(virusArray.length);

}

function virus(){
  
  var virus = createSprite(width + 20,random(100,height -100),10,10);
  virus.addImage(covid1);
  virus.scale = random(0.1,0.3);
  virus.velocityX= -7/(virus.scale*10);
  virus.lifetime= (1000 / virus.velocityX) + 20;
  virusArray.push([virus, 0])
}

function mouseDragged(){
  sanitiser.x = mouseX;
  sanitiser.y = mouseY;

  for (i=0; i < virusArray.length; i++){
    
    if(mousePressedOver(virusArray[i][0])){
      virusArray[i][0].visible = false;
      virusArray[i][1] = 1;
    }
  }
}



