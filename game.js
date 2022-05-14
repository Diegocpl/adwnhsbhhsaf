class Game {
    constructor() { }
    start() {
        form = new Form()
        form.display()
        player = new Player()
        personagem = createSprite(-1000, windowHeight / 2)
        personagem.shapeColor = "red"
        plataforma = createSprite(windowWidth / 2 - 300, windowHeight / 2 + 300, 4000, 30)
        plataforma.shapeColor = "lightblue"
        plataforma2 = createSprite(6000, 350, 4000, 30)
        plataforma2.shapeColor = "lightblue"
        camaleao = createSprite(500, 660, 100, 60)
        camaleao.velocityX = 8
        camaleao2 = createSprite(5200, 285, 100, 60)
        camaleao2.velocityX = 8
        camaleao3 = createSprite(5500, 285, 100, 60)
        camaleao3.velocityX = -8
        dragao = createSprite(1000, 350, 60, 100)
        dragao.shapeColor = "darkred"
        dragao2 = createSprite(2000, 170, 60, 100)
        dragao2.shapeColor = "darkred"
        dragao3 = createSprite(6050, -450, 60, 100)
        dragao3.shapeColor = "darkred"
        dragao3 = createSprite(6350, -450, 60, 100)
        dragao3.shapeColor = "darkred"
        vitoria = createSprite(7500, 150, 50, 385)
        vitoria.shapeColor = "green"

        for (var i = 0; i < 32; i++) {
            obstaculo = createSprite(mapaObstaculos[i][0], mapaObstaculos[i][1])
            obstaculo.shapeColor = "black"
            grupoObstaculos.push(obstaculo)
        }
    }
    play() {
        drawSprites()
        text(personagem.x + " " + personagem.y, personagem.x + 50, personagem.y + 50)
        if (keyIsDown(RIGHT_ARROW)) {
            personagem.x += 7
        }
        if (keyIsDown(LEFT_ARROW)) {
            personagem.x -= 7
        }
        //if (keyIsDown(UP_ARROW)) {
         //   personagem.y -= 50
        //}
        //if (keyIsDown(DOWN_ARROW)) {
         //  personagem.y += 50
        //}
        if (personagem.isTouching(camaleao) || personagem.isTouching(camaleao2) || personagem.isTouching(camaleao3)) {
            gameState = 2
        }
        if (personagem.isTouching(vitoria)){
            gameState=3
        }
        personagem.velocityY += 0.5
        camera.position.x = personagem.x
        camera.position.y = personagem.y

        for (var i = 0; i < 32; i++) {
            personagem.collide(grupoObstaculos[i])
            camaleao.bounceOff(grupoObstaculos[i])
            camaleao2.bounceOff(grupoObstaculos[i])
            camaleao3.bounceOff(grupoObstaculos[i])
            if ((this.toque(personagem,plataforma)||this.toque(personagem,plataforma2)|| 
             this.toque(personagem,grupoObstaculos[i])) && 
            keyIsDown(32)) 
            { personagem.velocityY = -10 }
        }
        personagem.collide(plataforma)
        personagem.collide(plataforma2)
        tempo += 1
        text(tempo, personagem.x + 300, personagem.y - 300)
        if (personagem.velocityY >= 25 || personagem.isTouching(grupofogo)) {
            personagem.velocityY = 0
            gameState = 2
        }


    }
    gameover() {
        textSize(100)
        text("gameover", personagem.x - 150, personagem.y)
    }
    cuspirfogo(x, y) {
        if (frameCount % 65 == 0) {
            fogo = createSprite(x, y, 30, 30)
            fogo.lifetime = 200
            fogo.velocityY = random(0, 5)
            fogo.velocityX = random(-5, 5)
            grupofogo.add(fogo)
        }
    }
    toque(obj2,obj1){ 
        if(Math.abs(obj1.y-obj2.y)<((obj2.height/2+obj1.height/2)+5)&& 
        Math.abs(obj1.x-obj2.x)<((obj2.width/2+obj1.width/2)+5))
        { return true } else
        { return false } }
vitoria(){
    textSize(100)
        text("você venceu!", personagem.x - 150, personagem.y)
}
}
