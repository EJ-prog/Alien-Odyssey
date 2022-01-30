class TitleScreen {
    constructor(game) {
        this.game = game;
        this.x = 0;
        this.button_x = 337.5;
        this.button_y = 145.5;
        this.buttons = ASSET_MANAGER.getAsset("./Sprites_and_Assets/AdditionalAssets_StartMenu.png");
    };

    update() {
        // if(this.game.click) {
        //     if(this.game.click.y > 146 && this.game.click.y < 280) {
        //         console.log("clicked to start the game");
        //     }
        //     if (this.game.click.y > 281 && this.game.click.y < 415) {
        //         console.log("clicked to find out about the game");
        //     }
        // }

    };

    draw(ctx) {
        ctx.drawImage(ASSET_MANAGER.getAsset("./Sprites_and_Assets/titlescreen.png"), this.x, 0);
        ctx.drawImage(this.buttons, 0, 0, 285, 135, this.button_x, this.button_y, 285, 135);
        ctx.drawImage(this.buttons, 0, 135, 285, 135, this.button_x, this.button_y + 135, 285, 135);
    };
}