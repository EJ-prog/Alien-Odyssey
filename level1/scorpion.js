class Scorpion {
    constructor(game, x, y) {
        Object.assign(this, {game, x, y});
        this.spritesheet = ASSET_MANAGER.getAsset("./Sprites_and_Assets/Scorpion.png");
        this.animator = new Animator(this.spritesheet, 0, 0, 170, 100, 4, 0.6, 0, false, true);
        // this.x = 300;
        // this.y = 365;
        this.width = 170;
        this.height = 100;
        this.reverse = false;
       // this.BB = new BoundingBox(300, 365, 170, 100);
        this.speed = 50;
        this.updateBB();
    };

    updateBB(){
            this.lastBB = this.BB;
            this.BB = new BoundingBox(this.x + 5, this.y, this.width - 20, this.height);
    };

    update() {
        const TICK = this.game.clockTick;
        

        if(this.x < 480) {
            this.x += this.speed*this.game.clockTick;
        }
       
        var that = this;
        this.game.entities.forEach(function (entity) {
            if (entity.BB && that.BB.collide(entity.BB)) {
                if ((entity instanceof ForegroundCactus2) || (entity instanceof ForegroundCactus1)){ 
                    that.speed = - that.speed;
                    if(that.reverse == true){
                        that.reverse = false;
                    }
                    else{
                        that.reverse = true;
                    }
                }
               that.updateBB();
            } 
         that.updateBB();
        });

    };

    /*drawMinimap(ctx, mmX, mmY) {
        ctx.fillStyle = "Red";
        ctx.fillRect(mmX + this.x / PARAMS.BITWIDTH, mmY + this.y / PARAMS.BITWIDTH, PARAMS.SCALE, PARAMS.SCALE * Math.min(this.size + 1, 2));
    }*/

    draw(ctx) {
            // ctx.strokestyle = "Red";
            // ctx.strokeRect(this.BB.x, this.BB.y, this.BB.width, this.BB.height);
            // this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);

        if(this.reverse){
            ctx.strokestyle = "Red";
           // ctx.strokeRect(this.BB.x, this.BB.y, this.BB.width, this.BB.height);
            ctx.save();
            ctx.scale(-1,1)
            this.animator.drawFrame(this.game.clockTick, ctx, -this.x - (this.width) + 10, this.y);
            ctx.restore();
        }
        
        else{
            ctx.strokestyle = "Red";
          //  ctx.strokeRect(this.BB.x, this.BB.y, this.BB.width, this.BB.height);
            ctx.save();
            ctx.scale(1,1)
            this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
            ctx.restore();
        }
    };
}