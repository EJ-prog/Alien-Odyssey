//level 1 environment assets
class MetalDesertBackground {
    constructor(game, x, y, width) {
        Object.assign(this, {game, x, y, width});

        this.spritesheet = ASSET_MANAGER.getAsset("./Sprites_and_Assets/MetalDesertBackground.png");
    };

    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 0, 0, this.width, 580, this.x, this.y, this.width, 580);
    };
};

class MetalMountains {
    constructor(game, x, y, width) {
        Object.assign(this, {game, x, y, width});

        this.spritesheet = ASSET_MANAGER.getAsset("./Sprites_and_Assets/MetalDesertBackgroundMountains.png");
    };

    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 0, 0, this.width, 580, this.x - this.game.camera.x, this.y, this.width, 580);
    };
};

class BackgroundCactus1 {
    constructor(game, x, y) {
        Object.assign(this, {game, x, y});

        this.spritesheet = ASSET_MANAGER.getAsset("./Sprites_and_Assets/MetalDesertEnvironment.png");
    };

    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 15, 160, 150, 200, this.x - this.game.camera.x, this.y, 150, 200);
    };
};

class BackgroundCactus2 {
    constructor(game, x, y) {
        Object.assign(this, {game, x, y});

        this.spritesheet = ASSET_MANAGER.getAsset("./Sprites_and_Assets/MetalDesertEnvironment.png");
    };

    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 184, 160, 150, 200, this.x - this.game.camera.x, this.y, 150, 200);
    };
};

class ForegroundCactus1 {
    constructor(game, x, y) {
        Object.assign(this, {game, x, y});

        this.spritesheet = ASSET_MANAGER.getAsset("./Sprites_and_Assets/MetalDesertEnvironment.png");
        this.updateBB();
    };

    updateBB() {
        this.lastBB = this.BB;
        this.BB = new BoundingBox(this.x + 8 - this.game.camera.x, this.y + 110, 47, 100);
    }

    update() {
        this.updateBB();
    };


    draw(ctx) {
        // ctx.strokestyle = "Red";
        // ctx.strokeRect(this.BB.x, this.BB.y, this.BB.width, this.BB.height);
        ctx.drawImage(this.spritesheet, 336, 160, 100, 210, this.x - this.game.camera.x, this.y, 100, 210);
    };

};

class ForegroundCactus2 {
    constructor(game, x, y) {
        Object.assign(this, {game, x, y});

        this.spritesheet = ASSET_MANAGER.getAsset("./Sprites_and_Assets/MetalDesertEnvironment.png");
        this.updateBB();
    }

    updateBB() {
        this.lastBB = this.BB;
        this.BB = new BoundingBox(this.x + 6 - this.game.camera.x, this.y + 120, 62, 90);
    }

    update() {
        this.updateBB();
    };

    draw(ctx) {
        // ctx.strokestyle = "Red";
        // ctx.strokeRect(this.BB.x, this.BB.y, this.BB.width, this.BB.height);
        ctx.drawImage(this.spritesheet, 430, 160, 100, 210, this.x - this.game.camera.x, this.y, 100, 210);
    };
};

class MetalDesertPath {
    constructor(game, x, y, dx, dy, w, h) {
        Object.assign(this, {game, x, y, dx, dy, w, h});

        this.spritesheet = ASSET_MANAGER.getAsset("./Sprites_and_Assets/MetalDesertPath.png");
        this.BB = new BoundingBox(this.dx, this.dy, this.w, this.h);
    }

    update() {

    };

    draw(ctx) {
        // ctx.strokeStyle = "Red";
        // ctx.strokeRect(this.BB.x, this.BB.y, this.BB.width, this.BB.height);
        ctx.drawImage(this.spritesheet, this.x, this.y, this.w, this.h, this.dx - this.game.camera.x, this.dy, this.w, this.h);
    };
};

class MetalDesertGround {
    constructor(game, x, y, dx, dy, w, h) {
        Object.assign(this, {game, x, y, dx, dy, w, h});

        this.spritesheet = ASSET_MANAGER.getAsset("./Sprites_and_Assets/MetalDesertPath.png");
        this.BB = new BoundingBox(this.dx, this.dy, this.w, this.h);
    }

    update() {

    };

