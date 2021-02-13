var lose
var restart
var back
var joker
var jail
var alok
var drone
var drone2
var wall
var wall2
var lazer
var lazer3
var move
var help
var help1
var pi
var b
var b2
var b3
var la
var la2
var laGroup;
var la2Group;
var lazerGroup;
var lose
var restart
var gun
var gun2 
var monster
var mede
var mede_wall
var mede_wall1
var mede_wall2
var win
var music

function preload(){

  back = loadImage("back.png")
  joker1 = loadImage("joker.jpg")
  jail1 = loadImage("jail.png")
  alok1 = loadImage("alok.png")
  drone1 = loadImage("drone.png")
  lazer1 = loadImage("fire.png")
  move = loadImage("alok2.png")
  move1 = loadImage("alok3.png")
  help1 = loadImage("help.gif")
  help2 = loadImage("help1.JPG")
  pi1 = loadImage("pi.png")
  drone3 = loadImage("drone.png")
  la1 = loadImage("space.png")
  la3 = loadImage("space.png")
  lose2 = loadImage("lose.png")
  restart1 = loadImage("restart.png")
  gun1 = loadImage("gun.png")
  monster1 = loadImage("space.png")
  made1 = loadImage("hospital.png")
  win1 = loadImage("win.png")
  music = loadSound("muic.mp3")
  
}



function setup(){

  createCanvas(windowWidth,windowHeight)
  joker = createSprite(50,100)
  jail = createSprite(50,100)
  alok = createSprite(1100,500)
  drone = createSprite(200,100)
  wall = createSprite(200,400,500,10)
  wall2 = createSprite(600,5,1600,10)
  help = createSprite(1300,50,20,20)
  pi = createSprite(400,300)
  drone2 = createSprite(100,200)
  b = createSprite(1,350,10,1000)
  b2 = createSprite(650,620,1450,10)
  b3 = createSprite(1360,350,10,1000)
  gun = createSprite(400,300)
  gun2 = createSprite(200,100)
  monster = createSprite(200,500)
  made = createSprite(1300,500)
  mede_wall = createSprite(1210,500,10,150)
  mede_wall1 = createSprite(1290,420,150,10)
  mede_wall2 = createSprite(1290,580,150,10)

laGroup= new Group();
la2Group = new Group();
lazerGroup = new Group();

 music.play(); 

}

