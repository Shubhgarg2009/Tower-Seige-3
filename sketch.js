const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

 var engine, world;
 var block1;
 var backgroundImg,platform;
 var polygon, slingshot,gameState;
 gameState = "serve"

 function preload() {
    getBackgroundImg();
}

function setup(){
     var canvas = createCanvas(windowWidth,windowHeight);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(windowWidth/2, windowHeight/2+375,windowWidth,20);
    ground1= new Ground(windowWidth/2+500,windowHeight/2-100,600,30);
  
    platform = new Ground(windowWidth/2-640, windowHeight/2+300, 600, 170);
    ///////////
    block1 = new Block(windowWidth/2+500,90,40,40);
    block2 = new Block(windowWidth/2+500,100,40,40);
    block3 = new Block(windowWidth/2+500,100,40,40);
    block4 = new Block(windowWidth/2+500,80,40,40);
    block5 = new Block(windowWidth/2+460,90,40,40);
    block6 = new Block(windowWidth/2+460,90,40,40);
    block7 = new Block(windowWidth/2+460,90,40,40);
    block8 = new Block(windowWidth/2+540,90,40,40);
    block9 = new Block(windowWidth/2+540,90,40,40);
    block10 = new Block(windowWidth/2+540,90,40,40);
    block11 = new Block(windowWidth/2+580,90,40,40);
    block12 = new Block(windowWidth/2+580,90,40,40);
    block13 = new Block(windowWidth/2+620,90,40,40);
    block14 = new Block(windowWidth/2+420,90,40,40);
   block15 = new Block(windowWidth/2+420,90,40,40);
   block16 = new Block(windowWidth/2+380,90,40,40);
   block17 = new Block(windowWidth/2+320,90,40,40);
   block18 = new Block(windowWidth/2+320,90,40,40);
   block19 = new Block(windowWidth/2+320,90,40,40);
   block20 = new Block(windowWidth/2+320,90,40,40);
   block21 = new Block(windowWidth/2+320,90,40,40);
  

    polygon = new Polygon(100,100);
    slingshot = new SlingShot(polygon.body,{x:100, y:510});
}

function draw(){
    if(backgroundImg)
    background(backgroundImg);
    Engine.update(engine);
    
    block1.display();
    block2.display();
    ground.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
   

    polygon.display();
    slingshot.display();  
    platform.display();
    ground1.display();


}

function mouseDragged(){
if(gameState === "serve" ){
        Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "fly"
}

function keyPressed(){
    if(keyCode === 32){
       slingshot.attach(polygon.body);
       gameState="serve"
    }
}
async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=0900 && hour<=1900){
        bg = "bg.png";
    }
    else{
        bg = "bg2.png";
    }
backgroundImg = loadImage(bg);
}