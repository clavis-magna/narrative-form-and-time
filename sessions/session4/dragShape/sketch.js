let grabbed = false;
let shapeX;
let shapeY;
const radius = 50;
const diameter = radius*2;

function setup() {
  // put setup code here
  createCanvas(500,500);
  background(66, 135, 245);
  
  shapeX = width/2;
  shapeY = height/2;
}

function draw () {
  background(66, 135, 245);
  ellipse(shapeX, shapeY, diameter, diameter);
//  print(grabbed);
}

function mousePressed () {
  let d = dist(mouseX, mouseY, shapeX, shapeY);
  if( d < radius) {
    grabbed = true;
  } else {
    grabbed = false;
  }
}

function mouseReleased () {
  grabbed = false;
}

function mouseDragged() {
//  print('dragged');
  if(grabbed){
    shapeX = mouseX;
    shapeY = mouseY;
  }
}