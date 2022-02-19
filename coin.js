class Coin {
    constructor(game, x, y){
        
        this.game = game;
        this.x = x;
        this.y = y;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./Sprites_and_Assets/coin.png"), 10, 0, 50, 65, 12, 0.062);
        this.BB = new BoundingBox(this.x, this.y, 50, 65);
        //this.x = 600;
        //this.y = 365;
        //this.speed = 70;
    };

    update() {
        
    };

    //remember to add to all parts of environment that need a BB
    updateBB() {
        this.BB = new BoundingBox(this.x, this.y, PARAMS.BLOCKWIDTH, (1 + 7/16) * PARAMS.BLOCKWIDTH);
    };

    draw(ctx){
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };
}