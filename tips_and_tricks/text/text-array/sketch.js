// a variable is created her to hold our font
// by placing the variable definition here, it is available to the entire sketch
var miniver;

// a variable to contain an array (a list) of each letter in my chgosen text
var myTextAsLetters;

// a variable we can use to count through the letters and display them
var count = 0;

// preload happens before setup and draw
// making sure our font will be loaded and ready when we need it
function preload() {
  //font can be a ttf or otf
  miniver = loadFont('assets/Miniver-Regular.ttf');
}

function setup() {
  createCanvas(200,200);
  background(0);
  
  // a variable to hold my full text
  // notice we use double quotes as we need to use a single quote as an opostrophe inside the quote
  var myText = "when we saw the tide was starting to turn, we'd head back " ;
  // split the text into individual words.
  // see https://p5js.org/reference/#/p5/split
  // the second parameter of split defines a character we use to split the text using.
  // in this can the single quote marks have a space inside, 
  // so the text is split at every space, making an array of words
  myTextAsLetters = split(myText, ' ');
  // print the letters out to the console just so we can see what an array looks like
  print(myTextAsLetters);
  
  // setup the parameters for the text we will use
  textFont(miniver);
  textAlign(CENTER,BASELINE);
  fill(200);
  textSize(40);
}

function draw() {
  background(50);
  
  // draw each letter to the screen one at a time. 
  // we access the letters through square brackets
  // the first element in the array is [0], the second element is [1] etc.
  // floor() rounds values down to the nearest whole number 
  // so that we can slow everything down adding a small fraction to count each frame. 
  text(myTextAsLetters[floor(count)], width/2,height/2);
  count = count+0.05;
  if(floor(count) == myTextAsLetters.length){
    count = 0;
  }
}