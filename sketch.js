const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={isStatic: true};
    

    var balloptions={restitution: 2};

    ball=Bodies.circle(200,200,55,balloptions);
    World.add(world,ball);
    

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);

    

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    
    fill("red");
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,55);
}