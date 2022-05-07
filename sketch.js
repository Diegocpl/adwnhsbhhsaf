var game, form, player, database, playerCount, personagem, obstaculo, plataforma, camaleao
var gameState = 0
var grupoObstaculos =[]
var mapaObstaculos =[[200,650],[1200,650],[1500,600],[1600,570],[1700,520],[1800,450]]
var tempo = 0
function setup() {
  database = firebase.database()
  
  createCanvas(1670, 770);
  game = new Game()
  game.start()
}

function draw() {
  background(0,255,255);  
  if (gameState == 1){
    game.play()
  }
  else if(gameState==2){
    game.gameover()
  }
}