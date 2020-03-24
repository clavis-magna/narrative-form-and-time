function setup() {
  // put setup code here
  createCanvas(500,500);
  background(232, 228, 183);
}

// Set variables to determine how long out lines will be
const thickness = 20;
const line1YPosition = 50;
const line2Yend = 150;
const line4Yend = 250;

function draw() {
  background(232, 228, 183);
  
  stroke(0);
  strokeWeight(thickness);
  strokeCap(ROUND);
  
  // Line 1
  if( mouseY < line1YPosition ) {
    line( Math.min(mouseX, 450), line1YPosition, 450, line1YPosition);
  }
  
  // Line 2
  if( mouseY < line2Yend - thickness / 2 ) {
    stroke(60);
    line(450, Math.max(mouseY, line1YPosition), 450, line2Yend);
  }
  
  // Line 3
  stroke(120);
  if( mouseY < line2Yend - thickness / 2 ) {
    line(450, line2Yend, 50, line2Yend);
  } else if ( mouseY < line2Yend + thickness / 2 ) {
    line(50, line2Yend, Math.max(Math.min(mouseX, 450), 50), line2Yend);
  }
  
  // Line 4
  if( mouseY < line4Yend ) {
    stroke(180);
    line(50, Math.max(mouseY, line2Yend), 50, line4Yend);
  }
  
  // Line 5
    
  stroke(240);
  if( mouseY < line4Yend ) {
    line(50, line4Yend, 500, line4Yend);
  } else {
    line(Math.max(mouseX, 50), line4Yend, 500, line4Yend);
  }
  
}
