function setup() {
  createCanvas(500,500);
}

function draw() {
  if(mouseIsPressed){
    background(255,0,0);
  }
  else{
    background(0,255,0);
  }
}