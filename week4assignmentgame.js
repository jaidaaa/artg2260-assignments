var player

let apples=[];
let groundBlocks=[];

let WIDTH = 800;
let HEIGHT = 800;


let blockSize=20;

let movement=20;

let gameState = 0; //start game
let score = 0; //score starts at 0

var playerVar;
var appleVar;
var poisonVar;
function setup(){
  framerate = 20;

createCanvas(800, 800);

//?
var randomNumber = floor(random(0,3));

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
}
