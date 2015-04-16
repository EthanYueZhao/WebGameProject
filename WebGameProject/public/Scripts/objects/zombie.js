/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    // Zombie class
    var Zombie = (function () {
        function Zombie(stage, game, kind) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Sprite(managers.Assets.atlas, kind);
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            this.reset();
            game.addChild(this.image);
        }
        // update the position of zombies with AI
        Zombie.prototype.update = function () {
            if (player.image.y > this.image.y) {
                if (this.isMoveable(40)) {
                    this.image.y += this.dy;
                }
            }
            if (player.image.y < this.image.y) {
                if (this.isMoveable(38)) {
                    this.image.y -= this.dy;
                }
            }
            if (player.image.x > this.image.x) {
                if (this.isMoveable(39)) {
                    this.image.x += this.dx;
                    this.image.scaleX = -1;
                }
            }
            if (player.image.x < this.image.x) {
                if (this.isMoveable(37)) {
                    this.image.x -= this.dx;
                    this.image.scaleX = 1;
                }
            }
            //if (this.image.x < -this.width) {
            //    this.reset();
            //}
        };
        // reset the zombies
        Zombie.prototype.reset = function () {
            this.image.x = this.stage.canvas.width + this.width;
            this.image.y = Math.floor(Math.random() * this.stage.canvas.height);
            this.dx = Math.random() * 0.9 + 0.5;
            this.dy = Math.random() * 0.9 + 0.5;
        };
        // remove the zombies
        Zombie.prototype.destroy = function () {
            game.removeChild(this.image);
        };
        // check if the zombies collide with the wall 
        Zombie.prototype.isMoveable = function (key) {
            if (walls.length === 0) {
                return true;
            }
            else {
                var result;
                switch (key) {
                    case 37:
                        result = !this.collisionWithWalls(this.image.x - 16, this.image.y);
                        break;
                    case 38:
                        result = !this.collisionWithWalls(this.image.x, this.image.y - 16);
                        break;
                    case 39:
                        result = !this.collisionWithWalls(this.image.x + 16, this.image.y);
                        break;
                    case 40:
                        result = !this.collisionWithWalls(this.image.x, this.image.y + 16);
                        break;
                }
                return result;
            }
        };
        // function of collision with the walls
        Zombie.prototype.collisionWithWalls = function (x, y) {
            var result;
            for (var i = 0, j = walls.length; i < j; i++) {
                var p1 = new createjs.Point();
                var p2 = new createjs.Point();
                p1.x = x;
                p1.y = y;
                p2.x = walls[i].image.x;
                p2.y = walls[i].image.y;
                if (this.distance(p1, p2) < ((this.height / 2) + (walls[i].height / 2))) {
                    result = true;
                    break;
                }
            }
            return result;
        };
        // Utility method - Distance calculation between two points
        Zombie.prototype.distance = function (p1, p2) {
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
        return Zombie;
    })();
    objects.Zombie = Zombie;
})(objects || (objects = {}));
//# sourceMappingURL=zombie.js.map