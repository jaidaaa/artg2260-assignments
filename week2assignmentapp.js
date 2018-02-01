var weight = 3;
// Declare button dimensions as global variables in 
// case you need more buttons later
var buttonWidth = 20; 
var buttonHeight = 20;
// Declare a boolean to toggle between ellipse and line
var drawCircle = true; 

function setup() {
	createCanvas(800, 800);
	stroke(0); // we moved the default stroke color to setup()
    strokeWeight(weight);
}

function draw(){
	// draw a button. we'll use it to toggle between drawing rects and lines 
  	fill (0,0,0);
  	ellipse(100, 100, buttonWidth, buttonHeight);

  	if (mouseIsPressed == true) {
    	if (drawCircle == true){
      		// draw squares if drawRect == true, using "weight" as the width and height parameters
      		fill(0,0,0);
          ellipse(mouseX, mouseY, 50, 50); 
   		} else {
      		// draw a line if drawRect == false, using "weight" as the strokeWeight
      		strokeWeight(weight);
      		line(mouseX, mouseY, pmouseX, pmouseY);
      	}
    }	
}

// lets use another one of p5's functions called mouseReleased()
function mouseReleased() {
    // see if our button was clicked
    if ((mouseX > 100) && (mouseX < buttonWidth+100) && (mouseY > 100) && (mouseY < buttonHeight+100)){
      print("our button was clicked!"); // prints to the console so we know it's working
      if (drawCircle == true){ 
          drawCircle = false; // if drawRect is true, switch to false
      } else {
          drawCircle = true;  // if drawRect is false, switch to true
      }
    }
}

function keyPressed() {
	if (key == 'a' || key == 'A') {
	  stroke(0, 0, 255);
	} else if (key == 'w' || key == 'W'){
	  stroke(0, 255, 255);
	} else if (key == 'd' || key == 'D'){
	  stroke(255, 0, 255);
	} else if (key == 's' || key == 'S'){
	  stroke(0);
	} else if (keyCode == RIGHT_ARROW){
      weight++;
      strokeWeight(weight);
    } else if (keyCode == LEFT_ARROW){
      weight/=2;
      strokeWeight(weight);
    }
}