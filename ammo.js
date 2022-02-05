class Ammo {
    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./Sprites_and_Assets/Health-and-Ammo.png"), 10, 0, 50, 65, 12, 0.062);
        this.BB = new BoundingBox(400, 160, 50, 65);
        //this.x = 600;
        //this.y = 365;
        //this.speed = 70;

        //("./Sprites_and_Assets/Health-and-Ammo-packs.png")
    };

    update(){
        
    };

    draw(ctx){
        this.animator.drawFrame(this.game.clockTick, ctx, 400, 160);
    };
}