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
        Zombie.prototype.update = function () {
            if (player.image.y > this.image.y) {
                this.image.y += this.dy;
            }
            else {
                this.image.y -= this.dy;
            }
            if (player.image.x > this.image.x) {
                this.image.x += this.dx;
            }
            else {
                this.image.x -= this.dx;
            }
            //if (this.image.x < -this.width) {
            //    this.reset();
            //}
        };
        Zombie.prototype.reset = function () {
            this.image.x = this.stage.canvas.width + this.width;
            this.image.y = Math.floor(Math.random() * this.stage.canvas.height);
            this.dx = Math.random() * 0.9 + 0.1;
            this.dy = Math.random() * 0.9 + 0.1;
        };
        Zombie.prototype.destroy = function () {
            game.removeChild(this.image);
        };
        return Zombie;
    })();
    objects.Zombie = Zombie;
})(objects || (objects = {}));
//# sourceMappingURL=zombie.js.map