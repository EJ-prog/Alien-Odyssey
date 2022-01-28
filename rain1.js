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
}