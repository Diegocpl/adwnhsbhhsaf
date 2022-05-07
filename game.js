class Game {
    constructor() { }
    start() {
        form = new Form()
        form.display()
        player = new Player()
        personagem = createSprite(windowWidth / 2 - 1700, windowHeight / 2)
        personagem.shapeColor = "red"
        plataforma = createSprite(windowWidth / 2 - 300, windowHeight / 2 + 300, 4000, 30)
        plataforma.shapeColor = "lightblue"
        camaleao = createSprite(300, 650, 100, 60)
        camaleao.velocityX = 8
        for (var i = 0; i < 6; i++) {
            obstaculo = createSprite(mapaObstaculos[i][0],mapaObstaculos[i][1] )
            obstaculo.shapeColor = "black"
            grupoObstaculos.push(obstaculo)
        }
    }
    play() {
        drawSprites()
        if (keyIsDown(RIGHT_ARROW)) {
            personagem.x += 5
        }
        if (keyIsDown(LEFT_ARROW)) {
            personagem.x -= 5
        }
        
        personagem.velocityY += 0.5
        camera.position.x = personagem.x
        camera.position.y = personagem.y
        
        for (var i = 0; i < 6; i++) {
           personagem.collide(grupoObstaculos[i])
           camaleao.bounceOff(grupoObstaculos[i])
           if (keyIsDown(32)&&(personagem.isTouching(plataforma))) {
            personagem.velocityY = - 10
        }
        }
        personagem.collide(plataforma)
        tempo+=1
        text(tempo,personagem.x+300,personagem.y-300)
        if (personagem.velocityY >= 25){
            personagem.velocityY = 0
            gameState= 2
        }
    }
    gameover(){
        textSize(100)
        text("gameover",personagem.x-150,personagem.y)
    }
}
