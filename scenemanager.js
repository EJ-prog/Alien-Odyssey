class SceneManager {
    constructor(game) {
        this.game = game;
        this.game.camera = this;
        this.score = 0;
        this.coins = 0;
        this.lives = 1;

        this.x = 0;
        this.title = true;
        this.gameOver = false;
        this.level = null;
        this.activeElem = true;
        this.about = false;

        this.alien = new Alien(this.game, 0, 263);

    };

    clearEntities() {
        this.game.entities.forEach(function (entity) {
            entity.removeFromWorld = true;
        });
    };

    loadLevel2(level, x, y) {
        this.alien.velocity.x = 0;
        this.alien.velocity.y = 0;
        this.loadlevel(level, x, y, false, false);
    };

    // loadTitle() {
    //     this.loadlevel(metalDesert, 0, 0, true, true);
    // };

    loadlevel(level, x, y, transition, title) {
        this.title = title;
        this.level = level;
        this.clearEntities();

        if (transition) {
            this.game.addEntity(new TitleScreen(this.game));
        } else {
            //Level 1
            if (level.metalDesertBackground) {
                for (var i = 0; i < level.metalDesertBackground.length; i++) {
                    let metalDesertBackground = level.metalDesertBackground[i];
                    this.game.addEntity(new MetalDesertBackground(this.game, metalDesertBackground.x, metalDesertBackground.y, metalDesertBackground.width));
                }
            }
            if (level.metalDesertPlanets) {
                for (var i = 0; i < level.metalDesertPlanets.length; i++) {
                    let metalDesertPlanets = level.metalDesertPlanets[i];
                    this.game.addEntity(new MetalDesertPlanets(this.game, metalDesertPlanets.x, metalDesertPlanets.y));
                }
            }
            if (level.metalMountains) {
                for (var i = 0; i < level.metalMountains.length; i++) {
                    let metalMountains = level.metalMountains[i];
                    this.game.addEntity(new MetalMountains(this.game, metalMountains.x, metalMountains.y, metalMountains.width));
                }
            }
            if (level.metalDesertPath) {
                for (var i = 0; i < level.metalDesertPath.length; i++) {
                    let metalDesertPath = level.metalDesertPath[i];
                    this.game.addEntity(new MetalDesertPath(this.game, metalDesertPath.x, metalDesertPath.y, metalDesertPath.dx, metalDesertPath.dy, metalDesertPath.w, metalDesertPath.h));
                }
            }
            if (level.metalDesertGround) {
                for (var i = 0; i < level.metalDesertGround.length; i++) {
                    let metalDesertGround = level.metalDesertGround[i];
                    this.game.addEntity(new MetalDesertGround(this.game, metalDesertGround.x, metalDesertGround.y, metalDesertGround.dx, metalDesertGround.dy, metalDesertGround.w, metalDesertGround.h));
                }
            }
            if (level.backgroundCactus1) {
                for (var i = 0; i < level.backgroundCactus1.length; i++) {
                    let backgroundCactus1 = level.backgroundCactus1[i];
                    this.game.addEntity(new BackgroundCactus1(this.game, backgroundCactus1.x, backgroundCactus1.y));
                }
            }
            if (level.backgroundCactus2) {
                for (var i = 0; i < level.backgroundCactus2.length; i++) {
                    let backgroundCactus2 = level.backgroundCactus2[i];
                    this.game.addEntity(new BackgroundCactus2(this.game, backgroundCactus2.x, backgroundCactus2.y));
                }
            }
            if (level.foregroundCactus1) {
                for (var i = 0; i < level.foregroundCactus1.length; i++) {
                    let foregroundCactus1 = level.foregroundCactus1[i];
                    this.game.addEntity(new ForegroundCactus1(this.game, foregroundCactus1.x, foregroundCactus1.y));
                }
            }
            if (level.foregroundCactus2) {
                for (var i = 0; i < level.foregroundCactus2.length; i++) {
                    let foregroundCactus2 = level.foregroundCactus2[i];
                    this.game.addEntity(new ForegroundCactus2(this.game, foregroundCactus2.x, foregroundCactus2.y));
                }
            } 
            if (level.rock) {
                for (var i = 0; i < level.rock.length; i++) {
                    let rock = level.rock[i];
                    this.game.addEntity(new Rock(this.game, rock.x, rock.y));
                }
            }
            if (level.scorpion) {
                for (var i = 0; i < level.scorpion.length; i++) {
                    let scorpion = level.scorpion[i];
                    this.game.addEntity(new Scorpion(this.game, scorpion.x, scorpion.y));
                }
            }
            //Level 2
            if (level.acidMeadowsBackground) {
                for (var i = 0; i < level.acidMeadowsBackground.length; i++) {
                    let acidMeadowsBackground = level.acidMeadowsBackground[i];
                    this.game.addEntity(new AcidMeadowsBackground(this.game, acidMeadowsBackground.x, acidMeadowsBackground.y, acidMeadowsBackground.width));
                }
            }
            if (level.acidMeadowsHills) {
                for (var i = 0; i < level.acidMeadowsHills.length; i++) {
                    let acidMeadowsHills = level.acidMeadowsHills[i];
                    this.game.addEntity(new AcidMeadowsHills(this.game, acidMeadowsHills.x, acidMeadowsHills.y, acidMeadowsHills.width));
                }
            }
            if (level.acidMeadowsPath) {
                for (var i = 0; i < level.acidMeadowsPath.length; i++) {
                    let acidMeadowsPath = level.acidMeadowsPath[i];
                    this.game.addEntity(new AcidMeadowsPath(this.game, acidMeadowsPath.x, acidMeadowsPath.y, acidMeadowsPath.dx, acidMeadowsPath.dy, acidMeadowsPath.w, acidMeadowsPath.h));
                }
            }
            if (level.acidMeadowsGround) {
                for (var i = 0; i < level.acidMeadowsGround.length; i++) {
                    let acidMeadowsGround = level.acidMeadowsGround[i];
                    this.game.addEntity(new AcidMeadowsGround(this.game, acidMeadowsGround.x, acidMeadowsGround.y, acidMeadowsGround.dx, acidMeadowsGround.dy, acidMeadowsGround.w, acidMeadowsGround.h));
                }
            }
            if (level.acidMeadowsPlanets) {
                for (var i = 0; i < level.acidMeadowsPlanets.length; i++) {
                    let acidMeadowsPlanets = level.acidMeadowsPlanets[i];
                    this.game.addEntity(new AcidMeadowsPlanets(this.game, acidMeadowsPlanets.x, acidMeadowsPlanets.y));
                }
            }
            if (level.rainClouds1) {
                for (var i = 0; i < level.rainClouds1.length; i++) {
                    let rainClouds1 = level.rainClouds1[i];
                    this.game.addEntity(new RainClouds1(this.game, rainClouds1.x, rainClouds1.y, rainClouds1.speed));
                }
            }
            if (level.rainClouds2) {
                for (var i = 0; i < level.rainClouds2.length; i++) {
                    let rainClouds2 = level.rainClouds2[i];
                    this.game.addEntity(new RainClouds2(this.game, rainClouds2.x, rainClouds2.y, rainClouds2.speed));
                }
            }
            if (level.rain) {
                for (var i = 0; i < level.rain.length; i++) {
                    let rain = level.rain[i];
                    this.game.addEntity(new Rain1(this.game, rain.x, rain.y))
                }
            }
            if (level.mushroom1) {
                for (var i = 0; i < level.mushroom1.length; i++) {
                    let mushroom1 = level.mushroom1[i];
                    this.game.addEntity(new Mushroom1(this.game, mushroom1.x, mushroom1.y));
                }
            }
            if (level.mushroom2) {
                for (var i = 0; i < level.mushroom2.length; i++) {
                    let mushroom2 = level.mushroom2[i];
                    this.game.addEntity(new Mushroom2(this.game, mushroom2.x, mushroom2.y));
                }
            }
            if (level.ant) {
                for (var i = 0; i < level.ant.length; i++) {
                    let ant = level.ant[i];
                    this.game.addEntity(new Ant(this.game, ant.x, ant.y));
                }
            }
            //Level 3
            if (level.lavaLandBackground) {
                for (var i = 0; i < level.lavaLandBackground.length; i++) {
                    let lavaLandBackground = level.lavaLandBackground[i];
                    this.game.addEntity(new LavaLandBackground(this.game, lavaLandBackground.x, lavaLandBackground.y, lavaLandBackground.width));
                }
            }
            if (level.lavaDrop) {
                for (var i = 0; i < level.lavaDrop.length; i++) {
                    let lavadrop = level.lavaDrop[i];
                    this.game.addEntity(new lavaDrop(this.game, lavadrop.x, lavadrop.y, lavadrop.resetY));
                }
            }
            if (level.diamond1) {
                for (var i = 0; i < level.diamond1.length; i++) {
                    let diamond1 = level.diamond1[i];
                    this.game.addEntity(new Diamond1(this.game, diamond1.x, diamond1.y));
                }
            }
            if (level.diamond2) {
                for (var i = 0; i < level.diamond2.length; i++) {
                    let diamond2 = level.diamond2[i];
                    this.game.addEntity(new Diamond2(this.game, diamond2.x, diamond2.y));
                }
            }
            if (level.diamond3) {
                for (var i = 0; i < level.diamond3.length; i++) {
                    let diamond3 = level.diamond3[i];
                    this.game.addEntity(new Diamond3(this.game, diamond3.x, diamond3.y));
                }
            }
            if (level.diamond4) {
                for (var i = 0; i < level.diamond4.length; i++) {
                    let diamond4 = level.diamond4[i];
                    this.game.addEntity(new Diamond4(this.game, diamond4.x, diamond4.y));
                }
            }
            if (level.lavaLandHorizontal) {
                for (var i = 0; i < level.lavaLandHorizontal.length; i++) {
                    let lavaLandHorizontal = level.lavaLandHorizontal[i];
                    this.game.addEntity(new LavaLandHorizontal(this.game, lavaLandHorizontal.x, lavaLandHorizontal.y));
                }
            }
            if (level.lavaLandVertical) {
                for (var i = 0; i < level.lavaLandVertical.length; i++) {
                    let lavaLandVertical = level.lavaLandVertical[i];
                    this.game.addEntity(new LavaLandVertical(this.game, lavaLandVertical.x, lavaLandVertical.y));
                }
            }
            if (level.lavaLandSquare) {
                for (var i = 0; i < level.lavaLandSquare.length; i++) {
                    let lavaLandSquare = level.lavaLandSquare[i];
                    this.game.addEntity(new LavaLandSquare(this.game, lavaLandSquare.x, lavaLandSquare.y));
                }
            }
            if (level.stepShort) {
                for (var i = 0; i < level.stepShort.length; i++) {
                    let stepShort = level.stepShort[i];
                    this.game.addEntity(new StepShort(this.game, stepShort.x, stepShort.y));
                }
            }
            if (level.stepMedium) {
                for (var i = 0; i < level.stepMedium.length; i++) {
                    let stepMedium = level.stepMedium[i];
                    this.game.addEntity(new StepMedium(this.game, stepMedium.x, stepMedium.y, stepMedium.resetY));
                }
            }
            if (level.stepLarge) {
                for (var i = 0; i < level.stepLarge.length; i++) {
                    let stepLarge = level.stepLarge[i];
                    this.game.addEntity(new StepLarge(this.game, stepLarge.x, stepLarge.y));
                }
            }
            if (level.lavaFish) {
                for (var i = 0; i < level.lavaFish.length; i++) {
                    let lavaFish = level.lavaFish[i];
                    this.game.addEntity(new lavafish(this.game, lavaFish.x, lavaFish.y, lavaFish.resetY));
                }
            }
            //Level 4
            if (level.monsterForestBackground) {
                for (var i = 0; i < level.monsterForestBackground.length; i++) {
                    let monsterForestBackground = level.monsterForestBackground[i];
                    this.game.addEntity(new MonsterForestBackground(this.game, monsterForestBackground.x, monsterForestBackground.y, monsterForestBackground.width));
                }
            }
            if (level.sun) {
                for (var i = 0; i < level.sun.length; i++) {
                    let sun = level.sun[i];
                    this.game.addEntity(new Sun(this.game, sun.x, sun.y));
                }
            }
            if (level.monsterForestHills) {
                for (var i = 0; i < level.monsterForestHills.length; i++) {
                    let monsterForestHills = level.monsterForestHills[i];
                    this.game.addEntity(new MonsterForestHills(this.game, monsterForestHills.x, monsterForestHills.y, monsterForestHills.width));
                }
            }
            if (level.monsterForestPath) {
                for (var i = 0; i < level.monsterForestPath.length; i++) {
                    let monsterForestPath = level.monsterForestPath[i];
                    this.game.addEntity(new MonsterForestPath(this.game, monsterForestPath.x, monsterForestPath.y, monsterForestPath.dx, monsterForestPath.dy, monsterForestPath.w, monsterForestPath.h));
                }
            }
            if (level.monsterForestGround) {
                for (var i = 0; i < level.monsterForestGround.length; i++) {
                    let monsterForestGround = level.monsterForestGround[i];
                    this.game.addEntity(new MonsterForestGround(this.game, monsterForestGround.x, monsterForestGround.y, monsterForestGround.dx, monsterForestGround.dy, monsterForestGround.w, monsterForestGround.h));
                }
            }
            if (level.bushLarge) {
                for (var i = 0; i < level.bushLarge.length; i++) {
                    let bush1 = level.bushLarge[i];
                    this.game.addEntity(new BushLarge(this.game, bush1.x, bush1.y));
                }
            }
            if (level.bushMedium) {
                for (var i = 0; i < level.bushMedium.length; i++) {
                    let bush3 = level.bushMedium[i];
                    this.game.addEntity(new BushMedium(this.game, bush3.x, bush3.y));
                }
            }
            if (level.tree1) {
                for (var i = 0; i < level.tree1.length; i++) {
                    let tree1 = level.tree1[i];
                    this.game.addEntity(new Tree1(this.game, tree1.x, tree1.y));
                }
            }
            if (level.tree2) {
                for (var i = 0; i < level.tree2.length; i++) {
                    let tree2 = level.tree2[i];
                    this.game.addEntity(new Tree2(this.game, tree2.x, tree2.y));
                }
            }
            if (level.bushSmall) {
                for (var i = 0; i < level.bushSmall.length; i++) {
                    let bush2 = level.bushSmall[i];
                    this.game.addEntity(new BushSmall(this.game, bush2.x, bush2.y));
                }
            }
            if (level.cloud1) {
                for (var i = 0; i < level.cloud1.length; i++) {
                    let cloud1 = level.cloud1[i];
                    this.game.addEntity(new Cloud1(this.game, cloud1.x, cloud1.y));
                }
            }
            if (level.cloud2) {
                for (var i = 0; i < level.cloud2.length; i++) {
                    let cloud2 = level.cloud2[i];
                    this.game.addEntity(new Cloud2(this.game, cloud2.x, cloud2.y));
                }
            }
            if (level.cloud3) {
                for (var i = 0; i < level.cloud3.length; i++) {
                    let cloud3 = level.cloud3[i];
                    this.game.addEntity(new Cloud3(this.game, cloud3.x, cloud3.y));
                }
            }
            if (level.cloud4) {
                for (var i = 0; i < level.cloud4.length; i++) {
                    let cloud4 = level.cloud4[i];
                    this.game.addEntity(new Cloud4(this.game, cloud4.x, cloud4.y));
                }
            }
            if (level.cloud5) {
                for (var i = 0; i < level.cloud5.length; i++) {
                    let cloud5 = level.cloud5[i];
                    this.game.addEntity(new Cloud5(this.game, cloud5.x, cloud5.y));
                }
            }
            if (level.cloud6) {
                for (var i = 0; i < level.cloud6.length; i++) {
                    let cloud6 = level.cloud6[i];
                    this.game.addEntity(new Cloud6(this.game, cloud6.x, cloud6.y));
                }
            }
            if (level.cloud7) {
                for (var i = 0; i < level.cloud7.length; i++) {
                    let cloud7 = level.cloud7[i];
                    this.game.addEntity(new Cloud7(this.game, cloud7.x, cloud7.y));
                }
            }
            if (level.cloud8) {
                for (var i = 0; i < level.cloud8.length; i++) {
                    let cloud8 = level.cloud8[i];
                    this.game.addEntity(new Cloud1(this.game, cloud8.x, cloud8.y));
                }
            }
            if (level.monster) {
                for (var i = 0; i < level.monster.length; i++) {
                    let monster = level.monster[i];
                    this.game.addEntity(new Monster(this.game, monster.x, monster.y));
                }
            }
            //Assets
            if (level.coins) {
                for (var i = 0; i < level.coins.length; i++) {
                    let coins = level.coins[i];
                    this.game.addEntity(new Coin(this.game, coins.x, coins.y));
                }
            }
            if (level.ammopack) {
                for (var i = 0; i < level.ammopack.length; i++) {
                    let ammopack = level.ammopack[i];
                    this.game.addEntity(new AmmoPack(this.game, ammopack.x, ammopack.y));
                }
            }
            if (level.lunarRockPiece1) {
                for (var i = 0; i < level.lunarRockPiece1.length; i++) {
                    let lunarRockPiece1 = level.lunarRockPiece1[i];
                    this.game.addEntity(new LunarRockPieces(this.game, lunarRockPiece1.x, lunarRockPiece1.y, lunarRockPiece1.level));
                }
            }
            if (level.lunarRockPiece2) {
                for (var i = 0; i < level.lunarRockPiece2.length; i++) {
                    let lunarRockPiece2 = level.lunarRockPiece2[i];
                    this.game.addEntity(new LunarRockPieces(this.game, lunarRockPiece2.x, lunarRockPiece2.y, lunarRockPiece2.level));
                }
            }
            if (level.lunarRockPiece3) {
                for (var i = 0; i < level.lunarRockPiece3.length; i++) {
                    let lunarRockPiece3 = level.lunarRockPiece3[i];
                    this.game.addEntity(new LunarRockPieces(this.game, lunarRockPiece3.x, lunarRockPiece3.y, lunarRockPiece3.level));
                }
            }
            if (level.lunarRockPiece4) {
                for (var i = 0; i < level.lunarRockPiece4.length; i++) {
                    let lunarRockPiece4 = level.lunarRockPiece4[i];
                    this.game.addEntity(new LunarRockPieces(this.game, lunarRockPiece4.x, lunarRockPiece4.y, lunarRockPiece4.level));
                }
            }
            this.alien.x = x;
            this.alien.y = y;
            this.alien.removeFromWorld = false;
            this.alien.velocity.x = 0;
            this.alien.velocity.y = 0;

            // var that = this;
            var alien = false;
            // this.game.entities.forEach(function(entity) {
            //     if(that.mario === entity) mario = true;
            // });
            if(!alien) this.game.addEntity(this.alien);
        }

        this.alien.x = x;
        this.alien.y = y;
    };

    update() {
        if (this.title && this.game.click && this.activeElem) {
            if(this.game.click.y > 146 && this.game.click.y < 280 && this.game.click.x > 338 && this.game.click.x < 623) {
                this.loadlevel(metalDesert, 0, 275, false, false);
                // this.alien = new Alien(this.game, 0, 263);
            }
            if (this.game.click.y > 281 && this.game.click.y < 415 && this.game.click.x > 338 && this.game.click.x < 623) {
                this.about = true;
            }
        }

        if (this.about === true && this.game.click.y > 20 && this.game.click.y < 43 
            && this.game.click.x > 633 && this.game.click.x < 655) {
            this.about = false;
        }


        if (this.gameOver) {
            this.gameOver = false;
            this.lives = 1;
            this.score = 0;
            this.coins = 0;

            // this.clearEntities();

            this.game.addEntity(new TitleScreen(this.game));
        }

        if (this.about) {
            this.activeElem = false;
        } else {
            this.activeElem = true;
        }

        let midpoint = (960 / 2) - (98 / 2);

        this.x = this.alien.x - midpoint;

    };

    draw(ctx) {
        if (this.title) {
            this.x = 0;
            this.button_x = 337.5;
            this.button_y = 145.5;
            this.buttons = ASSET_MANAGER.getAsset("./Sprites_and_Assets/AdditionalAssets_StartMenu.png");
            // this.selected = ASSET_MANAGER.getAsset("./Sprites_and_Assets/AdditionalAssets_StartMenu_Selected.png");

            ctx.drawImage(ASSET_MANAGER.getAsset("./Sprites_and_Assets/titlescreen.png"), 0, 0);
            ctx.drawImage(this.buttons, 0, 0, 285, 135, this.button_x, this.button_y, 285, 135);
            ctx.drawImage(this.buttons, 0, 135, 285, 135, this.button_x, this.button_y + 135, 285, 135);
            // if (this.game > 281 && this < 415 && this > 338 && this < 623) {
            //     ctx.drawImage(this.selected, 0, 0, 285, 135, this.button_x, this.button_y, 285, 135);
            // }
            if(this.game.click) {
                if(this.game.click.y > 281 && this.game.click.y < 415 && this.game.click.x > 338 && this.game.click.x < 623) {
                    ctx.fillStyle = "#660066";
                    ctx.fillRect(297.5, 25, 367, 500);
                    ctx.strokeStyle = "gray";
                    ctx.lineWidth = 5;
                    ctx.strokeRect(297.5, 25, 367, 500);
                    ctx.lineWidth = 2;
                    ctx.strokeStyle = "#660000";
                    ctx.strokeRect(297.5, 25, 367, 500);
                    ctx.fillStyle = "black";
                    ctx.fillRect(642.5, 30.5, 15, 15);
                    ctx.fillStyle = "#666600";
                    ctx.fillRect(644.75, 32.5, 10, 10);
                    ctx.fillStyle = "black";
                    ctx.font = "15px Arial";
                    ctx.fillText("X", 644.75, 42.5);
                    ctx.fillStyle = "black";
                    ctx.fillText("Alien Odyssey: Finding Lunar Rock -", 319, 50);
                    ctx.fillText("Based on a rumor that has been passed around,",319,70);
                    ctx.fillText("Lunar rock is located on a nearby planet.",319,90);
                    ctx.fillText("Lunar rock has great magic, and it helps you",319,110);
                    ctx.fillText("make a wish come true. Alien's wife is",319,130);
                    ctx.fillText("seriouslly ill and he wants to find Lunar",319,150);
                    ctx.fillText("rock to help her get better. Alien has flown",319,170);
                    ctx.fillText("to this planet to begin the search.",319,190);
                    ctx.fillText("After traveling a thousand years of light,",319,210);
                    ctx.fillText("he arrived on this planet.",319,230);
                    ctx.fillText("Using the arrow keys or ",319, 250);
                    ctx.fillText("WASD & spacebar, navigate",319,270);
                    ctx.fillText("the planets, shoot the enemies, gather coins",319,290);
                    ctx.fillText("and retrieve the Lunar rock to save Alien's wife.",319,310);
                    ctx.fillText("Credits:",449,350);
                    ctx.fillText("Danny Le, Dino Jazvin, & Elisabeth Jewett",319,370);
                    ctx.fillText("Original characters and art.",319,390);

                    ctx.fillText("Please click the X in the corner when you are done.",319, 430);
                    ctx.fillStyle = "gray";
                    ctx.fillText("Alien Odyssey: Finding Lunar Rock -", 320, 50);
                    ctx.fillText("Based on a rumor that has been passed around,",320,70);
                    ctx.fillText("Lunar rock is located on a nearby planet.",320,90);
                    ctx.fillText("Lunar rock has great magic, and it helps you",320,110);
                    ctx.fillText("make a wish come true. Alien's wife is",320,130);
                    ctx.fillText("seriouslly ill and he wants to find Lunar",320,150);
                    ctx.fillText("rock to help her get better. Alien has flown",320,170);
                    ctx.fillText("to this planet to begin the search.",320,190);
                    ctx.fillText("After traveling a thousand years of light,",320,210);
                    ctx.fillText("he arrived on this planet.",320,230);
                    ctx.fillText("Using the arrow keys or ",320, 250);
                    ctx.fillText("WASD & spacebar, navigate",320,270);
                    ctx.fillText("the planets, shoot the enemies, gather coins",320,290);
                    ctx.fillText("and retrieve the Lunar rock to save Alien's wife.",320,310);
                    ctx.fillText("Credits:",450,350);
                    ctx.fillText("Danny Le, Dino Jazvin, & Elisabeth Jewett",320,370);
                    ctx.fillText("Original characters and art.",320,390);

                    ctx.fillText("Please click the X in the corner when you are done.",320, 430);
                }
            }
        }
    };

}
