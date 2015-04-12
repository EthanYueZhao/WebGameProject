/// <reference path="../constants.ts" />
/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    // Background Class
    var Background = (function () {
        function Background(stage, game, image) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Bitmap(managers.Assets.loader.getResult(image));
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.reset();
            this.dx = constants.BACKGROUND_STEP;
            this.xBG = constants.BACKGROUND_STEP;
            game.addChild(this.image);
        }
        Background.prototype.update = function () {
            this.image.x -= this.dx;
            if (this.image.x <= -640) {
                this.reset();
            }
        };
        Background.prototype.updateOnly = function () {
            this.image.x -= this.dx;
        };
        Background.prototype.resetOnly = function () {
            this.image.x = this.width - 20;
        };
        Background.prototype.reset = function () {
            this.image.x = 0;
        };
        Background.prototype.destroy = function () {
            game.removeChild(this.image);
        };
        Background.prototype.goAround = function () {
            this.image.x -= this.xBG;
            this.checkBG();
        };
        Background.prototype.checkBG = function () {
            if (this.image.x < -(this.width - 640)) {
                this.xBG = -constants.BACKGROUND_STEP;
            }
            if (this.image.x > 0) {
                this.xBG = constants.BACKGROUND_STEP;
            }
        };
        return Background;
    })();
    objects.Background = Background;
})(objects || (objects = {}));
//# sourceMappingURL=background.js.map