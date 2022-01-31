class alien{
    constructor(game) {
        this.game = game;
        this.spritesheet = ASSET_MANAGER.getAsset("./Sprites_and_Assets/character-sprites-player-alien-R.png");
        
        // this.animator = new Animator(this.spritesheet, 640, 175, 98, 210, 2, 0.5); //duck
        // this.animator = new Animator(this.spritesheet, 4, 810, 120, 225, 6, 0.2); //run arrow Left & right
        // this.animator = new Animator(this.spritesheet, 21, 107, 148, 266, 4, 0.5); //jump arrow up
        // this.animator = new Animator(this.spritesheet, 608, 0, 237, 175, 2, 0.6); //death
        // this.animator = new Animator(this.spritesheet, 850, 810, 151, 225, 2, 0.4); //stand and shoot space

        // this.animator = new Animator(this.spritesheet, 21, 397, 155, 207, 7, 0.2); //run and shoot arrow left & right combine space
        // this.animator = new Animator(this.spritesheet, 5, 607, 167, 210, 7, 0.2); //holster: after 30 secs of idle, & before jumping
        
        this.x = 300;
        this.y = 0;
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

        

    };

    loadAnimators(){
        for( var i =0; i < 5; i++){ // five state(idle, running, ducking, jumping, shooting)
            this.animator.push([]);
            for(var j = 0; j< 2; j++){ // could be update the condition when we update the size of Alien.
                this.animator[i].push([]);
                // for(var k = 0; k< 2; k++){ //two direction Left and Right.
                //     this.animations[i][j].push([]);
                // }
            }
        }
        
        //State idle [0]
        //facing right=0
        this.animator[0][0]= new Animator(this.spritesheet, 425, 176, 167,210,1,0.5,14, false, true);
        //facing left =1
        this.animator[0][1]= new Animator(this.spritesheet, 425, 176, 167,210,1,0.5,14, true, true);
        //state running [1]
        //facing right=0
        this.animator[1][0] = new Animator(this.spritesheet, 4, 810, 120, 225, 6, 0.2, 14, false, true);
        //facing left =1
        this.animator[1][1] = new Animator(this.spritesheet, 4, 810, 120, 225, 6, 0.2, 14, true, true);

        //state jumping [2]
        //facing right=0
        this.animator[2][0] = new Animator(this.spritesheet, 21, 107, 148, 266, 4, 0.5, 14, false, true);
        //facing left =1
        this.animator[2][1] = new Animator(this.spritesheet, 21, 107, 148, 266, 4, 0.5, 14, true, true);

        //state ducking [3]
        //facing right=0
        this.animator[3][0] = new Animator(this.spritesheet, 640, 175, 98, 210, 2, 0.5, 14, false, true);
        //facing left =1
        this.animator[3][1] = new Animator(this.spritesheet, 640, 175, 98, 210, 2, 0.5, 14, true, true);

        //state standing and shooting [4]
        //facing right = 0
        this.animator[4][0] = new Animator(this.spritesheet, 850, 810, 151, 225, 2, 0.4, 14, false, true);
        //facing left = 1
        this.animator[4][1] = new Animator(this.spritesheet, 850, 810, 151, 225, 2, 0.4, 14, true, true);

        this.deadAnim = new Animator(this.spritesheet, 608, 0, 237, 175, 2, 0.6, 0, false, true); 
    }

    update() {
        // if(this.y < 500) {
        //     this.y += this.speed*this.game.clockTick;
        // } else if (this.x < 1024) {
        //     this.x += this.speed*this.game.clockTick;
        // } else {
        //     this.x = 0;
        //     this.y = 0;
        // }
        const TICK = this.game.clockTick;
        //heavily get inspired by SUper Mario by Chris. We will need modify it later when we test the character.
        const MIN_RUN = 5;
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

            if (this.state < 4){ //five state(idle, running, ducking, jumping, shooting)
                if (Math.abs(this.velocity.x) < MIN_RUN){ //slower than run swicth the state to idle.
                    this.velocity.x =0;
                    this.state = 0;
                    if (this.game.left){
                        this.velocity.x -=  MIN_RUN;
                    }
                    if (this.game.right){
                        this.velocity.x += MIN_RUN;
                    }

                }
            }
            
        }

        // update position
        this.x += this.velocity.x * TICK ;
        this.y += this.velocity.y * TICK ;
    };

    draw(ctx) {

        this.animator[this.state][this.facing].drawFrame(this.game.clockTick, ctx, this.x, this.y);
        if (this.dead){
            this.deadAnim.drawFrame(this.game.clockTick, ctx, this.x , this.y)
        } else {
            this.animator[this.state][this.facing].drawFrame(this.game.clockTick, ctx, this.x , this.y);
        }
    };
}