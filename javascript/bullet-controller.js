import Bullet from "./bullets.js";

export default class BulletController {
    bullets = [];
    timeTillNextBullet = 0;

    constructor (canvas) {
        this.canvas = canvas;

    }

    shoot(x, y, speed, damage, delay) {
        if (this.timeTillNextBullet <= 0) {
            this.bullets.push(new Bullet(y, x, speed, damage)); 
            this.timeTillNextBullet = delay;
        }

        this.timeTillNextBullet--;
    };
    draw(ctx) {
        this.bullets.forEach((bullet) => {
            if (this.isBulletOffScreen(bullet)) {
                const index = this.bullets.indexOf(bullet);
                this.bullets.splice(index,1);
            }
            bullet.draw(ctx);
        })
    }

    collideWith(sprite) {
        return this.bullets.some(bullet=>{
            if (bullet.collideWith(sprite)) {
                this.bullets.splice(this.bullets.indexOf(bullet), 1); 
                return true;
            }
            return false;
        })
    }
    isBulletOffScreen(bullet) {
        return bullet.y <= -bullet.height;
    }
}