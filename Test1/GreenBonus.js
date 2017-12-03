class GreenBonus extends Entity{
    constructor() {
        super();
        this.move_x = 0; this.move_y = 0;
        this.speed = 40;
    }

    draw(ctx) {
        spriteManager.drawSprite(ctx, "greenbonus", this.pos_x, this.pos_y);
    }

    update() {
        physicManager.update(this);
    }

    onTouchEntity(obj) {

        if (obj.name.match(/star[\d*]/)){
            let i = Player.killed.length-1;
            let newobj = Player.killed[i];
            gameManager.entities.push(newobj);
            obj.kill();
        }
        if (obj.name.match(/bonuss[\d*]/)){
            obj.kill();
        }
        this.kill();
    }

    onTouchMap(idx) {
        this.kill();
    }

    kill() {
        gameManager.kill(this);
    }
}