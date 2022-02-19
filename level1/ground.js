class Ground {
    constructor(game) {
        this.game = game;

        this.path = ASSET_MANAGER.getAsset("./Sprites_and_Assets/MetalDesertPath.png");
        this.BB = new BoundingBox(0, 0, 960, 25);
    };

    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.path, 0, 0, 960, 136, 0, 440, 960, 136);
    };
}