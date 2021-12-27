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
    lowerSrc: "/public/images/maps/DemoLower.png",
    upperSrc: "/public/images/maps/DemoUpper.png",
    gameObjects: {
      hero: new _Game_Person__WEBPACK_IMPORTED_MODULE_0__["default"]({
        isPlayerControlled: true,
        x: (0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.withGrids)(2),
        y: (0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.withGrids)(4),
        src: "/public/images/characters/people/hero.png"
      }),
      npc1: new _Game_Person__WEBPACK_IMPORTED_MODULE_0__["default"]({
        x: (0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.withGrids)(7),
        y: (0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.withGrids)(9),
        src: "/public/images/characters/people/npc1.png ",
        behaviorLoop: [{
          type: "stand",
          direction: "left",
          time: 1500
        }, {
          type: "stand",
          direction: "up",
          time: 1500
        }, {
          type: "stand",
          direction: "right",
          time: 1200
        }, {
          type: "stand",
          direction: "up",
          time: 300
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
        x: (0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.withGrids)(8),
        y: (0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.withGrids)(5),
        src: "/public/images/characters/people/npc2.png ",
        // behaviorLoop: [
        //   { type: "walk", direction: "left" },
        //   { type: "stand", direction: "up", time: 800 },
        //   { type: "walk", direction: "up" },
        //   { type: "walk", direction: "right" },
        //   { type: "walk", direction: "down" },
        // ],
        talking: []
      })
    },
    walls: {
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(7, 6)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(8, 6)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(7, 7)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(8, 7)]: true
    },
    cutsceneSpaces: {
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(7, 4)]: [{
        events: [{
          who: "npc2",
          type: "walk",
          direction: "left"
        }, {
          who: "npc2",
          type: "stand",
          direction: "up",
          time: 500
        }, {
          type: "textMessage",
          text: "You can't be in there!"
        }, {
          who: "npc2",
          type: "walk",
          direction: "right"
        }, {
          who: "npc2",
          type: "stand",
          direction: "down"
        }, {
          who: "hero",
          type: "walk",
          direction: "down"
        }, {
          who: "hero",
          type: "walk",
          direction: "left"
        }]
      }],
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.asGridCoord)(5, 10)]: [{
        events: [{
          type: "changeMap",
          map: "Kitchen"
        }]
      }]
    }
  },
  Kitchen: {
    lowerSrc: "/public/images/maps/KitchenLower.png",
    upperSrc: "/public/images/maps/KitchenUpper.png",
    gameObjects: {
      hero: new _Game_Person__WEBPACK_IMPORTED_MODULE_0__["default"]({
        isPlayerControlled: true,
        x: (0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.withGrids)(3),
        y: (0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.withGrids)(5)
      }),
      npc3: new _Game_Person__WEBPACK_IMPORTED_MODULE_0__["default"]({
        x: (0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.withGrids)(10),
        y: (0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.withGrids)(8),
        src: "/public/images/characters/people/npc3.png ",
        talking: [{
          events: [{
            type: "textMessage",
            text: "You Made it!!",
            faceHero: "npc3"
          }]
        }]
      })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cnBnLWdhbWUvLi9zcmMvRGF0YS9BbGxNYXBMaXN0LmpzIiwid2VicGFjazovL3JwZy1nYW1lLy4vc3JjL0RhdGEvY29uc3RhbnRzLmpzIiwid2VicGFjazovL3JwZy1nYW1lLy4vc3JjL0dhbWUvRGlyZWN0aW9uSW5wdXQuanMiLCJ3ZWJwYWNrOi8vcnBnLWdhbWUvLi9zcmMvR2FtZS9HYW1lT2JqZWN0LmpzIiwid2VicGFjazovL3JwZy1nYW1lLy4vc3JjL0dhbWUvS2V5UHJlc3NMaXN0ZW5lci5qcyIsIndlYnBhY2s6Ly9ycGctZ2FtZS8uL3NyYy9HYW1lL092ZXJXb3JsZC5qcyIsIndlYnBhY2s6Ly9ycGctZ2FtZS8uL3NyYy9HYW1lL092ZXJXb3JsZEV2ZW50LmpzIiwid2VicGFjazovL3JwZy1nYW1lLy4vc3JjL0dhbWUvT3ZlcldvcmxkTWFwLmpzIiwid2VicGFjazovL3JwZy1nYW1lLy4vc3JjL0dhbWUvUGVyc29uLmpzIiwid2VicGFjazovL3JwZy1nYW1lLy4vc3JjL0dhbWUvUmV2ZWFsaW5nVGV4dC5qcyIsIndlYnBhY2s6Ly9ycGctZ2FtZS8uL3NyYy9HYW1lL1Nwcml0ZS5qcyIsIndlYnBhY2s6Ly9ycGctZ2FtZS8uL3NyYy9HYW1lL1RleHRNZXNzYWdlLmpzIiwid2VicGFjazovL3JwZy1nYW1lLy4vc3JjL3V0aWxzL2hlbHBlci5qcyIsIndlYnBhY2s6Ly9ycGctZ2FtZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9ycGctZ2FtZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcnBnLWdhbWUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9ycGctZ2FtZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3JwZy1nYW1lLy4vc3JjL2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGVyc29uIGZyb20gXCIuLi9HYW1lL1BlcnNvblwiO1xyXG5pbXBvcnQgeyBhc0dyaWRDb29yZCwgd2l0aEdyaWRzIH0gZnJvbSBcIi4uL3V0aWxzL2hlbHBlclwiO1xyXG4vKipcclxuICogQHR5cGVkZWYge09iamVjdH0gUm9vbU9ialxyXG4gKiBAcHJvcGVydHkge1N0cmluZ30gbG93ZXJTcmMgLVxyXG4gKiBAcHJvcGVydHkge1N0cmluZ30gdXBwZXJTcmMgLVxyXG4gKiBAcHJvcGVydHkge09iamVjdH0gZ2FtZU9iamVjdHMgLVxyXG4gKi9cclxuXHJcbmV4cG9ydCBjb25zdCBPdmVyV29ybGRNYXBzTGlzdCA9IHtcclxuICAvKipcclxuICAgKiBAdHlwZSB7Um9vbU9ian1cclxuICAgKi9cclxuICBEZW1vUm9vbToge1xyXG4gICAgbG93ZXJTcmM6IFwiL3B1YmxpYy9pbWFnZXMvbWFwcy9EZW1vTG93ZXIucG5nXCIsXHJcbiAgICB1cHBlclNyYzogXCIvcHVibGljL2ltYWdlcy9tYXBzL0RlbW9VcHBlci5wbmdcIixcclxuICAgIGdhbWVPYmplY3RzOiB7XHJcbiAgICAgIGhlcm86IG5ldyBQZXJzb24oe1xyXG4gICAgICAgIGlzUGxheWVyQ29udHJvbGxlZDogdHJ1ZSxcclxuICAgICAgICB4OiB3aXRoR3JpZHMoMiksXHJcbiAgICAgICAgeTogd2l0aEdyaWRzKDQpLFxyXG4gICAgICAgIHNyYzogXCIvcHVibGljL2ltYWdlcy9jaGFyYWN0ZXJzL3Blb3BsZS9oZXJvLnBuZ1wiLFxyXG4gICAgICB9KSxcclxuICAgICAgbnBjMTogbmV3IFBlcnNvbih7XHJcbiAgICAgICAgeDogd2l0aEdyaWRzKDcpLFxyXG4gICAgICAgIHk6IHdpdGhHcmlkcyg5KSxcclxuICAgICAgICBzcmM6IFwiL3B1YmxpYy9pbWFnZXMvY2hhcmFjdGVycy9wZW9wbGUvbnBjMS5wbmcgXCIsXHJcbiAgICAgICAgYmVoYXZpb3JMb29wOiBbXHJcbiAgICAgICAgICB7IHR5cGU6IFwic3RhbmRcIiwgZGlyZWN0aW9uOiBcImxlZnRcIiwgdGltZTogMTUwMCB9LFxyXG4gICAgICAgICAgeyB0eXBlOiBcInN0YW5kXCIsIGRpcmVjdGlvbjogXCJ1cFwiLCB0aW1lOiAxNTAwIH0sXHJcbiAgICAgICAgICB7IHR5cGU6IFwic3RhbmRcIiwgZGlyZWN0aW9uOiBcInJpZ2h0XCIsIHRpbWU6IDEyMDAgfSxcclxuICAgICAgICAgIHsgdHlwZTogXCJzdGFuZFwiLCBkaXJlY3Rpb246IFwidXBcIiwgdGltZTogMzAwIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICB0YWxraW5nOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGV2ZW50czogW1xyXG4gICAgICAgICAgICAgIHsgdHlwZTogXCJ0ZXh0TWVzc2FnZVwiLCB0ZXh0OiBcIkknbSBCdXN5XCIsIGZhY2VIZXJvOiBcIm5wYzFcIiB9LFxyXG4gICAgICAgICAgICAgIHsgdHlwZTogXCJ0ZXh0TWVzc2FnZVwiLCB0ZXh0OiBcIkdvIGF3YXkhXCIgfSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfSksXHJcbiAgICAgIG5wYzI6IG5ldyBQZXJzb24oe1xyXG4gICAgICAgIHg6IHdpdGhHcmlkcyg4KSxcclxuICAgICAgICB5OiB3aXRoR3JpZHMoNSksXHJcbiAgICAgICAgc3JjOiBcIi9wdWJsaWMvaW1hZ2VzL2NoYXJhY3RlcnMvcGVvcGxlL25wYzIucG5nIFwiLFxyXG4gICAgICAgIC8vIGJlaGF2aW9yTG9vcDogW1xyXG4gICAgICAgIC8vICAgeyB0eXBlOiBcIndhbGtcIiwgZGlyZWN0aW9uOiBcImxlZnRcIiB9LFxyXG4gICAgICAgIC8vICAgeyB0eXBlOiBcInN0YW5kXCIsIGRpcmVjdGlvbjogXCJ1cFwiLCB0aW1lOiA4MDAgfSxcclxuICAgICAgICAvLyAgIHsgdHlwZTogXCJ3YWxrXCIsIGRpcmVjdGlvbjogXCJ1cFwiIH0sXHJcbiAgICAgICAgLy8gICB7IHR5cGU6IFwid2Fsa1wiLCBkaXJlY3Rpb246IFwicmlnaHRcIiB9LFxyXG4gICAgICAgIC8vICAgeyB0eXBlOiBcIndhbGtcIiwgZGlyZWN0aW9uOiBcImRvd25cIiB9LFxyXG4gICAgICAgIC8vIF0sXHJcbiAgICAgICAgdGFsa2luZzogW10sXHJcbiAgICAgIH0pLFxyXG4gICAgfSxcclxuICAgIHdhbGxzOiB7XHJcbiAgICAgIFthc0dyaWRDb29yZCg3LCA2KV06IHRydWUsXHJcbiAgICAgIFthc0dyaWRDb29yZCg4LCA2KV06IHRydWUsXHJcbiAgICAgIFthc0dyaWRDb29yZCg3LCA3KV06IHRydWUsXHJcbiAgICAgIFthc0dyaWRDb29yZCg4LCA3KV06IHRydWUsXHJcbiAgICB9LFxyXG4gICAgY3V0c2NlbmVTcGFjZXM6IHtcclxuICAgICAgW2FzR3JpZENvb3JkKDcsIDQpXTogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGV2ZW50czogW1xyXG4gICAgICAgICAgICB7IHdobzogXCJucGMyXCIsIHR5cGU6IFwid2Fsa1wiLCBkaXJlY3Rpb246IFwibGVmdFwiIH0sXHJcbiAgICAgICAgICAgIHsgd2hvOiBcIm5wYzJcIiwgdHlwZTogXCJzdGFuZFwiLCBkaXJlY3Rpb246IFwidXBcIiwgdGltZTogNTAwIH0sXHJcbiAgICAgICAgICAgIHsgdHlwZTogXCJ0ZXh0TWVzc2FnZVwiLCB0ZXh0OiBcIllvdSBjYW4ndCBiZSBpbiB0aGVyZSFcIiB9LFxyXG4gICAgICAgICAgICB7IHdobzogXCJucGMyXCIsIHR5cGU6IFwid2Fsa1wiLCBkaXJlY3Rpb246IFwicmlnaHRcIiB9LFxyXG4gICAgICAgICAgICB7IHdobzogXCJucGMyXCIsIHR5cGU6IFwic3RhbmRcIiwgZGlyZWN0aW9uOiBcImRvd25cIiB9LFxyXG4gICAgICAgICAgICB7IHdobzogXCJoZXJvXCIsIHR5cGU6IFwid2Fsa1wiLCBkaXJlY3Rpb246IFwiZG93blwiIH0sXHJcbiAgICAgICAgICAgIHsgd2hvOiBcImhlcm9cIiwgdHlwZTogXCJ3YWxrXCIsIGRpcmVjdGlvbjogXCJsZWZ0XCIgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgICAgW2FzR3JpZENvb3JkKDUsIDEwKV06IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBldmVudHM6IFt7IHR5cGU6IFwiY2hhbmdlTWFwXCIsIG1hcDogXCJLaXRjaGVuXCIgfV0sXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbiAgS2l0Y2hlbjoge1xyXG4gICAgbG93ZXJTcmM6IFwiL3B1YmxpYy9pbWFnZXMvbWFwcy9LaXRjaGVuTG93ZXIucG5nXCIsXHJcbiAgICB1cHBlclNyYzogXCIvcHVibGljL2ltYWdlcy9tYXBzL0tpdGNoZW5VcHBlci5wbmdcIixcclxuICAgIGdhbWVPYmplY3RzOiB7XHJcbiAgICAgIGhlcm86IG5ldyBQZXJzb24oe1xyXG4gICAgICAgIGlzUGxheWVyQ29udHJvbGxlZDogdHJ1ZSxcclxuICAgICAgICB4OiB3aXRoR3JpZHMoMyksXHJcbiAgICAgICAgeTogd2l0aEdyaWRzKDUpLFxyXG4gICAgICB9KSxcclxuICAgICAgbnBjMzogbmV3IFBlcnNvbih7XHJcbiAgICAgICAgeDogd2l0aEdyaWRzKDEwKSxcclxuICAgICAgICB5OiB3aXRoR3JpZHMoOCksXHJcbiAgICAgICAgc3JjOiBcIi9wdWJsaWMvaW1hZ2VzL2NoYXJhY3RlcnMvcGVvcGxlL25wYzMucG5nIFwiLFxyXG4gICAgICAgIHRhbGtpbmc6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgZXZlbnRzOiBbXHJcbiAgICAgICAgICAgICAgeyB0eXBlOiBcInRleHRNZXNzYWdlXCIsIHRleHQ6IFwiWW91IE1hZGUgaXQhIVwiLCBmYWNlSGVybzogXCJucGMzXCIgfSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfSksXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbiIsImV4cG9ydCBkZWZhdWx0IHtcclxuICBzcXVhcmVTaXplOiAzMixcclxuICBoYWxmU3F1YXJlU2l6ZTogMTYsXHJcbiAgbW92aW5nUHJvZ3Jlc3M6IDE2LFxyXG4gIGFuaW1hdGlvbkZyYW1lTGltaXQ6IDgsXHJcblxyXG4gIGV2ZW50czoge1xyXG4gICAgUGVyc29uV2Fsa2luZ0NvbXBsZXRlOiBcIlBlcnNvbldhbGtpbmdDb21wbGV0ZVwiLFxyXG4gICAgUGVyc29uU3RhbmRDb21wbGV0ZTogXCJQZXJzb25TdGFuZENvbXBsZXRlXCIsXHJcbiAgfSxcclxufTtcclxuIiwiY2xhc3MgRGlyZWN0aW9uSW5wdXQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5oZWxkRGlyZWN0aW9ucyA9IFtdO1xyXG4gICAgdGhpcy5tYXAgPSB7XHJcbiAgICAgIEFycm93VXA6IFwidXBcIixcclxuICAgICAgS2V5VzogXCJ1cFwiLFxyXG4gICAgICBBcnJvd0Rvd246IFwiZG93blwiLFxyXG4gICAgICBLZXlTOiBcImRvd25cIixcclxuICAgICAgQXJyb3dMZWZ0OiBcImxlZnRcIixcclxuICAgICAgS2V5QTogXCJsZWZ0XCIsXHJcbiAgICAgIEFycm93UmlnaHQ6IFwicmlnaHRcIixcclxuICAgICAgS2V5RDogXCJyaWdodFwiLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xyXG4gICAgICBjb25zdCBkaXIgPSB0aGlzLm1hcFtlLmNvZGVdO1xyXG5cclxuICAgICAgaWYgKGRpciAmJiB0aGlzLmhlbGREaXJlY3Rpb25zLmluZGV4T2YoZGlyKSA9PT0gLTEpIHtcclxuICAgICAgICB0aGlzLmhlbGREaXJlY3Rpb25zLnVuc2hpZnQoZGlyKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmhlbGREaXJlY3Rpb25zKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIChlKSA9PiB7XHJcbiAgICAgIGNvbnN0IGRpciA9IHRoaXMubWFwW2UuY29kZV07XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5oZWxkRGlyZWN0aW9ucy5pbmRleE9mKGRpcik7XHJcbiAgICAgIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgICAgdGhpcy5oZWxkRGlyZWN0aW9ucy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEByZXR1cm4ge0FycmF5PCdsZWZ0JyB8ICdyaWdodCcgfCAndXAnIHwgJ2Rvd24nID59XHJcbiAgICovXHJcbiAgZ2V0IGRpcmVjdGlvbigpIHtcclxuICAgIHJldHVybiB0aGlzLmhlbGREaXJlY3Rpb25zWzBdO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGlyZWN0aW9uSW5wdXQ7XHJcbiIsImltcG9ydCBPdmVyV29ybGRFdmVudCBmcm9tIFwiLi9PdmVyV29ybGRFdmVudFwiO1xyXG5pbXBvcnQgT3ZlcldvcmxkTWFwIGZyb20gXCIuL092ZXJXb3JsZE1hcFwiO1xyXG5pbXBvcnQgU3ByaXRlIGZyb20gXCIuL1Nwcml0ZVwiO1xyXG5cclxuY2xhc3MgR2FtZU9iamVjdCB7XHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBjb25maWcueFxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBjb25maWcueVxyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBjb25maWcuc3JjXHJcbiAgICogQHBhcmFtIHsnZG93bicgfCAndXAnIHwgJ2xlZnQnIHwgJ3JpZ2h0JyB8IG51bGx9IGNvbmZpZy5kaXJlY3Rpb25cclxuICAgKiBAcGFyYW0ge0Jvb2xlYW4gfCBudWxsfSBjb25maWcudXNlU2hhZG93XHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGNvbmZpZy5zcXVhcmVTaXplXHJcbiAgICogQHBhcmFtIHt7eDogTnVtYmVyLCB5OiBOdW1iZXJ9IHwgbnVsbH0gY29uZmlnLnJlbW92ZVNxdWFyZVNpemVcclxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IGNvbmZpZy5pc1BsYXllckNvbnRyb2xsZWRcclxuICAgKiBAcGFyYW0ge2FueVtdfSBjb25maWcuYmVoYXZpb3JMb29wXHJcbiAgICogQHBhcmFtIHtBcnJheTx7ZXZlbnRzOiAqW119Pn0gY29uZmlnLnRhbGtpbmdcclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcclxuICAgIHRoaXMuaWQgPSBjb25maWcuaWQgPyBjb25maWcuaWQgOiBudWxsO1xyXG4gICAgdGhpcy5pc01vdW50ZWQgPSBmYWxzZTtcclxuICAgIGNvbnN0IGlzVXNlU2hhZG93ID1cclxuICAgICAgY29uZmlnLnVzZVNoYWRvdyAhPT0gbnVsbCAmJiBjb25maWcudXNlU2hhZG93ICE9PSB1bmRlZmluZWRcclxuICAgICAgICA/IGNvbmZpZy51c2VTaGFkb3dcclxuICAgICAgICA6IHRydWU7XHJcbiAgICB0aGlzLnggPSBjb25maWcueCB8fCAwO1xyXG4gICAgdGhpcy55ID0gY29uZmlnLnkgfHwgMDtcclxuICAgIHRoaXMuZGlyZWN0aW9uID0gY29uZmlnLmRpcmVjdGlvbiB8fCBcImRvd25cIjtcclxuICAgIHRoaXMuc3ByaXRlID0gbmV3IFNwcml0ZSh7XHJcbiAgICAgIGdhbWVPYmplY3Q6IHRoaXMsXHJcbiAgICAgIHNyYzogY29uZmlnLnNyYyxcclxuICAgICAgdXNlU2hhZG93OiBpc1VzZVNoYWRvdyxcclxuICAgICAgc3F1YXJlU2l6ZTogY29uZmlnLnNxdWFyZVNpemUgPyBjb25maWcuc3F1YXJlU2l6ZSA6IDMyLFxyXG4gICAgICByZW1vdmVTcXVhcmVTaXplOiBjb25maWcucmVtb3ZlU3F1YXJlU2l6ZVxyXG4gICAgICAgID8gY29uZmlnLnJlbW92ZVNxdWFyZVNpemVcclxuICAgICAgICA6IHsgeDogOCwgeTogMTggfSxcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuYmVoYXZpb3JMb29wID0gY29uZmlnLmJlaGF2aW9yTG9vcCA/IGNvbmZpZy5iZWhhdmlvckxvb3AgOiBbXTtcclxuICAgIHRoaXMuYmVoYXZpb3JMb29wSW5kZXggPSAwO1xyXG5cclxuICAgIHRoaXMudGFsa2luZyA9IGNvbmZpZy50YWxraW5nIHx8IFtdO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtPdmVyV29ybGRNYXB9IG1hcFxyXG4gICAqL1xyXG4gIG1vdW50KG1hcCkge1xyXG4gICAgdGhpcy5pc01vdW50ZWQgPSB0cnVlO1xyXG4gICAgbWFwLmFkZFdhbGwodGhpcy54LCB0aGlzLnkpO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLmRvQmVoYXZpb3JFdmVudChtYXApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUoKSB7fVxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0ge092ZXJXb3JsZE1hcH0gbWFwXHJcbiAgICovXHJcbiAgYXN5bmMgZG9CZWhhdmlvckV2ZW50KG1hcCkge1xyXG4gICAgaWYgKFxyXG4gICAgICBtYXAuaXNDdXRzY2VuZVBsYXlpbmcgfHxcclxuICAgICAgdGhpcy5iZWhhdmlvckxvb3AubGVuZ3RoID09PSAwIHx8XHJcbiAgICAgIHRoaXMuaXNTdGFuZGluZ1xyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGxldCBldmVudCA9IHRoaXMuYmVoYXZpb3JMb29wW3RoaXMuYmVoYXZpb3JMb29wSW5kZXhdO1xyXG4gICAgZXZlbnQud2hvID0gdGhpcy5pZDtcclxuICAgIGNvbnN0IGV2ZW50SGFuZGxlciA9IG5ldyBPdmVyV29ybGRFdmVudCh7IG1hcDogbWFwLCBldmVudDogZXZlbnQgfSk7XHJcbiAgICBhd2FpdCBldmVudEhhbmRsZXIuaW5pdCgpO1xyXG4gICAgdGhpcy5iZWhhdmlvckxvb3BJbmRleCArPSAxO1xyXG4gICAgaWYgKHRoaXMuYmVoYXZpb3JMb29wSW5kZXggPT09IHRoaXMuYmVoYXZpb3JMb29wLmxlbmd0aCkge1xyXG4gICAgICB0aGlzLmJlaGF2aW9yTG9vcEluZGV4ID0gMDtcclxuICAgIH1cclxuICAgIHRoaXMuZG9CZWhhdmlvckV2ZW50KG1hcCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHYW1lT2JqZWN0O1xyXG4iLCJjbGFzcyBLZXlQcmVzc0xpc3RlbmVyIHtcclxuICAvKipcclxuICAgKiBAcGFyYW0ge1N0cmluZ30ga2V5Q29kZVxyXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Ioa2V5Q29kZSwgY2FsbGJhY2spIHtcclxuICAgIGxldCBrZXlTYWZlID0gdHJ1ZTtcclxuICAgIHRoaXMua2V5ZG93bkZ1bmN0aW9uID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgIGlmIChldmVudC5jb2RlID09PSBrZXlDb2RlKSB7XHJcbiAgICAgICAgaWYgKGtleVNhZmUpIHtcclxuICAgICAgICAgIGtleVNhZmUgPSBmYWxzZTtcclxuICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMua2V5dXBGdW5jdGlvbiA9IChldmVudCkgPT4ge1xyXG4gICAgICBpZiAoZXZlbnQuY29kZSA9PT0ga2V5Q29kZSkge1xyXG4gICAgICAgIGtleVNhZmUgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMua2V5ZG93bkZ1bmN0aW9uKTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCB0aGlzLmtleXVwRnVuY3Rpb24pO1xyXG4gIH1cclxuXHJcbiAgdW5iaW5kKCkge1xyXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5rZXlkb3duRnVuY3Rpb24pO1xyXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIHRoaXMua2V5dXBGdW5jdGlvbik7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBLZXlQcmVzc0xpc3RlbmVyO1xyXG4iLCJpbXBvcnQgeyBPdmVyV29ybGRNYXBzTGlzdCB9IGZyb20gXCIuLi9EYXRhL0FsbE1hcExpc3RcIjtcclxuaW1wb3J0IEdhbWVPYmplY3QgZnJvbSBcIi4vR2FtZU9iamVjdFwiO1xyXG5pbXBvcnQgUGVyc29uIGZyb20gXCIuL1BlcnNvblwiO1xyXG5pbXBvcnQgT3ZlcldvcmxkTWFwIGZyb20gXCIuL092ZXJXb3JsZE1hcFwiO1xyXG5pbXBvcnQgRGlyZWN0aW9uSW5wdXQgZnJvbSBcIi4vRGlyZWN0aW9uSW5wdXRcIjtcclxuaW1wb3J0IEtleVByZXNzTGlzdGVuZXIgZnJvbSBcIi4vS2V5UHJlc3NMaXN0ZW5lclwiO1xyXG5pbXBvcnQgY29uc3RhbnRzIGZyb20gXCIuLi9EYXRhL2NvbnN0YW50c1wiO1xyXG5cclxuY2xhc3MgT3ZlcldvcmxkIHtcclxuICAvKipcclxuICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXHJcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gY29uZmlnLmVsZW1lbnRcclxuICAgKiBAcGFyYW0geydoZWhlJ3wnaGFoYSd9IGNvbmZpZy50ZXN0XHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XHJcbiAgICBjb25zdCB7IGVsZW1lbnQgfSA9IGNvbmZpZztcclxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAdHlwZSB7SFRNTENhbnZhc0VsZW1lbnR9XHJcbiAgICAgKi9cclxuICAgIHRoaXMuY2FudmFzID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZS1jYW52YXNcIik7IC8vSFRNTENhbnZhc0VsZW1lbnRcclxuXHJcbiAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEB0eXBlIHtPdmVyV29ybGRNYXAgfCBudWxsfVxyXG4gICAgICovXHJcbiAgICB0aGlzLm1hcCA9IG51bGw7XHJcbiAgfVxyXG5cclxuICBzdGFydEdhbWVMb29wKCkge1xyXG4gICAgY29uc3Qgc3RlcCA9ICgpID0+IHtcclxuICAgICAgLy8gQ2xlYXIgT2YgVGhlIENhbnZhc1xyXG4gICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XHJcblxyXG4gICAgICAvLyBDYW1lcmFcclxuICAgICAgY29uc3QgY2FtZXJhUGVyc29uID0gdGhpcy5tYXAuZ2FtZU9iamVjdHMuaGVybztcclxuXHJcbiAgICAgIC8vIFVwZGF0ZSBBbGwgT2JqZWN0c1xyXG4gICAgICBPYmplY3QudmFsdWVzKHRoaXMubWFwLmdhbWVPYmplY3RzKS5mb3JFYWNoKFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBwYXJhbSB7R2FtZU9iamVjdCB8IFBlcnNvbn0gb2JqXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgKG9iaikgPT4ge1xyXG4gICAgICAgICAgb2JqLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgIGFycm93OiB0aGlzLmRpcmVjdGlvbkNvbnRyb2xsZXIuZGlyZWN0aW9uLFxyXG4gICAgICAgICAgICBtYXA6IHRoaXMubWFwLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG5cclxuICAgICAgLy8gRHJhdyB0aGUgTG93ZXIgTGF5ZXJcclxuICAgICAgdGhpcy5tYXAuZHJhd0xvd2VySW1hZ2UodGhpcy5jdHgsIGNhbWVyYVBlcnNvbik7XHJcblxyXG4gICAgICAvLyBNYWtlIFBlcnNvbiBhbmQgTWlkZGxlIExheWVyXHJcbiAgICAgIE9iamVjdC52YWx1ZXModGhpcy5tYXAuZ2FtZU9iamVjdHMpXHJcbiAgICAgICAgLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgIHJldHVybiBhLnkgLSBiLnk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuZm9yRWFjaChcclxuICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICogQHBhcmFtIHtHYW1lT2JqZWN0IHwgUGVyc29ufSBvYmpcclxuICAgICAgICAgICAqL1xyXG4gICAgICAgICAgKG9iaikgPT4ge1xyXG4gICAgICAgICAgICBvYmouc3ByaXRlLmRyYXcodGhpcy5jdHgsIGNhbWVyYVBlcnNvbik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgIHRoaXMubWFwLmRyYXdVcHBlckltYWdlKHRoaXMuY3R4LCBjYW1lcmFQZXJzb24pO1xyXG5cclxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcclxuICAgICAgICBzdGVwKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBzdGVwKCk7XHJcbiAgfVxyXG5cclxuICBiaW5kQWN0aW9uSW5wdXQoKSB7XHJcbiAgICBuZXcgS2V5UHJlc3NMaXN0ZW5lcihcIkVudGVyXCIsICgpID0+IHtcclxuICAgICAgdGhpcy5tYXAuY2hlY2tGb3JBY3Rpb25DdXRzY2VuZSgpO1xyXG4gICAgfSk7XHJcbiAgICBuZXcgS2V5UHJlc3NMaXN0ZW5lcihcIlNwYWNlXCIsICgpID0+IHtcclxuICAgICAgdGhpcy5tYXAuY2hlY2tGb3JBY3Rpb25DdXRzY2VuZSgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBiaW5kSGVyb1Bvc2l0aW9uQ2hlY2soKSB7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKGNvbnN0YW50cy5ldmVudHMuUGVyc29uV2Fsa2luZ0NvbXBsZXRlLCAoZSkgPT4ge1xyXG4gICAgICBpZiAoZS5kZXRhaWwud2hvSWQgPT09IFwiaGVyb1wiKSB7XHJcbiAgICAgICAgdGhpcy5tYXAuY2hlY2tGb3JGb290c3RlcEN1dHNjZW5lKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc3RhcnRNYXAobWFwQ29uZmlnKSB7XHJcbiAgICB0aGlzLm1hcCA9IG5ldyBPdmVyV29ybGRNYXAobWFwQ29uZmlnKTtcclxuICAgIHRoaXMubWFwLm92ZXJXb3JsZCA9IHRoaXM7XHJcbiAgICB0aGlzLm1hcC5tb3VudE9iamVjdHMoKTtcclxuICB9XHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICB0aGlzLnN0YXJ0TWFwKE92ZXJXb3JsZE1hcHNMaXN0LkRlbW9Sb29tKTtcclxuICAgIHRoaXMuYmluZEFjdGlvbklucHV0KCk7XHJcbiAgICB0aGlzLmJpbmRIZXJvUG9zaXRpb25DaGVjaygpO1xyXG5cclxuICAgIHRoaXMuZGlyZWN0aW9uQ29udHJvbGxlciA9IG5ldyBEaXJlY3Rpb25JbnB1dCgpO1xyXG4gICAgdGhpcy5kaXJlY3Rpb25Db250cm9sbGVyLmluaXQoKTtcclxuXHJcbiAgICAvLyBTdGFydCBHYW1lIExvb3BcclxuICAgIHRoaXMuc3RhcnRHYW1lTG9vcCgpO1xyXG5cclxuICAgIC8vIGlmIEN1dHNjZW5lXHJcbiAgICB0aGlzLm1hcC5zdGFydEN1dFNjZW5lKFtcclxuICAgICAgeyB0eXBlOiBcInRleHRNZXNzYWdlXCIsIHRleHQ6IFwiSGVsbG8gRmludGVjaCBHYW1lIVwiIH0sXHJcbiAgICBdKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE92ZXJXb3JsZDtcclxuIiwiaW1wb3J0IE92ZXJXb3JsZE1hcCBmcm9tIFwiLi9PdmVyV29ybGRNYXBcIjtcclxuaW1wb3J0IGNvbnN0YW50cyBmcm9tIFwiLi4vRGF0YS9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgT3ZlcldvcmxkTWFwc0xpc3QgfSBmcm9tIFwiLi4vRGF0YS9BbGxNYXBMaXN0XCI7XHJcbmltcG9ydCBUZXh0TWVzc2FnZSBmcm9tIFwiLi9UZXh0TWVzc2FnZVwiO1xyXG5pbXBvcnQgeyBvcHBvc2l0ZURpcmVjdGlvbiB9IGZyb20gXCIuLi91dGlscy9oZWxwZXJcIjtcclxuXHJcbmNsYXNzIE92ZXJXb3JsZEV2ZW50IHtcclxuICAvKipcclxuICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXHJcbiAgICogQHBhcmFtIHtPdmVyV29ybGRNYXB9IGNvbmZpZy5tYXBcclxuICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnLmV2ZW50XHJcbiAgICogQHBhcmFtIHsnd2FsaycgfCAnc3RhbmQnIH0gY29uZmlnLmV2ZW50LnR5cGVcclxuICAgKiBAcGFyYW0ge1N0cmluZ30gY29uZmlnLmV2ZW50Lndob1xyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBjb25maWcuZXZlbnQudGltZVxyXG4gICAqIEBwYXJhbSB7J3VwJyB8ICdkb3duJyB8ICdsZWZ0JyB8ICdyaWdodCcgfSBjb25maWcuZXZlbnQuZGlyZWN0aW9uXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IGNvbmZpZy5ldmVudC50ZXh0XHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IGNvbmZpZy5ldmVudC5mYWNlSGVyb1xyXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNvbmZpZy5ldmVudC5vbkNvbXBsZXRlXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XHJcbiAgICBjb25zdCB7IG1hcCwgZXZlbnQgfSA9IGNvbmZpZztcclxuICAgIHRoaXMubWFwID0gbWFwO1xyXG4gICAgdGhpcy5ldmVudCA9IGV2ZW50O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxBbnk+fVxyXG4gICAqL1xyXG4gIGluaXQoKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgdGhpc1t0aGlzLmV2ZW50LnR5cGVdKHJlc29sdmUpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzdGFuZChyZXNvbHZlKSB7XHJcbiAgICBjb25zdCB3aG8gPSB0aGlzLm1hcC5nYW1lT2JqZWN0c1t0aGlzLmV2ZW50Lndob107XHJcbiAgICB3aG8uc3RhcnRCZWhhdmlvcihcclxuICAgICAge1xyXG4gICAgICAgIG1hcDogdGhpcy5tYXAsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0eXBlOiBcInN0YW5kXCIsXHJcbiAgICAgICAgZGlyZWN0aW9uOiB0aGlzLmV2ZW50LmRpcmVjdGlvbixcclxuICAgICAgICB0aW1lOiB0aGlzLmV2ZW50LnRpbWUsXHJcbiAgICAgIH1cclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgY29tcGxldGVIYW5kbGVyID0gKGUpID0+IHtcclxuICAgICAgaWYgKGUuZGV0YWlsLndob0lkID09PSB0aGlzLmV2ZW50Lndobykge1xyXG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgICBjb25zdGFudHMuZXZlbnRzLlBlcnNvblN0YW5kQ29tcGxldGUsXHJcbiAgICAgICAgICBjb21wbGV0ZUhhbmRsZXJcclxuICAgICAgICApO1xyXG4gICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICBjb25zdGFudHMuZXZlbnRzLlBlcnNvblN0YW5kQ29tcGxldGUsXHJcbiAgICAgIGNvbXBsZXRlSGFuZGxlclxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHdhbGsocmVzb2x2ZSkge1xyXG4gICAgY29uc3Qgd2hvID0gdGhpcy5tYXAuZ2FtZU9iamVjdHNbdGhpcy5ldmVudC53aG9dO1xyXG4gICAgd2hvLnN0YXJ0QmVoYXZpb3IoXHJcbiAgICAgIHtcclxuICAgICAgICBtYXA6IHRoaXMubWFwLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdHlwZTogXCJ3YWxrXCIsXHJcbiAgICAgICAgZGlyZWN0aW9uOiB0aGlzLmV2ZW50LmRpcmVjdGlvbixcclxuICAgICAgICByZXRyeTogdHJ1ZSxcclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBjb21wbGV0ZUhhbmRsZXIgPSAoZSkgPT4ge1xyXG4gICAgICBpZiAoZS5kZXRhaWwud2hvSWQgPT09IHRoaXMuZXZlbnQud2hvKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICAgIGNvbnN0YW50cy5ldmVudHMuUGVyc29uV2Fsa2luZ0NvbXBsZXRlLFxyXG4gICAgICAgICAgY29tcGxldGVIYW5kbGVyXHJcbiAgICAgICAgKTtcclxuICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgY29uc3RhbnRzLmV2ZW50cy5QZXJzb25XYWxraW5nQ29tcGxldGUsXHJcbiAgICAgIGNvbXBsZXRlSGFuZGxlclxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHRleHRNZXNzYWdlKHJlc29sdmUpIHtcclxuICAgIGlmICh0aGlzLmV2ZW50LmZhY2VIZXJvKSB7XHJcbiAgICAgIGNvbnN0IG9iaiA9IHRoaXMubWFwLmdhbWVPYmplY3RzW3RoaXMuZXZlbnQuZmFjZUhlcm9dO1xyXG4gICAgICBvYmouZGlyZWN0aW9uID0gb3Bwb3NpdGVEaXJlY3Rpb24odGhpcy5tYXAuZ2FtZU9iamVjdHNbXCJoZXJvXCJdLmRpcmVjdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbWVzc2FnZSA9IG5ldyBUZXh0TWVzc2FnZSh7XHJcbiAgICAgIHRleHQ6IHRoaXMuZXZlbnQudGV4dCxcclxuICAgICAgb25Db21wbGV0ZTogKCkgPT4gcmVzb2x2ZSgpLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgbWVzc2FnZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZS1jb250YWluZXJcIik7XHJcbiAgICBtZXNzYWdlLmluaXQobWVzc2FnZUNvbnRhaW5lcik7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VNYXAocmVzb2x2ZSkge1xyXG4gICAgdGhpcy5tYXAub3ZlcldvcmxkLnN0YXJ0TWFwKE92ZXJXb3JsZE1hcHNMaXN0W3RoaXMuZXZlbnQubWFwXSk7XHJcbiAgICByZXNvbHZlKCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPdmVyV29ybGRFdmVudDtcclxuIiwiaW1wb3J0IHsgbmV4dFBvc2l0aW9uLCB3aXRoR3JpZHMgfSBmcm9tIFwiLi4vdXRpbHMvaGVscGVyXCI7XHJcbmltcG9ydCBHYW1lT2JqZWN0IGZyb20gXCIuL0dhbWVPYmplY3RcIjtcclxuaW1wb3J0IE92ZXJXb3JsZEV2ZW50IGZyb20gXCIuL092ZXJXb3JsZEV2ZW50XCI7XHJcbmltcG9ydCBPdmVyV29ybGQgZnJvbSBcIi4vT3ZlcldvcmxkXCI7XHJcblxyXG4vKipcclxuICogQG5hbWUgT3ZlcldvcmxNYXBcclxuICovXHJcbmNsYXNzIE92ZXJXb3JsZE1hcCB7XHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBjb25maWcubG93ZXJTcmNcclxuICAgKiBAcGFyYW0ge1N0cmluZ30gY29uZmlnLnVwcGVyU3JjXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZy53YWxsc1xyXG4gICAqIEBwYXJhbSB7QXJyYXk8e2V2ZW50czogKltdfT59IGNvbmZpZy5jdXRzY2VuZVNwYWNlc1xyXG4gICAqIEBwYXJhbSB7e2hlcm86IEdhbWVPYmplY3QsIG5wYzE6IEdhbWVPYmplY3QsIG5wYzI6IEdhbWVPYmplY3R9fSBjb25maWcuZ2FtZU9iamVjdHNcclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcclxuICAgIC8qKlxyXG4gICAgICogQHR5cGUge092ZXJXb3JsZH1cclxuICAgICAqL1xyXG4gICAgdGhpcy5vdmVyV29ybGQgPSBudWxsO1xyXG4gICAgdGhpcy5nYW1lT2JqZWN0cyA9IGNvbmZpZy5nYW1lT2JqZWN0cztcclxuICAgIHRoaXMud2FsbHMgPSBjb25maWcud2FsbHMgfHwge307XHJcbiAgICB0aGlzLmN1dHNjZW5lU3BhY2VzID0gY29uZmlnLmN1dHNjZW5lU3BhY2VzIHx8IFtdO1xyXG5cclxuICAgIHRoaXMubG93ZXJMYXllciA9IG5ldyBJbWFnZSgpO1xyXG4gICAgdGhpcy5sb3dlckxheWVyLnNyYyA9IGNvbmZpZy5sb3dlclNyYztcclxuXHJcbiAgICB0aGlzLnVwcGVyTGF5ZXIgPSBuZXcgSW1hZ2UoKTtcclxuICAgIHRoaXMudXBwZXJMYXllci5zcmMgPSBjb25maWcudXBwZXJTcmM7XHJcblxyXG4gICAgdGhpcy5pc0N1dHNjZW5lUGxheWluZyA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtDYW52YXNSZW5kZXJpbmdDb250ZXh0MkR9IGN0eFxyXG4gICAqIEBwYXJhbSB7R2FtZU9iamVjdH0gY2FtZXJhUGVyc29uXHJcbiAgICovXHJcbiAgZHJhd0xvd2VySW1hZ2UoY3R4LCBjYW1lcmFQZXJzb24pIHtcclxuICAgIGN0eC5kcmF3SW1hZ2UoXHJcbiAgICAgIHRoaXMubG93ZXJMYXllcixcclxuICAgICAgd2l0aEdyaWRzKDEwLjUpIC0gY2FtZXJhUGVyc29uLngsXHJcbiAgICAgIHdpdGhHcmlkcyg2KSAtIGNhbWVyYVBlcnNvbi55XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtDYW52YXNSZW5kZXJpbmdDb250ZXh0MkR9IGN0eFxyXG4gICAqIEBwYXJhbSB7R2FtZU9iamVjdH0gY2FtZXJhUGVyc29uXHJcbiAgICovXHJcbiAgZHJhd1VwcGVySW1hZ2UoY3R4LCBjYW1lcmFQZXJzb24pIHtcclxuICAgIGN0eC5kcmF3SW1hZ2UoXHJcbiAgICAgIHRoaXMudXBwZXJMYXllcixcclxuICAgICAgd2l0aEdyaWRzKDEwLjUpIC0gY2FtZXJhUGVyc29uLngsXHJcbiAgICAgIHdpdGhHcmlkcyg2KSAtIGNhbWVyYVBlcnNvbi55XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGN1clhcclxuICAgKiBAcGFyYW0ge051bWJlcn0gY3VyWVxyXG4gICAqIEBwYXJhbSB7J3VwJyB8ICdkb3duJyB8ICdsZWZ0JyB8ICdyaWdodCcgfSBkaXJlY3Rpb25cclxuICAgKi9cclxuICBpc1NwYWNlVGFrZW4oY3VyWCwgY3VyWSwgZGlyZWN0aW9uKSB7XHJcbiAgICBjb25zdCB7IHgsIHkgfSA9IG5leHRQb3NpdGlvbihjdXJYLCBjdXJZLCBkaXJlY3Rpb24pO1xyXG4gICAgcmV0dXJuIHRoaXMud2FsbHNbYCR7eH0sJHt5fWBdIHx8IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgLy8gTW91bnRpbmcgT2JqZWN0XHJcbiAgbW91bnRPYmplY3RzKCkge1xyXG4gICAgLy8gT2JqZWN0LnZhbHVlcyh0aGlzLmdhbWVPYmplY3RzKS5tYXAoKG9iaikgPT4ge1xyXG4gICAgLy8gICBvYmoubW91bnQodGhpcyk7XHJcbiAgICAvLyB9KTtcclxuXHJcbiAgICBPYmplY3Qua2V5cyh0aGlzLmdhbWVPYmplY3RzKS5tYXAoKGtleSkgPT4ge1xyXG4gICAgICBsZXQgb2JqZWN0ID0gdGhpcy5nYW1lT2JqZWN0c1trZXldO1xyXG4gICAgICBvYmplY3QuaWQgPSBrZXk7XHJcbiAgICAgIG9iamVjdC5tb3VudCh0aGlzKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gTWFwIEluaXRpYWxpemVcclxuXHJcbiAgY2hlY2tGb3JBY3Rpb25DdXRzY2VuZSgpIHtcclxuICAgIGNvbnN0IGhlcm8gPSB0aGlzLmdhbWVPYmplY3RzW1wiaGVyb1wiXTtcclxuICAgIGNvbnN0IG5leHRDb29yZCA9IG5leHRQb3NpdGlvbihoZXJvLngsIGhlcm8ueSwgaGVyby5kaXJlY3Rpb24pO1xyXG4gICAgY29uc3QgbWF0Y2ggPSBPYmplY3QudmFsdWVzKHRoaXMuZ2FtZU9iamVjdHMpLmZpbmQoKG9iamVjdCkgPT4ge1xyXG4gICAgICByZXR1cm4gYCR7b2JqZWN0Lnh9LCR7b2JqZWN0Lnl9YCA9PT0gYCR7bmV4dENvb3JkLnh9LCR7bmV4dENvb3JkLnl9YDtcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghdGhpcy5pc0N1dHNjZW5lUGxheWluZyAmJiBtYXRjaCAmJiBtYXRjaC50YWxraW5nLmxlbmd0aCkge1xyXG4gICAgICB0aGlzLnN0YXJ0Q3V0U2NlbmUobWF0Y2gudGFsa2luZ1swXS5ldmVudHMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2hlY2tGb3JGb290c3RlcEN1dHNjZW5lKCkge1xyXG4gICAgY29uc3QgaGVybyA9IHRoaXMuZ2FtZU9iamVjdHNbXCJoZXJvXCJdO1xyXG4gICAgY29uc3QgbWF0Y2ggPSB0aGlzLmN1dHNjZW5lU3BhY2VzW2Ake2hlcm8ueH0sJHtoZXJvLnl9YF07XHJcbiAgICBpZiAoIXRoaXMuaXNDdXRzY2VuZVBsYXlpbmcgJiYgbWF0Y2gpIHtcclxuICAgICAgdGhpcy5zdGFydEN1dFNjZW5lKG1hdGNoWzBdLmV2ZW50cyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhc3luYyBzdGFydEN1dFNjZW5lKGV2ZW50cykge1xyXG4gICAgdGhpcy5pc0N1dHNjZW5lUGxheWluZyA9IHRydWU7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGV2ZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBldmVudEhhbmRsZXIgPSBuZXcgT3ZlcldvcmxkRXZlbnQoe1xyXG4gICAgICAgIGV2ZW50OiBldmVudHNbaV0sXHJcbiAgICAgICAgbWFwOiB0aGlzLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGF3YWl0IGV2ZW50SGFuZGxlci5pbml0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgT2JqZWN0LmtleXModGhpcy5nYW1lT2JqZWN0cykubWFwKChrZXkpID0+IHtcclxuICAgICAgbGV0IG9iamVjdCA9IHRoaXMuZ2FtZU9iamVjdHNba2V5XTtcclxuICAgICAgb2JqZWN0LmlkID0ga2V5O1xyXG4gICAgICBvYmplY3QubW91bnQodGhpcyk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuaXNDdXRzY2VuZVBsYXlpbmcgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIC8vIE90aGVyIE9iamVjdCBXYWxsc1xyXG4gIGFkZFdhbGwoeCwgeSkge1xyXG4gICAgdGhpcy53YWxsc1tgJHt4fSwke3l9YF0gPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlV2FsbCh4LCB5KSB7XHJcbiAgICBkZWxldGUgdGhpcy53YWxsc1tgJHt4fSwke3l9YF07XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHsndXAnIHwgJ2Rvd24nIHwgJ2xlZnQnIHwgJ3JpZ2h0JyB9IGRpcmVjdGlvblxyXG4gICAqL1xyXG4gIG1vdmVXYWxsKHdhc1gsIHdhc1ksIGRpcmVjdGlvbikge1xyXG4gICAgdGhpcy5yZW1vdmVXYWxsKHdhc1gsIHdhc1kpO1xyXG4gICAgY29uc3QgeyB4LCB5IH0gPSBuZXh0UG9zaXRpb24od2FzWCwgd2FzWSwgZGlyZWN0aW9uKTtcclxuICAgIHRoaXMuYWRkV2FsbCh4LCB5KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE92ZXJXb3JsZE1hcDtcclxuIiwiaW1wb3J0IGNvbnN0YW50cyBmcm9tIFwiLi4vRGF0YS9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgZW1pdEV2ZW50IH0gZnJvbSBcIi4uL3V0aWxzL2hlbHBlclwiO1xyXG5pbXBvcnQgR2FtZU9iamVjdCBmcm9tIFwiLi9HYW1lT2JqZWN0XCI7XHJcbmltcG9ydCBPdmVyV29ybGRNYXAgZnJvbSBcIi4vT3ZlcldvcmxkTWFwXCI7XHJcblxyXG4vKipcclxuICovXHJcbmNsYXNzIFBlcnNvbiBleHRlbmRzIEdhbWVPYmplY3Qge1xyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7R2FtZU9iamVjdH0gY29uZmlnXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XHJcbiAgICBzdXBlcihjb25maWcpO1xyXG5cclxuICAgIHRoaXMubW92aW5nUHJvZ3Jlc3NSZW1haW5pZyA9IDA7XHJcblxyXG4gICAgdGhpcy5pc1BsYXllckNvbnRyb2xsZWQgPSBjb25maWcuaXNQbGF5ZXJDb250cm9sbGVkIHx8IGZhbHNlO1xyXG5cclxuICAgIHRoaXMuaXNTdGFuZGluZyA9IGZhbHNlO1xyXG5cclxuICAgIHRoaXMuZGlyZWN0aW9uVXBkYXRlID0ge1xyXG4gICAgICB1cDogW1wieVwiLCAtMV0sXHJcbiAgICAgIGRvd246IFtcInlcIiwgMV0sXHJcbiAgICAgIGxlZnQ6IFtcInhcIiwgLTFdLFxyXG4gICAgICByaWdodDogW1wieFwiLCAxXSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0ge09iamVjdH0gc3RhdGVcclxuICAgKiBAcGFyYW0geydkb3duJyB8ICd1cCcgfCAnbGVmdCcgfCAncmlnaHQnIH0gc3RhdGUuYXJyb3dcclxuICAgKiBAcGFyYW0ge092ZXJXb3JsZE1hcH0gc3RhdGUubWFwXHJcbiAgICovXHJcbiAgdXBkYXRlKHN0YXRlKSB7XHJcbiAgICBpZiAodGhpcy5tb3ZpbmdQcm9ncmVzc1JlbWFpbmlnID4gMCkge1xyXG4gICAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgdGhpcy5pc1BsYXllckNvbnRyb2xsZWQgJiZcclxuICAgICAgICAhc3RhdGUubWFwLmlzQ3V0c2NlbmVQbGF5aW5nICYmXHJcbiAgICAgICAgc3RhdGUuYXJyb3dcclxuICAgICAgKSB7XHJcbiAgICAgICAgdGhpcy5zdGFydEJlaGF2aW9yKHN0YXRlLCB7XHJcbiAgICAgICAgICB0eXBlOiBcIndhbGtcIixcclxuICAgICAgICAgIGRpcmVjdGlvbjogc3RhdGUuYXJyb3csXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMudXBkYXRlU3ByaW50KHN0YXRlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZVxyXG4gICAqIEBwYXJhbSB7T3ZlcldvcmxkTWFwfSBzdGF0ZS5tYXBcclxuICAgKiBAcGFyYW0ge09iamVjdH0gYmVoYXZpb3JcclxuICAgKiBAcGFyYW0geyd3YWxrJyB8ICdzdGFuZCcgfSBiZWhhdmlvci50eXBlXHJcbiAgICogQHBhcmFtIHsndXAnIHwgJ2Rvd24nIHwgJ2xlZnQnIHwgJ3JpZ2h0JyB9IGJlaGF2aW9yLmRpcmVjdGlvblxyXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gYmVoYXZpb3IucmV0cnlcclxuICAgKiBAcGFyYW0ge051bWJlcn0gYmVoYXZpb3IudGltZVxyXG4gICAqL1xyXG4gIHN0YXJ0QmVoYXZpb3Ioc3RhdGUsIGJlaGF2aW9yKSB7XHJcbiAgICB0aGlzLmRpcmVjdGlvbiA9IGJlaGF2aW9yLmRpcmVjdGlvbjtcclxuXHJcbiAgICBpZiAoYmVoYXZpb3IudHlwZSA9PT0gXCJ3YWxrXCIpIHtcclxuICAgICAgY29uc3QgaXNTcGFjZVRha2VuID0gc3RhdGUubWFwLmlzU3BhY2VUYWtlbihcclxuICAgICAgICB0aGlzLngsXHJcbiAgICAgICAgdGhpcy55LFxyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uXHJcbiAgICAgICk7XHJcbiAgICAgIGlmIChpc1NwYWNlVGFrZW4pIHtcclxuICAgICAgICBiZWhhdmlvci5yZXRyeSAmJlxyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRCZWhhdmlvcihzdGF0ZSwgYmVoYXZpb3IpO1xyXG4gICAgICAgICAgfSwgMTApO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBzdGF0ZS5tYXAubW92ZVdhbGwodGhpcy54LCB0aGlzLnksIHRoaXMuZGlyZWN0aW9uKTtcclxuICAgICAgdGhpcy5tb3ZpbmdQcm9ncmVzc1JlbWFpbmlnID0gY29uc3RhbnRzLm1vdmluZ1Byb2dyZXNzO1xyXG4gICAgICB0aGlzLnVwZGF0ZVNwcmludChzdGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGJlaGF2aW9yLnR5cGUgPT09IFwic3RhbmRcIikge1xyXG4gICAgICB0aGlzLmlzU3RhbmRpbmcgPSB0cnVlO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBlbWl0RXZlbnQoY29uc3RhbnRzLmV2ZW50cy5QZXJzb25TdGFuZENvbXBsZXRlLCB7IHdob0lkOiB0aGlzLmlkIH0pO1xyXG4gICAgICAgIHRoaXMuaXNTdGFuZGluZyA9IGZhbHNlO1xyXG4gICAgICB9LCBiZWhhdmlvci50aW1lKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZVBvc2l0aW9uKCkge1xyXG4gICAgaWYgKHRoaXMubW92aW5nUHJvZ3Jlc3NSZW1haW5pZyA+IDApIHtcclxuICAgICAgY29uc3QgW3Byb3BlcnR5LCBjaGFuZ2VdID0gdGhpcy5kaXJlY3Rpb25VcGRhdGVbdGhpcy5kaXJlY3Rpb25dO1xyXG4gICAgICB0aGlzW3Byb3BlcnR5XSArPSBjaGFuZ2U7XHJcbiAgICAgIHRoaXMubW92aW5nUHJvZ3Jlc3NSZW1haW5pZyAtPSAxO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMubW92aW5nUHJvZ3Jlc3NSZW1haW5pZyA9PT0gMCkge1xyXG4gICAgICBlbWl0RXZlbnQoY29uc3RhbnRzLmV2ZW50cy5QZXJzb25XYWxraW5nQ29tcGxldGUsIHtcclxuICAgICAgICB3aG9JZDogdGhpcy5pZCxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVTcHJpbnQoKSB7XHJcbiAgICBpZiAodGhpcy5tb3ZpbmdQcm9ncmVzc1JlbWFpbmlnID4gMCkge1xyXG4gICAgICB0aGlzLnNwcml0ZS5zZXRBbmltYXRpb24oXCJ3YWxrXCIgKyBjYXBpdGFsaXplRmlyc3RMZXR0ZXIodGhpcy5kaXJlY3Rpb24pKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc3ByaXRlLnNldEFuaW1hdGlvbihcImlkbGVcIiArIGNhcGl0YWxpemVGaXJzdExldHRlcih0aGlzLmRpcmVjdGlvbikpO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEByZXR1cm4ge1N0cmluZ31cclxuICovXHJcbmZ1bmN0aW9uIGNhcGl0YWxpemVGaXJzdExldHRlcihzdHJpbmcpIHtcclxuICByZXR1cm4gc3RyaW5nLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQZXJzb247XHJcbiIsImNsYXNzIFJldmVhbGluZ1RleHQge1xyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcclxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBjb25maWcuZWxlbWVudFxyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBjb25maWcudGV4dFxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBjb25maWcuc3BlZWRcclxuICAgKiBAcGFyYW0ge051bWJlciB8IG51bGx9IGNvbmZpZy50aW1lb3V0XHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XHJcbiAgICB0aGlzLmVsZW1lbnQgPSBjb25maWcuZWxlbWVudDtcclxuICAgIHRoaXMudGV4dCA9IGNvbmZpZy50ZXh0O1xyXG4gICAgdGhpcy5zcGVlZCA9IGNvbmZpZy5zcGVlZCB8fCA3MDtcclxuXHJcbiAgICB0aGlzLnRpbWVvdXQgPSBudWxsO1xyXG4gICAgdGhpcy5pc0RvbmUgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICBsZXQgY2hhcmFjdGVycyA9IFtdO1xyXG4gICAgdGhpcy50ZXh0LnNwbGl0KFwiXCIpLmZvckVhY2goKGNoYXIpID0+IHtcclxuICAgICAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IGNoYXI7XHJcbiAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChzcGFuKTtcclxuXHJcbiAgICAgIGNoYXJhY3RlcnMucHVzaCh7IHNwYW4sIGRlbGF5QWZ0ZXI6IGNoYXIgPT09IFwiIFwiID8gMCA6IHRoaXMuc3BlZWQgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJldmVhbGluZ1RleHQ7XHJcbiIsImltcG9ydCBjb25zdGFudHMgZnJvbSBcIi4uL0RhdGEvY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IGRyYXdJbWFnZSwgd2l0aEdyaWRzIH0gZnJvbSBcIi4uL3V0aWxzL2hlbHBlclwiO1xyXG5pbXBvcnQgR2FtZU9iamVjdCBmcm9tIFwiLi9HYW1lT2JqZWN0XCI7XHJcblxyXG4vKipcclxuICogQG5hbWUgU3ByaXRlXHJcbiAqL1xyXG5jbGFzcyBTcHJpdGUge1xyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcclxuICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnLmFuaW1hdGlvbnNcclxuICAgKiBAcGFyYW0geydpZGxlRG93bicgfCAnaWRsZVJpZ2h0JyB8ICdpZGxlVXAnIHwgJ2lkbGVMZWZ0JyB8ICd3YWxrRG93bicgfCd3YWxrUmlnaHQnIHwgJ3dhbGtVcCcgfCAnd2Fsa0xlZnQnIH0gY29uZmlnLmN1cnJlbnRBbmltYXRpb25cclxuICAgKiBAcGFyYW0ge1N0cmluZ30gY29uZmlnLnNyY1xyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBjb25maWcuc3F1YXJlU2l6ZVxyXG4gICAqIEBwYXJhbSB7R2FtZU9iamVjdH0gY29uZmlnLmdhbWVPYmplY3RcclxuICAgKiBAcGFyYW0ge051bWJlciB8IG51bGx9IGNvbmZpZy5hbmltYXRpb25GcmFtZUxpbWl0XHJcbiAgICogQHBhcmFtIHt7ICB4OiBOdW1iZXIsIHk6IE51bWJlcn0gfCBudWxsfSBjb25maWcucmVtb3ZlU3F1YXJlU2l6ZVxyXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gY29uZmlnLnVzZVNoYWRvd1xyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xyXG4gICAgLy8gU3F1YXJlU2l6ZSBEZWZhdWx0IDMyXHJcbiAgICB0aGlzLnNxdWFyZVNpemUgPSBjb25maWcuc3F1YXJlU2l6ZSB8fCBjb25zdGFudHMuc3F1YXJlU2l6ZTtcclxuICAgIHRoaXMucmVtb3ZlU3F1YXJlU2l6ZSA9IGNvbmZpZy5yZW1vdmVTcXVhcmVTaXplXHJcbiAgICAgID8gY29uZmlnLnJlbW92ZVNxdWFyZVNpemVcclxuICAgICAgOiB7IHg6IDgsIHk6IDE4IH07XHJcblxyXG4gICAgLy8gU2V0dXAgdGhlIGltYWdlXHJcbiAgICBkcmF3SW1hZ2UoXHJcbiAgICAgIGNvbmZpZy5zcmMgfHwgXCIvcHVibGljL2ltYWdlcy9jaGFyYWN0ZXJzL3Blb3BsZS9oZXJvLnBuZ1wiLFxyXG4gICAgICAoaW1hZ2UpID0+IHtcclxuICAgICAgICB0aGlzLmltYWdlID0gaW1hZ2U7XHJcbiAgICAgICAgdGhpcy5pbWFnZUlzTG9hZGVkID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICAvLyBTaGFkb3cgSW1hZ2VcclxuICAgIHRoaXMudXNlU2hhZG93ID0gY29uZmlnLnVzZVNoYWRvdyB8fCBmYWxzZTtcclxuICAgIGlmICh0aGlzLnVzZVNoYWRvdykge1xyXG4gICAgICBkcmF3SW1hZ2UoXCIvcHVibGljL2ltYWdlcy9jaGFyYWN0ZXJzL3NoYWRvdy5wbmdcIiwgKGltYWdlKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zaGFkb3dJbWFnZSA9IGltYWdlO1xyXG4gICAgICAgIHRoaXMuc2hhZG93SW1hZ2VMb2FkZWQgPSB0cnVlO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDb25maXVyZSBBbmltYXRpb24gQW5kIEluaXRpYWwgU3RhdGVcclxuICAgIHRoaXMuYW5pbWF0aW9ucyA9IGNvbmZpZy5hbmltYXRpb25zIHx8IHtcclxuICAgICAgaWRsZURvd246IFtbMCwgMF1dLFxyXG4gICAgICBpZGxlUmlnaHQ6IFtbMCwgMV1dLFxyXG4gICAgICBpZGxlVXA6IFtbMCwgMl1dLFxyXG4gICAgICBpZGxlTGVmdDogW1swLCAzXV0sXHJcbiAgICAgIHdhbGtEb3duOiBbXHJcbiAgICAgICAgWzEsIDBdLCAvLyBpbWFnZSByb3cgMSBjb2wgMVxyXG4gICAgICAgIFswLCAwXSwgLy8gaW1hZ2Ugcm93IDEgY29sIDJcclxuICAgICAgICBbMywgMF0sIC8vIGltYWdlIHJvdyAxIGNvbCA0XHJcbiAgICAgICAgWzAsIDBdLCAvLyBpbWFnZSByb3cgMSBjb2wgMlxyXG4gICAgICBdLFxyXG4gICAgICB3YWxrUmlnaHQ6IFtcclxuICAgICAgICBbMSwgMV0sIC8vIGltYWdlIHJvdyAxIGNvbCAxXHJcbiAgICAgICAgWzAsIDFdLCAvLyBpbWFnZSByb3cgMSBjb2wgMlxyXG4gICAgICAgIFszLCAxXSwgLy8gaW1hZ2Ugcm93IDEgY29sIDRcclxuICAgICAgICBbMCwgMV0sIC8vIGltYWdlIHJvdyAxIGNvbCAyXHJcbiAgICAgIF0sXHJcbiAgICAgIHdhbGtVcDogW1xyXG4gICAgICAgIFsxLCAyXSwgLy8gaW1hZ2Ugcm93IDEgY29sIDFcclxuICAgICAgICBbMCwgMl0sIC8vIGltYWdlIHJvdyAxIGNvbCAyXHJcbiAgICAgICAgWzMsIDJdLCAvLyBpbWFnZSByb3cgMSBjb2wgNFxyXG4gICAgICAgIFswLCAyXSwgLy8gaW1hZ2Ugcm93IDEgY29sIDJcclxuICAgICAgXSxcclxuICAgICAgd2Fsa0xlZnQ6IFtcclxuICAgICAgICBbMSwgM10sIC8vIGltYWdlIHJvdyAxIGNvbCAxXHJcbiAgICAgICAgWzAsIDNdLCAvLyBpbWFnZSByb3cgMSBjb2wgMlxyXG4gICAgICAgIFszLCAzXSwgLy8gaW1hZ2Ugcm93IDEgY29sIDRcclxuICAgICAgICBbMCwgM10sIC8vIGltYWdlIHJvdyAxIGNvbCAyXHJcbiAgICAgIF0sXHJcbiAgICB9O1xyXG5cclxuICAgIC8vIFNldCBBbmltYXRpb24gRnJhbWVcclxuICAgIHRoaXMuY3VycmVudEFuaW1hdGlvbiA9IGNvbmZpZy5jdXJyZW50QW5pbWF0aW9uIHx8IFwiaWRsZURvd25cIjtcclxuICAgIHRoaXMuY3VycmVudEFuaW1hdGlvbkZyYW1lID0gMDtcclxuICAgIHRoaXMuYW5pbWF0aW9uRnJhbWVMaW1pdCA9XHJcbiAgICAgIGNvbmZpZy5hbmltYXRpb25GcmFtZUxpbWl0IHx8IGNvbnN0YW50cy5hbmltYXRpb25GcmFtZUxpbWl0O1xyXG4gICAgdGhpcy5hbmltYXRpb25GcmFtZVByb2dyZXNzID0gdGhpcy5hbmltYXRpb25GcmFtZUxpbWl0O1xyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKFwiIHRoaXMuYW5pbWF0aW9uRnJhbWVQcm9ncmVzc1wiLCB0aGlzLmFuaW1hdGlvbkZyYW1lUHJvZ3Jlc3MpO1xyXG4gICAgLy9cclxuICAgIHRoaXMuZ2FtZU9iamVjdCA9IGNvbmZpZy5nYW1lT2JqZWN0O1xyXG4gIH1cclxuXHJcbiAgLy8gR2V0IEN1cnJlbnQgQW5pbWF0aW9uIEZyYW1lXHJcbiAgLyoqXHJcbiAgICogQHJldHVybiB7W051bWJlciwgTnVtYmVyXSB8IHVuZGVmaW5lZCB9XHJcbiAgICovXHJcbiAgZ2V0IGZyYW1lKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuYW5pbWF0aW9uc1t0aGlzLmN1cnJlbnRBbmltYXRpb25dW3RoaXMuY3VycmVudEFuaW1hdGlvbkZyYW1lXTtcclxuICB9XHJcblxyXG4gIHNldEFuaW1hdGlvbihrZXkpIHtcclxuICAgIGlmICh0aGlzLmN1cnJlbnRBbmltYXRpb24gIT09IGtleSkge1xyXG4gICAgICB0aGlzLmN1cnJlbnRBbmltYXRpb24gPSBrZXk7XHJcbiAgICAgIHRoaXMuY3VycmVudEFuaW1hdGlvbkZyYW1lID0gMDtcclxuICAgICAgdGhpcy5hbmltYXRpb25GcmFtZVByb2dyZXNzID0gdGhpcy5hbmltYXRpb25GcmFtZUxpbWl0O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlQW5pbWF0aW9uUHJvZ3Jlc3MoKSB7XHJcbiAgICAvLyBEb3dudGljayBGcmFtZSBQcm9ncmVzc1xyXG4gICAgaWYgKHRoaXMuYW5pbWF0aW9uRnJhbWVQcm9ncmVzcyA+IDApIHtcclxuICAgICAgdGhpcy5hbmltYXRpb25GcmFtZVByb2dyZXNzIC09IDE7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXNldCB0aGUgY291bnRlclxyXG4gICAgdGhpcy5hbmltYXRpb25GcmFtZVByb2dyZXNzID0gdGhpcy5hbmltYXRpb25GcmFtZUxpbWl0O1xyXG4gICAgdGhpcy5jdXJyZW50QW5pbWF0aW9uRnJhbWUgKz0gMTtcclxuXHJcbiAgICBpZiAodGhpcy5mcmFtZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMuY3VycmVudEFuaW1hdGlvbkZyYW1lID0gMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERyYXcgQ29udGV4dFxyXG4gICAqIEBwYXJhbSB7Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEfSBjdHhcclxuICAgKiBAcGFyYW0ge0dhbWVPYmplY3R9IGNhbWVyYVBlcnNvblxyXG4gICAqL1xyXG4gIGRyYXcoY3R4LCBjYW1lcmFQZXJzb24pIHtcclxuICAgIGNvbnN0IHggPVxyXG4gICAgICB0aGlzLmdhbWVPYmplY3QueCAtXHJcbiAgICAgIHRoaXMucmVtb3ZlU3F1YXJlU2l6ZS54ICtcclxuICAgICAgd2l0aEdyaWRzKDEwLjUpIC1cclxuICAgICAgY2FtZXJhUGVyc29uLng7IC8vIFJlbW92ZSBVbm5lY2Vzc2FyeSB3aWR0aFxyXG4gICAgY29uc3QgeSA9XHJcbiAgICAgIHRoaXMuZ2FtZU9iamVjdC55IC1cclxuICAgICAgdGhpcy5yZW1vdmVTcXVhcmVTaXplLnkgK1xyXG4gICAgICB3aXRoR3JpZHMoNikgLVxyXG4gICAgICBjYW1lcmFQZXJzb24ueTsgLy8gUmVtb3ZlIFVubmVjZXNzYXJ5IGhlaWdodFxyXG4gICAgY29uc3QgW2ZyYW1lWCwgZnJhbWVZXSA9IHRoaXMuZnJhbWU7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmZyYW1lKTtcclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIkZyYW1lWFwiLCBmcmFtZVgpO1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJGcmFtZVlcIiwgZnJhbWVZKTtcclxuXHJcbiAgICAvLyBXaGVuIEltYWdlIExvYWRpbmdcclxuICAgIHRoaXMuaW1hZ2VJc0xvYWRlZCAmJlxyXG4gICAgICBjdHguZHJhd0ltYWdlKFxyXG4gICAgICAgIHRoaXMuaW1hZ2UsIC8vIEluc2VydCBJbWFnZVxyXG4gICAgICAgIGZyYW1lWCAqIGNvbnN0YW50cy5zcXVhcmVTaXplLCAvLyBYIGZyb20gSW1hZ2VcclxuICAgICAgICBmcmFtZVkgKiBjb25zdGFudHMuc3F1YXJlU2l6ZSwgLy8gWSBmcm9tIEltYWdlXHJcbiAgICAgICAgdGhpcy5zcXVhcmVTaXplLCAvLyBXaWR0aCBGcm9tIEltYWdlLFxyXG4gICAgICAgIHRoaXMuc3F1YXJlU2l6ZSwgLy8gSGVpZ2h0IEZyb20gSW1hZ2VcclxuICAgICAgICB4LCAvLyBYIGZvciBDYW52YXNcclxuICAgICAgICB5LCAvLyBZIGZvciBDYW52YXNcclxuICAgICAgICB0aGlzLnNxdWFyZVNpemUsIC8vIFdpZHRoIEZvciBDYW52YXNcclxuICAgICAgICB0aGlzLnNxdWFyZVNpemUgLy8gSGVpZ2h0IEZvciBDYW52YXNcclxuICAgICAgKTtcclxuXHJcbiAgICAvLyBDYWxsIEFuaW1hdGlvblxyXG4gICAgdGhpcy51cGRhdGVBbmltYXRpb25Qcm9ncmVzcygpO1xyXG5cclxuICAgIHRoaXMuc2hhZG93SW1hZ2VMb2FkZWQgJiZcclxuICAgICAgY3R4LmRyYXdJbWFnZShcclxuICAgICAgICB0aGlzLnNoYWRvd0ltYWdlLCAvLyBJbnNlcnQgSW1hZ2VcclxuICAgICAgICB4LCAvLyBYIGZvciBDYW52YXNcclxuICAgICAgICB5IC8vIFkgZm9yIENhbnZhc1xyXG4gICAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3ByaXRlO1xyXG4iLCJpbXBvcnQgS2V5UHJlc3NMaXN0ZW5lciBmcm9tIFwiLi9LZXlQcmVzc0xpc3RlbmVyXCI7XHJcbmltcG9ydCBSZXZlYWxpbmdUZXh0IGZyb20gXCIuL1JldmVhbGluZ1RleHRcIjtcclxuXHJcbmNsYXNzIFRleHRNZXNzYWdlIHtcclxuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcclxuICAgIHRoaXMudGV4dCA9IGNvbmZpZy50ZXh0IHx8IFwiXCI7XHJcbiAgICB0aGlzLm9uQ29tcGxldGUgPSBjb25maWcub25Db21wbGV0ZTtcclxuICAgIHRoaXMuZWxlbWVudCA9IG51bGw7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVFbGVtZW50KCkge1xyXG4gICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiVGV4dE1lc3NhZ2VcIik7XHJcblxyXG4gICAgdGhpcy5lbGVtZW50LmlubmVySFRNTCA9IGBcclxuICAgICAgICA8cCBjbGFzcz1cIlRleHRNZXNzYWdlX3BcIj4ke3RoaXMudGV4dH08L3A+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIlRleHRNZXNzYWdlX2J1dHRvblwiPk5leHQ8L2J1dHRvbj5cclxuICAgIGA7XHJcblxyXG4gICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgdGhpcy5kb25lKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnJldmVhbGluZ1RleHQgPSBuZXcgUmV2ZWFsaW5nVGV4dCh7XHJcbiAgICAgIGVsZW1lbnQ6IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiVGV4dE1lc3NhZ2VfcFwiKSxcclxuICAgICAgdGV4dDogdGhpcy50ZXh0LFxyXG4gICAgfSk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAdHlwZSB7S2V5UHJlc3NMaXN0ZW5lcn1cclxuICAgICAqL1xyXG4gICAgdGhpcy5hY3Rpb25MaXN0ZW5lciA9IG5ldyBLZXlQcmVzc0xpc3RlbmVyKFwiRW50ZXJcIiwgKCkgPT4ge1xyXG4gICAgICB0aGlzLmFjdGlvbkxpc3RlbmVyLnVuYmluZCgpO1xyXG4gICAgICB0aGlzLmRvbmUoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuYWN0aW9uU3BhY2VMaXN0ZW5lciA9IG5ldyBLZXlQcmVzc0xpc3RlbmVyKFwiU3BhY2VcIiwgKCkgPT4ge1xyXG4gICAgICB0aGlzLmFjdGlvblNwYWNlTGlzdGVuZXIudW5iaW5kKCk7XHJcbiAgICAgIHRoaXMuZG9uZSgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBkb25lKCkge1xyXG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgdGhpcy5vbkNvbXBsZXRlKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBjb250YWluZXJcclxuICAgKi9cclxuICBpbml0KGNvbnRhaW5lcikge1xyXG4gICAgdGhpcy5jcmVhdGVFbGVtZW50KCk7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRleHRNZXNzYWdlO1xyXG4iLCJpbXBvcnQgY29uc3RhbnRzIGZyb20gXCIuLi9EYXRhL2NvbnN0YW50c1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRyYXdJbWFnZSA9IChzcmMsIGNiKSA9PiB7XHJcbiAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgaW1nLm9ubG9hZCA9ICgpID0+IHtcclxuICAgIGlmIChjYikge1xyXG4gICAgICBjYihpbWcpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgaW1nLnNyYyA9IHNyYztcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB3aXRoR3JpZHMgPSAobikgPT4ge1xyXG4gIHJldHVybiBuICogY29uc3RhbnRzLmhhbGZTcXVhcmVTaXplO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGFzR3JpZENvb3JkID0gKHgsIHkpID0+IHtcclxuICByZXR1cm4gYCR7eCAqIGNvbnN0YW50cy5oYWxmU3F1YXJlU2l6ZX0sJHt5ICogY29uc3RhbnRzLmhhbGZTcXVhcmVTaXplfWA7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbmV4dFBvc2l0aW9uID0gKGN1clgsIGN1clksIGRpcmVjdGlvbikgPT4ge1xyXG4gIGxldCB4LCB5LCBzaXplO1xyXG4gIHggPSBjdXJYO1xyXG4gIHkgPSBjdXJZO1xyXG4gIHNpemUgPSAxNjtcclxuICBpZiAoZGlyZWN0aW9uID09PSBcImxlZnRcIikge1xyXG4gICAgeCAtPSBzaXplO1xyXG4gIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSBcInJpZ2h0XCIpIHtcclxuICAgIHggKz0gc2l6ZTtcclxuICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gXCJ1cFwiKSB7XHJcbiAgICB5IC09IHNpemU7XHJcbiAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09IFwiZG93blwiKSB7XHJcbiAgICB5ICs9IHNpemU7XHJcbiAgfVxyXG5cclxuICByZXR1cm4geyB4LCB5IH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZW1pdEV2ZW50ID0gKG5hbWUsIGRldGFpbCkgPT4ge1xyXG4gIC8vIFdlIEZpbmlzaGVkIHRoZSB3YWxrXHJcbiAgY29uc3QgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQobmFtZSwge1xyXG4gICAgZGV0YWlsLFxyXG4gIH0pO1xyXG5cclxuICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBvcHBvc2l0ZURpcmVjdGlvbiA9IChkaXJlY3Rpb24pID0+IHtcclxuICBpZiAoZGlyZWN0aW9uID09PSBcImxlZnRcIikge1xyXG4gICAgcmV0dXJuIFwicmlnaHRcIjtcclxuICB9XHJcbiAgaWYgKGRpcmVjdGlvbiA9PT0gXCJyaWdodFwiKSB7XHJcbiAgICByZXR1cm4gXCJsZWZ0XCI7XHJcbiAgfVxyXG4gIGlmIChkaXJlY3Rpb24gPT09IFwidXBcIikge1xyXG4gICAgcmV0dXJuIFwiZG93blwiO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIFwidXBcIjtcclxufTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgT3ZlcldvcmxkIGZyb20gXCIuL0dhbWUvT3ZlcldvcmxkXCI7XHJcblxyXG5jb25zdCB3b2xyZCA9IG5ldyBPdmVyV29ybGQoe1xyXG4gIGVsZW1lbnQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZS1jb250YWluZXJcIiksXHJcbn0pO1xyXG5cclxud29scmQuaW5pdCgpO1xyXG4iXSwibmFtZXMiOlsiUGVyc29uIiwiYXNHcmlkQ29vcmQiLCJ3aXRoR3JpZHMiLCJPdmVyV29ybGRNYXBzTGlzdCIsIkRlbW9Sb29tIiwibG93ZXJTcmMiLCJ1cHBlclNyYyIsImdhbWVPYmplY3RzIiwiaGVybyIsImlzUGxheWVyQ29udHJvbGxlZCIsIngiLCJ5Iiwic3JjIiwibnBjMSIsImJlaGF2aW9yTG9vcCIsInR5cGUiLCJkaXJlY3Rpb24iLCJ0aW1lIiwidGFsa2luZyIsImV2ZW50cyIsInRleHQiLCJmYWNlSGVybyIsIm5wYzIiLCJ3YWxscyIsImN1dHNjZW5lU3BhY2VzIiwid2hvIiwibWFwIiwiS2l0Y2hlbiIsIm5wYzMiLCJzcXVhcmVTaXplIiwiaGFsZlNxdWFyZVNpemUiLCJtb3ZpbmdQcm9ncmVzcyIsImFuaW1hdGlvbkZyYW1lTGltaXQiLCJQZXJzb25XYWxraW5nQ29tcGxldGUiLCJQZXJzb25TdGFuZENvbXBsZXRlIiwiRGlyZWN0aW9uSW5wdXQiLCJjb25zdHJ1Y3RvciIsImhlbGREaXJlY3Rpb25zIiwiQXJyb3dVcCIsIktleVciLCJBcnJvd0Rvd24iLCJLZXlTIiwiQXJyb3dMZWZ0IiwiS2V5QSIsIkFycm93UmlnaHQiLCJLZXlEIiwiaW5pdCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJkaXIiLCJjb2RlIiwiaW5kZXhPZiIsInVuc2hpZnQiLCJpbmRleCIsInNwbGljZSIsIk92ZXJXb3JsZEV2ZW50IiwiT3ZlcldvcmxkTWFwIiwiU3ByaXRlIiwiR2FtZU9iamVjdCIsImNvbmZpZyIsImlkIiwiaXNNb3VudGVkIiwiaXNVc2VTaGFkb3ciLCJ1c2VTaGFkb3ciLCJ1bmRlZmluZWQiLCJzcHJpdGUiLCJnYW1lT2JqZWN0IiwicmVtb3ZlU3F1YXJlU2l6ZSIsImJlaGF2aW9yTG9vcEluZGV4IiwibW91bnQiLCJhZGRXYWxsIiwic2V0VGltZW91dCIsImRvQmVoYXZpb3JFdmVudCIsInVwZGF0ZSIsImlzQ3V0c2NlbmVQbGF5aW5nIiwibGVuZ3RoIiwiaXNTdGFuZGluZyIsImV2ZW50IiwiZXZlbnRIYW5kbGVyIiwiS2V5UHJlc3NMaXN0ZW5lciIsImtleUNvZGUiLCJjYWxsYmFjayIsImtleVNhZmUiLCJrZXlkb3duRnVuY3Rpb24iLCJrZXl1cEZ1bmN0aW9uIiwidW5iaW5kIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNvbnN0YW50cyIsIk92ZXJXb3JsZCIsImVsZW1lbnQiLCJjYW52YXMiLCJxdWVyeVNlbGVjdG9yIiwiY3R4IiwiZ2V0Q29udGV4dCIsInN0YXJ0R2FtZUxvb3AiLCJzdGVwIiwiY2xlYXJSZWN0Iiwid2lkdGgiLCJoZWlnaHQiLCJjYW1lcmFQZXJzb24iLCJPYmplY3QiLCJ2YWx1ZXMiLCJmb3JFYWNoIiwib2JqIiwiYXJyb3ciLCJkaXJlY3Rpb25Db250cm9sbGVyIiwiZHJhd0xvd2VySW1hZ2UiLCJzb3J0IiwiYSIsImIiLCJkcmF3IiwiZHJhd1VwcGVySW1hZ2UiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJiaW5kQWN0aW9uSW5wdXQiLCJjaGVja0ZvckFjdGlvbkN1dHNjZW5lIiwiYmluZEhlcm9Qb3NpdGlvbkNoZWNrIiwiZGV0YWlsIiwid2hvSWQiLCJjaGVja0ZvckZvb3RzdGVwQ3V0c2NlbmUiLCJzdGFydE1hcCIsIm1hcENvbmZpZyIsIm92ZXJXb3JsZCIsIm1vdW50T2JqZWN0cyIsInN0YXJ0Q3V0U2NlbmUiLCJUZXh0TWVzc2FnZSIsIm9wcG9zaXRlRGlyZWN0aW9uIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzdGFuZCIsInN0YXJ0QmVoYXZpb3IiLCJjb21wbGV0ZUhhbmRsZXIiLCJ3YWxrIiwicmV0cnkiLCJ0ZXh0TWVzc2FnZSIsIm1lc3NhZ2UiLCJvbkNvbXBsZXRlIiwibWVzc2FnZUNvbnRhaW5lciIsImNoYW5nZU1hcCIsIm5leHRQb3NpdGlvbiIsImxvd2VyTGF5ZXIiLCJJbWFnZSIsInVwcGVyTGF5ZXIiLCJkcmF3SW1hZ2UiLCJpc1NwYWNlVGFrZW4iLCJjdXJYIiwiY3VyWSIsImtleXMiLCJrZXkiLCJvYmplY3QiLCJuZXh0Q29vcmQiLCJtYXRjaCIsImZpbmQiLCJpIiwicmVtb3ZlV2FsbCIsIm1vdmVXYWxsIiwid2FzWCIsIndhc1kiLCJlbWl0RXZlbnQiLCJtb3ZpbmdQcm9ncmVzc1JlbWFpbmlnIiwiZGlyZWN0aW9uVXBkYXRlIiwidXAiLCJkb3duIiwibGVmdCIsInJpZ2h0Iiwic3RhdGUiLCJ1cGRhdGVQb3NpdGlvbiIsInVwZGF0ZVNwcmludCIsImJlaGF2aW9yIiwicHJvcGVydHkiLCJjaGFuZ2UiLCJzZXRBbmltYXRpb24iLCJjYXBpdGFsaXplRmlyc3RMZXR0ZXIiLCJzdHJpbmciLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiUmV2ZWFsaW5nVGV4dCIsInNwZWVkIiwidGltZW91dCIsImlzRG9uZSIsImNoYXJhY3RlcnMiLCJzcGxpdCIsImNoYXIiLCJzcGFuIiwiY3JlYXRlRWxlbWVudCIsInRleHRDb250ZW50IiwiYXBwZW5kQ2hpbGQiLCJwdXNoIiwiZGVsYXlBZnRlciIsImltYWdlIiwiaW1hZ2VJc0xvYWRlZCIsInNoYWRvd0ltYWdlIiwic2hhZG93SW1hZ2VMb2FkZWQiLCJhbmltYXRpb25zIiwiaWRsZURvd24iLCJpZGxlUmlnaHQiLCJpZGxlVXAiLCJpZGxlTGVmdCIsIndhbGtEb3duIiwid2Fsa1JpZ2h0Iiwid2Fsa1VwIiwid2Fsa0xlZnQiLCJjdXJyZW50QW5pbWF0aW9uIiwiY3VycmVudEFuaW1hdGlvbkZyYW1lIiwiYW5pbWF0aW9uRnJhbWVQcm9ncmVzcyIsImZyYW1lIiwidXBkYXRlQW5pbWF0aW9uUHJvZ3Jlc3MiLCJmcmFtZVgiLCJmcmFtZVkiLCJjbGFzc0xpc3QiLCJhZGQiLCJpbm5lckhUTUwiLCJkb25lIiwicmV2ZWFsaW5nVGV4dCIsImFjdGlvbkxpc3RlbmVyIiwiYWN0aW9uU3BhY2VMaXN0ZW5lciIsInJlbW92ZSIsImNvbnRhaW5lciIsImNiIiwiaW1nIiwib25sb2FkIiwibiIsInNpemUiLCJuYW1lIiwiQ3VzdG9tRXZlbnQiLCJkaXNwYXRjaEV2ZW50Iiwid29scmQiXSwic291cmNlUm9vdCI6IiJ9