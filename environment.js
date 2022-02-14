//level 1 environment assets
class MetalMountains {
    constructor(game, x, y) {
        Object.assign(this, {game, x, y});

        this.spritesheet = ASSET_MANAGER.getAsset("./Sprites_and_Assets/MetalDesertBackgroundMountains.png");
    }

    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 86, 0, 80, 40, this.x - this.game.camera.x, this.y, PARAMS.BLOCKWIDTH * 5, PARAMS.BLOCKWIDTH * 2.5);
    };
};

class BackgroundCactus1 {
    constructor(game, x, y) {
        Object.assign(this, {game, x, y});

        this.spritesheet = ASSET_MANAGER.getAsset("./Sprites_and_Assets/MetalDesertEnvironment.png");
    }

    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 86, 0, 80, 40, this.x - this.game.camera.x, this.y, PARAMS.BLOCKWIDTH * 5, PARAMS.BLOCKWIDTH * 2.5);
    };
};

class BackgroundCactus2 {
    constructor(game, x, y) {
        Object.assign(this, {game, x, y});

        this.spritesheet = ASSET_MANAGER.getAsset("./Sprites_and_Assets/MetalDesertEnvironment.png");
    }

    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 86, 0, 80, 40, this.x - this.game.camera.x, this.y, PARAMS.BLOCKWIDTH * 5, PARAMS.BLOCKWIDTH * 2.5);
    };
};

class ForegroundCactus1 {
    constructor(game, x, y) {
        Object.assign(this, {game, x, y});

        this.spritesheet = ASSET_MANAGER.getAsset("./Sprites_and_Assets/MetalDesertEnvironment.png");
    }

    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 86, 0, 80, 40, this.x - this.game.camera.x, this.y, PARAMS.BLOCKWIDTH * 5, PARAMS.BLOCKWIDTH * 2.5);
    };
};

class ForegroundCactus2 {
    constructor(game, x, y) {
        Object.assign(this, {game, x, y});

        this.spritesheet = ASSET_MANAGER.getAsset("./Sprites_and_Assets/MetalDesertEnvironment.png");
    }

    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 86, 0, 80, 40, this.x - this.game.camera.x, this.y, PARAMS.BLOCKWIDTH * 5, PARAMS.BLOCKWIDTH * 2.5);
    };
};

class MetalDesertGround {
    constructor(game, x, y, w, h) {
        Object.assign(this, {game, x, y, w, h});

        this.spritesheet = ASSET_MANAGER.getAsset("./Sprites_and_Assets/MetalDesertPath.png");
        this.BB = new BoundingBox(this.x, this.y, this.w, this.h);
    }

    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 86, 0, 80, 40, this.x - this.game.camera.x, this.y, PARAMS.BLOCKWIDTH * 5, PARAMS.BLOCKWIDTH * 2.5);
    };
};

class MetalDesertPlanets {
    constructor(game, x, y) {
        Object.assign(this, {game, x, y});

        this.spritesheet = ASSET_MANAGER.getAsset("./Sprites_and_Assets/MetalDesertEnvironment.png");
        this.planets = new Animator(this.spritesheet, 450, 29, this.x, this.y, 1, 0.2);
    }

    update() {

    };

    draw(ctx) {
        this.planets.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };
};

class Rock {
    constructor(game, x, y) {
        Object.assign(this, {game, x, y});

        this.rolling = new Animator(this.rock, 0, 0, this.x, this.y, 12, 0.3);
    };

    update() {

    };

    draw(ctx) {
        this.rolling.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };
}

//level 2 environment assets
class AcidMeadowsBackground {
    constructor(game, x, y){
        Object.assign(this, {game, x, y});

        this.spritesheet = ASSET_MANAGER.getAsset("./Sprites_and_Assets/AcidMeadowsBackground.png");
    };

    update(){
    
    };

    draw(ctx){
        ctx.drawImage(this.spritesheet, 0, 0, 960, 576, this.x, this.y, 0, 100000);
    };
};

class RainClouds1 {
    constructor(game, x, y, speed){
        Object.assign(this, {game, x, y, speed});
        this.game = game;
        this.spritesheet = ASSET_MANAGER.getAsset("./Sprites_and_Assets/clouds1.png");
        this.animator = new Animator(this.spritesheet, 50, 0, 310, 150, 9, 0.2);
        //this.x = 100;
        //this.y = 35;
        //this.speed = 200;
    };

