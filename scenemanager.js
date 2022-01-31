class SceneManager {
    constructor(game) {
        this.game = game;
        this.score = 0;
        this.coins = 0;
        this.lives = 1;

        this.title = true;
        this.gameOver = false;
        this.level = null;

        // this.loadlevel(MetalDesert, 2, 4, false, true); //come back to later
        // this.loadlevel(LavaLand, 2, 4, false, true); //come back to later
        // this.loadlevel(AcidMeadows, 2, 4, false, true); //come back to later
        // this.loadlevel(MonsterForest, 2, 4, false, true); //come back to later
    };

    // clearEntities() {
    //     this.game.entities.forEach(function (entity) {
    //         entity.removeFromWorld = true;
    //     });
    // };

    loadlevel(level, x, y, transition, title) {
        this.title = title;
        this.level = level;
        // this.clearEntities();

        if (transition) {
            this.game.addEntity(new TitleScreen(this.game, level, x, y, title));
        } else {
            this.game.addEntity(new MetalDesert(gameEngine));
        }
    };

    update() {
        if (this.title && this.game.click) {
            if(this.game.click && this.game.click.y > 146 && this.game.click.y < 280) {
                
                console.log("clicked to start the game");
            }
            if (this.game.click && this.game.click.y > 281 && this.game.click.y < 415) {
                console.log("clicked to find out about the game");
            }
        }


        if (this.gameOver) {
            this.gameOver = false;
            this.lives = 3;
            this.score = 0;
            this.coins = 0;

            // this.clearEntities();

            this.game.addEntity(new TitleScreen(this.game));
        }

    };

    draw(ctx) {
        if (this.title) {
            this.x = 0;
            this.button_x = 337.5;
            this.button_y = 145.5;
            this.buttons = ASSET_MANAGER.getAsset("./Sprites_and_Assets/AdditionalAssets_StartMenu.png");
            this.selected = ASSET_MANAGER.getAsset("./Sprites_and_Assets/AdditionalAssets_StartMenu_Selected.png");

            ctx.drawImage(ASSET_MANAGER.getAsset("./Sprites_and_Assets/titlescreen.png"), 0, 0);
            ctx.drawImage(this.buttons, 0, 0, 285, 135, this.button_x, this.button_y, 285, 135);
            ctx.drawImage(this.buttons, 0, 135, 285, 135, this.button_x, this.button_y + 135, 285, 135);

            if(this.game.click) {
                if(this.game.click.y > 146 && this.game.click.y < 280 && this.game.click.x > 338 && this.game.click.x < 623) {
                    ctx.drawImage(this.selected, 0, 0, 285, 135, this.button_x, this.button_y, 285, 135);
                }
                if(this.game.click.y > 281 && this.game.click.y < 415 && this.game.click.x > 338 && this.game.click.x < 623) {
                    ctx.drawImage(this.selected, 0, 135, 285, 135, this.button_x, this.button_y + 135, 285, 135);
                }
            }            
        }
    };

}