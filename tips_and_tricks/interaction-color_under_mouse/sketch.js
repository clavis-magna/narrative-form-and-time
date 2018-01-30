function setup() {
  createCanvas(500,500);
}

function draw() {
  // redraw my background red every frame
  background(255, 0, 0);
  // set my fill color to blue
  fill(0, 0, 255);
  strokeWeight(5);
  ellipse(250, 250, 50, 50);
  
  //create a variable call myColor
  // and make it equal to the color of the pixel under the mouse
  // (do this every frame so when we move the mouse the variable is upldate)
  var myColor = get(mouseX, mouseY);
  
  // use if statements to check if the value color under the muse is a partucilar color
  // 'get' returns an RGBA color as an array (a sort of coded list) of values between 0(no color) and 255(fully staurated color)
  // and we access these values using a syntax like red(myColor), green(myColor) etc.
  // check the web console to check the print statements
  if (red(myColor) == 255 && green(myColor) == 0 && blue(myColor) == 0) {
    print("it's red");
  } 
  else if (red(myColor) == 0 && green(myColor) == 0 && blue(myColor) == 255) {
    print("it's blue");
  } 
  else {
    print("it's something else");
  }
}