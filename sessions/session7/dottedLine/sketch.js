let img;

let drawn = 0;
let positions = [
  [10, 10],
  [20, 20],
  [30, 30],
  [40, 40],
  [50, 50],
  [60, 60],
  [70, 70],
  [80, 80],
  [90, 90],
  [100, 100],
  [120, 100],
  [140, 100],
  [160, 100],
  [180, 100],
  [200, 100],
  [220, 100],
  [240, 100],
  [260, 100],
  [280, 100],
  [300, 100],
]

function preload() {
  img = loadImage('assets/brush.png');
}

function setup() {
  // put setup code here
  createCanvas(500,500);
  background(66, 135, 245);
}

function draw () {
  background(66, 135, 245);
  
  // Increment the "drawn" variable (so we draw an extra dot) on every 10th frame. 
  //See https://www.w3schools.com/js/js_operators.asp for more details on modulous operator
  if(frameCount % 10 == 0 ) {
    if(drawn < positions.length) {
      drawn++;
    }
  }
  
  // Loop through the positions in order to draw each dot
  // See https://www.w3schools.com/js/js_loop_for.asp for more info on loops
  for(let i = 0; i < drawn; i++) {
//    ellipse(positions[i][0], positions[i][1], 10, 10);
    
    // Use an image as the dot
     image(img, positions[i][0], positions[i][1], 10, 10);
  }
}

function mousePressed() {
  print('pressed');
  drawn = 0;
}