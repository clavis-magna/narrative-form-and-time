var xPos = 0;
var speed = 4;

function setup() {
  createCanvas(300,300);
}

function draw() {
  background(150,150,150);
  
  xPos = xPos + speed;
  
  // || = OR  && = AND 
  if(xPos > width || xPos < 0){
    speed = speed * -1;
  }
  
  ellipse(xPos,150,20,20);
}
