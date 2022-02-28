class ant {
    constructor(game){
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./Sprites_and_Assets/ant.png"), 0, 0, 170, 85, 4, 0.2);
        this.x = 400;
        this.y = 365;
        this.width = 170;
        this.height = 100;
        this.speed = 70;
        this.updateBB();
        this.reverse = false;
        //this.BB = new BoundingBox(this.x + 5, this.y, 170, 85);
    };


    updateBB(){
        this.lastBB = this.BB;
        this.BB = new BoundingBox(this.x + 5, this.y, this.width - 20, this.height);
    };

    update() {
        const TICK = this.game.clockTick;

        //if(this.x < 480) {
            this.x -= this.speed * this.game.clockTick;
        //}
       
        var that = this;
        if(that.x < 100) {
            that.reverse = true;
            that.speed = - that.speed;
            that.updateBB();
        }
        else if(that.x > 400) {
            that.reverse = false;
            that.speed = - that.speed;
            that.updateBB();
         }
         that.updateBB();

        // this.game.entities.forEach(function (entity) {
        //     if (entity.BB && that.BB.collide(entity.BB)) {
        //         if ((entity instanceof) || (entity instanceof cactus1)){ 
        //             that.speed = - that.speed;
        //             if(that.reverse == true){
        //                 that.reverse = false;
        //             }
        //             else{
        //                 that.reverse = true;
        //             }
        //         }
        //        that.updateBB();
        //     } 
        //  that.updateBB();
        // });

    };

    /*drawMinimap(ctx, mmX, mmY) {
        ctx.fillStyle = "Red";
        ctx.fillRect(mmX + this.x / PARAMS.BITWIDTH, mmY + this.y / PARAMS.BITWIDTH, PARAMS.SCALE, PARAMS.SCALE * Math.min(this.size + 1, 2));
    }*/

    draw(ctx) {
            // ctx.strokestyle = "Red";
             ctx.strokeRect(this.BB.x, this.BB.y, this.BB.width, this.BB.height);
            // this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);

        if(this.reverse){
            ctx.strokestyle = "Red";
            ctx.strokeRect(this.BB.x, this.BB.y, this.BB.width, this.BB.height);
            ctx.save();
            ctx.scale(-1,1)
            this.animator.drawFrame(this.game.clockTick, ctx, -this.x - (this.width) + 10, this.y);
            ctx.restore();
        }
        
        else{
            ctx.strokestyle = "Red";
            ctx.strokeRect(this.BB.x, this.BB.y, this.BB.width, this.BB.height);
            ctx.save();
            ctx.scale(1,1)
            this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
            ctx.restore();
        }
    };
}
