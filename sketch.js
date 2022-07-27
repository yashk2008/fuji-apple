var mazeW1, mazeW2, mazeW3, mazeW4, mazeW5, mazeW6, mazeW7, mazeW8, mazeW9, mazeW10, mazeW11, mazeW12, mazeW13,mazeW14,mazeW15
var mazeGroup
var kratos
var kratosimg



function preload(){
kratosimg = loadImage("Images/PCTransparent.png")
  

}

function setup() {

  mazeGroup = new Group()
  
  createCanvas(1300,800);
  kratos = createSprite(650,700,20,20)
  kratos.addImage(kratosimg)
  kratos.scale = 0.10
  mazeW1 = createSprite(50,400,20,650)
  mazeW1.shapeColor =  "#39FF14"
  mazeW2 = createSprite(300,725,525,20)
  mazeW2.shapeColor =  "#39FF14"
  mazeW3 = createSprite(500,680,20,100)
  mazeW3.shapeColor =  "#39FF14"
  mazeW4 = createSprite(975,725,470,20)
  mazeW4.shapeColor =  "#39FF14"
  mazeW5 = createSprite(1200,400,20,650)
  mazeW5.shapeColor =  "#39FF14"
  mazeW6 = createSprite(975,75,470,20)  
  mazeW6.shapeColor =  "#39FF14"
  mazeW7 = createSprite(300,75,525,20)
  mazeW7.shapeColor =  "#39FF14"
  mazeW8 = createSprite(1100,475,200,20)
  mazeW8.shapeColor =  "#39FF14"
  mazeW9 = createSprite(975,650,150,20)
  mazeW9.shapeColor =  "#39FF14"
  mazeW10 = createSprite(1050,600,20,115)
  mazeW10.shapeColor =  "#39FF14"
  mazeW11 = createSprite(935,550,225,20)
  mazeW11.shapeColor =  "#39FF14"












mazeGroup.add(mazeW1)
mazeGroup.add(mazeW2)
mazeGroup.add(mazeW3)
mazeGroup.add(mazeW4)
mazeGroup.add(mazeW5)
mazeGroup.add(mazeW6)
mazeGroup.add(mazeW7)
mazeGroup.add(mazeW8)
mazeGroup.add(mazeW9)
mazeGroup.add(mazeW10)
mazeGroup.add(mazeW11)
//mazeGroup.add(mazeW12)
//mazeGroup.add(mazeW13)
//mazeGroup.add(mazeW14)
//mazeGroup.add(mazeW15)
//mazeGroup.add(mazew16)
//mazeGroup.add(mazeW17)
//mazeGroup.add(mazeW18)
//mazeGroup.add(mazeW19)
//mazeGroup.add(mazeW20)
//mazeGroup.shapeColor = "neon"

}
function draw() {
  background("teal"); 

  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
}
if(keyDown("DOWN_ARROW")||touches.length>0){
}


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
  
  
 
}

//player goes back to original standing image once we stop pressing the space bar



//destroy zombie when player touches it


//calling the function to spawn zombies

drawSprites();
}



//creating function to spawn zombies
function enemy(){
  if(frameCount%50===0){

    //giving random x and y positions for zombie to appear
    
  }

}
