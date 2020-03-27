let cat;        // the cat image
let dog;        // the dog image
//let maskedDog;  // variable to hold the masked dog
//let mask;       // the mask canvas
let maskBrush;  // the 'brush' we'll draw on the mask with (a black circle)

function preload () {
    // load in all our images
    cat = loadImage("images/cat.jpg");
    dog = loadImage("images/dog.jpg");
    maskBrush = loadImage("images/mask.png");
}

function setup() {
    createCanvas(600, 600);
  
    // create an image that will mask canvas (at the same size as the canvas).
    mask = createGraphics(width, height);
    // So brush is centered on the mouse position when we draw
    mask.imageMode(CENTER);
  
    // Save a copy of the dog image. 
    maskedDog = dog.get();
    // Apply a mask to the to the copied image.
    maskedDog.mask(mask.get());
  
    // draw the cat
    image(cat, 0, 0, 600, 600);
}

function draw() {
    // Draw the masked dog image over the top of the cat (see setup function)
    image(maskedDog, 0, 0, 600, 600);
    
    // If the mouse is pressed
    if (mouseIsPressed) {
        // Then draw the brush image onto the mask
        mask.image(maskBrush, mouseX, mouseY, 100, 100);
        
        // now that the mask has changed, re-apply the mask
        // same lines from above
        maskedDog = dog.get();
        maskedDog.mask(mask.get());
    }
}