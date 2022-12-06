var x = 50;
    var y = 50;
    var diameter = 25;
var mouseShapeX;
var mouseShapeY;
var w = 87; 
var s = 83;
var a = 65;
var d = 68;

//x and y for a shape
var myXs = [];
var myYs = [];
var myDiameters = [];
var Xspeed = [];
var Yspeed = [];
rectX = 80;
rectdirection = 1;
borderX = 80;
borderdirection = 2;
rectY = 10;
Ydirection = 1.5;
borderY = 10;
borderYdirection = 2.5;

    function setup()
    {
        createCanvas(800,600);
      for(var i = 0; i < 2; i++)
        {
          myXs[i] = getRandomNumber(800);
          myYs[i] = getRandomNumber(600);
          myDiameters[i] = getRandomNumber(100);
        }
    }
    function draw()
    {
      characterMovement();
        background(0);
        fill(24,200,29);
        circle(x,y,diameter);
      textSize(35);
  text('Exit', 620, 520);
      
      //border1
      rect(rectX,20,500,10);
      rectX += rectdirection;
      if(rectX >= 85 || rectX <= 15)
    {
      rectdirection *= -1;
    }
      //border2
      rect(borderX,500,500,10);
      borderX += borderdirection;
      if(borderX >= 85 || borderX <= 15)
    {
      borderdirection *= -1;
    }
      //border3
      let c = color(255, 204, 0);
      fill(c);
      rect(10,rectY,10,500);
      rectY += Ydirection;
      if(rectY >=15 || rectY <= 5)
      {
       Ydirection *=-1 
      }
      //border4
      rect(700,borderY,10,500);
      borderY += borderYdirection;
      if(borderY >= 15 || borderY <5)
      {
        borderYdirection *=-1
      }
      if(x > width && y > width-50)
    {
        fill(0);
        stroke(5);
        textSize(26);
        text("You Win!", width/2-50, height/2-50);
      {
        console.log(i);
        i++;
      }
    }
      for (var i = 0; i < myXs.length; i++) {
        circle(myXs[i], myYs[i], myDiameters[i]);
        Xspeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        Yspeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        // move the shape
        myXs[i] += Xspeed[i];
        myYs[i] += Yspeed[i];
        // check to see if the shape has gone out of bounds
        if (myXs[i] > width) {
            myXs[i] = 0;
        }
        if (myXs[i] < 0) {
            myXs[i] = width;
        }
        if (myYs[i] > height) {
            myYs[i] = 0;
        }
        if (myYs[i] < 0) {
            myYs[i] = height;
        }
    }
      fill(120,130,140);
    circle(mouseShapeX, mouseShapeY, 25);
    }
     function characterMovement()
    {
      //handlekeys
    if(keyIsDown(w))
    {
        y -= 10;   
    }
    if(keyIsDown(s))
    {
        y += 10;   
    }
    if(keyIsDown(a))
    {
        x -= 10; 
      console.log("movement: " + x);
    }
    if(keyIsDown(d))
    {
        x += 10;   
    }
    }

function changeDiameter()
{
  if(diameter < 100)
    {
      diameter += 2;
    }
  else if(diameter >= 100)
    {
      diameter = 25;
    }
}

function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}

function getRandomNumber(number)
{
  return Math.floor(Math.random()*number)+10;
}

function ConcentricCircle(x,y, outer_diameter, inner_diameter, outer_purple, outer_yellow,outer_orange, inner_purple, inner_yellow, inner_orange)
    {
        fill(outer_yellow,outer_purple, outer_orange);
        circle(x,y,outer_diameter);
        fill(inner_orange, inner_purple, inner_yellow);
        circle(x,y,inner_diameter);
    }