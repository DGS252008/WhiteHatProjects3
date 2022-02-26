var scAngle, mnAngle, hrAngle;

function setup() {
  createCanvas(600, 600);
  hr = hour();
  mn = minute();
  sc = second();
  
  angleMode(DEGREES)

  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(0);  
  scAngle = map(sc, 0, 60, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  hrAngle = map(hr, 0, 60, 0, 360);

  //second hand
  push();
  rotate(scAngle);
  stroke('#FFF07C');
  strokeWeight(7);
  line(300, 300, 300, 100);
  pop();
  drawSprites();
}