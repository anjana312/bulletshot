var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1300,400);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  bullet=createSprite(50, 200, 20, 50);
  wall=createSprite(1200,200,thickness,200);
  wall.shapeColor="yellow"
  bullet.shapeColor="white";
  
  bullet.velocityX=speed;
}

function draw() {
  background(0,0,0);  

  drawSprites();

  //hasCollided();
}
function hasCollided(bullet,wall){
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdges>=wallLeftEdge){
    return true
  }
    return false;
}
if(hasColllided(bullet,wall)){
  bullet.velocityX=0;
  var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness);
  if(damage>10){
    wall.shapeColor="red";
  }
  if(damage<10){
    wall.shapeColor="green";
  }
}