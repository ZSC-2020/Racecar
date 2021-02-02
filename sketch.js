var database,bg;
var form,game,player;
var gameState=0;
var distance=0
var allPlayers;
var playerCount=0
var cars=[],car1,car2
var c1,c2,c3,c4,bg,track
function preload(){
c1=loadImage("car1.png");
c2=loadImage("car2.png");
c3=loadImage("car3.png");
c4=loadImage("car4.png");
bg=loadImage("ground.png");
track=loadImage("track.jpg");
}

function setup(){
    createCanvas(displayWidth-30,displayHeight-30);
    database=firebase.database()
    game=new Game();
    game.getState();
    game.start(); 
}
function draw(){
    background(bg)
   if(playerCount===2){
       game.update(1);
   }
   if (gameState===1){
       clear();
       game.play();
   }
   
}
