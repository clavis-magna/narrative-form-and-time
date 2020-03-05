function setup() {
  // put setup code here
  let canv = createCanvas(960,540);
  // make div#canvas-container the parent of the created canvas
  canv.parent("canvas-container");
  background(23, 255, 120);
}

function  draw() {
  // put drawing code here
  background(23, 255, 120);
  strokeWeight(4);
  stroke(50);
  strokeJoin(ROUND);
  fill('#fae');
  triangle(100, 200, 480, 300, 480, 440);
  fill(200, 0, 0);
  triangle(860, 100, 860, 340, 660, 340);
  fill(255, 204, 0);
  quad(200, 100, 860, 340, 760, 440, 100, 200);
}
