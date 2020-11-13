var bullet,wall
var speed,weight


function setup() {
  createCanvas(1600,400);
  speed=random(55,90)
  weight=random(400,1500)
  bullet=createSprite(50,200,50,5)
  wall=createSprite(1000,200,60,height/2)
  thickness=random(22,83)
  bullet.shapeColor="white"
bullet.velocityX = speed;
}

function draw() {
  background(0);  
  drawSprites();
 if(hasCollided(bullet,wall)){
	 bullet.velocityX=0
	 var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
	if(damage>10){
		wall.shapeColor=color(255,0,0);
	}
if(damage<10){
	wall.shapeColor=color(0,255,0)
}
 }
 
  drawSprites()
}

function hasCollided(Lbullet,Lwall){
	bulletRightEdge=Lbullet.x +Lbullet.width
	wallLeftEdge=Lwall.x
	if (bulletRightEdge>=wallLeftEdge){
		return true
	}
	return false
}