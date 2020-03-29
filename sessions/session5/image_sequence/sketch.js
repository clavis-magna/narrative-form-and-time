let images;
let imageIndex = 0;
function preload(){
  images = [
    loadImage('assets/star_1.png'),
    loadImage('assets/star_2.png'),
    loadImage('assets/star_3.png'),
    loadImage('assets/star_4.png'),
    loadImage('assets/star_5.png'),
    loadImage('assets/star_6.png'),
    loadImage('assets/star_7.png'),
    loadImage('assets/star_8.png'),
  ]
}

let cnv;
function setup() {
  cnv = createCanvas(600,600);
  // // (3.) Attach listener for activity on canvas only
  // cnv.mouseMoved(mouseMovesFrame);
  frameRate(3);
}

function draw () {
  background(240);
  
  // 1. Move frame on every draw
  moveFrame();
  
  image( images[imageIndex], 0, 0, 600, 600 );
}

function moveFrame() {
  imageIndex++;
  if( imageIndex > images.length - 1 ) {
    imageIndex = 0;
  }
}

//// 2. Move animation based on click
//function mouseClicked() {
//  moveFrame();
//}

//// 3. Move animation based on mouseX position
//function mouseMovesFrame() {
//  // Map the mouse position to the number of images.
//  imageIndex = map(mouseX, 0, 600, 0, images.length - 1).toFixed(0);
//}
