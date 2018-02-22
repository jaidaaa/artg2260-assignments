let poison = [];
let platforms = [];
let apples = [];

let WIDTH = 800;
let HEIGHT = 800;

let playspace = 800;

let movement = 20;

let gameState = 0;
let score = 0;


var playerVar;
var poisonVar;
var spotvar;
function setup(){
  framerate = 20;

createCanvas(800, 800);



}
//starting and ending the game
function draw(){
  if (gameState == 0){
    startScreen();
  } else if (gameState == 1){
    update();
  } else if (gameState == 2){
    gameOver();
  }
}
//start
function startScreen(){
  background(255);
  text("Click to Begin", 100, 300);


 poison = [];
  for (let i = 0; i < 5; i++){  // a for() loop creates given number of poisonous spots
    
    // an index creates multiple poisonous spots
    poison[i] = new Poison(WIDTH/2,
      0, .5 * i + 1); //speed



   }



    //set up player 
    playerVar = new player(WIDTH/2, 700);

  poisonVar = new Carrot(floor(random(0,100)) * movement +  WIDTH/2 - movement,
      floor(random(0,100)) * movement +  WIDTH/2 - movement);

    score = 0;

    spotvar = new Poison(floor(random(0,10)) * movement +  WIDTH/2 - movement, 
      0, 1);


}

//draw background
function update(){
 //draw sky
  noStroke();
  background(150, 200, 255);

// grass
noStroke();
fill(0,150,0);
rect(0,500,800,300);

//tree 1
fill(130,80,0);
rect(400,275,50,290);
fill(100,160,0);
ellipse(420,270,400,400);
fill(0,0,0);
ellipse(425,510,20,25);

//apples (non-moving)
fill(255,0,0);
ellipse(320,270,25,25);
ellipse(396,140,25,25);
ellipse(410,270,25,25);
ellipse(435,300,25,25);
ellipse(520,230,25,25);
ellipse(500,170,25,25);
ellipse(320,300,25,25);
ellipse(420,100,25,25);
ellipse(340,113,25,25);
ellipse(285,290,25,25);
ellipse(420,400,25,25);
ellipse(500,390,25,25);
ellipse(510,260,25,25);
//sun
  noStroke();
fill(350,350,0);
ellipse(160,120,160,160);
fill(350,350,0,70);
ellipse(160,120,200,200);
fill(350,350,0,50);
ellipse(160,120,250,250);
fill(350,350,0,40);
ellipse(160,120,350,350);

noStroke();
fill(255);
ellipse(50,100,100,60);
ellipse(100,100,30,30);
ellipse(80,80,30,30);
ellipse(82,122,30,30);
ellipse(82,122,30,30);
ellipse(53,126,30,30);
ellipse(24,122,30,30);
ellipse(17,102,30,30);
ellipse(17,102,30,30);
ellipse(17,102,30,30);
ellipse(12,80,30,30);
ellipse(51,73,30,30);

// cloud #2
noStroke();
fill(255);
ellipse(700,130,100,60);
ellipse(750,130,30,30);
ellipse(730,110,30,30);
ellipse(732,152,30,30);
ellipse(732,152,30,30);
ellipse(703,156,30,30);
ellipse(674,152,30,30);
ellipse(657,132,30,30);
ellipse(657,132,30,30);
ellipse(657,132,30,30);
ellipse(672,110,30,30);
ellipse(701,103,30,30);


//display current score
text("Score: " + score, 10, 30); 



  playerVar.display();

  poisonVar.display();

  poisonVar.hit(playerVar);

      for (let i = 0; i < poison.length; i++){  // Make a for() loop to loop through each Spot 
    poison[i].move(0);            // Move each object
    poison[i].display();         // Display each object
    poison[i].check(playerVar);           // Check for mouse overlap
  }

}

function gameOver(){
  background(255);
  text("Game Over", 10, 30);
  text("Score: " + score, 10, 90);
}

