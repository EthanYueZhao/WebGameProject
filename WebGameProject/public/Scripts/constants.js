var constants;
(function (constants) {
    // State Machine Constants
    constants.MENU_STATE = 0;
    constants.PLAY_STATE = 1;
    constants.GAME_OVER_STATE = 2;
    constants.INSTRUCTION_STATE = 3;
    constants.LEVEL_SELECT_STATE = 4;
    constants.LEVEL_1_STATE = 5;
    constants.LEVEL_2_STATE = 6;
    constants.LEVEL_3_STATE = 7;
    constants.LAST_STATE = 999;
    // Game Constants
    constants.ZOMBIE_NUM = 2;
    constants.LABEL_FONT = "50px Vijaya";
    constants.LABEL_COLOUR = "#FF0000";
    constants.PLANE_LIVES = 3;
    constants.BACKGROUND_STEP = 1;
    constants.WALLS_NUM = 16;
})(constants || (constants = {}));
//# sourceMappingURL=constants.js.map