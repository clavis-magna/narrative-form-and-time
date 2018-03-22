// reveals a text on the acreen by mapping the mouse speed to the background color

function setup() {
  createCanvas(960,480);
  background(100);
}

function draw() {
  // abs() gives us an 'absolute' result, or one that is always positive
  // subtracting pmouseX from mouseX we get how far the mouse has travelled since the last frame
  print(abs(mouseX - pmouseX));
  background(abs(mouseX - pmouseX));
  text("I'm here",300,200);
}
