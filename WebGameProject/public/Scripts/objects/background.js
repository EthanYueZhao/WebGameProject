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
            this.disX = constants.DISAPPEAR;
            game.addChild(this.image);
        }
        Background.prototype.update = function () {
            this.image.x -= this.dx;
            if (this.image.x <= -640) {
                this.reset();
            }
        };
        // level 3 two functions of double background
        Background.prototype.updateOnly = function () {
            this.image.x -= this.dx;
        };
        Background.prototype.resetOnly = function () {
            this.image.x = this.width - 20;
        };
        // reset the background to 0
        Background.prototype.reset = function () {
            this.image.x = 0;
        };
        // remove the image
        Background.prototype.destroy = function () {
            game.removeChild(this.image);
        };
        // move the double background
        Background.prototype.goAround = function () {
            this.image.x -= this.xBG;
            this.checkBG();
        };
        // check if the background is out of the screen
        Background.prototype.checkBG = function () {
            if (this.image.x < -(this.width - 640)) {
                this.xBG = -constants.BACKGROUND_STEP;
            }
            if (this.image.x > 0) {
                this.xBG = constants.BACKGROUND_STEP;
            }
        };
        // make the red color disappear
        Background.prototype.disappear = function () {
            if (this.image.alpha > 0) {
                this.image.alpha -= this.disX;
            }
        };
        // make the red appear again
        Background.prototype.resetAlpha = function () {
            this.image.alpha = 0.5;
        };
        return Background;
    })();
    objects.Background = Background;
})(objects || (objects = {}));
//# sourceMappingURL=background.js.map