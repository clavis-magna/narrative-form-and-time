let img;
let longImageX = 0;
let prevMouseX;
let imageWidth = 2000;

function preload() {
  img = loadImage('assets/redfern.jpg');
}

function setup() {
  createCanvas(500,500);
}

function draw() {
  background(255);
  console.log(longImageX);
  image(img, longImageX, 0, imageWidth, height);
}

function mousePressed() {
  prevMouseX = mouseX;
}

function mouseDragged() {
  longImageX = longImageX + mouseX - prevMouseX;
  prevMouseX = mouseX;
  if(longImageX < (imageWidth - width) * -1) {
    console.log('move to next screen');
  }
}
