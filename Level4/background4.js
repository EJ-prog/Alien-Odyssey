class background4{
    constructor(game){
        this.game = game;
        this.background = ASSET_MANAGER.getAsset("./Level4/background/background.png");
        this.ground = ASSET_MANAGER.getAsset("./Level4/background/ground.png");
        this.hill = ASSET_MANAGER.getAsset("./Level4/background/hill.png");

        this.tree1 = ASSET_MANAGER.getAsset("./Level4/background/tree1.png");
        this.tree2 = ASSET_MANAGER.getAsset("./Level4/background/tree2.png");

        this.cloud1 = ASSET_MANAGER.getAsset("./Level4/background/cloud1.png");
        this.cloud2 = ASSET_MANAGER.getAsset("./Level4/background/cloud2.png");
        this.cloud3 = ASSET_MANAGER.getAsset("./Level4/background/cloud3.png");
        this.cloud4 = ASSET_MANAGER.getAsset("./Level4/background/cloud4.png");
        this.cloud5 = ASSET_MANAGER.getAsset("./Level4/background/cloud5.png");
        this.cloud6 = ASSET_MANAGER.getAsset("./Level4/background/cloud6.png");
        this.cloud7 = ASSET_MANAGER.getAsset("./Level4/background/cloud7.png");
        this.cloud8 = ASSET_MANAGER.getAsset("./Level4/background/cloud8.png");
       
       
        this.bushSmall = ASSET_MANAGER.getAsset("./Level4/background/bushSmall.png");
        this.bushMedium = ASSET_MANAGER.getAsset("./Level4/background/bushMedium.png");
        this.bushLarge = ASSET_MANAGER.getAsset("./Level4/background/bushLarge.png");
        this.moon = ASSET_MANAGER.getAsset("./Level4/background/moon.png");


    };

    update(){
        
    };

    draw(ctx){
        ctx.drawImage(this.background,0,0); 
        ctx.drawImage(this.ground, 0, 450);
        ctx.drawImage(this.moon, 450, 5);
        ctx.drawImage(this.hill,0, -120);
        ctx.drawImage(this.cloud3, 370, 80);
        ctx.drawImage(this.cloud4, 750, 10);
        ctx.drawImage(this.bushMedium, 650, 387);
        ctx.drawImage(this.tree2, 720, 147);

        ctx.drawImage(this.bushLarge, -150, 368);
        ctx.drawImage(this.tree1, 50, 90);
        ctx.drawImage(this.bushSmall, 270, 378);
        // ctx.drawImage(this.landSquare,-120,380);
        // ctx.drawImage(this.diamond4,-30,315);
        // ctx.drawImage(this.stepMedium, 150, 320);
        // ctx.drawImage(this.diamond1,125,210);
        // ctx.drawImage(this.stepShort, 275, 250);
        // ctx.drawImage(this.stepMedium, 390, 350);
        // ctx.drawImage(this.landVertical, 510, 430);
        // ctx.drawImage(this.diamond2, 520, 348);
        // ctx.drawImage(this.stepLarge ,640, 380);
        // ctx.drawImage(this.diamond1, 895, 275);
        // ctx.drawImage(this.diamond3, 680,305);
        // ctx.drawImage(this.lavaFloor, 0,300);
       
       
       
    };
};