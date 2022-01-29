class ant {
    constructor(game){
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./Sprites_and_Assets/ant.png"), 0, 0, 170, 85, 4, 0.2);
        this.x = 600;
        this.y = 365;
        this.speed = 70;
    };

    update(){
        this.x -= this.speed * this.game.clockTick;
        if(this.x < 50){
            this.x = 600;
            this.y = 365;
        }
        ///if(this.x > 400)
            //this.y += .95;
    };

    draw(ctx){
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };
}