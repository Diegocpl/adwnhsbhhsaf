var game, form, player, database, playerCount, personagem, obstaculo, fogo, grupofogo, dragao3,dragao4,vitoria,
plataforma, camaleao,plataforma2, camaleao2,camaleao3, dragao, dragao2
var gameState = 0
var grupoObstaculos =[]
var mapaObstaculos =[[200,650],
[1200,670],
[1500,600],
[1600,570],
[1700,520],
[1800,450],
[1850,600],
[2100,500],
[2300,450],
[2500,400],
[2700,300],
[2750,300],
[2800,300],
[2850,300],
[2900,300],
[2950,300],
[3200,400],
[3500,300],
[3550,300],
[3850,300],
[5750,300],
[4550,300],
[6950,300],
[6950,230],
[6950,160],
[6950,90],
[6950,20],
[6900,20],
[6050,235],
[6450,-15],
[6450,55],
[6750,-30],]
var tempo = 0
function setup() {
  database = firebase.database()
  grupofogo=new Group()
  createCanvas(1670, 770);
  game = new Game()
  game.start()
}

function draw() {
  background(0,255,255);  
  if (gameState == 1){
    game.play()
    game.cuspirfogo(1000,350)
    game.cuspirfogo(2000,170)
    game.cuspirfogo(6050, -450)
    game.cuspirfogo(6350, -450)
  }
  else if(gameState==2){
    game.gameover()
  }
  else if(gameState==3){
   game.vitoria()}
}