    draw(ctx) {
        // ctx.strokestyle = "Red";
        // ctx.strokeRect(this.BB.x, this.BB.y, this.BB.width, this.BB.height);
        ctx.drawImage(this.spritesheet, this.x, this.y, this.w, this.h, this.dx - this.game.camera.x, this.dy, this.w, this.h);
    };
};

class MetalDesertPlanets {
    constructor(game, x, y) {
        Object.assign(this, {game, x, y});

        this.spritesheet = ASSET_MANAGER.getAsset("./Sprites_and_Assets/MetalDesertEnvironment.png");
        this.planets = new Animator(this.spritesheet, 450, 29, 400, 160, 1, 0.2);
    }

    update() {
        // if (this.x > 300) {
        //     this.x -= 50*this.game.clockTick;
        // }

    };

    draw(ctx) {
        this.planets.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };
};

class Rock {
    constructor(game, x, y) {
        Object.assign(this, {game, x, y});

        this.rock = ASSET_MANAGER.getAsset("./Sprites_and_Assets/MetalDesertRock.png");
        this.rolling = new Animator(this.rock, 0, 0, 60, 61, 12, 0.3);
        // this.BB = new BoundingBox(this.x, this.y - 50, 60, 50);
        this.speed = 40;
        this.width = 50;
        this.height = 50;
        this.updateBB();
    };

    updateBB(){
        this.lastBB = this.BB;
        this.BB = new BoundingBox(this.x + 5 - this.game.camera.x, this.y + 10, this.width-5, this.height);
    };

    update() {
        const TICK = this.game.clockTick;
        //this.x -= this.speed*this.game.clockTick;
        if(this.x < 500) {
            this.x += this.speed*TICK;
        }
        this.updateBB();

        var that = this;
        this.game.entities.forEach(function (entity) {
            if (entity.BB && that.BB.collide(entity.BB)) {
                if (entity instanceof ForegroundCactus2 || entity instanceof ForegroundCactus1){ 
                    that.speed = -that.speed;
                }
               that.updateBB();
            } 
         that.updateBB();
        });
    };

    draw(ctx) {
        this.rolling.drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y);  // (750 , 295)
        // ctx.strokestyle = "Red";
        // ctx.strokeRect(this.BB.x, this.BB.y, this.BB.width, this.BB.height);
    };

};

//level 2 environment assets
class AcidMeadowsBackground {
    constructor(game, x, y, width){
        Object.assign(this, {game, x, y, width});

        this.spritesheet = ASSET_MANAGER.getAsset("./Sprites_and_Assets/AcidMeadowsBackground.png");
    };

    update(){
    
    };

    draw(ctx){
        ctx.drawImage(this.spritesheet, this.x, this.y, this.width, 576, this.x, this.y, this.width, 576);
    };
};

class AcidMeadowsHills {
    constructor(game, x, y, width){
        Object.assign(this, {game, x, y, width});

        this.spritesheet = ASSET_MANAGER.getAsset("./Sprites_and_Assets/AcidMeadowsHills.png");
    };

    update(){
    
    };

    draw(ctx){
        ctx.drawImage(this.spritesheet, 0, 0, this.width, 576, this.x - this.game.camera.x, this.y, this.width, 576);
    };
};

class RainClouds1 {
    constructor(game, x, y, speed){
        Object.assign(this, {game, x, y, speed});
        this.game = game;
        this.spritesheet = ASSET_MANAGER.getAsset("./Sprites_and_Assets/clouds1.png");
        this.animator = new Animator(this.spritesheet, 50, 0, 310, 150, 9, 0.2);
        this.restartX = this.x;
        this.game.addEntity(new Rain1(this.game, this.x));
        //this.x = 100;
        //this.y = 35;
        //this.speed = 200;
    };

    update(){
        this.x += this.speed * this.game.clockTick;
         if(this.x > 950)
             this.x = this.restartX;
            // this.y = 365;
        // }
        ///if(this.x > 400)
            //this.y += .95;
    };

    draw(ctx){
        this.animator.drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y);
    };
};

class RainClouds2 {
    constructor(game, x, y, speed){
        Object.assign(this, {game, x, y, speed});

        this.game = game;
        this.spritesheet = ASSET_MANAGER.getAsset("./Sprites_and_Assets/clouds2.png");
        this.animator = new Animator(this.spritesheet, 40, 0, 312.5, 150, 9, 0.2);
        this.restartX = this.x;
        this.game.addEntity(new Rain1(this.game, this.x));
        // this.x = -100;
        // this.y = 35;
        // this.speed = 100;
    };

