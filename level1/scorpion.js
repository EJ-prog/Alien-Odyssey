class Scorpion {
    constructor(game) {
        this.game = game;
        this.spritesheet = ASSET_MANAGER.getAsset("./Sprites_and_Assets/Scorpion.png");
        this.animator = new Animator(this.spritesheet, 0, 0, 170, 100, 4, 0.6);
        this.x = 300;
        this.y = 365;
        this.speed = 50;
    };

    update() {
        if(this.x < 450) {
            this.x += this.speed*this.game.clockTick;
        }
        // if (this.x >= 450) {
        //     this.x -= this.speed*this.game*clockTick;
        // }
    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };
}