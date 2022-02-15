class Scorpion {
    constructor(game) {
        this.game = game;
        this.spritesheet = ASSET_MANAGER.getAsset("./Sprites_and_Assets/Scorpion.png");
        this.animator = new Animator(this.spritesheet, 0, 0, 170, 100, 4, 0.6);
        this.x = 300;
        this.y = 365;
        this.speed = 50;

        this.updateBB();
    };

    updateBB() {
        this.lastBB = this.BB;
        this.BB = new BoundingBox(this.x, this.y, 170, 100);
    };

    update() {
        if(this.x < 450) {
            this.x += this.speed*this.game.clockTick;
        }

        this.updateBB();
        // if (this.x >= 450) {
        //     this.x -= this.speed*this.game*clockTick;
        // }
    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };
}