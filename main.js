const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./sonic.png");
//ASSET_MANAGER.queueDownload("./MetalDesertBackground.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/AcidMeadowsBackground.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/AcidMeadowsEnvironment.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/AdditionalAssets.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/character-sprites-player-alien-R.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/Health_Ammo_Creatures.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/LavaLandBackground.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/LavaLandEnvironment.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/LavaLandLava.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/MetalDesertBackground.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/MetalDesertEnvironment.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/MonsterForestEnvironment.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/MonsterForestEnvironment2.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/MonsterForestHills.png");

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	ctx.imaageSmoothingEnabled = false;

	
	gameEngine.addEntity(new sonic(gameEngine));
	//gameEngine.addEntity(new MetalDesertBackground(gameEngine));
	gameEngine.addEntity(new back(gameEngine));
	
	ctx.imageSmoothingEnabled=false;

	// gameEngine.addEntity(new Alien(gameEngine));
    gameEngine.addEntity(new MetalDesert(gameEngine));
    gameEngine.addEntity(new Scorpion(gameEngine));

	gameEngine.init(ctx);

	gameEngine.start();
});
