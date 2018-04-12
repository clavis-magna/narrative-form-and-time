var screen = 1;
var numberOfPages = 5;
var miniver;

function preload() {
  miniver = loadFont('assets/Miniver-Regular.ttf');
}

function setup() {
  // put setup code here
  var canv = createCanvas(960,540);
  // make div#canvas-container the parent of the created canvas
  canv.parent("canvas-container");
  textFont(miniver);
  textAlign(CENTER,BASELINE);
  textSize(40);
}

function draw () {
 if (screen==1) {
   //draw first screen
   background(50);
   text("Page 1", width/2,height/2);
  } else if (screen==2) {
    background(100);
    //draw second screen
    text("Page 2", width/2,height/2);
  } else if (screen==3) {
    background(150);
    //draw third screen
    text("Page 3", width/2,height/2);
  } else if (screen==4) {
    background(200);
    //draw fourth screen
    text("Page 4", width/2,height/2);
  } else if (screen==5) {
    background(250);
    //draw fifth screen
    text("Page 5", width/2,height/2);
  }
}

function mousePressed () {

  // >> loop code begin  >> 
  // use this code to loop the pages
  screen++;
  if(screen > numberOfPages){
    screen = 1;
  }
  // << loop code end << 
  
  // >> read once code begin >> 
  // use this code to stop on the last page 
  /*
  if(screen < numberOfPages){
    screen ++;
  }
  */
  // << read once code end <<
    
  print(screen);
}