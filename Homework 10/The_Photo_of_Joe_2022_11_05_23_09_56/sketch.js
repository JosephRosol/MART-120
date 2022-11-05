var x = 105;
var y = 150;
var diameter = 50;
var movement = 10;
var pupilX = 88;
var pupilY = 160;
var pupildirection = 1;
var rectX = 40;
var rectY = 65;
var rectdirection = 2;
var eyeY = 150;
var eyedirection = 3;
var hatX = 180;
var hatdirection = 1.5;
var Size = 28;
var sizeDirection = 2.5;
var count = 0;
var faceY = 200;
var faceX = 200;
var facedirection = 3.5;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  textSize(Size);
  Size += sizeDirection;
    count++;
    if(count > 5)
    {
        sizeDirection *=-1;
        count = 0;
    }
  text('Joe Swagger', 10, 30);
  textSize(14);
  text('By: Joseph Rosol', 275, 380);
  
  //nose
  triangle(30, 190, 88, 130, 86, 180);
  
  //face
  circle(faceX, faceY, 270);
  faceX += facedirection;
  faceY += facedirection;
  if(faceY >= 205 || faceY <=180);
  if(faceX >= 210 || faceX <=165)
  {
    facedirection *=-1;
  }
  
  //eye
  circle(105, eyeY, 50);
  eyeY += eyedirection;
  if(eyeY >= 151 || eyeY <= 50)
    {
      eyedirection *=-1;
    }
  
  //hatbrim
  rect(40,rectY,140,20);
  rectY += rectdirection;
  if(rectY >= 70 || rectY <= 15)
    {
      rectdirection *= -1;
    }
  
    x += movement;
  //hat
  square(hatX,-25,130);
  hatX += hatdirection;
  if(hatX >= 190|| hatX <= 110)
     {
       hatdirection *= -1;
     }
  
  //pupil
  fill(0, 0, 0);
  circle(pupilX, pupilY, 15);
  pupilX += pupildirection;
  if(pupilX >=150 || pupilX <= 10)
    {
      pupildirection *= -1;
    }
  
     x += movement;
  //mouth
  fill(255, 255, 255);
  line(67, 210, 90, 210);
}