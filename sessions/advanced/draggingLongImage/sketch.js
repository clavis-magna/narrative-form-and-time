let img;
let longImageX = 0;
let prevMouseX;

function preload() {
  img = loadImage('assets/redfern.jpg');
}

function setup() {
  createCanvas(500,500);
}

function draw() {
  background(255);
  image(img, longImageX, 0, width * 4, height);
}

function mousePressed() {
  prevMouseX = mouseX;
}

function mouseDragged() {
  longImageX = longImageX + mouseX - prevMouseX;
  prevMouseX = mouseX;
}
