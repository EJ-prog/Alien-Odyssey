class Laser {
    constructor(game, x, y, facing) {
        this.facing = facing;
        this.game = game;
        this.velocity = { x: 5 * 1, y: 2 * 1 };
        this.laser = ASSET_MANAGER.getAsset("./Sprites_and_Assets/LaserFire.png");
        this.laserAnim = new Animator(this.laser, 0, 0, 45, 12, 3, 2, 0, false, false);
        this.animationTime = 0.5;
        this.elapsedTime = 0;
        this.x = x;
        this.y = y;
        this.speed = 50;
        this.updateBB(); 
    };

    updateBB() {
        this.lastBB = this.BB;
        this.BB = new BoundingBox(this.x, this.y, 45, 12);
    };

    update() {

        this.elapsedTime += this.game.clockTick;
        if (this.elapsedTime > 4 * this.animationTime) {
            this.removeFromWorld = true;
            this.elapsedTime = 0;
        } else {
            if (this.facing === 0) {
                this.x += this.game.clockTick * (this.velocity.x*20);
            } else if (this.facing === 1) {
                this.x -= this.game.clockTick * (this.velocity.x*20);
            }
            this.y += this.game.clockTick * (this.velocity.y*35);
        }
        this.updateBB();

        var that = this;
        this.game.entities.forEach(function (entity) {
            if (entity.BB && that.BB.collide(entity.BB)) {
                if (entity instanceof Rock || entity instanceof Scorpion) {
                    if (entity instanceof Scorpion) {
                        entity.removeFromWorld = true;
                    }
                    that.removeFromWorld = true;
                } else if (entity instanceof MetalDesertGround) {
                    that.removeFromWorld = true;
                }
            };
        });
    };

    draw(ctx, reverse) {
        if (reverse) {
            ctx.scale(-1,1);
            this.laserAnim.drawFrame(this.game.clockTick, ctx, -this.x + this.game.camera.x, this.y);
            
        } else {
            ctx.scale(1,1);
            this.laserAnim.drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y);
            
        }
    };
}