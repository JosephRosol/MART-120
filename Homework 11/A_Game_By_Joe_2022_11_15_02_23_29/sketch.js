var x = 50;
    var y = 50;
    var diameter = 25;
var mouseShapeX;
var mouseShapeY;
var w = 87; 
var s = 83;
var a = 65;
var d = 68;
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
    }
    function draw()
    {
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
      
      //handlekeys
    if(keyIsDown(w))
    {
        characterY -= 10;   
    }
    if(keyIsDown(s))
    {
        characterY += 10;   
    }
    if(keyIsDown(a))
    {
        characterX -= 10;   
    }
    if(keyIsDown(d))
    {
        characterX += 10;   
    }
      
      if(x > width && y > width-50)
    {
        fill(0);
        stroke(5);
        textSize(26);
        text("You Win!", width/2-50, height/2-50);
    }
      fill(120,130,140);
    circle(mouseShapeX, mouseShapeY, 25);
    }

function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}