    update(){
        this.x += this.speed * this.game.clockTick;
         if(this.x > 950)
             this.x = -200;
            // this.y = 365;
        // }
        ///if(this.x > 400)
            //this.y += .95;
    };

    draw(ctx){
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };
};

class RainClouds2 {
    constructor(game, x, y){
        Object.assign(this, {game, x, y});

        this.game = game;
        this.spritesheet = ASSET_MANAGER.getAsset("./Sprites_and_Assets/clouds2.png");
        this.animator = new Animator(this.spritesheet, 40, 0, 312.5, 150, 9, 0.2);
        // this.x = -100;
        // this.y = 35;
        // this.speed = 100;
    };

    update(){
        this.x += this.speed * this.game.clockTick;
         if(this.x > 950)
             this.x = -200;
            // this.y = 365;
        // }
        ///if(this.x > 400)
            //this.y += .95;
    };

    draw(ctx){
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };
};

class Mushroom1 {
    constructor(game, x, y){
        Object.assign(this, {game, x, y});

        // this.game = game;
        this.spritesheet = ASSET_MANAGER.getAsset("./Sprites_and_Assets/mushroom1.png");
    };

    update(){
    
    };

    draw(ctx){
        ctx.drawImage(this.spritesheet, 0, 0, 960, 576, 400, 165);
    };
};

class Mushroom2 {
    constructor(game, x, y) {
        Object.assign(this, {game, x, y});

        this.spritesheet = ASSET_MANAGER.getAsset("./Sprites_and_Assets/mushroom2.png");
    }

    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 86, 0, 80, 40, this.x - this.game.camera.x, this.y, PARAMS.BLOCKWIDTH * 5, PARAMS.BLOCKWIDTH * 2.5);
    };
};

class AcidMeadowsPath {
    constructor(game, x, y) {
        Object.assign(this, {game, x, y});

        this.spritesheet = ASSET_MANAGER.getAsset("./Sprites_and_Assets/path.png");
    }

    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 86, 0, 80, 40, this.x - this.game.camera.x, this.y, PARAMS.BLOCKWIDTH * 5, PARAMS.BLOCKWIDTH * 2.5);
    };
};

class AcidMeadowsPlanets {
    constructor(game, x, y) {
        Object.assign(this, {game, x, y});

        this.spritesheet = ASSET_MANAGER.getAsset("./Sprites_and_Assets/planets.png");
    }

    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 86, 0, 80, 40, this.x - this.game.camera.x, this.y, PARAMS.BLOCKWIDTH * 5, PARAMS.BLOCKWIDTH * 2.5);
    };
};

class Puddles1 {
    constructor(game, x, y) {
        Object.assign(this, {game, x, y});

        this.spritesheet = ASSET_MANAGER.getAsset("./Sprites_and_Assets/puddles1.png");
    }

    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 0, 0, 182, 58, this.x - this.game.camera.x, this.y, PARAMS.BLOCKWIDTH * 5, PARAMS.BLOCKWIDTH * 2.5);
    };
};

class Puddles2 {
    constructor(game, x, y) {
        Object.assign(this, {game, x, y});

        this.spritesheet = ASSET_MANAGER.getAsset("./Sprites_and_Assets/puddles2.png");
    }

    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, -10, 0, 230, 58, this.x - this.game.camera.x, this.y, PARAMS.BLOCKWIDTH * 5, PARAMS.BLOCKWIDTH * 2.5);
    };
};

class Puddles3 {
    constructor(game, x, y) {
        Object.assign(this, {game, x, y});

        this.spritesheet = ASSET_MANAGER.getAsset("./Sprites_and_Assets/puddles3.png");
    }

    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 0, 0, 200, 56, this.x - this.game.camera.x, this.y, PARAMS.BLOCKWIDTH * 5, PARAMS.BLOCKWIDTH * 2.5);
    };
};

class Puddles4 {
    constructor(game, x, y) {
        Object.assign(this, {game, x, y});

        this.spritesheet = ASSET_MANAGER.getAsset("./Sprites_and_Assets/puddles4.png");
    }

    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 10, 0, 170, 58, this.x - this.game.camera.x, this.y, PARAMS.BLOCKWIDTH * 5, PARAMS.BLOCKWIDTH * 2.5);
    };
};

class Puddles5 {
    constructor(game, x, y) {
        Object.assign(this, {game, x, y});

        this.spritesheet = ASSET_MANAGER.getAsset("./Sprites_and_Assets/puddles5.png");
    }

    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, -10, 0, 230, 58, this.x - this.game.camera.x, this.y, PARAMS.BLOCKWIDTH * 5, PARAMS.BLOCKWIDTH * 2.5);
    };
};

