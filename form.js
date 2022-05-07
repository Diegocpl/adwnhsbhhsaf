class Form{
    constructor(){
    this.input = createInput()
    this.button = createButton("jogar")
    }
    display(){
    this.input.position(755, 385)
    this.button.position(755, 370)
    this.button.mousePressed(()=>{
    player.name = this.input.value()
   // player.getCount()
    //playerCount+= 1
    //console.log(playerCount)
    player.index= 1
    this.input.hide()
    this.button.hide()
    player.update()
    gameState= 1
    //1-player.updateCount(playerCount)
    })
    }
}