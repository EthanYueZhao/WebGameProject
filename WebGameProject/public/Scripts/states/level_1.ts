﻿'use strict'
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/zombie.ts" />
/// <reference path="../objects/food.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/background.ts" />
/// <reference path="../objects/player.ts" />
/// <reference path="../objects/heart.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../managers/collision.ts" />
/// <reference path="../objects/heartBreak.ts" />

module states {
    export function level_1_State() {
        background.update();
        cherry.update();
        bottles.update();
        player.update();
        heartBreak.update();
        red.disappear();
        
        document.onkeydown = handleKeyDown;
        for (var count = 0; count < constants.ZOMBIE_NUM; count++) {
            zombies[count].update();
        }    

        collision.update();
        collision2.update();
        scoreboard.update();
        player.checkFight();

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
    export function levelNo1(): void {
        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        background = new objects.Background(stage, game, "bg2");
        cherry = new objects.Food(stage, game, "cherry");
        bottles = new objects.Food(stage, game, "bottles");
        player = new objects.Player(stage, game);

        // display lives using hearts
        for (var i = 0; i < 3; i++) {
            heart[i] = new objects.Heart(stage, game);
            heart[i].reset(i);
        }

        // Label to check level
        levelLabel = new objects.Label(stage.canvas.width - 100, 30, "NORMAL");

        // Show Cursor
        stage.cursor = "none";

        // Create 2 zombies
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
}