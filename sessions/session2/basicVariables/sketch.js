function setup() {
  // put setup code here
  createCanvas(500,500);
  background(66, 135, 245);
}

var y = 250;
var d = 100;

function draw() {
  // put drawing code here
  fill(0);
  ellipse(75,y,d,d); //left
  ellipse(250,y,d,d); //center
  ellipse(425,y,d,d); //right
}
