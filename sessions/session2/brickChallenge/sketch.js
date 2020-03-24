function setup() {
  // put setup code here
  createCanvas(500,500);
  background(66, 135, 245);
}

const colourStep = 10;
const brickWidth = 100;
const brickHeight = 50;
const motar = 10;
let y;
let x;

function draw() {
  //Brick 1
  fill(0);
  x = 0;
  y = 0;
  rect(x, y, brickWidth, brickHeight);
  
  //Brick 2
  fill(colourStep);
  x = brickWidth + motar;
  rect(x, y, brickWidth, brickHeight);
  
  //Brick 3
  fill(colourStep*2);
  x = (brickWidth + motar) * 2;
  rect(x, y, brickWidth, brickHeight);
  
  //Brick 4
  fill(colourStep*3);
  x = (brickWidth + motar) / 2;
  y = brickHeight + motar;
  rect(x, y, brickWidth, brickHeight);
  
  //Brick 5
  fill(colourStep*4);
  x =  (brickWidth + motar) / 2 + brickWidth + motar;
  rect(x, y, brickWidth, brickHeight);
  
  //Brick 6
  fill(colourStep*5);
  x =  0;
  y = ( brickHeight + motar ) * 2;
  rect(x, y, brickWidth, brickHeight);
  
  //Brick 7
  fill(colourStep*6);
  x =  brickWidth + motar;
  rect(x, y, brickWidth, brickHeight);
  
  //Brick 8
  fill(colourStep*7);
  x =  ( brickWidth + motar ) * 2;
  rect(x, y, brickWidth, brickHeight);
}
