/// <reference path="../constants.ts" />
/// <reference path="../managers/asset.ts" />
module objects {
    // Background Class
    export class Background {
        image: createjs.Bitmap;
        stage: createjs.Stage;
        game: createjs.Container;
        width: number;
        height: number;
        dx: number;
        disX: number;
        xBG: number;
        constructor(stage: createjs.Stage, game: createjs.Container, image: String) {
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

        update() {
            this.image.x -= this.dx;
            if (this.image.x <= -640) {
                this.reset();
            }
        }

        // level 3 two functions of double background
        updateOnly() {
            this.image.x -= this.dx;
        }

        resetOnly() {
            this.image.x = this.width - 20;
        }

        // reset the background to 0
        reset() {
            this.image.x = 0;
        }

        // remove the image
        destroy() {
            game.removeChild(this.image);
        }

        // move the double background
        goAround() {
            this.image.x -= this.xBG;
            this.checkBG();
        }

        // check if the background is out of the screen
        checkBG() {
            if (this.image.x < -(this.width - 640)) {
                this.xBG = -constants.BACKGROUND_STEP;
            }
            if (this.image.x > 0) {
                this.xBG = constants.BACKGROUND_STEP;
            }
        }

        // make the red color disappear
        disappear() {
            if (this.image.alpha > 0) {
                this.image.alpha -= this.disX;
            }
        }

        // make the red appear again
        resetAlpha() {
            this.image.alpha = 0.5;
        }
    }

}