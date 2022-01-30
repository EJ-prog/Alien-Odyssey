const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

// //LEVEL 1 ENTITIES
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/MetalDesertBackground.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/MetalDesertEnvironment.png");

// //LEVEL 2 ENTITIES
// ASSET_MANAGER.queueDownload("./Sprites_and_Assets/AcidMeadowsEnvironment.png");
// ASSET_MANAGER.queueDownload("./Sprites_and_Assets/AcidMeadowsBackground.png");
// ASSET_MANAGER.queueDownload("./Sprites_and_Assets/ant.png");
// ASSET_MANAGER.queueDownload("./Sprites_and_Assets/path.png");
// ASSET_MANAGER.queueDownload("./Sprites_and_Assets/clouds1.png");
// ASSET_MANAGER.queueDownload("./Sprites_and_Assets/clouds2.png");
// ASSET_MANAGER.queueDownload("./Sprites_and_Assets/rain.png");
// ASSET_MANAGER.queueDownload("./Sprites_and_Assets/puddles1.png");
// ASSET_MANAGER.queueDownload("./Sprites_and_Assets/puddles2.png");
// ASSET_MANAGER.queueDownload("./Sprites_and_Assets/puddles3.png");
// ASSET_MANAGER.queueDownload("./Sprites_and_Assets/puddles4.png");
// ASSET_MANAGER.queueDownload("./Sprites_and_Assets/puddles5.png");
// ASSET_MANAGER.queueDownload("./Sprites_and_Assets/mushroom1.png");
// ASSET_MANAGER.queueDownload("./Sprites_and_Assets/mushroom2.png");
// ASSET_MANAGER.queueDownload("./Sprites_and_Assets/planets.png");

// //LEVEL 3 ENTITIES
// ASSET_MANAGER.queueDownload("./Sprites_and_Assets/LavaLandBackground.png");
// ASSET_MANAGER.queueDownload("./Sprites_and_Assets/LavaLandEnvironment.png");
// ASSET_MANAGER.queueDownload("./Sprites_and_Assets/LavaLandLava.png");

// //LEVEL 4 ENTITIES
// ASSET_MANAGER.queueDownload("./Sprites_and_Assets/sun.png");
// ASSET_MANAGER.queueDownload("./Sprites_and_Assets/bush1.png");
// ASSET_MANAGER.queueDownload("./Sprites_and_Assets/bush2.png");
// ASSET_MANAGER.queueDownload("./Sprites_and_Assets/bush3.png");
// ASSET_MANAGER.queueDownload("./Sprites_and_Assets/cloud1.png");
// ASSET_MANAGER.queueDownload("./Sprites_and_Assets/cloud2.png");
// ASSET_MANAGER.queueDownload("./Sprites_and_Assets/cloud3.png");
// ASSET_MANAGER.queueDownload("./Sprites_and_Assets/cloud4.png");
// ASSET_MANAGER.queueDownload("./Sprites_and_Assets/cloud5.png");
// ASSET_MANAGER.queueDownload("./Sprites_and_Assets/cloud6.png");
// ASSET_MANAGER.queueDownload("./Sprites_and_Assets/cloud7.png");
// ASSET_MANAGER.queueDownload("./Sprites_and_Assets/cloud8.png");
// ASSET_MANAGER.queueDownload("./Sprites_and_Assets/MonsterForestEnvironment.png");
// ASSET_MANAGER.queueDownload("./Sprites_and_Assets/MonsterForestEnvironment2.png");
// ASSET_MANAGER.queueDownload("./Sprites_and_Assets/MonsterForestHills.png");
// ASSET_MANAGER.queueDownload("./Sprites_and_Assets/MonsterJump.png");
// ASSET_MANAGER.queueDownload("./Sprites_and_Assets/MonsterDeath.png");
// ASSET_MANAGER.queueDownload("./Sprites_and_Assets/MonsterWalk.png");
// ASSET_MANAGER.queueDownload("./Sprites_and_Assets/MonsterHealthBar.png");
// ASSET_MANAGER.queueDownload("./Sprites_and_Assets/LunarRock.png");

// //OTHER ENTITIES
// ASSET_MANAGER.queueDownload("./Sprites_and_Assets/AdditionalAssets.png");
// ASSET_MANAGER.queueDownload("./Sprites_and_Assets/character-sprites-player-alien-R.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/character-sprites-player-alien-L.png");
// ASSET_MANAGER.queueDownload("./Sprites_and_Assets/Health_Ammo_Creatures.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/AdditionalAssets_Coin.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/AdditionalAssets_StartMenu.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/titlescreen.png");

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	ctx.imageSmoothingEnabled = false;

	// gameEngine.addEntity(new TitleScreen(gameEngine));
	// gameEngine.addEntity(new MetalDesert(gameEngine));
	gameEngine.addEntity(new Alien(gameEngine));

	gameEngine.init(ctx);

	// gameEngine.addEntity(new SceneManager(gameEngine));

	gameEngine.start();
});
