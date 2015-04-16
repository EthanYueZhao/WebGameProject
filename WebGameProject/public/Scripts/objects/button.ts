/// <reference path="../constants.ts" />
/// <reference path="../managers/asset.ts" />
module objects {
'use strict'
    export class Button extends createjs.Sprite {
        constructor(x:number, y:number, buttonIDString: string) {
            super(managers.Assets.buttons, buttonIDString);
            this.regX = this.getBounds().width / 2;
            this.regY = this.getBounds().height / 2;
            this.x = x;
            this.y = y;
            this.setButtonListeners();
        }

        // set the button listeners
        setButtonListeners() {
            this.cursor = 'pointer';
            this.on('rollover', this.onButtonOver);
            this.on('rollout', this.onButtonOut);
            this.on('mousedown', this.onButtonDown);
        }

        // mouse over 
        onButtonOver() {
            this.alpha = 0.8;
            createjs.Sound.play("Select", { loop: 1 });
        }

        // mouse out
        onButtonOut() {
            this.alpha = 1;
        }

        // click
        onButtonDown() {
            this.alpha = 0.4;
            createjs.Sound.play("Click", { loop: 1 });
        }
    }
} 