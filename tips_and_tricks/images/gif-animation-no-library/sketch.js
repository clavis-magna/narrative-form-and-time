var catgif; // define a variable to hold the gif image in

function preload(){
    //use create image instead of load image
    catgif = createImg('assets/cat.gif');
}

function setup() {
  var canv = createCanvas(960,540);
  canv.parent("canvas-container");
}

function  draw() {
    background(255);
    // we need an offset as we place the image not on the canvas but on the browser window using this technique
    var offsetW = (windowWidth - width)/2;
    var offsetH = (windowHeight - height)/2;
    catgif.position(50+offsetW, 50+offsetH); 
}





