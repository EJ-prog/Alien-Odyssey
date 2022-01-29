const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

// //LEVEL 1 ENTITIES
// ASSET_MANAGER.queueDownload("./Sprites_and_Assets/MetalDesertBackground.png");
// ASSET_MANAGER.queueDownload("./Sprites_and_Assets/MetalDesertEnvironment.png");

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
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/MonsterForestEnvironment.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/MonsterForestEnvironment2.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/MonsterForestHills.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/MonsterJump.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/MonsterDeath.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/MonsterWalk.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/MonsterHealthBar.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/LunarRock.png");

// //OTHER ENTITIES
// ASSET_MANAGER.queueDownload("./Sprites_and_Assets/AdditionalAssets.png");
// ASSET_MANAGER.queueDownload("./Sprites_and_Assets/character-sprites-player-alien-R.png");
// ASSET_MANAGER.queueDownload("./Sprites_and_Assets/Health_Ammo_Creatures.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/AdditionalAsssets_Coin.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/AdditionalAsssets_StartMenu.png");
ASSET_MANAGER.queueDownload("./titlescreen.png");

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	ctx.imageSmoothingEnabled = false;

	gameEngine.addEntity(new TitleScreen(gameEngine));

	//LEVEL 1 ENTITIES

	//LEVEL 2 ENTITIES
	// gameEngine.addEntity(new AcidMeadowsBackground(gameEngine));
	// gameEngine.addEntity(new path(gameEngine));
	// gameEngine.addEntity(new ant(gameEngine));
	// gameEngine.addEntity(new rain1(gameEngine));
	// gameEngine.addEntity(new mushroom1(gameEngine));
	// gameEngine.addEntity(new mushroom2(gameEngine));
	// gameEngine.addEntity(new puddles1(gameEngine));
	// gameEngine.addEntity(new puddles2(gameEngine));
	// gameEngine.addEntity(new puddles3(gameEngine));
	// gameEngine.addEntity(new puddles4(gameEngine));
	// gameEngine.addEntity(new puddles5(gameEngine));
	// gameEngine.addEntity(new clouds1(gameEngine));
	// gameEngine.addEntity(new clouds2(gameEngine));
	// gameEngine.addEntity(new planets(gameEngine));

	//LEVEL 3 ENTITIES

	//LEVEL 4 entities
	// gameEngine.addEntity(new sun(gameEngine));
	// gameEngine.addEntity(new bush1(gameEngine));
	// gameEngine.addEntity(new bush2(gameEngine));
	// gameEngine.addEntity(new bush3(gameEngine));
	// gameEngine.addEntity(new cloud1(gameEngine));
	// gameEngine.addEntity(new cloud2(gameEngine));
	// gameEngine.addEntity(new cloud3(gameEngine));
	// gameEngine.addEntity(new cloud4(gameEngine));
	// gameEngine.addEntity(new cloud5(gameEngine));
	// gameEngine.addEntity(new cloud6(gameEngine));
	// gameEngine.addEntity(new cloud7(gameEngine));
	// gameEngine.addEntity(new cloud8(gameEngine));
	gameEngine.addEntity(new Monster(gameEngine));

		// gameEngine.addEntity(new Alien(gameEngine));
//    gameEngine.addEntity(new MetalDesert(gameEngine));
  //  gameEngine.addEntity(new Scorpion(gameEngine));
	//

	gameEngine.init(ctx);

	gameEngine.start();
});
