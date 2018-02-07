var x, y;
n=70;

function setup() {
  createCanvas(800, 800);
  x = width / 50;
  y = height;
}

function draw() {
  // Draw a low-opacity white rectangle 
 fill(255, 255,255, 90); 
  rect(0, 0, width, height);

 for (var i=0; i<n; i++){
  var y = (frameCount + random(-800,800))% width;
    var x = i*50;
    stroke(50);
    fill(random(100,255),0,random(0,80));
    ellipse(x, y, 50, 50);
  }
 


  
  // Jiggling randomly on the horizontal axis
  y = y + random(-800, 800);
  // Moving up at a constant speed
  x = x - 100;
  
  // Reset to the bottom
  if (y < 0) {
    y = height;
  }
}