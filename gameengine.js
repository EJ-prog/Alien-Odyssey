// This game shell was happily modified from Googler Seth Ladd's "Bad Aliens" game and his Google IO talk in 2011

class GameEngine {
    constructor(options) {
        // What you will use to draw
        // Documentation: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
        // Everything that will be updated and drawn each frame
        this.entities = [];
        this.ctx = null;

        this.surfaceWidth = null;
        this.surfaceHeight = null;

        // Information on the input
        // Information on the input
        // this.click = null;
        // this.mouse = null;
        // this.wheel = null;
        // this.keys = {};

        this.left = false;
        this.right = false;
        this.up = false;
        this.down = false;
        this.space = false;

        // this.dead = null;

        this.running = false;

        // Options and the Details
        this.options = options || {
            debugging: false,
        };
    };

    init(ctx) {
        this.ctx = ctx;
        this.startInput();
        this.timer = new Timer();
    };

    start() {
        this.running = true;
        const gameLoop = () => {
            this.loop();
            requestAnimFrame(gameLoop, this.ctx.canvas);
        };
        gameLoop();
    };

    startInput() {
        var that = this;
        var getXandY = function (e) {
            var x = e.clientX - that.ctx.canvas.getBoundingClientRect().left;
            var y = e.clientY - that.ctx.canvas.getBoundingClientRect().top;

            return { x: x, y: y, radius: 0 };
        }
        
        this.ctx.canvas.addEventListener("keydown", function(e){
            switch (e.code) {
                case "ArrowLeft":
                    that.left= true;
                    break;
                case "ArrowRight":
                    that.right = true;
                    break;
                case "ArrowUp":
                    that.up = true;
                    break;
                case "ArrowDown":
                    that.down = true;
                    break;
                case "Space" :
                    that.space = true;
                    break               
            }
        }, false);

        this.ctx.canvas.addEventListener("keyup", function(e) {
            switch (e.code) {
                case "ArrowLeft":
                    that.left = false;
                case "ArrowRight":
                    that.right = false;
                    break;
                case "ArrowUp":
                    that.up = false;
                    break;
                case "ArrowDown":
                    that.down = false;
                    break;
                case "Space" :
                    that.space = false;
                    break
            }
        }, false);

        // this.ctx.canvas.addEventListener("mousemove", e => {
        //     if (this.options.debugging) {
        //         console.log("MOUSE_MOVE", getXandY(e));
        //     }
        //     this.mouse = getXandY(e);
        // });

        this.ctx.canvas.addEventListener("click", e => {
            if (this.options.debugging) {
                console.log("CLICK", getXandY(e));
            }
            this.click = getXandY(e);
        });

        // mouse down and mouse up?

        // this.ctx.canvas.addEventListener("wheel", e => {
        //     if (this.options.debugging) {
        //         console.log("WHEEL", getXandY(e), e.wheelDelta);
        //     }
        //     e.preventDefault(); // Prevent Scrolling
        //     this.wheel = e;
        // });

        // this.ctx.canvas.addEventListener("contextmenu", e => {
        //     if (this.options.debugging) {
        //         console.log("RIGHT_CLICK", getXandY(e));
        //     }
        //     e.preventDefault(); // Prevent Context Menu
        //     this.rightclick = getXandY(e);
        // });
        
     };

     addEntity(entity) {
         this.entities.push(entity);
     };
 
     draw() {
         // Clear the whole canvas with transparent color (rgba(0, 0, 0, 0))
         this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
 
         // Draw latest things first
         for (let i = this.entities.length - 1; i >= 0; i--) {
             this.entities[i].draw(this.ctx, this);
         }
         
         //this.camera.draw(this.ctx);
     };
 
     update() {
         let entitiesCount = this.entities.length;
 
         for (let i = 0; i < entitiesCount; i++) {
             let entity = this.entities[i];
 
             if (!entity.removeFromWorld) {
                 entity.update();
             }
         }
 
         //this.camera.update();
 
         for (let i = this.entities.length - 1; i >= 0; --i) {
             if (this.entities[i].removeFromWorld) {
                 this.entities.splice(i, 1);
             }
         }
     };
 
     loop() {
         this.clockTick = this.timer.tick();
         this.update();
         this.draw();
     };
};

// KV Le was here :)