// a variable is created here to hold our font
// by placing the variable definition here, it is available to the entire sketch
var miniver;

// preload happens before setup and draw
// making sure our font will be loaded and ready when we need it
function preload() {
  //font can be a ttf or otf
  miniver = loadFont('assets/Miniver-Regular.ttf');
}

function setup() {
  createCanvas(800,400);
  background(150);
  frameRate(10);
}

function draw() {
  // the background has an alpha value of 25 so oonly patially draws over our content each frame
  background(150,25);
  textFont(miniver);
  textAlign(CENTER,BASELINE);
  textSize(40);
  
  //we use random() to draw the the text at a random position
  text("The ocean is rough tonight", random(width/2)+width/4,random(height/2)+height/4);
}