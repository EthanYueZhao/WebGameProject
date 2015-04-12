/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    // Cherry Class
    var HeartBreak = (function () {
        function HeartBreak(stage, game) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Bitmap(managers.Assets.loader.getResult("heartBreak"));
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            this.image.alpha = 0;
            this.dx = constants.DISAPPEAR;
            game.addChild(this.image);
        }
        HeartBreak.prototype.update = function () {
            this.image.x = player.image.x;
            this.image.y = player.image.y;
            this.disappear();
        };
        HeartBreak.prototype.disappear = function () {
            if (this.image.alpha > 0) {
                this.image.alpha -= this.dx;
            }
        };
        HeartBreak.prototype.resetAlpha = function () {
            this.image.alpha = 0.5;
        };
        return HeartBreak;
    })();
    objects.HeartBreak = HeartBreak;
})(objects || (objects = {}));
//# sourceMappingURL=heartBreak.js.map