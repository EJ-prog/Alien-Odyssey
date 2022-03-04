const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./lavaLandBackground.png");
ASSET_MANAGER.queueDownload("./landSquare.png");
ASSET_MANAGER.queueDownload("./landVertical.png");
ASSET_MANAGER.queueDownload("./landHorizontal.png");
ASSET_MANAGER.queueDownload("./diamond1.png");
ASSET_MANAGER.queueDownload("./diamond2.png");
ASSET_MANAGER.queueDownload("./diamond3.png");
ASSET_MANAGER.queueDownload("./diamond4.png");
ASSET_MANAGER.queueDownload("./stepShort.png");
ASSET_MANAGER.queueDownload("./stepMedium.png");
ASSET_MANAGER.queueDownload("./stepLarge.png");
ASSET_MANAGER.queueDownload("./lavaDrop.png");
ASSET_MANAGER.queueDownload("./lavaLand.png");
ASSET_MANAGER.queueDownload("./lavafish.png");





ASSET_MANAGER.downloadAll(() => { 
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	//addbackground
	gameEngine.addEntity(new lavaLand(gameEngine));
	gameEngine.addEntity(new lavafish(gameEngine));
	gameEngine.addEntity(new lavaDrop(gameEngine));
	gameEngine.addEntity(new background(gameEngine));
	
	
	
	gameEngine.init(ctx);

	gameEngine.start();
});
