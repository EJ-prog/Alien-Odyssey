class AcidMeadowsBackground {
    constructor(game){
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./Sprites_and_Assets/AcidMeadowsBackground.png"),  0, 0, 960, 576, 0, 100000);
    };

    update(){
    
    };

    draw(ctx){
        this.animator.drawFrame(this.game.clockTick, ctx, 0, 0);
    };
};

class ant {
    constructor(game){
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./Sprites_and_Assets/ant.png"), 0, 0, 170, 85, 4, 0.2);
        this.x = 600;
        this.y = 365;
        this.speed = 70;
    };

    update(){
        this.x -= this.speed * this.game.clockTick;
        if(this.x < 50){
            this.x = 600;
            this.y = 365;
        }
        ///if(this.x > 400)
            //this.y += .95;
    };

    draw(ctx){
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };
};

class clouds1 {
    constructor(game){
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./Sprites_and_Assets/clouds1.png"), 50, 0, 310, 150, 9, 0.2);
        this.x = 100;
        this.y = 35;
        this.speed = 200;
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

class clouds2 {
    constructor(game){
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./Sprites_and_Assets/clouds2.png"), 40, 0, 312.5, 150, 9, 0.2);
        this.x = -100;
        this.y = 35;
        this.speed = 100;
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

class mushroom1 {
    constructor(game){
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./Sprites_and_Assets/mushroom1.png"),  0, 0, 960, 576, 0, 100000);
    };

    update(){
    
    };

    draw(ctx){
        this.animator.drawFrame(this.game.clockTick, ctx, 400, 165);
    };
};

class mushroom2 {
    constructor(game){
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./Sprites_and_Assets/mushroom2.png"),  0, 0, 960, 576, 0, 100000);
    };

    update(){
    
    };

    draw(ctx){
        this.animator.drawFrame(this.game.clockTick, ctx, 650, 225);
    };
};

class path {
    constructor(game){
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./Sprites_and_Assets/path.png"),  0, 0, 960, 576, 0, 100000);
    };

    update(){
    
    };

    draw(ctx){
        this.animator.drawFrame(this.game.clockTick, ctx, 0, 443);
    };
};

class planets {
    constructor(game){
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./Sprites_and_Assets/planets.png"),  0, 0, 960, 576, 0, 100000);
    };

    update(){
    
    };

    draw(ctx){
        this.animator.drawFrame(this.game.clockTick, ctx, 700, 15);
    };
};

class puddles1 {
    constructor(game){
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./Sprites_and_Assets/puddles1.png"), 0, 0, 182, 58, 9, 0.3);
        this.x = 10;
        this.y = 300;
       // this.speed = 200;
    };

    update(){
        //this.x += this.speed * this.game.clockTick;
        //  if(this.x > 950){
        //      this.x = -200;
        //      this.y = 365;
        //  }
        //  if(this.x > 400)
        //      this.y += .95;
    };

    draw(ctx){
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };
};

class puddles2 {
    constructor(game){
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./Sprites_and_Assets/puddles2.png"), -10, 0, 230, 58, 9, 0.3);
        this.x = 300;
        this.y = 350;
       // this.speed = 200;
    };

    update(){
        //this.x += this.speed * this.game.clockTick;
        //  if(this.x > 950){
        //      this.x = -200;
        //      this.y = 365;
        //  }
        //  if(this.x > 400)
        //      this.y += .95;
    };

    draw(ctx){
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };
}

class puddles3 {
    constructor(game){
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./Sprites_and_Assets/puddles3.png"), 0, 0, 200, 56, 9, 0.45);
        this.x = 300;
        this.y = 410;
       // this.speed = 200;
    };

    update(){
    };

    draw(ctx){
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };
}

class puddles4 {
    constructor(game){
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./Sprites_and_Assets/puddles4.png"), 10, 0, 170, 58, 9, 0.3);
        this.x = 50;
        this.y = 417;
       // this.speed = 200;
    };

    update(){
        //this.x += this.speed * this.game.clockTick;
        //  if(this.x > 950){
        //      this.x = -200;
        //      this.y = 365;
        //  }
        //  if(this.x > 400)
        //      this.y += .95;
    };

    draw(ctx){
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };
};

class puddles5 {
    constructor(game){
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./Sprites_and_Assets/puddles2.png"), -10, 0, 230, 58, 9, 0.4);
        this.x = 680;
        this.y = 410;
       // this.speed = 200;
    };

    update(){
        //this.x += this.speed * this.game.clockTick;
        //  if(this.x > 950){
        //      this.x = -200;
        //      this.y = 365;
        //  }
        //  if(this.x > 400)
        //      this.y += .95;
    };

    draw(ctx){
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };
};

class rain1 {
    constructor(game){
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./Sprites_and_Assets/rain.png"), 40, 0, 314.5, 170, 9, 0.1);
        this.x = 100;
        this.y = 135;
        this.speed = 200;
    };

    update(){
        this.x += this.speed * this.game.clockTick;
        this.y += this.speed * this.game.clockTick;
         if(this.x > 950)
             this.x = -200;
            // this.y = 365;
        // }
        if(this.y > 500)
            this.y = 135;
    };

    draw(ctx){
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };
};
