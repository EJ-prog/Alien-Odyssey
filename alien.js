class Alien{
    constructor(game) {
        this.game = game;
        this.spritesheet = ASSET_MANAGER.getAsset("./Sprites_and_Assets/character-sprites-player-alien-R.png");
        //this.animator = new Animator(this.spritesheet, 21, 397, 155, 207, 7, 0.3); //run and shoot
        this.animator = new Animator(this.spritesheet, 21, 397, 155, 207, 7, 0.3);
        // this.x =0;
        // this.y=0;
        // this.speed = 120;
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