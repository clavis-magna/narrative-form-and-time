let img;
let beginX = 125; // Initial x-coordinate
let beginY = 125; // Initial y-coordinate
let endX = 375; // Final x-coordinate
let endY = 375; // Final y-coordinate
let distX; // X-axis distance to move
let distY; // Y-axis distance to move
let x = 0.0; // Current x-coordinate
let y = 0.0; // Current y-coordinate
let step = 0.01; // Size of each step along the path
let pct = 0.0; // Percentage traveled (0.0 to 1.0)

function preload() {
  img = loadImage('assets/brush.png');
}

function setup() {
  // put setup code here
  createCanvas(500,500);
  background(66, 135, 245);
  
  distX = endX - beginX;
  distY = endY - beginY;
}

function draw () {
  background(66, 135, 245);
  
  pct += step;
  if (pct < 1.0) {
    x = beginX + pct * distX;
    // Straight line
    y = beginY + pct * distY;
    // Curve
    y = beginY + pow(pct, 4) * distY;
  }
  
  imageMode(CENTER);
  image(img, x, y, 50, 50);
}

function mousePressed() {
  pct = 0.0;
}