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

        updateOnly() {
            this.image.x -= this.dx;
        }

        resetOnly() {
            this.image.x = this.width - 20;
        }

        reset() {
            this.image.x = 0;
        }

        destroy() {
            game.removeChild(this.image);
        }

        goAround() {
            this.image.x -= this.xBG;
            this.checkBG();
        }

        checkBG() {
            if (this.image.x < -(this.width - 640)) {
                this.xBG = -constants.BACKGROUND_STEP;
            }
            if (this.image.x > 0) {
                this.xBG = constants.BACKGROUND_STEP;
            }
        }

        disappear() {
            if (this.image.alpha > 0) {
                this.image.alpha -= this.disX;
            }
        }

        resetAlpha() {
            this.image.alpha = 0.5;
        }
    }

}