function draw(){
  background("green")

  //restart function
   if (mousePressedOver(restart)){

  restart.destroy();
  lose.destroy();

  }

  image(back,1,1,windowWidth,windowHeight)
  joker.addImage(joker1)
  jail.addImage(jail1)
  alok.addImage(alok1) 
  drone.addImage(drone1)
  help.addImage(help1)
  pi.addImage(pi1)
  drone2.addImage(drone3)
  gun.addImage(gun1)
  gun2.addImage(gun1)
  monster.addImage(monster1)
  made.addImage(made1)

 //scale
  joker.scale = 0.3
  jail.scale = 0.3
  alok.scale = 0.2
  drone.scale = 0.2
  drone2.scale = 0.3
  help.scale = 0.2
  pi.scale = 0.5
  gun.scale = 0.2
  gun2.scale = 0.1
  made.scale = 0.5

  //velocity
  monster.setVelocity(5,0) 

  //bounce off
  alok.bounceOff(b)
  alok.bounceOff(b2)
  alok.bounceOff(b3)
  alok.bounceOff(wall2)
  alok.bounceOff(wall)
  alok.bounceOff(mede_wall)
  alok.bounceOff(mede_wall1)
  alok.bounceOff(mede_wall2)

  //monster destroy
  if (monster.isTouching(b3)) {

    monster.destroy();

  }

  //alok destroy by moster
  if(monster.isTouching(alok))
  {
    alok.x = 200
    alok.x = 200
    lose = createSprite(600,300,windowWidth,windowHeight)
    lose.addImage(lose2)
    lose.scale = 3

    restart = createSprite(600,500,windowWidth,windowHeight)
    restart.addImage(restart1)
                                                                                                      
  }

  //alok destroy
  if (keyDown("up")){

    createlazerGroup();

  }

  if (lazerGroup.isTouching(alok)){

    lose = createSprite(600,300,windowWidth,windowHeight)
      lose.addImage(lose2)
      lose.scale = 3

      restart = createSprite(600,500,windowWidth,windowHeight)
      restart.addImage(restart1)


  }

  //

  if (keyDown("down")){

    createlazerGroup();

  }

  if (lazerGroup.isTouching(alok)){

    lose = createSprite(600,300,windowWidth,windowHeight)
      lose.addImage(lose2)
      lose.scale = 3

      restart = createSprite(600,500,windowWidth,windowHeight)
      restart.addImage(restart1)

  }

  if (keyDown("left")){

    createlazerGroup();

  }

  if (lazerGroup.isTouching(alok)){

    lose = createSprite(600,300,windowWidth,windowHeight)
      lose.addImage(lose2)
      lose.scale = 3

      restart = createSprite(600,500,windowWidth,windowHeight)
      restart.addImage(restart1)

  }

  //

  if (keyDown("right")){

    createlazerGroup();

  }

  if (lazerGroup.isTouching(alok)){

    lose = createSprite(600,300,windowWidth,windowHeight)
      lose.addImage(lose2)
      lose.scale = 3

      restart = createSprite(600,500,windowWidth,windowHeight)
      restart.addImage(restart1)

  }

 //alok movement
  if (keyDown("down")){

    alok.y = alok.y +10
    alok.addImage(move)
    
  }

  if (keyDown("up")){

    alok.y = alok.y -10

  }

  if (keyDown("right")){

    alok.x = alok.x +10
    alok.addImage(move1)


  }

  if (keyDown("left")){

    alok.x = alok.x -10
    
  } 
  
  //pi
  if (keyDown("f")){

   createla();
   createla2();
    
  }
  
  //destroy alok by pi lazer
  if(laGroup.isTouching(alok))
    {
      lose = createSprite(600,300,windowWidth,windowHeight)
      lose.addImage(lose2)
      lose.scale = 3

      restart = createSprite(600,500,windowWidth,windowHeight)
      restart.addImage(restart1)

    }

    //destroy alok by pi
    if(pi.isTouching(alok))
    {
      lose = createSprite(600,300,windowWidth,windowHeight)
      lose.addImage(lose2)
      lose.scale = 3

      restart = createSprite(600,500,windowWidth,windowHeight)
      restart.addImage(restart1)

    }

    //destroy alok by drone
    if(drone.isTouching(alok))
    {
      lose = createSprite(600,300,windowWidth,windowHeight)
      lose.addImage(lose2)
      lose.scale = 3

      restart = createSprite(600,500,windowWidth,windowHeight)
      restart.addImage(restart1)

    }

    //destroy alok by pi
    if(drone2.isTouching(alok))
    {
      lose = createSprite(600,300,windowWidth,windowHeight)
      lose.addImage(lose2)
      lose.scale = 3

      restart = createSprite(600,500,windowWidth,windowHeight)
      restart.addImage(restart1)

    }

    //

    if(la2Group.isTouching(pi)){
    
      pi.destroy();   
  
    }

  //alok
  if (keyDown("f")){

    la2 = createSprite(alok.x,alok.y,90,10)
    la2.addImage(la3)
    la2.setVelocity(-10,0)
    la2.scale = 0.2

  }

  //destroy enemy
  if (la2Group.isTouching(drone)) {

    drone.destroy();

  }

  //destroy enmy2
  if (la2Group.isTouching(drone2)) {

    drone2.destroy();

  }

  //border destroy
  if (lazerGroup.isTouching(b3)){

    lazerGroup.destroyEach();

  }

  if (laGroup.isTouching(b3)){

    laGroup.destroyEach();

  }

  
  //

  //saving joker
  if (alok.isTouching(jail)) {

    //destroy
    jail.destroy();
    joker.destroy();
    mede_wall.destroy();
    mede_wall1.destroy();
    mede_wall2.destroy();

    //create maze
    var maze
    var ob
    var ob1

    maze = createSprite(600,100,10,500)
    
    ob = createSprite(700,200,50,50)  

    ob1 = createSprite(800,400,50,50)
  
  }

  if (alok.isTouching(made)) {

   win = createSprite(600,300,windowWidth,windowHeight)
   win.addImage(win1)

  }

  drawSprites();
  //mouse pressed
  if (mousePressedOver(help)) {

   image(help2,200,200,1000,200)
    
  }

}
// Creating  group for fire
function createla() {
  la = createSprite(pi.x,pi.y,90,10)
  la.addImage(la1)
  la.setVelocity(10,0)
  la.scale = 0.2
 laGroup.add(la);

}

 function createla2() {

    la2 = createSprite(alok.x,alok.y,90,10)
    la2.addImage(la3)
    la2.setVelocity(-10,0)
    la2.scale = 0.2
    la2Group.add(la2);

 }

 function createlazerGroup() {

  lazer = createSprite(200,100,90,10)
  lazer.addImage(lazer1)
  lazer.setVelocity(10,0)
  lazerGroup.add(lazer);

}
  
