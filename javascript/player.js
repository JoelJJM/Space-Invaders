export default class Player { 
    constructor(y, x, bulletController) {
        this.bulletController = bulletController
        this.x = x;
        this.y = y;
        this.width = 100;
        this.height = 100;
        this.speed = 10;

        //Accepting input and linking it to methods in our class.
        document.addEventListener('keydown', this.keydown);
        document.addEventListener('keyup', this.keyup);
    }



    //Function to be called to draw/redraw the character through the gameloop.
    draw(ctx,image) {
        this.action(ctx);
        ctx.drawImage(image, this.x, screen.availHeight, this.width, this.height);

        this.shoot();
    }



    shoot() {
        if(this.shootPressed) {
            const speed = 10;
            const delay = 20;
            const damage = 1;
            const bulletX = this.x + (this.width / 2);
            const bulletY = this.y
            this.bulletController.shoot(bulletX, bulletY,  speed, damage, delay);
        }
    }



    //Controls character data based on conditions
    action(ctx) {
        if (this.left === true) {
            this.x -= this.speed;   
        }
        if (this.right === true) {
            this.x += this.speed;
        }
    }
    //Called when a keydown event is detected and filters out unwanted keys and changes perameters based on input
    keydown = (e) => {
        switch (e.code) {
            case 'KeyA':
                this.left = true;
                break;
            case 'ArrowLeft':
                this.left = true;
                break;
            case 'KeyD':
                this.right = true;
                break;false
            case 'ArrowRight':
                this.right = true;
                break;
            case 'Space':
                this.shootPressed = true;
                break;
        }
    }
    //Called when a keyup event is detected and reverses the actions of the keydown function
    keyup = (e) => {
        switch (e.code) {
            case 'KeyA':
                this.left = false;
                break;
            case 'ArrowLeft':
                this.left = false;
                break;
            case 'KeyD':
                this.right = false;
                break;
            case 'ArrowRight':
                this.right = false;
                break;
            case 'Space':
                this.shootPressed = false;
                break;
        }
    }
}