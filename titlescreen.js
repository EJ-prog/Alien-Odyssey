class TitleScreen {
    constructor(game) {
        this.game = game;
        this.x = 0;

        this.title = true;
        this.gameOver = false;
    };

    update() {

    };

    draw(ctx) {
        ctx.drawImage(ASSET_MANAGER.getAsset("./Sprites_and_Assets/titlescreen.png"), this.x, 0);
    };
}