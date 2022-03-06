class Animator {

	constructor(spritesheet, xStart, yStart, width, height, frameCount, frameDuration) {

		Object.assign(this, {spritesheet, xStart, yStart, width, height, frameCount, frameDuration});
		this.elapsedTime = 0;
		this.totalTime = this.frameCount * this.frameDuration;
	};

	drawFrame(tick, ctx, x, y) {

		this.elapsedTime += tick;
		if(this.elapsedTime > this.totalTime) this.elapsedTime -= this.totalTime;
		// const frame = this.currentFrame();

		let frame = this.currentFrame();
		// if(this.reverse)  frame = this.frameCount - frame -1;
		// if (this.loop) {
			ctx.drawImage(this.spritesheet, 
				this.xStart + this.width*frame, this.yStart,
				this.width, this.height,
				x, y,
				this.width, this.height);
		// }
	};

	drawFrame2(tick, ctx, x, y, scaleW, scaleH) {

		this.elapsedTime += tick;
		if(this.elapsedTime > this.totalTime) this.elapsedTime -= this.totalTime;
		// const frame = this.currentFrame();

		let frame = this.currentFrame();
		// if(this.reverse)  frame = this.frameCount - frame -1;
		// if (this.loop) {
			ctx.drawImage(this.spritesheet, 
				this.xStart + this.width*frame, this.yStart,
				this.width, this.height,
				x, y,
				scaleW, scaleH);
		// }
	};

	currentFrame() {
		return Math.floor(this.elapsedTime / this.frameDuration);
	};

	isDone() {
		return (this.elapsedTime >= this.totalTime);
	};
}
