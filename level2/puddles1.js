class puddles1 {
    constructor(game){
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./Sprites_and_Assets/puddles1.png"), 0, 0, 182, 58, 9, 0.3);
        this.x = 10;
        this.y = 300;
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