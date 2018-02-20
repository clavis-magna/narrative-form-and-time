function setup() {
  // put setup code here
  createCanvas(500,350);
  background(200);
}

function draw() {
  // put drawing code here
  background(200);

  // a circle with a fill color of white
  // and a stroke color of black
  // These are the deafult vaules
  // see comment at end of draw loop also
  ellipse(100,100,50,50);

  // circle with no colored fill
  // set color of stroke to black
  stroke(0);
  noFill();
  ellipse(200,100,50,50);

  // circle with fat Stroke
  // notice how noFill is still in operation here as code flows from top to bottom
  strokeWeight(10);
  ellipse(300,100,50,50);

  // cirlce with stroke colored red
  // by default colours are defines in r,g,b
  // three values from 0 (no color) to 255 (full color)
  // notice how strokeWeight flows through unless we change it
  stroke(255,0,0);
  ellipse(400,100,50,50);

  // colours

  // noStroke does not draw a stroke on any shapes after we call it
  noStroke();

  // a grey square
  // a single value in a color gives us a shade of grey ( 0 - 255 )
  fill(120);
  rect(25,200,50,50);

  // we get the same color if we use the following. The above is just a shortcut
  fill(120,120,120);
  rect(125,200,50,50);

  // define a yellow color in rgb
  fill(255,255,0);
  rect(225,200,50,50);

  // we can also change the color mode.
  // this is useful later when you might want to change a color using code
  // eg change to a HSB color space
  colorMode(HSB, 100);
  fill(25,100,100);
  rect(325,200,50,50);

  // another square using HSB color
  colorMode(HSB, 100);
  fill(50,100,100);
  rect(425,200,50,50);



  // the draw loop starts again now.
  // anything we set here will flow back up to the start of the loop
  // the following lines just reset to the default values so things act as expected when the loop starts over
  // comment out the following lines to see what happens.
  strokeWeight(1);
  stroke(0);
  fill(255);
  colorMode(RGB);
}
