class SceneManager {
    constructor(game) {
        this.game = game;
        this.score = 0;
        this.coins = 0;
        this.lives = 1;

        this.title = true;
        this.gameOver = false;
        this.level = null;

        this.loadlevel(metalDesert, 2, 4, false, true); //come back to later
        this.loadlevel(lavaLand, 2, 4, false, true); //come back to later
        this.loadlevel(acidMeadows, 2, 4, false, true); //come back to later
        this.loadlevel(monsterForest, 2, 4, false, true); //come back to later
    };

    clearEntities() {
        this.game.entities.forEach(function (entity) {
            entity.removeFromWorld = true;
        });
    };

    loadlevel(level, x, y, transition, title) {
        this.level = level;
        this.clearEntities();

        if (transition) {
            this.game.addEntity(new TitleScreen(this.game));
        } else {
            if (level == metalDesert) {
                this.game.addEntity(gameEngine.addEntity(new MetalDesert(gameEngine)));
            }
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

            this.clearEntities();

            this.game.addEntity(new TitleScreen(this.game));
        }

    };

    draw(ctx) {
        if (this.title) {
            ctx.drawImage(ASSET_MANAGER.getAsset("./Sprites_and_Assets/titlescreen.png"), 0, 0);
        }
    };

}