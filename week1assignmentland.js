/*
ARTG2260
Jaida Mercurio
Assignment 1.1
Landscape
*/

function setup() {
  var cnv = createCanvas(840,570);
  cnv.parent('sketch-holder');
 
 //sky
 noStroke();
fill(0,205,205,100);
rect(0,0,840,700);

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

//mountain range
noStroke();
fill(0,200,200);
rect(0,410,840,300);
triangle(0,410,200,355,300,410)
fill(0,200,200);
triangle(250,410,350,375,400,410);
triangle(350,410,500,355,650,410);
triangle(600,410,650,375,750,410);
triangle(700,410,750,375,875,410);



//back tree// grass
noStroke();
fill(0,150,0);
rect(0,420,840,300);
fill(130,80,0);
rect(600,350,15,100)
fill(100,120,0);
ellipse(610,350,120,120);

//tree 1
fill(130,80,0);
rect(700,200,25,290)
fill(100,160,0);
ellipse(710,270,200,200);

//apples
fill(220,0,0);
ellipse(715,275,15,15);
fill(220,0,0);
ellipse(700,300,15,15);
fill(220,0,0);
ellipse(675,250,15,15);
fill(220,0,0);
ellipse(775,220,15,15);
fill(220,0,0);
ellipse(770,300,15,15);
fill(220,0,0);
ellipse(635,250,15,15);
fill(220,0,0);
ellipse(645,310,15,15);
fill(220,0,0);
ellipse(710,340,15,15);
fill(220,0,0);
ellipse(710,210,15,15);

//tree 2
fill(130,80,0);
rect(450,200,25,290)
fill(100,140,0);
ellipse(460,270,200,200);

//tree 3
fill(130,80,0);
rect(520,400,15,100)
fill(100,160,0);
ellipse(530,350,120,120);

//apples
fill(220,0,0);
ellipse(500,310,15,15);
fill(220,0,0);
ellipse(490,375,15,15);
fill(220,0,0);
ellipse(510,350,15,15);
fill(220,0,0);
ellipse(550,305,15,15);
fill(220,0,0);
ellipse(560,350,15,15);
fill(220,0,0);
ellipse(550,380,15,15);


}