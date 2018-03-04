function setup() {
  createCanvas(400,200);
  background(150);
}

function draw() {
  background(150);
  fill(0);
  textSize(12);
  text("text, but just in the defailt font", 10, 50);
  text("This text is just in a different place on the canvas",10,100);
  fill(255,0,0);
  textSize(40);
  text("big red text",10,150);
}