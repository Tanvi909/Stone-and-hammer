const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubber; 
var sBall;  
var mountain; 
var round; 
var music; 

function preload(){
music= loadSound("sounds/animals038.mp3")
}
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber= new Rubber(100,200,75); 
    sBall= new Stone(300,200,20,10); 
    mountain= new Iron(500,300); 
 

  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    if(hammer.x- rubber.x< rubber.width/2+ hammer.width/2
        && rubber.x- hammer.x< rubber.width/2 + hammer.width/2
        && hammer.y- rubber.y< rubber.height/2+ hammer.height/2
        && rubber.y- hammer.y< rubber.height/2+ hammer.height/2 ){
            music.play(); 

        }


    plane.display();
    hammer.display();
    rubber.display();
    sBall.display(); 
    mountain.display(); 

    
 
}