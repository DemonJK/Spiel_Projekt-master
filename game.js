var config = {
    width: 2300,
    height: 1140,
    backgroundColor: 0x000000,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 400 },
            debug: true,
        }
    },
    scene: [Scene1, Scene2],
    pixelArt: true,
}
var game = new Phaser.Game(config);
