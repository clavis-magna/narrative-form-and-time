var screen = 1;
var numberOfPages = 3;

let mySound;
function preload(){
  mySound = loadSound('crowd-talking-1.mp3');
}

function setup() {
  // put setup code here
  createCanvas(500,500);
  background(66, 135, 245);
}

function draw () {
  background(66, 135, 245);
 if (screen==1) {
   //draw first screen
   text("Page 1", width/2,height/2);
   
  }
  else if (screen==2) {
    //draw third screen
    text("Page 2 (sound should be playing)", width/2,height/2);
  }
  
  else if (screen==3) {
    //draw fourth screen
    text("Page 3", width/2,height/2);
  }
  
}

function mousePressed () {
  screen++;
  if(screen > numberOfPages){
    screen = 1;
  }
  
  if ( screen == 2 ) {
    mySound.play();
  } else {
    mySound.stop();
  }
}
