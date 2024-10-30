export default class Enemy {
    constructor(x,y,health) {
        this.x = x;
        this.y = y;
        this.health = health;
        this.width = 75;
        this.height = 75;
    }

    draw(ctx, image) {
        ctx.drawImage(image, this.x, this.y, this.width, this.height);
        // ctx.fillStyle = 'black';
        // ctx.font = "25px Arial";
        // ctx.fillText(this.health, this.x+this.width/3.5, this.y+this.height /1.5)
    }

    takeDamage(damage) {
        this.health -= damage;
    }
}