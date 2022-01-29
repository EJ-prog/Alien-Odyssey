class puddles3 {
    constructor(game){
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./Sprites_and_Assets/puddles3.png"), 0, 0, 200, 56, 9, 0.45);
        this.x = 300;
        this.y = 410;
       // this.speed = 200;
    };

    update(){
    };

    draw(ctx){
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };
}