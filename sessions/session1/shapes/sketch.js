function setup() {
  // put setup code here
  createCanvas(900,500);
  background(200);
}

function draw() {
  // put drawing code here
  // draw a single pixel at 100,100
  // you might have to look hard to see the single pixel
  point(100,100);

  // draw a line from 200,100 to 200,200
  line(200,100,200,200);

  // draw a triangle
  // read the parameters in sets of 2 as the triangles vertices
  triangle(350,100,300,200,400,200);

  // draw a rectangle
  // first 2 parameters are the top left corner
  // 3rd parameter is width
  // 4th parameter is height
  rect(500,100,50,100);

  // draw a square
  // we use the same command as for the rectangle
  // but width and height are the same
  rect(650,100,100,100);

  // draw an ellipse
  // by default ellipses are drawn from the center
  // first 2 parameters are the center of the ellipse
  // 3rd parameter is width
  // 4th parameter is height
  ellipse(100,350,50,100);
  // the following point is so you can visualise the ellipse being drawn from the center
  point(100,350);

  // draw a circle
  // a circle is an ellipse with the same width and height
  ellipse(250,350,100,100);

  // draw a quad
  // a quad is a 4 sides shape
  // same idea as triangle, except with 4 pairs of co-ordinates
  quad(400,300,350,350,400,400,450,350);

  // draw an arc
  // we will talk much more about this one in class as its a bit more tricky
  // the first four parameters are the same as ellipse, followed by a start point and end point
  // start and end are defined in radians (a no fun way of thinking about points on a circle)
  arc(550,350, 100, 100, 0, HALF_PI);

  // draw another arc,
  // but now we define start point and endpoint in degrees
  // its much easier to think in degrees
  // 1 circle = 360 degrees
  // we use the radians function to convert from degrees to radians for us
  arc(700,350, 100, 100, radians(180), radians(90));
}
