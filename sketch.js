function preload(){
  // put preload code here
}

function setup() {
createCanvas(windowWidth, windowHeight);
angleMode(DEGREES);
background(8,51,73)
noFill()
}

function draw() {
  translate(width/2,height/2);

  stroke(
    lerpColor(                // funzione per variare il colore da colore1 a colore2
      color(255,53,72),       // colore1
      color(204,255,0),       // colore2
      frameCount/120          // velocità della transizione
    )
  );
let k=300

line(k,0,k*cos(frameCount*3),k*sin(frameCount*3));

  if (frameCount == 120) {
    noLoop();


  }
}
