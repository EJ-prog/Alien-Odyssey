class cloud8 {
    constructor(game){
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./Sprites_and_Assets/cloud8.png"),  0, 0, 140, 94, 0, 100000);
    };

    update(){
    
    };

    draw(ctx){
        this.animator.drawFrame(this.game.clockTick, ctx, 0, 50);
    };
}