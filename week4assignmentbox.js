let box; 				

function setup() {
	createCanvas(300,300);
  	box = new Box(); 	
}

function draw() {
  	background(255,255,255);
  	box.display();		
	box.move();			
	box.teleport();			
}

class Box {
	constructor(){
		this.x = 30;
		this.y = 50;
		this.sides = 30;
		this.ySpeed = 1;  
	}

	display() {
		
		rect(this.x, this.y, this.sides, this.sides); 

	}

	move() {
		this.y+= this.ySpeed;	
  	}

	teleport(){
		if (this.y+this.sides/2 >= height){    
			this.y = 0;
			fill(random(0,255),random(0,255),random(0,255));
		}
	}
}