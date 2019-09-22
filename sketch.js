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

  var k=width/6

if (frameCount <= 120) {
    textSize(32);
    text("Wait 'till the end", width/2-100, 50);
    strokeWeight(1)
  translate(width/3,height/2);
  stroke(
    lerpColor(                // funzione per variare il colore da colore1 a colore2
      color(255,53,72),       // colore1
      color(204,255,0),       // colore2
      frameCount/240          // velocità della transizione
    )
  );
  line(k,0,k*cos(frameCount*3),k*sin(frameCount*3));
  fill(8,51,73)
  circle(cos(frameCount*3)*k,sin(frameCount*3)*k,4,4);

}

if (frameCount >= 120 && frameCount <= 240) {
  translate(width*2/3,height/2);
  stroke(
    lerpColor(                // funzione per variare il colore da colore1 a colore2
      color(204,255,0),       // colore2
      color(255,53,72),       // colore1
      frameCount/240          // velocità della transizione
    )
  );
  line(-k,0,-k*cos(frameCount*3),k*sin(180-frameCount*3));
  circle(-cos(frameCount*3)*k,sin (frameCount*3)*k,4,4);
}
textSize(windowHeight/5);

if (frameCount >= 340 && frameCount < 400) {
  background(8,51,73)
    strokeWeight(5)
    text("3", width/2-10, height/2);
  }
  else if (frameCount >=400 && frameCount < 460) {
    background(8,51,73)
    strokeWeight(5)
    text("2", width/2-10, height/2);
  }
  else if (frameCount >= 460 && frameCount < 520) {
    background(8,51,73)
    strokeWeight(5)
    text("1", width/2, height/2);
  }


if (frameCount >= 520) {
  background(8,51,73)
  fill(255)
  strokeWeight(10)
  stroke(0)
  push()
    translate(width/3,height/2);
    circle(0,0,width/3)
    fill(255)
  pop()
  push()
    translate(width*2/3,height/2);
    circle(0,0,width/3)
    noFill()
  pop()
  push()
    translate(width*4/12+mouseX/10,height/2+mouseY/10);
    fill(0)
    circle(0,0,100,100)
  pop()
  push()
    translate(width*7/12+mouseX/10,height/2+mouseY/10);
    fill(0)
    circle(0,0,100,100)
  pop()

}




}
