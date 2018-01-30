

var x = 20;
var y = 20;
var speedX = 1;
var speedY = 1;

function setup() {
  // put setup code here
  var canv = createCanvas(960,540);
  // make div#canvas-container the parent of the created canvas
  canv.parent("canvas-container");
  background('#fae');
  
  noFill();
  strokeWeight(10);

}

function  draw() {
  // put drawing code here
  ellipse(x,y,20,20);
  
  if(x>width || x <0){
    speedX = speedX * -1;
  }
  
  if(y>height || y <0){
    speedY = speedY * -1;
  }
  
  //console.log(x + " " + y);
  
  x = x + speedX;
  y = y + speedY;
  
  fill(100,100,100,60);
  rect(0,0,width,height);
}
