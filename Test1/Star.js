class Star extends Entity{
    constructor() {
        super()
    }
    draw(ctx) {
        spriteManager.drawSprite(ctx, "star", this.pos_x, this.pos_y);
    }

    kill() {
        gameManager.kill(this);
    }
}
