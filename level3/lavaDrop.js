class lavaDrop{
    constructor(game, x, y){
        Object.assign(game, x, y);

        this.animator = new Animator(ASSET_MANAGER.getAsset("./lavaDrop.png"), 0, 0, 140, 190, 3, 0.25);
        this.speed = 160;
    };

    update(){
        this.y += this.speed*this.game.clockTick;
        if(this.y > 576) this.y=0;
    };

    draw(ctx){
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
        
    };
};