﻿/// <reference path="../constants.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/zombie.ts" />
/// <reference path="../objects/food.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/background.ts" />
/// <reference path="../objects/player.ts" />
/// <reference path="../objects/scoreboard.ts" />
module states {
    'use strict'
    export function gameOverState() {
        background.goAround();
        heartBreak.update();
        red.disappear();
    }

    // Restart Game when Try Again Button is clicked
    export function mainMenuClicked(event: MouseEvent) {
        stage.removeChild(game);
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.MENU_STATE;
        changeState(currentState);
    }

    // effect of mouseover
    export function menuButtonOver(event: MouseEvent) {
        player.image.x = stage.canvas.width / 2 - mainMenu.regX - player.width;
        player.image.y = mainMenu.y;
    }


    // Game Over Scene
    export function gameOver() {
        var gameOverLabel: objects.Label;
        var finalScoreLabel: objects.Label;
        var finalScore: objects.Label;

        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        background = new objects.Background(stage, game, "bgMenu");
        background.image.y = -50;
        player = new objects.Player(stage, game);

        // Show Cursor
        stage.cursor = "default";

        // Display Game Over
        gameOverLabel = new objects.Label(stage.canvas.width / 2, 40, "GAME OVER");
        game.addChild(gameOverLabel);

        // Display Final Score Label
        finalScoreLabel = new objects.Label(stage.canvas.width / 2, 120, "FINAL SCORE");
        game.addChild(finalScoreLabel);

        // Display Final Score
        finalScore = new objects.Label(stage.canvas.width / 2, 160, scoreboard.score.toString());
        game.addChild(finalScore);

        // Add menu button
        mainMenu = new objects.Button(stage.canvas.width / 2, 300, "mainmenuBtn");
        game.addChild(mainMenu);
        mainMenu.addEventListener("click", mainMenuClicked);
        mainMenu.addEventListener("rollover", menuButtonOver);

        // set the position of the player
        player.image.x = stage.canvas.width / 2 - mainMenu.regX - player.width;
        player.image.y = mainMenu.y;

        // add the red color
        red = new objects.Background(stage, game, "red");
        heartBreak = new objects.HeartBreak(stage, game);

        // display get hit effect
        heartBreak.resetAlpha();
        red.resetAlpha();

        stage.addChild(game);

    }
}