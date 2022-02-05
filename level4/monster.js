class Monster {
    constructor(game) {
        this.game = game;
        // this.spritesheet = ASSET_MANAGER.getAsset("./Sprites_and_Assets/MonsterWalk.png");
        // this.animator = new Animator(this.spritesheet, 0, 0, 366, 340, 4, 0.6);
        // this.spritesheet = ASSET_MANAGER.getAsset("./Sprites_and_Assets/MonsterJump.png");
        // this.animator = new Animator(this.spritesheet, 0, 0, 385, 576, 8, 0.6);
        // this.spritesheet = ASSET_MANAGER.getAsset("./Sprites_and_Assets/MonsterDeath.png");
        // this.animator = new Animator(this.spritesheet, 0, 0, 390, 460, 10, 0.6);
        this.x = 0;
        this.y = 0;
        this.speed = 10;
        this.state = 0; //0 = walking, 1 = jumping
        this.dead = false;
    }

    update() {

    }

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    }
}