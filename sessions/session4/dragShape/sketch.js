let grabbed = false;
let shapeX;
let shapeY;
const radius = 50;
const diameter = radius*2;
//variable to store offset
let offsetX;
let offsetY;

let img;

function preload() {
  img = loadImage('assets/redfern.jpg');
}

function setup() {
  // put setup code here
  createCanvas(500,500);
  background(66, 135, 245);
  imageMode(CENTER);
  
  shapeX = width/2;
  shapeY = height/2;
}

function draw () {
  background(66, 135, 245);
  ellipse(shapeX, shapeY, diameter, diameter);
  //image(img, shapeX, shapeY, diameter, diameter);
}

function mousePressed () {
  let d = dist(mouseX, mouseY, shapeX, shapeY);
  if( d < radius) {
    grabbed = true;
    offsetX = shapeX - mouseX;
    offsetY = shapeY - mouseY;
  } else {
    grabbed = false;
  }
}

function mouseReleased () {
  grabbed = false;
}

function mouseDragged() {
  if(grabbed){
    shapeX = mouseX + offsetX;
    shapeY = mouseY + offsetY;
  }
}