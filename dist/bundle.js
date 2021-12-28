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
            text: "Do you want coffee?",
            faceHero: "hero"
          }, {
            type: "openPhone"
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
      }),
      npc4: new _Game_Person__WEBPACK_IMPORTED_MODULE_0__["default"]({
        x: (0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.withGrids)(17),
        y: (0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.withGrids)(9),
        direction: "right",
        src: "/public/images/characters/people/npc4.png ",
        talking: [{
          events: [{
            type: "textMessage",
            text: "You Made it!!",
            faceHero: "npc4"
          }]
        }]
      }),
      npc5: new _Game_Person__WEBPACK_IMPORTED_MODULE_0__["default"]({
        x: (0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.withGrids)(19),
        y: (0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.withGrids)(9),
        direction: "left",
        src: "/public/images/characters/people/npc2.png ",
        talking: [{
          events: [{
            type: "textMessage",
            text: "You Made it!!",
            faceHero: "npc4"
          }]
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
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(17, 13)]: [{
        events: [{
          type: "openPhone"
        }]
      }],
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
    this.startMap(_Data_AllMapList__WEBPACK_IMPORTED_MODULE_0__.OverWorldMapsList.Map2);
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

  openPhone(resolve) {
    var phone = document.getElementById("uabpayContainer");
    var cancel = document.getElementById("cancel");
    var next = document.getElementById("next");
    phone.style.display = "flex";
    [cancel, next].forEach(el => {
      el.onclick = () => {
        phone.style.display = "none";
      };
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ekIsV0FBTyxNQUFQO0FBQ0Q7O0FBQ0QsTUFBSUEsU0FBUyxLQUFLLElBQWxCLEVBQXdCO0FBQ3RCLFdBQU8sTUFBUDtBQUNEOztBQUVELFNBQU8sSUFBUDtBQUNELENBWk07Ozs7OztVQy9DUDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTkE7QUFFQSxJQUFNOE4sS0FBSyxHQUFHLElBQUluSix1REFBSixDQUFjO0FBQzFCQyxFQUFBQSxPQUFPLEVBQUU1QyxRQUFRLENBQUM4QyxhQUFULENBQXVCLGlCQUF2QjtBQURpQixDQUFkLENBQWQ7QUFJQWdKLEtBQUssQ0FBQy9MLElBQU4sRyIsInNvdXJjZXMiOlsid2VicGFjazovL3JwZy1nYW1lLy4vc3JjL0RhdGEvQWxsTWFwTGlzdC5qcyIsIndlYnBhY2s6Ly9ycGctZ2FtZS8uL3NyYy9EYXRhL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9ycGctZ2FtZS8uL3NyYy9HYW1lL0RpcmVjdGlvbklucHV0LmpzIiwid2VicGFjazovL3JwZy1nYW1lLy4vc3JjL0dhbWUvR2FtZU9iamVjdC5qcyIsIndlYnBhY2s6Ly9ycGctZ2FtZS8uL3NyYy9HYW1lL0tleVByZXNzTGlzdGVuZXIuanMiLCJ3ZWJwYWNrOi8vcnBnLWdhbWUvLi9zcmMvR2FtZS9PdmVyV29ybGQuanMiLCJ3ZWJwYWNrOi8vcnBnLWdhbWUvLi9zcmMvR2FtZS9PdmVyV29ybGRFdmVudC5qcyIsIndlYnBhY2s6Ly9ycGctZ2FtZS8uL3NyYy9HYW1lL092ZXJXb3JsZE1hcC5qcyIsIndlYnBhY2s6Ly9ycGctZ2FtZS8uL3NyYy9HYW1lL1BlcnNvbi5qcyIsIndlYnBhY2s6Ly9ycGctZ2FtZS8uL3NyYy9HYW1lL1JldmVhbGluZ1RleHQuanMiLCJ3ZWJwYWNrOi8vcnBnLWdhbWUvLi9zcmMvR2FtZS9TcHJpdGUuanMiLCJ3ZWJwYWNrOi8vcnBnLWdhbWUvLi9zcmMvR2FtZS9UZXh0TWVzc2FnZS5qcyIsIndlYnBhY2s6Ly9ycGctZ2FtZS8uL3NyYy91dGlscy9oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vcnBnLWdhbWUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcnBnLWdhbWUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3JwZy1nYW1lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcnBnLWdhbWUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9ycGctZ2FtZS8uL3NyYy9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBlcnNvbiBmcm9tIFwiLi4vR2FtZS9QZXJzb25cIjtcclxuaW1wb3J0IHsgYXNHcmlkQ29vcmQsIHdpdGhHcmlkcyB9IGZyb20gXCIuLi91dGlscy9oZWxwZXJcIjtcclxuLyoqXHJcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFJvb21PYmpcclxuICogQHByb3BlcnR5IHtTdHJpbmd9IGxvd2VyU3JjIC1cclxuICogQHByb3BlcnR5IHtTdHJpbmd9IHVwcGVyU3JjIC1cclxuICogQHByb3BlcnR5IHtPYmplY3R9IGdhbWVPYmplY3RzIC1cclxuICovXHJcblxyXG5leHBvcnQgY29uc3QgT3ZlcldvcmxkTWFwc0xpc3QgPSB7XHJcbiAgLyoqXHJcbiAgICogQHR5cGUge1Jvb21PYmp9XHJcbiAgICovXHJcbiAgRGVtb1Jvb206IHtcclxuICAgIGxvd2VyU3JjOiBcIi9wdWJsaWMvaW1hZ2VzL21hcHMvVWFiTWFwMS5wbmdcIixcclxuICAgIHVwcGVyU3JjOiBcIi9wdWJsaWMvaW1hZ2VzL21hcHMvVWFiTWFwMUxvd2VyLnBuZ1wiLFxyXG4gICAgZ2FtZU9iamVjdHM6IHtcclxuICAgICAgaGVybzogbmV3IFBlcnNvbih7XHJcbiAgICAgICAgaXNQbGF5ZXJDb250cm9sbGVkOiB0cnVlLFxyXG4gICAgICAgIHg6IHdpdGhHcmlkcyg0KSxcclxuICAgICAgICB5OiB3aXRoR3JpZHMoMTMpLFxyXG4gICAgICAgIHNyYzogXCIvcHVibGljL2ltYWdlcy9jaGFyYWN0ZXJzL3Blb3BsZS9ucGMzLnBuZ1wiLFxyXG4gICAgICB9KSxcclxuICAgICAgbnBjMTogbmV3IFBlcnNvbih7XHJcbiAgICAgICAgeDogd2l0aEdyaWRzKDcpLFxyXG4gICAgICAgIHk6IHdpdGhHcmlkcyg3KSxcclxuICAgICAgICBzcmM6IFwiL3B1YmxpYy9pbWFnZXMvY2hhcmFjdGVycy9wZW9wbGUvbnBjNC5wbmcgXCIsXHJcbiAgICAgICAgYmVoYXZpb3JMb29wOiBbXHJcbiAgICAgICAgICB7IHR5cGU6IFwic3RhbmRcIiwgZGlyZWN0aW9uOiBcImxlZnRcIiwgdGltZTogMjAwMCB9LFxyXG4gICAgICAgICAgeyB0eXBlOiBcInN0YW5kXCIsIGRpcmVjdGlvbjogXCJkb3duXCIsIHRpbWU6IDQwMDAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIHRhbGtpbmc6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgZXZlbnRzOiBbXHJcbiAgICAgICAgICAgICAgeyB0eXBlOiBcInRleHRNZXNzYWdlXCIsIHRleHQ6IFwiSSdtIEJ1c3lcIiwgZmFjZUhlcm86IFwibnBjMVwiIH0sXHJcbiAgICAgICAgICAgICAgeyB0eXBlOiBcInRleHRNZXNzYWdlXCIsIHRleHQ6IFwiR28gYXdheSFcIiB9LFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9KSxcclxuICAgICAgbnBjMjogbmV3IFBlcnNvbih7XHJcbiAgICAgICAgeDogd2l0aEdyaWRzKDYpLFxyXG4gICAgICAgIHk6IHdpdGhHcmlkcygxMSksXHJcbiAgICAgICAgc3JjOiBcIi9wdWJsaWMvaW1hZ2VzL2NoYXJhY3RlcnMvcGVvcGxlL25wYzIucG5nIFwiLFxyXG4gICAgICAgIGRpcmVjdGlvbjogXCJyaWdodFwiLFxyXG4gICAgICAgIGJlaGF2aW9yTG9vcDogW3sgdHlwZTogXCJzdGFuZFwiLCBkaXJlY3Rpb246IFwicmlnaHRcIiwgdGltZTogMjAwMCB9XSxcclxuICAgICAgfSksXHJcblxyXG4gICAgICBucGM0OiBuZXcgUGVyc29uKHtcclxuICAgICAgICB4OiB3aXRoR3JpZHMoOCksXHJcbiAgICAgICAgeTogd2l0aEdyaWRzKDExKSxcclxuICAgICAgICBkaXJlY3Rpb246IFwibGVmdFwiLFxyXG4gICAgICAgIHNyYzogXCIvcHVibGljL2ltYWdlcy9jaGFyYWN0ZXJzL3Blb3BsZS9ucGM1LnBuZyBcIixcclxuICAgICAgICBiZWhhdmlvckxvb3A6IFt7IHR5cGU6IFwic3RhbmRcIiwgZGlyZWN0aW9uOiBcImxlZnRcIiwgdGltZTogMjAwMCB9XSxcclxuICAgICAgICB0YWxraW5nOiBbXSxcclxuICAgICAgfSksXHJcbiAgICB9LFxyXG4gICAgY3V0c2NlbmVTcGFjZXM6IHtcclxuICAgICAgW2FzR3JpZENvb3JkKDEsIDIpXTogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGV2ZW50czogW3sgdHlwZTogXCJjaGFuZ2VNYXBcIiwgbWFwOiBcIk1hcDJcIiB9XSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoMSwgNCldOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgZXZlbnRzOiBbeyB0eXBlOiBcImNoYW5nZU1hcFwiLCBtYXA6IFwiTWFwMlwiIH1dLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICAgIFthc0dyaWRDb29yZCgxLCA2KV06IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBldmVudHM6IFt7IHR5cGU6IFwiY2hhbmdlTWFwXCIsIG1hcDogXCJNYXAyXCIgfV0sXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuXHJcbiAgICAgIFthc0dyaWRDb29yZCg1LCA0KV06IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBldmVudHM6IFt7IHR5cGU6IFwiY2hhbmdlTWFwXCIsIG1hcDogXCJNYXAyXCIgfV0sXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgICAgW2FzR3JpZENvb3JkKDUsIDIpXTogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGV2ZW50czogW3sgdHlwZTogXCJjaGFuZ2VNYXBcIiwgbWFwOiBcIk1hcDJcIiB9XSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIHdhbGxzOiB7XHJcbiAgICAgIFthc0dyaWRDb29yZCg2LCAxMSldOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoNywgMTEpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDgsIDExKV06IHRydWUsXHJcbiAgICAgIFthc0dyaWRDb29yZCg0LCAxMCldOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoNCwgOSldOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoMiwgMTApXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDIsIDkpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDUsIDcpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDUsIDgpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDYsIDgpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDcsIDgpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDgsIDgpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDEsIDMpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDEsIDUpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDEsIDcpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDUsIDEpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDUsIDMpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDUsIDUpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDYsIDUpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDcsIDUpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDgsIDUpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDEsIDEpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDIsIDEpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDMsIDEpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDQsIDEpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDksIDYpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDksIDcpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDksIDgpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDksIDkpXTogdHJ1ZSxcclxuXHJcbiAgICAgIFthc0dyaWRDb29yZCg5LCAxMCldOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoOSwgMTIpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDAsIDgpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDAsIDkpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDAsIDEwKV06IHRydWUsXHJcbiAgICAgIFthc0dyaWRDb29yZCgwLCAxMSldOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoMSwgMTMpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDIsIDEzKV06IHRydWUsXHJcbiAgICAgIFthc0dyaWRDb29yZCg2LCAxMyldOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoNywgMTMpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDgsIDEzKV06IHRydWUsXHJcbiAgICAgIFthc0dyaWRDb29yZCg4LCAxMyldOiB0cnVlLFxyXG5cclxuICAgICAgW2FzR3JpZENvb3JkKDAsIDEyKV06IHRydWUsXHJcbiAgICAgIFthc0dyaWRDb29yZCgwLCAyKV06IHRydWUsXHJcbiAgICAgIFthc0dyaWRDb29yZCgwLCA0KV06IHRydWUsXHJcbiAgICAgIFthc0dyaWRDb29yZCgwLCA2KV06IHRydWUsXHJcbiAgICAgIFthc0dyaWRDb29yZCg2LCA0KV06IHRydWUsXHJcbiAgICAgIFthc0dyaWRDb29yZCg2LCAyKV06IHRydWUsXHJcbiAgICAgIFthc0dyaWRDb29yZCgzLCAxNCldOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoNCwgMTQpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDUsIDE0KV06IHRydWUsXHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG4gIE1hcDI6IHtcclxuICAgIGxvd2VyU3JjOiBcIi9wdWJsaWMvaW1hZ2VzL21hcHMvVWFiTWFwMi5wbmdcIixcclxuICAgIHVwcGVyU3JjOiBcIi9wdWJsaWMvaW1hZ2VzL21hcHMvVWFiTWFwMkxvd2VyLnBuZ1wiLFxyXG4gICAgZ2FtZU9iamVjdHM6IHtcclxuICAgICAgaGVybzogbmV3IFBlcnNvbih7XHJcbiAgICAgICAgaXNQbGF5ZXJDb250cm9sbGVkOiB0cnVlLFxyXG4gICAgICAgIHg6IHdpdGhHcmlkcygzKSxcclxuICAgICAgICB5OiB3aXRoR3JpZHMoMTApLFxyXG4gICAgICAgIHNyYzogXCIvcHVibGljL2ltYWdlcy9jaGFyYWN0ZXJzL3Blb3BsZS9ucGMzLnBuZyBcIixcclxuICAgICAgfSksXHJcbiAgICAgIG5wYzM6IG5ldyBQZXJzb24oe1xyXG4gICAgICAgIHg6IHdpdGhHcmlkcygxNSksXHJcbiAgICAgICAgeTogd2l0aEdyaWRzKDEzKSxcclxuICAgICAgICBzcmM6IFwiL3B1YmxpYy9pbWFnZXMvY2hhcmFjdGVycy9wZW9wbGUvbnBjMS5wbmcgXCIsXHJcbiAgICAgICAgdGFsa2luZzogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBldmVudHM6IFtcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRNZXNzYWdlXCIsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIkRvIHlvdSB3YW50IGNvZmZlZT9cIixcclxuICAgICAgICAgICAgICAgIGZhY2VIZXJvOiBcImhlcm9cIixcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHsgdHlwZTogXCJvcGVuUGhvbmVcIiB9LFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG5cclxuICAgICAgICBiZWhhdmlvckxvb3A6IFtcclxuICAgICAgICAgIHsgdHlwZTogXCJzdGFuZFwiLCBkaXJlY3Rpb246IFwibGVmdFwiLCB0aW1lOiAyMDAwIH0sXHJcbiAgICAgICAgICB7IHR5cGU6IFwic3RhbmRcIiwgZGlyZWN0aW9uOiBcImRvd25cIiwgdGltZTogNDAwMCB9LFxyXG4gICAgICAgICAgeyB0eXBlOiBcInN0YW5kXCIsIGRpcmVjdGlvbjogXCJyaWdodFwiLCB0aW1lOiA0MDAwIH0sXHJcbiAgICAgICAgICB7IHR5cGU6IFwic3RhbmRcIiwgZGlyZWN0aW9uOiBcImRvd25cIiwgdGltZTogNDAwMCB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0pLFxyXG4gICAgICBucGM0OiBuZXcgUGVyc29uKHtcclxuICAgICAgICB4OiB3aXRoR3JpZHMoMTcpLFxyXG4gICAgICAgIHk6IHdpdGhHcmlkcyg5KSxcclxuICAgICAgICBkaXJlY3Rpb246IFwicmlnaHRcIixcclxuICAgICAgICBzcmM6IFwiL3B1YmxpYy9pbWFnZXMvY2hhcmFjdGVycy9wZW9wbGUvbnBjNC5wbmcgXCIsXHJcbiAgICAgICAgdGFsa2luZzogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBldmVudHM6IFtcclxuICAgICAgICAgICAgICB7IHR5cGU6IFwidGV4dE1lc3NhZ2VcIiwgdGV4dDogXCJZb3UgTWFkZSBpdCEhXCIsIGZhY2VIZXJvOiBcIm5wYzRcIiB9LFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9KSxcclxuICAgICAgbnBjNTogbmV3IFBlcnNvbih7XHJcbiAgICAgICAgeDogd2l0aEdyaWRzKDE5KSxcclxuICAgICAgICB5OiB3aXRoR3JpZHMoOSksXHJcbiAgICAgICAgZGlyZWN0aW9uOiBcImxlZnRcIixcclxuICAgICAgICBzcmM6IFwiL3B1YmxpYy9pbWFnZXMvY2hhcmFjdGVycy9wZW9wbGUvbnBjMi5wbmcgXCIsXHJcbiAgICAgICAgdGFsa2luZzogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBldmVudHM6IFtcclxuICAgICAgICAgICAgICB7IHR5cGU6IFwidGV4dE1lc3NhZ2VcIiwgdGV4dDogXCJZb3UgTWFkZSBpdCEhXCIsIGZhY2VIZXJvOiBcIm5wYzRcIiB9LFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9KSxcclxuICAgIH0sXHJcblxyXG4gICAgd2FsbHM6IHtcclxuICAgICAgW2FzR3JpZENvb3JkKDEsIDQpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDIsIDQpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDMsIDMpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDQsIDQpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDUsIDQpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDYsIDQpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDcsIDQpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDgsIDQpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDksIDQpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDEwLCAzKV06IHRydWUsXHJcbiAgICAgIFthc0dyaWRDb29yZCgxMSwgNCldOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoMTIsIDMpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDEzLCA0KV06IHRydWUsXHJcbiAgICAgIFthc0dyaWRDb29yZCgxNCwgNCldOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoMTUsIDQpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDE1LCAzKV06IHRydWUsXHJcbiAgICAgIFthc0dyaWRDb29yZCgxNiwgMildOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoMTcsIDEpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDE3LCAyKV06IHRydWUsXHJcbiAgICAgIFthc0dyaWRDb29yZCgxNywgMyldOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoMTcsIDQpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDE4LCA0KV06IHRydWUsXHJcbiAgICAgIFthc0dyaWRDb29yZCgxOCwgMyldOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoMTYsIDYpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDE0LCA5KV06IHRydWUsXHJcbiAgICAgIFthc0dyaWRDb29yZCgxOCwgOSldOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoMTksIDkpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDE3LCA5KV06IHRydWUsXHJcbiAgICAgIFthc0dyaWRDb29yZCgxOCwgOCldOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoMTksIDgpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDE3LCA4KV06IHRydWUsXHJcbiAgICAgIFthc0dyaWRDb29yZCgxOSwgMTApXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDE3LCAxMCldOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoMTIsIDYpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDEyLCA3KV06IHRydWUsXHJcbiAgICAgIFthc0dyaWRDb29yZCgxMiwgOCldOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoMTIsIDkpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDEyLCAxMCldOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoMTIsIDExKV06IHRydWUsXHJcbiAgICAgIFthc0dyaWRDb29yZCgxMiwgMTIpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDEyLCAxMyldOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoMTIsIDE0KV06IHRydWUsXHJcbiAgICAgIFthc0dyaWRDb29yZCgxNCwgMTQpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDE1LCAxNCldOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoMTYsIDE0KV06IHRydWUsXHJcbiAgICAgIFthc0dyaWRDb29yZCgxNCwgMTIpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDE1LCAxMildOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoMTYsIDEyKV06IHRydWUsXHJcbiAgICAgIFthc0dyaWRDb29yZCgxNiwgMTMpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDE0LCAxNildOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoMTUsIDE2KV06IHRydWUsXHJcbiAgICAgIFthc0dyaWRDb29yZCgxNiwgMTYpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDE3LCAxNildOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoMTgsIDE2KV06IHRydWUsXHJcbiAgICAgIFthc0dyaWRDb29yZCgxLCAxOSldOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoMiwgMTgpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDIsIDE5KV06IHRydWUsXHJcbiAgICAgIFthc0dyaWRDb29yZCgyLCAyMCldOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoMiwgMjEpXTogdHJ1ZSxcclxuXHJcbiAgICAgIFthc0dyaWRDb29yZCg1LCAxOCldOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoNSwgMTkpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDUsIDIwKV06IHRydWUsXHJcbiAgICAgIFthc0dyaWRDb29yZCg1LCAyMSldOiB0cnVlLFxyXG5cclxuICAgICAgW2FzR3JpZENvb3JkKDgsIDE4KV06IHRydWUsXHJcbiAgICAgIFthc0dyaWRDb29yZCg4LCAxOSldOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoOCwgMjApXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDgsIDIxKV06IHRydWUsXHJcblxyXG4gICAgICBbYXNHcmlkQ29vcmQoMTEsIDE4KV06IHRydWUsXHJcbiAgICAgIFthc0dyaWRDb29yZCgxMSwgMTkpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDExLCAyMCldOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoMTEsIDIxKV06IHRydWUsXHJcblxyXG4gICAgICBbYXNHcmlkQ29vcmQoMTQsIDE4KV06IHRydWUsXHJcbiAgICAgIFthc0dyaWRDb29yZCgxNCwgMTkpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDE0LCAyMCldOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoMTQsIDIxKV06IHRydWUsXHJcblxyXG4gICAgICBbYXNHcmlkQ29vcmQoMTcsIDE4KV06IHRydWUsXHJcbiAgICAgIFthc0dyaWRDb29yZCgxNywgMTkpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDE3LCAyMCldOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoMTcsIDIxKV06IHRydWUsXHJcblxyXG4gICAgICBbYXNHcmlkQ29vcmQoMCwgNSldOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoMSwgNildOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoMSwgNyldOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoMSwgOSldOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoMSwgMTEpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDEsIDEzKV06IHRydWUsXHJcbiAgICAgIFthc0dyaWRDb29yZCgxLCAxNCldOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoMCwgMTUpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDAsIDE2KV06IHRydWUsXHJcbiAgICAgIFthc0dyaWRDb29yZCgwLCAxNyldOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoMCwgMTgpXTogdHJ1ZSxcclxuXHJcbiAgICAgIFthc0dyaWRDb29yZCgzLCAyMildOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoNCwgMjIpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDYsIDIyKV06IHRydWUsXHJcbiAgICAgIFthc0dyaWRDb29yZCg3LCAyMildOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoOSwgMjIpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDEwLCAyMildOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoMTIsIDIyKV06IHRydWUsXHJcbiAgICAgIFthc0dyaWRDb29yZCgxMywgMjIpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDE1LCAyMildOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoMTYsIDIyKV06IHRydWUsXHJcbiAgICAgIFthc0dyaWRDb29yZCgxOCwgMjIpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDE5LCAyMildOiB0cnVlLFxyXG5cclxuICAgICAgW2FzR3JpZENvb3JkKDIwLCAyMSldOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoMjAsIDIwKV06IHRydWUsXHJcbiAgICAgIFthc0dyaWRDb29yZCgyMCwgMTkpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDIwLCAxOCldOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoMjAsIDE3KV06IHRydWUsXHJcbiAgICAgIFthc0dyaWRDb29yZCgyMCwgMTYpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDIwLCAxNSldOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoMjAsIDE0KV06IHRydWUsXHJcbiAgICAgIFthc0dyaWRDb29yZCgyMCwgMTMpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDIwLCAxMildOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoMjAsIDExKV06IHRydWUsXHJcbiAgICAgIFthc0dyaWRDb29yZCgyMCwgNyldOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoMjAsIDYpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDIwLCA1KV06IHRydWUsXHJcbiAgICAgIFthc0dyaWRDb29yZCgyMCwgNCldOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoMjAsIDMpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDIwLCAyKV06IHRydWUsXHJcbiAgICAgIFthc0dyaWRDb29yZCgyMCwgMSldOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoMTksIDApXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDE4LCAwKV06IHRydWUsXHJcblxyXG4gICAgICBbYXNHcmlkQ29vcmQoNSwgNildOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoNSwgNyldOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoNSwgOSldOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoNSwgMTIpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDUsIDEzKV06IHRydWUsXHJcbiAgICAgIFthc0dyaWRDb29yZCg1LCAxNCldOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoNiwgNildOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoNiwgNyldOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoNiwgOCldOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoNiwgOSldOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoNiwgMTApXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDYsIDExKV06IHRydWUsXHJcbiAgICAgIFthc0dyaWRDb29yZCg2LCAxMildOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoNiwgMTMpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDYsIDE0KV06IHRydWUsXHJcblxyXG4gICAgICBbYXNHcmlkQ29vcmQoMCwgOCldOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoMCwgMTApXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDAsIDEyKV06IHRydWUsXHJcbiAgICB9LFxyXG5cclxuICAgIGN1dHNjZW5lU3BhY2VzOiB7XHJcbiAgICAgIFthc0dyaWRDb29yZCgxNywgMTMpXTogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGV2ZW50czogW3sgdHlwZTogXCJvcGVuUGhvbmVcIiB9XSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoMSwgOCldOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgZXZlbnRzOiBbeyB0eXBlOiBcImNoYW5nZU1hcFwiLCBtYXA6IFwiRGVtb1Jvb21cIiB9XSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoMSwgMTApXTogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGV2ZW50czogW3sgdHlwZTogXCJjaGFuZ2VNYXBcIiwgbWFwOiBcIkRlbW9Sb29tXCIgfV0sXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgICAgW2FzR3JpZENvb3JkKDEsIDEyKV06IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBldmVudHM6IFt7IHR5cGU6IFwiY2hhbmdlTWFwXCIsIG1hcDogXCJEZW1vUm9vbVwiIH1dLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcblxyXG4gICAgICBbYXNHcmlkQ29vcmQoNSwgOCldOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgZXZlbnRzOiBbeyB0eXBlOiBcImNoYW5nZU1hcFwiLCBtYXA6IFwiRGVtb1Jvb21cIiB9XSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoNSwgMTApXTogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGV2ZW50czogW3sgdHlwZTogXCJjaGFuZ2VNYXBcIiwgbWFwOiBcIkRlbW9Sb29tXCIgfV0sXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gIHNxdWFyZVNpemU6IDMyLFxyXG4gIGhhbGZTcXVhcmVTaXplOiAxNixcclxuICBtb3ZpbmdQcm9ncmVzczogMTYsXHJcbiAgYW5pbWF0aW9uRnJhbWVMaW1pdDogOCxcclxuXHJcbiAgZXZlbnRzOiB7XHJcbiAgICBQZXJzb25XYWxraW5nQ29tcGxldGU6IFwiUGVyc29uV2Fsa2luZ0NvbXBsZXRlXCIsXHJcbiAgICBQZXJzb25TdGFuZENvbXBsZXRlOiBcIlBlcnNvblN0YW5kQ29tcGxldGVcIixcclxuICB9LFxyXG59O1xyXG4iLCJjbGFzcyBEaXJlY3Rpb25JbnB1dCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmhlbGREaXJlY3Rpb25zID0gW107XHJcbiAgICB0aGlzLm1hcCA9IHtcclxuICAgICAgQXJyb3dVcDogXCJ1cFwiLFxyXG4gICAgICBLZXlXOiBcInVwXCIsXHJcbiAgICAgIEFycm93RG93bjogXCJkb3duXCIsXHJcbiAgICAgIEtleVM6IFwiZG93blwiLFxyXG4gICAgICBBcnJvd0xlZnQ6IFwibGVmdFwiLFxyXG4gICAgICBLZXlBOiBcImxlZnRcIixcclxuICAgICAgQXJyb3dSaWdodDogXCJyaWdodFwiLFxyXG4gICAgICBLZXlEOiBcInJpZ2h0XCIsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpIHtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XHJcbiAgICAgIGNvbnN0IGRpciA9IHRoaXMubWFwW2UuY29kZV07XHJcblxyXG4gICAgICBpZiAoZGlyICYmIHRoaXMuaGVsZERpcmVjdGlvbnMuaW5kZXhPZihkaXIpID09PSAtMSkge1xyXG4gICAgICAgIHRoaXMuaGVsZERpcmVjdGlvbnMudW5zaGlmdChkaXIpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuaGVsZERpcmVjdGlvbnMpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgKGUpID0+IHtcclxuICAgICAgY29uc3QgZGlyID0gdGhpcy5tYXBbZS5jb2RlXTtcclxuICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmhlbGREaXJlY3Rpb25zLmluZGV4T2YoZGlyKTtcclxuICAgICAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgICAgICB0aGlzLmhlbGREaXJlY3Rpb25zLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHJldHVybiB7QXJyYXk8J2xlZnQnIHwgJ3JpZ2h0JyB8ICd1cCcgfCAnZG93bicgPn1cclxuICAgKi9cclxuICBnZXQgZGlyZWN0aW9uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaGVsZERpcmVjdGlvbnNbMF07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEaXJlY3Rpb25JbnB1dDtcclxuIiwiaW1wb3J0IE92ZXJXb3JsZEV2ZW50IGZyb20gXCIuL092ZXJXb3JsZEV2ZW50XCI7XHJcbmltcG9ydCBPdmVyV29ybGRNYXAgZnJvbSBcIi4vT3ZlcldvcmxkTWFwXCI7XHJcbmltcG9ydCBTcHJpdGUgZnJvbSBcIi4vU3ByaXRlXCI7XHJcblxyXG5jbGFzcyBHYW1lT2JqZWN0IHtcclxuICAvKipcclxuICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGNvbmZpZy54XHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGNvbmZpZy55XHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IGNvbmZpZy5zcmNcclxuICAgKiBAcGFyYW0geydkb3duJyB8ICd1cCcgfCAnbGVmdCcgfCAncmlnaHQnIHwgbnVsbH0gY29uZmlnLmRpcmVjdGlvblxyXG4gICAqIEBwYXJhbSB7Qm9vbGVhbiB8IG51bGx9IGNvbmZpZy51c2VTaGFkb3dcclxuICAgKiBAcGFyYW0ge051bWJlcn0gY29uZmlnLnNxdWFyZVNpemVcclxuICAgKiBAcGFyYW0ge3t4OiBOdW1iZXIsIHk6IE51bWJlcn0gfCBudWxsfSBjb25maWcucmVtb3ZlU3F1YXJlU2l6ZVxyXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gY29uZmlnLmlzUGxheWVyQ29udHJvbGxlZFxyXG4gICAqIEBwYXJhbSB7YW55W119IGNvbmZpZy5iZWhhdmlvckxvb3BcclxuICAgKiBAcGFyYW0ge0FycmF5PHtldmVudHM6ICpbXX0+fSBjb25maWcudGFsa2luZ1xyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xyXG4gICAgdGhpcy5pZCA9IGNvbmZpZy5pZCA/IGNvbmZpZy5pZCA6IG51bGw7XHJcbiAgICB0aGlzLmlzTW91bnRlZCA9IGZhbHNlO1xyXG4gICAgY29uc3QgaXNVc2VTaGFkb3cgPVxyXG4gICAgICBjb25maWcudXNlU2hhZG93ICE9PSBudWxsICYmIGNvbmZpZy51c2VTaGFkb3cgIT09IHVuZGVmaW5lZFxyXG4gICAgICAgID8gY29uZmlnLnVzZVNoYWRvd1xyXG4gICAgICAgIDogdHJ1ZTtcclxuICAgIHRoaXMueCA9IGNvbmZpZy54IHx8IDA7XHJcbiAgICB0aGlzLnkgPSBjb25maWcueSB8fCAwO1xyXG4gICAgdGhpcy5kaXJlY3Rpb24gPSBjb25maWcuZGlyZWN0aW9uIHx8IFwiZG93blwiO1xyXG4gICAgdGhpcy5zcHJpdGUgPSBuZXcgU3ByaXRlKHtcclxuICAgICAgZ2FtZU9iamVjdDogdGhpcyxcclxuICAgICAgc3JjOiBjb25maWcuc3JjLFxyXG4gICAgICB1c2VTaGFkb3c6IGlzVXNlU2hhZG93LFxyXG4gICAgICBzcXVhcmVTaXplOiBjb25maWcuc3F1YXJlU2l6ZSA/IGNvbmZpZy5zcXVhcmVTaXplIDogMzIsXHJcbiAgICAgIHJlbW92ZVNxdWFyZVNpemU6IGNvbmZpZy5yZW1vdmVTcXVhcmVTaXplXHJcbiAgICAgICAgPyBjb25maWcucmVtb3ZlU3F1YXJlU2l6ZVxyXG4gICAgICAgIDogeyB4OiA4LCB5OiAxOCB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5iZWhhdmlvckxvb3AgPSBjb25maWcuYmVoYXZpb3JMb29wID8gY29uZmlnLmJlaGF2aW9yTG9vcCA6IFtdO1xyXG4gICAgdGhpcy5iZWhhdmlvckxvb3BJbmRleCA9IDA7XHJcblxyXG4gICAgdGhpcy50YWxraW5nID0gY29uZmlnLnRhbGtpbmcgfHwgW107XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0ge092ZXJXb3JsZE1hcH0gbWFwXHJcbiAgICovXHJcbiAgbW91bnQobWFwKSB7XHJcbiAgICB0aGlzLmlzTW91bnRlZCA9IHRydWU7XHJcbiAgICBtYXAuYWRkV2FsbCh0aGlzLngsIHRoaXMueSk7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuZG9CZWhhdmlvckV2ZW50KG1hcCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSgpIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7T3ZlcldvcmxkTWFwfSBtYXBcclxuICAgKi9cclxuICBhc3luYyBkb0JlaGF2aW9yRXZlbnQobWFwKSB7XHJcbiAgICBpZiAoXHJcbiAgICAgIG1hcC5pc0N1dHNjZW5lUGxheWluZyB8fFxyXG4gICAgICB0aGlzLmJlaGF2aW9yTG9vcC5sZW5ndGggPT09IDAgfHxcclxuICAgICAgdGhpcy5pc1N0YW5kaW5nXHJcbiAgICApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbGV0IGV2ZW50ID0gdGhpcy5iZWhhdmlvckxvb3BbdGhpcy5iZWhhdmlvckxvb3BJbmRleF07XHJcbiAgICBldmVudC53aG8gPSB0aGlzLmlkO1xyXG4gICAgY29uc3QgZXZlbnRIYW5kbGVyID0gbmV3IE92ZXJXb3JsZEV2ZW50KHsgbWFwOiBtYXAsIGV2ZW50OiBldmVudCB9KTtcclxuICAgIGF3YWl0IGV2ZW50SGFuZGxlci5pbml0KCk7XHJcbiAgICB0aGlzLmJlaGF2aW9yTG9vcEluZGV4ICs9IDE7XHJcbiAgICBpZiAodGhpcy5iZWhhdmlvckxvb3BJbmRleCA9PT0gdGhpcy5iZWhhdmlvckxvb3AubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMuYmVoYXZpb3JMb29wSW5kZXggPSAwO1xyXG4gICAgfVxyXG4gICAgdGhpcy5kb0JlaGF2aW9yRXZlbnQobWFwKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbWVPYmplY3Q7XHJcbiIsImNsYXNzIEtleVByZXNzTGlzdGVuZXIge1xyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBrZXlDb2RlXHJcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihrZXlDb2RlLCBjYWxsYmFjaykge1xyXG4gICAgbGV0IGtleVNhZmUgPSB0cnVlO1xyXG4gICAgdGhpcy5rZXlkb3duRnVuY3Rpb24gPSAoZXZlbnQpID0+IHtcclxuICAgICAgaWYgKGV2ZW50LmNvZGUgPT09IGtleUNvZGUpIHtcclxuICAgICAgICBpZiAoa2V5U2FmZSkge1xyXG4gICAgICAgICAga2V5U2FmZSA9IGZhbHNlO1xyXG4gICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5rZXl1cEZ1bmN0aW9uID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgIGlmIChldmVudC5jb2RlID09PSBrZXlDb2RlKSB7XHJcbiAgICAgICAga2V5U2FmZSA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5rZXlkb3duRnVuY3Rpb24pO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIHRoaXMua2V5dXBGdW5jdGlvbik7XHJcbiAgfVxyXG5cclxuICB1bmJpbmQoKSB7XHJcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLmtleWRvd25GdW5jdGlvbik7XHJcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgdGhpcy5rZXl1cEZ1bmN0aW9uKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEtleVByZXNzTGlzdGVuZXI7XHJcbiIsImltcG9ydCB7IE92ZXJXb3JsZE1hcHNMaXN0IH0gZnJvbSBcIi4uL0RhdGEvQWxsTWFwTGlzdFwiO1xyXG5pbXBvcnQgR2FtZU9iamVjdCBmcm9tIFwiLi9HYW1lT2JqZWN0XCI7XHJcbmltcG9ydCBQZXJzb24gZnJvbSBcIi4vUGVyc29uXCI7XHJcbmltcG9ydCBPdmVyV29ybGRNYXAgZnJvbSBcIi4vT3ZlcldvcmxkTWFwXCI7XHJcbmltcG9ydCBEaXJlY3Rpb25JbnB1dCBmcm9tIFwiLi9EaXJlY3Rpb25JbnB1dFwiO1xyXG5pbXBvcnQgS2V5UHJlc3NMaXN0ZW5lciBmcm9tIFwiLi9LZXlQcmVzc0xpc3RlbmVyXCI7XHJcbmltcG9ydCBjb25zdGFudHMgZnJvbSBcIi4uL0RhdGEvY29uc3RhbnRzXCI7XHJcblxyXG5jbGFzcyBPdmVyV29ybGQge1xyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcclxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBjb25maWcuZWxlbWVudFxyXG4gICAqIEBwYXJhbSB7J2hlaGUnfCdoYWhhJ30gY29uZmlnLnRlc3RcclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcclxuICAgIGNvbnN0IHsgZWxlbWVudCB9ID0gY29uZmlnO1xyXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEB0eXBlIHtIVE1MQ2FudmFzRWxlbWVudH1cclxuICAgICAqL1xyXG4gICAgdGhpcy5jYW52YXMgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lLWNhbnZhc1wiKTsgLy9IVE1MQ2FudmFzRWxlbWVudFxyXG5cclxuICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHR5cGUge092ZXJXb3JsZE1hcCB8IG51bGx9XHJcbiAgICAgKi9cclxuICAgIHRoaXMubWFwID0gbnVsbDtcclxuICB9XHJcblxyXG4gIHN0YXJ0R2FtZUxvb3AoKSB7XHJcbiAgICBjb25zdCBzdGVwID0gKCkgPT4ge1xyXG4gICAgICAvLyBDbGVhciBPZiBUaGUgQ2FudmFzXHJcbiAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcclxuXHJcbiAgICAgIC8vIENhbWVyYVxyXG4gICAgICBjb25zdCBjYW1lcmFQZXJzb24gPSB0aGlzLm1hcC5nYW1lT2JqZWN0cy5oZXJvO1xyXG5cclxuICAgICAgLy8gVXBkYXRlIEFsbCBPYmplY3RzXHJcbiAgICAgIE9iamVjdC52YWx1ZXModGhpcy5tYXAuZ2FtZU9iamVjdHMpLmZvckVhY2goXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQHBhcmFtIHtHYW1lT2JqZWN0IHwgUGVyc29ufSBvYmpcclxuICAgICAgICAgKi9cclxuICAgICAgICAob2JqKSA9PiB7XHJcbiAgICAgICAgICBvYmoudXBkYXRlKHtcclxuICAgICAgICAgICAgYXJyb3c6IHRoaXMuZGlyZWN0aW9uQ29udHJvbGxlci5kaXJlY3Rpb24sXHJcbiAgICAgICAgICAgIG1hcDogdGhpcy5tYXAsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcblxyXG4gICAgICAvLyBEcmF3IHRoZSBMb3dlciBMYXllclxyXG4gICAgICB0aGlzLm1hcC5kcmF3TG93ZXJJbWFnZSh0aGlzLmN0eCwgY2FtZXJhUGVyc29uKTtcclxuXHJcbiAgICAgIC8vIE1ha2UgUGVyc29uIGFuZCBNaWRkbGUgTGF5ZXJcclxuICAgICAgT2JqZWN0LnZhbHVlcyh0aGlzLm1hcC5nYW1lT2JqZWN0cylcclxuICAgICAgICAuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIGEueSAtIGIueTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5mb3JFYWNoKFxyXG4gICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgKiBAcGFyYW0ge0dhbWVPYmplY3QgfCBQZXJzb259IG9ialxyXG4gICAgICAgICAgICovXHJcbiAgICAgICAgICAob2JqKSA9PiB7XHJcbiAgICAgICAgICAgIG9iai5zcHJpdGUuZHJhdyh0aGlzLmN0eCwgY2FtZXJhUGVyc29uKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG5cclxuICAgICAgdGhpcy5tYXAuZHJhd1VwcGVySW1hZ2UodGhpcy5jdHgsIGNhbWVyYVBlcnNvbik7XHJcblxyXG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xyXG4gICAgICAgIHN0ZXAoKTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHN0ZXAoKTtcclxuICB9XHJcblxyXG4gIGJpbmRBY3Rpb25JbnB1dCgpIHtcclxuICAgIG5ldyBLZXlQcmVzc0xpc3RlbmVyKFwiRW50ZXJcIiwgKCkgPT4ge1xyXG4gICAgICB0aGlzLm1hcC5jaGVja0ZvckFjdGlvbkN1dHNjZW5lKCk7XHJcbiAgICB9KTtcclxuICAgIG5ldyBLZXlQcmVzc0xpc3RlbmVyKFwiU3BhY2VcIiwgKCkgPT4ge1xyXG4gICAgICB0aGlzLm1hcC5jaGVja0ZvckFjdGlvbkN1dHNjZW5lKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGJpbmRIZXJvUG9zaXRpb25DaGVjaygpIHtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoY29uc3RhbnRzLmV2ZW50cy5QZXJzb25XYWxraW5nQ29tcGxldGUsIChlKSA9PiB7XHJcbiAgICAgIGlmIChlLmRldGFpbC53aG9JZCA9PT0gXCJoZXJvXCIpIHtcclxuICAgICAgICB0aGlzLm1hcC5jaGVja0ZvckZvb3RzdGVwQ3V0c2NlbmUoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzdGFydE1hcChtYXBDb25maWcpIHtcclxuICAgIHRoaXMubWFwID0gbmV3IE92ZXJXb3JsZE1hcChtYXBDb25maWcpO1xyXG4gICAgdGhpcy5tYXAub3ZlcldvcmxkID0gdGhpcztcclxuICAgIHRoaXMubWFwLm1vdW50T2JqZWN0cygpO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpIHtcclxuICAgIHRoaXMuc3RhcnRNYXAoT3ZlcldvcmxkTWFwc0xpc3QuTWFwMik7XHJcbiAgICB0aGlzLmJpbmRBY3Rpb25JbnB1dCgpO1xyXG4gICAgdGhpcy5iaW5kSGVyb1Bvc2l0aW9uQ2hlY2soKTtcclxuXHJcbiAgICB0aGlzLmRpcmVjdGlvbkNvbnRyb2xsZXIgPSBuZXcgRGlyZWN0aW9uSW5wdXQoKTtcclxuICAgIHRoaXMuZGlyZWN0aW9uQ29udHJvbGxlci5pbml0KCk7XHJcblxyXG4gICAgLy8gU3RhcnQgR2FtZSBMb29wXHJcbiAgICB0aGlzLnN0YXJ0R2FtZUxvb3AoKTtcclxuXHJcbiAgICAvLyBpZiBDdXRzY2VuZVxyXG4gICAgdGhpcy5tYXAuc3RhcnRDdXRTY2VuZShbXHJcbiAgICAgIHsgdHlwZTogXCJ0ZXh0TWVzc2FnZVwiLCB0ZXh0OiBcIkhlbGxvIEZpbnRlY2ggR2FtZSFcIiB9LFxyXG4gICAgXSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPdmVyV29ybGQ7XHJcbiIsImltcG9ydCBPdmVyV29ybGRNYXAgZnJvbSBcIi4vT3ZlcldvcmxkTWFwXCI7XHJcbmltcG9ydCBjb25zdGFudHMgZnJvbSBcIi4uL0RhdGEvY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IE92ZXJXb3JsZE1hcHNMaXN0IH0gZnJvbSBcIi4uL0RhdGEvQWxsTWFwTGlzdFwiO1xyXG5pbXBvcnQgVGV4dE1lc3NhZ2UgZnJvbSBcIi4vVGV4dE1lc3NhZ2VcIjtcclxuaW1wb3J0IHsgb3Bwb3NpdGVEaXJlY3Rpb24gfSBmcm9tIFwiLi4vdXRpbHMvaGVscGVyXCI7XHJcblxyXG5jbGFzcyBPdmVyV29ybGRFdmVudCB7XHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xyXG4gICAqIEBwYXJhbSB7T3ZlcldvcmxkTWFwfSBjb25maWcubWFwXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZy5ldmVudFxyXG4gICAqIEBwYXJhbSB7J3dhbGsnIHwgJ3N0YW5kJyB9IGNvbmZpZy5ldmVudC50eXBlXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IGNvbmZpZy5ldmVudC53aG9cclxuICAgKiBAcGFyYW0ge051bWJlcn0gY29uZmlnLmV2ZW50LnRpbWVcclxuICAgKiBAcGFyYW0geyd1cCcgfCAnZG93bicgfCAnbGVmdCcgfCAncmlnaHQnIH0gY29uZmlnLmV2ZW50LmRpcmVjdGlvblxyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBjb25maWcuZXZlbnQudGV4dFxyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBjb25maWcuZXZlbnQuZmFjZUhlcm9cclxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjb25maWcuZXZlbnQub25Db21wbGV0ZVxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xyXG4gICAgY29uc3QgeyBtYXAsIGV2ZW50IH0gPSBjb25maWc7XHJcbiAgICB0aGlzLm1hcCA9IG1hcDtcclxuICAgIHRoaXMuZXZlbnQgPSBldmVudDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8QW55Pn1cclxuICAgKi9cclxuICBpbml0KCkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgIHRoaXNbdGhpcy5ldmVudC50eXBlXShyZXNvbHZlKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc3RhbmQocmVzb2x2ZSkge1xyXG4gICAgY29uc3Qgd2hvID0gdGhpcy5tYXAuZ2FtZU9iamVjdHNbdGhpcy5ldmVudC53aG9dO1xyXG4gICAgd2hvLnN0YXJ0QmVoYXZpb3IoXHJcbiAgICAgIHtcclxuICAgICAgICBtYXA6IHRoaXMubWFwLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdHlwZTogXCJzdGFuZFwiLFxyXG4gICAgICAgIGRpcmVjdGlvbjogdGhpcy5ldmVudC5kaXJlY3Rpb24sXHJcbiAgICAgICAgdGltZTogdGhpcy5ldmVudC50aW1lLFxyXG4gICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IGNvbXBsZXRlSGFuZGxlciA9IChlKSA9PiB7XHJcbiAgICAgIGlmIChlLmRldGFpbC53aG9JZCA9PT0gdGhpcy5ldmVudC53aG8pIHtcclxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICAgY29uc3RhbnRzLmV2ZW50cy5QZXJzb25TdGFuZENvbXBsZXRlLFxyXG4gICAgICAgICAgY29tcGxldGVIYW5kbGVyXHJcbiAgICAgICAgKTtcclxuICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgY29uc3RhbnRzLmV2ZW50cy5QZXJzb25TdGFuZENvbXBsZXRlLFxyXG4gICAgICBjb21wbGV0ZUhhbmRsZXJcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICB3YWxrKHJlc29sdmUpIHtcclxuICAgIGNvbnN0IHdobyA9IHRoaXMubWFwLmdhbWVPYmplY3RzW3RoaXMuZXZlbnQud2hvXTtcclxuICAgIHdoby5zdGFydEJlaGF2aW9yKFxyXG4gICAgICB7XHJcbiAgICAgICAgbWFwOiB0aGlzLm1hcCxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHR5cGU6IFwid2Fsa1wiLFxyXG4gICAgICAgIGRpcmVjdGlvbjogdGhpcy5ldmVudC5kaXJlY3Rpb24sXHJcbiAgICAgICAgcmV0cnk6IHRydWUsXHJcbiAgICAgIH1cclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgY29tcGxldGVIYW5kbGVyID0gKGUpID0+IHtcclxuICAgICAgaWYgKGUuZGV0YWlsLndob0lkID09PSB0aGlzLmV2ZW50Lndobykge1xyXG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgICBjb25zdGFudHMuZXZlbnRzLlBlcnNvbldhbGtpbmdDb21wbGV0ZSxcclxuICAgICAgICAgIGNvbXBsZXRlSGFuZGxlclxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgIGNvbnN0YW50cy5ldmVudHMuUGVyc29uV2Fsa2luZ0NvbXBsZXRlLFxyXG4gICAgICBjb21wbGV0ZUhhbmRsZXJcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICB0ZXh0TWVzc2FnZShyZXNvbHZlKSB7XHJcbiAgICBpZiAodGhpcy5ldmVudC5mYWNlSGVybykge1xyXG4gICAgICBjb25zdCBvYmogPSB0aGlzLm1hcC5nYW1lT2JqZWN0c1t0aGlzLmV2ZW50LmZhY2VIZXJvXTtcclxuICAgICAgb2JqLmRpcmVjdGlvbiA9IG9wcG9zaXRlRGlyZWN0aW9uKHRoaXMubWFwLmdhbWVPYmplY3RzW1wiaGVyb1wiXS5kaXJlY3Rpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG1lc3NhZ2UgPSBuZXcgVGV4dE1lc3NhZ2Uoe1xyXG4gICAgICB0ZXh0OiB0aGlzLmV2ZW50LnRleHQsXHJcbiAgICAgIG9uQ29tcGxldGU6ICgpID0+IHJlc29sdmUoKSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IG1lc3NhZ2VDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWUtY29udGFpbmVyXCIpO1xyXG4gICAgbWVzc2FnZS5pbml0KG1lc3NhZ2VDb250YWluZXIpO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlTWFwKHJlc29sdmUpIHtcclxuICAgIHRoaXMubWFwLm92ZXJXb3JsZC5zdGFydE1hcChPdmVyV29ybGRNYXBzTGlzdFt0aGlzLmV2ZW50Lm1hcF0pO1xyXG4gICAgcmVzb2x2ZSgpO1xyXG4gIH1cclxuXHJcbiAgb3BlblBob25lKHJlc29sdmUpIHtcclxuICAgIGNvbnN0IHBob25lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1YWJwYXlDb250YWluZXJcIik7XHJcbiAgICBjb25zdCBjYW5jZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbmNlbFwiKTtcclxuICAgIGNvbnN0IG5leHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5leHRcIik7XHJcbiAgICBwaG9uZS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcblxyXG4gICAgW2NhbmNlbCwgbmV4dF0uZm9yRWFjaCgoZWwpID0+IHtcclxuICAgICAgZWwub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICBwaG9uZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICAgIHJlc29sdmUoKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE92ZXJXb3JsZEV2ZW50O1xyXG4iLCJpbXBvcnQgeyBuZXh0UG9zaXRpb24sIHdpdGhHcmlkcyB9IGZyb20gXCIuLi91dGlscy9oZWxwZXJcIjtcclxuaW1wb3J0IEdhbWVPYmplY3QgZnJvbSBcIi4vR2FtZU9iamVjdFwiO1xyXG5pbXBvcnQgT3ZlcldvcmxkRXZlbnQgZnJvbSBcIi4vT3ZlcldvcmxkRXZlbnRcIjtcclxuaW1wb3J0IE92ZXJXb3JsZCBmcm9tIFwiLi9PdmVyV29ybGRcIjtcclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBPdmVyV29ybE1hcFxyXG4gKi9cclxuY2xhc3MgT3ZlcldvcmxkTWFwIHtcclxuICAvKipcclxuICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IGNvbmZpZy5sb3dlclNyY1xyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBjb25maWcudXBwZXJTcmNcclxuICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnLndhbGxzXHJcbiAgICogQHBhcmFtIHtBcnJheTx7ZXZlbnRzOiAqW119Pn0gY29uZmlnLmN1dHNjZW5lU3BhY2VzXHJcbiAgICogQHBhcmFtIHt7aGVybzogR2FtZU9iamVjdCwgbnBjMTogR2FtZU9iamVjdCwgbnBjMjogR2FtZU9iamVjdH19IGNvbmZpZy5nYW1lT2JqZWN0c1xyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xyXG4gICAgLyoqXHJcbiAgICAgKiBAdHlwZSB7T3ZlcldvcmxkfVxyXG4gICAgICovXHJcbiAgICB0aGlzLm92ZXJXb3JsZCA9IG51bGw7XHJcbiAgICB0aGlzLmdhbWVPYmplY3RzID0gY29uZmlnLmdhbWVPYmplY3RzO1xyXG4gICAgdGhpcy53YWxscyA9IGNvbmZpZy53YWxscyB8fCB7fTtcclxuICAgIHRoaXMuY3V0c2NlbmVTcGFjZXMgPSBjb25maWcuY3V0c2NlbmVTcGFjZXMgfHwgW107XHJcblxyXG4gICAgdGhpcy5sb3dlckxheWVyID0gbmV3IEltYWdlKCk7XHJcbiAgICB0aGlzLmxvd2VyTGF5ZXIuc3JjID0gY29uZmlnLmxvd2VyU3JjO1xyXG5cclxuICAgIHRoaXMudXBwZXJMYXllciA9IG5ldyBJbWFnZSgpO1xyXG4gICAgdGhpcy51cHBlckxheWVyLnNyYyA9IGNvbmZpZy51cHBlclNyYztcclxuXHJcbiAgICB0aGlzLmlzQ3V0c2NlbmVQbGF5aW5nID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0ge0NhbnZhc1JlbmRlcmluZ0NvbnRleHQyRH0gY3R4XHJcbiAgICogQHBhcmFtIHtHYW1lT2JqZWN0fSBjYW1lcmFQZXJzb25cclxuICAgKi9cclxuICBkcmF3TG93ZXJJbWFnZShjdHgsIGNhbWVyYVBlcnNvbikge1xyXG4gICAgY3R4LmRyYXdJbWFnZShcclxuICAgICAgdGhpcy5sb3dlckxheWVyLFxyXG4gICAgICB3aXRoR3JpZHMoMTAuNSkgLSBjYW1lcmFQZXJzb24ueCxcclxuICAgICAgd2l0aEdyaWRzKDYpIC0gY2FtZXJhUGVyc29uLnlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0ge0NhbnZhc1JlbmRlcmluZ0NvbnRleHQyRH0gY3R4XHJcbiAgICogQHBhcmFtIHtHYW1lT2JqZWN0fSBjYW1lcmFQZXJzb25cclxuICAgKi9cclxuICBkcmF3VXBwZXJJbWFnZShjdHgsIGNhbWVyYVBlcnNvbikge1xyXG4gICAgY3R4LmRyYXdJbWFnZShcclxuICAgICAgdGhpcy51cHBlckxheWVyLFxyXG4gICAgICB3aXRoR3JpZHMoMTAuNSkgLSBjYW1lcmFQZXJzb24ueCxcclxuICAgICAgd2l0aEdyaWRzKDYpIC0gY2FtZXJhUGVyc29uLnlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0ge051bWJlcn0gY3VyWFxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBjdXJZXHJcbiAgICogQHBhcmFtIHsndXAnIHwgJ2Rvd24nIHwgJ2xlZnQnIHwgJ3JpZ2h0JyB9IGRpcmVjdGlvblxyXG4gICAqL1xyXG4gIGlzU3BhY2VUYWtlbihjdXJYLCBjdXJZLCBkaXJlY3Rpb24pIHtcclxuICAgIGNvbnN0IHsgeCwgeSB9ID0gbmV4dFBvc2l0aW9uKGN1clgsIGN1clksIGRpcmVjdGlvbik7XHJcbiAgICByZXR1cm4gdGhpcy53YWxsc1tgJHt4fSwke3l9YF0gfHwgZmFsc2U7XHJcbiAgfVxyXG5cclxuICAvLyBNb3VudGluZyBPYmplY3RcclxuICBtb3VudE9iamVjdHMoKSB7XHJcbiAgICAvLyBPYmplY3QudmFsdWVzKHRoaXMuZ2FtZU9iamVjdHMpLm1hcCgob2JqKSA9PiB7XHJcbiAgICAvLyAgIG9iai5tb3VudCh0aGlzKTtcclxuICAgIC8vIH0pO1xyXG5cclxuICAgIE9iamVjdC5rZXlzKHRoaXMuZ2FtZU9iamVjdHMpLm1hcCgoa2V5KSA9PiB7XHJcbiAgICAgIGxldCBvYmplY3QgPSB0aGlzLmdhbWVPYmplY3RzW2tleV07XHJcbiAgICAgIG9iamVjdC5pZCA9IGtleTtcclxuICAgICAgb2JqZWN0Lm1vdW50KHRoaXMpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyBNYXAgSW5pdGlhbGl6ZVxyXG5cclxuICBjaGVja0ZvckFjdGlvbkN1dHNjZW5lKCkge1xyXG4gICAgY29uc3QgaGVybyA9IHRoaXMuZ2FtZU9iamVjdHNbXCJoZXJvXCJdO1xyXG4gICAgY29uc3QgbmV4dENvb3JkID0gbmV4dFBvc2l0aW9uKGhlcm8ueCwgaGVyby55LCBoZXJvLmRpcmVjdGlvbik7XHJcbiAgICBjb25zdCBtYXRjaCA9IE9iamVjdC52YWx1ZXModGhpcy5nYW1lT2JqZWN0cykuZmluZCgob2JqZWN0KSA9PiB7XHJcbiAgICAgIHJldHVybiBgJHtvYmplY3QueH0sJHtvYmplY3QueX1gID09PSBgJHtuZXh0Q29vcmQueH0sJHtuZXh0Q29vcmQueX1gO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCF0aGlzLmlzQ3V0c2NlbmVQbGF5aW5nICYmIG1hdGNoICYmIG1hdGNoLnRhbGtpbmcubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMuc3RhcnRDdXRTY2VuZShtYXRjaC50YWxraW5nWzBdLmV2ZW50cyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjaGVja0ZvckZvb3RzdGVwQ3V0c2NlbmUoKSB7XHJcbiAgICBjb25zdCBoZXJvID0gdGhpcy5nYW1lT2JqZWN0c1tcImhlcm9cIl07XHJcbiAgICBjb25zdCBtYXRjaCA9IHRoaXMuY3V0c2NlbmVTcGFjZXNbYCR7aGVyby54fSwke2hlcm8ueX1gXTtcclxuICAgIGlmICghdGhpcy5pc0N1dHNjZW5lUGxheWluZyAmJiBtYXRjaCkge1xyXG4gICAgICB0aGlzLnN0YXJ0Q3V0U2NlbmUobWF0Y2hbMF0uZXZlbnRzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFzeW5jIHN0YXJ0Q3V0U2NlbmUoZXZlbnRzKSB7XHJcbiAgICB0aGlzLmlzQ3V0c2NlbmVQbGF5aW5nID0gdHJ1ZTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXZlbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGV2ZW50SGFuZGxlciA9IG5ldyBPdmVyV29ybGRFdmVudCh7XHJcbiAgICAgICAgZXZlbnQ6IGV2ZW50c1tpXSxcclxuICAgICAgICBtYXA6IHRoaXMsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgYXdhaXQgZXZlbnRIYW5kbGVyLmluaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBPYmplY3Qua2V5cyh0aGlzLmdhbWVPYmplY3RzKS5tYXAoKGtleSkgPT4ge1xyXG4gICAgICBsZXQgb2JqZWN0ID0gdGhpcy5nYW1lT2JqZWN0c1trZXldO1xyXG4gICAgICBvYmplY3QuaWQgPSBrZXk7XHJcbiAgICAgIG9iamVjdC5tb3VudCh0aGlzKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5pc0N1dHNjZW5lUGxheWluZyA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgLy8gT3RoZXIgT2JqZWN0IFdhbGxzXHJcbiAgYWRkV2FsbCh4LCB5KSB7XHJcbiAgICB0aGlzLndhbGxzW2Ake3h9LCR7eX1gXSA9IHRydWU7XHJcbiAgfVxyXG5cclxuICByZW1vdmVXYWxsKHgsIHkpIHtcclxuICAgIGRlbGV0ZSB0aGlzLndhbGxzW2Ake3h9LCR7eX1gXTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICpcclxuICAgKiBAcGFyYW0geyd1cCcgfCAnZG93bicgfCAnbGVmdCcgfCAncmlnaHQnIH0gZGlyZWN0aW9uXHJcbiAgICovXHJcbiAgbW92ZVdhbGwod2FzWCwgd2FzWSwgZGlyZWN0aW9uKSB7XHJcbiAgICB0aGlzLnJlbW92ZVdhbGwod2FzWCwgd2FzWSk7XHJcbiAgICBjb25zdCB7IHgsIHkgfSA9IG5leHRQb3NpdGlvbih3YXNYLCB3YXNZLCBkaXJlY3Rpb24pO1xyXG4gICAgdGhpcy5hZGRXYWxsKHgsIHkpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgT3ZlcldvcmxkTWFwO1xyXG4iLCJpbXBvcnQgY29uc3RhbnRzIGZyb20gXCIuLi9EYXRhL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBlbWl0RXZlbnQgfSBmcm9tIFwiLi4vdXRpbHMvaGVscGVyXCI7XHJcbmltcG9ydCBHYW1lT2JqZWN0IGZyb20gXCIuL0dhbWVPYmplY3RcIjtcclxuaW1wb3J0IE92ZXJXb3JsZE1hcCBmcm9tIFwiLi9PdmVyV29ybGRNYXBcIjtcclxuXHJcbi8qKlxyXG4gKi9cclxuY2xhc3MgUGVyc29uIGV4dGVuZHMgR2FtZU9iamVjdCB7XHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtHYW1lT2JqZWN0fSBjb25maWdcclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcclxuICAgIHN1cGVyKGNvbmZpZyk7XHJcblxyXG4gICAgdGhpcy5tb3ZpbmdQcm9ncmVzc1JlbWFpbmlnID0gMDtcclxuXHJcbiAgICB0aGlzLmlzUGxheWVyQ29udHJvbGxlZCA9IGNvbmZpZy5pc1BsYXllckNvbnRyb2xsZWQgfHwgZmFsc2U7XHJcblxyXG4gICAgdGhpcy5pc1N0YW5kaW5nID0gZmFsc2U7XHJcblxyXG4gICAgdGhpcy5kaXJlY3Rpb25VcGRhdGUgPSB7XHJcbiAgICAgIHVwOiBbXCJ5XCIsIC0xXSxcclxuICAgICAgZG93bjogW1wieVwiLCAxXSxcclxuICAgICAgbGVmdDogW1wieFwiLCAtMV0sXHJcbiAgICAgIHJpZ2h0OiBbXCJ4XCIsIDFdLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZVxyXG4gICAqIEBwYXJhbSB7J2Rvd24nIHwgJ3VwJyB8ICdsZWZ0JyB8ICdyaWdodCcgfSBzdGF0ZS5hcnJvd1xyXG4gICAqIEBwYXJhbSB7T3ZlcldvcmxkTWFwfSBzdGF0ZS5tYXBcclxuICAgKi9cclxuICB1cGRhdGUoc3RhdGUpIHtcclxuICAgIGlmICh0aGlzLm1vdmluZ1Byb2dyZXNzUmVtYWluaWcgPiAwKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlUG9zaXRpb24oKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICB0aGlzLmlzUGxheWVyQ29udHJvbGxlZCAmJlxyXG4gICAgICAgICFzdGF0ZS5tYXAuaXNDdXRzY2VuZVBsYXlpbmcgJiZcclxuICAgICAgICBzdGF0ZS5hcnJvd1xyXG4gICAgICApIHtcclxuICAgICAgICB0aGlzLnN0YXJ0QmVoYXZpb3Ioc3RhdGUsIHtcclxuICAgICAgICAgIHR5cGU6IFwid2Fsa1wiLFxyXG4gICAgICAgICAgZGlyZWN0aW9uOiBzdGF0ZS5hcnJvdyxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy51cGRhdGVTcHJpbnQoc3RhdGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IHN0YXRlXHJcbiAgICogQHBhcmFtIHtPdmVyV29ybGRNYXB9IHN0YXRlLm1hcFxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBiZWhhdmlvclxyXG4gICAqIEBwYXJhbSB7J3dhbGsnIHwgJ3N0YW5kJyB9IGJlaGF2aW9yLnR5cGVcclxuICAgKiBAcGFyYW0geyd1cCcgfCAnZG93bicgfCAnbGVmdCcgfCAncmlnaHQnIH0gYmVoYXZpb3IuZGlyZWN0aW9uXHJcbiAgICogQHBhcmFtIHtCb29sZWFufSBiZWhhdmlvci5yZXRyeVxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBiZWhhdmlvci50aW1lXHJcbiAgICovXHJcbiAgc3RhcnRCZWhhdmlvcihzdGF0ZSwgYmVoYXZpb3IpIHtcclxuICAgIHRoaXMuZGlyZWN0aW9uID0gYmVoYXZpb3IuZGlyZWN0aW9uO1xyXG5cclxuICAgIGlmIChiZWhhdmlvci50eXBlID09PSBcIndhbGtcIikge1xyXG4gICAgICBjb25zdCBpc1NwYWNlVGFrZW4gPSBzdGF0ZS5tYXAuaXNTcGFjZVRha2VuKFxyXG4gICAgICAgIHRoaXMueCxcclxuICAgICAgICB0aGlzLnksXHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb25cclxuICAgICAgKTtcclxuICAgICAgaWYgKGlzU3BhY2VUYWtlbikge1xyXG4gICAgICAgIGJlaGF2aW9yLnJldHJ5ICYmXHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zdGFydEJlaGF2aW9yKHN0YXRlLCBiZWhhdmlvcik7XHJcbiAgICAgICAgICB9LCAxMCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIHN0YXRlLm1hcC5tb3ZlV2FsbCh0aGlzLngsIHRoaXMueSwgdGhpcy5kaXJlY3Rpb24pO1xyXG4gICAgICB0aGlzLm1vdmluZ1Byb2dyZXNzUmVtYWluaWcgPSBjb25zdGFudHMubW92aW5nUHJvZ3Jlc3M7XHJcbiAgICAgIHRoaXMudXBkYXRlU3ByaW50KHN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoYmVoYXZpb3IudHlwZSA9PT0gXCJzdGFuZFwiKSB7XHJcbiAgICAgIHRoaXMuaXNTdGFuZGluZyA9IHRydWU7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGVtaXRFdmVudChjb25zdGFudHMuZXZlbnRzLlBlcnNvblN0YW5kQ29tcGxldGUsIHsgd2hvSWQ6IHRoaXMuaWQgfSk7XHJcbiAgICAgICAgdGhpcy5pc1N0YW5kaW5nID0gZmFsc2U7XHJcbiAgICAgIH0sIGJlaGF2aW9yLnRpbWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlUG9zaXRpb24oKSB7XHJcbiAgICBpZiAodGhpcy5tb3ZpbmdQcm9ncmVzc1JlbWFpbmlnID4gMCkge1xyXG4gICAgICBjb25zdCBbcHJvcGVydHksIGNoYW5nZV0gPSB0aGlzLmRpcmVjdGlvblVwZGF0ZVt0aGlzLmRpcmVjdGlvbl07XHJcbiAgICAgIHRoaXNbcHJvcGVydHldICs9IGNoYW5nZTtcclxuICAgICAgdGhpcy5tb3ZpbmdQcm9ncmVzc1JlbWFpbmlnIC09IDE7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5tb3ZpbmdQcm9ncmVzc1JlbWFpbmlnID09PSAwKSB7XHJcbiAgICAgIGVtaXRFdmVudChjb25zdGFudHMuZXZlbnRzLlBlcnNvbldhbGtpbmdDb21wbGV0ZSwge1xyXG4gICAgICAgIHdob0lkOiB0aGlzLmlkLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZVNwcmludCgpIHtcclxuICAgIGlmICh0aGlzLm1vdmluZ1Byb2dyZXNzUmVtYWluaWcgPiAwKSB7XHJcbiAgICAgIHRoaXMuc3ByaXRlLnNldEFuaW1hdGlvbihcIndhbGtcIiArIGNhcGl0YWxpemVGaXJzdExldHRlcih0aGlzLmRpcmVjdGlvbikpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zcHJpdGUuc2V0QW5pbWF0aW9uKFwiaWRsZVwiICsgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHRoaXMuZGlyZWN0aW9uKSk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQHJldHVybiB7U3RyaW5nfVxyXG4gKi9cclxuZnVuY3Rpb24gY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHN0cmluZykge1xyXG4gIHJldHVybiBzdHJpbmcuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBlcnNvbjtcclxuIiwiY2xhc3MgUmV2ZWFsaW5nVGV4dCB7XHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xyXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGNvbmZpZy5lbGVtZW50XHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IGNvbmZpZy50ZXh0XHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGNvbmZpZy5zcGVlZFxyXG4gICAqIEBwYXJhbSB7TnVtYmVyIHwgbnVsbH0gY29uZmlnLnRpbWVvdXRcclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcclxuICAgIHRoaXMuZWxlbWVudCA9IGNvbmZpZy5lbGVtZW50O1xyXG4gICAgdGhpcy50ZXh0ID0gY29uZmlnLnRleHQ7XHJcbiAgICB0aGlzLnNwZWVkID0gY29uZmlnLnNwZWVkIHx8IDcwO1xyXG5cclxuICAgIHRoaXMudGltZW91dCA9IG51bGw7XHJcbiAgICB0aGlzLmlzRG9uZSA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpIHtcclxuICAgIGxldCBjaGFyYWN0ZXJzID0gW107XHJcbiAgICB0aGlzLnRleHQuc3BsaXQoXCJcIikuZm9yRWFjaCgoY2hhcikgPT4ge1xyXG4gICAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICBzcGFuLnRleHRDb250ZW50ID0gY2hhcjtcclxuICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHNwYW4pO1xyXG5cclxuICAgICAgY2hhcmFjdGVycy5wdXNoKHsgc3BhbiwgZGVsYXlBZnRlcjogY2hhciA9PT0gXCIgXCIgPyAwIDogdGhpcy5zcGVlZCB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmV2ZWFsaW5nVGV4dDtcclxuIiwiaW1wb3J0IGNvbnN0YW50cyBmcm9tIFwiLi4vRGF0YS9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgZHJhd0ltYWdlLCB3aXRoR3JpZHMgfSBmcm9tIFwiLi4vdXRpbHMvaGVscGVyXCI7XHJcbmltcG9ydCBHYW1lT2JqZWN0IGZyb20gXCIuL0dhbWVPYmplY3RcIjtcclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBTcHJpdGVcclxuICovXHJcbmNsYXNzIFNwcml0ZSB7XHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcuYW5pbWF0aW9uc1xyXG4gICAqIEBwYXJhbSB7J2lkbGVEb3duJyB8ICdpZGxlUmlnaHQnIHwgJ2lkbGVVcCcgfCAnaWRsZUxlZnQnIHwgJ3dhbGtEb3duJyB8J3dhbGtSaWdodCcgfCAnd2Fsa1VwJyB8ICd3YWxrTGVmdCcgfSBjb25maWcuY3VycmVudEFuaW1hdGlvblxyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBjb25maWcuc3JjXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGNvbmZpZy5zcXVhcmVTaXplXHJcbiAgICogQHBhcmFtIHtHYW1lT2JqZWN0fSBjb25maWcuZ2FtZU9iamVjdFxyXG4gICAqIEBwYXJhbSB7TnVtYmVyIHwgbnVsbH0gY29uZmlnLmFuaW1hdGlvbkZyYW1lTGltaXRcclxuICAgKiBAcGFyYW0ge3sgIHg6IE51bWJlciwgeTogTnVtYmVyfSB8IG51bGx9IGNvbmZpZy5yZW1vdmVTcXVhcmVTaXplXHJcbiAgICogQHBhcmFtIHtCb29sZWFufSBjb25maWcudXNlU2hhZG93XHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XHJcbiAgICAvLyBTcXVhcmVTaXplIERlZmF1bHQgMzJcclxuICAgIHRoaXMuc3F1YXJlU2l6ZSA9IGNvbmZpZy5zcXVhcmVTaXplIHx8IGNvbnN0YW50cy5zcXVhcmVTaXplO1xyXG4gICAgdGhpcy5yZW1vdmVTcXVhcmVTaXplID0gY29uZmlnLnJlbW92ZVNxdWFyZVNpemVcclxuICAgICAgPyBjb25maWcucmVtb3ZlU3F1YXJlU2l6ZVxyXG4gICAgICA6IHsgeDogOCwgeTogMTggfTtcclxuXHJcbiAgICAvLyBTZXR1cCB0aGUgaW1hZ2VcclxuICAgIGRyYXdJbWFnZShcclxuICAgICAgY29uZmlnLnNyYyB8fCBcIi9wdWJsaWMvaW1hZ2VzL2NoYXJhY3RlcnMvcGVvcGxlL2hlcm8ucG5nXCIsXHJcbiAgICAgIChpbWFnZSkgPT4ge1xyXG4gICAgICAgIHRoaXMuaW1hZ2UgPSBpbWFnZTtcclxuICAgICAgICB0aGlzLmltYWdlSXNMb2FkZWQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIC8vIFNoYWRvdyBJbWFnZVxyXG4gICAgdGhpcy51c2VTaGFkb3cgPSBjb25maWcudXNlU2hhZG93IHx8IGZhbHNlO1xyXG4gICAgaWYgKHRoaXMudXNlU2hhZG93KSB7XHJcbiAgICAgIGRyYXdJbWFnZShcIi9wdWJsaWMvaW1hZ2VzL2NoYXJhY3RlcnMvc2hhZG93LnBuZ1wiLCAoaW1hZ2UpID0+IHtcclxuICAgICAgICB0aGlzLnNoYWRvd0ltYWdlID0gaW1hZ2U7XHJcbiAgICAgICAgdGhpcy5zaGFkb3dJbWFnZUxvYWRlZCA9IHRydWU7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENvbmZpdXJlIEFuaW1hdGlvbiBBbmQgSW5pdGlhbCBTdGF0ZVxyXG4gICAgdGhpcy5hbmltYXRpb25zID0gY29uZmlnLmFuaW1hdGlvbnMgfHwge1xyXG4gICAgICBpZGxlRG93bjogW1swLCAwXV0sXHJcbiAgICAgIGlkbGVSaWdodDogW1swLCAxXV0sXHJcbiAgICAgIGlkbGVVcDogW1swLCAyXV0sXHJcbiAgICAgIGlkbGVMZWZ0OiBbWzAsIDNdXSxcclxuICAgICAgd2Fsa0Rvd246IFtcclxuICAgICAgICBbMSwgMF0sIC8vIGltYWdlIHJvdyAxIGNvbCAxXHJcbiAgICAgICAgWzAsIDBdLCAvLyBpbWFnZSByb3cgMSBjb2wgMlxyXG4gICAgICAgIFszLCAwXSwgLy8gaW1hZ2Ugcm93IDEgY29sIDRcclxuICAgICAgICBbMCwgMF0sIC8vIGltYWdlIHJvdyAxIGNvbCAyXHJcbiAgICAgIF0sXHJcbiAgICAgIHdhbGtSaWdodDogW1xyXG4gICAgICAgIFsxLCAxXSwgLy8gaW1hZ2Ugcm93IDEgY29sIDFcclxuICAgICAgICBbMCwgMV0sIC8vIGltYWdlIHJvdyAxIGNvbCAyXHJcbiAgICAgICAgWzMsIDFdLCAvLyBpbWFnZSByb3cgMSBjb2wgNFxyXG4gICAgICAgIFswLCAxXSwgLy8gaW1hZ2Ugcm93IDEgY29sIDJcclxuICAgICAgXSxcclxuICAgICAgd2Fsa1VwOiBbXHJcbiAgICAgICAgWzEsIDJdLCAvLyBpbWFnZSByb3cgMSBjb2wgMVxyXG4gICAgICAgIFswLCAyXSwgLy8gaW1hZ2Ugcm93IDEgY29sIDJcclxuICAgICAgICBbMywgMl0sIC8vIGltYWdlIHJvdyAxIGNvbCA0XHJcbiAgICAgICAgWzAsIDJdLCAvLyBpbWFnZSByb3cgMSBjb2wgMlxyXG4gICAgICBdLFxyXG4gICAgICB3YWxrTGVmdDogW1xyXG4gICAgICAgIFsxLCAzXSwgLy8gaW1hZ2Ugcm93IDEgY29sIDFcclxuICAgICAgICBbMCwgM10sIC8vIGltYWdlIHJvdyAxIGNvbCAyXHJcbiAgICAgICAgWzMsIDNdLCAvLyBpbWFnZSByb3cgMSBjb2wgNFxyXG4gICAgICAgIFswLCAzXSwgLy8gaW1hZ2Ugcm93IDEgY29sIDJcclxuICAgICAgXSxcclxuICAgIH07XHJcblxyXG4gICAgLy8gU2V0IEFuaW1hdGlvbiBGcmFtZVxyXG4gICAgdGhpcy5jdXJyZW50QW5pbWF0aW9uID0gY29uZmlnLmN1cnJlbnRBbmltYXRpb24gfHwgXCJpZGxlRG93blwiO1xyXG4gICAgdGhpcy5jdXJyZW50QW5pbWF0aW9uRnJhbWUgPSAwO1xyXG4gICAgdGhpcy5hbmltYXRpb25GcmFtZUxpbWl0ID1cclxuICAgICAgY29uZmlnLmFuaW1hdGlvbkZyYW1lTGltaXQgfHwgY29uc3RhbnRzLmFuaW1hdGlvbkZyYW1lTGltaXQ7XHJcbiAgICB0aGlzLmFuaW1hdGlvbkZyYW1lUHJvZ3Jlc3MgPSB0aGlzLmFuaW1hdGlvbkZyYW1lTGltaXQ7XHJcblxyXG4gICAgLy8gY29uc29sZS5sb2coXCIgdGhpcy5hbmltYXRpb25GcmFtZVByb2dyZXNzXCIsIHRoaXMuYW5pbWF0aW9uRnJhbWVQcm9ncmVzcyk7XHJcbiAgICAvL1xyXG4gICAgdGhpcy5nYW1lT2JqZWN0ID0gY29uZmlnLmdhbWVPYmplY3Q7XHJcbiAgfVxyXG5cclxuICAvLyBHZXQgQ3VycmVudCBBbmltYXRpb24gRnJhbWVcclxuICAvKipcclxuICAgKiBAcmV0dXJuIHtbTnVtYmVyLCBOdW1iZXJdIHwgdW5kZWZpbmVkIH1cclxuICAgKi9cclxuICBnZXQgZnJhbWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5hbmltYXRpb25zW3RoaXMuY3VycmVudEFuaW1hdGlvbl1bdGhpcy5jdXJyZW50QW5pbWF0aW9uRnJhbWVdO1xyXG4gIH1cclxuXHJcbiAgc2V0QW5pbWF0aW9uKGtleSkge1xyXG4gICAgaWYgKHRoaXMuY3VycmVudEFuaW1hdGlvbiAhPT0ga2V5KSB7XHJcbiAgICAgIHRoaXMuY3VycmVudEFuaW1hdGlvbiA9IGtleTtcclxuICAgICAgdGhpcy5jdXJyZW50QW5pbWF0aW9uRnJhbWUgPSAwO1xyXG4gICAgICB0aGlzLmFuaW1hdGlvbkZyYW1lUHJvZ3Jlc3MgPSB0aGlzLmFuaW1hdGlvbkZyYW1lTGltaXQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVBbmltYXRpb25Qcm9ncmVzcygpIHtcclxuICAgIC8vIERvd250aWNrIEZyYW1lIFByb2dyZXNzXHJcbiAgICBpZiAodGhpcy5hbmltYXRpb25GcmFtZVByb2dyZXNzID4gMCkge1xyXG4gICAgICB0aGlzLmFuaW1hdGlvbkZyYW1lUHJvZ3Jlc3MgLT0gMTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJlc2V0IHRoZSBjb3VudGVyXHJcbiAgICB0aGlzLmFuaW1hdGlvbkZyYW1lUHJvZ3Jlc3MgPSB0aGlzLmFuaW1hdGlvbkZyYW1lTGltaXQ7XHJcbiAgICB0aGlzLmN1cnJlbnRBbmltYXRpb25GcmFtZSArPSAxO1xyXG5cclxuICAgIGlmICh0aGlzLmZyYW1lID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5jdXJyZW50QW5pbWF0aW9uRnJhbWUgPSAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRHJhdyBDb250ZXh0XHJcbiAgICogQHBhcmFtIHtDYW52YXNSZW5kZXJpbmdDb250ZXh0MkR9IGN0eFxyXG4gICAqIEBwYXJhbSB7R2FtZU9iamVjdH0gY2FtZXJhUGVyc29uXHJcbiAgICovXHJcbiAgZHJhdyhjdHgsIGNhbWVyYVBlcnNvbikge1xyXG4gICAgY29uc3QgeCA9XHJcbiAgICAgIHRoaXMuZ2FtZU9iamVjdC54IC1cclxuICAgICAgdGhpcy5yZW1vdmVTcXVhcmVTaXplLnggK1xyXG4gICAgICB3aXRoR3JpZHMoMTAuNSkgLVxyXG4gICAgICBjYW1lcmFQZXJzb24ueDsgLy8gUmVtb3ZlIFVubmVjZXNzYXJ5IHdpZHRoXHJcbiAgICBjb25zdCB5ID1cclxuICAgICAgdGhpcy5nYW1lT2JqZWN0LnkgLVxyXG4gICAgICB0aGlzLnJlbW92ZVNxdWFyZVNpemUueSArXHJcbiAgICAgIHdpdGhHcmlkcyg2KSAtXHJcbiAgICAgIGNhbWVyYVBlcnNvbi55OyAvLyBSZW1vdmUgVW5uZWNlc3NhcnkgaGVpZ2h0XHJcbiAgICBjb25zdCBbZnJhbWVYLCBmcmFtZVldID0gdGhpcy5mcmFtZTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZnJhbWUpO1xyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKFwiRnJhbWVYXCIsIGZyYW1lWCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIkZyYW1lWVwiLCBmcmFtZVkpO1xyXG5cclxuICAgIC8vIFdoZW4gSW1hZ2UgTG9hZGluZ1xyXG4gICAgdGhpcy5pbWFnZUlzTG9hZGVkICYmXHJcbiAgICAgIGN0eC5kcmF3SW1hZ2UoXHJcbiAgICAgICAgdGhpcy5pbWFnZSwgLy8gSW5zZXJ0IEltYWdlXHJcbiAgICAgICAgZnJhbWVYICogY29uc3RhbnRzLnNxdWFyZVNpemUsIC8vIFggZnJvbSBJbWFnZVxyXG4gICAgICAgIGZyYW1lWSAqIGNvbnN0YW50cy5zcXVhcmVTaXplLCAvLyBZIGZyb20gSW1hZ2VcclxuICAgICAgICB0aGlzLnNxdWFyZVNpemUsIC8vIFdpZHRoIEZyb20gSW1hZ2UsXHJcbiAgICAgICAgdGhpcy5zcXVhcmVTaXplLCAvLyBIZWlnaHQgRnJvbSBJbWFnZVxyXG4gICAgICAgIHgsIC8vIFggZm9yIENhbnZhc1xyXG4gICAgICAgIHksIC8vIFkgZm9yIENhbnZhc1xyXG4gICAgICAgIHRoaXMuc3F1YXJlU2l6ZSwgLy8gV2lkdGggRm9yIENhbnZhc1xyXG4gICAgICAgIHRoaXMuc3F1YXJlU2l6ZSAvLyBIZWlnaHQgRm9yIENhbnZhc1xyXG4gICAgICApO1xyXG5cclxuICAgIC8vIENhbGwgQW5pbWF0aW9uXHJcbiAgICB0aGlzLnVwZGF0ZUFuaW1hdGlvblByb2dyZXNzKCk7XHJcblxyXG4gICAgdGhpcy5zaGFkb3dJbWFnZUxvYWRlZCAmJlxyXG4gICAgICBjdHguZHJhd0ltYWdlKFxyXG4gICAgICAgIHRoaXMuc2hhZG93SW1hZ2UsIC8vIEluc2VydCBJbWFnZVxyXG4gICAgICAgIHgsIC8vIFggZm9yIENhbnZhc1xyXG4gICAgICAgIHkgLy8gWSBmb3IgQ2FudmFzXHJcbiAgICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTcHJpdGU7XHJcbiIsImltcG9ydCBLZXlQcmVzc0xpc3RlbmVyIGZyb20gXCIuL0tleVByZXNzTGlzdGVuZXJcIjtcclxuaW1wb3J0IFJldmVhbGluZ1RleHQgZnJvbSBcIi4vUmV2ZWFsaW5nVGV4dFwiO1xyXG5cclxuY2xhc3MgVGV4dE1lc3NhZ2Uge1xyXG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xyXG4gICAgdGhpcy50ZXh0ID0gY29uZmlnLnRleHQgfHwgXCJcIjtcclxuICAgIHRoaXMub25Db21wbGV0ZSA9IGNvbmZpZy5vbkNvbXBsZXRlO1xyXG4gICAgdGhpcy5lbGVtZW50ID0gbnVsbDtcclxuICB9XHJcblxyXG4gIGNyZWF0ZUVsZW1lbnQoKSB7XHJcbiAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJUZXh0TWVzc2FnZVwiKTtcclxuXHJcbiAgICB0aGlzLmVsZW1lbnQuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgIDxwIGNsYXNzPVwiVGV4dE1lc3NhZ2VfcFwiPiR7dGhpcy50ZXh0fTwvcD5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiVGV4dE1lc3NhZ2VfYnV0dG9uXCI+TmV4dDwvYnV0dG9uPlxyXG4gICAgYDtcclxuXHJcbiAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICB0aGlzLmRvbmUoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMucmV2ZWFsaW5nVGV4dCA9IG5ldyBSZXZlYWxpbmdUZXh0KHtcclxuICAgICAgZWxlbWVudDogdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJUZXh0TWVzc2FnZV9wXCIpLFxyXG4gICAgICB0ZXh0OiB0aGlzLnRleHQsXHJcbiAgICB9KTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEB0eXBlIHtLZXlQcmVzc0xpc3RlbmVyfVxyXG4gICAgICovXHJcbiAgICB0aGlzLmFjdGlvbkxpc3RlbmVyID0gbmV3IEtleVByZXNzTGlzdGVuZXIoXCJFbnRlclwiLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuYWN0aW9uTGlzdGVuZXIudW5iaW5kKCk7XHJcbiAgICAgIHRoaXMuZG9uZSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5hY3Rpb25TcGFjZUxpc3RlbmVyID0gbmV3IEtleVByZXNzTGlzdGVuZXIoXCJTcGFjZVwiLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuYWN0aW9uU3BhY2VMaXN0ZW5lci51bmJpbmQoKTtcclxuICAgICAgdGhpcy5kb25lKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGRvbmUoKSB7XHJcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICB0aGlzLm9uQ29tcGxldGUoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGNvbnRhaW5lclxyXG4gICAqL1xyXG4gIGluaXQoY29udGFpbmVyKSB7XHJcbiAgICB0aGlzLmNyZWF0ZUVsZW1lbnQoKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGV4dE1lc3NhZ2U7XHJcbiIsImltcG9ydCBjb25zdGFudHMgZnJvbSBcIi4uL0RhdGEvY29uc3RhbnRzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZHJhd0ltYWdlID0gKHNyYywgY2IpID0+IHtcclxuICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcclxuICBpbWcub25sb2FkID0gKCkgPT4ge1xyXG4gICAgaWYgKGNiKSB7XHJcbiAgICAgIGNiKGltZyk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBpbWcuc3JjID0gc3JjO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHdpdGhHcmlkcyA9IChuKSA9PiB7XHJcbiAgcmV0dXJuIG4gKiBjb25zdGFudHMuaGFsZlNxdWFyZVNpemU7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYXNHcmlkQ29vcmQgPSAoeCwgeSkgPT4ge1xyXG4gIHJldHVybiBgJHt4ICogY29uc3RhbnRzLmhhbGZTcXVhcmVTaXplfSwke3kgKiBjb25zdGFudHMuaGFsZlNxdWFyZVNpemV9YDtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBuZXh0UG9zaXRpb24gPSAoY3VyWCwgY3VyWSwgZGlyZWN0aW9uKSA9PiB7XHJcbiAgbGV0IHgsIHksIHNpemU7XHJcbiAgeCA9IGN1clg7XHJcbiAgeSA9IGN1clk7XHJcbiAgc2l6ZSA9IDE2O1xyXG4gIGlmIChkaXJlY3Rpb24gPT09IFwibGVmdFwiKSB7XHJcbiAgICB4IC09IHNpemU7XHJcbiAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09IFwicmlnaHRcIikge1xyXG4gICAgeCArPSBzaXplO1xyXG4gIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSBcInVwXCIpIHtcclxuICAgIHkgLT0gc2l6ZTtcclxuICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gXCJkb3duXCIpIHtcclxuICAgIHkgKz0gc2l6ZTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7IHgsIHkgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBlbWl0RXZlbnQgPSAobmFtZSwgZGV0YWlsKSA9PiB7XHJcbiAgLy8gV2UgRmluaXNoZWQgdGhlIHdhbGtcclxuICBjb25zdCBldmVudCA9IG5ldyBDdXN0b21FdmVudChuYW1lLCB7XHJcbiAgICBkZXRhaWwsXHJcbiAgfSk7XHJcblxyXG4gIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IG9wcG9zaXRlRGlyZWN0aW9uID0gKGRpcmVjdGlvbikgPT4ge1xyXG4gIGlmIChkaXJlY3Rpb24gPT09IFwibGVmdFwiKSB7XHJcbiAgICByZXR1cm4gXCJyaWdodFwiO1xyXG4gIH1cclxuICBpZiAoZGlyZWN0aW9uID09PSBcInJpZ2h0XCIpIHtcclxuICAgIHJldHVybiBcImxlZnRcIjtcclxuICB9XHJcbiAgaWYgKGRpcmVjdGlvbiA9PT0gXCJ1cFwiKSB7XHJcbiAgICByZXR1cm4gXCJkb3duXCI7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gXCJ1cFwiO1xyXG59O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBPdmVyV29ybGQgZnJvbSBcIi4vR2FtZS9PdmVyV29ybGRcIjtcclxuXHJcbmNvbnN0IHdvbHJkID0gbmV3IE92ZXJXb3JsZCh7XHJcbiAgZWxlbWVudDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lLWNvbnRhaW5lclwiKSxcclxufSk7XHJcblxyXG53b2xyZC5pbml0KCk7XHJcbiJdLCJuYW1lcyI6WyJQZXJzb24iLCJhc0dyaWRDb29yZCIsIndpdGhHcmlkcyIsIk92ZXJXb3JsZE1hcHNMaXN0IiwiRGVtb1Jvb20iLCJsb3dlclNyYyIsInVwcGVyU3JjIiwiZ2FtZU9iamVjdHMiLCJoZXJvIiwiaXNQbGF5ZXJDb250cm9sbGVkIiwieCIsInkiLCJzcmMiLCJucGMxIiwiYmVoYXZpb3JMb29wIiwidHlwZSIsImRpcmVjdGlvbiIsInRpbWUiLCJ0YWxraW5nIiwiZXZlbnRzIiwidGV4dCIsImZhY2VIZXJvIiwibnBjMiIsIm5wYzQiLCJjdXRzY2VuZVNwYWNlcyIsIm1hcCIsIndhbGxzIiwiTWFwMiIsIm5wYzMiLCJucGM1Iiwic3F1YXJlU2l6ZSIsImhhbGZTcXVhcmVTaXplIiwibW92aW5nUHJvZ3Jlc3MiLCJhbmltYXRpb25GcmFtZUxpbWl0IiwiUGVyc29uV2Fsa2luZ0NvbXBsZXRlIiwiUGVyc29uU3RhbmRDb21wbGV0ZSIsIkRpcmVjdGlvbklucHV0IiwiY29uc3RydWN0b3IiLCJoZWxkRGlyZWN0aW9ucyIsIkFycm93VXAiLCJLZXlXIiwiQXJyb3dEb3duIiwiS2V5UyIsIkFycm93TGVmdCIsIktleUEiLCJBcnJvd1JpZ2h0IiwiS2V5RCIsImluaXQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiZGlyIiwiY29kZSIsImluZGV4T2YiLCJ1bnNoaWZ0IiwiaW5kZXgiLCJzcGxpY2UiLCJPdmVyV29ybGRFdmVudCIsIk92ZXJXb3JsZE1hcCIsIlNwcml0ZSIsIkdhbWVPYmplY3QiLCJjb25maWciLCJpZCIsImlzTW91bnRlZCIsImlzVXNlU2hhZG93IiwidXNlU2hhZG93IiwidW5kZWZpbmVkIiwic3ByaXRlIiwiZ2FtZU9iamVjdCIsInJlbW92ZVNxdWFyZVNpemUiLCJiZWhhdmlvckxvb3BJbmRleCIsIm1vdW50IiwiYWRkV2FsbCIsInNldFRpbWVvdXQiLCJkb0JlaGF2aW9yRXZlbnQiLCJ1cGRhdGUiLCJpc0N1dHNjZW5lUGxheWluZyIsImxlbmd0aCIsImlzU3RhbmRpbmciLCJldmVudCIsIndobyIsImV2ZW50SGFuZGxlciIsIktleVByZXNzTGlzdGVuZXIiLCJrZXlDb2RlIiwiY2FsbGJhY2siLCJrZXlTYWZlIiwia2V5ZG93bkZ1bmN0aW9uIiwia2V5dXBGdW5jdGlvbiIsInVuYmluZCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjb25zdGFudHMiLCJPdmVyV29ybGQiLCJlbGVtZW50IiwiY2FudmFzIiwicXVlcnlTZWxlY3RvciIsImN0eCIsImdldENvbnRleHQiLCJzdGFydEdhbWVMb29wIiwic3RlcCIsImNsZWFyUmVjdCIsIndpZHRoIiwiaGVpZ2h0IiwiY2FtZXJhUGVyc29uIiwiT2JqZWN0IiwidmFsdWVzIiwiZm9yRWFjaCIsIm9iaiIsImFycm93IiwiZGlyZWN0aW9uQ29udHJvbGxlciIsImRyYXdMb3dlckltYWdlIiwic29ydCIsImEiLCJiIiwiZHJhdyIsImRyYXdVcHBlckltYWdlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYmluZEFjdGlvbklucHV0IiwiY2hlY2tGb3JBY3Rpb25DdXRzY2VuZSIsImJpbmRIZXJvUG9zaXRpb25DaGVjayIsImRldGFpbCIsIndob0lkIiwiY2hlY2tGb3JGb290c3RlcEN1dHNjZW5lIiwic3RhcnRNYXAiLCJtYXBDb25maWciLCJvdmVyV29ybGQiLCJtb3VudE9iamVjdHMiLCJzdGFydEN1dFNjZW5lIiwiVGV4dE1lc3NhZ2UiLCJvcHBvc2l0ZURpcmVjdGlvbiIsIlByb21pc2UiLCJyZXNvbHZlIiwic3RhbmQiLCJzdGFydEJlaGF2aW9yIiwiY29tcGxldGVIYW5kbGVyIiwid2FsayIsInJldHJ5IiwidGV4dE1lc3NhZ2UiLCJtZXNzYWdlIiwib25Db21wbGV0ZSIsIm1lc3NhZ2VDb250YWluZXIiLCJjaGFuZ2VNYXAiLCJvcGVuUGhvbmUiLCJwaG9uZSIsImdldEVsZW1lbnRCeUlkIiwiY2FuY2VsIiwibmV4dCIsInN0eWxlIiwiZGlzcGxheSIsImVsIiwib25jbGljayIsIm5leHRQb3NpdGlvbiIsImxvd2VyTGF5ZXIiLCJJbWFnZSIsInVwcGVyTGF5ZXIiLCJkcmF3SW1hZ2UiLCJpc1NwYWNlVGFrZW4iLCJjdXJYIiwiY3VyWSIsImtleXMiLCJrZXkiLCJvYmplY3QiLCJuZXh0Q29vcmQiLCJtYXRjaCIsImZpbmQiLCJpIiwicmVtb3ZlV2FsbCIsIm1vdmVXYWxsIiwid2FzWCIsIndhc1kiLCJlbWl0RXZlbnQiLCJtb3ZpbmdQcm9ncmVzc1JlbWFpbmlnIiwiZGlyZWN0aW9uVXBkYXRlIiwidXAiLCJkb3duIiwibGVmdCIsInJpZ2h0Iiwic3RhdGUiLCJ1cGRhdGVQb3NpdGlvbiIsInVwZGF0ZVNwcmludCIsImJlaGF2aW9yIiwicHJvcGVydHkiLCJjaGFuZ2UiLCJzZXRBbmltYXRpb24iLCJjYXBpdGFsaXplRmlyc3RMZXR0ZXIiLCJzdHJpbmciLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiUmV2ZWFsaW5nVGV4dCIsInNwZWVkIiwidGltZW91dCIsImlzRG9uZSIsImNoYXJhY3RlcnMiLCJzcGxpdCIsImNoYXIiLCJzcGFuIiwiY3JlYXRlRWxlbWVudCIsInRleHRDb250ZW50IiwiYXBwZW5kQ2hpbGQiLCJwdXNoIiwiZGVsYXlBZnRlciIsImltYWdlIiwiaW1hZ2VJc0xvYWRlZCIsInNoYWRvd0ltYWdlIiwic2hhZG93SW1hZ2VMb2FkZWQiLCJhbmltYXRpb25zIiwiaWRsZURvd24iLCJpZGxlUmlnaHQiLCJpZGxlVXAiLCJpZGxlTGVmdCIsIndhbGtEb3duIiwid2Fsa1JpZ2h0Iiwid2Fsa1VwIiwid2Fsa0xlZnQiLCJjdXJyZW50QW5pbWF0aW9uIiwiY3VycmVudEFuaW1hdGlvbkZyYW1lIiwiYW5pbWF0aW9uRnJhbWVQcm9ncmVzcyIsImZyYW1lIiwidXBkYXRlQW5pbWF0aW9uUHJvZ3Jlc3MiLCJmcmFtZVgiLCJmcmFtZVkiLCJjbGFzc0xpc3QiLCJhZGQiLCJpbm5lckhUTUwiLCJkb25lIiwicmV2ZWFsaW5nVGV4dCIsImFjdGlvbkxpc3RlbmVyIiwiYWN0aW9uU3BhY2VMaXN0ZW5lciIsInJlbW92ZSIsImNvbnRhaW5lciIsImNiIiwiaW1nIiwib25sb2FkIiwibiIsInNpemUiLCJuYW1lIiwiQ3VzdG9tRXZlbnQiLCJkaXNwYXRjaEV2ZW50Iiwid29scmQiXSwic291cmNlUm9vdCI6IiJ9