    update(){
        this.x += this.speed * this.game.clockTick;
         if(this.x > 950)
             this.x = this.restartX;
            // this.y = 365;
        // }
        ///if(this.x > 400)
            //this.y += .95;
    };

    draw(ctx){
        this.animator.drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y);
    };
};

class Mushroom1 {
    constructor(game, x, y){
        Object.assign(this, {game, x, y});

        // this.game = game;
        this.spritesheet = ASSET_MANAGER.getAsset("./Sprites_and_Assets/mushroom1.png");
        this.rain = false;
        this.raindrops = ASSET_MANAGER.getAsset("./Sprites_and_Assets/AcidMeadowsMushroomRaindrops.png");
        this.animator = new Animator(this.raindrops, 0, 0, 169, 200, 9, 0.2);
        // this.BB = new BoundingBox(this.x + 5, this.y + 10, 116, 63);
        this.updateBB();
    };

    updateBB(){
        this.lastBB = this.BB;
        this.BB = new BoundingBox(this.x - 5 - this.game.camera.x, this.y + 10, 147, 100);
    };

    update() {
        this.updateBB();

        var that = this;
        this.game.entities.forEach(function (entity) {
            if (entity.BB && that.BB.collide(entity.BB)) {
                if (entity instanceof Rain1) {
                    that.rain = true;
                }
            }
        });
    };

    draw(ctx){
        // ctx.strokeRect(this.BB.x, this.BB.y, this.BB.width, this.BB.height);
        ctx.drawImage(this.spritesheet, 0, 0, 400, 185, this.x - this.game.camera.x, this.y, 440, 225);
        if (this.rain) {
            this.animator.drawFrame2(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y, 180, 240);
        }
    };
};

class Mushroom2 {
    constructor(game, x, y) {
        Object.assign(this, {game, x, y});

        this.spritesheet = ASSET_MANAGER.getAsset("./Sprites_and_Assets/mushroom2.png");
        this.rain = false;
        this.raindrops = ASSET_MANAGER.getAsset("./Sprites_and_Assets/AcidMeadowsMushroomRaindrops.png");
        this.animator = new Animator(this.raindrops, 0, 0, 169, 200, 9, 0.2);
        // this.BB = new BoundingBox(this.x + 5, this.y + 10, 116, 63);
        this.updateBB();
    };

    updateBB(){
        this.lastBB = this.BB;
        this.BB = new BoundingBox(this.x - 10 - this.game.camera.x, this.y + 10, 210, 160);
    };

    update() {
        this.updateBB();

        var that = this;
        this.game.entities.forEach(function (entity) {
            if (entity.BB && that.BB.collide(entity.BB)) {
                if (entity instanceof Rain1) {
                    that.rain = true;
                }
            }
        });
    };

    draw(ctx) {
        // ctx.strokeRect(this.BB.x, this.BB.y, this.BB.width, this.BB.height);
        ctx.drawImage(this.spritesheet, 0, 0, 400, 260, this.x - this.game.camera.x, this.y, 480, 340);
        if (this.rain) {
            this.animator.drawFrame2(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y - 10, 220, 305);
        }
    };
};

class Rain1 {
    constructor(game, x){
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./Sprites_and_Assets/rain.png"), 40, 0, 314.5, 170, 9, 0.1);
        this.x = x;
        this.y = 135;
        this.width = 260;
        this.height = 155;
        this.speed = 200;
        this.restartX = this.x;
        this.updateBB();
    };
    
    updateBB(){
        this.lastBB = this.BB;
        this.BB = new BoundingBox(this.x + 5 - this.game.camera.x, this.y, this.width - 20, this.height);
    };

    update(){
        const TICK = this.game.clockTick;

        this.x += this.speed * TICK;
        this.y += this.speed * TICK;
        var that = this;
         if(that.x > 950) {
             that.x = this.restartX;
             that.updateBB();
            // this.y = 365;
        }
        if(that.y > 500) {
            that.y = 135;
            that.updateBB();
        }
        that.updateBB();
    };

    draw(ctx){
        // ctx.strokeRect(this.BB.x, this.BB.y, this.BB.width, this.BB.height);
        this.animator.drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y);
    };
};

