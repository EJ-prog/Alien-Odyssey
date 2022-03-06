class lavafish {
    constructor(game, x, y){
        Object.assign(this, {game, x, y});
        this.animator = new Animator(ASSET_MANAGER.getAsset("./Sprites_and_Assets/lavafish.png"), 0, 0, 133, 400, 7, 0.14);
        this.speed = 120;
    };

    update(){
        this.x += this.speed*this.game.clockTick;
        if(this.x > 960) this.x=0;
    };

    draw(ctx){
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, 400);
    };
};