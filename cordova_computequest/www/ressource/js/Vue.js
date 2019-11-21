var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            // gravity: {y: 300},
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};
var vitesse = 200;
var player;
var stars;
var bombs;
var platforms;
var cursors;
var score = 0;
var gameOver = false;
var scoreText;

var game = new Phaser.Game(config);

function preload () {
    this.load.image('sky', 'ressource/assets/sky.png');
    this.load.image('ground', 'ressource/assets/platform.png');
    this.load.image('star', 'ressource/assets/star.png');
    this.load.image('bomb', 'ressource/assets/bomb.png');
    this.load.spritesheet('dude', 'ressource/assets/dude.png', {frameWidth: 32, frameHeight: 48});
}

function create() {
    //  A simple background for our game
    this.add.image(400, 300, 'sky');

    //  The platforms group contains the ground and the 2 ledges we can jump on
    platforms = this.physics.add.staticGroup();

    //  Here we create the ground.
    //  Scale it to fit the width of the this (the original sprite is 400x32 in size)
    platforms.create(400, 568, 'ground').setScale(2).refreshBody();

    //  Now let's create some ledges
    platforms.create(600, 400, 'ground');
    platforms.create(50, 250, 'ground');
    platforms.create(750, 220, 'ground');

    var objets = this.physics.add.group();



    var objet = new Objet(1, 100, 300, objets);

    player = this.physics.add.sprite(100, 450, 'dude');

    //  Player physics properties. Give the little guy a slight bounce.
    player.setBounce(0.2);
    player.setCollideWorldBounds(true);

    this.physics.add.overlap(player, objets);
    this.physics.add.collider(objets, platforms);
    //  Our player animations, turning, walking left and walking right.
    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('dude', {start: 0, end: 3}),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'up',
        frames: this.anims.generateFrameNumbers('dude', {start: 0, end: 3}),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'turn',
        frames: [{key: 'dude', frame: 4}],
        frameRate: 20
    });
    this.anims.create({
        key: 'down',
        frames: this.anims.generateFrameNumbers('dude', {start: 5, end: 8}),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('dude', {start: 5, end: 8}),
        frameRate: 10,
        repeat: -1
    });

    //  Input Events
    cursors = this.input.keyboard.createCursorKeys();

    //  Some stars to collect, 12 in total, evenly spaced 70 pixels apart along the x axis
    stars = this.physics.add.group({
        key: 'star',
        repeat: 11,
        setXY: {x: 12, y: 0, stepX: 70}
    });

    stars.children.iterate(function (child) {

        //  Give each star a slightly different bounce
        child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));

    });

    bombs = this.physics.add.group();

    //  The score
    scoreText = this.add.text(16, 16, 'score: 0', {fontSize: '32px', fill: '#000'});

    //  Collide the player and the stars with the platforms
    this.physics.add.collider(player, platforms);
    this.physics.add.collider(stars, platforms);
    this.physics.add.collider(bombs, platforms);

    this.physics.add.overlap(player, objets, ramasserObjet, null, this);
    function ramasserObjet(player, objet) {
        objet.disableBody(true, true);
        vitesse+=100;
    }
    //  Checks to see if the player overlaps with any of the stars, if he does call the collectStar function
}

function bas() {
    player.setVelocityY(vitesse);
    player.anims.play('down', true);
}

function gauche() {
    player.setVelocityX(-vitesse);
    player.anims.play('left', true);
}

function haut() {
    player.setVelocityY(-vitesse);
    player.anims.play('up', true);
}

function droite(){
    player.setVelocityX(vitesse);
    player.anims.play('right', true);
}

function update() {
    player.setVelocity(0);
    if (gameOver) {
        return;
    } else if (cursors.left.isDown) {
        gauche();
    } else if (cursors.right.isDown) {
        droite();
    } else if (cursors.up.isDown) {
        haut();
    } else if (cursors.down.isDown) {
        bas();
    } else {

        player.anims.play('turn');
    }

    /*if (cursors.up.isDown && player.body.touching.down)
    {
        player.setVelocityY(-330);
    }*/
}

