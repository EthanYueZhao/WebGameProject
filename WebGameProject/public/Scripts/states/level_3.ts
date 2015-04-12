/// <reference path="../objects/button.ts" />
/// <reference path="../objects/zombie.ts" />
/// <reference path="../objects/food.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/background.ts" />
/// <reference path="../objects/player.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../objects/heart.ts" />
/// <reference path="../managers/collision.ts" />
'use strict'
module states {
    export function level_3_State() {
        background.updateOnly();
        background3.updateOnly();
        checkBG();
        cherry.update();
        bottles.update();
        player.update();
        document.onkeydown = handleKeyDown;
        for (var count = 0; count < constants.ZOMBIE_NUM; count++) {
            zombies[count].update();
        }
        for (var i = 0; i < constants.WALLS_NUM; i++) {
            walls[i].update();
        }

        collision.update();
        collision2.update();
        scoreboard.update();

        checkDeadline();

        if (scoreboard.lives <= 0) {
            stage.removeChild(game);
            player.destroy();
            game.removeAllChildren();
            game.removeAllEventListeners();
            currentState = constants.GAME_OVER_STATE;
            changeState(currentState);
        }

    }

    // key down operation function
    function handleKeyDown() {
        player.move(window.event);
    }

    // play state Function
    export function levelNo3(): void {
        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        background = new objects.Background(stage, game, "bg");
        background3 = new objects.Background(stage, game, "bg");
        background.image.x = 0;
        background3.image.x = background.width;
        // Create walls
        for (var i = 0; i < constants.WALLS_NUM; i++) {
            walls[i] = new objects.Wall(stage, game);
        }
        cherry = new objects.Food(stage, game, "cherry");
        bottles = new objects.Food(stage, game, "bottles");
        player = new objects.Player(stage, game);
        for (var i = 0; i < 3; i++) {
            heart[i] = new objects.Heart(stage, game);
            heart[i].reset(i);
        }

        // Label to check level
        levelLabel = new objects.Label(stage.canvas.width - 100, 30, "LEVEL 3");

        // Show Cursor
        stage.cursor = "none";

        // Create 2 zombies
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

    function checkDeadline() {
        if (player.image.x < 50) {
            loseLife();
            player.image.x += 100;
        }
    }

    function loseLife() {
        createjs.Sound.play("Crash");
        for (var pos = 0; pos < scoreboard.lives; pos++) {
            heart[pos].destroy();
        }
        scoreboard.lives -= 1;
        for (var pos = 0; pos < scoreboard.lives; pos++) {
            heart[pos].reset(pos);
        }
    }

    function checkBG() {
        if (background.image.x < -background.width) {
            background.resetOnly();
            console.log("1 reset");
        }
        if (background3.image.x < -background3.width) {
            background3.resetOnly();
            console.log("2 reset");
        }
    }
}