class AcidMeadowsPath {
    constructor(game, x, y, dx, dy, w, h) {
        Object.assign(this, {game, x, y, dx, dy, w, h});

        this.spritesheet = ASSET_MANAGER.getAsset("./Sprites_and_Assets/path.png");
        this.BB = new BoundingBox(this.dx, this.dy, this.w, this.h);
    }

    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, this.x, this.y, this.w, this.h, this.dx - this.game.camera.x, this.dy, this.w, this.h);
    };
};

class AcidMeadowsGround {
    constructor(game, x, y, dx, dy, w, h) {
        Object.assign(this, {game, x, y, dx, dy, w, h});

        this.spritesheet = ASSET_MANAGER.getAsset("./Sprites_and_Assets/path.png");
        this.BB = new BoundingBox(this.dx, this.dy, this.w, this.h);
    }

    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, this.x, this.y, this.w, this.h, this.dx - this.game.camera.x, this.dy, this.w, this.h);
        // ctx.strokeRect(this.BB.x, this.BB.y, this.BB.width, this.BB.height);
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
        ctx.drawImage(this.spritesheet, 0, 0, 400, 190, this.x, this.y, 400, 190);
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
        ctx.drawImage(this.spritesheet, 0, 0, 182, 58, this.x, this.y, PARAMS.BLOCKWIDTH * 5, PARAMS.BLOCKWIDTH * 2.5);
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
        ctx.drawImage(this.spritesheet, -10, 0, 230, 58, this.x, this.y, PARAMS.BLOCKWIDTH * 5, PARAMS.BLOCKWIDTH * 2.5);
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
        ctx.drawImage(this.spritesheet, 0, 0, 200, 56, this.x, this.y, PARAMS.BLOCKWIDTH * 5, PARAMS.BLOCKWIDTH * 2.5);
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
        ctx.drawImage(this.spritesheet, 10, 0, 170, 58, this.x, this.y, PARAMS.BLOCKWIDTH * 5, PARAMS.BLOCKWIDTH * 2.5);
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
        ctx.drawImage(this.spritesheet, -10, 0, 230, 58, this.x, this.y, PARAMS.BLOCKWIDTH * 5, PARAMS.BLOCKWIDTH * 2.5);
    };
};

//level 3 environment assets
class LavaLandBackground {
    constructor(game, x, y, width) {
        Object.assign(this, {game, x, y, width});

        this.spritesheet = ASSET_MANAGER.getAsset("./Sprites_and_Assets/LavaLandBackground.png");
    };

    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 0, 0, this.width, 580, this.x - this.game.camera.x, this.y, this.width, 580);
    };
}

class LavaLandHorizontal {
    constructor(game, x, y) {
        Object.assign(this, {game, x, y});

        this.spritesheet = ASSET_MANAGER.getAsset("./Sprites_and_Assets/landHorizontal.png");
        this.width = 300;
        this.height = 100;
        this.updateBB();
    };

    updateBB(){
        this.lastBB = this.BB;
        this.BB = new BoundingBox(this.x + 5 - this.game.camera.x, this.y + 15, this.width, this.height);
    };

    update() {
        this.updateBB();
    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 0, 0, this.width, this.height, this.x - this.game.camera.x, this.y, this.width, this.height);
        ctx.strokeRect(this.BB.x, this.BB.y, this.BB.width, this.BB.height);
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
    constructor(game, x, y, resetY) {
        Object.assign(this, {game, x, y, resetY});

        this.spritesheet = ASSET_MANAGER.getAsset("./Sprites_and_Assets/MBridgeAnimation.png");
        this.animator = new Animator(this.spritesheet, 0, 0, 225, 190, 4, 0.25);
        this.speed = 100;
    };

    update() {

        this.y += this.speed * this.game.clockTick;
        if (this.y > 576) {
            this.y = this.resetY;
        }
    };

