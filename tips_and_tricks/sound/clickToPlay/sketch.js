// audio attribution
// Cuckoo & The Nightingale Duet.MP3 by Vonora | License: Creative Commons

var song;

function setup() {
  song = loadSound('assets/birds.mp3');
  createCanvas(720, 200);
  background(255,0,0);
}

function mousePressed() {
  if (song.isPlaying() ) { // .isPlaying() returns a boolean
    song.pause();
    background(255,0,0);
  } else {
    song.play();
    background(0,255,0);
  }
}
