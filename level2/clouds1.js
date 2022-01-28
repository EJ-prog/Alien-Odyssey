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
}