/*
ARTG2260
Jaida Mercurio
Assignment 1.0
Stick Figure:  Jaida While Coding
*/

function setup() {
  var cnv = createCanvas(400, 400);
  cnv.parent('sketch-holder');
  background(color(255));

  //Floor
  noStroke();
  fill(0, 204, 255);
  ellipse(208, 304, 180, 34);
  noFill();
  stroke(0);

  //Left Leg
  line(150, 320, 200, 300 );
  line(150, 320, 130, 370);


  //Right Leg
  line(200, 300, 245, 320);
  line(245, 320, 265, 370);

 
  //Back
  line(200,300,200,202);

  //Head
  ellipse(205, 175, 56, 56);

  //Eyes
  line(204, 156, 200, 170);
  line(218, 159, 214, 173);


  //Mouth
  bezier(190, 185, 195, 180, 210, 180, 215, 187);

  //Left Arm
  line(200, 210, 240, 242);
  line(240, 242, 280, 220);
  line(280, 220, 287, 220);



  //Right Arm
  line(200, 210, 160, 242);
  line(160, 242, 125, 220);
line(125,220, 118, 220)
  


}