    draw(ctx) {
        // ctx.drawImage(this.spritesheet, 0, 0, 0, 0, this.x, this.y, 0, 0);
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
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
    constructor(game, x, y){
        this.game = game;
        Object.assign(this, {game, x, y});
        // this.animator = new Animator(ASSET_MANAGER.getAsset("./Sprites_and_Assets/coin.png"), 10, 0, 50, 65, 12, 0.062);
        // this.BB = new BoundingBox(400, 160, 50, 65);
        this.spritesheet = ASSET_MANAGER.getAsset("./Sprites_and_Assets/coin.png");
        this.animator = new Animator(this.spritesheet, 10, 0, 50, 65, 12, 0.062);
        this.updateBB();
    };

    update() {
        this.updateBB();
    };

    updateBB() {
        this.BB = new BoundingBox(this.x - this.game.camera.x, this.y + 10, 44, 44);
    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y);
        // ctx.strokeRect(this.BB.x, this.BB.y, this.BB.width, this.BB.height);
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

class Health {
    constructor(game) {
        Object.assign(this, {game});
        this.health = ASSET_MANAGER.getAsset("./Sprites_and_Assets/Health-and-Ammo.png");
        // this.BB = new BoundingBox(400, 160, 50, 65);
        //this.x = 600;
        //this.y = 365;
        //this.speed = 70;

        //("./Sprites_and_Assets/Health-and-Ammo-packs.png")
    };

    update() {
        
    };

    draw(ctx, hitpoints) {
        if (hitpoints === 14) {
            ctx.drawImage(this.health, 10+(134*0), 0, 110, 26, 5,0, 200, 30);
        }  else if (hitpoints === 13) {
            ctx.drawImage(this.health, 10+(134*1), 0, 110, 26, 5,0, 200, 30);
        } else if (hitpoints === 12) {
            ctx.drawImage(this.health, 10+(134*2), 0, 110, 26, 5,0, 200, 30);
        } else if (hitpoints === 11) {
            ctx.drawImage(this.health, 10+(134*3), 0, 110, 26, 5,0, 200, 30);
        } else if (hitpoints === 10) {
            ctx.drawImage(this.health, 10+(134*4), 0, 110, 26, 5,0, 200, 30);
        } else if (hitpoints === 9) {
            ctx.drawImage(this.health, 10+(134*5), 0, 110, 26, 5,0, 200, 30);
        } else if (hitpoints === 8) {
            ctx.drawImage(this.health, 10+(134*6), 0, 110, 26, 5,0, 200, 30);
        } else if (hitpoints === 7) {
            ctx.drawImage(this.health, 10+(134*7), 0, 110, 26, 5,0, 200, 30);
        } else if (hitpoints === 6) {
            ctx.drawImage(this.health, 10+(134*8), 0, 110, 26, 5,0, 200, 30);
        } else if (hitpoints === 5) {
            ctx.drawImage(this.health, 10+(134*9), 0, 110, 26, 5,0, 200, 30);
        } else if (hitpoints === 4) {
            ctx.drawImage(this.health, 10+(134*10), 0, 110, 26, 5,0, 200, 30);
        } else if (hitpoints === 3) {
            ctx.drawImage(this.health, 10+(134*11), 0, 110, 26, 5,0, 200, 30);
        } else if (hitpoints === 2) {
            ctx.drawImage(this.health, 10+(134*12), 0, 110, 26, 5,0, 200, 30);
        } else if (hitpoints === 1) {
            ctx.drawImage(this.health, 10+(134*13), 0, 110, 26, 5,0, 200, 30);
        } else if (hitpoints === 0) {
            ctx.drawImage(this.health, 10+(134*14), 0, 110, 26, 5,0, 200, 30);
        }
    };
}

class AmmoPack {
    constructor(game, x, y) {
        Object.assign(this, {game,x,y});

        this.spritesheet = ASSET_MANAGER.getAsset("./Sprites_and_Assets/Health-and-Ammo-packs.png");
    };

    update() {

    };

    updateBB() {
        this.BB = new BoundingBox(this.x, this.y, PARAMS.BLOCKWIDTH, (1 + 7/16) * PARAMS.BLOCKWIDTH);
    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 200, 0, 336, 300, this.x, this.y, 0, 0);
    };
}

class Ammo {
    constructor(game) {
        Object.assign(this, {game});
        this.ammo = ASSET_MANAGER.getAsset("./Sprites_and_Assets/Health-and-Ammo.png");
        // this.animator = new Animator(ASSET_MANAGER.getAsset("./Sprites_and_Assets/Health-and-Ammo.png"), 65, 0, 50, 65, 12, 0.062);
        // this.BB = new BoundingBox(400, 160, 50, 65);
        //this.x = 600;
        //this.y = 365;
        //this.speed = 70;

        //("./Sprites_and_Assets/Health-and-Ammo-packs.png")
    };

    update() {
        
    };