function mouseClicked(){
 if (gameState == 0){ //start to playing
   gameState = 1;
 } else if (gameState == 2){ //game over to restart to start again
   gameState = 0;
 }
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    playerVar.moveTo(LEFT_ARROW);
  } else if (keyCode === RIGHT_ARROW) {
    playerVar.moveTo(RIGHT_ARROW);
  }

}

class Poison {
  constructor(_x, _y, _speed) {
    this.x = _x;
    this.y = _y;
    this.speed = _speed;
  }


  move(direction) {
    if(direction === 0) {
      this.y += this.speed;
      if (this.y > (WIDTH)){
        this.place()
    }
  }  else if(direction === 1) {
      this.y -= this.speed;
      if (this.y < 0) {
        this.place()
      }
    } else if(direction === 2) {
      this.x += this.speed;
      if (this.x > (HEIGHT)) {
        this.place()
      }
    }else if(direction === 3) {
      this.x -= this.speed;
      if (this.x < 0) {
        this.place()
    }
  }
}






  place() { 
    if(floor(0,4) === 0) {
      new Poison(
        this.x = random(275,575),
        this.y = (floor(random(0,3)) * (playspace + 10) +  150  - movement),
        this.speed);
    } else if(floor(0,4) === 1) {
      new Poison(
        this.x = random(275,575),
        this.y = (floor(random(0,3)) * (playspace + 10) +  150  - movement),
        this.speed);
    } else if(floor(0,4) === 2) {
      new Poison(
        this.x = (floor(random(0,3)) * (playspace + 10) +  150  - movement),
        this.y = 0,
        this.speed);
    } else if(floor(0,4) === 3) {
      new Poison(
        this.x = (floor(random(0,3)) * (playspace + 10) +  150  - movement),
        this.y = HEIGHT,
        this.speed);
    }
  }


  display() {
    fill(0, 0 ,0);
     ellipse(this.x, this.y, 25, 25);
  }

  check(player) {
    if (abs(this.x - player.x) < 10
      && abs(this.y  - player.y) < 10){
      gameState = 2;
    }
  }
}

class platform {
  constructor(_x, _y, _length) {
    this.x = _x;
    this.y = _y;
    this.length = _length;
  }

  display() {
    fill(25);
    rect(this.x, this.y, this.length, this.length);
  }
}

 class player {
  constructor(_x, _y, _img) {
    this.x = _x;
    this.y = _y;
    this.img = _img;
  }

  moveTo(direction) {
    if(direction === LEFT_ARROW && this.x > WIDTH - WIDTH) {
      this.x = this.x - movement;
    }
    else if(direction === RIGHT_ARROW && this.x < WIDTH + WIDTH) {
      this.x = this.x + movement;
    }
    
  }
//size and color of player
  display() {
    fill(255, 170, 70);
    ellipse(this.x+5, this.y, 75, 75);
   fill(255,200,200);
    ellipse(this.x+5, this.y+2, 45, 45);
     fill(255, 170, 70);
    ellipse(this.x+5, this.y-53, 60, 60);
    ellipse(this.x-16, this.y-83, 20, 20);
      ellipse(this.x+21, this.y-85, 20, 20);
    fill(250,10,60);
    bezier(this.x-14, this.y-50, this.x-5, this.y-30, this.x+15, this.y-30, this.x+23, this.y-50);
      fill(255);
      ellipse(this.x-7, this.y-60, 20, 20);
      ellipse(this.x+13, this.y-60, 20, 20);
fill(0,0,0);
ellipse(this.x-7, this.y-67, 8, 8);
      ellipse(this.x+13, this.y-67, 8, 8);

  }
}


class Carrot {
  constructor(_x, _y) {
    this.x = _x;
    this.y = _y;
  }

  place() { 
    new Carrot(
      this.x = floor(random(0,3)) * (playspace + 10) +  WIDTH/2  - movement,
      this.y = floor(random(0,3)) * (playspace + 10) +  WIDTH/2  - movement);
  }

  hit(player) {
    if(this.x === player.x && this.y === player.y){
      score++
      this.place();
    }
  }

  display() {
    fill(255, 0, 0);
    ellipse(this.x, this.y, 20, 20);
  }

}


