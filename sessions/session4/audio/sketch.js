var screen = 1;
var numberOfPages = 5;

let crowd;
let fire;
let river;
let trainCrossing;
function preload(){
  crowd = loadSound('crowd-talking-1.mp3');
  fire = loadSound('fire-1.mp3');
  river = loadSound('river-2.mp3');
  trainCrossing = loadSound('train-crossing-bell-01.mp3');
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
   text("Page 1 (No sound playing)", width/2,height/2);
  } else if (screen==2) {
    //draw third screen
    text("Page 2 (Crowd sound should be playing)", width/2,height/2);
  } else if (screen==3) {
    //draw fourth screen
    text("Page 3 (Fire sound should be playing)", width/2,height/2);
  } else if (screen==4) {
    //draw fourth screen
    text("Page 4 (River sound should be playing)", width/2,height/2);
  } else if (screen==5) {
    //draw fourth screen
    text("Page 5 (Train crossing sound should be playing)", width/2,height/2);
  }
  
}

function incrementScreen () {
  screen++;
  if(screen > numberOfPages){
    screen = 1;
  }
}

function mousePressed () {
  if ( screen == 1 ) {
    crowd.play();
    incrementScreen();
  } else if ( screen == 2 ) {
    crowd.stop();
    fire.play();
    incrementScreen();
  } else if ( screen == 3 ) {
    fire.stop();
    river.play();
    incrementScreen();
  } else if ( screen == 4 ) {
    river.stop();
    trainCrossing.play();
    incrementScreen();
  } else if ( screen == 5 ) {
    trainCrossing.stop();
    incrementScreen();
  }
}
