/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    // Wall Class
    var Wall = (function () {
        function Wall(stage, game) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Sprite(managers.Assets.atlas, "w" + Math.floor(Math.random() * 7 + 1));
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            this.reset();
            this.dx = constants.BACKGROUND_STEP;
            game.addChild(this.image);
        }
        Wall.prototype.update = function () {
            this.image.x -= this.dx;
            if (this.image.x < -this.width) {
                this.reset();
            }
        };
        Wall.prototype.reset = function () {
            this.image.y = Math.floor(Math.random() * this.stage.canvas.height);
            this.image.x = Math.floor(Math.random() * this.stage.canvas.width + this.stage.canvas.width) + this.width;
        };
        Wall.prototype.destroy = function () {
            game.removeChild(this.image);
        };
        return Wall;
    })();
    objects.Wall = Wall;
})(objects || (objects = {}));
//# sourceMappingURL=wall.js.map