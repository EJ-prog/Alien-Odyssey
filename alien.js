class Alien{
    constructor(game, x, y) {
        Object.assign(this, {game, x, y});
        // this.game = game;
        this.spritesheet = ASSET_MANAGER.getAsset("./Sprites_and_Assets/character-sprites-player-alien-R.png");
        
        this.game.alien = this;
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
        this.win = false;
        this.rainSafe = true;
        this.hitpoints = 12;

        //Alien's animations
        this.animator = [];
        this.loadAnimators();

        this.velocity = {x:0, y:0}
        this.fallAcc = 562.5;

        this.laser = new Laser(this.game, this.x*1.40, this.y*1.2);
        this.healthbar = new Health(this.game);
        this.ammobar = new Ammo(this.game);
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
        this.animator[0][0]= new Animator(this.spritesheet, 640, 175, 98, 210, 1, 0.35);
        //facing left =1
        this.animator[0][1]= new Animator(this.spritesheet, 640, 175, 98, 210, 1, 0.35);
       
        //state running [1]
        //facing right=0
        this.animator[1][0] = new Animator(this.spritesheet, 4, 830, 120, 230, 6, 0.08);
        //facing left =1
        this.animator[1][1] = new Animator(this.spritesheet, 4, 830, 120, 230, 6, 0.08);

        //state ducking [2]
        //facing right=0
        this.animator[2][0] = new Animator(this.spritesheet, 735, 175, 98, 210, 1, 0.5);
        //facing left =1
        this.animator[2][1] = new Animator(this.spritesheet, 735, 175, 98, 210, 1, 0.5);

        //state jumping [3]
        //facing right=0
        this.animator[3][0] = new Animator(this.spritesheet, 21, 107, 148, 215, 4, 0.2);
        //facing left =1
        this.animator[3][1] = new Animator(this.spritesheet, 21, 107, 148, 215, 4, 0.2);

        //state standing and shooting [4]
        //facing right = 0
        this.animator[4][0] = new Animator(this.spritesheet, 850, 835, 150, 225, 2, 0.4);
        //facing left = 1
        this.animator[4][1] = new Animator(this.spritesheet, 850, 835, 150, 225, 2, 0.4);

        //state dead [5]
        //facing right = 0
        this.animator[5][0] = new Animator(this.spritesheet, 608, 0, 237, 175, 2, 0.6);

        //facing left = 1
        this.animator[5][1] = new Animator(this.spritesheet, 608, 0, 237, 175, 2, 0.6);

    }

    updateBB() {
        this.lastBB = this.BB;
        this.BB = new BoundingBox(this.x - this.game.camera.x, this.y, 85, 200);
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
                
                if ((this.game.right && !this.game.left && !this.game.down && !this.game.down && !this.game.space)) { //running to the right
                    this.state = 1;
                    this.facing = 0;
                    this.velocity.x += ACC_RUN * TICK;
                } else if (this.game.left && !this.game.right && !this.game.down && !this.game.space) { //running to the left
                    this.state = 1;
                    this.facing = 1;
                    this.velocity.x -= ACC_RUN * TICK;
                } else if ( this.game.down && !this.game.space && !this.game.right && !this.game.left) { //duck while facing left or right
                    this.state = 2;
                    this.velocity.x = 0;
                } else if ( this.game.up && !this.game.space && !this.game.down) { //jump while facing left or right
                    if (this.game.left && !this.game.right) { //jump and move to the left
                        this.velocity.x -= ACC_RUN * TICK;
                    } else if (this.game.right && !this.game.left) { //jump and move to the right
                        this.velocity.x += ACC_RUN * TICK;
                    }
                    this.state = 3;
                    // }
                    // this.velocity.y -= 5;
                    // this.updateBB();
                } else if ( this.game.space && !this.game.down && !this.game.right && !this.game.left && !this.game.up) { //shoot while facing left or right
                    this.state = 4;
                    this.velocity.x = 0;
                } else { //idle while facing left or right
                    this.velocity.x = 0;
                    this.state = 0;
                }
            }

            // update position
            this.x += this.velocity.x * TICK;
            this.y += this.velocity.y * TICK;
            this.laser.update();
            this.updateBB();
            
        }

        var that = this;
        this.game.entities.forEach(function (entity) {
            if (entity.BB && that.BB.collide(entity.BB)) {
                if (entity instanceof LunarRockPieces) {
                    // entity.removeFromWorld = true;
                    //YOU WIN!!!
                    // that.win = true;
                    if (entity.level === 1) {
                        that.game.camera.loadLevel2(acidMeadows, 0, 273);
                    } else if (entity.level === 2) {
                        that.game.camera.loadLevel2(lavaLand, -10, 210);
                    } else if (entity.level === 3) {
                        that.game.camera.loadLevel2(monsterForest, 0, 273);
                    } else if (entity.level === 4) {
                        that.win = true;
                    }
                }
                if (entity instanceof Coin) {
                    entity.removeFromWorld = true;
                } else if (entity instanceof Scorpion || entity instanceof Rock || entity instanceof Ant || entity instanceof Monster || that.y >= 575) { //add ant and rain to here
                    that.dead = true;
                } else if (entity instanceof Mushroom1 || entity instanceof Mushroom2) {
                    if (that.lastBB.left >= entity.BB.x && that.lastBB.right <= (entity.BB.width + entity.BB.x)) {
                        that.rainSafe = true;
                    } else {
                        that.rainSafe = false;
                    }
                } else if (entity instanceof Rain1 && !that.rainSafe) {
                    that.dead = true;
                } else if (entity instanceof ForegroundCactus1 || entity instanceof ForegroundCactus2) {
                    if (!that.game.up) {
                        if (that.lastBB.bottom >= entity.BB.top) {
                            that.velocity.y = 0;
                        }
                        if ((that.lastBB.left >= entity.BB.right || that.lastBB.right >= entity.BB.left)) {
                            that.velocity.x = 0;
                        }
                        // if (that.lastBB.left >= entity.BB.right) {
                        //     that.velocity.x = 0;
                        // }
                        if ((that.game.left || that.game.right) 
                            && that.lastBB.right >= entity.BB.right 
                            && that.lastBB.bottom <= entity.BB.bottom) {
                            that.velocity.y = 100;
                        }
                    } else{
                        that.velocity.y = -100;
                    }
                } else if (entity instanceof MetalDesertPath ||
                     entity instanceof AcidMeadowsPath ||
                      entity instanceof MonsterForestPath) {
                    if (that.game.up) {
                        that.velocity.y = -100;
                    }
                } else if (entity instanceof LavaLandHorizontal) {
                    if (that.game.up && that.lastBB.bottom <= entity.BB.top + 40) {
                        that.velocity.y = -100;
                    } else {
                        that.velocity.y = 0;
                    }
                } else if (entity instanceof LavaLandVertical) {
                    if (that.game.up && that.lastBB.bottom <= entity.BB.top + 20) {
                        that.velocity.y = -100;
                    } else {
                        that.velocity.y = 0;
                    } 
                } else if (entity instanceof LavaLandSquare) {
                    if (that.game.up && that.lastBB.bottom <= entity.BB.top + 40) {
                        that.velocity.y = -100;
                    } else {
                        that.velocity.y = 0;
                    }
                } else if (entity instanceof StepMedium) {
                    if (that.game.up && !entity.crumble && that.lastBB.bottom <= entity.BB.top + 40) {
                        that.velocity.y = -100;
                    } else if (that.game.up && entity.crumble && that.lastBB.bottom <= entity.BB.top + 40) {
                        that.velocity.y = -50;
                    } else if (!that.game.up && entity.crumble) {
                        that.velocity.y = 100;
                    } else {
                        that.velocity.y = 0;
                    }
                } else if (entity instanceof MetalDesertGround || 
                    entity instanceof AcidMeadowsGround || 
                    entity instanceof MonsterForestGround) {
                    if (!that.game.up) {
                        that.velocity.y = 0;
                    }
                } else {
                    if (!that.game.up & that.velocity.y < 0) {
                        that.velocity.y = 100;
                    }
                }
            }
        });
        if (this.game.space) {
            if (this.facing === 0) {
                this.game.addEntity(new Laser(this.game, this.x + 125, this.y + 70, this.facing));
            } else if (this.facing === 1) {
                this.game.addEntity(new Laser(this.game, this.x - 75, this.y + 70, this.facing));
            }
        }
        
    };

    draw(ctx) {

        // this.animator[this.state][this.facing].drawFrame(this.game.clockTick, ctx, this.x, this.y);
        if (this.facing == 0) {
            ctx.save();
            ctx.scale(1, 1);
            if (this.dead) {
                this.healthbar.draw(ctx, 0);
                this.ammobar.draw(ctx, 0);
                ctx.font = "bold 50px Verdana";
                ctx.fillText("YOU LOSE!", 50, 500);
                ctx.font = "20px Verdana";
                ctx.fillText("Refresh to play again.", 60, 550);
                // ctx.fillText("Go to menu?", 210, 550);
                this.animator[5][this.facing].drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y);
                const context = canvas.getContext('2d');
                context.clearRect(0, 0, canvas.width, canvas.height);
            } else if (this.state === 3) {
                this.animator[3][this.facing].drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y - 20);
                // var frame = this.animator[3][this.facing].currentFrame();
            } else {
                this.animator[this.state][this.facing].drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y);
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
                ctx.font = "bold 50px Verdana";
                ctx.fillText("YOU LOSE!", 50, 500);
                ctx.font = "20px Verdana";
                ctx.fillText("Refresh to play again.", 60, 550);
                // ctx.fillText("Go to menu?", 210, 550);
                this.animator[5][this.facing].drawFrame(this.game.clockTick, ctx, -this.x + this.game.camera.x, this.y);
                const context = canvas.getContext('2d');
                context.clearRect(0, 0, canvas.width, canvas.height);
            } else if (this.state === 3) {
                this.animator[3][this.facing].drawFrame(this.game.clockTick, ctx, -this.x - 85 + this.game.camera.x, this.y - 20);
            } else {
                this.animator[this.state][this.facing].drawFrame(this.game.clockTick, ctx, -this.x - 85 + this.game.camera.x, this.y);
                // if (this.state === 4) {
                //     this.laser.draw(ctx, true);
                // }
            }
            ctx.restore();
        }

        this.healthbar.draw(ctx, 14);
        this.ammobar.draw(ctx, 14);
                
        if (this.win) {
            var width = 176;
            var height = 88;
            ctx.draw();
            ctx.font = "bold 50px Verdana";
            ctx.fillText("You Win!", 50, 500);
            // ctx.font = "50px Georgia";
            // ctx.fillText("Hello World!", 10, 50); 
            // Create gradient
            var gradient = ctx.createLinearGradient(0, 0, 1000, 0);
            gradient.addColorStop("0", "yellow");
            gradient.addColorStop("0.5", "pink");
            gradient.addColorStop("1.0", "white");
            // Fill with gradient
            ctx.fillStyle = gradient;
            ctx.fillText("Alien can make their wish!", 50, 550);
            ctx.font = "20px Verdana";
            ctx.fillText("Refresh to play again.", 53, 570);
            // ctx.fillText("Go to menu?", 673, 570);
            const context = canvas.getContext('2d');
            context.clearRect(0, 0, canvas.width, canvas.height);
        }
        // ctx.strokestyle = "Red";
        // ctx.strokeRect(this.BB.x, this.BB.y, this.BB.width, this.BB.height);
        if (this.dead) {
            this.removeFromWorld = true;
        }
    };
}
