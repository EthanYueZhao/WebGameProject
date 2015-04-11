/// <reference path="../managers/asset.ts" />
module objects {
    // Zombie class
    export class Zombie {
        image: createjs.Sprite;
        stage: createjs.Stage;
        game: createjs.Container;
        width: number;
        height: number;
        dy: number;
        dx: number;
        constructor(stage: createjs.Stage, game: createjs.Container, kind: string) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Sprite(managers.Assets.atlas, kind);
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            this.reset();

            game.addChild(this.image);
        }

        update() {
            if (player.image.y > this.image.y) {
                this.image.y += this.dy;
            } else {
                this.image.y -= this.dy;
            }

            if (player.image.x > this.image.x) {
                this.image.x += this.dx;
            } else {
                this.image.x -= this.dx;
            }

           
            //if (this.image.x < -this.width) {
            //    this.reset();
            //}
        }

        reset() {
            this.image.x = this.stage.canvas.width + this.width;
            this.image.y = Math.floor(Math.random() * this.stage.canvas.height);
            this.dx = Math.random() * 0.9 + 0.1;
            this.dy = Math.random() * 0.9 + 0.1;
        }

        destroy() {
            game.removeChild(this.image);
        }
    }

}