class Laser {
    constructor(game) {
        this.game = game;
        this.laser = ASSET_MANAGER.getAsset("./Sprites_and_Assets/LaserFire.png");
        this.laserAnim = new Animator(this.laser, 0, 0, 45, 12, 3, 0.4, 0, false, true);
        // this.laserAnim[1] = new Animator(this.laser, 0 ,0 , 40, 20, 3, 0.4, 0, this.reverse, true);
        this.x = 20;
        this.y = 0;
        
    };

    update() {

    };

    draw(ctx, reverse) {
        if (reverse) {
            ctx.scale(-1,1);
            this.laserAnim.drawFrame(this.game.clockTick, ctx, -this.x, this.y);
        } else {
            ctx.scale(1,1);
            this.laserAnim.drawFrame(this.game.clockTick, ctx, this.x, this.y);
        }
    };
}