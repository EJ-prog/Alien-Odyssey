class cloud5 {
    constructor(game){
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./Sprites_and_Assets/cloud5.png"),  0, 0, 191, 120, 0, 100000);
    };

    update(){
    
    };

    draw(ctx){
        this.animator.drawFrame(this.game.clockTick, ctx, 450, 100);
    };
}