﻿/// <reference path="../constants.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../objects/player.ts" />
/// <reference path="../objects/background.ts" />
/// <reference path="../objects/food.ts" />
/// <reference path="../objects/zombie.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />
module states {
    'use strict'
    var xBG;

    // play button click
    export function playButtonClicked(event: MouseEvent) {
        stage.removeChild(game);
        player.destroy();
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.LEVEL_SELECT_STATE;
        changeState(currentState);
    }

    // play button over
    export function playButtonOver(event: MouseEvent) {
        player.image.x = stage.canvas.width / 2 - playButton.regX - player.width;
        player.image.y = playButton.y;
    }

    // instruction button over
    export function instructionButtonOver(event: MouseEvent) {
        player.image.x = stage.canvas.width / 2 - instructionButton.regX - player.width;
        player.image.y = instructionButton.y;
    }

    export function menuState() {
        background.goAround();
    }

    export function menu() {
        var gameNameLabel: objects.Label;

        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        background = new objects.Background(stage, game, "bgMenu");
        background.image.y = -50;
        player = new objects.Player(stage, game);

        // Show Cursor
        stage.cursor = "default";

        // Display Game Name
        gameNameLabel = new objects.Label(stage.canvas.width / 2, 100, "Last Survivor");
        game.addChild(gameNameLabel);

        // Display Play Again Button
        playButton = new objects.Button(stage.canvas.width / 2, 200, "playBtn");
        game.addChild(playButton);
        playButton.addEventListener("click", playButtonClicked);
        playButton.addEventListener("rollover", playButtonOver);

        // Display Instruction Button
        instructionButton = new objects.Button(stage.canvas.width / 2, 300, "instructionBtn");
        game.addChild(instructionButton);
        instructionButton.addEventListener("click", instructionButtonClicked);
        instructionButton.addEventListener("rollover", instructionButtonOver);

        // set the position of the player
        player.image.x = stage.canvas.width / 2 - playButton.regX - player.width;
        player.image.y = playButton.y;

        stage.addChild(game);
    }
} 