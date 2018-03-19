// images cc
// cat
// https://www.flickr.com/photos/tiffanyday/2929961873
// space
// https://www.flickr.com/photos/jonpumpkin/3075762272

var backgroundImage;  // declare a variable to hold the image in
var characterImage; // every image needs to be assigned to its own variable

function setup() {
  createCanvas(960,540);
  // Load an image
  backgroundImage = loadImage("assets/background.jpg");  
  // Load the second image
  // png files can have transparent areas, jpg files can not
  characterImage = loadImage("assets/character.png");  
}

function draw() {
  // Displays the image at its actual size at point (0,0). 
  // Because it is the same size as the canvas it will fill as a background
  // the parameters are the top left hand position of the image
  image(backgroundImage, 0, 0);
  
  // Displays the forground image. I will draw on top of the background
  // remeber drawing order (top of code to bottom = background to forground)
  image(characterImage, 480, 260);
  
  // you can change the size of the image as well as its position
  // paramaters act like those of rect()
  // top-left x, top-left y, width, height
  image(characterImage,100,100,100,50);
}