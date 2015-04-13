/// <reference path="../constants.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/zombie.ts" />
/// <reference path="../objects/food.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/background.ts" />
/// <reference path="../objects/player.ts" />
/// <reference path="../objects/scoreboard.ts" />
module states {
    'use strict'
    export function instructionState() {
        background.goAround();
    }

    // show instruction when Instruction Button is clicked
    export function instructionButtonClicked(event: MouseEvent) {
        stage.removeChild(game);
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.INSTRUCTION_STATE;
        changeState(currentState);
    }

    // instruction scene
    export function instruction() {
        var instructionLabel: objects.Label;
        var instructionContent: createjs.Text;
        var instructionContentShadow: createjs.Text;

        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        background = new objects.Background(stage, game, "bgMenu");
        background.image.y = -50;
        player = new objects.Player(stage, game);

        // Show Cursor
        stage.cursor = "default";

        // Display Instrucion title
        instructionLabel = new objects.Label(stage.canvas.width / 2, 50, "Instruction");
        game.addChild(instructionLabel);

       // display instruction content
        instructionContentShadow = new createjs.Text(" Collect food\n Beat Zombies\n Survive as long as possible\n\n Use arrow keys to move\n Use space key to fight\n Each fight costs 20 scores", "30px Vijaya", "yellow");
        instructionContentShadow.x = stage.canvas.width / 2 - 100 + 1;
        instructionContentShadow.y = 100 + 1;
        game.addChild(instructionContentShadow);

        instructionContent = new createjs.Text(" Collect food\n Beat Zombies\n Survive as long as possible\n\n Use arrow keys to move\n Use space key to fight\n Each fight costs 20 scores", "30px Vijaya", "blue");
        instructionContent.x = stage.canvas.width / 2 -100;
        instructionContent.y = 100; 
        game.addChild(instructionContent);


        // Display Try Play Button
        playButton = new objects.Button(stage.canvas.width / 2, 350, "playBtn");
        game.addChild(playButton);
        playButton.addEventListener("click", playButtonClicked);

        player.image.x = stage.canvas.width / 2 - playButton.regX - player.width;
        player.image.y = playButton.y;

        stage.addChild(game);

    }
} 