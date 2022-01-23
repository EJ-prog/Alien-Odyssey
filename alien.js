class Alien{
    constructor(game) {
        this.game = game;
        this.spritesheet = ASSET_MANAGER.getAsset("./Sprites_and_Assets/character-sprites-player-alien-R.png");
        // this.animator = new Animator(this.spritesheet, 21, 397, 155, 207, 7, 0.2); //run and shoot
        // this.animator = new Animator(this.spritesheet, 21, 107, 148, 266, 4, 0.5); //jump
        // this.animator = new Animator(this.spritesheet, 640, 175, 98, 210, 2, 0.5); //duck
        // this.animator = new Animator(this.spritesheet, 5, 607, 167, 210, 7, 0.2); //holster: after 30 secs of idle, & before jumping
        // this.animator = new Animator(this.spritesheet, 4, 810, 120, 225, 6, 0.2); //run
        // this.animator = new Animator(this.spritesheet, 850, 810, 151, 225, 2, 0.4); //stand and shoot
        // this.animator = new Animator(this.spritesheet, 608, 0, 237, 175, 2, 0.6); //death
        this.x = 300;
        this.y = 0;
        this.speed = 120;
    };

    update() {
        // if(this.y < 500) {
        //     this.y += this.speed*this.game.clockTick;
        // } else if (this.x < 1024) {
        //     this.x += this.speed*this.game.clockTick;
        // } else {
        //     this.x = 0;
        //     this.y = 0;
        // }
    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };
}