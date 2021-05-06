 var snake,snakeImg;
 var mouse1,mouse2,mouse3,mouseImg;
 var mongoose,mongooseImg;
 var background,backgroundImg;
 var maze1,maze2,maze3,maze4,maze5,maze6,maze7,maze8,maze9,maze910;
 var maze11,maze12,maze13,maze14,maze15,maze16,maze17,maze18,maze19,maze920;
var maze21,maze22,maze23;
 
 
 function preload (){
backgroundImg = loadImage ("background.png");
mongooseImg = loadImage ("mongoose.png");
mouseImg = loadImage ("mouse.png");
snakeImg = loadImage ("snake.png");



}

function setup (){
createCanvas (800,800);
snake = createSprite (50,40);
snake.addImage ("snake",snakeImg);
snake.scale=0.1;

mouse=createSprite(730,60);
mouse.addImage("mouse",mouseImg);
mouse.scale=0.1;


//border mazes
maze1=createSprite(400,10,800,10);
maze1.shapeColor="brown";
maze2=createSprite(780,400,10,800);
maze2.shapeColor="brown";
maze3=createSprite(400,780,800,10);
maze3.shapeColor="brown";
maze4=createSprite(10,400,10,800);
maze4.shapeColor="brown";

// mazes inside the border
maze5=createSprite(100,200,300,10);
maze5.shapeColor="brown";
maze6=createSprite(400,100,10,300);
maze6.shapeColor="brown";
maze7=createSprite(480,100,150,10);
maze7.shapeColor="brown";
maze8=createSprite(400,400,300,10);
maze8.shapeColor="brown";
maze9=createSprite(100,600,200,10);
maze9.shapeColor="brown";
maze10=createSprite(400,800,10,400);
maze10.shapeColor="brown";
maze11=createSprite(600,800,10,500);
maze11.shapeColor="brown";
maze12=createSprite(400,490,300,10);
maze12.shapeColor="brown";
maze13=createSprite(200,700,100,10);
maze13.shapeColor="brown";
maze14=createSprite(100,45,10,100);
maze14.shapeColor="brown";
maze15=createSprite(200,100,209,10);
maze15.shapeColor="brown";
maze16=createSprite(245,750,10,100);
maze16.shapeColor="brown";
maze17=createSprite(130,300,10,200);
maze17.shapeColor="brown";
maze18=createSprite(660,240,10,300);
maze18.shapeColor="brown";
maze19=createSprite(540,240,90,10);
maze19.shapeColor="brown";
maze20=createSprite(270,300,50,10);
maze20.shapeColor="brown";
maze21=createSprite(300,600,20,10);
maze21.shapeColor="brown";
maze22=createSprite(500,680,20,10);
maze22.shapeColor="brown";
maze23=createSprite(700,600,20,10);
maze23.shapeColor="brown";
// mongoose thing
mongoose=createSprite(60,450);
mongoose.addImage("mongoose",mongooseImg);
mongoose.scale=0.08;
mongoose.velocityX=8;

}

function draw (){
background (backgroundImg);
createEdgeSprites();

mongoose.bounceOff(maze2);
mongoose.bounceOff(maze4);

snake.bounceOff(maze1);
snake.bounceOff(maze2);
snake.bounceOff(maze3);
snake.bounceOff(maze4);
snake.bounceOff(maze5);
snake.bounceOff(maze6);
snake.bounceOff(maze7);
snake.bounceOff(maze8);
snake.bounceOff(maze9);
snake.bounceOff(maze10);
snake.bounceOff(maze11);
snake.bounceOff(maze12);
snake.bounceOff(maze13);
snake.bounceOff(maze14);
snake.bounceOff(maze15);
snake.bounceOff(maze16);
snake.bounceOff(maze17);
snake.bounceOff(maze18);
snake.bounceOff(maze19);
snake.bounceOff(maze20);
snake.bounceOff(maze21);
snake.bounceOff(maze22);
snake.bounceOff(maze23);

//if(snake.isTouching(maze1))

//snake movements
if(keyDown(UP_ARROW)){
    snake.y-=3;
    snake.rotation=-90
}
if(keyDown(DOWN_ARROW)){
    snake.y+=3;
    snake.rotation=90
}
if(keyDown(RIGHT_ARROW)){
    snake.x+=3;
    snake.rotation=0
}
if(keyDown(LEFT_ARROW)){
    snake.x-=3;
    snake.rotation=180;
}


drawSprites ();

}