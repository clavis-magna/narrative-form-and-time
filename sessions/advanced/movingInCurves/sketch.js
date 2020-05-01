let counter = 0;

function setup() {
  createCanvas(710, 400);
  noStroke();
  fill(255, 204, 0);
  noFill();
  stroke(255, 204, 0);
  background(0);
  
  d = height/2;
}

function draw() {
//  background(0);
  background("rgba(0,0,0,0.01)");

  let y = (sin(counter) * 100) + height/2;
  let x = (cos(counter) * 100)+ width/2;

  ellipse(x, y, 20, 20);

  counter += 0.05;
}
