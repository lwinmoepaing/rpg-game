/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Data/AllMapList.js":
/*!********************************!*\
  !*** ./src/Data/AllMapList.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OverWorldMapsList": () => (/* binding */ OverWorldMapsList)
/* harmony export */ });
/* harmony import */ var _Game_Person__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Game/Person */ "./src/Game/Person.js");
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/helper */ "./src/utils/helper.js");


/**
 * @typedef {Object} RoomObj
 * @property {String} lowerSrc -
 * @property {String} upperSrc -
 * @property {Object} gameObjects -
 */

var OverWorldMapsList = {
  /**
   * @type {RoomObj}
   */
  DemoRoom: {
    lowerSrc: "/public/images/maps/UabMap1.png",
    upperSrc: "/public/images/maps/UabMap1Lower.png",
    gameObjects: {
      hero: new _Game_Person__WEBPACK_IMPORTED_MODULE_0__["default"]({
        isPlayerControlled: true,
        x: (0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.withGrids)(4),
        y: (0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.withGrids)(13),
        src: "/public/images/characters/people/npc3.png"
      }),
      npc1: new _Game_Person__WEBPACK_IMPORTED_MODULE_0__["default"]({
        x: (0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.withGrids)(7),
        y: (0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.withGrids)(7),
        src: "/public/images/characters/people/npc4.png ",
        behaviorLoop: [{
          type: "stand",
          direction: "left",
          time: 2000
        }, {
          type: "stand",
          direction: "down",
          time: 4000
        }],
        talking: [{
          events: [{
            type: "textMessage",
            text: "I'm Busy",
            faceHero: "npc1"
          }, {
            type: "textMessage",
            text: "Go away!"
          }]
        }]
      }),
      npc2: new _Game_Person__WEBPACK_IMPORTED_MODULE_0__["default"]({
        x: (0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.withGrids)(6),
        y: (0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.withGrids)(11),
        src: "/public/images/characters/people/npc2.png ",
        direction: "right",
        behaviorLoop: [{
          type: "stand",
          direction: "right",
          time: 2000
        }]
      }),
      npc4: new _Game_Person__WEBPACK_IMPORTED_MODULE_0__["default"]({
        x: (0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.withGrids)(8),
        y: (0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.withGrids)(11),
        direction: "left",
        src: "/public/images/characters/people/npc5.png ",
        behaviorLoop: [{
          type: "stand",
          direction: "left",
          time: 2000
        }],
        talking: []
      })
    },
    walls: {
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(6, 11)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(7, 11)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(8, 11)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(4, 10)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(4, 9)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(2, 10)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(2, 9)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(5, 7)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(5, 8)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(6, 8)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(7, 8)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(8, 8)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(1, 3)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(1, 5)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(1, 7)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(5, 1)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(5, 3)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(5, 5)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(6, 5)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(7, 5)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(8, 5)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(1, 1)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(2, 1)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(3, 1)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(4, 1)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(9, 6)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(9, 7)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(9, 8)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(9, 9)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(9, 10)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(9, 12)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(0, 8)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(0, 9)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(0, 10)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(0, 11)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(1, 13)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(2, 13)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(6, 13)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(7, 13)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(8, 13)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(8, 13)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(0, 12)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(0, 2)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(0, 4)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(0, 6)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(6, 4)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(6, 2)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(3, 14)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(4, 14)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(5, 14)]: true
    },
    cutsceneSpaces: {
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(1, 2)]: [{
        events: [{
          type: "changeMap",
          map: "Map2"
        }]
      }],
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(1, 4)]: [{
        events: [{
          type: "changeMap",
          map: "Map2"
        }]
      }],
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(1, 6)]: [{
        events: [{
          type: "changeMap",
          map: "Map2"
        }]
      }],
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(5, 4)]: [{
        events: [{
          type: "changeMap",
          map: "Map2"
        }]
      }],
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(5, 2)]: [{
        events: [{
          type: "changeMap",
          map: "Map2"
        }]
      }]
    }
  },
  Map2: {
    lowerSrc: "/public/images/maps/UabMap2.png",
    upperSrc: "/public/images/maps/UabMap2Lower.png",
    gameObjects: {
      hero: new _Game_Person__WEBPACK_IMPORTED_MODULE_0__["default"]({
        isPlayerControlled: true,
        x: (0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.withGrids)(3),
        y: (0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.withGrids)(10),
        src: "/public/images/characters/people/npc3.png "
      }),
      npc3: new _Game_Person__WEBPACK_IMPORTED_MODULE_0__["default"]({
        x: (0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.withGrids)(15),
        y: (0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.withGrids)(13),
        src: "/public/images/characters/people/npc1.png ",
        talking: [{
          events: [{
            type: "textMessage",
            text: "You Made it!!",
            faceHero: "npc3"
          }]
        }],
        behaviorLoop: [{
          type: "stand",
          direction: "left",
          time: 2000
        }, {
          type: "stand",
          direction: "down",
          time: 4000
        }, {
          type: "stand",
          direction: "right",
          time: 4000
        }, {
          type: "stand",
          direction: "down",
          time: 4000
        }]
      })
    },
    walls: {
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(1, 4)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(2, 4)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(3, 3)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(4, 4)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(5, 4)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(6, 4)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(7, 4)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(8, 4)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(9, 4)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(10, 3)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(11, 4)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(12, 3)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(13, 4)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(14, 4)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(15, 4)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(15, 3)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(16, 2)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(17, 1)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(17, 2)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(17, 3)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(17, 4)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(18, 4)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(18, 3)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(16, 6)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(14, 9)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(18, 9)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(19, 9)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(17, 9)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(18, 8)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(19, 8)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(17, 8)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(19, 10)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(17, 10)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(12, 6)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(12, 7)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(12, 8)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(12, 9)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(12, 10)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(12, 11)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(12, 12)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(12, 13)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(12, 14)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(14, 14)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(15, 14)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(16, 14)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(14, 12)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(15, 12)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(16, 12)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(16, 13)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(14, 16)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(15, 16)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(16, 16)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(17, 16)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(18, 16)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(1, 19)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(2, 18)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(2, 19)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(2, 20)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(2, 21)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(5, 18)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(5, 19)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(5, 20)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(5, 21)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(8, 18)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(8, 19)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(8, 20)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(8, 21)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(11, 18)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(11, 19)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(11, 20)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(11, 21)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(14, 18)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(14, 19)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(14, 20)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(14, 21)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(17, 18)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(17, 19)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(17, 20)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(17, 21)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(0, 5)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(1, 6)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(1, 7)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(1, 9)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(1, 11)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(1, 13)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(1, 14)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(0, 15)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(0, 16)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(0, 17)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(0, 18)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(3, 22)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(4, 22)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(6, 22)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(7, 22)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(9, 22)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(10, 22)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(12, 22)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(13, 22)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(15, 22)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(16, 22)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(18, 22)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(19, 22)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(20, 21)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(20, 20)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(20, 19)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(20, 18)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(20, 17)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(20, 16)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(20, 15)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(20, 14)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(20, 13)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(20, 12)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(20, 11)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(20, 7)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(20, 6)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(20, 5)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(20, 4)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(20, 3)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(20, 2)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(20, 1)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(19, 0)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(18, 0)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(5, 6)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(5, 7)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(5, 9)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(5, 12)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(5, 13)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(5, 14)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(6, 6)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(6, 7)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(6, 8)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(6, 9)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(6, 10)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(6, 11)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(6, 12)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(6, 13)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(6, 14)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(0, 8)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(0, 10)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(0, 12)]: true
    },
    cutsceneSpaces: {
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(1, 8)]: [{
        events: [{
          type: "changeMap",
          map: "DemoRoom"
        }]
      }],
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(1, 10)]: [{
        events: [{
          type: "changeMap",
          map: "DemoRoom"
        }]
      }],
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(1, 12)]: [{
        events: [{
          type: "changeMap",
          map: "DemoRoom"
        }]
      }],
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(5, 8)]: [{
        events: [{
          type: "changeMap",
          map: "DemoRoom"
        }]
      }],
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(5, 10)]: [{
        events: [{
          type: "changeMap",
          map: "DemoRoom"
        }]
      }]
    }
  }
};

/***/ }),

/***/ "./src/Data/constants.js":
/*!*******************************!*\
  !*** ./src/Data/constants.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  squareSize: 32,
  halfSquareSize: 16,
  movingProgress: 16,
  animationFrameLimit: 8,
  events: {
    PersonWalkingComplete: "PersonWalkingComplete",
    PersonStandComplete: "PersonStandComplete"
  }
});

/***/ }),

/***/ "./src/Game/DirectionInput.js":
/*!************************************!*\
  !*** ./src/Game/DirectionInput.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class DirectionInput {
  constructor() {
    this.heldDirections = [];
    this.map = {
      ArrowUp: "up",
      KeyW: "up",
      ArrowDown: "down",
      KeyS: "down",
      ArrowLeft: "left",
      KeyA: "left",
      ArrowRight: "right",
      KeyD: "right"
    };
  }

  init() {
    document.addEventListener("keydown", e => {
      var dir = this.map[e.code];

      if (dir && this.heldDirections.indexOf(dir) === -1) {
        this.heldDirections.unshift(dir); // console.log(this.heldDirections);
      }
    });
    document.addEventListener("keyup", e => {
      var dir = this.map[e.code];
      var index = this.heldDirections.indexOf(dir);

      if (index > -1) {
        this.heldDirections.splice(index, 1);
      }
    });
  }
  /**
   * @return {Array<'left' | 'right' | 'up' | 'down' >}
   */


  get direction() {
    return this.heldDirections[0];
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DirectionInput);

/***/ }),

/***/ "./src/Game/GameObject.js":
/*!********************************!*\
  !*** ./src/Game/GameObject.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _OverWorldEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OverWorldEvent */ "./src/Game/OverWorldEvent.js");
/* harmony import */ var _OverWorldMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OverWorldMap */ "./src/Game/OverWorldMap.js");
/* harmony import */ var _Sprite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Sprite */ "./src/Game/Sprite.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





class GameObject {
  /**
   * @param {Object} config
   * @param {Number} config.x
   * @param {Number} config.y
   * @param {String} config.src
   * @param {'down' | 'up' | 'left' | 'right' | null} config.direction
   * @param {Boolean | null} config.useShadow
   * @param {Number} config.squareSize
   * @param {{x: Number, y: Number} | null} config.removeSquareSize
   * @param {Boolean} config.isPlayerControlled
   * @param {any[]} config.behaviorLoop
   * @param {Array<{events: *[]}>} config.talking
   */
  constructor(config) {
    this.id = config.id ? config.id : null;
    this.isMounted = false;
    var isUseShadow = config.useShadow !== null && config.useShadow !== undefined ? config.useShadow : true;
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.direction = config.direction || "down";
    this.sprite = new _Sprite__WEBPACK_IMPORTED_MODULE_2__["default"]({
      gameObject: this,
      src: config.src,
      useShadow: isUseShadow,
      squareSize: config.squareSize ? config.squareSize : 32,
      removeSquareSize: config.removeSquareSize ? config.removeSquareSize : {
        x: 8,
        y: 18
      }
    });
    this.behaviorLoop = config.behaviorLoop ? config.behaviorLoop : [];
    this.behaviorLoopIndex = 0;
    this.talking = config.talking || [];
  }
  /**
   * @param {OverWorldMap} map
   */


  mount(map) {
    this.isMounted = true;
    map.addWall(this.x, this.y);
    setTimeout(() => {
      this.doBehaviorEvent(map);
    });
  }

  update() {}
  /**
   * @param {OverWorldMap} map
   */


  doBehaviorEvent(map) {
    var _this = this;

    return _asyncToGenerator(function* () {
      if (map.isCutscenePlaying || _this.behaviorLoop.length === 0 || _this.isStanding) {
        return;
      }

      var event = _this.behaviorLoop[_this.behaviorLoopIndex];
      event.who = _this.id;
      var eventHandler = new _OverWorldEvent__WEBPACK_IMPORTED_MODULE_0__["default"]({
        map: map,
        event: event
      });
      yield eventHandler.init();
      _this.behaviorLoopIndex += 1;

      if (_this.behaviorLoopIndex === _this.behaviorLoop.length) {
        _this.behaviorLoopIndex = 0;
      }

      _this.doBehaviorEvent(map);
    })();
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameObject);

/***/ }),

/***/ "./src/Game/KeyPressListener.js":
/*!**************************************!*\
  !*** ./src/Game/KeyPressListener.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class KeyPressListener {
  /**
   * @param {String} keyCode
   * @param {Function} callback
   */
  constructor(keyCode, callback) {
    var keySafe = true;

    this.keydownFunction = event => {
      if (event.code === keyCode) {
        if (keySafe) {
          keySafe = false;
          callback();
        }
      }
    };

    this.keyupFunction = event => {
      if (event.code === keyCode) {
        keySafe = true;
      }
    };

    document.addEventListener("keydown", this.keydownFunction);
    document.addEventListener("keyup", this.keyupFunction);
  }

  unbind() {
    document.removeEventListener("keydown", this.keydownFunction);
    document.removeEventListener("keyup", this.keyupFunction);
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KeyPressListener);

/***/ }),

/***/ "./src/Game/OverWorld.js":
/*!*******************************!*\
  !*** ./src/Game/OverWorld.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Data_AllMapList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Data/AllMapList */ "./src/Data/AllMapList.js");
/* harmony import */ var _GameObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GameObject */ "./src/Game/GameObject.js");
/* harmony import */ var _Person__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Person */ "./src/Game/Person.js");
/* harmony import */ var _OverWorldMap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./OverWorldMap */ "./src/Game/OverWorldMap.js");
/* harmony import */ var _DirectionInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DirectionInput */ "./src/Game/DirectionInput.js");
/* harmony import */ var _KeyPressListener__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./KeyPressListener */ "./src/Game/KeyPressListener.js");
/* harmony import */ var _Data_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Data/constants */ "./src/Data/constants.js");








class OverWorld {
  /**
   * @param {Object} config
   * @param {HTMLElement} config.element
   * @param {'hehe'|'haha'} config.test
   */
  constructor(config) {
    var {
      element
    } = config;
    this.element = element;
    /**
     * @type {HTMLCanvasElement}
     */

    this.canvas = this.element.querySelector(".game-canvas"); //HTMLCanvasElement

    this.ctx = this.canvas.getContext("2d");
    /**
     * @type {OverWorldMap | null}
     */

    this.map = null;
  }

  startGameLoop() {
    var step = () => {
      // Clear Of The Canvas
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // Camera

      var cameraPerson = this.map.gameObjects.hero; // Update All Objects

      Object.values(this.map.gameObjects).forEach(
      /**
       * @param {GameObject | Person} obj
       */
      obj => {
        obj.update({
          arrow: this.directionController.direction,
          map: this.map
        });
      }); // Draw the Lower Layer

      this.map.drawLowerImage(this.ctx, cameraPerson); // Make Person and Middle Layer

      Object.values(this.map.gameObjects).sort((a, b) => {
        return a.y - b.y;
      }).forEach(
      /**
       * @param {GameObject | Person} obj
       */
      obj => {
        obj.sprite.draw(this.ctx, cameraPerson);
      });
      this.map.drawUpperImage(this.ctx, cameraPerson);
      requestAnimationFrame(() => {
        step();
      });
    };

    step();
  }

  bindActionInput() {
    new _KeyPressListener__WEBPACK_IMPORTED_MODULE_5__["default"]("Enter", () => {
      this.map.checkForActionCutscene();
    });
    new _KeyPressListener__WEBPACK_IMPORTED_MODULE_5__["default"]("Space", () => {
      this.map.checkForActionCutscene();
    });
  }

  bindHeroPositionCheck() {
    document.addEventListener(_Data_constants__WEBPACK_IMPORTED_MODULE_6__["default"].events.PersonWalkingComplete, e => {
      if (e.detail.whoId === "hero") {
        this.map.checkForFootstepCutscene();
      }
    });
  }

  startMap(mapConfig) {
    this.map = new _OverWorldMap__WEBPACK_IMPORTED_MODULE_3__["default"](mapConfig);
    this.map.overWorld = this;
    this.map.mountObjects();
  }

  init() {
    this.startMap(_Data_AllMapList__WEBPACK_IMPORTED_MODULE_0__.OverWorldMapsList.DemoRoom);
    this.bindActionInput();
    this.bindHeroPositionCheck();
    this.directionController = new _DirectionInput__WEBPACK_IMPORTED_MODULE_4__["default"]();
    this.directionController.init(); // Start Game Loop

    this.startGameLoop(); // if Cutscene

    this.map.startCutScene([{
      type: "textMessage",
      text: "Hello Fintech Game!"
    }]);
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OverWorld);

/***/ }),

