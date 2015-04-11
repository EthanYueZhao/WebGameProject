/// <reference path="../managers/asset.ts" />
module objects {
    // Cherry Class
    export class Heart {
        image: createjs.Bitmap;
        stage: createjs.Stage;
        game: createjs.Container;
        height: number;
        width: number;
        dx: number;
        constructor(stage: createjs.Stage, game: createjs.Container) {
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

        reset(pos: number) {
            this.image.y = 30;
            this.image.x = pos * 50 + 40;
            game.addChild(this.image);
        }

        destroy() {
            game.removeChild(this.image);
        }
    }

}