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
    // level1 button
    function level_1_Clicked(event) {
        stage.removeChild(game);
        player.destroy();
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.LEVEL_1_STATE;
        changeState(currentState);
    }
    states.level_1_Clicked = level_1_Clicked;
    // level2 button
    function level_2_Clicked(event) {
        stage.removeChild(game);
        player.destroy();
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.LEVEL_2_STATE;
        changeState(currentState);
    }
    states.level_2_Clicked = level_2_Clicked;
    // level3 button
    function level_3_Clicked(event) {
        stage.removeChild(game);
        player.destroy();
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.LEVEL_3_STATE;
        changeState(currentState);
    }
    states.level_3_Clicked = level_3_Clicked;
    // mouse over level1 button
    function level_1_Over(event) {
        player.image.x = stage.canvas.width / 2 - level_1_Button.regX - player.width;
        player.image.y = level_1_Button.y;
    }
    states.level_1_Over = level_1_Over;
    // mouse over level2 button
    function level_2_Over(event) {
        player.image.x = stage.canvas.width / 2 - level_2_Button.regX - player.width;
        player.image.y = level_2_Button.y;
    }
    states.level_2_Over = level_2_Over;
    // mouse over level3 button
    function level_3_Over(event) {
        player.image.x = stage.canvas.width / 2 - level_3_Button.regX - player.width;
        player.image.y = level_3_Button.y;
    }
    states.level_3_Over = level_3_Over;
    function levelState() {
        background.goAround();
        //player.update();
    }
    states.levelState = levelState;
    function levelSelect() {
        var gameLevelLabel;
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
        // Display Level1 Button
        level_1_Button = new objects.Button(stage.canvas.width / 2, 170, "normalBtn");
        game.addChild(level_1_Button);
        level_1_Button.addEventListener("click", level_1_Clicked);
        level_1_Button.addEventListener("rollover", level_1_Over);
        // Display Level2 Button
        level_2_Button = new objects.Button(stage.canvas.width / 2, 270, "veteranBtn");
        game.addChild(level_2_Button);
        level_2_Button.addEventListener("click", level_2_Clicked);
        level_2_Button.addEventListener("rollover", level_2_Over);
        // Display Level3 Button
        level_3_Button = new objects.Button(stage.canvas.width / 2, 370, "hellBtn");
        game.addChild(level_3_Button);
        level_3_Button.addEventListener("click", level_3_Clicked);
        level_3_Button.addEventListener("rollover", level_3_Over);
        // set the position of the player
        player.image.x = stage.canvas.width / 2 - level_2_Button.regX - player.width;
        player.image.y = level_2_Button.y;
        stage.addChild(game);
    }
    states.levelSelect = levelSelect;
})(states || (states = {}));
//# sourceMappingURL=level.js.map