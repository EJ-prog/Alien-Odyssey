class MetalDesert {
    constructor(game) {
        this.game = game;
        this.background = ASSET_MANAGER.getAsset("./Sprites_and_Assets/MetalDesertBackground.png");
        this.mountains = ASSET_MANAGER.getAsset("./Sprites_and_Assets/MetalDesertBackgroundMountains.png");
        this.environment = ASSET_MANAGER.getAsset("./Sprites_and_Assets/MetalDesertEnvironment.png");
        this.rock = ASSET_MANAGER.getAsset("./SPrites_and_Assets/MetalDesertRock.png");
        this.planets = new Animator(this.environment, 450, 29, 400, 120, 1, 0.2);
        this.rolling = new Animator(this.rock, 0, 0, 60, 61, 12, 0.3);
        this.x1 = 560;
        this.y1 = 32;
        this.speed = 40;
        this.x2 = 750;
    };

    update() {
        // this.x -= this.speed*this.game.clockTick;
        // if(this.x < 500) {
        //     this.x = 900;
        // }
    };

    draw(ctx) {
        // ctx.drawImage(this.background, 0, 0); //background
        // this.planets.drawFrame(this.game.clockTick, ctx, this.x1, this.y1); //moving planets
        ctx.drawImage(this.mountains, 0, 0);
        ctx.drawImage(this.environment, 15, 160, 150, 200, 220, 245, 150, 200); //background cacti 1
        ctx.drawImage(this.environment, 184, 160, 150, 200, 650, 245, 150, 200); //background cacti 2
        ctx.drawImage(this.environment, 15, 160, 315, 200, 400, 245, 315, 200); //background cacti both
        ctx.drawImage(this.environment, 0, 440, 960, 136, 0, 440, 960, 136); //ground
        ctx.drawImage(this.environment, 336, 160, 100, 210, 250, 245, 100, 210); //foreground cacti 1
        ctx.drawImage(this.environment, 430, 160, 100, 210, 600, 245, 100, 210); //foreground cacti 2
        ctx.drawImage(this.environment, 430, 160, 100, 210, 800, 245, 100, 210); //foreground cacti 2
        this.rolling.drawFrame(this.game.clockTick, ctx, this.x2, 395);
    };
}