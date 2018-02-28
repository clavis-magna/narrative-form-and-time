function setup() {
  createCanvas(500,500);
}

function draw() {
  // background drawn with an alpha value
  background(200,40);
  fill(255);
  // mouse movement will draw an ellipse each frame
  // which will be drawn over the next frame by semi transparent background
  // creating a trail effect
  ellipse(mouseX, mouseY, 10,10);
}