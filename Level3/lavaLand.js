class lavaLand{
    constructor(game){
        this.game = game;
        this.lavaFloor = ASSET_MANAGER.getAsset("./Level3/lavaLand.png");


    };

    update(){
        
    };

    draw(ctx){
        ctx.drawImage(this.lavaFloor, 0,300);
       
       
       
    };
};