class Rain1 {
    constructor(game, x, y) {
        Object.assign(this, {game, x, y});

        this.spritesheet = ASSET_MANAGER.getAsset("./Sprites_and_Assets/rain.png");
    }

    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 40, 0, 314.5, 170, this.x - this.game.camera.x, this.y, PARAMS.BLOCKWIDTH * 5, PARAMS.BLOCKWIDTH * 2.5);
    };
};

//level 3 environment assets
class LavaLandBackground {
    constructor(game, x, y) {
        Object.assign(this, {game, x, y});

        this.spritesheet = ASSET_MANAGER.getAsset("./Sprites_and_Assets/lavaLandBackground.png");
    };

    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 0, 0, 0, 0, this.x, this.y, 0, 0);
    };
}

class LavaLandHorizontal {
    constructor(game, x, y) {
        Object.assign(this, {game, x, y});

        this.spritesheet = ASSET_MANAGER.getAsset("./Sprites_and_Assets/landHorizontal.png");
    };

    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 0, 0, 0, 0, this.x, this.y, 0, 0);
    };
}

class LavaLandVertical {
    constructor(game, x, y) {
        Object.assign(this, {game, x, y});

        this.spritesheet = ASSET_MANAGER.getAsset("./Sprites_and_Assets/landVertical.png");
    };

    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 0, 0, 0, 0, this.x, this.y, 0, 0);
    };
}

class LavaLandSquare {
    constructor(game, x, y) {
        Object.assign(this, {game, x, y});

        this.spritesheet = ASSET_MANAGER.getAsset("./Sprites_and_Assets/landSquare.png");
    };

    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 0, 0, 0, 0, this.x, this.y, 0, 0);
    };
}

class Diamond1 {
    constructor(game, x, y) {
        Object.assign(this, {game, x, y});

        this.spritesheet = ASSET_MANAGER.getAsset("./Sprites_and_Assets/diamond1.png");
    };

    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 0, 0, 0, 0, this.x, this.y, 0, 0);
    };
}

class Diamond2 {
    constructor(game, x, y) {
        Object.assign(this, {game, x, y});

        this.spritesheet = ASSET_MANAGER.getAsset("./Sprites_and_Assets/diamond2.png");
    };

    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 0, 0, 0, 0, this.x, this.y, 0, 0);
    };
}

class Diamond3 {
    constructor(game, x, y) {
        Object.assign(this, {game, x, y});

        this.spritesheet = ASSET_MANAGER.getAsset("./Sprites_and_Assets/diamond3.png");
    };

    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 0, 0, 0, 0, this.x, this.y, 0, 0);
    };
}

class Diamond4 {
    constructor(game, x, y) {
        Object.assign(this, {game, x, y});

        this.spritesheet = ASSET_MANAGER.getAsset("./Sprites_and_Assets/diamond4.png");
    };

    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 0, 0, 0, 0, this.x, this.y, 0, 0);
    };
}

class StepShort {
    constructor(game, x, y) {
        Object.assign(this, {game, x, y});

        this.spritesheet = ASSET_MANAGER.getAsset("./Sprites_and_Assets/stepShort.png");
    };

    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 0, 0, 0, 0, this.x, this.y, 0, 0);
    };
}

class StepMedium {
    constructor(game, x, y) {
        Object.assign(this, {game, x, y});

        this.spritesheet = ASSET_MANAGER.getAsset("./Sprites_and_Assets/stepMedium.png");
    };

    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 0, 0, 0, 0, this.x, this.y, 0, 0);
    };
}

class StepLarge {
    constructor(game, x, y) {
        Object.assign(this, {game, x, y});

        this.spritesheet = ASSET_MANAGER.getAsset("./Sprites_and_Assets/stepLarge.png");
    };

    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 0, 0, 0, 0, this.x, this.y, 0, 0);
    };
}

class LavaLandLava {
    constructor(game, x, y) {
        Object.assign(this, {game, x, y});

        this.spritesheet = ASSET_MANAGER.getAsset("./Sprites_and_Assets/LavaLandLava.png");
    };

    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 0, 300, 0, 0, this.x, this.y, 0, 0);
    };
}

//level 4 environment assets
class Bush1 {
    constructor(game, x, y) {
        Object.assign(this, {game, x, y});

        this.spritesheet = ASSET_MANAGER.getAsset("./Sprites_and_Assets/bush1.png");
    };

    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 0, 0, 508, 100, this.x, this.y, 0, 0);
    };
}

