class background{
    constructor(game){
        this.game = game;
        this.background = ASSET_MANAGER.getAsset("./Level3/lavaLandBackground.png");
        this.landHorizontal = ASSET_MANAGER.getAsset("./Level3/landHorizontal.png");
        this.landVertical = ASSET_MANAGER.getAsset("./Level3/landVertical.png");
        this.landSquare = ASSET_MANAGER.getAsset("./Level3/landSquare.png");
        this.diamond1 = ASSET_MANAGER.getAsset("./Level3/diamond1.png");
        this.diamond2 = ASSET_MANAGER.getAsset("./Level3/diamond2.png");
        this.diamond3 = ASSET_MANAGER.getAsset("./Level3/diamond3.png");
        this.diamond4 = ASSET_MANAGER.getAsset("./Level3/diamond4.png");
        this.stepShort = ASSET_MANAGER.getAsset("./Level3/stepShort.png");
        this.stepMedium = ASSET_MANAGER.getAsset("./Level3/stepMedium.png");
        this.stepLarge = ASSET_MANAGER.getAsset("./Level3/stepLarge.png");
        this.lavaFloor = ASSET_MANAGER.getAsset("./Level3/lavaLand.png");


    };

    update(){
        
    };

    draw(ctx){
        ctx.drawImage(this.background,0,0); 
        ctx.drawImage(this.landSquare,-120,380);
        ctx.drawImage(this.diamond4,-30,315);
        ctx.drawImage(this.stepMedium, 150, 320);
        ctx.drawImage(this.diamond1,125,210);
        ctx.drawImage(this.stepShort, 275, 250);
        ctx.drawImage(this.stepMedium, 390, 350);
        ctx.drawImage(this.landVertical, 510, 430);
        ctx.drawImage(this.diamond2, 520, 348);
        ctx.drawImage(this.stepLarge ,640, 380);
        ctx.drawImage(this.diamond1, 895, 275);
        ctx.drawImage(this.diamond3, 680,305);
        ctx.drawImage(this.lavaFloor, 0,300);
       
       
       
    };
};