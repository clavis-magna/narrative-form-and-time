let brushCounterLimit = 5;
let brushCounter = 0;

let images;

let cycle = 0;
let maxCycles = 40;

function preload() {
  images = [
    loadImage('assets/brush.png'),
    loadImage('assets/brush2.png'),
    loadImage('assets/brush3.png'),
  ]
}

function setup() {
  let canv = createCanvas(900,600);
  canv.parent("canvas-container");
  background(240, 210, 10);
}

function  draw() {
  
  if (mouseIsPressed) {
    
    incrementBrushCounter();
    if( brushCounter == 0 ){
      cycle++;
      tint(255, random(50, 200));
      let imageWidth = random(10, 50);
      image( random(images), mouseX, mouseY, imageWidth, imageWidth );
    }
    
  }
  
  if (cycle == maxCycles) {
    // Here you could do something like move to the next screen once there are a certain number brushes drawn on the screen
    text('You are free to move on!', width/2, height * 0.9);
  }
  
}

function incrementBrushCounter() {
  brushCounter++;
  if ( brushCounter > brushCounterLimit ){
    brushCounter = 0;
  }
}
