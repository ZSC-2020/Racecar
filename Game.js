class Game{
constructor(){
this.message=createElement("h1")
}
getState(){
 var gameStateRef=database.ref('gameState')
gameStateRef.on("value",function(data){
    gameState=data.val()
})
}
update(state){
database.ref('/').update({gameState:state})
}
async start(){
if(gameState===0){
    player=new Player();
    var playerCountRef=await database.ref('playerCount').once("value");
    if(playerCountRef.exists()){
playerCount=playerCountRef.val();
player.getCount();
    }
    form= new Form();
    form.display();
}
car1=createSprite(1200,200);
car1.addImage("car1",c1);
car1.scale=2
car2=createSprite(600,200);
car2.addImage("car2",c2);
car2.scale=2
cars=[car1,car2];

}
play(){
form.hide();
Player.getPlayerInfo();
if(allPlayers!==undefined){
    image(track,0,-displayHeight*4,displayWidth,displayHeight*5)

var index=0
var x=300
var y
for(var plr in allPlayers){
    index=index+1
    x=x+600
    y=displayHeight-allPlayers[plr].distance
    cars[index-1].x=x
    cars[index-1].y=y
    if(index===player.index){
     cars[index-1].shapeColor="red"
     camera.position.x=displayWidth/2
     camera.position.y=cars[index-1].y
    }
}
}
if(keyIsDown(UP_ARROW)&&player.index!==null){
    player.distance+=10
    player.update();
}

if(player.distance>6000){
   this.message.html("Game Over");
   this.message.position(displayWidth/2-70,100)
    gameState=2
}
drawSprites()
}
}