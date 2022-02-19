class Alien{
    constructor(game, x, y) {
        Object.assign(this, {game, x, y});
        // this.game = game;
        this.spritesheet = ASSET_MANAGER.getAsset("./Sprites_and_Assets/character-sprites-player-alien-R.png");
        
        // this.animator = new Animator(this.spritesheet, 21, 397, 155, 207, 7, 0.2); //run and shoot arrow left & right combine space
        // this.animator = new Animator(this.spritesheet, 5, 607, 167, 210, 7, 0.2); //holster: after 30 secs of idle, & before jumping
        
        // this.x = 300; 
        // this.y = 263;
        this.speed = 120;
        //Alien state variablles.
        this.size = 0; //currently Alien has only one size so size is 0. It can be update later in progress.
        this.facing = 0; //0= right, 1=left.
        this.state = 0; //0= idle, 1= running, 2= jumping/falling, 3= ducking, 4=shooting.
        this.dead = false;

        //Alien's animations
        this.animator = [];
        this.loadAnimators();

        this.velocity = {x:0, y:0}
        this.fallAcc = 562.5;

        // this.laser = new Laser(this.game, this.x*1.40, this.y*1.5);
        // this.prevx = this.x*1.40;
        this.updateBB();

    };

    loadAnimators(){
        for( var i =0; i < 6; i++){ // six states(idle, running, ducking, jumping, shooting, dead)
            this.animator.push([]);
            for(var j = 0; j< 2; j++){ // could be update the condition when we update the size of Alien.
                this.animator[i].push([]);
            }
        }

        //State idle [0]
        //facing right=0
        this.animator[0][0]= new Animator(this.spritesheet, 640, 175, 98, 210, 1, 0.35, 14, false, true);
        //facing left =1
        this.animator[0][1]= new Animator(this.spritesheet, 640, 175, 98, 210, 1, 0.35, 14, true, true);
       
        //state running [1]
        //facing right=0
        this.animator[1][0] = new Animator(this.spritesheet, 4, 830, 120, 230, 6, 0.08, 6, true, true);
        //facing left =1
        this.animator[1][1] = new Animator(this.spritesheet, 4, 830, 120, 230, 6, 0.08, 14, false, true);

        //state ducking [2]
        //facing right=0
        this.animator[2][0] = new Animator(this.spritesheet, 735, 175, 98, 210, 1, 0.5, 14, false, true);
        //facing left =1
        this.animator[2][1] = new Animator(this.spritesheet, 735, 175, 98, 210, 1, 0.5, 14, true, true);

        //state jumping [3]
        //facing right=0
        this.animator[3][0] = new Animator(this.spritesheet, 21, 107, 148, 215, 4, 0.5, 14, false, true);
        //facing left =1
        this.animator[3][1] = new Animator(this.spritesheet, 21, 107, 148, 266, 4, 0.5, 14, true, true);

        //state standing and shooting [4]
        //facing right = 0
        this.animator[4][0] = new Animator(this.spritesheet, 850, 835, 150, 225, 2, 0.4, 14, false, true);
        //facing left = 1
        this.animator[4][1] = new Animator(this.spritesheet, 850, 835, 150, 225, 2, 0.4, 14, true, true);

        //state dead [5]
        //facing right = 0
        this.animator[5][0] = new Animator(this.spritesheet, 608, 0, 237, 175, 2, 0.6, 0, false, false);

        //facing left = 1
        this.animator[5][1] = new Animator(this.spritesheet, 608, 0, 237, 175, 2, 0.6, 0, true, false);

    }

    updateBB() {
        this.lastBB = this.BB;
        this.BB = new BoundingBox(this.x, this.y, 98, 200);
    };

    update() {
        
        const TICK = this.game.clockTick;
        //heavily get inspired by SUper Mario by Chris. We will need modify it later when we test the character.
        const MIN_RUN = 10;
        const MAX_RUN = 130;
        const ACC_RUN = 200;
        const DEC_REL = 182;
        const DEC_SKID = 365;
        const MIN_SKID = 33;

        const STOP_FALL = 1575;
        const RUN_FALL = 2025;
        const STOP_FALL_A = 450;
        const RUN_FALL_A = 563;

        const MAX_FALL = 270;

        if (this.dead) {
            this.velocity.y += RUN_FALL * TICK;
            this.y += this.velocity.y * TICK;
        } else {

            if (this.state < 5){ //five state(idle, running, ducking, jumping, shooting)
                
                if ((this.game.right && !this.game.left && !this.game.down && !this.game.down)) { //running to the right
                    this.state = 1;
                    this.facing = 0;
                    this.velocity.x += ACC_RUN * TICK;
                } else if (this.game.left && !this.game.right && !this.game.down && !this.game.down) { //running to the left
                    this.state = 1;
                    this.facing = 1;
                    this.velocity.x -= ACC_RUN * TICK;
                } else if ( this.game.down && !this.game.up && !this.game.right && !this.game.left) { //duck while facing left or right
                    this.state = 2;
                    this.velocity.x = 0;
                } else if ( this.game.space && !this.game.up && !this.game.down) { //jump while facing left or right
                    this.state = 3;
                    if (this.game.left && !this.game.right) { //jump to the left
                        this.velocity.x -= ACC_RUN * TICK;
                    }
                    if (this.game.right && !this.game.left) { //jump to the right
                        this.velocity.x += ACC_RUN * TICK;
                    }
                    // this.velocity.y -= 5;
                    // this.updateBB();
                } else if ( this.game.up && !this.game.down && !this.game.right && !this.game.left) { //shoot while facing left or right
                    this.state = 4;
                    this.velocity.x = 0;
                    // this.game.addEntity(new Laser(this.game, this.x*1.40, this.y*1.27));
                    // this.laser = new Laser(this.game, this.x*1.40, this.y*1.27);
                } else { //idle while facing left or right
                    this.velocity.x = 0;
                    this.state = 0; 
                }
            }

            // if (this.game.right && !this.game.left) {
            //     if (Math.abs(this.velocity.x) > MAX_WALK) {
            //         this.velocity.x += ACC_RUN * TICK;
            //     } else this.velocity.x += ACC_WALK * TICK;
            // } else if (this.game.left && !this.game.right) {
            //     if (Math.abs(this.velocity.x) > MAX_WALK) {
            //         this.velocity.x -= ACC_RUN * TICK;
            //     } else this.velocity.x -= ACC_WALK * TICK;
            // } else {
            //     // do nothing
            // }

            // if (this.y > 150) {
            //     this.velocity.y -= ACC_RUN * TICK;
            // } else {
            //     this.velocity.y += ACC_RUN * TICK;
            // }

            // update position
            this.x += this.velocity.x * TICK ;
            this.y += this.velocity.y * TICK ;
            // this.laser.update(this.y);
            this.updateBB();
            
        }

        var that = this;
        this.game.entities.forEach(function (entity) {
            if (entity.BB && that.BB.collide(entity.BB)) {
                if (entity instanceof Coin || entity instanceof LunarRockPieces) {
                    entity.removeFromWorld = true;
                } else if (entity instanceof Scorpion || entity instanceof Rock) {
                    that.dead = true;
                } else if (entity instanceof ForegroundCactus1 || entity instanceof ForegroundCactus2) {
                    that.velocity.x = 0;
                }
            }
        });
    };

    draw(ctx) {

        // this.animator[this.state][this.facing].drawFrame(this.game.clockTick, ctx, this.x, this.y);
        if (this.facing == 0) {
            ctx.save();
            ctx.scale(1, 1);
            if (this.dead){
                this.animator[5][this.facing].drawFrame(this.game.clockTick, ctx, this.x, this.y);
            } else if (this.state === 3) {
                this.animator[3][this.facing].drawFrame(this.game.clockTick, ctx, this.x, this.y - 20);
            } else {
                this.animator[this.state][this.facing].drawFrame(this.game.clockTick, ctx, this.x, this.y);
                // if (this.state === 4) {
                //     this.laser.draw(ctx, false);
                // }
            }
            ctx.restore();
        }
        if (this.facing == 1) {
            ctx.save();
            ctx.scale(-1, 1);
            if (this.dead){
                this.animator[5][this.facing].drawFrame(this.game.clockTick, ctx, -this.x, this.y);
            } else if (this.state === 3) {
                this.animator[3][this.facing].drawFrame(this.game.clockTick, ctx, -this.x, this.y - 20);
            } else {
                this.animator[this.state][this.facing].drawFrame(this.game.clockTick, ctx, -this.x , this.y);
                // if (this.state === 4) {
                //     this.laser.draw(ctx, true);
                // }
            }
            ctx.restore();
        }
        
        ctx.strokestyle = "Red";
        ctx.strokeRect(this.BB.x, this.BB.y, this.BB.width, this.BB.height);
    };
}