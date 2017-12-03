class Player extends Entity {
    constructor() {
        super();
        this.killed = [];
        this.score = 0;
        this.scoren = 0;
        this.move_x = 0;
        this.move_y = 0;
        this.speed = 10;
        this.number = 0;
    }

    draw(ctx) {
        spriteManager.drawSprite(ctx, "smileSmall" + this.number, this.pos_x, this.pos_y);
        this.number = this.number + 1;
        if (this.number > 3) {
            this.number = 0;
        }
    }

    update() {
        physicManager.update(this);
    }

    onTouchEntity(obj) {
        if (obj.name.match(/star[\d]/)){
            let audio = new Audio();
            audio.src = 'sound/2.wav';
            audio.autoplay = true;
            this.score++;
            Player.killed.push(obj);
            obj.kill();
        }
        if (obj.name.match(/bonuss[\d]/)){
            let sc = this.scoren;
            this.scoren = sc - 1;
            obj.kill();
        }

    }

    kill() {

    }

    fire() {
        let audio = new Audio();
        audio.src = 'sound/1.wav';
        audio.autoplay = true;
        let r = Object.create(GreenBonus);
        r.size_x = 32;
        r.size_y = 32;
        r.name = "greenbonus" + (++gameManager.fireNum);
        r.move_x = this.move_x;
        r.move_y = this.move_y;
        switch (this.move_x + 2 * this.move_y){
            case -1:
                r.pos_x = this.pos_x - r.size_x;
                r.pos_y = this.pos_y;
                break;
            case 1:
                r.pos_x = this.pos_x + this.size_x;
                r.pos_y = this.pos_y;
                break;
            case -2:
                r.pos_x = this.pos_x;
                r.pos_y = this.pos_y - r.size_y;
                break;
            case 2:
                r.pos_x = this.pos_x;
                r.pos_y = this.pos_y + this.size_y;
                break;
            default: return;
        }
        gameManager.entities.push(r);
    }
}