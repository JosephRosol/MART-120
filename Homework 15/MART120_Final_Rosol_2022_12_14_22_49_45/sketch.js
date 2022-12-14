var pupil1 = 136;
var pupil2 = 186;
var pupildirection = 0.2;
var button;
var bgcolor;
let bells

function preload(){
  bells = loadSound("jingle-bells.wav")
}

function setup() {
  createCanvas(400, 400);
  bgcolor = color(200);
  
  // Create a button element
  button = createButton("change background color");
  // Attach a callback function called changeColor to the button's mousePressed event
  button.mousePressed(changeColor);
  
}

function changeColor() {
  bgcolor = color(random(150, 255), random(150, 255), random(150, 255));
}

function draw() {
  background(bgcolor);
  if(mouseIsPressed){
    bells.play()
  }
  text('Joe the Elf', 10, 30);
  textSize(20);
  text('By: Joseph Rosol', 240, 380);
  
  //face
  fill(238, 201, 201);
  circle(200, 200, 270);
  
  //hat
  fill(64, 228, 11);
  triangle(340, 150, 68, 150, 190, 1);
  fill(254, 255, 0);
  triangle(83, 128, 110, 99, 110, 128);
  triangle(319, 128, 287, 99, 287, 128);
  fill(254, 255, 0);
  rect(110,99,177,30);
  
  //glasses
  fill(238, 201, 201);
  square(175, 170, 35);
  square(125, 170, 35);
  fill(0, 0, 0);
  square(161, 170, 13);
  rect(211, 170, 121, 10)
  
  //eyes
  fill(255, 255, 255);
  circle(190, 190, 25);
  circle(140, 190, 25);
  
  //pupils
  fill(51);
  circle(pupil1, 191, 13);
  pupil1 += pupildirection;
  if(pupil1 >=137 || pupil1 <= 120)
    {
      pupildirection *= -1;
    }
  circle(pupil2, 191, 13);
  pupil2 += pupildirection;
  if(pupil2 >=110 || pupil2 <= 10)
    {
      pupildirection *= +1;
    }
  line(170, 270, 190, 270);
  line(135, 250, 180, 210);
  line(135, 250, 180, 250);
}