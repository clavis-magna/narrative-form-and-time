var x = 400;
var y = 200;
var circleColour;

function setup() {
  createCanvas(800,400);
  background(200,200,200);
  circleColour = color(0,255,0);
}

function draw() {
  noStroke();
  
  if(keyIsPressed){
    
    if(key == 'a'){
      x = x -1;
    }
    
    if(key == 'd'){
      x = x +1;
    }
    
    if(key == 'w'){
      y = y -1;
    }
    
    if(key == 's'){
      y = y +1;
    }
    
    if(key == 'd'){
      x = x +1;
    }
    
    if(key == 'd'){
      x = x +1;
    }
    
    if(key == 'p'){
      background(200,200,200);
    }
    
    if(key == 'g'){
      circleColour = color(0,255,0);
    }
    
    if(key == 'r'){
      circleColour = color(255,0,0);
    }  
  }
  
  fill(circleColour);
  ellipse(x,y,10,10);
}
