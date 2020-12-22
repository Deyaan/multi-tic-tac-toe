var database;
var gameState =0;
var playerCount = 0;
var allPlayers;

var player, form,game;
var player1,player2;
var players;

// create the variables for the score and displaying scores. and intialize with zero
var score = 0;


function setup() {
  createCanvas(1340, 750);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background("black");
  
  
   if (playerCount === 2) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
   }
   if (gameState === 2) {
     game.end();
   }
}