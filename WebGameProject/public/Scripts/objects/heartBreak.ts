/// <reference path="../managers/asset.ts" />
module objects {
    // Cherry Class
    export class HeartBreak {
        image: createjs.Bitmap;
        stage: createjs.Stage;
        game: createjs.Container;
        height: number;
        width: number;
        dx: number;
        constructor(stage: createjs.Stage, game: createjs.Container) {
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
        // follow the player
        update() {
            this.image.x = player.image.x;
            this.image.y = player.image.y;
            this.disappear();
        }

        // make the heartBreak disappear
        disappear() {
            if (this.image.alpha > 0) {
                this.image.alpha -= this.dx;
            }
        }

        // make the heartBreak appear
        resetAlpha() {
            this.image.alpha = 0.5;
        }
    }

}