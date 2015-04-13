/// <reference path="../objects/zombie.ts" />
/// <reference path="../objects/food.ts" />
/// <reference path="../objects/player.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../objects/heartBreak.ts" />
/// <reference path="../objects/heart.ts" />

module managers {
    // Collision Manager Class
    export class Collision {
        // class variables
        private player: objects.Player;
        private food: objects.Food;
        private clouds = [];
        private scoreboard: objects.Scoreboard;

        constructor(player: objects.Player, food: objects.Food, clouds, scoreboard: objects.Scoreboard) {
            this.player = player;
            this.food = food;
            this.clouds = clouds;
            this.scoreboard = scoreboard;
        }

        // Utility method - Distance calculation between two points
        private distance(p1: createjs.Point, p2: createjs.Point): number {
            var result: number = 0;
            var xPoints: number = 0;
            var yPoints: number = 0;

            xPoints = p2.x - p1.x;
            xPoints = xPoints * xPoints;

            yPoints = p2.y - p1.y;
            yPoints = yPoints * yPoints;

            result = Math.sqrt(xPoints + yPoints);

            return result;
        }

        // check collision between plane and any cloud object
        private playerAndZumbie(zombie: objects.Zombie) {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();
            p1.x = this.player.image.x;
            p1.y = this.player.image.y;
            p2.x = zombie.image.x;
            p2.y = zombie.image.y;
            if (this.distance(p1, p2) < ((this.player.height / 2) + (zombie.height / 2))) {
                if (this.player.image.currentAnimation === "fight") {
                    this.scoreboard.score += 500;
                } else {
                    this.loseLife();
                }

                zombie.reset();
            }
        }

        // check collision between plane and island
        private playerAndFood() {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();
            p1.x = this.player.image.x;
            p1.y = this.player.image.y;
            p2.x = this.food.image.x;
            p2.y = this.food.image.y;
            if (this.distance(p1, p2) < ((this.player.height / 2) + (this.food.height / 2))) {
                createjs.Sound.play("Pickup");
                this.scoreboard.score += 100;
                this.food.reset();
            }
        }

        // Utility Function to Check Collisions
        update() {
            for (var count = 0; count < constants.ZOMBIE_NUM; count++) {
                this.playerAndZumbie(this.clouds[count]);
            }
            this.playerAndFood();
        }

        // Effect of losing lives
        loseLife() {
            createjs.Sound.play("Crash");
            for (var pos = 0; pos < scoreboard.lives; pos++) {
                heart[pos].destroy();
            }
            this.scoreboard.lives -= 1;
            for (var pos = 0; pos < scoreboard.lives; pos++) {
                heart[pos].reset(pos);
            }
            heartBreak.resetAlpha();
            red.resetAlpha();
        }
    }
} 