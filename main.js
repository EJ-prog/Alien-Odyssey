const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

// //LEVEL 1 ENTITIES
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/MetalDesertRock.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/MetalDesertPath.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/MetalDesertBackgroundMountains.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/MetalDesertBackground.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/MetalDesertEnvironment.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/MonsterForestEnvironment.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/MonsterForestEnvironment2.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/Scorpion.png");

// //LEVEL 2 ENTITIES
// ASSET_MANAGER.queueDownload("./Sprites_and_Assets/AcidMeadowsEnvironment.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/AcidMeadowsHills.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/AcidMeadowsBackground.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/ant.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/path.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/clouds1.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/clouds2.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/rain.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/puddles1.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/puddles2.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/puddles3.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/puddles4.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/puddles5.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/mushroom1.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/mushroom2.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/planets.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/AcidMeadowsMushroomRaindrops.png");

// //LEVEL 3 ENTITIES
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/LavaLandBackground.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/LavaLandEnvironment.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/LavaLandLava.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/landHorizontal.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/landVertical.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/landSquare.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/diamond1.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/diamond2.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/diamond3.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/diamond4.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/stepShort.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/stepMedium.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/MBridgeAnimation.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/stepLarge.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/LavaLandLava.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/lavafish.png");

// //LEVEL 4 ENTITIES
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/sun.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/bush1.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/bush2.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/bush3.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/cloud1.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/cloud2.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/cloud3.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/cloud4.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/cloud5.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/cloud6.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/cloud7.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/cloud8.png");
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
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/character-sprites-player-alien-R.png");
// ASSET_MANAGER.queueDownload("./Sprites_and_Assets/character-sprites-player-alien-L.png");
// ASSET_MANAGER.queueDownload("./Sprites_and_Assets/Health_Ammo_Creatures.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/LunarRockPiece1.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/LunarRockPiece2.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/LunarRockPiece3.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/LunarRockPiece4.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/LaserFire.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/coin.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/Health-and-Ammo.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/Health-and-Ammo-packs.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/AdditionalAssets_StartMenu_Selected.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/AdditionalAssets_StartMenu.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/titlescreen.png");

ASSET_MANAGER.downloadAll(() => {
	// PARAMS.BLOCKWIDTH = PARAMS.BITWIDTH * PARAMS.SCALE;
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	ctx.imageSmoothingEnabled = false;

	gameEngine.init(ctx);

	// gameEngine.addEntity(new Alien(gameEngine));
	gameEngine.addEntity(new SceneManager(gameEngine));

	gameEngine.start();
});
