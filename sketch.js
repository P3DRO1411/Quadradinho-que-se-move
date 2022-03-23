var sprite; 


function setup() {
  createCanvas(400,400);
  sprite=createSprite(200,200,20,20);  



}

function movimento(){
  if(keyDown("d")){
    sprite.x=sprite.x+2



  }
  if(keyDown("a")){
    sprite.x=sprite.x-2
  }
  if(keyDown("w")){
    sprite.y=sprite.y-2
  }
  if(keyDown("s")){
    sprite.y=sprite.y+2
  }
  
    
}



function draw() 
{
  background(30);
  drawSprites();
  movimento();



}




