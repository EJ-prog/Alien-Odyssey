class background{
    constructor(game){
        this.game = game;
        this.background = ASSET_MANAGER.getAsset("./Sprites_and_Assets/LavaLandBackground.png");
        this.landSquare = ASSET_MANAGER.getAsset("./Sprites_and_Assets/landSquare.png");
        this.landHorizontal = ASSET_MANAGER.getAsset("./Sprites_and_Assets/landHorizontal.png");
        this.landVertical = ASSET_MANAGER.getAsset("./Sprites_and_Assets/landVertical.png");

        this.diamond1 = ASSET_MANAGER.getAsset("./Sprites_and_Assets/diamond1.png");
        this.diamond2 = ASSET_MANAGER.getAsset("./Sprites_and_Assets/diamond2.png");
        this.diamond3 = ASSET_MANAGER.getAsset("./Sprites_and_Assets/diamond3.png");
        this.diamond4 = ASSET_MANAGER.getAsset("./Sprites_and_Assets/diamond4.png");
        
        this.stepShort = ASSET_MANAGER.getAsset("./Sprites_and_Assets/stepShort.png");
        this.stepMedium = ASSET_MANAGER.getAsset("./Sprites_and_Assets/stepMedium.png");
        this.stepLarge = ASSET_MANAGER.getAsset("./Sprites_and_Assets/stepLarge.png");
        this.lavaFloor = ASSET_MANAGER.getAsset("./Sprites_and_Assets/LavaLandLava.png");


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
        //ctx.drawImage(this.lavaFloor, 0,300);
       
       
       
    };
}


    class LunarRockPiece2 {
        constructor(game, x, y) {
            this.game = game;
            this.x = x;
            this.y = y;
            this.environment = ASSET_MANAGER.getAsset("./Sprites_and_Assets/LunarRockPiece2.png");
            this.BB = new BoundingBox(this.x + 5, this.y, 34, 30);
            // this.x1 = 220;
            // this.y1 = 245;
            //this.updateBB();
        };
    
        update() {
        };
    
    
        draw(ctx) {
            ctx.strokestyle = "Red";
           ctx.strokeRect(this.BB.x, this.BB.y, this.BB.width, this.BB.height);
           //ctx.drawImage(this.environment, TOP LEFT CORNER, 160, 100, 210, this.x, this.y, 100, 210);
            ctx.drawImage(this.environment, 1, 1, 40, 30, this.x, this.y, 40, 30);
    //        ctx.drawImage(this.spritesheet, 0, 0);
    
        };
                
}