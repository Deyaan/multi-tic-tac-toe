class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
                var table=document.getElementById('table');
                table.style.display="none";
            }

        }
    
    play(){
                form.hide();
                table.style.display="block";
                Player.getPlayerInfo();
                 image(back_img, 0, 0, 1000, 800);
                 var x =100;
                 var y=200;
                 var index =0;
                 drawSprites();
                 for(var plr in allPlayers){
                    
                    
                     index = index+1;
                     x = 500-allPlayers[plr].distance;
                     y=500;
                     
                     players[index -1].x = x;
                     players[index - 1].y = y;

                 }
    }

    end(){
       console.log("Game Ended");
    }
}

//functions for game
let sign = "X";
let disp = document.getElementById("player");
let body;

function printx(number){
 let body = document.getElementById("r"+number);

 if(body.innerText===""){
 body.innerText=sign;
 disp.innerHTML="<center>"+sign+"'s turn"+"</center>";
}
}


var box1=document.getElementById('r1');
var box1Position = database.ref('position/r1');
box1Position.on("value", readPosition, showError);

var box2=document.getElementById('r2');
var box3=document.getElementById('r3');
var box4=document.getElementById('r4');
var box5=document.getElementById('r5');
var box6=document.getElementById('r6');
var box7=document.getElementById('r7');
var box8=document.getElementById('r8');
var box9=document.getElementById('r9');

function readPosition(data){
    position = data.val();
    console.log(position.x);
    box1.x = position.x;
    box1.y = position.y;
  }
  
  function showError(){
    console.log("Error in writing to the database");
  }