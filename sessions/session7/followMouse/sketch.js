// Adaptation of https://p5js.org/examples/interaction-follow-1.html Based on code from Keith Peters. 

let x1 = 100,
  y1 = 100,
  angle1 = 0.0,
  distBehind1 = 75;

let x2 = 100,
  y2 = 100,
  angle2 = 0.0,
  distBehind2 = 100;

let x3 = 100,
  y3 = 100,
  angle3 = 0.0,
  distBehind3 = 125;

function setup() {
  createCanvas(710, 400);
  strokeWeight(10.0);
  stroke(255, 100);
}

function draw() {
  background(0);

  // Follower 1
  dx1 = mouseX - x1;
  dy1 = mouseY - y1;
  angle1 = atan2(dy1, dx1);
  x1 = mouseX - cos(angle1) * distBehind1;
  y1 = mouseY - sin(angle1) * distBehind1;
  fill('red');
  ellipse(x1, y1, 10, 10);
  
  // Follower 2
  dx2 = mouseX - x2;
  dy2 = mouseY - y2;
  angle2 = atan2(dy2, dx2);
  x2 = mouseX - cos(angle2) * distBehind2;
  y2 = mouseY - sin(angle2) * distBehind2;
  fill('green');
  ellipse(x2, y2, 10, 10);
  
    // Follower 3
  dx3 = mouseX - x3;
  dy3 = mouseY - y3;
  angle3 = atan2(dy3, dx3);
  x3 = mouseX - cos(angle3) * distBehind3;
  y3 = mouseY - sin(angle3) * distBehind3;
  fill('blue');
  ellipse(x3, y3, 10, 10);
  
  fill('white');
  ellipse(mouseX, mouseY, 10);
}
