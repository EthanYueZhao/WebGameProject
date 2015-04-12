var managers;
(function (managers) {
    'use strict';
    // Image and Sound Manifest;
    var assetManifest = [
        { id: "loading", src: "assets/images/loading.jpg" },
        { id: "bg2", src: "assets/images/bg2.png" },
        { id: "bg", src: "assets/images/bg.png" },
        { id: "bgMenu", src: "assets/images/bgMenu.jpg" },
        { id: "heartBreak", src: "assets/images/heartBreak.png" },
        { id: "red", src: "assets/images/red.png" },
        { id: "BackGroundMusic", src: "assets/sounds/scavengers_music.mp3" },
        { id: "Crash", src: "assets/sounds/Crash2.wav" },
        { id: "Pickup", src: "assets/sounds/Pickup5.wav" },
        { id: "heart", src: "assets/images/heart.png" },
        { id: "Select", src: "assets/sounds/selectSound.wav" },
        { id: "Click", src: "assets/sounds/clickSound.wav" }
    ];
    // SpriteSheet Data Object
    var spriteSheetData = {
        "images": ["assets/images/Scavengers_SpriteSheet.png"],
        "frames": { width: 32, height: 32, count: 56, regX: 0, regY: 0 },
        "animations": {
            "zombie0": [6, 11],
            "zombie1": [12, 17],
            "bottles": [18],
            "cherry": [19],
            "player": [0, 5],
            "w1": [24],
            "w2": [25],
            "w3": [26],
            "w4": [27],
            "w5": [28],
            "w6": [29],
            "w7": [30],
            "w8": [31],
            "fight": { frames: [40, 41], next: "player", speed: 0.2 }
        }
    };
    // buttons sprite data
    var buttonSheetData = {
        "images": ["assets/images/buttons.png"],
        "frames": [
            [2, 2, 187, 75],
            [2, 79, 187, 75],
            [2, 155, 187, 75],
            [191, 2, 187, 75],
            [191, 79, 187, 75],
            [191, 155, 187, 75],
            [384, 2, 187, 75]
        ],
        "animations": {
            "playBtn": [0],
            "instructionBtn": [1],
            "againBtn": [2],
            "normalBtn": [3],
            "veteranBtn": [4],
            "hellBtn": [5],
            "mainmenuBtn": [6]
        }
    };
    // firewall sprite data
    var fwSheetData = {
        "images": ["assets/images/fw1.png"],
        "frames": { width: 50, height: 480, count: 8, regX: 0, regY: 0 },
        "animations": {
            "firewall": { frames: [0, 1, 2, 3, 4, 5, 6, 7], speed: 0.2 }
        }
    };
    // Asset Manager Class
    var Assets = (function () {
        function Assets() {
        }
        Assets.init = function () {
            createjs.Sound.initializeDefaultPlugins();
            this.loader = new createjs.LoadQueue();
            this.loader.installPlugin(createjs.Sound);
            this.loader.loadManifest(assetManifest);
            this.atlas = new createjs.SpriteSheet(spriteSheetData);
            this.buttons = new createjs.SpriteSheet(buttonSheetData);
            this.fwSheet = new createjs.SpriteSheet(fwSheetData);
        };
        return Assets;
    })();
    managers.Assets = Assets;
})(managers || (managers = {}));
//# sourceMappingURL=asset.js.map