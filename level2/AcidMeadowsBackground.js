class AcidMeadowsBackground {
    constructor(game){
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./Sprites_and_Assets/AcidMeadowsBackground.png"),  0, 0, 960, 576, 0, 100000);
    };

    update(){
    
    };

    draw(ctx){
        this.animator.drawFrame(this.game.clockTick, ctx, 0, 0);
    };
}

class LunarRockPiece2 {
    constructor(game, x, y) {
        this.game = game;
        this.x = x;
        this.y = y;
        this.environment = ASSET_MANAGER.getAsset("./Sprites_and_Assets/LunarRockPiece2.png");
        this.BB = new BoundingBox(this.x + 5, this.y, 34, 30);
        // this.x1 = 220;
        // this.y1 = 245;
        //this.updateBB();
    };

    update() {
    };


    draw(ctx) {
        ctx.strokestyle = "Red";
       ctx.strokeRect(this.BB.x, this.BB.y, this.BB.width, this.BB.height);
       //ctx.drawImage(this.environment, TOP LEFT CORNER, 160, 100, 210, this.x, this.y, 100, 210);
        ctx.drawImage(this.environment, 1, 1, 40, 30, this.x, this.y, 40, 30);
//        ctx.drawImage(this.spritesheet, 0, 0);

    };
            
}