    draw(ctx, charge){
        if (charge === 14) {
            ctx.drawImage(this.ammo, 10+(134*0), 26, 125, 26, 5, 27, 228, 30);
        }  else if (charge === 13) {
            ctx.drawImage(this.ammo, 10+(134*1), 26, 125, 26, 5, 27, 228, 30);
        } else if (charge === 12) {
            ctx.drawImage(this.ammo, 10+(134*2), 26, 125, 26, 5, 27, 228, 30);
        } else if (charge === 11) {
            ctx.drawImage(this.ammo, 10+(134*3), 26, 125, 26, 5, 27, 228, 30);
        } else if (charge === 10) {
            ctx.drawImage(this.ammo, 10+(134*4), 26, 125, 26, 5, 27, 228, 30);
        } else if (charge === 9) {
            ctx.drawImage(this.ammo, 10+(134*5), 26, 125, 26, 5, 27, 228, 30);
        } else if (charge === 8) {
            ctx.drawImage(this.ammo, 6+(131*6), 26, 125, 26, 5, 27, 228, 30);
        } else if (charge === 7) {
            ctx.drawImage(this.ammo, 6+(131*7), 26, 125, 26, 5, 27, 228, 30);
        } else if (charge === 6) {
            ctx.drawImage(this.ammo, 6+(131*8), 26, 125, 26, 5, 27, 228, 30);
        } else if (charge === 5) {
            ctx.drawImage(this.ammo, 6+(131*9), 26, 125, 26, 5, 27, 228, 30);
        } else if (charge === 4) {
            ctx.drawImage(this.ammo, 6+(131*10), 26, 125, 26, 5, 27, 228, 30);
        } else if (charge === 3) {
            ctx.drawImage(this.ammo, 6+(131*11), 26, 125, 26, 5, 27, 228, 30);
        } else if (charge === 2) {
            ctx.drawImage(this.ammo, 6+(131*12), 26, 125, 26, 5, 27, 228, 30);
        } else if (charge === 1) {
            ctx.drawImage(this.ammo, 6+(131*13), 26, 125, 26, 5, 27, 228, 30);
        } else if (charge === 0) {
            ctx.drawImage(this.ammo, 10+(134*14), 0, 110, 26, 5,0, 200, 30);
        }
    };
}

class LunarRockPieces {
    constructor(game, x, y, level) {
        Object.assign(this, {game, x, y, level});

        if (this.level === 1) {
            this.piece1 = ASSET_MANAGER.getAsset("./Sprites_and_Assets/LunarRockPiece1.png");
            this.width = 30;
            this.height = 25;
            this.updateBB();
        } else if (this.level === 2) {
            this.piece2 = ASSET_MANAGER.getAsset("./Sprites_and_Assets/LunarRockPiece2.png");
            this.width = 33;
            this.height = 29;
            this.updateBB();
        } else if (this.level === 3) {
            this.piece3 = ASSET_MANAGER.getAsset("./Sprites_and_Assets/LunarRockPiece3.png");
            this.width = 17;
            this.height = 18;
            this.updateBB();
        } else if (this.level === 4) {
            this.piece4 = ASSET_MANAGER.getAsset("./Sprites_and_Assets/LunarRockPiece4.png");
            this.width = 30;
            this.height = 41;
            this.updateBB();
        }
    };

    updateBB(){
        this.lastBB = this.BB;
        this.BB = new BoundingBox(this.x - this.game.camera.x, this.y, this.width, this.height);
    };

    update() {
        this.updateBB();
    };

    draw(ctx) {
        if (this.level === 1) {
            ctx.drawImage(this.piece1, this.x - this.game.camera.x, this.y);
            // ctx.strokeRect(this.BB.x, this.BB.y, this.BB.width, this.BB.height);
        } else if (this.level === 2) {
            ctx.drawImage(this.piece2, this.x - this.game.camera.x, this.y);
            // ctx.strokeRect(this.BB.x, this.BB.y, this.BB.width, this.BB.height);
        } else if (this.level === 3) {
            ctx.drawImage(this.piece3, this.x - this.game.camera.x, this.y);
            // ctx.strokeRect(this.BB.x, this.BB.y, this.BB.width, this.BB.height);
        } else if (this.level === 4) {
            ctx.drawImage(this.piece4, this.x - this.game.camera.x, this.y);
        }
    };
}