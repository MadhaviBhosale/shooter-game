var space
var spaceImg, shooterPlane



function preload(){

 spaceImg = loadImage("bg.png")
 shooterPlane = loadImage("plane.png")

}

function setup() {
 createCanvas(600,600)
 
 space =createSprite(0,0,300,300);
 space.addImage(spaceImg);

 shooterPlane = createSprite()

 


}

function draw() {
 
    

    


drawSprite();
    
}