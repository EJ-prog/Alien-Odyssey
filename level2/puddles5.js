class puddles5 {
    constructor(game){
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./Sprites_and_Assets/puddles2.png"), -10, 0, 230, 58, 9, 0.4);
        this.x = 680;
        this.y = 410;
       // this.speed = 200;
    };

    update(){
        //this.x += this.speed * this.game.clockTick;
        //  if(this.x > 950){
        //      this.x = -200;
        //      this.y = 365;
        //  }
        //  if(this.x > 400)
        //      this.y += .95;
    };

    draw(ctx){
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };
}