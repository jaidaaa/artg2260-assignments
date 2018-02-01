
  //Jaida Mercurio
  //ARTG2260 Programming Basics
  //Assignment 2.0
  //Tiles

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.parent('sketch-holder');
  background(252,209,91);
 }

var weight = 3;
var separation = 50;
var circumference = separation/4;


 //start tile
  circumference = 90;


function draw() {
  
  for (var x = -separation; x <= width; x+=separation) {
    for (var y = -separation; y <= height; y+=separation) {
      tile(x, y);
    }
  }
}

function tile( x, y) {
  noFill();
  stroke(200,0,100);
  strokeWeight(weight);
  
  ellipse(x+separation/4, y+separation/4, circumference, circumference+50);
}  

function keyPressed() {
  if (keyCode == LEFT_ARROW) {
    circumference -= 20;
  }  else if (keyCode == UP_ARROW) {
  weight += 2;
  } else if (keyCode == DOWN_ARROW) {
   weight -= 2;
  }
else if (keyCode == RIGHT_ARROW) {
   circumference += 20;
}
  weight = constrain(weight, 2, 20);
  separation = constrain(separation, 20, 1000);
  circumference = constrain(circumference, 20, 1000);
}