var screen = 2;
var numberOfPages = 3;

// Screen 2 variables
const blob1Radius = 120;
const blob1X = 200;
const blob1Y = 150;
let blob1Selected = false;

const blob2TriangleCoOrds = [480, 10, 800, 150, 500, 260];
let blob2Selected = false;

const blob3Rect = [50, 320, 380, 200];
let blob3Selected = false;

const blob4Rect1 = [480, 280, 280, 280];
const blob4Rect2 = [760, 320, 100, 200];

let bgImage;
let blob1purple;
let blob2purple;
let blob3purple;
let blob4purple;
let blob1green;
let blob2green;
let blob3green;
let blob4green;
function preload(){
  bgImage = loadImage('assets/bg.png');
  blob1purple = loadImage('assets/blob1purple.png');
  blob1green = loadImage('assets/blob1green.png');
  blob2purple = loadImage('assets/blob2purple.png');
  blob2green = loadImage('assets/blob2green.png');
  blob3purple = loadImage('assets/blob3purple.png');
  blob3green = loadImage('assets/blob3green.png');
  blob4purple = loadImage('assets/blob4purple.png');
  blob4green = loadImage('assets/blob4green.png');
}



function setup() {
  // put setup code here
  createCanvas(900,600);
  background(66, 135, 245);
}

function draw () {
  
 if (screen==1) {
   //draw first screen
   background(66, 135, 245);
   text("Page 1", 10,20);
   
  }
  else if (screen==2) {
    //draw third screen
    image(bgImage, 0, 0, 900, 600);
    
    fill(0,0,0,0);
    noStroke();
    
    // Blob 1 
    if(blob1Selected) {
      image(blob1green, 110, 50, 200, 200);
    } else {
      image(blob1purple, 110, 50, 200, 200);
    }
    // Hotspot
    ellipse( blob1X, blob1Y, blob1Radius*2, blob1Radius*2 );
    
    // Blob 2 
    if(blob2Selected) {
      image(blob2green, 490, 40, 240, 210);
    } else {
      image(blob2purple, 490, 40, 240, 210);
    }
    // Hotspot
    triangle.apply( this, blob2TriangleCoOrds );
    
    // Blob 3  
    if(blob3Selected) {
      image(blob3green, 50, 320, 380, 200);
    } else {
      image(blob3purple, 50, 320, 380, 200);
    }
    // Hotspot
    rect.apply( this, blob3Rect );
    
    // Blob 4  
    image(blob4purple, 480, 280, 360, 280);
    // Hotspot
    rect.apply( this, blob4Rect1 );
    rect.apply( this, blob4Rect2 );
    
    fill(0);
    text("Page 2", 10,20);
  }
  
  else if (screen==3) {
    //draw fourth screen
    fill(0);
    background(240, 240, 80);
    text("Page 3", 10,20);
  }
  
}

function incrementScreen () {
  screen++;
  if(screen > numberOfPages){
    screen = 1;
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

function mouseIsInTriangle(x1, y1, x2, y2, x3, y3){
  
  function areaOfTriangle(x1, y1, x2, y2, x3, y3) {
    return Math.abs( ( x1*(y2-y3) + x2*(y3-y1) + x3*(y1-y2) ) / 2 );
  }
  
  /* Calculate area of triangle ABC */   
  let A = areaOfTriangle(x1, y1, x2, y2, x3, y3);
  /* Calculate area of triangle PBC */   
  let A1 = areaOfTriangle(mouseX, mouseY, x2, y2, x3, y3);
   /* Calculate area of triangle PAC */   
  let A2 = areaOfTriangle(x1, y1, mouseX, mouseY, x3, y3);
  /* Calculate area of triangle PAB */    
  let A3 = areaOfTriangle(x1, y1, x2, y2, mouseX, mouseY);
  /* Check if sum of A1, A2 and A3 is same as A */ 
  return (A == A1 + A2 + A3); 
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

function mousePressed () {

  
  // Screen conditionals
  if (screen==1) {
     incrementScreen();
  }
  else if (screen==2) {
    
    if( mouseIsInCircle(blob1Radius, blob1X, blob1Y) ) {
      blob1Selected = !blob1Selected;
      print('in blob 1');
      print( blob1Selected );
    } 
    else if( mouseIsInTriangle.apply( this, blob2TriangleCoOrds ) ) {
      blob2Selected = !blob2Selected;
      print('in blob 2');
    } 
    else if( mouseIsInRect.apply( this, blob3Rect ) ) {
      blob3Selected = !blob3Selected;
      print('in blob 3');
    } 
    else if( 
      mouseIsInRect.apply( this, blob4Rect1 ) || 
      mouseIsInRect.apply( this, blob4Rect2 ) 
    ) {
      print('in blob 4');
      incrementScreen();
    }
    
  }
  
  else if (screen==3) {
     incrementScreen();
  }
}
