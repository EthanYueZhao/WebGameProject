var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/// <reference path="../constants.ts" />
/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    'use strict';
    var Button = (function (_super) {
        __extends(Button, _super);
        function Button(x, y, buttonIDString) {
            _super.call(this, managers.Assets.buttons, buttonIDString);
            this.regX = this.getBounds().width / 2;
            this.regY = this.getBounds().height / 2;
            this.x = x;
            this.y = y;
            this.setButtonListeners();
        }
        // set the button listeners
        Button.prototype.setButtonListeners = function () {
            this.cursor = 'pointer';
            this.on('rollover', this.onButtonOver);
            this.on('rollout', this.onButtonOut);
            this.on('mousedown', this.onButtonDown);
        };
        // mouse over 
        Button.prototype.onButtonOver = function () {
            this.alpha = 0.8;
            createjs.Sound.play("Select", { loop: 1 });
        };
        // mouse out
        Button.prototype.onButtonOut = function () {
            this.alpha = 1;
        };
        // click
        Button.prototype.onButtonDown = function () {
            this.alpha = 0.4;
            createjs.Sound.play("Click", { loop: 1 });
        };
        return Button;
    })(createjs.Sprite);
    objects.Button = Button;
})(objects || (objects = {}));
//# sourceMappingURL=button.js.map