class Laser {
    constructor(game, x, y) {
        this.game = game;
        this.velocity = { x: 5 * 1, y: 2 * 1 };
        this.laser = ASSET_MANAGER.getAsset("./Sprites_and_Assets/LaserFire.png");
        // this.laserAnim = new Animator(this.laser, 0, 0, 45, 12, 3, 0.4, 0, false, true);
        this.animationTime = 0.5;
        this.elapsedTime = 0;
        this.x = x;
        this.y = y;
        this.speed = 50;
    };

    update(y) {

        this.elapsedTime += this.game.clockTick;
        if (this.elapsedTime > 4 * this.animationTime) {
            this.elapsedTime = 0;
        }
        this.x += this.game.clockTick * this.velocity.x;
        this.y = y;
    };

    draw(ctx, reverse) {
        if (reverse) {
            ctx.scale(-1,1);
            if (this.elapsedTime < this.animationTime) {
                ctx.drawImage(this.laser, 0, 0, 45, 12, this.x, this.y, 45, 12);
            } else if (this.elapsedTime < 2 * this.animationTime) {
                ctx.drawImage(this.laser, 45, 0, 45, 12, this.x, this.y, 45, 12);
            } else if (this.elapsedTime < 3 * this.animationTime) {
                ctx.drawImage(this.laser, 90, 0, 45, 12, this.x, this.y, 45, 12);
            } else {
                
            }
        } else {
            ctx.scale(1,1);
            if (this.elapsedTime < this.animationTime) {
                ctx.drawImage(this.laser, 0, 0, 45, 12, this.x, this.y, 45, 12);
            } else if (this.elapsedTime < 2 * this.animationTime) {
                ctx.drawImage(this.laser, 45, 0, 45, 12, this.x, this.y, 45, 12);
            } else if (this.elapsedTime < 3 * this.animationTime) {
                ctx.drawImage(this.laser, 90, 0, 45, 12, this.x, this.y, 45, 12);
            }
        }
    };
}