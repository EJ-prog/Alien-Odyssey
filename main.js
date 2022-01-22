const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./Sprites_and_Assets/character-sprites-player-alien-R.png");

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	ctx.imageSmoothingEnabled=false;

	gameEngine.addEntity(new Alien(gameEngine));

	gameEngine.init(ctx);

	gameEngine.start();
});
