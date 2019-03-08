// NB: Be sure to add the gif library to your libray folder
// https://minhaskamal.github.io/DownGit/#/home?url=https://github.com/antiboredom/p5.gif.js/blob/master/p5.gif.js

// be sure to link to this library in your index.html document
// add the following *after* loafing in the other libraries
// <script src="libraries/p5.gif.js"></script>

var catgif; // define a variable to hold the gif image in

function preload(){
    catgif = createImage('assets/cat.gif'); // assign the actual image to the gif - same as loadImage, just using loadGif instead
}

function setup() {
  // put setup code here
  var canv = createCanvas(960,540);
  // make div#canvas-container the parent of the created canvas
  canv.parent("canvas-container");
}

function  draw() {
    
    image(catgif, 0, 0); // draw it to the screen same syntax as drawing a normal image
    
}

function mousePressed(){
   // catgif.pause();
}

function mouseReleased(){
   // catgif.play();
}
