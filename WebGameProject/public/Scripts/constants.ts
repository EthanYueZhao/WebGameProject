module constants {
    // State Machine Constants
    export var MENU_STATE: number = 0;
    export var PLAY_STATE: number = 1;
    export var GAME_OVER_STATE: number = 2;
    export var INSTRUCTION_STATE: number = 3;
    export var LEVEL_SELECT_STATE: number = 4;
    export var LEVEL_1_STATE: number = 5;
    export var LEVEL_2_STATE: number = 6;
    export var LEVEL_3_STATE: number = 7;
    export var LAST_STATE: number = 999;

    // Game Constants
    export var ZOMBIE_NUM: number = 2;
    export var LABEL_FONT = "50px Vijaya";
    export var LABEL_COLOUR = "#FF0000";
    export var PLANE_LIVES = 3;
    export var BACKGROUND_STEP: number = 0.5;
    export var WALLS_NUM: number = 16;
    export var PLAYER_STEP: number = 16;
    export var DISAPPEAR: number = 0.01;
}