class Bush2 {
    constructor(game, x, y) {
        Object.assign(this, {game, x, y});

        this.spritesheet = ASSET_MANAGER.getAsset("./Sprites_and_Assets/bush2.png");
    };

    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 0, 0, 224, 90, this.x, this.y, 0, 0);
    };
}

class Bush3 {
    constructor(game, x, y) {
        Object.assign(this, {game, x, y});

        this.spritesheet = ASSET_MANAGER.getAsset("./Sprites_and_Assets/bush3.png");
    };

    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 0, 0, 333, 85, this.x, this.y, 0, 0);
    };
}

class Cloud1 {
    constructor(game, x, y) {
        Object.assign(this, {game, x, y});

        this.spritesheet = ASSET_MANAGER.getAsset("./Sprites_and_Assets/cloud1.png");
    };

    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 0, 0, 191, 96, this.x, this.y, 0, 0);
    };
}

class Cloud2 {
    constructor(game, x, y) {
        Object.assign(this, {game, x, y});

        this.spritesheet = ASSET_MANAGER.getAsset("./Sprites_and_Assets/cloud2.png");
    };

    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 0, 0, 175, 91, this.x, this.y, 0, 0);
    };
}

class Cloud3 {
    constructor(game, x, y) {
        Object.assign(this, {game, x, y});

        this.spritesheet = ASSET_MANAGER.getAsset("./Sprites_and_Assets/cloud3.png");
    };

    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 0, 0, 175, 91, this.x, this.y, 0, 0);
    };
}

class Cloud4 {
    constructor(game, x, y) {
        Object.assign(this, {game, x, y});

        this.spritesheet = ASSET_MANAGER.getAsset("./Sprites_and_Assets/cloud4.png");
    };

    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 0, 0, 255, 120, this.x, this.y, 0, 0);
    };
}

class Cloud5 {
    constructor(game, x, y) {
        Object.assign(this, {game, x, y});

        this.spritesheet = ASSET_MANAGER.getAsset("./Sprites_and_Assets/cloud5.png");
    };

    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 0, 0, 191, 120, this.x, this.y, 0, 0);
    };
}

class Cloud6 {
    constructor(game, x, y) {
        Object.assign(this, {game, x, y});

        this.spritesheet = ASSET_MANAGER.getAsset("./Sprites_and_Assets/cloud6.png");
    };

    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 0, 0, 245, 110, this.x, this.y, 0, 0);
    };
}

class Cloud7 {
    constructor(game, x, y) {
        Object.assign(this, {game, x, y});

        this.spritesheet = ASSET_MANAGER.getAsset("./Sprites_and_Assets/cloud7.png");
    };

    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 0, 0, 189, 114, this.x, this.y, 0, 0);
    };
}

class Cloud8 {
    constructor(game, x, y) {
        Object.assign(this, {game, x, y});

        this.spritesheet = ASSET_MANAGER.getAsset("./Sprites_and_Assets/cloud8.png");
    };

    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 0, 0, 140, 94, this.x, this.y, 0, 0);
    };
}

class Sun {
    constructor(game, x, y) {
        Object.assign(this, {game, x, y});

        this.spritesheet = ASSET_MANAGER.getAsset("./Sprites_and_Assets/sun.png");
    };

    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 0, 0, 336, 300, this.x, this.y, 0, 0);
    };
}

//general environment assets
class Coin {
    constructor(game){
        this.game = game;
        // this.animator = new Animator(ASSET_MANAGER.getAsset("./Sprites_and_Assets/coin.png"), 10, 0, 50, 65, 12, 0.062);
        this.BB = new BoundingBox(400, 160, 50, 65);
        this.spritesheet = ASSET_MANAGER.getAsset("./Sprites_and_Assets/coin.png");
    };

    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 10, 0, 50, 65, this.x, this.y, 0, 0);
    };
}

class HealthPack {
    constructor(game, x, y) {
        Object.assign(this, {game,x,y});

        this.spritesheet = ASSET_MANAGER.getAsset("./Sprites_and_Assets/Health-and-Ammo-packs.png");
    };

    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 0, 0, 336, 300, this.x, this.y, 0, 0);
    };
}

class AmmoPack {
    constructor(game, x, y) {
        Object.assign(this, {game,x,y});

        this.spritesheet = ASSET_MANAGER.getAsset("./Sprites_and_Assets/Health-and-Ammo-packs.png");
    };

    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 0, 0, 336, 300, this.x, this.y, 0, 0);
    };
}