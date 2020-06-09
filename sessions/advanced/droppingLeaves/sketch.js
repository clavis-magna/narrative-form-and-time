let img;

// We have 4 images so we are going to set up some variables for each image.

// Is the image currently animating?
let isAnimating = [
  false,
  false, 
  false, 
  false
]
// Has the image finished animating?
let hasAnimated = [
  false,
  false, 
  false, 
  false
]
// What are the start positions for the image
let firstPositions = [
  [100, 100],
  [200, 100],
  [300, 100],
  [400, 100],
]
// What are the end positions for the image
let secondPositions = [
  [100, 400],
  [200, 400],
  [300, 400],
  [400, 400],
]
// Set up variable for the current position of the images. Use the first positions to begin with.
let currentPositions = firstPositions;

function preload() {
  img = loadImage('assets/leaf.png');
}

function setup() {
  createCanvas(500,500);
}

function draw() {
  background('yellow');

  // Draw each image. (4 of them, hence the for loop)
  for(let i= 0; i < 4; i++) {
    // Call our progress animation function
    progressAnimation(i);
    // Draw the image using the current positions values
    image(img, currentPositions[i][0], currentPositions[i][1], 40, 40);
  }
}

// The function for progressing your animation
function progressAnimation(index) {
  // Check that the current image 
  // A) needs to be animated, ie. isAnimating is true and
  // B) has not already finsihed its animation, ie. hasAnimated is false
  if(isAnimating[index] && !hasAnimated[index]) {
    // If the x position is still less than the final x position for the animation, then increase it by 1.
    if(currentPositions[index][0] < secondPositions[index][0]){
      currentPositions[index][0]++;
    }
    // Same for y position
    if(currentPositions[index][1] < secondPositions[index][1]){
      currentPositions[index][1]++;
    } 
    // If both x and y have finished their animations then set hasAnimated as true
    if(
      currentPositions[index][0] >= secondPositions[index][0] && 
      currentPositions[index][1] >= secondPositions[index][1]
    ) {
      hasAnimated[index] = true;
    }
  } 
}

function mouseMoved() {
  // For each image call our function that handler the mouseOver stuff
  for(let i= 0; i < 4; i++) {
    mouseOverHandler(i);
  }
}

function mouseOverHandler(index) {
  // If the mouse is in the start position for the image then start 
  // the animation by setting isAnimating to true.
  if( mouseIsInRect(firstPositions[index][0], firstPositions[index][1], 40, 40) ) {
    if(!isAnimating[index] && !hasAnimated[index]) {
      isAnimating[index] = true;
    }
  }
}

// Our function to test if the mouse is inside a given rectangle.
function mouseIsInRect( x, y, width, height ){
  return (
    mouseX > x &&
    mouseX < x + width &&
    mouseY > y &&
    mouseY < y + height
  );
}
