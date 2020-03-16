function setup() {
  // put setup code here
  createCanvas(500,500);
  background(232, 228, 183);
}

function draw() {
  background(232, 228, 183);
  
  // Show positions in top left corner of canvas
  text("X: "+mouseX, 10, 20);
  text("Y: "+mouseY, 10, 40);
  
  // Draw a circle on the mouse position
  ellipse(mouseX, mouseY, 33, 33);
  
//  // 3 circles that move at varying percentages of the mouse position
//  ellipse(mouseX, 100, 33, 33);   // Top circle
//  ellipse(mouseX/2, 150, 33, 33); // Middle circle
//  ellipse(mouseX*2, 200, 33, 33); // Bottom circle
//  
//  // If else statement
//  noStroke();
//  fill(0);
//  if (mouseX < 250) {
//    rect(0, 0, 250, 500);  // Left
//  }
//  else {
//    rect(250, 0, 250, 500); // Right
//  }
}
