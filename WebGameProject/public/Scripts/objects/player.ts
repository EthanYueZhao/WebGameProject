/// <reference path="../managers/asset.ts" />
'use strict'
module objects {
    // Player Class
    export class Player {
        image: createjs.Sprite;
        stage: createjs.Stage;
        game: createjs.Container;
        engineSound: createjs.SoundInstance;
        width: number;
        height: number;
        fightAble: boolean;
        countTime: number;
        constructor(stage: createjs.Stage, game: createjs.Container) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Sprite(managers.Assets.atlas, "player");
            this.image.x = 300;
            this.image.y = 430;
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            this.fightAble = false;
            this.countTime = 0;
            game.addChild(this.image);
            //this.engineSound = createjs.Sound.play('BackGroundMusic', createjs.Sound.INTERRUPT_NONE, 0, 0, -1, 1, 0);
        }


        update() {
            //this.image.x = this.stage.mouseX;
            //this.image.y = this.stage.mouseY;
            if (this.image.x <= 10) {
                this.image.x = 10
            } else {
                this.image.x -= constants.BACKGROUND_STEP;
            }
            if (this.countTime == 0) {
                scoreboard.label.color = "white";
            }
            else {
                this.countTime--;
            }
        }
        destroy() {
            //this.engineSound.stop();
            game.removeChild(this.image);
        }

        // check if the player has enough scores to fight
        checkFight() {
            if (scoreboard.score <= 0) {
                this.fightAble = false;
            }
            else {
                this.fightAble = true;
            }
        }

        // set the function of button
        move(e) {
            switch (e.keyCode) {
                case 37:
                    if (this.isMoveable(e.keyCode)) {
                        if (this.image.x <= 10) {
                            this.image.x = 10
                        } else {
                            this.image.x -= constants.PLAYER_STEP;
                            this.image.scaleX = -1; // make the player turn left
                        }
                    }
                    break;
                case 38:
                    if (this.isMoveable(e.keyCode)) {
                        if (this.image.y <= 32) {
                            this.image.y = 16
                        } else {
                            this.image.y -= constants.PLAYER_STEP;
                        }
                    }
                    break;
                case 39:
                    if (this.isMoveable(e.keyCode)) {
                        if (this.image.x >= 620) {
                            this.image.x = 620
                        } else {
                            this.image.x += constants.PLAYER_STEP;
                            this.image.scaleX = 1;  // make the player turn right
                        }
                    }
                    break;
                case 40:
                    if (this.isMoveable(e.keyCode)) {
                        if (this.image.y >= 448) {
                            this.image.y = 462
                        } else {
                            this.image.y += constants.PLAYER_STEP;
                        }
                    }
                    break;
                case 32:
                    if (this.fightAble) {
                        this.image.gotoAndPlay("fight");
                        scoreboard.score -= 20;
                    }
                    else {
                        scoreboard.label.color = "red";
                        this.countTime = 5;
                    }
                    break;
            }
        }

        // check if the player collides with the wall 
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

        // function of collision with walls
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