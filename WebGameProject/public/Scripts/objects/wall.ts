/// <reference path="../managers/asset.ts" />
module objects {
    // Wall Class
    export class Wall {
        image: createjs.Sprite;
        stage: createjs.Stage;
        game: createjs.Container;
        height: number;
        width: number;
        dx: number;
        constructor(stage: createjs.Stage, game: createjs.Container) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Sprite(managers.Assets.atlas, "w" + Math.floor(Math.random() * 7 + 1));
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            this.reset();

            this.dx =constants.BACKGROUND_STEP;

            game.addChild(this.image);
        }

        // update the position of the walls
        update() {
            this.image.x -= this.dx;
            if (this.image.x < -this.width) {
                this.reset();
            }
        }

        // reset the position of the walls
        reset() {
            this.image.y = Math.floor(Math.random() * this.stage.canvas.height);
            this.image.x = Math.floor(Math.random() * this.stage.canvas.width + this.stage.canvas.width) + this.width;
        }

        // remove the walls
        destroy() {
            game.removeChild(this.image);
        }
    }

}