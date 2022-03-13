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
        this.updateBB();
        this.walklimit = this.x;
        this.jump = false;
        this.currTime = 0;
        this.reverse = false;
    }

    updateBB() {

    }

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

    }

    draw(ctx) {
        if (this.dead) {
            this.deathanim.drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y);
        } else if (this.jump && this.currTime >= this.timeTillJump) {
            this.jumpanim.drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y - 210);
        } else {
            this.walkanim.drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y);
        }
    }
}