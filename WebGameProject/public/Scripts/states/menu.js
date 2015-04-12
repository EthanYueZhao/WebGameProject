/// <reference path="../constants.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../objects/player.ts" />
/// <reference path="../objects/background.ts" />
/// <reference path="../objects/food.ts" />
/// <reference path="../objects/zombie.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />
var states;
(function (states) {
    'use strict';
    function playButtonClicked(event) {
        stage.removeChild(game);
        player.destroy();
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.LEVEL_SELECT_STATE;
        changeState(currentState);
    }
    states.playButtonClicked = playButtonClicked;
    function playButtonOver(event) {
        player.image.x = stage.canvas.width / 2 - playButton.regX - player.width;
        player.image.y = playButton.y;
    }
    states.playButtonOver = playButtonOver;
    function instructionButtonOver(event) {
        player.image.x = stage.canvas.width / 2 - instructionButton.regX - player.width;
        player.image.y = instructionButton.y;
    }
    states.instructionButtonOver = instructionButtonOver;
    function menuState() {
        background.update();
        //player.update();
    }
    states.menuState = menuState;
    function menu() {
        var gameNameLabel;
        // Declare new Game Container
        game = new createjs.Container();
        // Instantiate Game Objects
        background = new objects.Background(stage, game, "bg2");
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
        instructionButton.addEventListener("click", states.instructionButtonClicked);
        instructionButton.addEventListener("rollover", instructionButtonOver);
        player.image.x = stage.canvas.width / 2 - playButton.regX - player.width;
        player.image.y = playButton.y;
        stage.addChild(game);
    }
    states.menu = menu;
})(states || (states = {}));
//# sourceMappingURL=menu.js.map