class lavaDrop2{
    constructor(game){
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./Level3/lavaDrop.png"), 0, 0, 140, 190, 3, 0.25);
        this.x =800;
        this.y=230;
        this.width = 80;
        this.height = 170;
        this.speed = 160;
        this.updateBB();
    };

    updateBB(){ 
        this.lastBB = this.BB;
        this.BB = new BoundingBox(this.x, this.y, this.width  , this.height);
    };

    update(){
        const TICK = this.game.clockTick;
        var that = this;
        this.y += this.speed*this.game.clockTick;
        if(this.y > 576) 
            this.y=0;
            that.updateBB();
    };

    draw(ctx){
        ctx.strokeRect(this.BB.x, this.BB.y, this.BB.width, this.BB.height);
        this.animator.drawFrame(this.game.clockTick, ctx, 250, this.y + 50);
        
    };
};