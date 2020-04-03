let grabbed = [
  false,
  false,
  false,
  false,
  false,
  false
];
let x = [];
let y = [];

let hiddenObjectSelected = false;

function setup() {
  let canv = createCanvas(900,600);
  canv.parent("canvas-container");
  background(0);
  rectMode(CENTER);
  
  //Initial positions
  // Rect 1
  x[0] = 150; 
  y[0] = 150;
  // Rect 2
  x[1] = 450; 
  y[1] = 150;
  // Rect 3
  x[2] = 750; 
  y[2] = 150;
  // Rect 4
  x[3] = 150; 
  y[3] = 450;
  // Rect 5
  x[4] = 450; 
  y[4] = 450;
  // Rect 6
  x[5] = 750; 
  y[5] = 450;
}

function  draw() {
  background(0);
  
  //   Our hidden object
  noStroke();
  if ( hiddenObjectSelected ) {
    fill(10, 160, 10);
  } else {
    fill(10, 10, 160);
  }
  ellipse(750, 150, 30, 30);
  
  // Our shapes
  stroke( 200, 10, 10 );
  strokeWeight(10);
  fill(240, 210, 10);
  
  rect(x[0], y[0], 200, 200);
  rect(x[1], y[1], 200, 200);
  rect(x[2], y[2], 200, 200);
  rect(x[3], y[3], 200, 200);
  rect(x[4], y[4], 200, 200);
  rect(x[5], y[5], 200, 200);
}

function mouseIsInRect( x, y, width, height ){
  return (
    mouseX > x - width / 2 &&
    mouseX < x + width / 2 &&
    mouseY > y - height / 2 &&
    mouseY < y + height / 2
  );
}

function mouseIsInCircle(radius, circleX, circleY){
  let d = dist(mouseX, mouseY, circleX, circleY);
  if( d < radius) {
    return true;
  } else {
    return false;
  }
}

function mousePressed () {
  if( mouseIsInRect(x[5], y[5], 200, 200) ) {
    grabbed[5] = true;
  } else if( mouseIsInRect(x[4], y[4], 200, 200) ) {
    grabbed[4] = true;
  } else if( mouseIsInRect(x[3], y[3], 200, 200) ) {
    grabbed[3] = true;
  } else if( mouseIsInRect(x[2], y[2], 200, 200) ) {
    grabbed[2] = true;
  } else if( mouseIsInRect(x[1], y[1], 200, 200) ) {
    grabbed[1] = true;
  } else if( mouseIsInRect(x[0], y[0], 200, 200) ) {
    grabbed[0] = true;
  } else if ( mouseIsInCircle( 15, 750, 150 ) ) {
    hiddenObjectSelected = !hiddenObjectSelected;
  }
  print(grabbed);
}

function mouseReleased () {
  grabbed[5] = false;
  grabbed[4] = false;
  grabbed[3] = false;
  grabbed[2] = false;
  grabbed[1] = false;
  grabbed[0] = false;
}

function mouseDragged() {
  if ( grabbed[5] ) {
    x[5] = mouseX;
    y[5] = mouseY;
  } else if ( grabbed[4] ) {
    x[4] = mouseX;
    y[4] = mouseY;
  } else if ( grabbed[3] ) {
    x[3] = mouseX;
    y[3] = mouseY;
  } else if ( grabbed[2] ) {
    x[2] = mouseX;
    y[2] = mouseY;
  } else if ( grabbed[1] ) {
    x[1] = mouseX;
    y[1] = mouseY;
  } else if ( grabbed[0] ) {
    x[0] = mouseX;
    y[0] = mouseY;
  }
}
