class MetalDesert {
    constructor(game) {
        this.game = game;
        this.spritesheet = ASSET_MANAGER.getAsset("./Sprites_and_Assets/Metal");
    };

    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet);
    };
}