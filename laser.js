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
        this.updateBB(); 
    };

    updateBB() {
        this.lastBB = this.BB;
        this.BB = new BoundingBox(this.x, this.y, 45, 12);
    };

    update() {

        this.elapsedTime += this.game.clockTick;
        if (this.elapsedTime > 4 * this.animationTime) {
            this.elapsedTime = 0;
        }

        this.x += this.game.clockTick * (this.velocity.x/2);
        this.y += this.game.clockTick * (this.velocity.y/3);
        this.updateBB();

        var that = this;
        this.game.entities.forEach(function (entity) {
            if (entity.BB && that.BB.collide(entity.BB)) {
                if (entity instanceof Rock || entity instanceof Scorpion) {
                    entity.removeFromWorld = true;
                }
            };
        });
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
                ctx.strokestyle = "Red";
                ctx.strokeRect(this.BB.x, this.BB.y, this.BB.width, this.BB.height);
                // this.updateBB();
            } else if (this.elapsedTime < 2 * this.animationTime) {
                ctx.drawImage(this.laser, 45, 0, 45, 12, this.x, this.y, 45, 12);
                ctx.strokestyle = "Red";
                ctx.strokeRect(this.BB.x, this.BB.y, this.BB.width, this.BB.height);
                // this.updateBB();
            } else if (this.elapsedTime < 3 * this.animationTime) {
                ctx.drawImage(this.laser, 90, 0, 45, 12, this.x, this.y, 45, 12);
                ctx.strokestyle = "Red";
                ctx.strokeRect(this.BB.x, this.BB.y, this.BB.width, this.BB.height);
                // this.updateBB();
            }
        }
    };
}