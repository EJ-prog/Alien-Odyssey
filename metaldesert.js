class MetalDesert {
    constructor(game) {
        this.game = game;
        this.spritesheet = ASSET_MANAGER.getAsset("./Sprites_and_Assets/MetalDesertBackground.png");
    };

    update() {

    };

    draw(ctx) {
        ctx.drawImage(ASSET_MANAGER.getAsset("./Sprites_and_Assets/MetalDesertBackground.png"));
    };
}