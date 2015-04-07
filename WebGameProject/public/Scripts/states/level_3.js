/// <reference path="../objects/button.ts" />
/// <reference path="../objects/zombie.ts" />
/// <reference path="../objects/food.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/background.ts" />
/// <reference path="../objects/player.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../managers/collision.ts" />
'use strict';
var states;
(function (states) {
    function level_3_State() {
        background.update();
        cherry.update();
        bottles.update();
        player.update();
        document.onkeydown = handleKeyDown;
        for (var count = 0; count < constants.ZOMBIE_NUM; count++) {
            zombies[count].update();
        }
        collision.update();
        collision2.update();
        scoreboard.update();
        if (scoreboard.lives <= 0) {
            stage.removeChild(game);
            player.destroy();
            game.removeAllChildren();
            game.removeAllEventListeners();
            currentState = constants.GAME_OVER_STATE;
            changeState(currentState);
        }
    }
    states.level_3_State = level_3_State;
    // key down operation function
    function handleKeyDown() {
        player.move(window.event);
    }
    // play state Function
    function levelNo3() {
        // Declare new Game Container
        game = new createjs.Container();
        // Instantiate Game Objects
        background = new objects.Background(stage, game);
        cherry = new objects.Food(stage, game, "cherry");
        bottles = new objects.Food(stage, game, "bottles");
        player = new objects.Player(stage, game);
        // Label to check level
        levelLabel = new objects.Label(stage.canvas.width - 100, 30, "LEVEL 3");
        // Show Cursor
        stage.cursor = "none";
        for (var count = 0; count < constants.ZOMBIE_NUM; count++) {
            zombies[count] = new objects.Zombie(stage, game, "zombie" + count);
        }
        // Display Scoreboard
        scoreboard = new objects.Scoreboard(stage, game);
        // Instantiate Collision Manager
        collision = new managers.Collision(player, cherry, zombies, scoreboard);
        collision2 = new managers.Collision(player, bottles, zombies, scoreboard);
        // Add the level label
        game.addChild(levelLabel);
        stage.addChild(game);
    }
    states.levelNo3 = levelNo3;
})(states || (states = {}));
//# sourceMappingURL=level_3.js.map