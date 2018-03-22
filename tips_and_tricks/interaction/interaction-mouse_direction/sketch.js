// check the direction of mouse movement
// by comparing mouseX and pmouseX
// can do same with mouseY and pmouseY

function setup() {
  createCanvas(960,480);
  background(100);
}

function draw() {
  // mouse moving left
  if(mouseX > pmouseX){
    background(255,0,0);
  }
  // mouse moving right
  if(mouseX < pmouseX){
    background(0,255,0);
  }
  // mouse not moving
  if(mouseX == pmouseX){
    background(0,0,255);
  }
}
