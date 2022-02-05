const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./Sprites_and_Assets/AcidMeadowsBackground.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/AcidMeadowsClouds.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/AcidMeadowsEnvironment.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/AdditionalAssets.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/character-sprites-player-alien-R.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/Health_Ammo_Creatures.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/LavaLandBackground.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/LavaLandEnvironment.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/LavaLandLava.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/MetalDesertBackground.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/MetalDesertBackgroundMountains.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/MetalDesertEnvironment.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/MetalDesertRock.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/MonsterForestEnvironment.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/MonsterForestEnvironment2.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/MonsterForestHills.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/Scorpion.png");

ASSET_MANAGER.downloadAll(() => {
	// PARAMS.BLOCKWIDTH = PARAMS.BITWIDTH * PARAMS.SCALE;
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	ctx.imageSmoothingEnabled = false;

	//gameEngine.addEntity(new Scorpion(gameEngine));
	gameEngine.addEntity(new alien(gameEngine));
	gameEngine.addEntity(new MetalDesert(gameEngine));
    
	gameEngine.init(ctx);

	gameEngine.start();
});
