/// <reference path="../objects/button.ts" />
/// <reference path="../objects/zombie.ts" />
/// <reference path="../objects/food.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/background.ts" />
/// <reference path="../objects/player.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../objects/heart.ts" />
/// <reference path="../managers/collision.ts" />
'use strict';
var states;
(function (states) {
    function level_3_State() {
        background.updateOnly();
        background3.updateOnly();
        checkBG();
        cherry.update();
        bottles.update();
        player.update();
        heartBreak.update();
        red.disappear();
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
        player.checkFight();
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
        background = new objects.Background(stage, game, "bg");
        background3 = new objects.Background(stage, game, "bg");
        background.image.x = 0;
        background3.image.x = background.width;
        for (var i = 0; i < constants.WALLS_NUM; i++) {
            walls[i] = new objects.Wall(stage, game);
        }
        cherry = new objects.Food(stage, game, "cherry");
        bottles = new objects.Food(stage, game, "bottles");
        player = new objects.Player(stage, game);
        // display firewall
        var firewall = new createjs.Sprite(managers.Assets.fwSheet, "firewall");
        firewall.x = 0;
        firewall.y = 0;
        game.addChild(firewall);
        for (var i = 0; i < 3; i++) {
            heart[i] = new objects.Heart(stage, game);
            heart[i].reset(i);
        }
        // Label to check level
        levelLabel = new objects.Label(stage.canvas.width - 100, 30, "HELL");
        // Show Cursor
        stage.cursor = "none";
        for (var count = 0; count < constants.ZOMBIE_NUM; count++) {
            zombies[count] = new objects.Zombie(stage, game, "zombie" + count);
        }
        // Display Scoreboard
        scoreboard = new objects.Scoreboard(stage, game);
        // add red color
        red = new objects.Background(stage, game, "red");
        red.image.alpha = 0;
        heartBreak = new objects.HeartBreak(stage, game);
        // Instantiate Collision Manager
        collision = new managers.Collision(player, cherry, zombies, scoreboard);
        collision2 = new managers.Collision(player, bottles, zombies, scoreboard);
        // Add the level label
        game.addChild(levelLabel);
        stage.addChild(game);
    }
    states.levelNo3 = levelNo3;
    // check if the player goes to the firewall
    function checkDeadline() {
        if (player.image.x < 50) {
            loseLife();
            player.image.x += 100;
        }
    }
    // function of loseLife
    function loseLife() {
        createjs.Sound.play("Crash");
        for (var pos = 0; pos < scoreboard.lives; pos++) {
            heart[pos].destroy();
        }
        scoreboard.lives -= 1;
        for (var pos = 0; pos < scoreboard.lives; pos++) {
            heart[pos].reset(pos);
        }
        heartBreak.resetAlpha();
        red.resetAlpha();
    }
    // check the background
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
})(states || (states = {}));
//# sourceMappingURL=level_3.js.map