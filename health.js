class health {
    constructor(game){
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./Sprites_and_Assets/health.png"), 10, 0, 134, 25, 14, 0.13);

    };

    update(){
    };

    draw(ctx){
        this.animator.drawFrame(this.game.clockTick, ctx, 0, 20);
    };
}