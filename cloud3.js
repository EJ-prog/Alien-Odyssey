class cloud3 {
    constructor(game){
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./Sprites_and_Assets/cloud3.png"),  0, 0, 175, 91, 0, 100000);
    };

    update(){
    
    };

    draw(ctx){
        this.animator.drawFrame(this.game.clockTick, ctx, 250, 110);
    };
}