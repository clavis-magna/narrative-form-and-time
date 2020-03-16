function setup() {
  // put setup code here
  createCanvas(500,500);
  background(66, 135, 245);
}

let w = 100;
let h = 50;
let y;
let x;
let gap = 10;

function draw() {
  // put drawing code here
  fill(0);
  
  //Brick 1
  x = 0;
  y = 0;
  rect(x, y, w, h);
  
  //Brick 2
  fill(40);
  x = w + gap;
  rect(x, y, w, h);
  
  //Brick 3
  fill(80);
  x = (w + gap) * 2;
  rect(x, y, w, h);
  
  //Brick 4
  fill(120);
  x = w / 2;
  y = h + gap;
  rect(x, y, w, h);
  
  //Brick 5
  fill(150);
  x =  w / 2 + w + gap;
  y = h + gap;
  rect(x, y, w, h);
  
  //Brick 6
  fill(180);
  x =  0;
  y = ( h + gap ) * 2;
  rect(x, y, w, h);
  
  //Brick 7
  fill(220);
  x =  w + gap;
  y = ( h + gap ) * 2;
  rect(x, y, w, h);
  
  //Brick 8
  fill(260);
  x =  ( w + gap ) * 2;
  y = ( h + gap ) * 2;
  rect(x, y, w, h);
}
