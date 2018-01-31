// a variable is created her to hold our font
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
}

function draw() {
  textFont(miniver);
  textAlign(CENTER,BASELINE);
  textSize(40);
  text("We've only just begun", width/2,height/2);
}