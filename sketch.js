var canvas;
var music;
var block1,block2,block3,block4;
var ball;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    block1 = createSprite(70,590,200,50); 
    block1.shapeColor = "blue";
    block2 = createSprite(280,590,200,50); 
    block2.shapeColor = "orange";
    block3 = createSprite(490,590,200,50); 
    block3.shapeColor = "purple";
    block4 = createSprite(700,590,200,50);
    block4.shapeColor = "green"; 
    

    //create box sprite and give velocity
     ball = createSprite(random(20,750),20,40,40);
     ball.shapeColor = "white";
     ball.velocityX=3;
     ball.velocityY=3;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
     if (ball.x<0){
     music.stop()
    ball.velocityX=3;
     }else if(ball.x>800){
         music.stop()
         ball.velocityX=-3
     }else if(ball.y<0){
         ball.velocityY=3;
     }
    createEdgeSprites();   
 drawSprites();
    //add condition to check if box touching surface and make it box
   if(block1.isTouching(ball) && ball.bounceOff(block1)){
       ball.shapeColor = "blue";
       music.play();
     } 
       if(block2.isTouching(ball)){
        ball.shapeColor = "orange";
        ball.velocityX = 0;
        music.stop();
    }
    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = "purple";
       music.play();
    } 
    if(block4.isTouching(ball) && ball.bounceOff(block4)){
        ball.shapeColor = "green";
        music.play();
    }
}
