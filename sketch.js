
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

function preload()
{
	
}

function setup() {
	createCanvas(900, 600);


	engine = Engine.create();
	world = engine.world;


	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: true
		}
	  });
  
//	engine.world.gravity.y = 1;
	
	//Create the Bodies Here.
	roof= new Roof(425,80,700,15);
	bob1 = new Bob(220,420,50);
	rope1= new Rope(bob1.body,{x:225,y:80});
	bob2 = new Bob(320,420,50);
	rope2= new Rope(bob2.body,{x:325,y:80});

	bob3 = new Bob(420,420,50);
	rope3= new Rope(bob3.body,{x:425,y:80});

	bob4 = new Bob(520,420,50);
	rope4= new Rope(bob4.body,{x:525,y:80});

	bob5 = new Bob(620,420,50);
	rope5= new Rope(bob5.body,{x:625,y:80});

	Engine.run(engine);
	Render.run(render);
}


function draw() {

  rectMode(CENTER);
  background("pink");
  Engine.update(engine);
  stroke("black");
  textSize(25);
  text("PRESS UP ARROW KEY TO OBSERVE THE BOB'S MOVEMENT",60,60);
  roof.display();
  rope1.display();
  bob1.display();

  rope2.display();
  bob2.display();

  rope3.display();
  bob3.display();

  rope4.display();
  bob4.display();

  rope5.display();
  bob5.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode ===  UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:200,y:-60});
	}


}

