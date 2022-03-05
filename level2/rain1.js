class rain1 {
    constructor(game){
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./Sprites_and_Assets/rain.png"), 40, 0, 314.5, 170, 9, 0.1);
        this.x = 110;
        this.y = 135;
        this.width = 260;
        this.height = 155;
        this.speed = 200;
        this.updateBB();
    };
    updateBB(){
        this.lastBB = this.BB;
        this.BB = new BoundingBox(this.x , this.y, this.width , this.height);
    };

    update(){
        const TICK = this.game.clockTick;

        this.x += this.speed * this.game.clockTick;
        this.y += this.speed * this.game.clockTick;
        var that = this;
         if(that.x > 950)
             that.x = -200;
             that.updateBB();
            // this.y = 365;
        // }
        if(that.y > 500)
            that.y = 135;
            that.updateBB();
    };

    draw(ctx){
        ctx.strokeRect(this.BB.x, this.BB.y, this.BB.width, this.BB.height);
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };
}