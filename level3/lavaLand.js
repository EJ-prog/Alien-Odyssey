class lavaLand{
    constructor(game){
        this.game = game;
        this.lavaFloor = ASSET_MANAGER.getAsset("./Level3/lavaLand.png");
        this.x =-100;
        this.y=520;
        this.width = 960;
        this.height = 200;
        this.speed = 160;
        this.updateBB();

    };
    
    updateBB(){ 
        this.lastBB = this.BB;
        this.BB = new BoundingBox(this.x + 100, this.y, this.width  , this.height);
    };

    update(){
        var that = this;
        that.updateBB();
        
    };

    draw(ctx){
        ctx.strokeRect(this.BB.x, this.BB.y, this.BB.width, this.BB.height);
        ctx.drawImage(this.lavaFloor, 0,300);
       
       
       
    };
};