/// <reference path="../constants.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../objects/player.ts" />
/// <reference path="../objects/background.ts" />
/// <reference path="../objects/food.ts" />
/// <reference path="../objects/zombie.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />
module states {
    'use strict'
    export function level_1_Clicked(event: MouseEvent) {
        stage.removeChild(game);
        player.destroy();
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.LEVEL_1_STATE;
        changeState(currentState);
    }

    export function level_2_Clicked(event: MouseEvent) {
        stage.removeChild(game);
        player.destroy();
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.LEVEL_2_STATE;
        changeState(currentState);
    }

    export function level_3_Clicked(event: MouseEvent) {
        stage.removeChild(game);
        player.destroy();
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.LEVEL_3_STATE;
        changeState(currentState);
    }

    export function level_1_Over(event: MouseEvent) {
        player.image.x = stage.canvas.width / 2 - level_1_Button.regX - player.width;
        player.image.y = level_1_Button.y;
    }

    export function level_2_Over(event: MouseEvent) {
        player.image.x = stage.canvas.width / 2 - level_2_Button.regX - player.width;
        player.image.y = level_2_Button.y;
    }

    export function level_3_Over(event: MouseEvent) {
        player.image.x = stage.canvas.width / 2 - level_3_Button.regX - player.width;
        player.image.y = level_3_Button.y;
    }

    export function levelState() {
        background.goAround();
        //player.update();
    }

    export function levelSelect() {
        var gameLevelLabel: objects.Label;

        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        background = new objects.Background(stage, game, "bgMenu");
        background.image.y = -50;
        player = new objects.Player(stage, game);

        // Show Cursor
        stage.cursor = "default";

        // Display Game Name
        gameLevelLabel = new objects.Label(stage.canvas.width / 2, 70, "Select The Difficulty");
        game.addChild(gameLevelLabel);

        // Display Play Again Button
        level_1_Button = new objects.Button(stage.canvas.width / 2, 170, "normalBtn");
        game.addChild(level_1_Button);
        level_1_Button.addEventListener("click", level_1_Clicked);
        level_1_Button.addEventListener("rollover", level_1_Over);

        // Display Instruction Button
        level_2_Button = new objects.Button(stage.canvas.width / 2, 270, "veteranBtn");
        game.addChild(level_2_Button);
        level_2_Button.addEventListener("click", level_2_Clicked);
        level_2_Button.addEventListener("rollover", level_2_Over);

        level_3_Button = new objects.Button(stage.canvas.width / 2, 370, "hellBtn");
        game.addChild(level_3_Button);
        level_3_Button.addEventListener("click", level_3_Clicked);
        level_3_Button.addEventListener("rollover", level_3_Over);

        player.image.x = stage.canvas.width / 2 - level_2_Button.regX - player.width;
        player.image.y = level_2_Button.y;

        stage.addChild(game);
    }
} 