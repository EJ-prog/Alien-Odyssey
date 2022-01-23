class Scorpion {
    constructor(game) {
        this.game = game;
        this.spritesheet = ASSET_MANAGER.getAsset("./Sprites_and_Assets/Health_Ammo_Creatures.png");
        this.animator = new Animator(this.spritesheet, 280, 280, 170, 100, 4, 0.6);
        this.x = 0;
        this.y = 0;
        this.speed = 120;
    };

    update() {

    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };
}