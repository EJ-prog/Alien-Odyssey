class coin {
    constructor(game){
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./Sprites_and_Assets/coin.png"), 10, 0, 50, 65, 12, 0.062);
        //this.x = 600;
        //this.y = 365;
        //this.speed = 70;
    };

    update(){
        // this.x -= this.speed * this.game.clockTick;
        // if(this.x < 50){
        //     this.x = 600;
        //     this.y = 365;
        // }
        ///if(this.x > 400)
            //this.y += .95;
    };

    draw(ctx){
        this.animator.drawFrame(this.game.clockTick, ctx, 100, 200);
    };
}