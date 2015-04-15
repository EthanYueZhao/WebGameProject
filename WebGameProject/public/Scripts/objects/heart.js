/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    // Cherry Class
    var Heart = (function () {
        function Heart(stage, game) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Bitmap(managers.Assets.loader.getResult("heart"));
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            this.dx = 3;
            game.addChild(this.image);
        }
        // reset the heart position
        Heart.prototype.reset = function (pos) {
            this.image.y = 30;
            this.image.x = pos * 50 + 40;
            game.addChild(this.image);
        };
        // remove the heart
        Heart.prototype.destroy = function () {
            game.removeChild(this.image);
        };
        return Heart;
    })();
    objects.Heart = Heart;
})(objects || (objects = {}));
//# sourceMappingURL=heart.js.map