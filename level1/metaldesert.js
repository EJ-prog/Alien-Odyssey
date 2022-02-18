class metaldesert {
    constructor(game) {
        this.game = game;
        this.background = ASSET_MANAGER.getAsset("./Sprites_and_Assets/MetalDesertBackground.png");
        this.mountains = ASSET_MANAGER.getAsset("./Sprites_and_Assets/MetalDesertBackgroundMountains.png");
        this.environment = ASSET_MANAGER.getAsset("./Sprites_and_Assets/MetalDesertEnvironment.png");
        //this.rock = ASSET_MANAGER.getAsset("./Sprites_and_Assets/MetalDesertRock.png");
        this.planets = new Animator(this.environment, 450, 29, 400, 120, 1, 0.1);
        //this.rolling = new Animator(this.rock, 0, 0, 60, 61, 12, 0.3);
        this.x1 = 560;
        this.y1 = 32;
        this.speed = 40;
        this.x2 = 750;
    };


    update() {
        this.x -= this.speed * this.game.clockTick;
        if(this.x < 500) {
            this.x = 900;
        }
    };



    draw(ctx) {
        ctx.drawImage(this.background, 0, 0); //background
        this.planets.drawFrame(this.game.clockTick, ctx, this.x1, this.y1); //moving planets
        ctx.drawImage(this.mountains, 0, 0);
        ctx.drawImage(this.environment, 15, 160, 150, 200, 220, 245, 150, 200); //background cacti 1
        ctx.drawImage(this.environment, 184, 160, 150, 200, 650, 245, 150, 200); //background cacti 2
        ctx.drawImage(this.environment, 15, 160, 315, 200, 400, 245, 315, 200); //background cacti both
        ctx.drawImage(this.environment, 0, 440, 960, 136, 0, 440, 960, 136); //ground
        // ctx.drawImage(this.environment, 336, 160, 100, 210, 250, 245, 100, 210); //foreground cacti 1
        // ctx.drawImage(this.environment, 430, 160, 100, 210, 600, 245, 100, 210); //foreground cacti 2
        // ctx.drawImage(this.environment, 430, 160, 100, 210, 800, 245, 100, 210); //foreground cacti 2
        //this.rolling.drawFrame(this.game.clockTick, ctx, this.x2, 395);
    };
}

class Rock {
    constructor(game, x, y) {
        this.game = game;
        this.rock = ASSET_MANAGER.getAsset("./Sprites_and_Assets/MetalDesertRock.png");
        this.rolling = new Animator(this.rock, 0, 0, 60, 61, 12, 0.3);
        this.x = x;
        this.y = y;
       // this.BB = new BoundingBox(this.x, this.y - 50, 60, 50);
        this.speed = 40;
        this.width = 50;
        this.height = 50;
        this.updateBB();
    };

    updateBB(){
        this.lastBB = this.BB;
        this.BB = new BoundingBox(this.x + 5, this.y + 10, this.width-5, this.height);
    };

    update() {
        const TICK = this.game.clockTick;
        this.x -= this.speed*this.game.clockTick;
        if(this.x < 500) {
            this.x += this.speed*this.game.clockTick;
        }
        this.updateBB();

        var that = this;
        this.game.entities.forEach(function (entity) {
            if (entity.BB && that.BB.collide(entity.BB)) {
                if (entity instanceof cactus2){ 
                    that.speed = -that.speed;
                }
               that.updateBB();
            } 
         that.updateBB();
        });
    };

    draw(ctx) {
        this.rolling.drawFrame(this.game.clockTick, ctx, this.x, this.y);  // (750 , 295)
        ctx.strokestyle = "Red";
       // ctx.strokeRect(this.BB.x, this.BB.y, this.BB.width, this.BB.height);
    };

};


class LunarRockPiece1 {
    constructor(game, x, y) {
        this.game = game;
        this.x = x;
        this.y = y;
        this.environment = ASSET_MANAGER.getAsset("./Sprites_and_Assets/LunarRockPiece1.png");
        this.BB = new BoundingBox(this.x, this.y, 27, 20);
        // this.x1 = 220;
        // this.y1 = 245;
        //this.updateBB();
    };

    update() {
    };


    draw(ctx) {
        ctx.strokestyle = "Red";
        ctx.strokeRect(this.BB.x, this.BB.y, this.BB.width, this.BB.height);
       // ctx.drawImage(this.environment, TOP LEFT CORNER, 160, 100, 210, this.x, this.y, 100, 210);
        ctx.drawImage(this.environment, 1, 1, 27, 20, this.x, this.y, 27, 20);
//        ctx.drawImage(this.spritesheet, 0, 0);

    };
            
}


class cactus1 {
    constructor(game, x, y) {
        this.game = game;
        this.x = x;
        this.y = y;
        this.environment = ASSET_MANAGER.getAsset("./Sprites_and_Assets/MetalDesertEnvironment.png");
        this.BB = new BoundingBox(this.x + 8, this.y + 110, 47, 100);
        // this.x1 = 220;
        // this.y1 = 245;
        //this.updateBB();
    };

    update() {
    };


    draw(ctx) {
        ctx.strokestyle = "Red";
      //  ctx.strokeRect(this.BB.x, this.BB.y, this.BB.width, this.BB.height);
        ctx.drawImage(this.environment, 336, 160, 100, 210, this.x, this.y, 100, 210); //foreground cacti 1
    };
            
}

class cactus2 {
    constructor(game, x, y) {
        this.game = game;
        this.x = x;
        this.y = y;
        this.environment = ASSET_MANAGER.getAsset("./Sprites_and_Assets/MetalDesertEnvironment.png");
        this.BB = new BoundingBox(this.x + 6, this.y + 120, 62, 90);
        //this.BB = new BoundingBox(800, 245, 100, 210);
        // this.x1 = 600;
        // this.x2 = 800;
        // this.y1 = 245;
  //      this.updateBB();
    };


    update() {
    };


    draw(ctx) {
        ctx.strokestyle = "Red";
       // ctx.strokeRect(this.BB.x, this.BB.y, this.BB.width, this.BB.height);
        ctx.drawImage(this.environment, 430, 160, 100, 210, this.x, this.y, 100, 210); //foreground cacti 2
      //  ctx.drawImage(this.environment, 430, 160, 100, 210, 800, 245, 100, 210); //foreground cacti 2
      //  ctx.drawImage()
    };
            
}