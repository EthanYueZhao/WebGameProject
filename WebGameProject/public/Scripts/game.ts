'use strict'
/// <reference path="lib/easeljs.d.ts" />
/// <reference path="lib/createjs-lib.d.ts" />
/// <reference path="constants.ts" />
/// <reference path="managers/asset.ts" />
/// <reference path="objects/zombie.ts" />
/// <reference path="objects/cherry.ts" />
/// <reference path="objects/background.ts" />
/// <reference path="objects/player.ts" />
/// <reference path="objects/scoreboard.ts" />
/// <reference path="objects/label.ts" />
/// <reference path="objects/button.ts" />
/// <reference path="managers/collision.ts" />
/// <reference path="states/play.ts" />
/// <reference path="states/menu.ts" />
/// <reference path="states/level.ts" />
/// <reference path="states/level_1.ts" />
/// <reference path="states/level_2.ts" />
/// <reference path="states/level_3.ts" />
/// <reference path="states/gameover.ts" />
/// <reference path="objects/heart.ts" />

// game name: Last Survivor
// file name: game.ts
// author: Yue Zhao
// last edited at Mar-19,2015


var stage: createjs.Stage;
var game: createjs.Container;

var background: objects.Background;
var player: objects.Player;
var cherry: objects.Food;
var bottles: objects.Food;
var zombies = []; // zombies array;
var heart = [];

var scoreboard: objects.Scoreboard;
var levelLabel: objects.Label;

var collision: managers.Collision;
var collision2: managers.Collision;
var collisionFire: managers.Collision;

var tryAgain: objects.Button;
var playButton: objects.Button;
var instructionButton: objects.Button;

var currentState: number;
var currentStateFunction;

var level_1_Button: objects.Button;
var level_2_Button: objects.Button;
var level_3_Button: objects.Button;

// Preload function - Loads Assets and initializes game;
function preload(): void {
    managers.Assets.init();
    managers.Assets.loader.addEventListener("complete", init);
}

// init called after Assets have been loaded.
function init(): void {
    stage = new createjs.Stage(document.getElementById("canvas"));
    stage.enableMouseOver(30);
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", gameLoop);
    optimizeForMobile();
    createjs.Sound.play('BackGroundMusic', { loop: -1 });

    currentState = constants.MENU_STATE;
    changeState(currentState);
}


// Add touch support for mobile devices
function optimizeForMobile() {
    if (createjs.Touch.isSupported()) {
        createjs.Touch.enable(stage);
    }
}

// Game Loop
function gameLoop(event): void {
    currentStateFunction();
    stage.update();
}

function changeState(state: number): void {
    // Launch Various "screens"
    switch (state) {
        case constants.MENU_STATE:
            // instantiate menu screen
            currentStateFunction = states.menuState;
            states.menu();
            break;

        case constants.PLAY_STATE:
            // instantiate play screen
            currentStateFunction = states.playState;
            states.play();
            break;

        case constants.GAME_OVER_STATE:
            currentStateFunction = states.gameOverState;
            // instantiate game over screen
            states.gameOver();
            break;

        case constants.LEVEL_SELECT_STATE:
            currentStateFunction = states.gameOverState;
            // instantiate level select screen
            states.levelSelect();
            break;

            
        case constants.LEVEL_1_STATE:
            currentStateFunction = states.level_1_State;
            // instantiate level 1 screen
            states.levelNo1();
            break;

        case constants.LEVEL_2_STATE:
            currentStateFunction = states.level_2_State;
            // instantiate level 2 screen
            states.levelNo2();
            break;

        case constants.LEVEL_3_STATE:
            currentStateFunction = states.level_3_State;
            // instantiate level 3 screen
            states.levelNo3();
            break;
            

        case constants.INSTRUCTION_STATE:
            currentStateFunction = states.instructionState;
            // instantiate instruction screen
            states.instruction();
            break;

    }
}





