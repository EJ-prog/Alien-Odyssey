const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./Sprites_and_Assets/MetalDesertBackground.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/MetalDesertBackgroundMountains.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/MetalDesertEnvironment.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/MetalDesertRock.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/LunarRockPiece1.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/Scorpion.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/LaserFire.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/coin.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/health.png");

//LEVEL 2 ENTITIES
// ASSET_MANAGER.queueDownload("./Sprites_and_Assets/AcidMeadowsBackground.png");
// ASSET_MANAGER.queueDownload("./Sprites_and_Assets/ant.png");
// ASSET_MANAGER.queueDownload("./Sprites_and_Assets/path.png");
// ASSET_MANAGER.queueDownload("./Sprites_and_Assets/clouds1.png");
// ASSET_MANAGER.queueDownload("./Sprites_and_Assets/rain.png");
// ASSET_MANAGER.queueDownload("./Sprites_and_Assets/puddles1.png");
// ASSET_MANAGER.queueDownload("./Sprites_and_Assets/puddles2.png");
// ASSET_MANAGER.queueDownload("./Sprites_and_Assets/puddles3.png");
// ASSET_MANAGER.queueDownload("./Sprites_and_Assets/puddles4.png");
// ASSET_MANAGER.queueDownload("./Sprites_and_Assets/puddles5.png");
// ASSET_MANAGER.queueDownload("./Sprites_and_Assets/clouds2.png");
// ASSET_MANAGER.queueDownload("./Sprites_and_Assets/mushroom1.png");
// ASSET_MANAGER.queueDownload("./Sprites_and_Assets/planets.png");
// ASSET_MANAGER.queueDownload("./Sprites_and_Assets/mushroom2.png");
// ASSET_MANAGER.queueDownload("./Sprites_and_Assets/LunarRockPiece2.png");


//LEVEL 3 ENTITIES
ASSET_MANAGER.queueDownload("./Level3/lavaLandBackground.png");
ASSET_MANAGER.queueDownload("./Level3/landSquare.png");
ASSET_MANAGER.queueDownload("./Level3/landVertical.png");
ASSET_MANAGER.queueDownload("./Level3/landHorizontal.png");
ASSET_MANAGER.queueDownload("./Level3/diamond1.png");
ASSET_MANAGER.queueDownload("./Level3/diamond2.png");
ASSET_MANAGER.queueDownload("./Level3/diamond3.png");
ASSET_MANAGER.queueDownload("./Level3/diamond4.png");
ASSET_MANAGER.queueDownload("./Level3/stepShort.png");
ASSET_MANAGER.queueDownload("./Level3/stepMedium.png");
ASSET_MANAGER.queueDownload("./Level3/stepLarge.png");
ASSET_MANAGER.queueDownload("./Level3/lavaDrop.png");
ASSET_MANAGER.queueDownload("./Level3/lavaLand.png");
ASSET_MANAGER.queueDownload("./Level3/lavafish.png");

//LEVEL 4 ENTITIES
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

//
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/AcidMeadowsEnvironment.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/AcidMeadowsBackground.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/AdditionalAssets.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/character-sprites-player-alien-R.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/Health_Ammo_Creatures.png");
// ASSET_MANAGER.queueDownload("./Sprites_and_Assets/LavaLandBackground.png");
// ASSET_MANAGER.queueDownload("./Sprites_and_Assets/LavaLandEnvironment.png");
// ASSET_MANAGER.queueDownload("./Sprites_and_Assets/LavaLandLava.png");

ASSET_MANAGER.queueDownload("./Sprites_and_Assets/MonsterForestEnvironment.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/MonsterForestEnvironment2.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/MonsterForestHills.png");
ASSET_MANAGER.queueDownload("./Sprites_and_Assets/title.png");


ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	ctx.imageSmoothingEnabled = false;


	gameEngine.addEntity(new health(gameEngine));
	// gameEngine.addEntity(new cactus2(gameEngine, 600, 245));
	// gameEngine.addEntity(new cactus1(gameEngine, 100, 245));
	// //gameEngine.addEntity(new LunarRockPiece1(gameEngine, 900, 245));
	// gameEngine.addEntity(new LunarRockPiece1(gameEngine, 100, 300));
	// gameEngine.addEntity(new cactus2(gameEngine, 800, 245));
	// gameEngine.addEntity(new Rock(gameEngine, 700 , 395));
	// gameEngine.addEntity(new Scorpion(gameEngine));
	gameEngine.addEntity(new Laser(gameEngine));
	gameEngine.addEntity(new alien(gameEngine));
	gameEngine.addEntity(new Coin(gameEngine));

	PARAMS.BLOCKWIDTH = PARAMS.BITWIDTH * PARAMS.SCALE;
	PARAMS.CANVAS_WIDTH = canvas.width;
	PARAMS.CANVAS_HEIGHT = canvas.height;

	//LEVEL 1
	// gameEngine.addEntity(new cactus2(gameEngine, 600, 245));
	// gameEngine.addEntity(new cactus1(gameEngine, 100, 245));
	// //gameEngine.addEntity(new LunarRockPiece1(gameEngine, 900, 245));
	// gameEngine.addEntity(new LunarRockPiece1(gameEngine, 100, 300));
	// gameEngine.addEntity(new cactus2(gameEngine, 800, 245));
	// gameEngine.addEntity(new Rock(gameEngine, 700 , 395));
	// gameEngine.addEntity(new Scorpion(gameEngine));
	// gameEngine.addEntity(new metaldesert(gameEngine));


	//LEVEL 2
	// gameEngine.addEntity(new path(gameEngine));
	// gameEngine.addEntity(new ant(gameEngine));
	// gameEngine.addEntity(new rain1(gameEngine));
	// gameEngine.addEntity(new LunarRockPiece2(gameEngine, 800, 245));
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
	// gameEngine.addEntity(new AcidMeadowsBackground(gameEngine));

	//LEVEL 3 entities
	gameEngine.addEntity(new lavaLand(gameEngine));
	gameEngine.addEntity(new lavafish(gameEngine));
	gameEngine.addEntity(new lavaDrop(gameEngine));
	gameEngine.addEntity(new background(gameEngine));
	

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

	
	



	
	ctx.imageSmoothingEnabled = false;

	// gameEngine.addEntity(new Alien(gameEngine));
//    gameEngine.addEntity(new MetalDesert(gameEngine));
  //  gameEngine.addEntity(new Scorpion(gameEngine));

	gameEngine.init(ctx);

	//new SceneManager(gameEngine);

	gameEngine.start();
});
