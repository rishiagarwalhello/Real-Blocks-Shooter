const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world; //The Engine and the World

var ground; //Ground
var ball; //Ball
var launcher; //Launcher
var stand1, stand2; //stands
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15, block16, block17, block18, block19, block20, block21, block22, block23, block24, block25, block26, block27, block28, block29, block30, block31, block32, block33, block34, block35, block36, block37, block38, block39, block40; //Blocks

function setup()
{
    createCanvas(1350, 550);

    engine=Engine.create();
    world=engine.world;

    ground=new Ground(width/2, height-5, 1400, 10);

    ball=new Ball(225, 350, 6, 40);

    launcher=new Launcher({x:225, y:350}, ball.body);

    stand1=new Stand(650, 525, 400, 20);
    stand2=new Stand(1100, 375, 400, 20);

    block1=new Block(650, 475, 50, 75);
    block2=new Block(595, 475, 50, 75);
    block3=new Block(540, 475, 50, 75);
    block4=new Block(485, 475, 50, 75);
    block5=new Block(815, 475, 50, 75);
    block6=new Block(705, 475, 50, 75);
    block7=new Block(760, 475, 50, 75);
    block8=new Block(512.5, 400, 50, 75);
    block9=new Block(567.5, 400, 50, 75);
    block10=new Block(622.5, 400, 50, 75);
    block11=new Block(677.5, 400, 50, 75);
    block12=new Block(732.5, 400, 50, 75);
    block13=new Block(787.5, 400, 50, 75);
    block14=new Block(540, 325, 50, 75);
    block15=new Block(595, 325, 50, 75);
    block16=new Block(650, 325, 50, 75);
    block17=new Block(705, 325, 50, 75);
    block18=new Block(760, 325, 50, 75);
    block19=new Block(567.5, 250, 50, 75);
    block20=new Block(622.5, 250, 50, 75);
    block21=new Block(677.5, 250, 50, 75);
    block22=new Block(732.5, 250, 50, 75);
    block23=new Block(595, 175, 50, 75);
    block24=new Block(650, 175, 50, 75);
    block25=new Block(705, 175, 50, 75);
    block26=new Block(622.5, 100, 50, 75);
    block27=new Block(677.5, 100, 50, 75);
    block28=new Block(650, 25, 50, 75);
    block29=new Block(1100, 325, 50, 75);
    block30=new Block(1035, 325, 50, 75);
    block31=new Block(970, 325, 50, 75);
    block32=new Block(1165, 325, 50, 75);
    block33=new Block(1230, 325, 50, 75);
    block34=new Block(1002.5, 250, 50, 75);
    block35=new Block(1067.5, 250, 50, 75);
    block36=new Block(1132.5, 250, 50, 75);
    block37=new Block(1197.5, 250, 50, 75);
    block38=new Block(1035, 175, 50, 75);
    block39=new Block(1100, 175, 50, 75);
    block40=new Block(1165, 175, 50, 75);
    block41=new Block(1067.5, 100, 50, 75);
    block42=new Block(1132.5, 100, 50, 75);
    block43=new Block(1100, 25, 50, 75);

    Engine.run(engine);
}

function draw()
{
    background("lightgreen");

    Engine.update(engine);

    ground.display();

    launcher.display();

    ball.display();

    stand1.display();
    stand2.display();

    block1.display();
    block2.display();
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
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    block26.display();
    block27.display();
    block28.display();
    block29.display();
    block30.display();
    block31.display();
    block32.display();
    block33.display();
    block34.display();
    block35.display();
    block36.display();
    block37.display();
    block38.display();
    block39.display();
    block40.display();
    block41.display();
    block42.display();
    block43.display();

	if(keyDown("space"))
	{
		Matter.Body.set(launcher.body, {bodyB:ball.body});
    }
    
	textSize(30);
	fill("red");
	strokeWeight(3);
	stroke("gold");
	text("Press Space Bar to get back the Shooter...🌠", 20, 40);
}

function mouseDragged()
{
    Body.setPosition(ball.body, {x:mouseX, y:mouseY});
}
function mouseReleased()
{
    launcher.fly();
}