class Scene2 extends Phaser.Scene {
    constructor() {
        super("playGame");
    }

    //PRELOAD VON HINTERGRUND

    preload() {

        //PRELOAD BACKGROUND

        this.load.image("background", "/assets/images/HillsLayer01.png");
        this.load.image("background2", "/assets/images/HillsLayer02.png");
        this.load.image("background3", "/assets/images/HillsLayer03.png");
        this.load.image("background4", "/assets/images/HillsLayer04.png");
        this.load.image("background5", "/assets/images/HillsLayer05.png");
        this.load.image("background6", "/assets/images/HillsLayer06.png");
        console.log("Scene2 Background LOADED");

        //PRELOAD GROUND

        this.load.image("boden", "/assets/ground/boden_welt_part1.png");

        //PRELOAD PLAYER

        this.load.spritesheet("playermodel", "/assets/player_model/NightBorne.png", { frameWidth: 80, frameHeight: 80 });
        console.log("playermodel LOADED");

        //PRELOAD ENEMY
        this.load.spritesheet("enemy1", "/assets/enemy/idle/Idle.png", { frameWidth: 256, frameHeight: 256, });
        console.log("enemy1 LOADED");

    }

    //CREATE VON HINTERGRUND UND TEXT "DAS SPIEl WIRD GESPIELT

    create() {

        //CREATE BACKGROUND

        this.background = this.add.image(0, 0, "background");
        this.background.setOrigin(0, 0);
        this.background.setScale(4.5);

        this.background2 = this.add.image(0, 0, "background2");
        this.background2.setOrigin(0, 0);
        this.background2.setScale(4.5);

        this.background3 = this.add.image(0, 0, "background3");
        this.background3.setOrigin(0, 0);
        this.background3.setScale(4.5);

        this.background4 = this.add.image(0, 0, "background4");
        this.background4.setOrigin(0, 0);
        this.background4.setScale(4.5);

        //PLATFORM (BODEN)

        const platforms = this.physics.add.staticGroup();
        platforms.create(0, 0, "boden").setOrigin(0, -15).setScale(4.5).refreshBody();

        //ENEMY SPAWNING

        console.log("ENEMY SPAWNING");
        this.enemy = this.physics.add.sprite(500, 900, "enemy1");
        this.enemy.body.setSize(100, 150, 1);
        this.enemy.setScale(2);
        this.enemy.setBounce(0.2);
        this.enemy.setCollideWorldBounds(true);
        this.physics.add.collider(this.enemy, platforms);
        console.log("ENEMY SPAWNED");

        //PLAYER SPAWNING

        console.log("PLAYER SPAWNING");
        this.player = this.physics.add.sprite(100, 900, "playermodel");
        this.player.body.setSize(30, 45, 1);
        this.player.setScale(5);
        this.player.setBounce(0.2);
        this.player.setCollideWorldBounds(true);
        this.physics.add.collider(this.player, platforms);
        console.log("PLAYER SPAWNED");

        //CREATE BACKGROUND

        this.background5 = this.add.image(0, 0, "background5");
        this.background5.setOrigin(0, 0);
        this.background5.setScale(4.5);

        this.background6 = this.add.image(0, 0, "background6");
        this.background6.setOrigin(0, 0);
        this.background6.setScale(4.5);

        //CREATE TEXT

        console.log("TEXT LOAD");
        this.add.text(35, 35, "Das Spiel wird gespielt", {
            font: "30px Arial",
            fill: "black",
        });
        console.log("TEXT LOADED");

        //ANIMATIONEN DES SPIELS

        //PLAYER
        //0 - 8 (22)
        //23 - 28 (45)
        //46 - 57 (68)
        //69 - 73 (91)
        //92 - 114 (114)
        //PLAYER

        //ENEMY STAND
        //0 - 11 (12)
        //ENEMY STAND

        console.log("ANIMS LOADING")

        this.anims.create({
            key: "space",
            frames: this.anims.generateFrameNumbers("playermodel", { start: 46, end: 57 }),
            frameRate: 8,
        });

        this.anims.create({
            key: "up",
            frames: this.anims.generateFrameNumbers("playermodel", { start: 96, end: 100 }),
            frameRate: 6,
        });

        this.anims.create({
            key: "idle",
            frames: this.anims.generateFrameNumbers("playermodel", { start: 0, end: 8 }),
            frameRate: 8,
        });

        this.anims.create({
            key: "right",
            frames: this.anims.generateFrameNumbers("playermodel", { start: 23, end: 28 }),
            frameRate: 6,
            repeat: -1,
        });

        this.anims.create({
            key: "left",
            frames: this.anims.generateFrameNumbers("playermodel", { start: 23, end: 28 }),
            frameRate: 6,
            repeat: -1,
        });

        this.anims.create({
            key: "stand",
            frames: this.anims.generateFrameNumbers("enemy1", { start: 0, end: 11 }),
            frameRate: 8,
        });
        console.log("ENDE VON CREATE ANIMS");
    }

    update() {

        //CONTROLS OF PLAYERMODEL

        const cursors = this.input.keyboard.createCursorKeys();
        if (cursors.left.isDown) {
            this.player.setVelocityX(-160).setFlipX(-1);
            this.player.anims.play("left", true);
        } else if (cursors.right.isDown) {
            this.player.setVelocityX(160).setFlipX(0);
            this.player.anims.play("right", true);
        } else {
            this.player.setVelocityX(0);
            this.player.anims.play("idle", true);
        }
        if (cursors.up.isDown && this.player.body.touching.down) {
            this.player.setVelocityY(-350);
            this.player.anims.play("up", true);
        }
        if (cursors.space.isDown) {
            this.player.setGravityY(100)
            this.player.anims.play("space", true);
        }
    }
}