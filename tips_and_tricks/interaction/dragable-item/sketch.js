// Click and Drag an object
// Based on code from Daniel Shiffman
// http://alpha.editor.p5js.org/projects/B13wH5T3

var dragging = false; // Is the image being dragged?

var x = 100; // x pos of image
var y = 100; // y pos of image
var w = 180; // width pos of image
var h = 240; // height pos of image        

var offsetX;    // Mouseclick offset Y
var offsetY;    // Mouseclick offset Y

var kitten; // variable for image

function preload(){
  //load in image
  kitten = loadImage("assets/kitten.png");
}

function setup() {
  var canv = createCanvas(960,540);
  canv.parent("canvas-container");

}

function  draw() {
  background(255);

  // Adjust location if being dragged
  if (dragging) {
    x = mouseX + offsetX;
    y = mouseY + offsetY;
  }
  
  // draw the image
  image(kitten,x, y, w, h);
}


function mousePressed() {
  // Did I click on the image?
  if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
    dragging = true;
    // If so, keep track of relative location of click to corner of rectangle
    offsetX = x-mouseX;
    offsetY = y-mouseY;
  }
}

function mouseReleased() {
  // Quit dragging
  dragging = false;
}
