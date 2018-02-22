var bunnyimg;
var carrotimg;


let spots = [];
let platforms = [];
let carrots = [];

let WIDTH = 800;
let HEIGHT = 300;

let platformSize = 20;

let movement = 20;

let gameState = 0;
let score = 0;


var playerVar;
var carrotvar;
var spotvar;
function setup(){
  framerate = 20;

createCanvas(800, 800);



}

function draw(){
  if (gameState == 0){
    startScreen();
  } else if (gameState == 1){
    update();
  } else if (gameState == 2){
    gameOver();
  }
}

function startScreen(){
  background(255);
  text("Click to Begin", 100, 300);


for (let i = 0; i < 100; i++) {
  let x = (platformSize-100) * (i%3) + WIDTH/2 - WIDTH/5;
if (3 <= i < 6) {
    let y = HEIGHT*2 + (platformSize + 10) * 2;
    platforms[i] = new platform(x, y, platformSize);
  }   

}

 spots = [];
  for (let i = 0; i < 20; i++){  // Make a for() loop to create the desired number of Spots
    
    // Add an index [i] to create multiple Spots
    spots[i] = new Spot(WIDTH/2,500,
      0, .5 * i + 1); //speed
   }



    //set up player 
    playerVar = new player(WIDTH/2, 700);

    carrotvar = new Carrot(floor(random(0,10)) * movement +  WIDTH/2 - movement,
      floor(random(0,10)) * movement +  WIDTH/2 - movement);

    score = 0;

    spotvar = new Spot(floor(random(0,10)) * movement +  WIDTH/2 - movement, 
      0, 1);


}

function update(){
 //draw sky
  noStroke();
  background(150, 200, 255);
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

// grass
noStroke();
fill(0,150,0);
rect(0,500,800,300);



//display current score
text("Score: " + score, 10, 30); 



  playerVar.display();

  carrotvar.display();

  carrotvar.hit(playerVar);

      for (let i = 0; i < spots.length; i++){  // Make a for() loop to loop through each Spot 
    spots[i].move(0);            // Move each object
    spots[i].display();         // Display each object
    spots[i].check(playerVar);           // Check for mouse overlap
  }


 // spotvar.display();
  //spotvar.move(0);
  //spotvar.check(bunnyvar);
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

class Spot {
  constructor(_x, _y, _speed) {
    this.x = _x;
    this.y = _y;
    this.speed = _speed;
  }


  move(direction) {
    if(direction === 0) {
      this.x += this.speed;
      if (this.x > (WIDTH)){
        this.place()
    }
  }  else if(direction === 1) {
      this.x -= this.speed;
      if (this.x < 0) {
        this.place()
      }
    } else if(direction === 2) {
      this.y += this.speed;
      if (this.y > (HEIGHT)) {
        this.place()
      }
    }else if(direction === 3) {
      this.y -= this.speed;
      if (this.y < 0) {
        this.place()
    }
  }
}






  place() { 
    if(floor(0,4) === 0) {
      new Spot(
        this.x = 0,
        this.y = (floor(random(0,3)) * (platformSize + 10) +  HEIGHT/2  - movement),
        this.speed);
    } else if(floor(0,4) === 1) {
      new Spot(
        this.x = WIDTH,
        this.y = (floor(random(0,3)) * (platformSize + 10) +  HEIGHT/2  - movement),
        this.speed);
    } else if(floor(0,4) === 2) {
      new Spot(
        this.x = (floor(random(0,3)) * (platformSize + 10) +  WIDTH/2  - movement),
        this.y = 0,
        this.speed);
    } else if(floor(0,4) === 3) {
      new Spot(
        this.x = (floor(random(0,3)) * (platformSize + 10) +  WIDTH/2  - movement),
        this.y = HEIGHT,
        this.speed);
    }
  }


  display() {
    fill(255, 0 ,0);
     ellipse(this.x, this.y, 25, 25);
  }

  check(player) {
    if (abs(this.x - player.x) < 5
      && abs(this.y  - player.y) < 5){
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
    fill(255, 200, 100);
    ellipse(this.x, this.y, 100, 100);
  }
}


class Carrot {
  constructor(_x, _y) {
    this.x = _x;
    this.y = _y;
  }

  place() { 
    new Carrot(
      this.x = floor(random(0,3)) * (platformSize + 10) +  WIDTH/2  - movement,
      this.y = floor(random(0,3)) * (platformSize + 10) +  WIDTH/2  - movement);
  }

  hit(player) {
    if(this.x === player.x && this.y === player.y){
      score++
      this.place();
    }
  }

  display() {
    fill(255, 255, 100);
    ellipse(this.x, this.y, 20, 20);
  }

}


