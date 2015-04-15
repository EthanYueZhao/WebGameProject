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

        // update the position of zombies with AI
        update() {
            if (player.image.y > this.image.y) {
                if (this.isMoveable(40)) {
                    this.image.y += this.dy;
                }
            }
            if (player.image.y < this.image.y) {
                if (this.isMoveable(38)) {
                    this.image.y -= this.dy;
                }
            }

            if (player.image.x > this.image.x) {
                if (this.isMoveable(39)) {
                    this.image.x += this.dx;
                    this.image.scaleX = -1;
                }
            }
            if (player.image.x < this.image.x) {
                if (this.isMoveable(37)) {
                    this.image.x -= this.dx;
                    this.image.scaleX = 1;
                }
            }

           
            //if (this.image.x < -this.width) {
            //    this.reset();
            //}
        }

        // reset the zombies
        reset() {
            this.image.x = this.stage.canvas.width + this.width;
            this.image.y = Math.floor(Math.random() * this.stage.canvas.height);
            this.dx = Math.random() * 0.9 + 0.5;
            this.dy = Math.random() * 0.9 + 0.5;
        }

        // remove the zombies
        destroy() {
            game.removeChild(this.image);
        }

        // check if the zombies collide with the wall 
        private isMoveable(key: number) {
            if (walls.length === 0) {
                return true;
            } else {
                var result: boolean;

                switch (key) {
                    case 37:
                        result = !this.collisionWithWalls(this.image.x - 16, this.image.y);
                        break;
                    case 38:
                        result = !this.collisionWithWalls(this.image.x, this.image.y - 16);
                        break;
                    case 39:
                        result = !this.collisionWithWalls(this.image.x + 16, this.image.y);
                        break;
                    case 40:
                        result = !this.collisionWithWalls(this.image.x, this.image.y + 16);
                        break;
                }
                return result;
            }

        }

        // function of collision with the walls
        private collisionWithWalls(x: number, y: number) {
            var result: boolean;
            for (var i = 0, j = walls.length; i < j; i++) {
                var p1: createjs.Point = new createjs.Point();
                var p2: createjs.Point = new createjs.Point();
                p1.x = x;
                p1.y = y;
                p2.x = walls[i].image.x;
                p2.y = walls[i].image.y;
                if (this.distance(p1, p2) < ((this.height / 2) + (walls[i].height / 2))) {
                    result = true;
                    break;
                }
            }
            return result;
        }

        // Utility method - Distance calculation between two points
        private distance(p1: createjs.Point, p2: createjs.Point): number {
            var result: number = 0;
            var xPoints: number = 0;
            var yPoints: number = 0;

            xPoints = p2.x - p1.x;
            xPoints = xPoints * xPoints;

            yPoints = p2.y - p1.y;
            yPoints = yPoints * yPoints;

            result = Math.sqrt(xPoints + yPoints);

            return result;
        }
    }

}