/***/ "./src/Game/OverWorldEvent.js":
/*!************************************!*\
  !*** ./src/Game/OverWorldEvent.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _OverWorldMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OverWorldMap */ "./src/Game/OverWorldMap.js");
/* harmony import */ var _Data_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Data/constants */ "./src/Data/constants.js");
/* harmony import */ var _Data_AllMapList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Data/AllMapList */ "./src/Data/AllMapList.js");
/* harmony import */ var _TextMessage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TextMessage */ "./src/Game/TextMessage.js");
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/helper */ "./src/utils/helper.js");






class OverWorldEvent {
  /**
   * @param {Object} config
   * @param {OverWorldMap} config.map
   * @param {Object} config.event
   * @param {'walk' | 'stand' } config.event.type
   * @param {String} config.event.who
   * @param {Number} config.event.time
   * @param {'up' | 'down' | 'left' | 'right' } config.event.direction
   * @param {String} config.event.text
   * @param {String} config.event.faceHero
   * @param {Function} config.event.onComplete
   */
  constructor(config) {
    var {
      map,
      event
    } = config;
    this.map = map;
    this.event = event;
  }
  /**
   * @return {Promise<Any>}
   */


  init() {
    return new Promise(resolve => {
      this[this.event.type](resolve);
    });
  }

  stand(resolve) {
    var who = this.map.gameObjects[this.event.who];
    who.startBehavior({
      map: this.map
    }, {
      type: "stand",
      direction: this.event.direction,
      time: this.event.time
    });

    var completeHandler = e => {
      if (e.detail.whoId === this.event.who) {
        document.removeEventListener(_Data_constants__WEBPACK_IMPORTED_MODULE_1__["default"].events.PersonStandComplete, completeHandler);
        resolve();
      }
    };

    document.addEventListener(_Data_constants__WEBPACK_IMPORTED_MODULE_1__["default"].events.PersonStandComplete, completeHandler);
  }

  walk(resolve) {
    var who = this.map.gameObjects[this.event.who];
    who.startBehavior({
      map: this.map
    }, {
      type: "walk",
      direction: this.event.direction,
      retry: true
    });

    var completeHandler = e => {
      if (e.detail.whoId === this.event.who) {
        document.removeEventListener(_Data_constants__WEBPACK_IMPORTED_MODULE_1__["default"].events.PersonWalkingComplete, completeHandler);
        resolve();
      }
    };

    document.addEventListener(_Data_constants__WEBPACK_IMPORTED_MODULE_1__["default"].events.PersonWalkingComplete, completeHandler);
  }

  textMessage(resolve) {
    if (this.event.faceHero) {
      var obj = this.map.gameObjects[this.event.faceHero];
      obj.direction = (0,_utils_helper__WEBPACK_IMPORTED_MODULE_4__.oppositeDirection)(this.map.gameObjects["hero"].direction);
    }

    var message = new _TextMessage__WEBPACK_IMPORTED_MODULE_3__["default"]({
      text: this.event.text,
      onComplete: () => resolve()
    });
    var messageContainer = document.querySelector(".game-container");
    message.init(messageContainer);
  }

  changeMap(resolve) {
    this.map.overWorld.startMap(_Data_AllMapList__WEBPACK_IMPORTED_MODULE_2__.OverWorldMapsList[this.event.map]);
    resolve();
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OverWorldEvent);

/***/ }),

/***/ "./src/Game/OverWorldMap.js":
/*!**********************************!*\
  !*** ./src/Game/OverWorldMap.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/helper */ "./src/utils/helper.js");
/* harmony import */ var _GameObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GameObject */ "./src/Game/GameObject.js");
/* harmony import */ var _OverWorldEvent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OverWorldEvent */ "./src/Game/OverWorldEvent.js");
/* harmony import */ var _OverWorld__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./OverWorld */ "./src/Game/OverWorld.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





/**
 * @name OverWorlMap
 */

class OverWorldMap {
  /**
   * @param {Object} config
   * @param {String} config.lowerSrc
   * @param {String} config.upperSrc
   * @param {Object} config.walls
   * @param {Array<{events: *[]}>} config.cutsceneSpaces
   * @param {{hero: GameObject, npc1: GameObject, npc2: GameObject}} config.gameObjects
   */
  constructor(config) {
    /**
     * @type {OverWorld}
     */
    this.overWorld = null;
    this.gameObjects = config.gameObjects;
    this.walls = config.walls || {};
    this.cutsceneSpaces = config.cutsceneSpaces || [];
    this.lowerLayer = new Image();
    this.lowerLayer.src = config.lowerSrc;
    this.upperLayer = new Image();
    this.upperLayer.src = config.upperSrc;
    this.isCutscenePlaying = false;
  }
  /**
   * @param {CanvasRenderingContext2D} ctx
   * @param {GameObject} cameraPerson
   */


  drawLowerImage(ctx, cameraPerson) {
    ctx.drawImage(this.lowerLayer, (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.withGrids)(10.5) - cameraPerson.x, (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.withGrids)(6) - cameraPerson.y);
  }
  /**
   * @param {CanvasRenderingContext2D} ctx
   * @param {GameObject} cameraPerson
   */


  drawUpperImage(ctx, cameraPerson) {
    ctx.drawImage(this.upperLayer, (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.withGrids)(10.5) - cameraPerson.x, (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.withGrids)(6) - cameraPerson.y);
  }
  /**
   * @param {Number} curX
   * @param {Number} curY
   * @param {'up' | 'down' | 'left' | 'right' } direction
   */


  isSpaceTaken(curX, curY, direction) {
    var {
      x,
      y
    } = (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.nextPosition)(curX, curY, direction);
    return this.walls["".concat(x, ",").concat(y)] || false;
  } // Mounting Object


  mountObjects() {
    // Object.values(this.gameObjects).map((obj) => {
    //   obj.mount(this);
    // });
    Object.keys(this.gameObjects).map(key => {
      var object = this.gameObjects[key];
      object.id = key;
      object.mount(this);
    });
  } // Map Initialize


  checkForActionCutscene() {
    var hero = this.gameObjects["hero"];
    var nextCoord = (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.nextPosition)(hero.x, hero.y, hero.direction);
    var match = Object.values(this.gameObjects).find(object => {
      return "".concat(object.x, ",").concat(object.y) === "".concat(nextCoord.x, ",").concat(nextCoord.y);
    });

    if (!this.isCutscenePlaying && match && match.talking.length) {
      this.startCutScene(match.talking[0].events);
    }
  }

  checkForFootstepCutscene() {
    var hero = this.gameObjects["hero"];
    var match = this.cutsceneSpaces["".concat(hero.x, ",").concat(hero.y)];

    if (!this.isCutscenePlaying && match) {
      this.startCutScene(match[0].events);
    }
  }

  startCutScene(events) {
    var _this = this;

    return _asyncToGenerator(function* () {
      _this.isCutscenePlaying = true;

      for (var i = 0; i < events.length; i++) {
        var eventHandler = new _OverWorldEvent__WEBPACK_IMPORTED_MODULE_2__["default"]({
          event: events[i],
          map: _this
        });
        yield eventHandler.init();
      }

      Object.keys(_this.gameObjects).map(key => {
        var object = _this.gameObjects[key];
        object.id = key;
        object.mount(_this);
      });
      _this.isCutscenePlaying = false;
    })();
  } // Other Object Walls


  addWall(x, y) {
    this.walls["".concat(x, ",").concat(y)] = true;
  }

  removeWall(x, y) {
    delete this.walls["".concat(x, ",").concat(y)];
  }
  /**
   *
   * @param {'up' | 'down' | 'left' | 'right' } direction
   */


  moveWall(wasX, wasY, direction) {
    this.removeWall(wasX, wasY);
    var {
      x,
      y
    } = (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.nextPosition)(wasX, wasY, direction);
    this.addWall(x, y);
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OverWorldMap);

/***/ }),

/***/ "./src/Game/Person.js":
/*!****************************!*\
  !*** ./src/Game/Person.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Data_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Data/constants */ "./src/Data/constants.js");
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/helper */ "./src/utils/helper.js");
/* harmony import */ var _GameObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GameObject */ "./src/Game/GameObject.js");
/* harmony import */ var _OverWorldMap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./OverWorldMap */ "./src/Game/OverWorldMap.js");




/**
 */

class Person extends _GameObject__WEBPACK_IMPORTED_MODULE_2__["default"] {
  /**
   * @param {GameObject} config
   */
  constructor(config) {
    super(config);
    this.movingProgressRemainig = 0;
    this.isPlayerControlled = config.isPlayerControlled || false;
    this.isStanding = false;
    this.directionUpdate = {
      up: ["y", -1],
      down: ["y", 1],
      left: ["x", -1],
      right: ["x", 1]
    };
  }
  /**
   * @param {Object} state
   * @param {'down' | 'up' | 'left' | 'right' } state.arrow
   * @param {OverWorldMap} state.map
   */


  update(state) {
    if (this.movingProgressRemainig > 0) {
      this.updatePosition();
    } else {
      if (this.isPlayerControlled && !state.map.isCutscenePlaying && state.arrow) {
        this.startBehavior(state, {
          type: "walk",
          direction: state.arrow
        });
      }

      this.updateSprint(state);
    }
  }
  /**
   * @param {Object} state
   * @param {OverWorldMap} state.map
   * @param {Object} behavior
   * @param {'walk' | 'stand' } behavior.type
   * @param {'up' | 'down' | 'left' | 'right' } behavior.direction
   * @param {Boolean} behavior.retry
   * @param {Number} behavior.time
   */


  startBehavior(state, behavior) {
    this.direction = behavior.direction;

    if (behavior.type === "walk") {
      var isSpaceTaken = state.map.isSpaceTaken(this.x, this.y, this.direction);

      if (isSpaceTaken) {
        behavior.retry && setTimeout(() => {
          this.startBehavior(state, behavior);
        }, 10);
        return;
      }

      state.map.moveWall(this.x, this.y, this.direction);
      this.movingProgressRemainig = _Data_constants__WEBPACK_IMPORTED_MODULE_0__["default"].movingProgress;
      this.updateSprint(state);
    }

    if (behavior.type === "stand") {
      this.isStanding = true;
      setTimeout(() => {
        (0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.emitEvent)(_Data_constants__WEBPACK_IMPORTED_MODULE_0__["default"].events.PersonStandComplete, {
          whoId: this.id
        });
        this.isStanding = false;
      }, behavior.time);
    }
  }

  updatePosition() {
    if (this.movingProgressRemainig > 0) {
      var [property, change] = this.directionUpdate[this.direction];
      this[property] += change;
      this.movingProgressRemainig -= 1;
    }

    if (this.movingProgressRemainig === 0) {
      (0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.emitEvent)(_Data_constants__WEBPACK_IMPORTED_MODULE_0__["default"].events.PersonWalkingComplete, {
        whoId: this.id
      });
    }
  }

  updateSprint() {
    if (this.movingProgressRemainig > 0) {
      this.sprite.setAnimation("walk" + capitalizeFirstLetter(this.direction));
      return;
    }

    this.sprite.setAnimation("idle" + capitalizeFirstLetter(this.direction));
  }

}
/**
 * @return {String}
 */


function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Person);

/***/ }),

/***/ "./src/Game/RevealingText.js":
/*!***********************************!*\
  !*** ./src/Game/RevealingText.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class RevealingText {
  /**
   * @param {Object} config
   * @param {HTMLElement} config.element
   * @param {String} config.text
   * @param {Number} config.speed
   * @param {Number | null} config.timeout
   */
  constructor(config) {
    this.element = config.element;
    this.text = config.text;
    this.speed = config.speed || 70;
    this.timeout = null;
    this.isDone = false;
  }

  init() {
    var characters = [];
    this.text.split("").forEach(char => {
      var span = document.createElement("span");
      span.textContent = char;
      this.element.appendChild(span);
      characters.push({
        span,
        delayAfter: char === " " ? 0 : this.speed
      });
    });
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RevealingText);

/***/ }),

/***/ "./src/Game/Sprite.js":
/*!****************************!*\
  !*** ./src/Game/Sprite.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Data_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Data/constants */ "./src/Data/constants.js");
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/helper */ "./src/utils/helper.js");
/* harmony import */ var _GameObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GameObject */ "./src/Game/GameObject.js");



/**
 * @name Sprite
 */

class Sprite {
  /**
   * @param {Object} config
   * @param {Object} config.animations
   * @param {'idleDown' | 'idleRight' | 'idleUp' | 'idleLeft' | 'walkDown' |'walkRight' | 'walkUp' | 'walkLeft' } config.currentAnimation
   * @param {String} config.src
   * @param {Number} config.squareSize
   * @param {GameObject} config.gameObject
   * @param {Number | null} config.animationFrameLimit
   * @param {{  x: Number, y: Number} | null} config.removeSquareSize
   * @param {Boolean} config.useShadow
   */
  constructor(config) {
    // SquareSize Default 32
    this.squareSize = config.squareSize || _Data_constants__WEBPACK_IMPORTED_MODULE_0__["default"].squareSize;
    this.removeSquareSize = config.removeSquareSize ? config.removeSquareSize : {
      x: 8,
      y: 18
    }; // Setup the image

    (0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.drawImage)(config.src || "/public/images/characters/people/hero.png", image => {
      this.image = image;
      this.imageIsLoaded = true;
    }); // Shadow Image

    this.useShadow = config.useShadow || false;

    if (this.useShadow) {
      (0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.drawImage)("/public/images/characters/shadow.png", image => {
        this.shadowImage = image;
        this.shadowImageLoaded = true;
      });
    } // Confiure Animation And Initial State


    this.animations = config.animations || {
      idleDown: [[0, 0]],
      idleRight: [[0, 1]],
      idleUp: [[0, 2]],
      idleLeft: [[0, 3]],
      walkDown: [[1, 0], // image row 1 col 1
      [0, 0], // image row 1 col 2
      [3, 0], // image row 1 col 4
      [0, 0] // image row 1 col 2
      ],
      walkRight: [[1, 1], // image row 1 col 1
      [0, 1], // image row 1 col 2
      [3, 1], // image row 1 col 4
      [0, 1] // image row 1 col 2
      ],
      walkUp: [[1, 2], // image row 1 col 1
      [0, 2], // image row 1 col 2
      [3, 2], // image row 1 col 4
      [0, 2] // image row 1 col 2
      ],
      walkLeft: [[1, 3], // image row 1 col 1
      [0, 3], // image row 1 col 2
      [3, 3], // image row 1 col 4
      [0, 3] // image row 1 col 2
      ]
    }; // Set Animation Frame

    this.currentAnimation = config.currentAnimation || "idleDown";
    this.currentAnimationFrame = 0;
    this.animationFrameLimit = config.animationFrameLimit || _Data_constants__WEBPACK_IMPORTED_MODULE_0__["default"].animationFrameLimit;
    this.animationFrameProgress = this.animationFrameLimit; // console.log(" this.animationFrameProgress", this.animationFrameProgress);
    //

    this.gameObject = config.gameObject;
  } // Get Current Animation Frame

  /**
   * @return {[Number, Number] | undefined }
   */


  get frame() {
    return this.animations[this.currentAnimation][this.currentAnimationFrame];
  }

  setAnimation(key) {
    if (this.currentAnimation !== key) {
      this.currentAnimation = key;
      this.currentAnimationFrame = 0;
      this.animationFrameProgress = this.animationFrameLimit;
    }
  }

  updateAnimationProgress() {
    // Downtick Frame Progress
    if (this.animationFrameProgress > 0) {
      this.animationFrameProgress -= 1;
      return;
    } // Reset the counter


    this.animationFrameProgress = this.animationFrameLimit;
    this.currentAnimationFrame += 1;

    if (this.frame === undefined) {
      this.currentAnimationFrame = 0;
    }
  }
  /**
   * Draw Context
   * @param {CanvasRenderingContext2D} ctx
   * @param {GameObject} cameraPerson
   */


  draw(ctx, cameraPerson) {
    var x = this.gameObject.x - this.removeSquareSize.x + (0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.withGrids)(10.5) - cameraPerson.x; // Remove Unnecessary width

    var y = this.gameObject.y - this.removeSquareSize.y + (0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.withGrids)(6) - cameraPerson.y; // Remove Unnecessary height

    var [frameX, frameY] = this.frame; // console.log(this.frame);
    // console.log("FrameX", frameX);
    // console.log("FrameY", frameY);
    // When Image Loading

    this.imageIsLoaded && ctx.drawImage(this.image, // Insert Image
    frameX * _Data_constants__WEBPACK_IMPORTED_MODULE_0__["default"].squareSize, // X from Image
    frameY * _Data_constants__WEBPACK_IMPORTED_MODULE_0__["default"].squareSize, // Y from Image
    this.squareSize, // Width From Image,
    this.squareSize, // Height From Image
    x, // X for Canvas
    y, // Y for Canvas
    this.squareSize, // Width For Canvas
    this.squareSize // Height For Canvas
    ); // Call Animation

    this.updateAnimationProgress();
    this.shadowImageLoaded && ctx.drawImage(this.shadowImage, // Insert Image
    x, // X for Canvas
    y // Y for Canvas
    );
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sprite);

/***/ }),

