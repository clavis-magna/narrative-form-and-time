function setup() {
  // put setup code here
  let canv = createCanvas(960,540);
  // make div#canvas-container the parent of the created canvas
  canv.parent("canvas-container");
  background(23, 255, 120);
  rectMode(CENTER);
}

function  draw() {
  // put drawing code here
  background(23, 255, 120);
  fill(0);
  rect(width/2, height/2, 200, 200);
  fill(23, 255, 120);
  ellipse(width/2, height/2, 200, 200);
}
