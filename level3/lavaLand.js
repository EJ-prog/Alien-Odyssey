class lavaLand{
    constructor(game){
        this.game = game;
        this.lavaFloor = ASSET_MANAGER.getAsset("./lavaLand.png");


    };

    update(){
        
    };

    draw(ctx){
        ctx.drawImage(this.lavaFloor, 0,300);
       
       
       
    };
};