/***/ "./src/Game/TextMessage.js":
/*!*********************************!*\
  !*** ./src/Game/TextMessage.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _KeyPressListener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./KeyPressListener */ "./src/Game/KeyPressListener.js");
/* harmony import */ var _RevealingText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RevealingText */ "./src/Game/RevealingText.js");



class TextMessage {
  constructor(config) {
    this.text = config.text || "";
    this.onComplete = config.onComplete;
    this.element = null;
  }

  createElement() {
    this.element = document.createElement("div");
    this.element.classList.add("TextMessage");
    this.element.innerHTML = "\n        <p class=\"TextMessage_p\">".concat(this.text, "</p>\n        <button class=\"TextMessage_button\">Next</button>\n    ");
    this.element.querySelector("button").addEventListener("click", () => {
      this.done();
    });
    this.revealingText = new _RevealingText__WEBPACK_IMPORTED_MODULE_1__["default"]({
      element: this.element.querySelector("TextMessage_p"),
      text: this.text
    });
    /**
     * @type {KeyPressListener}
     */

    this.actionListener = new _KeyPressListener__WEBPACK_IMPORTED_MODULE_0__["default"]("Enter", () => {
      this.actionListener.unbind();
      this.done();
    });
    this.actionSpaceListener = new _KeyPressListener__WEBPACK_IMPORTED_MODULE_0__["default"]("Space", () => {
      this.actionSpaceListener.unbind();
      this.done();
    });
  }

  done() {
    this.element.remove();
    this.onComplete();
  }
  /**
   * @param {HTMLElement} container
   */


  init(container) {
    this.createElement();
    container.appendChild(this.element);
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextMessage);

/***/ }),

/***/ "./src/utils/helper.js":
/*!*****************************!*\
  !*** ./src/utils/helper.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "drawImage": () => (/* binding */ drawImage),
/* harmony export */   "withGrids": () => (/* binding */ withGrids),
/* harmony export */   "asGridCoord": () => (/* binding */ asGridCoord),
/* harmony export */   "nextPosition": () => (/* binding */ nextPosition),
/* harmony export */   "emitEvent": () => (/* binding */ emitEvent),
/* harmony export */   "oppositeDirection": () => (/* binding */ oppositeDirection)
/* harmony export */ });
/* harmony import */ var _Data_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Data/constants */ "./src/Data/constants.js");

var drawImage = (src, cb) => {
  var img = new Image();

  img.onload = () => {
    if (cb) {
      cb(img);
    }
  };

  img.src = src;
};
var withGrids = n => {
  return n * _Data_constants__WEBPACK_IMPORTED_MODULE_0__["default"].halfSquareSize;
};
var asGridCoord = (x, y) => {
  return "".concat(x * _Data_constants__WEBPACK_IMPORTED_MODULE_0__["default"].halfSquareSize, ",").concat(y * _Data_constants__WEBPACK_IMPORTED_MODULE_0__["default"].halfSquareSize);
};
var nextPosition = (curX, curY, direction) => {
  var x, y, size;
  x = curX;
  y = curY;
  size = 16;

  if (direction === "left") {
    x -= size;
  } else if (direction === "right") {
    x += size;
  } else if (direction === "up") {
    y -= size;
  } else if (direction === "down") {
    y += size;
  }

  return {
    x,
    y
  };
};
var emitEvent = (name, detail) => {
  // We Finished the walk
  var event = new CustomEvent(name, {
    detail
  });
  document.dispatchEvent(event);
};
var oppositeDirection = direction => {
  if (direction === "left") {
    return "right";
  }

  if (direction === "right") {
    return "left";
  }

  if (direction === "up") {
    return "down";
  }

  return "up";
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Game_OverWorld__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game/OverWorld */ "./src/Game/OverWorld.js");

