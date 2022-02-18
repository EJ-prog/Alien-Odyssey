class SceneManager {
    constructor(game) {
        // this.game = game;
        // this.game.camera = this;
        // this.x = 0;
        // this.score = 0;
        // this.coins = 0;
        // this.lives = 3;

        // this.gameOver = false;

        // this.title = true;
        // this.level = null;

        // this.coinAnimation = new Animator(ASSET_MANAGER.getAsset("./sprites/coins.png"), 0, 160, 8, 8, 4, 0.2, 0, false, true);

       //  this.minimap = new Minimap(this.game, 1.5 * PARAMS.BLOCKWIDTH, 3.5 * PARAMS.BLOCKWIDTH, 224 * PARAMS.SCALE);

        // this.mario = new Mario(this.game, 2.5 * PARAMS.BLOCKWIDTH, 0 * PARAMS.BLOCKWIDTH);

        // this.loadLevel(levelOne, 2.5 * PARAMS.BLOCKWIDTH, 13 * PARAMS.BLOCKWIDTH, false, true);

        // NOTE: PLEASE USE THE FOLLOWING LINE TO TEST.
        // this.loadLevel(levelTwo, 2.5 * PARAMS.BLOCKWIDTH, 13 * PARAMS.BLOCKWIDTH, false, true);
    };

    // clearEntities() {
    //     this.game.entities.forEach(function (entity) {
    //         entity.removeFromWorld = true;
    //     });
    // };

    loadLevel(level, x, y, transition, title) {
        // this.title = title;
        // this.level = level;
        // this.clearEntities();
        // this.x = 0;
        // this.underground = level.underground;
        
        // if (transition) {
        //     this.game.addEntity(new TransitionScreen(this.game, level, x, y, title));
        // } else {
        //     if (level.bighills) {
        //         for (var i = 0; i < level.bighills.length; i++) {
        //             let hill = level.bighills[i];
        //             this.game.addEntity(new BigHill(this.game, hill.x * PARAMS.BLOCKWIDTH, hill.y * PARAMS.BLOCKWIDTH));
        //         }
        //     }
        //     if (level.hills) {
        //         for (var i = 0; i < level.hills.length; i++) {
        //             let hill = level.hills[i];
        //             this.game.addEntity(new Hill(this.game, hill.x * PARAMS.BLOCKWIDTH, hill.y * PARAMS.BLOCKWIDTH));
        //         }
        //     }
        //     if (level.bushes) {
        //         for (var i = 0; i < level.bushes.length; i++) {
        //             let bush = level.bushes[i];
        //             this.game.addEntity(new Bush(this.game, bush.x * PARAMS.BLOCKWIDTH, bush.y * PARAMS.BLOCKWIDTH, bush.size));
        //         }
        //     }
        //     if (level.clouds) {
        //         for (var i = 0; i < level.clouds.length; i++) {
        //             let cloud = level.clouds[i];
        //             this.game.addEntity(new Cloud(this.game, cloud.x * PARAMS.BLOCKWIDTH, cloud.y * PARAMS.BLOCKWIDTH, cloud.size));
        //         }
        //     }
        //     if (level.ground) {
        //         for (var i = 0; i < level.ground.length; i++) {
        //             let ground = level.ground[i];
        //             this.game.addEntity(new Ground(this.game, ground.x * PARAMS.BLOCKWIDTH, ground.y * PARAMS.BLOCKWIDTH, ground.size * PARAMS.BLOCKWIDTH, level.underground));
        //         }
        //     }
        //     if (level.bricks) {
        //         for (var i = 0; i < level.bricks.length; i++) {
        //             let brick = level.bricks[i];
        //             this.game.addEntity(new Brick(this.game, brick.x * PARAMS.BLOCKWIDTH, brick.y * PARAMS.BLOCKWIDTH, brick.type, brick.prize, level.underground));
        //         }
        //     }
        //     if (level.blocks) {
        //         for (var i = 0; i < level.blocks.length; i++) {
        //             let block = level.blocks[i];
        //             this.game.addEntity(new Block(this.game, block.x * PARAMS.BLOCKWIDTH, block.y * PARAMS.BLOCKWIDTH, block.size * PARAMS.BLOCKWIDTH, level.underground));
        //         }
        //     }
        //     if (level.tubes) {
        //         for (var i = 0; i < level.tubes.length; i++) {
        //             let tube = level.tubes[i];
        //             if (!tube.side) {
        //                 this.game.addEntity(new Tube(this.game, tube.x * PARAMS.BLOCKWIDTH, tube.y * PARAMS.BLOCKWIDTH, tube.size, tube.destination, tube.enemyType));
        //             } else {
        //                 this.game.addEntity(new SideTube(this.game, tube.x * PARAMS.BLOCKWIDTH, tube.y * PARAMS.BLOCKWIDTH));
        //             }
        //         }
        //     }
        //     if (level.goombas) {
        //         for (var i = 0; i < level.goombas.length; i++) {
        //             let goomba = level.goombas[i];
        //             this.game.addEntity(new Goomba(this.game, goomba.x * PARAMS.BLOCKWIDTH, goomba.y * PARAMS.BLOCKWIDTH));
        //         }
        //     }
        //     if (level.koopas) {
        //         for (var i = 0; i < level.koopas.length; i++) {
        //             let koopa = level.koopas[i];
        //             this.game.addEntity(new Koopa(this.game, koopa.x * PARAMS.BLOCKWIDTH, koopa.y * PARAMS.BLOCKWIDTH, koopa.facing));
        //         }
        //     }
        //     if (level.coins) {
        //         for (var i = 0; i < level.coins.length; i++) {
        //             let coin = level.coins[i];
        //             this.game.addEntity(new Coin(this.game, coin.x * PARAMS.BLOCKWIDTH, coin.y * PARAMS.BLOCKWIDTH));
        //         }
        //     }
        //     this.mario.x = x;
        //     this.mario.y = y;
        //     this.mario.removeFromWorld = false;
        //     this.mario.velocity = { x: 0, y: 0 };

        //     if (level.music && !this.title) {
        //         ASSET_MANAGER.pauseBackgroundMusic();
        //         ASSET_MANAGER.playAsset(level.music);
        //     }

        //     var that = this;
        //     var mario = false;
        //     this.game.entities.forEach(function(entity) {
        //         if(that.mario === entity) mario = true;
        //     });
        //     if(!mario) this.game.addEntity(this.mario);
        // }

        // if (level.lifts) {
        //     for (var i = 0; i < level.lifts.length; i++) {
        //         let lift = level.lifts[i];
        //         this.game.addEntity(new Lift(this.game, lift.x * PARAMS.BLOCKWIDTH, lift.y * PARAMS.BLOCKWIDTH, lift.goingDown));
        //     }
        // }
        // this.mario.x = x;
        // this.mario.y = y;
        // //this.game.addEntity(this.mario);

    };

    // updateAudio() {
    //     var mute = document.getElementById("mute").checked;
    //     var volume = document.getElementById("volume").value;

    //     ASSET_MANAGER.muteAudio(mute);
    //     ASSET_MANAGER.adjustVolume(volume);

    // };

    update() {
        PARAMS.DEBUG = document.getElementById("debug").checked;

        this.updateAudio();

        if (this.title && this.game.click) {
            if (this.game.click && this.game.click.y > 9 * PARAMS.BLOCKWIDTH && this.game.click.y < 9.5 * PARAMS.BLOCKWIDTH) {
                this.title = false;
                this.mario = new Mario(this.game, 2.5 * PARAMS.BLOCKWIDTH, 0 * PARAMS.BLOCKWIDTH);
                this.loadLevel(levelOne, 2.5 * PARAMS.BLOCKWIDTH, 0 * PARAMS.BLOCKWIDTH, true);
            }
            if (this.game.click && this.game.click.y > 10 * PARAMS.BLOCKWIDTH && this.game.click.y < 10.5 * PARAMS.BLOCKWIDTH) {
                this.title = false;
                this.mario = new Mario(this.game, 2.5 * PARAMS.BLOCKWIDTH, 0 * PARAMS.BLOCKWIDTH, true);
                this.loadLevel(levelOne, 2.5 * PARAMS.BLOCKWIDTH, 0 * PARAMS.BLOCKWIDTH, true);
            }
        }

        if (this.gameOver) {
            this.gameOver = false;
            this.lives = 3;
            this.score = 0;
            this.coins = 0;
            var x = 2.5 * PARAMS.BLOCKWIDTH;
            var y = 13 * PARAMS.BLOCKWIDTH;
            this.mario = new Mario(this.game, x, y);

            this.clearEntities();

            this.game.addEntity(new TransitionScreen(this.game, levelOne, x, y, true));
        }

        let midpoint = PARAMS.CANVAS_WIDTH/2 - PARAMS.BLOCKWIDTH / 2;

        if (this.x < this.mario.x - midpoint) this.x = this.mario.x - midpoint;

        // NOTE: THIS FOLLOWING CODE HAS A BUG WHERE CANVAS COLOR WON'T CHANGE BACK TO BLUE.
        var canvas = document.getElementById("gameWorld");
        if (this.underground) {
            canvas.style.backgroundColor = "black";
        } else {
            canvas.style.backgroundColor = "#049cd8";
        }
    };

    addCoin() {
        // if (this.coins++ === 100) {
        //     this.coins = 0;
        //     this.lives++;
        // }
    };

    draw(ctx) {
        ctx.font = PARAMS.BLOCKWIDTH / 2 + 'px "Press Start 2P"';
        ctx.fillStyle = "White";

        ctx.fillStyle = "White";
        ctx.fillText("MARRIOTT", 1.5 * PARAMS.BLOCKWIDTH, 1 * PARAMS.BLOCKWIDTH);
        ctx.fillText((this.score + "").padStart(8,"0"), 1.5 * PARAMS.BLOCKWIDTH, 1.5 * PARAMS.BLOCKWIDTH);
        ctx.fillText("x" + (this.coins < 10 ? "0" : "") + this.coins, 6.5 * PARAMS.BLOCKWIDTH, 1.5 * PARAMS.BLOCKWIDTH);
        ctx.fillText("WORLD", 9 * PARAMS.BLOCKWIDTH, 1 * PARAMS.BLOCKWIDTH);
        ctx.fillText(this.level.label, 9.5 * PARAMS.BLOCKWIDTH, 1.5 * PARAMS.BLOCKWIDTH);
        ctx.fillText("TIME", 12.5 * PARAMS.BLOCKWIDTH, 1 * PARAMS.BLOCKWIDTH);
        ctx.fillText("400", 13 * PARAMS.BLOCKWIDTH, 1.5 * PARAMS.BLOCKWIDTH);

        if (this.title) {
            var width = 176;
            var height = 88;
            ctx.drawImage(ASSET_MANAGER.getAsset("./sprites/title.png"), 2.5 * PARAMS.BLOCKWIDTH, 2 * PARAMS.BLOCKWIDTH, width * PARAMS.SCALE, height * PARAMS.SCALE);
            ctx.fillStyle = this.game.mouse && this.game.mouse.y > 9 * PARAMS.BLOCKWIDTH && this.game.mouse.y < 9.5 * PARAMS.BLOCKWIDTH ? "Grey" : "White";
            ctx.fillText("MARIO", 6.75 * PARAMS.BLOCKWIDTH, 9.5 * PARAMS.BLOCKWIDTH);
            ctx.fillStyle = this.game.mouse && this.game.mouse.y > 10 * PARAMS.BLOCKWIDTH && this.game.mouse.y < 10.5 * PARAMS.BLOCKWIDTH ? "Grey" : "White";
            ctx.fillText("LUIGI", 6.75 * PARAMS.BLOCKWIDTH, 10.5 * PARAMS.BLOCKWIDTH);
        }

        this.coinAnimation.drawFrame(this.game.clockTick, ctx, 6 * PARAMS.BLOCKWIDTH, 1 * PARAMS.BLOCKWIDTH, 3);

        if (PARAMS.DEBUG) {
            let xV = "xV=" + Math.floor(this.game.mario.velocity.x);
            let yV = "yV=" + Math.floor(this.game.mario.velocity.y);
            ctx.fillText(xV, 1.5 * PARAMS.BLOCKWIDTH, 2.5 * PARAMS.BLOCKWIDTH);
            ctx.fillText(yV, 1.5 * PARAMS.BLOCKWIDTH, 3 * PARAMS.BLOCKWIDTH);

            ctx.translate(0, -10); // hack to move elements up by 10 pixels instead of adding -10 to all y coordinates below
            ctx.strokeStyle = "White";
            ctx.lineWidth = 2;
            ctx.strokeStyle = this.game.left ? "White" : "Grey";
            ctx.fillStyle = ctx.strokeStyle;
            ctx.strokeRect(6 * PARAMS.BLOCKWIDTH - 2, 2.5 * PARAMS.BLOCKWIDTH - 2, 0.5 * PARAMS.BLOCKWIDTH + 2, 0.5 * PARAMS.BLOCKWIDTH + 2);
            ctx.fillText("L", 6 * PARAMS.BLOCKWIDTH, 3 * PARAMS.BLOCKWIDTH);
            ctx.strokeStyle = this.game.down ? "White" : "Grey";
            ctx.fillStyle = ctx.strokeStyle;
            ctx.strokeRect(6.5 * PARAMS.BLOCKWIDTH, 3 * PARAMS.BLOCKWIDTH, 0.5 * PARAMS.BLOCKWIDTH + 2, 0.5 * PARAMS.BLOCKWIDTH + 2);
            ctx.fillText("D", 6.5 * PARAMS.BLOCKWIDTH + 2, 3.5 * PARAMS.BLOCKWIDTH + 2);
            ctx.strokeStyle = this.game.up ? "White" : "Grey";
            ctx.fillStyle = ctx.strokeStyle;
            ctx.strokeRect(6.5 * PARAMS.BLOCKWIDTH, 2 * PARAMS.BLOCKWIDTH - 4, 0.5 * PARAMS.BLOCKWIDTH + 2, 0.5 * PARAMS.BLOCKWIDTH + 2);
            ctx.fillText("U", 6.5 * PARAMS.BLOCKWIDTH + 2, 2.5 * PARAMS.BLOCKWIDTH - 2);
            ctx.strokeStyle = this.game.right ? "White" : "Grey";
            ctx.fillStyle = ctx.strokeStyle;
            ctx.strokeRect(7 * PARAMS.BLOCKWIDTH + 2, 2.5 * PARAMS.BLOCKWIDTH - 2, 0.5 * PARAMS.BLOCKWIDTH + 2, 0.5 * PARAMS.BLOCKWIDTH + 2);
            ctx.fillText("R", 7 * PARAMS.BLOCKWIDTH + 4, 3 * PARAMS.BLOCKWIDTH);

            ctx.strokeStyle = this.game.A ? "White" : "Grey";
            ctx.fillStyle = ctx.strokeStyle;
            ctx.beginPath();
            ctx.arc(8.25 * PARAMS.BLOCKWIDTH + 2, 2.75 * PARAMS.BLOCKWIDTH, 0.25 * PARAMS.BLOCKWIDTH + 4, 0, 2 * Math.PI);
            ctx.stroke();
            ctx.fillText("A", 8 * PARAMS.BLOCKWIDTH + 4, 3 * PARAMS.BLOCKWIDTH);
            ctx.strokeStyle = this.game.B ? "White" : "Grey";
            ctx.fillStyle = ctx.strokeStyle;
            ctx.beginPath();
            ctx.arc(9 * PARAMS.BLOCKWIDTH + 2, 2.75 * PARAMS.BLOCKWIDTH, 0.25 * PARAMS.BLOCKWIDTH + 4, 0, 2 * Math.PI);
            ctx.stroke();
            ctx.fillText("B", 8.75 * PARAMS.BLOCKWIDTH + 4, 3 * PARAMS.BLOCKWIDTH);

            ctx.translate(0, 10);
            ctx.strokeStyle = "White";
            ctx.fillStyle = ctx.strokeStyle;

            this.minimap.draw(ctx);
        }
    };
};


class Minimap {
    constructor(game, x, y, w) {
        Object.assign(this, { game, x, y, w });
    };

    update() {

    };

    draw(ctx) {
        ctx.strokeStyle = "Black";
        ctx.strokeRect(this.x, this.y, this.w, PARAMS.BLOCKWIDTH);
        for (var i = 0; i < this.game.entities.length; i++) {
            this.game.entities[i].drawMinimap(ctx, this.x, this.y);
        }
    };
};
