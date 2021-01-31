var movingRect,fixedRect;

function setup(){

  createCanvas(1200,800);

  movingRect = createSprite(600,400,50,80);
  movingRect.shapeColor = "green";
  movingRect.debug = true;


  fixedRect = createSprite(600,400,80,30);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;


}

function draw(){

    background(0);

    //collision detection 
    if(movingRect.x - fixedRect.x  < movingRect.width/2 + fixedRect.width/2
      && fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2
      &&movingRect.y - fixedRect.y  < movingRect.height/2 + fixedRect.height/2
      && fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2){

         movingRect.shapeColor="red";
         fixedRect.shapeColor="red";
    }
    else{
        movingRect.shapeColor="green";
         fixedRect.shapeColor="green";
    }

    movingRect.x = World.mouseX;
    movingRect.y = World.mouseY;

    drawSprites();

}