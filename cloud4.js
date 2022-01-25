class cloud4 {
    constructor(game){
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./Sprites_and_Assets/cloud4.png"),  0, 0, 255, 120, 0, 100000);
    };

    update(){
    
    };

    draw(ctx){
        this.animator.drawFrame(this.game.clockTick, ctx, 340, 50);
    };
}