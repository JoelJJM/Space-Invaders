import Player from "./player.js";
import Enemy from "./enemy.js";
import BulletController from "./bullet-controller.js";

const canvas = document.querySelector('.game-canvas');
const ctx = canvas.getContext("2d");

const bulletController = new BulletController(canvas);
const player = new Player(canvas.height,canvas.width/2, bulletController);

const imageChar = new Image()
imageChar.src = "../resources/images/space-cannon.png";
const imageEnem = new Image()
imageEnem.src = "../resources/images/enemy.webp";

const enemies = [];
let startingPos = [100,100];

for (let i = 0; i <= 10; i++) {
    const randomValue = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    enemies.push(new Enemy(startingPos[0], startingPos[1], randomValue));
    startingPos[0] += 250;
}

function gameLoop() {
    ctx.fillStyle = "black";
    ctx.fillRect(0,0,canvas.width, canvas.height);

    bulletController.draw(ctx);
    player.draw(ctx, imageChar);

    
    enemies.forEach(enemy => {
        if(bulletController.collideWith(enemy)) {
            if(enemy.health <= 0) {
                enemies.splice(enemies.indexOf(enemy),1); 
            }
        } else {
            enemy.draw(ctx,imageEnem);
        }
    });
}

setInterval(gameLoop, 1000 / 60);
