class Bonus extends Entity{
    constructor() {
        super();
        this.zone_of_visibility = 200;
        this.speed = 20;
    }

    draw(ctx) {
        spriteManager.drawSprite(ctx, "bonus", this.pos_x, this.pos_y);
    }

    update() {
        if ((Math.abs(gameManager.player.pos_x - this.pos_x)
                + Math.abs(gameManager.player.pos_y - this.pos_y)
                < this.zone_of_visibility)) {
            //бонус убегает
            let move_x = (this.pos_x - gameManager.player.pos_x) / this.speed;
            let move_y = (this.pos_y - gameManager.player.pos_y) / this.speed;
            this.pos_x += move_x;
            this.pos_y += move_y;
            //взаимодейтсвие с границами
            if (this.pos_x <= 40 || this.pos_x >= 410) {
                this.pos_x -= move_x;
            }
            if (this.pos_y <= 40 || this.pos_y >= 430) {
                this.pos_y -= move_y;
            }
        }
    }

    kill() {
        gameManager.kill(this);
    }
}