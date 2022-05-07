class Player {
    constructor() {
        this.name = null;
        this.index = 0
    }
    update() {
        database.ref("players/player" + this.index).set({
            name: this.name
        })
    }
    getCount() {
        var playerCountRef = database.ref("playerCount")
        playerCountRef.on("value", data => {
            playerCount = data.val()
        })
    }
    updateCount(count) {
        database.ref("/").update({
            playerCount: count
        })
    }
}
