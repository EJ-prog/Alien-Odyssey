class Monster {
    constructor(game, x, y) {
        Object.assign(this, {game, x, y});
        // this.game = game;
        this.walksheet = ASSET_MANAGER.getAsset("./Sprites_and_Assets/MonsterWalk.png");
        this.walkanim = new Animator(this.walksheet, 0, 0, 366, 340, 4, 0.6);
        this.jumpsheet = ASSET_MANAGER.getAsset("./Sprites_and_Assets/MonsterJump.png");
        this.jumpanim = new Animator(this.jumpsheet, 0, 0, 385, 576, 8, 0.6);
        this.deathsheet = ASSET_MANAGER.getAsset("./Sprites_and_Assets/MonsterDeath.png");
        this.deathanim = new Animator(this.deathsheet, 0, 0, 390, 460, 10, 0.6);
        this.speed = 45;
        this.state = 0; //0 = walking, 1 = jumping
        this.dead = false;
        this.monsterhealthbarImage = ASSET_MANAGER.getAsset("./Sprites_and_Assets/MonsterHealthBar.png");
        this.walklimit = this.x;
        this.jump = false;
        this.currTime = 0;
        this.reverse = false;
        this.health = 10000;
        this.deathFramesTime = 5;
        this.currFrame = 0;
        this.hx = 0;

        this.updateBB();
    };

    updateBB() {
        this.lastBB = this.BB;
        this.BB = new BoundingBox(this.x - this.game.camera.x, this.y, 366, 200);
    };

    update() {

        this.updateBB();

        const TICK = this.game.clockTick;
        this.timeTillJump = 10.5;

        if (this.dead) {
            
        } else {
            if (!this.jump) {
                this.x -= this.speed * TICK;
                if(this.x < (this.walklimit - 175)) {
                    this.reverse = true;
                    this.speed = -this.speed;
                } else if(this.x > (this.walklimit + 50)) {
                    this.speed = -this.speed;
                    this.reverse = false;
                }
            } else {
                if (this.x > (this.walklimit - 160) && this.x < (this.walklimit + 40)) {
                    if (this.reverse) this.x += this.speed * 0.65 * TICK;
                    if (!this.reverse) this.x -= this.speed * 0.65 * TICK;
                } else {
                    this.jump = false;
                    this.currTime = 0;
                }
            }
            if (this.currTime >= this.timeTillJump) {
                this.jump = true;
            }
            // this.currTime++;
            this.currTime += 1 * TICK;
        }

        var that = this;
        this.game.entities.forEach(function (entity) {
            if (entity.BB && that.BB.collide(entity.BB)) {
                if (entity instanceof Laser) {
                    if(that.health <= 0){
                        that.dead = true;
                    }
                    that.health = that.health - 1;
                    if (that.health % 1000 === 0) {
                        that.hx += 724;
                    }
                }
            }
        });
    };

    draw(ctx) {
        if (this.dead && this.currFrame < this.deathFramesTime) {
            this.deathanim.drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y - 90);
            this.currFrame += 1 * this.game.clockTick;
        } else if (!this.dead && this.jump && this.currTime >= this.timeTillJump) {
            this.jumpanim.drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y - 210);
        } else if (!this.dead) {
            this.walkanim.drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y);
        } else {
            this.removeFromWorld = true;
            this.game.addEntity(new LunarRockPieces(this.game, this.x, this.y, 4));
        }

        ctx.drawImage(this.monsterhealthbarImage, this.hx, 0, 724, 50, 1500 - this.game.camera.x, 500, 500, 50);
    };
}