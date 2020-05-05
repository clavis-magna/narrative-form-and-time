let xspacing = 20; // Distance between each horizontal location
let w; // Width of entire wave
let theta = 0.0; // Start angle at 0
let amplitude = 75.0; // Height of wave
let period = 500.0; // How many pixels before the wave repeats
let dx; // Value for incrementing x
let yvalues; // Using an array to store height values for the wave
let circleWidth = 16;

let ampPeriodValues = [
  [75.0, 500.0],
  [150.0, 200.0],
  [20.0, 1500.0],
];
let valuesIndex = 1;

function setup() {
  createCanvas(710, 400);
  // Set the width for the entire wave
  w = width + 16;
  // This is the value with which we will increment the x value inside calcWave function
  dx = (TWO_PI / period) * xspacing;
  // Setup up an array with the right amount of spots (width of wave / spacing between dots)
  yvalues = new Array(floor(w / xspacing));
}

function draw() {
  // Draw a BG
  background(0);
  // Calculate our y values
  calcWave();
  // Draw our circles in the right spots
  renderWave();
}

function calcWave() {
  // Increment theta (try different values for
  // 'angular velocity' here)
  theta += 0.02;

  // For every x value, calculate a y value with sine function
  // In other words for every dot, get a y value
  let x = theta;
  for (let i = 0; i < yvalues.length; i++) {
    // The equation to get each y value uses the sine function multiplied by how high we want the wave to be.
    yvalues[i] = sin(x) * amplitude;
    // Increment the x value in order to get a different value for the next dot
    x += dx;
  }
}

function renderWave() {
  // What will our circle look like?
  stroke(255);
  noFill();

  // Loop through every value in our yvalues array to draw a circle at every position
  for (let x = 0; x < yvalues.length; x++) {
    // Draw the circle at every xspacing distance (16px).
    // Add half the height of the canvas to the y position so the wave is in the center of the screen.
    ellipse(x * xspacing, height / 2 + yvalues[x], circleWidth, circleWidth);
  }
}

function mousePressed() {
  //Change the height and period of the wave
  amplitude = ampPeriodValues[valuesIndex][0]; // Height of wave
  period = ampPeriodValues[valuesIndex][1]; // How many pixels before the wave repeats
  // set dx variable too
  dx = (TWO_PI / period) * xspacing;
  
  // Increase the values index ready for next click
  if(valuesIndex < ampPeriodValues.length - 1) {
    valuesIndex++;
  } else {
    valuesIndex = 0;
  }
}
