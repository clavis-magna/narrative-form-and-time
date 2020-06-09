let screen = 1;
let numberOfPages = 3;

// Variables for our image sequence
let images;
let opacity;
let currentlyFadingImageIndex = 0;
let startAnimation = false;

function preload(){
  // Load in our images
  images = [
    loadImage('assets/star_1.png'),
    loadImage('assets/star_2.png'),
    loadImage('assets/star_3.png'),
    loadImage('assets/star_4.png'),
    loadImage('assets/star_5.png'),
    loadImage('assets/star_6.png'),
    loadImage('assets/star_7.png'),
    loadImage('assets/star_8.png'),
  ]
  // Set the opacity for all 8 images to 0 to begin with
  opacity = [0,0,0,0,0,0,0,0];
}

function setup() {
  createCanvas(600,600);
}

function draw () {
  if (screen==1) {

    //draw first screen
    background(66, 135, 245);
    text("Page 1", 10,20);

  } else if (screen==2) {

    //draw second screen
    background(240);

    // If our start animation variable has been set to true by the user clicking in the rectangle then we can progress the animation
    if( startAnimation ) {
      progressAnimation();
    }

    // We will draw every image but with the matching opacity value from the opacity array
    for(let i = 0; i < images.length; i++) {
      // Set the tint using opacity value
      tint(255, opacity[i]);
      // Draw the image
      image( images[i], 0, 0, 600, 600 );
      // Reset the tint for all other objects drawn
      tint(255, 255);
    }

    // Draw our rectangle
    rect(50, 50, 100, 100);
    text('press me', 60, 80);

  } else if (screen==3) {
    //draw fourth screen
    background(240, 240, 80);
    text("Page 3", 10,20);
  }
}

function progressAnimation () {
  // Increase the opacity of the image that is CURRENTLY animating. This opacity is accessed via our variable currentlyFadingImageIndex.
  opacity[currentlyFadingImageIndex] += 50; // Smaller value for slower fade.
  
  // If we have hit maximum opacity for the currently fading image we move to the next image by increasing the currentlyFadingImageIndex variable.
  if( opacity[currentlyFadingImageIndex] > 255 ) {
    currentlyFadingImageIndex++
  }
  
  // Now, if we are on the LAST image (ie. the image index equals or is greater than the length of the image array) then we can do the things we want to do at the end of the animation. In this case reset the variables and then move to the next screen.
  if ( currentlyFadingImageIndex >= images.length ) {
    // I have put the reset code into it's own function
    resetAnimationVars();
    // Increase the screen
    screen = 3;
  }
}

function resetAnimationVars() {
  // Reset all variables
  currentlyFadingImageIndex = 0;
  opacity = [0,0,0,0,0,0,0,0];
  startAnimation = false;
}

function mousePressed () {
  // Screen conditionals
  if (screen==1) {
    screen = 2;
  } else if (screen==2) {
    // do nothing
  } else if (screen==3) {
    screen = 1;
  }
}

function mouseReleased () {
  // If the mouse is released on screen 2 in the rectangle
  if (screen==2 && mouseIsInRect(50, 50, 100, 100)) { 
    startAnimation = true;
  }
}

function mouseIsInRect( x, y, width, height ){
  return (
    mouseX > x &&
    mouseX < x + width &&
    mouseY > y &&
    mouseY < y + height
  );
}

