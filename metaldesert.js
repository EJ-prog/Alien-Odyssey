class MetalDesert {
    constructor(game) {
        this.game = game;
        this.spritesheet = ASSET_MANAGER.getAsset("./Sprites_and_Assets/Metal");
    };

    update() {

    };

    draw(ctx) {
        ctx.draw(this.spritesheet);
    };
}