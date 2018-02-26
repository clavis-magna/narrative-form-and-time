function setup() {
  createCanvas(400,100);
  background(0);
  noStroke();
  fill(255);
  textAlign(CENTER);
  text('', width/2, height/2);

  mySound = loadSound('assets/tide.mp3');

  // schedule calls to changeText
  mySound.addCue(0.10, changeText, "but over here" );
  mySound.addCue(1.10, changeText, "in this point" );
  mySound.addCue(1.80, changeText, "here" );
  mySound.addCue(2.90, changeText, "see there like a little inlet here?" );
  mySound.addCue(6.40, changeText, "when we saw the tide was starting to turn" );
  mySound.addCue(9.37, changeText, "we" );
  mySound.addCue(9.72, changeText, "we'd 'ead back" );
  mySound.addCue(11.8, changeText, "because" );
  mySound.addCue(14.2, changeText, "we had to beat the tide" );
  mySound.addCue(15.60, changeText, "to get" );
  mySound.addCue(16.13, changeText, "around that point there" );  
}

function changeText(val) {
  background(0);
  text(val, width/2, height/2);
}

function mouseClicked() {
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    if (mySound.isPlaying() ) {
      mySound.stop();
    } else {
      mySound.play();
    }
  }
}