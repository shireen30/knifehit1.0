var wheel_img;
var wheel;
function preload() {

 
  wheel_img=loadImage("images/wheel.png");
}

function setup() {

  createCanvas(700,700);
wheel=createSprite(300,300);
wheel.scale=1.3;
wheel.addImage(wheel_img);
wheel.rotation=270;
  
 }

function draw() {
 background(rgb(38,0,73));
 
   
    wheel.rotation=wheel.rotation+10;
  

 drawSprites();
}