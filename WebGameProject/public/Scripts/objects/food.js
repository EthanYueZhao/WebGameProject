/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    // Cherry Class
    var Food = (function () {
        function Food(stage, game, kind) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Sprite(managers.Assets.atlas, kind);
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            this.reset();
            this.dx = 3;
            game.addChild(this.image);
        }
        // move the food
        Food.prototype.update = function () {
            this.image.x -= this.dx;
            if (this.image.x < -this.width) {
                this.reset();
            }
        };
        // reset the position of the food
        Food.prototype.reset = function () {
            this.image.y = Math.floor(Math.random() * this.stage.canvas.height);
            this.image.x = this.stage.canvas.width + this.width;
        };
        // remove the food
        Food.prototype.destroy = function () {
            game.removeChild(this.image);
        };
        return Food;
    })();
    objects.Food = Food;
})(objects || (objects = {}));
//# sourceMappingURL=food.js.map