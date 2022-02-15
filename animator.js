class Animator {

	constructor(spritesheet, xStart, yStart, width, height, frameCount, frameDuration, framePadding, reverse, loop) {

		Object.assign(this, {spritesheet, xStart, yStart, width, height, frameCount, frameDuration, framePadding, reverse, loop});
		this.elapsedTime = 0;
		this.totalTime = this.frameCount * this.frameDuration;
	};

	drawFrame(tick, ctx, x, y) {

		this.elapsedTime += tick;
		if(this.elapsedTime > this.totalTime) this.elapsedTime -= this.totalTime;
		// const frame = this.currentFrame();

		let frame = this.currentFrame();
		// if(this.reverse)  frame = this.frameCount - frame -1;

		ctx.drawImage(this.spritesheet, 
			this.xStart + this.width*frame, this.yStart,
			this.width, this.height,
			x, y,
			this.width, this.height);

	};

	currentFrame() {
		return Math.floor(this.elapsedTime / this.frameDuration);
	}

	isDone() {
		return (this.elapsedTime >= this.totalTime);
	}
}
