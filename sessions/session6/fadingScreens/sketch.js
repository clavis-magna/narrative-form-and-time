let screen = 1;
let numberOfPages = 3;
let img;

let opacity = 255;
let fade = false;

function preload() {
  img = loadImage('assets/redfern.jpg');
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

  } else if (screen==2) {
      //draw third screen
      background(240, 240, 80);
      noStroke();
      rectMode(CENTER);
      
      if(fade) {
        moveOpacity();
      }
    
      // BG colour
      fill(220, 135, 10, opacity);
      rect( width/2, height/2, width, height );
    
      fill(0);
      text("Page 2", 10,20);
      
      // Image
      imageMode(CENTER);
      tint(255, opacity);
      image(img, width*0.25, height/2, 200, 200);
      
      // Rectangle
      fill(0,0,0,opacity);
      rect( width*0.75, height/2, 200, 200 );
    
    
  } else if (screen==3) {
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
  // Reset fade values for screen 2
  if( screen == 1 ) {
    fade = false;
    opacity = 255;
  }
}

function moveOpacity() {
  opacity = opacity - 2;
  
  if(opacity <= 0) {
    incrementScreen();
  }
}

function mousePressed () {

  // Screen conditionals
  if (screen==1) {
     incrementScreen();
  }
  else if (screen==2) { 
    fade = true;
  }
  
  else if (screen==3) {
     incrementScreen();
  }
}
