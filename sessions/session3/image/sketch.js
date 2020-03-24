let img;
function preload() {
  img = loadImage('assets/redfern.jpg');
}

function setup() {
  // put setup code here
  createCanvas(500,500);
  background(66, 135, 245);
  image(img, 10, 10, 400, 300);
  image(img, 100, 100, 400, 300);
  image(img, 200, 200, 400, 300);
}

function draw() {
}
