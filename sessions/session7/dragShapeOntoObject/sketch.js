let grabbed = false;
let shapeX;
let shapeY;
let circleGettingBigger = true;
const radius = 50;
let diameter = radius*2;

let placed = false;

function setup() {
  // put setup code here
  createCanvas(500,500);
  background(66, 135, 245);
  
  shapeX = width/4;
  shapeY = height/4;
}

function draw () {
  background(66, 135, 245);
  
  // Bucket
  if( placed ) {
    fill(100, 10, 250);
  } else {
    fill(255);
  }
  rect(width/2, height/2, 200, 200);
  
  // Hidden text
  if( placed ) {
    fill(255);
    text('You are allowed to see this now', width/2, 50);
  }
  
  // Draggy shape
  pulseCircle();
  fill(255);
  ellipse(shapeX, shapeY, diameter, diameter);
}

function mouseIsInRect( x, y, width, height, rectModeCenter = false ){
  if( rectModeCenter ) {
    return (
      mouseX > x - width / 2 &&
      mouseX < x + width / 2 &&
      mouseY > y - height / 2 &&
      mouseY < y + height / 2
    );
  } else {
    return (
      mouseX > x &&
      mouseX < x + width &&
      mouseY > y &&
      mouseY < y + height
    );
  }
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
  if( mouseIsInCircle(radius, shapeX, shapeY) ) {
    grabbed = true;
  } else {
    grabbed = false;
  }
}

function mouseReleased () {
  grabbed = false;
}

function mouseDragged() {
//  print('dragged');
  if(grabbed){
    shapeX = mouseX;
    shapeY = mouseY;
    
    if( mouseIsInRect(width/2, height/2, 200, 200) ) {
      placed = true;
    } else {
      placed = false;
    }
    print(placed);
  }
}

function pulseCircle () {
  if(circleGettingBigger) {
    diameter++;
  } else {
    diameter--;
  }
  if(diameter > 110) {
    circleGettingBigger = false;
  } else if ( diameter < 90 ) {
    circleGettingBigger = true;
  }
}