var wolrd = new _Game_OverWorld__WEBPACK_IMPORTED_MODULE_0__["default"]({
  element: document.querySelector(".game-container")
});
wolrd.init();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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USxDQUFDOEMsYUFBVCxDQUF1QixpQkFBdkI7QUFEaUIsQ0FBZCxDQUFkO0FBSUF1SSxLQUFLLENBQUN0TCxJQUFOLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ycGctZ2FtZS8uL3NyYy9EYXRhL0FsbE1hcExpc3QuanMiLCJ3ZWJwYWNrOi8vcnBnLWdhbWUvLi9zcmMvRGF0YS9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vcnBnLWdhbWUvLi9zcmMvR2FtZS9EaXJlY3Rpb25JbnB1dC5qcyIsIndlYnBhY2s6Ly9ycGctZ2FtZS8uL3NyYy9HYW1lL0dhbWVPYmplY3QuanMiLCJ3ZWJwYWNrOi8vcnBnLWdhbWUvLi9zcmMvR2FtZS9LZXlQcmVzc0xpc3RlbmVyLmpzIiwid2VicGFjazovL3JwZy1nYW1lLy4vc3JjL0dhbWUvT3ZlcldvcmxkLmpzIiwid2VicGFjazovL3JwZy1nYW1lLy4vc3JjL0dhbWUvT3ZlcldvcmxkRXZlbnQuanMiLCJ3ZWJwYWNrOi8vcnBnLWdhbWUvLi9zcmMvR2FtZS9PdmVyV29ybGRNYXAuanMiLCJ3ZWJwYWNrOi8vcnBnLWdhbWUvLi9zcmMvR2FtZS9QZXJzb24uanMiLCJ3ZWJwYWNrOi8vcnBnLWdhbWUvLi9zcmMvR2FtZS9SZXZlYWxpbmdUZXh0LmpzIiwid2VicGFjazovL3JwZy1nYW1lLy4vc3JjL0dhbWUvU3ByaXRlLmpzIiwid2VicGFjazovL3JwZy1nYW1lLy4vc3JjL0dhbWUvVGV4dE1lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vcnBnLWdhbWUvLi9zcmMvdXRpbHMvaGVscGVyLmpzIiwid2VicGFjazovL3JwZy1nYW1lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3JwZy1nYW1lL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9ycGctZ2FtZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3JwZy1nYW1lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcnBnLWdhbWUvLi9zcmMvYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQZXJzb24gZnJvbSBcIi4uL0dhbWUvUGVyc29uXCI7XHJcbmltcG9ydCB7IGFzR3JpZENvb3JkLCB3aXRoR3JpZHMgfSBmcm9tIFwiLi4vdXRpbHMvaGVscGVyXCI7XHJcbi8qKlxyXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBSb29tT2JqXHJcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBsb3dlclNyYyAtXHJcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSB1cHBlclNyYyAtXHJcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBnYW1lT2JqZWN0cyAtXHJcbiAqL1xyXG5cclxuZXhwb3J0IGNvbnN0IE92ZXJXb3JsZE1hcHNMaXN0ID0ge1xyXG4gIC8qKlxyXG4gICAqIEB0eXBlIHtSb29tT2JqfVxyXG4gICAqL1xyXG4gIERlbW9Sb29tOiB7XHJcbiAgICBsb3dlclNyYzogXCIvcHVibGljL2ltYWdlcy9tYXBzL1VhYk1hcDEucG5nXCIsXHJcbiAgICB1cHBlclNyYzogXCIvcHVibGljL2ltYWdlcy9tYXBzL1VhYk1hcDFMb3dlci5wbmdcIixcclxuICAgIGdhbWVPYmplY3RzOiB7XHJcbiAgICAgIGhlcm86IG5ldyBQZXJzb24oe1xyXG4gICAgICAgIGlzUGxheWVyQ29udHJvbGxlZDogdHJ1ZSxcclxuICAgICAgICB4OiB3aXRoR3JpZHMoNCksXHJcbiAgICAgICAgeTogd2l0aEdyaWRzKDEzKSxcclxuICAgICAgICBzcmM6IFwiL3B1YmxpYy9pbWFnZXMvY2hhcmFjdGVycy9wZW9wbGUvbnBjMy5wbmdcIixcclxuICAgICAgfSksXHJcbiAgICAgIG5wYzE6IG5ldyBQZXJzb24oe1xyXG4gICAgICAgIHg6IHdpdGhHcmlkcyg3KSxcclxuICAgICAgICB5OiB3aXRoR3JpZHMoNyksXHJcbiAgICAgICAgc3JjOiBcIi9wdWJsaWMvaW1hZ2VzL2NoYXJhY3RlcnMvcGVvcGxlL25wYzQucG5nIFwiLFxyXG4gICAgICAgIGJlaGF2aW9yTG9vcDogW1xyXG4gICAgICAgICAgeyB0eXBlOiBcInN0YW5kXCIsIGRpcmVjdGlvbjogXCJsZWZ0XCIsIHRpbWU6IDIwMDAgfSxcclxuICAgICAgICAgIHsgdHlwZTogXCJzdGFuZFwiLCBkaXJlY3Rpb246IFwiZG93blwiLCB0aW1lOiA0MDAwIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICB0YWxraW5nOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGV2ZW50czogW1xyXG4gICAgICAgICAgICAgIHsgdHlwZTogXCJ0ZXh0TWVzc2FnZVwiLCB0ZXh0OiBcIkknbSBCdXN5XCIsIGZhY2VIZXJvOiBcIm5wYzFcIiB9LFxyXG4gICAgICAgICAgICAgIHsgdHlwZTogXCJ0ZXh0TWVzc2FnZVwiLCB0ZXh0OiBcIkdvIGF3YXkhXCIgfSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfSksXHJcbiAgICAgIG5wYzI6IG5ldyBQZXJzb24oe1xyXG4gICAgICAgIHg6IHdpdGhHcmlkcyg2KSxcclxuICAgICAgICB5OiB3aXRoR3JpZHMoMTEpLFxyXG4gICAgICAgIHNyYzogXCIvcHVibGljL2ltYWdlcy9jaGFyYWN0ZXJzL3Blb3BsZS9ucGMyLnBuZyBcIixcclxuICAgICAgICBkaXJlY3Rpb246IFwicmlnaHRcIixcclxuICAgICAgICBiZWhhdmlvckxvb3A6IFt7IHR5cGU6IFwic3RhbmRcIiwgZGlyZWN0aW9uOiBcInJpZ2h0XCIsIHRpbWU6IDIwMDAgfV0sXHJcbiAgICAgIH0pLFxyXG5cclxuICAgICAgbnBjNDogbmV3IFBlcnNvbih7XHJcbiAgICAgICAgeDogd2l0aEdyaWRzKDgpLFxyXG4gICAgICAgIHk6IHdpdGhHcmlkcygxMSksXHJcbiAgICAgICAgZGlyZWN0aW9uOiBcImxlZnRcIixcclxuICAgICAgICBzcmM6IFwiL3B1YmxpYy9pbWFnZXMvY2hhcmFjdGVycy9wZW9wbGUvbnBjNS5wbmcgXCIsXHJcbiAgICAgICAgYmVoYXZpb3JMb29wOiBbeyB0eXBlOiBcInN0YW5kXCIsIGRpcmVjdGlvbjogXCJsZWZ0XCIsIHRpbWU6IDIwMDAgfV0sXHJcbiAgICAgICAgdGFsa2luZzogW10sXHJcbiAgICAgIH0pLFxyXG4gICAgfSxcclxuICAgIHdhbGxzOiB7XHJcbiAgICAgIFthc0dyaWRDb29yZCg2LCAxMSldOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoNywgMTEpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDgsIDExKV06IHRydWUsXHJcbiAgICAgIFthc0dyaWRDb29yZCg0LCAxMCldOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoNCwgOSldOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoMiwgMTApXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDIsIDkpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDUsIDcpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDUsIDgpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDYsIDgpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDcsIDgpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDgsIDgpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDEsIDMpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDEsIDUpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDEsIDcpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDUsIDEpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDUsIDMpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDUsIDUpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDYsIDUpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDcsIDUpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDgsIDUpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDEsIDEpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDIsIDEpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDMsIDEpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDQsIDEpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDksIDYpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDksIDcpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDksIDgpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDksIDkpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDksIDEwKV06IHRydWUsXHJcbiAgICAgIFthc0dyaWRDb29yZCg5LCAxMildOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoMCwgOCldOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoMCwgOSldOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoMCwgMTApXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDAsIDExKV06IHRydWUsXHJcbiAgICAgIFthc0dyaWRDb29yZCgxLCAxMyldOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoMiwgMTMpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDYsIDEzKV06IHRydWUsXHJcbiAgICAgIFthc0dyaWRDb29yZCg3LCAxMyldOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoOCwgMTMpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDgsIDEzKV06IHRydWUsXHJcblxyXG4gICAgICBbYXNHcmlkQ29vcmQoMCwgMTIpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDAsIDIpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDAsIDQpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDAsIDYpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDYsIDQpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDYsIDIpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDMsIDE0KV06IHRydWUsXHJcbiAgICAgIFthc0dyaWRDb29yZCg0LCAxNCldOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoNSwgMTQpXTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICBjdXRzY2VuZVNwYWNlczoge1xyXG4gICAgICBbYXNHcmlkQ29vcmQoMSwgMildOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgZXZlbnRzOiBbeyB0eXBlOiBcImNoYW5nZU1hcFwiLCBtYXA6IFwiTWFwMlwiIH1dLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICAgIFthc0dyaWRDb29yZCgxLCA0KV06IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBldmVudHM6IFt7IHR5cGU6IFwiY2hhbmdlTWFwXCIsIG1hcDogXCJNYXAyXCIgfV0sXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgICAgW2FzR3JpZENvb3JkKDEsIDYpXTogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGV2ZW50czogW3sgdHlwZTogXCJjaGFuZ2VNYXBcIiwgbWFwOiBcIk1hcDJcIiB9XSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG5cclxuICAgICAgW2FzR3JpZENvb3JkKDUsIDQpXTogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGV2ZW50czogW3sgdHlwZTogXCJjaGFuZ2VNYXBcIiwgbWFwOiBcIk1hcDJcIiB9XSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoNSwgMildOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgZXZlbnRzOiBbeyB0eXBlOiBcImNoYW5nZU1hcFwiLCBtYXA6IFwiTWFwMlwiIH1dLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG4gIE1hcDI6IHtcclxuICAgIGxvd2VyU3JjOiBcIi9wdWJsaWMvaW1hZ2VzL21hcHMvVWFiTWFwMi5wbmdcIixcclxuICAgIHVwcGVyU3JjOiBcIi9wdWJsaWMvaW1hZ2VzL21hcHMvVWFiTWFwMkxvd2VyLnBuZ1wiLFxyXG4gICAgZ2FtZU9iamVjdHM6IHtcclxuICAgICAgaGVybzogbmV3IFBlcnNvbih7XHJcbiAgICAgICAgaXNQbGF5ZXJDb250cm9sbGVkOiB0cnVlLFxyXG4gICAgICAgIHg6IHdpdGhHcmlkcygzKSxcclxuICAgICAgICB5OiB3aXRoR3JpZHMoMTApLFxyXG4gICAgICAgIHNyYzogXCIvcHVibGljL2ltYWdlcy9jaGFyYWN0ZXJzL3Blb3BsZS9ucGMzLnBuZyBcIixcclxuICAgICAgfSksXHJcbiAgICAgIG5wYzM6IG5ldyBQZXJzb24oe1xyXG4gICAgICAgIHg6IHdpdGhHcmlkcygxNSksXHJcbiAgICAgICAgeTogd2l0aEdyaWRzKDEzKSxcclxuICAgICAgICBzcmM6IFwiL3B1YmxpYy9pbWFnZXMvY2hhcmFjdGVycy9wZW9wbGUvbnBjMS5wbmcgXCIsXHJcbiAgICAgICAgdGFsa2luZzogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBldmVudHM6IFtcclxuICAgICAgICAgICAgICB7IHR5cGU6IFwidGV4dE1lc3NhZ2VcIiwgdGV4dDogXCJZb3UgTWFkZSBpdCEhXCIsIGZhY2VIZXJvOiBcIm5wYzNcIiB9LFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG5cclxuICAgICAgICBiZWhhdmlvckxvb3A6IFtcclxuICAgICAgICAgIHsgdHlwZTogXCJzdGFuZFwiLCBkaXJlY3Rpb246IFwibGVmdFwiLCB0aW1lOiAyMDAwIH0sXHJcbiAgICAgICAgICB7IHR5cGU6IFwic3RhbmRcIiwgZGlyZWN0aW9uOiBcImRvd25cIiwgdGltZTogNDAwMCB9LFxyXG4gICAgICAgICAgeyB0eXBlOiBcInN0YW5kXCIsIGRpcmVjdGlvbjogXCJyaWdodFwiLCB0aW1lOiA0MDAwIH0sXHJcbiAgICAgICAgICB7IHR5cGU6IFwic3RhbmRcIiwgZGlyZWN0aW9uOiBcImRvd25cIiwgdGltZTogNDAwMCB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0pLFxyXG4gICAgfSxcclxuXHJcbiAgICB3YWxsczoge1xyXG4gICAgICBbYXNHcmlkQ29vcmQoMSwgNCldOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoMiwgNCldOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoMywgMyldOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoNCwgNCldOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoNSwgNCldOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoNiwgNCldOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoNywgNCldOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoOCwgNCldOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoOSwgNCldOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoMTAsIDMpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDExLCA0KV06IHRydWUsXHJcbiAgICAgIFthc0dyaWRDb29yZCgxMiwgMyldOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoMTMsIDQpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDE0LCA0KV06IHRydWUsXHJcbiAgICAgIFthc0dyaWRDb29yZCgxNSwgNCldOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoMTUsIDMpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDE2LCAyKV06IHRydWUsXHJcbiAgICAgIFthc0dyaWRDb29yZCgxNywgMSldOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoMTcsIDIpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDE3LCAzKV06IHRydWUsXHJcbiAgICAgIFthc0dyaWRDb29yZCgxNywgNCldOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoMTgsIDQpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDE4LCAzKV06IHRydWUsXHJcbiAgICAgIFthc0dyaWRDb29yZCgxNiwgNildOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoMTQsIDkpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDE4LCA5KV06IHRydWUsXHJcbiAgICAgIFthc0dyaWRDb29yZCgxOSwgOSldOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoMTcsIDkpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDE4LCA4KV06IHRydWUsXHJcbiAgICAgIFthc0dyaWRDb29yZCgxOSwgOCldOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoMTcsIDgpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDE5LCAxMCldOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoMTcsIDEwKV06IHRydWUsXHJcbiAgICAgIFthc0dyaWRDb29yZCgxMiwgNildOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoMTIsIDcpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDEyLCA4KV06IHRydWUsXHJcbiAgICAgIFthc0dyaWRDb29yZCgxMiwgOSldOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoMTIsIDEwKV06IHRydWUsXHJcbiAgICAgIFthc0dyaWRDb29yZCgxMiwgMTEpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDEyLCAxMildOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoMTIsIDEzKV06IHRydWUsXHJcbiAgICAgIFthc0dyaWRDb29yZCgxMiwgMTQpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDE0LCAxNCldOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoMTUsIDE0KV06IHRydWUsXHJcbiAgICAgIFthc0dyaWRDb29yZCgxNiwgMTQpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDE0LCAxMildOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoMTUsIDEyKV06IHRydWUsXHJcbiAgICAgIFthc0dyaWRDb29yZCgxNiwgMTIpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDE2LCAxMyldOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoMTQsIDE2KV06IHRydWUsXHJcbiAgICAgIFthc0dyaWRDb29yZCgxNSwgMTYpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDE2LCAxNildOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoMTcsIDE2KV06IHRydWUsXHJcbiAgICAgIFthc0dyaWRDb29yZCgxOCwgMTYpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDEsIDE5KV06IHRydWUsXHJcbiAgICAgIFthc0dyaWRDb29yZCgyLCAxOCldOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoMiwgMTkpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDIsIDIwKV06IHRydWUsXHJcbiAgICAgIFthc0dyaWRDb29yZCgyLCAyMSldOiB0cnVlLFxyXG5cclxuICAgICAgW2FzR3JpZENvb3JkKDUsIDE4KV06IHRydWUsXHJcbiAgICAgIFthc0dyaWRDb29yZCg1LCAxOSldOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoNSwgMjApXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDUsIDIxKV06IHRydWUsXHJcblxyXG4gICAgICBbYXNHcmlkQ29vcmQoOCwgMTgpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDgsIDE5KV06IHRydWUsXHJcbiAgICAgIFthc0dyaWRDb29yZCg4LCAyMCldOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoOCwgMjEpXTogdHJ1ZSxcclxuXHJcbiAgICAgIFthc0dyaWRDb29yZCgxMSwgMTgpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDExLCAxOSldOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoMTEsIDIwKV06IHRydWUsXHJcbiAgICAgIFthc0dyaWRDb29yZCgxMSwgMjEpXTogdHJ1ZSxcclxuXHJcbiAgICAgIFthc0dyaWRDb29yZCgxNCwgMTgpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDE0LCAxOSldOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoMTQsIDIwKV06IHRydWUsXHJcbiAgICAgIFthc0dyaWRDb29yZCgxNCwgMjEpXTogdHJ1ZSxcclxuXHJcbiAgICAgIFthc0dyaWRDb29yZCgxNywgMTgpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDE3LCAxOSldOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoMTcsIDIwKV06IHRydWUsXHJcbiAgICAgIFthc0dyaWRDb29yZCgxNywgMjEpXTogdHJ1ZSxcclxuXHJcbiAgICAgIFthc0dyaWRDb29yZCgwLCA1KV06IHRydWUsXHJcbiAgICAgIFthc0dyaWRDb29yZCgxLCA2KV06IHRydWUsXHJcbiAgICAgIFthc0dyaWRDb29yZCgxLCA3KV06IHRydWUsXHJcbiAgICAgIFthc0dyaWRDb29yZCgxLCA5KV06IHRydWUsXHJcbiAgICAgIFthc0dyaWRDb29yZCgxLCAxMSldOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoMSwgMTMpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDEsIDE0KV06IHRydWUsXHJcbiAgICAgIFthc0dyaWRDb29yZCgwLCAxNSldOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoMCwgMTYpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDAsIDE3KV06IHRydWUsXHJcbiAgICAgIFthc0dyaWRDb29yZCgwLCAxOCldOiB0cnVlLFxyXG5cclxuICAgICAgW2FzR3JpZENvb3JkKDMsIDIyKV06IHRydWUsXHJcbiAgICAgIFthc0dyaWRDb29yZCg0LCAyMildOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoNiwgMjIpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDcsIDIyKV06IHRydWUsXHJcbiAgICAgIFthc0dyaWRDb29yZCg5LCAyMildOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoMTAsIDIyKV06IHRydWUsXHJcbiAgICAgIFthc0dyaWRDb29yZCgxMiwgMjIpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDEzLCAyMildOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoMTUsIDIyKV06IHRydWUsXHJcbiAgICAgIFthc0dyaWRDb29yZCgxNiwgMjIpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDE4LCAyMildOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoMTksIDIyKV06IHRydWUsXHJcblxyXG4gICAgICBbYXNHcmlkQ29vcmQoMjAsIDIxKV06IHRydWUsXHJcbiAgICAgIFthc0dyaWRDb29yZCgyMCwgMjApXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDIwLCAxOSldOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoMjAsIDE4KV06IHRydWUsXHJcbiAgICAgIFthc0dyaWRDb29yZCgyMCwgMTcpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDIwLCAxNildOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoMjAsIDE1KV06IHRydWUsXHJcbiAgICAgIFthc0dyaWRDb29yZCgyMCwgMTQpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDIwLCAxMyldOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoMjAsIDEyKV06IHRydWUsXHJcbiAgICAgIFthc0dyaWRDb29yZCgyMCwgMTEpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDIwLCA3KV06IHRydWUsXHJcbiAgICAgIFthc0dyaWRDb29yZCgyMCwgNildOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoMjAsIDUpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDIwLCA0KV06IHRydWUsXHJcbiAgICAgIFthc0dyaWRDb29yZCgyMCwgMyldOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoMjAsIDIpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDIwLCAxKV06IHRydWUsXHJcbiAgICAgIFthc0dyaWRDb29yZCgxOSwgMCldOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoMTgsIDApXTogdHJ1ZSxcclxuXHJcbiAgICAgIFthc0dyaWRDb29yZCg1LCA2KV06IHRydWUsXHJcbiAgICAgIFthc0dyaWRDb29yZCg1LCA3KV06IHRydWUsXHJcbiAgICAgIFthc0dyaWRDb29yZCg1LCA5KV06IHRydWUsXHJcbiAgICAgIFthc0dyaWRDb29yZCg1LCAxMildOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoNSwgMTMpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDUsIDE0KV06IHRydWUsXHJcbiAgICAgIFthc0dyaWRDb29yZCg2LCA2KV06IHRydWUsXHJcbiAgICAgIFthc0dyaWRDb29yZCg2LCA3KV06IHRydWUsXHJcbiAgICAgIFthc0dyaWRDb29yZCg2LCA4KV06IHRydWUsXHJcbiAgICAgIFthc0dyaWRDb29yZCg2LCA5KV06IHRydWUsXHJcbiAgICAgIFthc0dyaWRDb29yZCg2LCAxMCldOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoNiwgMTEpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDYsIDEyKV06IHRydWUsXHJcbiAgICAgIFthc0dyaWRDb29yZCg2LCAxMyldOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoNiwgMTQpXTogdHJ1ZSxcclxuXHJcbiAgICAgIFthc0dyaWRDb29yZCgwLCA4KV06IHRydWUsXHJcbiAgICAgIFthc0dyaWRDb29yZCgwLCAxMCldOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoMCwgMTIpXTogdHJ1ZSxcclxuICAgIH0sXHJcblxyXG4gICAgY3V0c2NlbmVTcGFjZXM6IHtcclxuICAgICAgW2FzR3JpZENvb3JkKDEsIDgpXTogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGV2ZW50czogW3sgdHlwZTogXCJjaGFuZ2VNYXBcIiwgbWFwOiBcIkRlbW9Sb29tXCIgfV0sXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgICAgW2FzR3JpZENvb3JkKDEsIDEwKV06IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBldmVudHM6IFt7IHR5cGU6IFwiY2hhbmdlTWFwXCIsIG1hcDogXCJEZW1vUm9vbVwiIH1dLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICAgIFthc0dyaWRDb29yZCgxLCAxMildOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgZXZlbnRzOiBbeyB0eXBlOiBcImNoYW5nZU1hcFwiLCBtYXA6IFwiRGVtb1Jvb21cIiB9XSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG5cclxuICAgICAgW2FzR3JpZENvb3JkKDUsIDgpXTogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGV2ZW50czogW3sgdHlwZTogXCJjaGFuZ2VNYXBcIiwgbWFwOiBcIkRlbW9Sb29tXCIgfV0sXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgICAgW2FzR3JpZENvb3JkKDUsIDEwKV06IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBldmVudHM6IFt7IHR5cGU6IFwiY2hhbmdlTWFwXCIsIG1hcDogXCJEZW1vUm9vbVwiIH1dLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbiIsImV4cG9ydCBkZWZhdWx0IHtcclxuICBzcXVhcmVTaXplOiAzMixcclxuICBoYWxmU3F1YXJlU2l6ZTogMTYsXHJcbiAgbW92aW5nUHJvZ3Jlc3M6IDE2LFxyXG4gIGFuaW1hdGlvbkZyYW1lTGltaXQ6IDgsXHJcblxyXG4gIGV2ZW50czoge1xyXG4gICAgUGVyc29uV2Fsa2luZ0NvbXBsZXRlOiBcIlBlcnNvbldhbGtpbmdDb21wbGV0ZVwiLFxyXG4gICAgUGVyc29uU3RhbmRDb21wbGV0ZTogXCJQZXJzb25TdGFuZENvbXBsZXRlXCIsXHJcbiAgfSxcclxufTtcclxuIiwiY2xhc3MgRGlyZWN0aW9uSW5wdXQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5oZWxkRGlyZWN0aW9ucyA9IFtdO1xyXG4gICAgdGhpcy5tYXAgPSB7XHJcbiAgICAgIEFycm93VXA6IFwidXBcIixcclxuICAgICAgS2V5VzogXCJ1cFwiLFxyXG4gICAgICBBcnJvd0Rvd246IFwiZG93blwiLFxyXG4gICAgICBLZXlTOiBcImRvd25cIixcclxuICAgICAgQXJyb3dMZWZ0OiBcImxlZnRcIixcclxuICAgICAgS2V5QTogXCJsZWZ0XCIsXHJcbiAgICAgIEFycm93UmlnaHQ6IFwicmlnaHRcIixcclxuICAgICAgS2V5RDogXCJyaWdodFwiLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xyXG4gICAgICBjb25zdCBkaXIgPSB0aGlzLm1hcFtlLmNvZGVdO1xyXG5cclxuICAgICAgaWYgKGRpciAmJiB0aGlzLmhlbGREaXJlY3Rpb25zLmluZGV4T2YoZGlyKSA9PT0gLTEpIHtcclxuICAgICAgICB0aGlzLmhlbGREaXJlY3Rpb25zLnVuc2hpZnQoZGlyKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmhlbGREaXJlY3Rpb25zKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIChlKSA9PiB7XHJcbiAgICAgIGNvbnN0IGRpciA9IHRoaXMubWFwW2UuY29kZV07XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5oZWxkRGlyZWN0aW9ucy5pbmRleE9mKGRpcik7XHJcbiAgICAgIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgICAgdGhpcy5oZWxkRGlyZWN0aW9ucy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEByZXR1cm4ge0FycmF5PCdsZWZ0JyB8ICdyaWdodCcgfCAndXAnIHwgJ2Rvd24nID59XHJcbiAgICovXHJcbiAgZ2V0IGRpcmVjdGlvbigpIHtcclxuICAgIHJldHVybiB0aGlzLmhlbGREaXJlY3Rpb25zWzBdO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGlyZWN0aW9uSW5wdXQ7XHJcbiIsImltcG9ydCBPdmVyV29ybGRFdmVudCBmcm9tIFwiLi9PdmVyV29ybGRFdmVudFwiO1xyXG5pbXBvcnQgT3ZlcldvcmxkTWFwIGZyb20gXCIuL092ZXJXb3JsZE1hcFwiO1xyXG5pbXBvcnQgU3ByaXRlIGZyb20gXCIuL1Nwcml0ZVwiO1xyXG5cclxuY2xhc3MgR2FtZU9iamVjdCB7XHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBjb25maWcueFxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBjb25maWcueVxyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBjb25maWcuc3JjXHJcbiAgICogQHBhcmFtIHsnZG93bicgfCAndXAnIHwgJ2xlZnQnIHwgJ3JpZ2h0JyB8IG51bGx9IGNvbmZpZy5kaXJlY3Rpb25cclxuICAgKiBAcGFyYW0ge0Jvb2xlYW4gfCBudWxsfSBjb25maWcudXNlU2hhZG93XHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGNvbmZpZy5zcXVhcmVTaXplXHJcbiAgICogQHBhcmFtIHt7eDogTnVtYmVyLCB5OiBOdW1iZXJ9IHwgbnVsbH0gY29uZmlnLnJlbW92ZVNxdWFyZVNpemVcclxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IGNvbmZpZy5pc1BsYXllckNvbnRyb2xsZWRcclxuICAgKiBAcGFyYW0ge2FueVtdfSBjb25maWcuYmVoYXZpb3JMb29wXHJcbiAgICogQHBhcmFtIHtBcnJheTx7ZXZlbnRzOiAqW119Pn0gY29uZmlnLnRhbGtpbmdcclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcclxuICAgIHRoaXMuaWQgPSBjb25maWcuaWQgPyBjb25maWcuaWQgOiBudWxsO1xyXG4gICAgdGhpcy5pc01vdW50ZWQgPSBmYWxzZTtcclxuICAgIGNvbnN0IGlzVXNlU2hhZG93ID1cclxuICAgICAgY29uZmlnLnVzZVNoYWRvdyAhPT0gbnVsbCAmJiBjb25maWcudXNlU2hhZG93ICE9PSB1bmRlZmluZWRcclxuICAgICAgICA/IGNvbmZpZy51c2VTaGFkb3dcclxuICAgICAgICA6IHRydWU7XHJcbiAgICB0aGlzLnggPSBjb25maWcueCB8fCAwO1xyXG4gICAgdGhpcy55ID0gY29uZmlnLnkgfHwgMDtcclxuICAgIHRoaXMuZGlyZWN0aW9uID0gY29uZmlnLmRpcmVjdGlvbiB8fCBcImRvd25cIjtcclxuICAgIHRoaXMuc3ByaXRlID0gbmV3IFNwcml0ZSh7XHJcbiAgICAgIGdhbWVPYmplY3Q6IHRoaXMsXHJcbiAgICAgIHNyYzogY29uZmlnLnNyYyxcclxuICAgICAgdXNlU2hhZG93OiBpc1VzZVNoYWRvdyxcclxuICAgICAgc3F1YXJlU2l6ZTogY29uZmlnLnNxdWFyZVNpemUgPyBjb25maWcuc3F1YXJlU2l6ZSA6IDMyLFxyXG4gICAgICByZW1vdmVTcXVhcmVTaXplOiBjb25maWcucmVtb3ZlU3F1YXJlU2l6ZVxyXG4gICAgICAgID8gY29uZmlnLnJlbW92ZVNxdWFyZVNpemVcclxuICAgICAgICA6IHsgeDogOCwgeTogMTggfSxcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuYmVoYXZpb3JMb29wID0gY29uZmlnLmJlaGF2aW9yTG9vcCA/IGNvbmZpZy5iZWhhdmlvckxvb3AgOiBbXTtcclxuICAgIHRoaXMuYmVoYXZpb3JMb29wSW5kZXggPSAwO1xyXG5cclxuICAgIHRoaXMudGFsa2luZyA9IGNvbmZpZy50YWxraW5nIHx8IFtdO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtPdmVyV29ybGRNYXB9IG1hcFxyXG4gICAqL1xyXG4gIG1vdW50KG1hcCkge1xyXG4gICAgdGhpcy5pc01vdW50ZWQgPSB0cnVlO1xyXG4gICAgbWFwLmFkZFdhbGwodGhpcy54LCB0aGlzLnkpO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLmRvQmVoYXZpb3JFdmVudChtYXApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUoKSB7fVxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0ge092ZXJXb3JsZE1hcH0gbWFwXHJcbiAgICovXHJcbiAgYXN5bmMgZG9CZWhhdmlvckV2ZW50KG1hcCkge1xyXG4gICAgaWYgKFxyXG4gICAgICBtYXAuaXNDdXRzY2VuZVBsYXlpbmcgfHxcclxuICAgICAgdGhpcy5iZWhhdmlvckxvb3AubGVuZ3RoID09PSAwIHx8XHJcbiAgICAgIHRoaXMuaXNTdGFuZGluZ1xyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGxldCBldmVudCA9IHRoaXMuYmVoYXZpb3JMb29wW3RoaXMuYmVoYXZpb3JMb29wSW5kZXhdO1xyXG4gICAgZXZlbnQud2hvID0gdGhpcy5pZDtcclxuICAgIGNvbnN0IGV2ZW50SGFuZGxlciA9IG5ldyBPdmVyV29ybGRFdmVudCh7IG1hcDogbWFwLCBldmVudDogZXZlbnQgfSk7XHJcbiAgICBhd2FpdCBldmVudEhhbmRsZXIuaW5pdCgpO1xyXG4gICAgdGhpcy5iZWhhdmlvckxvb3BJbmRleCArPSAxO1xyXG4gICAgaWYgKHRoaXMuYmVoYXZpb3JMb29wSW5kZXggPT09IHRoaXMuYmVoYXZpb3JMb29wLmxlbmd0aCkge1xyXG4gICAgICB0aGlzLmJlaGF2aW9yTG9vcEluZGV4ID0gMDtcclxuICAgIH1cclxuICAgIHRoaXMuZG9CZWhhdmlvckV2ZW50KG1hcCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHYW1lT2JqZWN0O1xyXG4iLCJjbGFzcyBLZXlQcmVzc0xpc3RlbmVyIHtcclxuICAvKipcclxuICAgKiBAcGFyYW0ge1N0cmluZ30ga2V5Q29kZVxyXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Ioa2V5Q29kZSwgY2FsbGJhY2spIHtcclxuICAgIGxldCBrZXlTYWZlID0gdHJ1ZTtcclxuICAgIHRoaXMua2V5ZG93bkZ1bmN0aW9uID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgIGlmIChldmVudC5jb2RlID09PSBrZXlDb2RlKSB7XHJcbiAgICAgICAgaWYgKGtleVNhZmUpIHtcclxuICAgICAgICAgIGtleVNhZmUgPSBmYWxzZTtcclxuICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMua2V5dXBGdW5jdGlvbiA9IChldmVudCkgPT4ge1xyXG4gICAgICBpZiAoZXZlbnQuY29kZSA9PT0ga2V5Q29kZSkge1xyXG4gICAgICAgIGtleVNhZmUgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMua2V5ZG93bkZ1bmN0aW9uKTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCB0aGlzLmtleXVwRnVuY3Rpb24pO1xyXG4gIH1cclxuXHJcbiAgdW5iaW5kKCkge1xyXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5rZXlkb3duRnVuY3Rpb24pO1xyXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIHRoaXMua2V5dXBGdW5jdGlvbik7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBLZXlQcmVzc0xpc3RlbmVyO1xyXG4iLCJpbXBvcnQgeyBPdmVyV29ybGRNYXBzTGlzdCB9IGZyb20gXCIuLi9EYXRhL0FsbE1hcExpc3RcIjtcclxuaW1wb3J0IEdhbWVPYmplY3QgZnJvbSBcIi4vR2FtZU9iamVjdFwiO1xyXG5pbXBvcnQgUGVyc29uIGZyb20gXCIuL1BlcnNvblwiO1xyXG5pbXBvcnQgT3ZlcldvcmxkTWFwIGZyb20gXCIuL092ZXJXb3JsZE1hcFwiO1xyXG5pbXBvcnQgRGlyZWN0aW9uSW5wdXQgZnJvbSBcIi4vRGlyZWN0aW9uSW5wdXRcIjtcclxuaW1wb3J0IEtleVByZXNzTGlzdGVuZXIgZnJvbSBcIi4vS2V5UHJlc3NMaXN0ZW5lclwiO1xyXG5pbXBvcnQgY29uc3RhbnRzIGZyb20gXCIuLi9EYXRhL2NvbnN0YW50c1wiO1xyXG5cclxuY2xhc3MgT3ZlcldvcmxkIHtcclxuICAvKipcclxuICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXHJcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gY29uZmlnLmVsZW1lbnRcclxuICAgKiBAcGFyYW0geydoZWhlJ3wnaGFoYSd9IGNvbmZpZy50ZXN0XHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XHJcbiAgICBjb25zdCB7IGVsZW1lbnQgfSA9IGNvbmZpZztcclxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAdHlwZSB7SFRNTENhbnZhc0VsZW1lbnR9XHJcbiAgICAgKi9cclxuICAgIHRoaXMuY2FudmFzID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZS1jYW52YXNcIik7IC8vSFRNTENhbnZhc0VsZW1lbnRcclxuXHJcbiAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEB0eXBlIHtPdmVyV29ybGRNYXAgfCBudWxsfVxyXG4gICAgICovXHJcbiAgICB0aGlzLm1hcCA9IG51bGw7XHJcbiAgfVxyXG5cclxuICBzdGFydEdhbWVMb29wKCkge1xyXG4gICAgY29uc3Qgc3RlcCA9ICgpID0+IHtcclxuICAgICAgLy8gQ2xlYXIgT2YgVGhlIENhbnZhc1xyXG4gICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XHJcblxyXG4gICAgICAvLyBDYW1lcmFcclxuICAgICAgY29uc3QgY2FtZXJhUGVyc29uID0gdGhpcy5tYXAuZ2FtZU9iamVjdHMuaGVybztcclxuXHJcbiAgICAgIC8vIFVwZGF0ZSBBbGwgT2JqZWN0c1xyXG4gICAgICBPYmplY3QudmFsdWVzKHRoaXMubWFwLmdhbWVPYmplY3RzKS5mb3JFYWNoKFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBwYXJhbSB7R2FtZU9iamVjdCB8IFBlcnNvbn0gb2JqXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgKG9iaikgPT4ge1xyXG4gICAgICAgICAgb2JqLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgIGFycm93OiB0aGlzLmRpcmVjdGlvbkNvbnRyb2xsZXIuZGlyZWN0aW9uLFxyXG4gICAgICAgICAgICBtYXA6IHRoaXMubWFwLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG5cclxuICAgICAgLy8gRHJhdyB0aGUgTG93ZXIgTGF5ZXJcclxuICAgICAgdGhpcy5tYXAuZHJhd0xvd2VySW1hZ2UodGhpcy5jdHgsIGNhbWVyYVBlcnNvbik7XHJcblxyXG4gICAgICAvLyBNYWtlIFBlcnNvbiBhbmQgTWlkZGxlIExheWVyXHJcbiAgICAgIE9iamVjdC52YWx1ZXModGhpcy5tYXAuZ2FtZU9iamVjdHMpXHJcbiAgICAgICAgLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgIHJldHVybiBhLnkgLSBiLnk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuZm9yRWFjaChcclxuICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICogQHBhcmFtIHtHYW1lT2JqZWN0IHwgUGVyc29ufSBvYmpcclxuICAgICAgICAgICAqL1xyXG4gICAgICAgICAgKG9iaikgPT4ge1xyXG4gICAgICAgICAgICBvYmouc3ByaXRlLmRyYXcodGhpcy5jdHgsIGNhbWVyYVBlcnNvbik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgIHRoaXMubWFwLmRyYXdVcHBlckltYWdlKHRoaXMuY3R4LCBjYW1lcmFQZXJzb24pO1xyXG5cclxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcclxuICAgICAgICBzdGVwKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBzdGVwKCk7XHJcbiAgfVxyXG5cclxuICBiaW5kQWN0aW9uSW5wdXQoKSB7XHJcbiAgICBuZXcgS2V5UHJlc3NMaXN0ZW5lcihcIkVudGVyXCIsICgpID0+IHtcclxuICAgICAgdGhpcy5tYXAuY2hlY2tGb3JBY3Rpb25DdXRzY2VuZSgpO1xyXG4gICAgfSk7XHJcbiAgICBuZXcgS2V5UHJlc3NMaXN0ZW5lcihcIlNwYWNlXCIsICgpID0+IHtcclxuICAgICAgdGhpcy5tYXAuY2hlY2tGb3JBY3Rpb25DdXRzY2VuZSgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBiaW5kSGVyb1Bvc2l0aW9uQ2hlY2soKSB7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKGNvbnN0YW50cy5ldmVudHMuUGVyc29uV2Fsa2luZ0NvbXBsZXRlLCAoZSkgPT4ge1xyXG4gICAgICBpZiAoZS5kZXRhaWwud2hvSWQgPT09IFwiaGVyb1wiKSB7XHJcbiAgICAgICAgdGhpcy5tYXAuY2hlY2tGb3JGb290c3RlcEN1dHNjZW5lKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc3RhcnRNYXAobWFwQ29uZmlnKSB7XHJcbiAgICB0aGlzLm1hcCA9IG5ldyBPdmVyV29ybGRNYXAobWFwQ29uZmlnKTtcclxuICAgIHRoaXMubWFwLm92ZXJXb3JsZCA9IHRoaXM7XHJcbiAgICB0aGlzLm1hcC5tb3VudE9iamVjdHMoKTtcclxuICB9XHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICB0aGlzLnN0YXJ0TWFwKE92ZXJXb3JsZE1hcHNMaXN0LkRlbW9Sb29tKTtcclxuICAgIHRoaXMuYmluZEFjdGlvbklucHV0KCk7XHJcbiAgICB0aGlzLmJpbmRIZXJvUG9zaXRpb25DaGVjaygpO1xyXG5cclxuICAgIHRoaXMuZGlyZWN0aW9uQ29udHJvbGxlciA9IG5ldyBEaXJlY3Rpb25JbnB1dCgpO1xyXG4gICAgdGhpcy5kaXJlY3Rpb25Db250cm9sbGVyLmluaXQoKTtcclxuXHJcbiAgICAvLyBTdGFydCBHYW1lIExvb3BcclxuICAgIHRoaXMuc3RhcnRHYW1lTG9vcCgpO1xyXG5cclxuICAgIC8vIGlmIEN1dHNjZW5lXHJcbiAgICB0aGlzLm1hcC5zdGFydEN1dFNjZW5lKFtcclxuICAgICAgeyB0eXBlOiBcInRleHRNZXNzYWdlXCIsIHRleHQ6IFwiSGVsbG8gRmludGVjaCBHYW1lIVwiIH0sXHJcbiAgICBdKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE92ZXJXb3JsZDtcclxuIiwiaW1wb3J0IE92ZXJXb3JsZE1hcCBmcm9tIFwiLi9PdmVyV29ybGRNYXBcIjtcclxuaW1wb3J0IGNvbnN0YW50cyBmcm9tIFwiLi4vRGF0YS9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgT3ZlcldvcmxkTWFwc0xpc3QgfSBmcm9tIFwiLi4vRGF0YS9BbGxNYXBMaXN0XCI7XHJcbmltcG9ydCBUZXh0TWVzc2FnZSBmcm9tIFwiLi9UZXh0TWVzc2FnZVwiO1xyXG5pbXBvcnQgeyBvcHBvc2l0ZURpcmVjdGlvbiB9IGZyb20gXCIuLi91dGlscy9oZWxwZXJcIjtcclxuXHJcbmNsYXNzIE92ZXJXb3JsZEV2ZW50IHtcclxuICAvKipcclxuICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXHJcbiAgICogQHBhcmFtIHtPdmVyV29ybGRNYXB9IGNvbmZpZy5tYXBcclxuICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnLmV2ZW50XHJcbiAgICogQHBhcmFtIHsnd2FsaycgfCAnc3RhbmQnIH0gY29uZmlnLmV2ZW50LnR5cGVcclxuICAgKiBAcGFyYW0ge1N0cmluZ30gY29uZmlnLmV2ZW50Lndob1xyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBjb25maWcuZXZlbnQudGltZVxyXG4gICAqIEBwYXJhbSB7J3VwJyB8ICdkb3duJyB8ICdsZWZ0JyB8ICdyaWdodCcgfSBjb25maWcuZXZlbnQuZGlyZWN0aW9uXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IGNvbmZpZy5ldmVudC50ZXh0XHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IGNvbmZpZy5ldmVudC5mYWNlSGVyb1xyXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNvbmZpZy5ldmVudC5vbkNvbXBsZXRlXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XHJcbiAgICBjb25zdCB7IG1hcCwgZXZlbnQgfSA9IGNvbmZpZztcclxuICAgIHRoaXMubWFwID0gbWFwO1xyXG4gICAgdGhpcy5ldmVudCA9IGV2ZW50O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxBbnk+fVxyXG4gICAqL1xyXG4gIGluaXQoKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgdGhpc1t0aGlzLmV2ZW50LnR5cGVdKHJlc29sdmUpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzdGFuZChyZXNvbHZlKSB7XHJcbiAgICBjb25zdCB3aG8gPSB0aGlzLm1hcC5nYW1lT2JqZWN0c1t0aGlzLmV2ZW50Lndob107XHJcbiAgICB3aG8uc3RhcnRCZWhhdmlvcihcclxuICAgICAge1xyXG4gICAgICAgIG1hcDogdGhpcy5tYXAsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0eXBlOiBcInN0YW5kXCIsXHJcbiAgICAgICAgZGlyZWN0aW9uOiB0aGlzLmV2ZW50LmRpcmVjdGlvbixcclxuICAgICAgICB0aW1lOiB0aGlzLmV2ZW50LnRpbWUsXHJcbiAgICAgIH1cclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgY29tcGxldGVIYW5kbGVyID0gKGUpID0+IHtcclxuICAgICAgaWYgKGUuZGV0YWlsLndob0lkID09PSB0aGlzLmV2ZW50Lndobykge1xyXG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgICBjb25zdGFudHMuZXZlbnRzLlBlcnNvblN0YW5kQ29tcGxldGUsXHJcbiAgICAgICAgICBjb21wbGV0ZUhhbmRsZXJcclxuICAgICAgICApO1xyXG4gICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICBjb25zdGFudHMuZXZlbnRzLlBlcnNvblN0YW5kQ29tcGxldGUsXHJcbiAgICAgIGNvbXBsZXRlSGFuZGxlclxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHdhbGsocmVzb2x2ZSkge1xyXG4gICAgY29uc3Qgd2hvID0gdGhpcy5tYXAuZ2FtZU9iamVjdHNbdGhpcy5ldmVudC53aG9dO1xyXG4gICAgd2hvLnN0YXJ0QmVoYXZpb3IoXHJcbiAgICAgIHtcclxuICAgICAgICBtYXA6IHRoaXMubWFwLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdHlwZTogXCJ3YWxrXCIsXHJcbiAgICAgICAgZGlyZWN0aW9uOiB0aGlzLmV2ZW50LmRpcmVjdGlvbixcclxuICAgICAgICByZXRyeTogdHJ1ZSxcclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBjb21wbGV0ZUhhbmRsZXIgPSAoZSkgPT4ge1xyXG4gICAgICBpZiAoZS5kZXRhaWwud2hvSWQgPT09IHRoaXMuZXZlbnQud2hvKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICAgIGNvbnN0YW50cy5ldmVudHMuUGVyc29uV2Fsa2luZ0NvbXBsZXRlLFxyXG4gICAgICAgICAgY29tcGxldGVIYW5kbGVyXHJcbiAgICAgICAgKTtcclxuICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgY29uc3RhbnRzLmV2ZW50cy5QZXJzb25XYWxraW5nQ29tcGxldGUsXHJcbiAgICAgIGNvbXBsZXRlSGFuZGxlclxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHRleHRNZXNzYWdlKHJlc29sdmUpIHtcclxuICAgIGlmICh0aGlzLmV2ZW50LmZhY2VIZXJvKSB7XHJcbiAgICAgIGNvbnN0IG9iaiA9IHRoaXMubWFwLmdhbWVPYmplY3RzW3RoaXMuZXZlbnQuZmFjZUhlcm9dO1xyXG4gICAgICBvYmouZGlyZWN0aW9uID0gb3Bwb3NpdGVEaXJlY3Rpb24odGhpcy5tYXAuZ2FtZU9iamVjdHNbXCJoZXJvXCJdLmRpcmVjdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbWVzc2FnZSA9IG5ldyBUZXh0TWVzc2FnZSh7XHJcbiAgICAgIHRleHQ6IHRoaXMuZXZlbnQudGV4dCxcclxuICAgICAgb25Db21wbGV0ZTogKCkgPT4gcmVzb2x2ZSgpLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgbWVzc2FnZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZS1jb250YWluZXJcIik7XHJcbiAgICBtZXNzYWdlLmluaXQobWVzc2FnZUNvbnRhaW5lcik7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VNYXAocmVzb2x2ZSkge1xyXG4gICAgdGhpcy5tYXAub3ZlcldvcmxkLnN0YXJ0TWFwKE92ZXJXb3JsZE1hcHNMaXN0W3RoaXMuZXZlbnQubWFwXSk7XHJcbiAgICByZXNvbHZlKCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPdmVyV29ybGRFdmVudDtcclxuIiwiaW1wb3J0IHsgbmV4dFBvc2l0aW9uLCB3aXRoR3JpZHMgfSBmcm9tIFwiLi4vdXRpbHMvaGVscGVyXCI7XHJcbmltcG9ydCBHYW1lT2JqZWN0IGZyb20gXCIuL0dhbWVPYmplY3RcIjtcclxuaW1wb3J0IE92ZXJXb3JsZEV2ZW50IGZyb20gXCIuL092ZXJXb3JsZEV2ZW50XCI7XHJcbmltcG9ydCBPdmVyV29ybGQgZnJvbSBcIi4vT3ZlcldvcmxkXCI7XHJcblxyXG4vKipcclxuICogQG5hbWUgT3ZlcldvcmxNYXBcclxuICovXHJcbmNsYXNzIE92ZXJXb3JsZE1hcCB7XHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBjb25maWcubG93ZXJTcmNcclxuICAgKiBAcGFyYW0ge1N0cmluZ30gY29uZmlnLnVwcGVyU3JjXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZy53YWxsc1xyXG4gICAqIEBwYXJhbSB7QXJyYXk8e2V2ZW50czogKltdfT59IGNvbmZpZy5jdXRzY2VuZVNwYWNlc1xyXG4gICAqIEBwYXJhbSB7e2hlcm86IEdhbWVPYmplY3QsIG5wYzE6IEdhbWVPYmplY3QsIG5wYzI6IEdhbWVPYmplY3R9fSBjb25maWcuZ2FtZU9iamVjdHNcclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcclxuICAgIC8qKlxyXG4gICAgICogQHR5cGUge092ZXJXb3JsZH1cclxuICAgICAqL1xyXG4gICAgdGhpcy5vdmVyV29ybGQgPSBudWxsO1xyXG4gICAgdGhpcy5nYW1lT2JqZWN0cyA9IGNvbmZpZy5nYW1lT2JqZWN0cztcclxuICAgIHRoaXMud2FsbHMgPSBjb25maWcud2FsbHMgfHwge307XHJcbiAgICB0aGlzLmN1dHNjZW5lU3BhY2VzID0gY29uZmlnLmN1dHNjZW5lU3BhY2VzIHx8IFtdO1xyXG5cclxuICAgIHRoaXMubG93ZXJMYXllciA9IG5ldyBJbWFnZSgpO1xyXG4gICAgdGhpcy5sb3dlckxheWVyLnNyYyA9IGNvbmZpZy5sb3dlclNyYztcclxuXHJcbiAgICB0aGlzLnVwcGVyTGF5ZXIgPSBuZXcgSW1hZ2UoKTtcclxuICAgIHRoaXMudXBwZXJMYXllci5zcmMgPSBjb25maWcudXBwZXJTcmM7XHJcblxyXG4gICAgdGhpcy5pc0N1dHNjZW5lUGxheWluZyA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtDYW52YXNSZW5kZXJpbmdDb250ZXh0MkR9IGN0eFxyXG4gICAqIEBwYXJhbSB7R2FtZU9iamVjdH0gY2FtZXJhUGVyc29uXHJcbiAgICovXHJcbiAgZHJhd0xvd2VySW1hZ2UoY3R4LCBjYW1lcmFQZXJzb24pIHtcclxuICAgIGN0eC5kcmF3SW1hZ2UoXHJcbiAgICAgIHRoaXMubG93ZXJMYXllcixcclxuICAgICAgd2l0aEdyaWRzKDEwLjUpIC0gY2FtZXJhUGVyc29uLngsXHJcbiAgICAgIHdpdGhHcmlkcyg2KSAtIGNhbWVyYVBlcnNvbi55XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtDYW52YXNSZW5kZXJpbmdDb250ZXh0MkR9IGN0eFxyXG4gICAqIEBwYXJhbSB7R2FtZU9iamVjdH0gY2FtZXJhUGVyc29uXHJcbiAgICovXHJcbiAgZHJhd1VwcGVySW1hZ2UoY3R4LCBjYW1lcmFQZXJzb24pIHtcclxuICAgIGN0eC5kcmF3SW1hZ2UoXHJcbiAgICAgIHRoaXMudXBwZXJMYXllcixcclxuICAgICAgd2l0aEdyaWRzKDEwLjUpIC0gY2FtZXJhUGVyc29uLngsXHJcbiAgICAgIHdpdGhHcmlkcyg2KSAtIGNhbWVyYVBlcnNvbi55XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGN1clhcclxuICAgKiBAcGFyYW0ge051bWJlcn0gY3VyWVxyXG4gICAqIEBwYXJhbSB7J3VwJyB8ICdkb3duJyB8ICdsZWZ0JyB8ICdyaWdodCcgfSBkaXJlY3Rpb25cclxuICAgKi9cclxuICBpc1NwYWNlVGFrZW4oY3VyWCwgY3VyWSwgZGlyZWN0aW9uKSB7XHJcbiAgICBjb25zdCB7IHgsIHkgfSA9IG5leHRQb3NpdGlvbihjdXJYLCBjdXJZLCBkaXJlY3Rpb24pO1xyXG4gICAgcmV0dXJuIHRoaXMud2FsbHNbYCR7eH0sJHt5fWBdIHx8IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgLy8gTW91bnRpbmcgT2JqZWN0XHJcbiAgbW91bnRPYmplY3RzKCkge1xyXG4gICAgLy8gT2JqZWN0LnZhbHVlcyh0aGlzLmdhbWVPYmplY3RzKS5tYXAoKG9iaikgPT4ge1xyXG4gICAgLy8gICBvYmoubW91bnQodGhpcyk7XHJcbiAgICAvLyB9KTtcclxuXHJcbiAgICBPYmplY3Qua2V5cyh0aGlzLmdhbWVPYmplY3RzKS5tYXAoKGtleSkgPT4ge1xyXG4gICAgICBsZXQgb2JqZWN0ID0gdGhpcy5nYW1lT2JqZWN0c1trZXldO1xyXG4gICAgICBvYmplY3QuaWQgPSBrZXk7XHJcbiAgICAgIG9iamVjdC5tb3VudCh0aGlzKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gTWFwIEluaXRpYWxpemVcclxuXHJcbiAgY2hlY2tGb3JBY3Rpb25DdXRzY2VuZSgpIHtcclxuICAgIGNvbnN0IGhlcm8gPSB0aGlzLmdhbWVPYmplY3RzW1wiaGVyb1wiXTtcclxuICAgIGNvbnN0IG5leHRDb29yZCA9IG5leHRQb3NpdGlvbihoZXJvLngsIGhlcm8ueSwgaGVyby5kaXJlY3Rpb24pO1xyXG4gICAgY29uc3QgbWF0Y2ggPSBPYmplY3QudmFsdWVzKHRoaXMuZ2FtZU9iamVjdHMpLmZpbmQoKG9iamVjdCkgPT4ge1xyXG4gICAgICByZXR1cm4gYCR7b2JqZWN0Lnh9LCR7b2JqZWN0Lnl9YCA9PT0gYCR7bmV4dENvb3JkLnh9LCR7bmV4dENvb3JkLnl9YDtcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghdGhpcy5pc0N1dHNjZW5lUGxheWluZyAmJiBtYXRjaCAmJiBtYXRjaC50YWxraW5nLmxlbmd0aCkge1xyXG4gICAgICB0aGlzLnN0YXJ0Q3V0U2NlbmUobWF0Y2gudGFsa2luZ1swXS5ldmVudHMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2hlY2tGb3JGb290c3RlcEN1dHNjZW5lKCkge1xyXG4gICAgY29uc3QgaGVybyA9IHRoaXMuZ2FtZU9iamVjdHNbXCJoZXJvXCJdO1xyXG4gICAgY29uc3QgbWF0Y2ggPSB0aGlzLmN1dHNjZW5lU3BhY2VzW2Ake2hlcm8ueH0sJHtoZXJvLnl9YF07XHJcbiAgICBpZiAoIXRoaXMuaXNDdXRzY2VuZVBsYXlpbmcgJiYgbWF0Y2gpIHtcclxuICAgICAgdGhpcy5zdGFydEN1dFNjZW5lKG1hdGNoWzBdLmV2ZW50cyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhc3luYyBzdGFydEN1dFNjZW5lKGV2ZW50cykge1xyXG4gICAgdGhpcy5pc0N1dHNjZW5lUGxheWluZyA9IHRydWU7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGV2ZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBldmVudEhhbmRsZXIgPSBuZXcgT3ZlcldvcmxkRXZlbnQoe1xyXG4gICAgICAgIGV2ZW50OiBldmVudHNbaV0sXHJcbiAgICAgICAgbWFwOiB0aGlzLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGF3YWl0IGV2ZW50SGFuZGxlci5pbml0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgT2JqZWN0LmtleXModGhpcy5nYW1lT2JqZWN0cykubWFwKChrZXkpID0+IHtcclxuICAgICAgbGV0IG9iamVjdCA9IHRoaXMuZ2FtZU9iamVjdHNba2V5XTtcclxuICAgICAgb2JqZWN0LmlkID0ga2V5O1xyXG4gICAgICBvYmplY3QubW91bnQodGhpcyk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuaXNDdXRzY2VuZVBsYXlpbmcgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIC8vIE90aGVyIE9iamVjdCBXYWxsc1xyXG4gIGFkZFdhbGwoeCwgeSkge1xyXG4gICAgdGhpcy53YWxsc1tgJHt4fSwke3l9YF0gPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlV2FsbCh4LCB5KSB7XHJcbiAgICBkZWxldGUgdGhpcy53YWxsc1tgJHt4fSwke3l9YF07XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHsndXAnIHwgJ2Rvd24nIHwgJ2xlZnQnIHwgJ3JpZ2h0JyB9IGRpcmVjdGlvblxyXG4gICAqL1xyXG4gIG1vdmVXYWxsKHdhc1gsIHdhc1ksIGRpcmVjdGlvbikge1xyXG4gICAgdGhpcy5yZW1vdmVXYWxsKHdhc1gsIHdhc1kpO1xyXG4gICAgY29uc3QgeyB4LCB5IH0gPSBuZXh0UG9zaXRpb24od2FzWCwgd2FzWSwgZGlyZWN0aW9uKTtcclxuICAgIHRoaXMuYWRkV2FsbCh4LCB5KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE92ZXJXb3JsZE1hcDtcclxuIiwiaW1wb3J0IGNvbnN0YW50cyBmcm9tIFwiLi4vRGF0YS9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgZW1pdEV2ZW50IH0gZnJvbSBcIi4uL3V0aWxzL2hlbHBlclwiO1xyXG5pbXBvcnQgR2FtZU9iamVjdCBmcm9tIFwiLi9HYW1lT2JqZWN0XCI7XHJcbmltcG9ydCBPdmVyV29ybGRNYXAgZnJvbSBcIi4vT3ZlcldvcmxkTWFwXCI7XHJcblxyXG4vKipcclxuICovXHJcbmNsYXNzIFBlcnNvbiBleHRlbmRzIEdhbWVPYmplY3Qge1xyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7R2FtZU9iamVjdH0gY29uZmlnXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XHJcbiAgICBzdXBlcihjb25maWcpO1xyXG5cclxuICAgIHRoaXMubW92aW5nUHJvZ3Jlc3NSZW1haW5pZyA9IDA7XHJcblxyXG4gICAgdGhpcy5pc1BsYXllckNvbnRyb2xsZWQgPSBjb25maWcuaXNQbGF5ZXJDb250cm9sbGVkIHx8IGZhbHNlO1xyXG5cclxuICAgIHRoaXMuaXNTdGFuZGluZyA9IGZhbHNlO1xyXG5cclxuICAgIHRoaXMuZGlyZWN0aW9uVXBkYXRlID0ge1xyXG4gICAgICB1cDogW1wieVwiLCAtMV0sXHJcbiAgICAgIGRvd246IFtcInlcIiwgMV0sXHJcbiAgICAgIGxlZnQ6IFtcInhcIiwgLTFdLFxyXG4gICAgICByaWdodDogW1wieFwiLCAxXSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0ge09iamVjdH0gc3RhdGVcclxuICAgKiBAcGFyYW0geydkb3duJyB8ICd1cCcgfCAnbGVmdCcgfCAncmlnaHQnIH0gc3RhdGUuYXJyb3dcclxuICAgKiBAcGFyYW0ge092ZXJXb3JsZE1hcH0gc3RhdGUubWFwXHJcbiAgICovXHJcbiAgdXBkYXRlKHN0YXRlKSB7XHJcbiAgICBpZiAodGhpcy5tb3ZpbmdQcm9ncmVzc1JlbWFpbmlnID4gMCkge1xyXG4gICAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgdGhpcy5pc1BsYXllckNvbnRyb2xsZWQgJiZcclxuICAgICAgICAhc3RhdGUubWFwLmlzQ3V0c2NlbmVQbGF5aW5nICYmXHJcbiAgICAgICAgc3RhdGUuYXJyb3dcclxuICAgICAgKSB7XHJcbiAgICAgICAgdGhpcy5zdGFydEJlaGF2aW9yKHN0YXRlLCB7XHJcbiAgICAgICAgICB0eXBlOiBcIndhbGtcIixcclxuICAgICAgICAgIGRpcmVjdGlvbjogc3RhdGUuYXJyb3csXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMudXBkYXRlU3ByaW50KHN0YXRlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZVxyXG4gICAqIEBwYXJhbSB7T3ZlcldvcmxkTWFwfSBzdGF0ZS5tYXBcclxuICAgKiBAcGFyYW0ge09iamVjdH0gYmVoYXZpb3JcclxuICAgKiBAcGFyYW0geyd3YWxrJyB8ICdzdGFuZCcgfSBiZWhhdmlvci50eXBlXHJcbiAgICogQHBhcmFtIHsndXAnIHwgJ2Rvd24nIHwgJ2xlZnQnIHwgJ3JpZ2h0JyB9IGJlaGF2aW9yLmRpcmVjdGlvblxyXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gYmVoYXZpb3IucmV0cnlcclxuICAgKiBAcGFyYW0ge051bWJlcn0gYmVoYXZpb3IudGltZVxyXG4gICAqL1xyXG4gIHN0YXJ0QmVoYXZpb3Ioc3RhdGUsIGJlaGF2aW9yKSB7XHJcbiAgICB0aGlzLmRpcmVjdGlvbiA9IGJlaGF2aW9yLmRpcmVjdGlvbjtcclxuXHJcbiAgICBpZiAoYmVoYXZpb3IudHlwZSA9PT0gXCJ3YWxrXCIpIHtcclxuICAgICAgY29uc3QgaXNTcGFjZVRha2VuID0gc3RhdGUubWFwLmlzU3BhY2VUYWtlbihcclxuICAgICAgICB0aGlzLngsXHJcbiAgICAgICAgdGhpcy55LFxyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uXHJcbiAgICAgICk7XHJcbiAgICAgIGlmIChpc1NwYWNlVGFrZW4pIHtcclxuICAgICAgICBiZWhhdmlvci5yZXRyeSAmJlxyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRCZWhhdmlvcihzdGF0ZSwgYmVoYXZpb3IpO1xyXG4gICAgICAgICAgfSwgMTApO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBzdGF0ZS5tYXAubW92ZVdhbGwodGhpcy54LCB0aGlzLnksIHRoaXMuZGlyZWN0aW9uKTtcclxuICAgICAgdGhpcy5tb3ZpbmdQcm9ncmVzc1JlbWFpbmlnID0gY29uc3RhbnRzLm1vdmluZ1Byb2dyZXNzO1xyXG4gICAgICB0aGlzLnVwZGF0ZVNwcmludChzdGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGJlaGF2aW9yLnR5cGUgPT09IFwic3RhbmRcIikge1xyXG4gICAgICB0aGlzLmlzU3RhbmRpbmcgPSB0cnVlO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBlbWl0RXZlbnQoY29uc3RhbnRzLmV2ZW50cy5QZXJzb25TdGFuZENvbXBsZXRlLCB7IHdob0lkOiB0aGlzLmlkIH0pO1xyXG4gICAgICAgIHRoaXMuaXNTdGFuZGluZyA9IGZhbHNlO1xyXG4gICAgICB9LCBiZWhhdmlvci50aW1lKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZVBvc2l0aW9uKCkge1xyXG4gICAgaWYgKHRoaXMubW92aW5nUHJvZ3Jlc3NSZW1haW5pZyA+IDApIHtcclxuICAgICAgY29uc3QgW3Byb3BlcnR5LCBjaGFuZ2VdID0gdGhpcy5kaXJlY3Rpb25VcGRhdGVbdGhpcy5kaXJlY3Rpb25dO1xyXG4gICAgICB0aGlzW3Byb3BlcnR5XSArPSBjaGFuZ2U7XHJcbiAgICAgIHRoaXMubW92aW5nUHJvZ3Jlc3NSZW1haW5pZyAtPSAxO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMubW92aW5nUHJvZ3Jlc3NSZW1haW5pZyA9PT0gMCkge1xyXG4gICAgICBlbWl0RXZlbnQoY29uc3RhbnRzLmV2ZW50cy5QZXJzb25XYWxraW5nQ29tcGxldGUsIHtcclxuICAgICAgICB3aG9JZDogdGhpcy5pZCxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVTcHJpbnQoKSB7XHJcbiAgICBpZiAodGhpcy5tb3ZpbmdQcm9ncmVzc1JlbWFpbmlnID4gMCkge1xyXG4gICAgICB0aGlzLnNwcml0ZS5zZXRBbmltYXRpb24oXCJ3YWxrXCIgKyBjYXBpdGFsaXplRmlyc3RMZXR0ZXIodGhpcy5kaXJlY3Rpb24pKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc3ByaXRlLnNldEFuaW1hdGlvbihcImlkbGVcIiArIGNhcGl0YWxpemVGaXJzdExldHRlcih0aGlzLmRpcmVjdGlvbikpO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEByZXR1cm4ge1N0cmluZ31cclxuICovXHJcbmZ1bmN0aW9uIGNhcGl0YWxpemVGaXJzdExldHRlcihzdHJpbmcpIHtcclxuICByZXR1cm4gc3RyaW5nLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQZXJzb247XHJcbiIsImNsYXNzIFJldmVhbGluZ1RleHQge1xyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcclxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBjb25maWcuZWxlbWVudFxyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBjb25maWcudGV4dFxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBjb25maWcuc3BlZWRcclxuICAgKiBAcGFyYW0ge051bWJlciB8IG51bGx9IGNvbmZpZy50aW1lb3V0XHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XHJcbiAgICB0aGlzLmVsZW1lbnQgPSBjb25maWcuZWxlbWVudDtcclxuICAgIHRoaXMudGV4dCA9IGNvbmZpZy50ZXh0O1xyXG4gICAgdGhpcy5zcGVlZCA9IGNvbmZpZy5zcGVlZCB8fCA3MDtcclxuXHJcbiAgICB0aGlzLnRpbWVvdXQgPSBudWxsO1xyXG4gICAgdGhpcy5pc0RvbmUgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICBsZXQgY2hhcmFjdGVycyA9IFtdO1xyXG4gICAgdGhpcy50ZXh0LnNwbGl0KFwiXCIpLmZvckVhY2goKGNoYXIpID0+IHtcclxuICAgICAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IGNoYXI7XHJcbiAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChzcGFuKTtcclxuXHJcbiAgICAgIGNoYXJhY3RlcnMucHVzaCh7IHNwYW4sIGRlbGF5QWZ0ZXI6IGNoYXIgPT09IFwiIFwiID8gMCA6IHRoaXMuc3BlZWQgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJldmVhbGluZ1RleHQ7XHJcbiIsImltcG9ydCBjb25zdGFudHMgZnJvbSBcIi4uL0RhdGEvY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IGRyYXdJbWFnZSwgd2l0aEdyaWRzIH0gZnJvbSBcIi4uL3V0aWxzL2hlbHBlclwiO1xyXG5pbXBvcnQgR2FtZU9iamVjdCBmcm9tIFwiLi9HYW1lT2JqZWN0XCI7XHJcblxyXG4vKipcclxuICogQG5hbWUgU3ByaXRlXHJcbiAqL1xyXG5jbGFzcyBTcHJpdGUge1xyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcclxuICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnLmFuaW1hdGlvbnNcclxuICAgKiBAcGFyYW0geydpZGxlRG93bicgfCAnaWRsZVJpZ2h0JyB8ICdpZGxlVXAnIHwgJ2lkbGVMZWZ0JyB8ICd3YWxrRG93bicgfCd3YWxrUmlnaHQnIHwgJ3dhbGtVcCcgfCAnd2Fsa0xlZnQnIH0gY29uZmlnLmN1cnJlbnRBbmltYXRpb25cclxuICAgKiBAcGFyYW0ge1N0cmluZ30gY29uZmlnLnNyY1xyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBjb25maWcuc3F1YXJlU2l6ZVxyXG4gICAqIEBwYXJhbSB7R2FtZU9iamVjdH0gY29uZmlnLmdhbWVPYmplY3RcclxuICAgKiBAcGFyYW0ge051bWJlciB8IG51bGx9IGNvbmZpZy5hbmltYXRpb25GcmFtZUxpbWl0XHJcbiAgICogQHBhcmFtIHt7ICB4OiBOdW1iZXIsIHk6IE51bWJlcn0gfCBudWxsfSBjb25maWcucmVtb3ZlU3F1YXJlU2l6ZVxyXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gY29uZmlnLnVzZVNoYWRvd1xyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xyXG4gICAgLy8gU3F1YXJlU2l6ZSBEZWZhdWx0IDMyXHJcbiAgICB0aGlzLnNxdWFyZVNpemUgPSBjb25maWcuc3F1YXJlU2l6ZSB8fCBjb25zdGFudHMuc3F1YXJlU2l6ZTtcclxuICAgIHRoaXMucmVtb3ZlU3F1YXJlU2l6ZSA9IGNvbmZpZy5yZW1vdmVTcXVhcmVTaXplXHJcbiAgICAgID8gY29uZmlnLnJlbW92ZVNxdWFyZVNpemVcclxuICAgICAgOiB7IHg6IDgsIHk6IDE4IH07XHJcblxyXG4gICAgLy8gU2V0dXAgdGhlIGltYWdlXHJcbiAgICBkcmF3SW1hZ2UoXHJcbiAgICAgIGNvbmZpZy5zcmMgfHwgXCIvcHVibGljL2ltYWdlcy9jaGFyYWN0ZXJzL3Blb3BsZS9oZXJvLnBuZ1wiLFxyXG4gICAgICAoaW1hZ2UpID0+IHtcclxuICAgICAgICB0aGlzLmltYWdlID0gaW1hZ2U7XHJcbiAgICAgICAgdGhpcy5pbWFnZUlzTG9hZGVkID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICAvLyBTaGFkb3cgSW1hZ2VcclxuICAgIHRoaXMudXNlU2hhZG93ID0gY29uZmlnLnVzZVNoYWRvdyB8fCBmYWxzZTtcclxuICAgIGlmICh0aGlzLnVzZVNoYWRvdykge1xyXG4gICAgICBkcmF3SW1hZ2UoXCIvcHVibGljL2ltYWdlcy9jaGFyYWN0ZXJzL3NoYWRvdy5wbmdcIiwgKGltYWdlKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zaGFkb3dJbWFnZSA9IGltYWdlO1xyXG4gICAgICAgIHRoaXMuc2hhZG93SW1hZ2VMb2FkZWQgPSB0cnVlO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDb25maXVyZSBBbmltYXRpb24gQW5kIEluaXRpYWwgU3RhdGVcclxuICAgIHRoaXMuYW5pbWF0aW9ucyA9IGNvbmZpZy5hbmltYXRpb25zIHx8IHtcclxuICAgICAgaWRsZURvd246IFtbMCwgMF1dLFxyXG4gICAgICBpZGxlUmlnaHQ6IFtbMCwgMV1dLFxyXG4gICAgICBpZGxlVXA6IFtbMCwgMl1dLFxyXG4gICAgICBpZGxlTGVmdDogW1swLCAzXV0sXHJcbiAgICAgIHdhbGtEb3duOiBbXHJcbiAgICAgICAgWzEsIDBdLCAvLyBpbWFnZSByb3cgMSBjb2wgMVxyXG4gICAgICAgIFswLCAwXSwgLy8gaW1hZ2Ugcm93IDEgY29sIDJcclxuICAgICAgICBbMywgMF0sIC8vIGltYWdlIHJvdyAxIGNvbCA0XHJcbiAgICAgICAgWzAsIDBdLCAvLyBpbWFnZSByb3cgMSBjb2wgMlxyXG4gICAgICBdLFxyXG4gICAgICB3YWxrUmlnaHQ6IFtcclxuICAgICAgICBbMSwgMV0sIC8vIGltYWdlIHJvdyAxIGNvbCAxXHJcbiAgICAgICAgWzAsIDFdLCAvLyBpbWFnZSByb3cgMSBjb2wgMlxyXG4gICAgICAgIFszLCAxXSwgLy8gaW1hZ2Ugcm93IDEgY29sIDRcclxuICAgICAgICBbMCwgMV0sIC8vIGltYWdlIHJvdyAxIGNvbCAyXHJcbiAgICAgIF0sXHJcbiAgICAgIHdhbGtVcDogW1xyXG4gICAgICAgIFsxLCAyXSwgLy8gaW1hZ2Ugcm93IDEgY29sIDFcclxuICAgICAgICBbMCwgMl0sIC8vIGltYWdlIHJvdyAxIGNvbCAyXHJcbiAgICAgICAgWzMsIDJdLCAvLyBpbWFnZSByb3cgMSBjb2wgNFxyXG4gICAgICAgIFswLCAyXSwgLy8gaW1hZ2Ugcm93IDEgY29sIDJcclxuICAgICAgXSxcclxuICAgICAgd2Fsa0xlZnQ6IFtcclxuICAgICAgICBbMSwgM10sIC8vIGltYWdlIHJvdyAxIGNvbCAxXHJcbiAgICAgICAgWzAsIDNdLCAvLyBpbWFnZSByb3cgMSBjb2wgMlxyXG4gICAgICAgIFszLCAzXSwgLy8gaW1hZ2Ugcm93IDEgY29sIDRcclxuICAgICAgICBbMCwgM10sIC8vIGltYWdlIHJvdyAxIGNvbCAyXHJcbiAgICAgIF0sXHJcbiAgICB9O1xyXG5cclxuICAgIC8vIFNldCBBbmltYXRpb24gRnJhbWVcclxuICAgIHRoaXMuY3VycmVudEFuaW1hdGlvbiA9IGNvbmZpZy5jdXJyZW50QW5pbWF0aW9uIHx8IFwiaWRsZURvd25cIjtcclxuICAgIHRoaXMuY3VycmVudEFuaW1hdGlvbkZyYW1lID0gMDtcclxuICAgIHRoaXMuYW5pbWF0aW9uRnJhbWVMaW1pdCA9XHJcbiAgICAgIGNvbmZpZy5hbmltYXRpb25GcmFtZUxpbWl0IHx8IGNvbnN0YW50cy5hbmltYXRpb25GcmFtZUxpbWl0O1xyXG4gICAgdGhpcy5hbmltYXRpb25GcmFtZVByb2dyZXNzID0gdGhpcy5hbmltYXRpb25GcmFtZUxpbWl0O1xyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKFwiIHRoaXMuYW5pbWF0aW9uRnJhbWVQcm9ncmVzc1wiLCB0aGlzLmFuaW1hdGlvbkZyYW1lUHJvZ3Jlc3MpO1xyXG4gICAgLy9cclxuICAgIHRoaXMuZ2FtZU9iamVjdCA9IGNvbmZpZy5nYW1lT2JqZWN0O1xyXG4gIH1cclxuXHJcbiAgLy8gR2V0IEN1cnJlbnQgQW5pbWF0aW9uIEZyYW1lXHJcbiAgLyoqXHJcbiAgICogQHJldHVybiB7W051bWJlciwgTnVtYmVyXSB8IHVuZGVmaW5lZCB9XHJcbiAgICovXHJcbiAgZ2V0IGZyYW1lKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuYW5pbWF0aW9uc1t0aGlzLmN1cnJlbnRBbmltYXRpb25dW3RoaXMuY3VycmVudEFuaW1hdGlvbkZyYW1lXTtcclxuICB9XHJcblxyXG4gIHNldEFuaW1hdGlvbihrZXkpIHtcclxuICAgIGlmICh0aGlzLmN1cnJlbnRBbmltYXRpb24gIT09IGtleSkge1xyXG4gICAgICB0aGlzLmN1cnJlbnRBbmltYXRpb24gPSBrZXk7XHJcbiAgICAgIHRoaXMuY3VycmVudEFuaW1hdGlvbkZyYW1lID0gMDtcclxuICAgICAgdGhpcy5hbmltYXRpb25GcmFtZVByb2dyZXNzID0gdGhpcy5hbmltYXRpb25GcmFtZUxpbWl0O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlQW5pbWF0aW9uUHJvZ3Jlc3MoKSB7XHJcbiAgICAvLyBEb3dudGljayBGcmFtZSBQcm9ncmVzc1xyXG4gICAgaWYgKHRoaXMuYW5pbWF0aW9uRnJhbWVQcm9ncmVzcyA+IDApIHtcclxuICAgICAgdGhpcy5hbmltYXRpb25GcmFtZVByb2dyZXNzIC09IDE7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXNldCB0aGUgY291bnRlclxyXG4gICAgdGhpcy5hbmltYXRpb25GcmFtZVByb2dyZXNzID0gdGhpcy5hbmltYXRpb25GcmFtZUxpbWl0O1xyXG4gICAgdGhpcy5jdXJyZW50QW5pbWF0aW9uRnJhbWUgKz0gMTtcclxuXHJcbiAgICBpZiAodGhpcy5mcmFtZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMuY3VycmVudEFuaW1hdGlvbkZyYW1lID0gMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERyYXcgQ29udGV4dFxyXG4gICAqIEBwYXJhbSB7Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEfSBjdHhcclxuICAgKiBAcGFyYW0ge0dhbWVPYmplY3R9IGNhbWVyYVBlcnNvblxyXG4gICAqL1xyXG4gIGRyYXcoY3R4LCBjYW1lcmFQZXJzb24pIHtcclxuICAgIGNvbnN0IHggPVxyXG4gICAgICB0aGlzLmdhbWVPYmplY3QueCAtXHJcbiAgICAgIHRoaXMucmVtb3ZlU3F1YXJlU2l6ZS54ICtcclxuICAgICAgd2l0aEdyaWRzKDEwLjUpIC1cclxuICAgICAgY2FtZXJhUGVyc29uLng7IC8vIFJlbW92ZSBVbm5lY2Vzc2FyeSB3aWR0aFxyXG4gICAgY29uc3QgeSA9XHJcbiAgICAgIHRoaXMuZ2FtZU9iamVjdC55IC1cclxuICAgICAgdGhpcy5yZW1vdmVTcXVhcmVTaXplLnkgK1xyXG4gICAgICB3aXRoR3JpZHMoNikgLVxyXG4gICAgICBjYW1lcmFQZXJzb24ueTsgLy8gUmVtb3ZlIFVubmVjZXNzYXJ5IGhlaWdodFxyXG4gICAgY29uc3QgW2ZyYW1lWCwgZnJhbWVZXSA9IHRoaXMuZnJhbWU7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmZyYW1lKTtcclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIkZyYW1lWFwiLCBmcmFtZVgpO1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJGcmFtZVlcIiwgZnJhbWVZKTtcclxuXHJcbiAgICAvLyBXaGVuIEltYWdlIExvYWRpbmdcclxuICAgIHRoaXMuaW1hZ2VJc0xvYWRlZCAmJlxyXG4gICAgICBjdHguZHJhd0ltYWdlKFxyXG4gICAgICAgIHRoaXMuaW1hZ2UsIC8vIEluc2VydCBJbWFnZVxyXG4gICAgICAgIGZyYW1lWCAqIGNvbnN0YW50cy5zcXVhcmVTaXplLCAvLyBYIGZyb20gSW1hZ2VcclxuICAgICAgICBmcmFtZVkgKiBjb25zdGFudHMuc3F1YXJlU2l6ZSwgLy8gWSBmcm9tIEltYWdlXHJcbiAgICAgICAgdGhpcy5zcXVhcmVTaXplLCAvLyBXaWR0aCBGcm9tIEltYWdlLFxyXG4gICAgICAgIHRoaXMuc3F1YXJlU2l6ZSwgLy8gSGVpZ2h0IEZyb20gSW1hZ2VcclxuICAgICAgICB4LCAvLyBYIGZvciBDYW52YXNcclxuICAgICAgICB5LCAvLyBZIGZvciBDYW52YXNcclxuICAgICAgICB0aGlzLnNxdWFyZVNpemUsIC8vIFdpZHRoIEZvciBDYW52YXNcclxuICAgICAgICB0aGlzLnNxdWFyZVNpemUgLy8gSGVpZ2h0IEZvciBDYW52YXNcclxuICAgICAgKTtcclxuXHJcbiAgICAvLyBDYWxsIEFuaW1hdGlvblxyXG4gICAgdGhpcy51cGRhdGVBbmltYXRpb25Qcm9ncmVzcygpO1xyXG5cclxuICAgIHRoaXMuc2hhZG93SW1hZ2VMb2FkZWQgJiZcclxuICAgICAgY3R4LmRyYXdJbWFnZShcclxuICAgICAgICB0aGlzLnNoYWRvd0ltYWdlLCAvLyBJbnNlcnQgSW1hZ2VcclxuICAgICAgICB4LCAvLyBYIGZvciBDYW52YXNcclxuICAgICAgICB5IC8vIFkgZm9yIENhbnZhc1xyXG4gICAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3ByaXRlO1xyXG4iLCJpbXBvcnQgS2V5UHJlc3NMaXN0ZW5lciBmcm9tIFwiLi9LZXlQcmVzc0xpc3RlbmVyXCI7XHJcbmltcG9ydCBSZXZlYWxpbmdUZXh0IGZyb20gXCIuL1JldmVhbGluZ1RleHRcIjtcclxuXHJcbmNsYXNzIFRleHRNZXNzYWdlIHtcclxuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcclxuICAgIHRoaXMudGV4dCA9IGNvbmZpZy50ZXh0IHx8IFwiXCI7XHJcbiAgICB0aGlzLm9uQ29tcGxldGUgPSBjb25maWcub25Db21wbGV0ZTtcclxuICAgIHRoaXMuZWxlbWVudCA9IG51bGw7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVFbGVtZW50KCkge1xyXG4gICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiVGV4dE1lc3NhZ2VcIik7XHJcblxyXG4gICAgdGhpcy5lbGVtZW50LmlubmVySFRNTCA9IGBcclxuICAgICAgICA8cCBjbGFzcz1cIlRleHRNZXNzYWdlX3BcIj4ke3RoaXMudGV4dH08L3A+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIlRleHRNZXNzYWdlX2J1dHRvblwiPk5leHQ8L2J1dHRvbj5cclxuICAgIGA7XHJcblxyXG4gICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgdGhpcy5kb25lKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnJldmVhbGluZ1RleHQgPSBuZXcgUmV2ZWFsaW5nVGV4dCh7XHJcbiAgICAgIGVsZW1lbnQ6IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiVGV4dE1lc3NhZ2VfcFwiKSxcclxuICAgICAgdGV4dDogdGhpcy50ZXh0LFxyXG4gICAgfSk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAdHlwZSB7S2V5UHJlc3NMaXN0ZW5lcn1cclxuICAgICAqL1xyXG4gICAgdGhpcy5hY3Rpb25MaXN0ZW5lciA9IG5ldyBLZXlQcmVzc0xpc3RlbmVyKFwiRW50ZXJcIiwgKCkgPT4ge1xyXG4gICAgICB0aGlzLmFjdGlvbkxpc3RlbmVyLnVuYmluZCgpO1xyXG4gICAgICB0aGlzLmRvbmUoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuYWN0aW9uU3BhY2VMaXN0ZW5lciA9IG5ldyBLZXlQcmVzc0xpc3RlbmVyKFwiU3BhY2VcIiwgKCkgPT4ge1xyXG4gICAgICB0aGlzLmFjdGlvblNwYWNlTGlzdGVuZXIudW5iaW5kKCk7XHJcbiAgICAgIHRoaXMuZG9uZSgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBkb25lKCkge1xyXG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgdGhpcy5vbkNvbXBsZXRlKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBjb250YWluZXJcclxuICAgKi9cclxuICBpbml0KGNvbnRhaW5lcikge1xyXG4gICAgdGhpcy5jcmVhdGVFbGVtZW50KCk7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRleHRNZXNzYWdlO1xyXG4iLCJpbXBvcnQgY29uc3RhbnRzIGZyb20gXCIuLi9EYXRhL2NvbnN0YW50c1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRyYXdJbWFnZSA9IChzcmMsIGNiKSA9PiB7XHJcbiAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgaW1nLm9ubG9hZCA9ICgpID0+IHtcclxuICAgIGlmIChjYikge1xyXG4gICAgICBjYihpbWcpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgaW1nLnNyYyA9IHNyYztcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB3aXRoR3JpZHMgPSAobikgPT4ge1xyXG4gIHJldHVybiBuICogY29uc3RhbnRzLmhhbGZTcXVhcmVTaXplO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGFzR3JpZENvb3JkID0gKHgsIHkpID0+IHtcclxuICByZXR1cm4gYCR7eCAqIGNvbnN0YW50cy5oYWxmU3F1YXJlU2l6ZX0sJHt5ICogY29uc3RhbnRzLmhhbGZTcXVhcmVTaXplfWA7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbmV4dFBvc2l0aW9uID0gKGN1clgsIGN1clksIGRpcmVjdGlvbikgPT4ge1xyXG4gIGxldCB4LCB5LCBzaXplO1xyXG4gIHggPSBjdXJYO1xyXG4gIHkgPSBjdXJZO1xyXG4gIHNpemUgPSAxNjtcclxuICBpZiAoZGlyZWN0aW9uID09PSBcImxlZnRcIikge1xyXG4gICAgeCAtPSBzaXplO1xyXG4gIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSBcInJpZ2h0XCIpIHtcclxuICAgIHggKz0gc2l6ZTtcclxuICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gXCJ1cFwiKSB7XHJcbiAgICB5IC09IHNpemU7XHJcbiAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09IFwiZG93blwiKSB7XHJcbiAgICB5ICs9IHNpemU7XHJcbiAgfVxyXG5cclxuICByZXR1cm4geyB4LCB5IH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZW1pdEV2ZW50ID0gKG5hbWUsIGRldGFpbCkgPT4ge1xyXG4gIC8vIFdlIEZpbmlzaGVkIHRoZSB3YWxrXHJcbiAgY29uc3QgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQobmFtZSwge1xyXG4gICAgZGV0YWlsLFxyXG4gIH0pO1xyXG5cclxuICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBvcHBvc2l0ZURpcmVjdGlvbiA9IChkaXJlY3Rpb24pID0+IHtcclxuICBpZiAoZGlyZWN0aW9uID09PSBcImxlZnRcIikge1xyXG4gICAgcmV0dXJuIFwicmlnaHRcIjtcclxuICB9XHJcbiAgaWYgKGRpcmVjdGlvbiA9PT0gXCJyaWdodFwiKSB7XHJcbiAgICByZXR1cm4gXCJsZWZ0XCI7XHJcbiAgfVxyXG4gIGlmIChkaXJlY3Rpb24gPT09IFwidXBcIikge1xyXG4gICAgcmV0dXJuIFwiZG93blwiO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIFwidXBcIjtcclxufTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgT3ZlcldvcmxkIGZyb20gXCIuL0dhbWUvT3ZlcldvcmxkXCI7XHJcblxyXG5jb25zdCB3b2xyZCA9IG5ldyBPdmVyV29ybGQoe1xyXG4gIGVsZW1lbnQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZS1jb250YWluZXJcIiksXHJcbn0pO1xyXG5cclxud29scmQuaW5pdCgpO1xyXG4iXSwibmFtZXMiOlsiUGVyc29uIiwiYXNHcmlkQ29vcmQiLCJ3aXRoR3JpZHMiLCJPdmVyV29ybGRNYXBzTGlzdCIsIkRlbW9Sb29tIiwibG93ZXJTcmMiLCJ1cHBlclNyYyIsImdhbWVPYmplY3RzIiwiaGVybyIsImlzUGxheWVyQ29udHJvbGxlZCIsIngiLCJ5Iiwic3JjIiwibnBjMSIsImJlaGF2aW9yTG9vcCIsInR5cGUiLCJkaXJlY3Rpb24iLCJ0aW1lIiwidGFsa2luZyIsImV2ZW50cyIsInRleHQiLCJmYWNlSGVybyIsIm5wYzIiLCJucGM0Iiwid2FsbHMiLCJjdXRzY2VuZVNwYWNlcyIsIm1hcCIsIk1hcDIiLCJucGMzIiwic3F1YXJlU2l6ZSIsImhhbGZTcXVhcmVTaXplIiwibW92aW5nUHJvZ3Jlc3MiLCJhbmltYXRpb25GcmFtZUxpbWl0IiwiUGVyc29uV2Fsa2luZ0NvbXBsZXRlIiwiUGVyc29uU3RhbmRDb21wbGV0ZSIsIkRpcmVjdGlvbklucHV0IiwiY29uc3RydWN0b3IiLCJoZWxkRGlyZWN0aW9ucyIsIkFycm93VXAiLCJLZXlXIiwiQXJyb3dEb3duIiwiS2V5UyIsIkFycm93TGVmdCIsIktleUEiLCJBcnJvd1JpZ2h0IiwiS2V5RCIsImluaXQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiZGlyIiwiY29kZSIsImluZGV4T2YiLCJ1bnNoaWZ0IiwiaW5kZXgiLCJzcGxpY2UiLCJPdmVyV29ybGRFdmVudCIsIk92ZXJXb3JsZE1hcCIsIlNwcml0ZSIsIkdhbWVPYmplY3QiLCJjb25maWciLCJpZCIsImlzTW91bnRlZCIsImlzVXNlU2hhZG93IiwidXNlU2hhZG93IiwidW5kZWZpbmVkIiwic3ByaXRlIiwiZ2FtZU9iamVjdCIsInJlbW92ZVNxdWFyZVNpemUiLCJiZWhhdmlvckxvb3BJbmRleCIsIm1vdW50IiwiYWRkV2FsbCIsInNldFRpbWVvdXQiLCJkb0JlaGF2aW9yRXZlbnQiLCJ1cGRhdGUiLCJpc0N1dHNjZW5lUGxheWluZyIsImxlbmd0aCIsImlzU3RhbmRpbmciLCJldmVudCIsIndobyIsImV2ZW50SGFuZGxlciIsIktleVByZXNzTGlzdGVuZXIiLCJrZXlDb2RlIiwiY2FsbGJhY2siLCJrZXlTYWZlIiwia2V5ZG93bkZ1bmN0aW9uIiwia2V5dXBGdW5jdGlvbiIsInVuYmluZCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjb25zdGFudHMiLCJPdmVyV29ybGQiLCJlbGVtZW50IiwiY2FudmFzIiwicXVlcnlTZWxlY3RvciIsImN0eCIsImdldENvbnRleHQiLCJzdGFydEdhbWVMb29wIiwic3RlcCIsImNsZWFyUmVjdCIsIndpZHRoIiwiaGVpZ2h0IiwiY2FtZXJhUGVyc29uIiwiT2JqZWN0IiwidmFsdWVzIiwiZm9yRWFjaCIsIm9iaiIsImFycm93IiwiZGlyZWN0aW9uQ29udHJvbGxlciIsImRyYXdMb3dlckltYWdlIiwic29ydCIsImEiLCJiIiwiZHJhdyIsImRyYXdVcHBlckltYWdlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYmluZEFjdGlvbklucHV0IiwiY2hlY2tGb3JBY3Rpb25DdXRzY2VuZSIsImJpbmRIZXJvUG9zaXRpb25DaGVjayIsImRldGFpbCIsIndob0lkIiwiY2hlY2tGb3JGb290c3RlcEN1dHNjZW5lIiwic3RhcnRNYXAiLCJtYXBDb25maWciLCJvdmVyV29ybGQiLCJtb3VudE9iamVjdHMiLCJzdGFydEN1dFNjZW5lIiwiVGV4dE1lc3NhZ2UiLCJvcHBvc2l0ZURpcmVjdGlvbiIsIlByb21pc2UiLCJyZXNvbHZlIiwic3RhbmQiLCJzdGFydEJlaGF2aW9yIiwiY29tcGxldGVIYW5kbGVyIiwid2FsayIsInJldHJ5IiwidGV4dE1lc3NhZ2UiLCJtZXNzYWdlIiwib25Db21wbGV0ZSIsIm1lc3NhZ2VDb250YWluZXIiLCJjaGFuZ2VNYXAiLCJuZXh0UG9zaXRpb24iLCJsb3dlckxheWVyIiwiSW1hZ2UiLCJ1cHBlckxheWVyIiwiZHJhd0ltYWdlIiwiaXNTcGFjZVRha2VuIiwiY3VyWCIsImN1clkiLCJrZXlzIiwia2V5Iiwib2JqZWN0IiwibmV4dENvb3JkIiwibWF0Y2giLCJmaW5kIiwiaSIsInJlbW92ZVdhbGwiLCJtb3ZlV2FsbCIsIndhc1giLCJ3YXNZIiwiZW1pdEV2ZW50IiwibW92aW5nUHJvZ3Jlc3NSZW1haW5pZyIsImRpcmVjdGlvblVwZGF0ZSIsInVwIiwiZG93biIsImxlZnQiLCJyaWdodCIsInN0YXRlIiwidXBkYXRlUG9zaXRpb24iLCJ1cGRhdGVTcHJpbnQiLCJiZWhhdmlvciIsInByb3BlcnR5IiwiY2hhbmdlIiwic2V0QW5pbWF0aW9uIiwiY2FwaXRhbGl6ZUZpcnN0TGV0dGVyIiwic3RyaW5nIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsIlJldmVhbGluZ1RleHQiLCJzcGVlZCIsInRpbWVvdXQiLCJpc0RvbmUiLCJjaGFyYWN0ZXJzIiwic3BsaXQiLCJjaGFyIiwic3BhbiIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImFwcGVuZENoaWxkIiwicHVzaCIsImRlbGF5QWZ0ZXIiLCJpbWFnZSIsImltYWdlSXNMb2FkZWQiLCJzaGFkb3dJbWFnZSIsInNoYWRvd0ltYWdlTG9hZGVkIiwiYW5pbWF0aW9ucyIsImlkbGVEb3duIiwiaWRsZVJpZ2h0IiwiaWRsZVVwIiwiaWRsZUxlZnQiLCJ3YWxrRG93biIsIndhbGtSaWdodCIsIndhbGtVcCIsIndhbGtMZWZ0IiwiY3VycmVudEFuaW1hdGlvbiIsImN1cnJlbnRBbmltYXRpb25GcmFtZSIsImFuaW1hdGlvbkZyYW1lUHJvZ3Jlc3MiLCJmcmFtZSIsInVwZGF0ZUFuaW1hdGlvblByb2dyZXNzIiwiZnJhbWVYIiwiZnJhbWVZIiwiY2xhc3NMaXN0IiwiYWRkIiwiaW5uZXJIVE1MIiwiZG9uZSIsInJldmVhbGluZ1RleHQiLCJhY3Rpb25MaXN0ZW5lciIsImFjdGlvblNwYWNlTGlzdGVuZXIiLCJyZW1vdmUiLCJjb250YWluZXIiLCJjYiIsImltZyIsIm9ubG9hZCIsIm4iLCJzaXplIiwibmFtZSIsIkN1c3RvbUV2ZW50IiwiZGlzcGF0Y2hFdmVudCIsIndvbHJkIl0sInNvdXJjZVJvb3QiOiIifQ==