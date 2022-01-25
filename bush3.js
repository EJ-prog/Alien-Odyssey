class bush3 {
    constructor(game){
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./Sprites_and_Assets/bush3.png"),  0, 0, 333, 85, 0, 100000);
    };

    update(){
    
    };

    draw(ctx){
        this.animator.drawFrame(this.game.clockTick, ctx, 750, 357);
    };
}