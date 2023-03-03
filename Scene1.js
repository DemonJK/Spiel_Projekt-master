class Scene1 extends Phaser.Scene {
    constructor() {
        super("bootGame");
    }

    preload() {
        this.load.image("background", "assets/images/HillsLayer01.png");
        this.load.image("background2", "assets/images/HillsLayer02.png");
        this.load.image("background3", "assets/images/HillsLayer03.png");
        this.load.image("background4", "assets/images/HillsLayer04.png");
        this.load.image("background5", "assets/images/HillsLayer05.png");
        this.load.image("background6", "assets/images/HillsLayer06.png");
        console.log("Scene1 Background loaded");
    }

    create() {
        this.add.text(35, 35, "Das Spiel wird geladen...");
        this.scene.start("playGame");
    }
}




