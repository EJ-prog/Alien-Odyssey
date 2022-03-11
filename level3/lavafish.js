class lavafish{
    constructor(game){
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./Sprites_and_Assets/lavafish.png"), 0, 0, 133, 400, 7, 1); //.14
        this.x = 0;
        this.y = 500;
        this.width = 150;
        this.height = 50;
        this.speed = 120;
        this.updateBB();
    };

    updateBB(){
        this.lastBB = this.BB;
        if(this.animator.currentFrame() === 0)
            this.BB = new BoundingBox(this.x + 5, this.y - 23, this.width - 20, this.height + 11);
        else if(this.animator.currentFrame() === 1)
            this.BB = new BoundingBox(this.x + 5, this.y - 45, this.width - 20, this.height);
        else if(this.animator.currentFrame() === 2)
            this.BB = new BoundingBox(this.x + 5, this.y - 28, this.width - 20, this.height + 11);
        else if(this.animator.currentFrame() === 3)
            this.BB = new BoundingBox(this.x + 5, this.y + 15, this.width - 20, this.height + 11);
        else if(this.animator.currentFrame() === 4)
            this.BB = new BoundingBox(this.x + 5, this.y + 55, this.width - 20, this.height);
        else if(this.animator.currentFrame() === 5)
            this.BB = new BoundingBox(this.x + 5, this.y + 35, this.width - 20, this.height + 11);
        else{
            this.BB = new BoundingBox(this.x + 5, this.y, this.width - 20, this.height + 11);
        }
    };


    update(){
        this.x += this.speed*this.game.clockTick;

        var that = this;
        if(this.x > 960) {
            that.x=0;
            that.updateBB();
        }
        that.updateBB();

    };

    draw(ctx){

        // if(this.x % 50 == 0){
        //     ctx.strokeRect(this.BB.x, this.BB.y - 50, this.BB.width, this.BB.height);
        // }
        // else{
        //     ctx.strokeRect(this.BB.x, this.BB.y + 50, this.BB.width, this.BB.height);
        // }

        // for(let i = 0; i < 3; i++){
        //     if(i == 0)
        //         ctx.strokeRect(this.BB.x, this.BB.y - 50, this.BB.width, this.BB.height);
        //     else if(i == 1)
        //         ctx.strokeRect(this.BB.x, this.BB.y + 50, this.BB.width, this.BB.height);

    
        // if(this.x > 0 && this.x < 50){
        //     ctx.strokeRect(this.BB.x, this.BB.y - 50, this.BB.width, this.BB.height);
        // }
        //else{
        ctx.strokeRect(this.BB.x, this.BB.y, this.BB.width, this.BB.height);
        //}
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, 400);
    };
};