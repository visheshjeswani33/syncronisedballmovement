
var database, playerCount, form, player, game;
var position, gameState = 0;
var allPlayers;


function setup(){
  database = firebase.database();
  createCanvas(500,500);

  game= new Game();
  game.getState();
  game.start();

}

function draw(){
}
