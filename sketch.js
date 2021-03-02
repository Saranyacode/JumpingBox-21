var canvas,edges;
var block1, block2,block3,block4;
var box;
var music;

function preload(){
    music = loadSound("pop.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    edges = createEdgeSprites();

    //create 4 different surfaces
    block1 = createSprite(50,590,200,30);
    block1.shapeColor = "purple";

    block2 = createSprite(270,590,200,30);
    block2.shapeColor = "red";

    block3 = createSprite(490,590,200,30);
    block3.shapeColor = "yellow";

    block4 = createSprite(710,590,200,30);
    block4.shapeColor = "green";

    //create box sprite and give velocity
    box = createSprite(random(30,780),200,30,30);
    box.shapeColor = "white";
    box.velocityX = 5;
    box.velocityY = 9;
    music.play();

}

function draw() {
    background("black");
    //create edgeSprite
    box.bounceOff(edges);
    

    //add condition to check if box touching surface and make it box
    if(block1.isTouching(box)){
        box.bounceOff(block1);
        box.shapeColor = "purple";
        music.play();
        
    }
    if(block3.isTouching(box)){
        box.bounceOff(block3);
        box.shapeColor = "yellow";
        music.play();
    }
    if(block4.isTouching(box)){
        box.bounceOff(block4);
        box.shapeColor = "green";
        music.play();
    }
    if(block2.isTouching(box)){
        box.velocityX = 0;
        box.velocityY = 0;
        box.shapeColor = "red";
        music.stop();
    }



    drawSprites();
    text(mouseX + ","+ mouseY,mouseX,mouseY);
}
