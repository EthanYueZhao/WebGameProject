/// <reference path="../objects/zombie.ts" />
/// <reference path="../objects/food.ts" />
/// <reference path="../objects/player.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../objects/heartBreak.ts" />
/// <reference path="../objects/heart.ts" />
var managers;
(function (managers) {
    // Collision Manager Class
    var Collision = (function () {
        function Collision(player, food, clouds, scoreboard) {
            this.clouds = [];
            this.player = player;
            this.food = food;
            this.clouds = clouds;
            this.scoreboard = scoreboard;
        }
        // Utility method - Distance calculation between two points
        Collision.prototype.distance = function (p1, p2) {
            var result = 0;
            var xPoints = 0;
            var yPoints = 0;
            xPoints = p2.x - p1.x;
            xPoints = xPoints * xPoints;
            yPoints = p2.y - p1.y;
            yPoints = yPoints * yPoints;
            result = Math.sqrt(xPoints + yPoints);
            return result;
        };
        // check collision between plane and any cloud object
        Collision.prototype.playerAndZumbie = function (zombie) {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
            p1.x = this.player.image.x;
            p1.y = this.player.image.y;
            p2.x = zombie.image.x;
            p2.y = zombie.image.y;
            if (this.distance(p1, p2) < ((this.player.height / 2) + (zombie.height / 2))) {
                if (this.player.image.currentAnimation === "fight") {
                    this.scoreboard.score += 500;
                }
                else {
                    this.loseLife();
                }
                zombie.reset();
            }
        };
        // check collision between plane and island
        Collision.prototype.playerAndFood = function () {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
            p1.x = this.player.image.x;
            p1.y = this.player.image.y;
            p2.x = this.food.image.x;
            p2.y = this.food.image.y;
            if (this.distance(p1, p2) < ((this.player.height / 2) + (this.food.height / 2))) {
                createjs.Sound.play("Pickup");
                this.scoreboard.score += 100;
                this.food.reset();
            }
        };
        // Utility Function to Check Collisions
        Collision.prototype.update = function () {
            for (var count = 0; count < constants.ZOMBIE_NUM; count++) {
                this.playerAndZumbie(this.clouds[count]);
            }
            this.playerAndFood();
        };
        Collision.prototype.loseLife = function () {
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
        };
        return Collision;
    })();
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map