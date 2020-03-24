const yPosition = 250;
const diameter = 100;

function setup() {
  // put setup code here
  createCanvas(500,500);
  background(66, 135, 245);
}

function draw() {
  // put drawing code here
  fill(0);
  ellipse(75, yPosition, diameter, diameter); //left
  ellipse(250,yPosition,diameter,diameter); //center
  ellipse(425,yPosition,diameter,diameter); //right
}
