let img;
let opacity = 0;

function preload() {
  img = loadImage('assets/redfern.jpg');
}

function setup() {
  let canv = createCanvas(900,600);
  canv.parent("canvas-container");
}

function  draw() {
  background(180, 160, 255);
  tint(255, opacity);
  image( img, 100, 100, 700, 400 );
}

function mouseMoved() {
  // Map the mouse position to the number of images.
  opacity = map(mouseX, 0, 900, 0, 255 );
}
