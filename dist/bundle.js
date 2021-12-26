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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPLElBQU1HLGlCQUFpQixHQUFHO0FBQy9CO0FBQ0Y7QUFDQTtBQUNFQyxFQUFBQSxRQUFRLEVBQUU7QUFDUkMsSUFBQUEsUUFBUSxFQUFFLG1DQURGO0FBRVJDLElBQUFBLFFBQVEsRUFBRSxtQ0FGRjtBQUdSQyxJQUFBQSxXQUFXLEVBQUU7QUFDWEMsTUFBQUEsSUFBSSxFQUFFLElBQUlSLG9EQUFKLENBQVc7QUFDZlMsUUFBQUEsa0JBQWtCLEVBQUUsSUFETDtBQUVmQyxRQUFBQSxDQUFDLEVBQUVSLHdEQUFTLENBQUMsQ0FBRCxDQUZHO0FBR2ZTLFFBQUFBLENBQUMsRUFBRVQsd0RBQVMsQ0FBQyxDQUFELENBSEc7QUFJZlUsUUFBQUEsR0FBRyxFQUFFO0FBSlUsT0FBWCxDQURLO0FBT1hDLE1BQUFBLElBQUksRUFBRSxJQUFJYixvREFBSixDQUFXO0FBQ2ZVLFFBQUFBLENBQUMsRUFBRVIsd0RBQVMsQ0FBQyxDQUFELENBREc7QUFFZlMsUUFBQUEsQ0FBQyxFQUFFVCx3REFBUyxDQUFDLENBQUQsQ0FGRztBQUdmVSxRQUFBQSxHQUFHLEVBQUUsNENBSFU7QUFJZkUsUUFBQUEsWUFBWSxFQUFFLENBQ1o7QUFBRUMsVUFBQUEsSUFBSSxFQUFFLE9BQVI7QUFBaUJDLFVBQUFBLFNBQVMsRUFBRSxNQUE1QjtBQUFvQ0MsVUFBQUEsSUFBSSxFQUFFO0FBQTFDLFNBRFksRUFFWjtBQUFFRixVQUFBQSxJQUFJLEVBQUUsT0FBUjtBQUFpQkMsVUFBQUEsU0FBUyxFQUFFLElBQTVCO0FBQWtDQyxVQUFBQSxJQUFJLEVBQUU7QUFBeEMsU0FGWSxFQUdaO0FBQUVGLFVBQUFBLElBQUksRUFBRSxPQUFSO0FBQWlCQyxVQUFBQSxTQUFTLEVBQUUsT0FBNUI7QUFBcUNDLFVBQUFBLElBQUksRUFBRTtBQUEzQyxTQUhZLEVBSVo7QUFBRUYsVUFBQUEsSUFBSSxFQUFFLE9BQVI7QUFBaUJDLFVBQUFBLFNBQVMsRUFBRSxJQUE1QjtBQUFrQ0MsVUFBQUEsSUFBSSxFQUFFO0FBQXhDLFNBSlksQ0FKQztBQVVmQyxRQUFBQSxPQUFPLEVBQUUsQ0FDUDtBQUNFQyxVQUFBQSxNQUFNLEVBQUUsQ0FDTjtBQUFFSixZQUFBQSxJQUFJLEVBQUUsYUFBUjtBQUF1QkssWUFBQUEsSUFBSSxFQUFFLFVBQTdCO0FBQXlDQyxZQUFBQSxRQUFRLEVBQUU7QUFBbkQsV0FETSxFQUVOO0FBQUVOLFlBQUFBLElBQUksRUFBRSxhQUFSO0FBQXVCSyxZQUFBQSxJQUFJLEVBQUU7QUFBN0IsV0FGTTtBQURWLFNBRE87QUFWTSxPQUFYLENBUEs7QUEwQlhFLE1BQUFBLElBQUksRUFBRSxJQUFJdEIsb0RBQUosQ0FBVztBQUNmVSxRQUFBQSxDQUFDLEVBQUVSLHdEQUFTLENBQUMsQ0FBRCxDQURHO0FBRWZTLFFBQUFBLENBQUMsRUFBRVQsd0RBQVMsQ0FBQyxDQUFELENBRkc7QUFHZlUsUUFBQUEsR0FBRyxFQUFFLDRDQUhVO0FBSWY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQU0sUUFBQUEsT0FBTyxFQUFFO0FBWE0sT0FBWDtBQTFCSyxLQUhMO0FBMkNSSyxJQUFBQSxLQUFLLEVBQUU7QUFDTCxPQUFDdEIsMERBQVcsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUFaLEdBQXFCLElBRGhCO0FBRUwsT0FBQ0EsMERBQVcsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUFaLEdBQXFCLElBRmhCO0FBR0wsT0FBQ0EsMERBQVcsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUFaLEdBQXFCLElBSGhCO0FBSUwsT0FBQ0EsMERBQVcsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUFaLEdBQXFCO0FBSmhCLEtBM0NDO0FBaURSdUIsSUFBQUEsY0FBYyxFQUFFO0FBQ2QsT0FBQ3ZCLDBEQUFXLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBWixHQUFxQixDQUNuQjtBQUNFa0IsUUFBQUEsTUFBTSxFQUFFLENBQ047QUFBRU0sVUFBQUEsR0FBRyxFQUFFLE1BQVA7QUFBZVYsVUFBQUEsSUFBSSxFQUFFLE1BQXJCO0FBQTZCQyxVQUFBQSxTQUFTLEVBQUU7QUFBeEMsU0FETSxFQUVOO0FBQUVTLFVBQUFBLEdBQUcsRUFBRSxNQUFQO0FBQWVWLFVBQUFBLElBQUksRUFBRSxPQUFyQjtBQUE4QkMsVUFBQUEsU0FBUyxFQUFFLElBQXpDO0FBQStDQyxVQUFBQSxJQUFJLEVBQUU7QUFBckQsU0FGTSxFQUdOO0FBQUVGLFVBQUFBLElBQUksRUFBRSxhQUFSO0FBQXVCSyxVQUFBQSxJQUFJLEVBQUU7QUFBN0IsU0FITSxFQUlOO0FBQUVLLFVBQUFBLEdBQUcsRUFBRSxNQUFQO0FBQWVWLFVBQUFBLElBQUksRUFBRSxNQUFyQjtBQUE2QkMsVUFBQUEsU0FBUyxFQUFFO0FBQXhDLFNBSk0sRUFLTjtBQUFFUyxVQUFBQSxHQUFHLEVBQUUsTUFBUDtBQUFlVixVQUFBQSxJQUFJLEVBQUUsT0FBckI7QUFBOEJDLFVBQUFBLFNBQVMsRUFBRTtBQUF6QyxTQUxNLEVBTU47QUFBRVMsVUFBQUEsR0FBRyxFQUFFLE1BQVA7QUFBZVYsVUFBQUEsSUFBSSxFQUFFLE1BQXJCO0FBQTZCQyxVQUFBQSxTQUFTLEVBQUU7QUFBeEMsU0FOTSxFQU9OO0FBQUVTLFVBQUFBLEdBQUcsRUFBRSxNQUFQO0FBQWVWLFVBQUFBLElBQUksRUFBRSxNQUFyQjtBQUE2QkMsVUFBQUEsU0FBUyxFQUFFO0FBQXhDLFNBUE07QUFEVixPQURtQixDQURQO0FBY2QsT0FBQ2YsMERBQVcsQ0FBQyxDQUFELEVBQUksRUFBSixDQUFaLEdBQXNCLENBQ3BCO0FBQ0VrQixRQUFBQSxNQUFNLEVBQUUsQ0FBQztBQUFFSixVQUFBQSxJQUFJLEVBQUUsV0FBUjtBQUFxQlcsVUFBQUEsR0FBRyxFQUFFO0FBQTFCLFNBQUQ7QUFEVixPQURvQjtBQWRSO0FBakRSLEdBSnFCO0FBMkUvQkMsRUFBQUEsT0FBTyxFQUFFO0FBQ1B0QixJQUFBQSxRQUFRLEVBQUUsc0NBREg7QUFFUEMsSUFBQUEsUUFBUSxFQUFFLHNDQUZIO0FBR1BDLElBQUFBLFdBQVcsRUFBRTtBQUNYQyxNQUFBQSxJQUFJLEVBQUUsSUFBSVIsb0RBQUosQ0FBVztBQUNmUyxRQUFBQSxrQkFBa0IsRUFBRSxJQURMO0FBRWZDLFFBQUFBLENBQUMsRUFBRVIsd0RBQVMsQ0FBQyxDQUFELENBRkc7QUFHZlMsUUFBQUEsQ0FBQyxFQUFFVCx3REFBUyxDQUFDLENBQUQ7QUFIRyxPQUFYLENBREs7QUFNWDBCLE1BQUFBLElBQUksRUFBRSxJQUFJNUIsb0RBQUosQ0FBVztBQUNmVSxRQUFBQSxDQUFDLEVBQUVSLHdEQUFTLENBQUMsRUFBRCxDQURHO0FBRWZTLFFBQUFBLENBQUMsRUFBRVQsd0RBQVMsQ0FBQyxDQUFELENBRkc7QUFHZlUsUUFBQUEsR0FBRyxFQUFFLDRDQUhVO0FBSWZNLFFBQUFBLE9BQU8sRUFBRSxDQUNQO0FBQ0VDLFVBQUFBLE1BQU0sRUFBRSxDQUNOO0FBQUVKLFlBQUFBLElBQUksRUFBRSxhQUFSO0FBQXVCSyxZQUFBQSxJQUFJLEVBQUUsZUFBN0I7QUFBOENDLFlBQUFBLFFBQVEsRUFBRTtBQUF4RCxXQURNO0FBRFYsU0FETztBQUpNLE9BQVg7QUFOSztBQUhOO0FBM0VzQixDQUExQjs7Ozs7Ozs7Ozs7Ozs7QUNUUCxpRUFBZTtBQUNiUSxFQUFBQSxVQUFVLEVBQUUsRUFEQztBQUViQyxFQUFBQSxjQUFjLEVBQUUsRUFGSDtBQUdiQyxFQUFBQSxjQUFjLEVBQUUsRUFISDtBQUliQyxFQUFBQSxtQkFBbUIsRUFBRSxDQUpSO0FBTWJiLEVBQUFBLE1BQU0sRUFBRTtBQUNOYyxJQUFBQSxxQkFBcUIsRUFBRSx1QkFEakI7QUFFTkMsSUFBQUEsbUJBQW1CLEVBQUU7QUFGZjtBQU5LLENBQWY7Ozs7Ozs7Ozs7Ozs7O0FDQUEsTUFBTUMsY0FBTixDQUFxQjtBQUNuQkMsRUFBQUEsV0FBVyxHQUFHO0FBQ1osU0FBS0MsY0FBTCxHQUFzQixFQUF0QjtBQUNBLFNBQUtYLEdBQUwsR0FBVztBQUNUWSxNQUFBQSxPQUFPLEVBQUUsSUFEQTtBQUVUQyxNQUFBQSxJQUFJLEVBQUUsSUFGRztBQUdUQyxNQUFBQSxTQUFTLEVBQUUsTUFIRjtBQUlUQyxNQUFBQSxJQUFJLEVBQUUsTUFKRztBQUtUQyxNQUFBQSxTQUFTLEVBQUUsTUFMRjtBQU1UQyxNQUFBQSxJQUFJLEVBQUUsTUFORztBQU9UQyxNQUFBQSxVQUFVLEVBQUUsT0FQSDtBQVFUQyxNQUFBQSxJQUFJLEVBQUU7QUFSRyxLQUFYO0FBVUQ7O0FBRURDLEVBQUFBLElBQUksR0FBRztBQUNMQyxJQUFBQSxRQUFRLENBQUNDLGdCQUFULENBQTBCLFNBQTFCLEVBQXNDQyxDQUFELElBQU87QUFDMUMsVUFBTUMsR0FBRyxHQUFHLEtBQUt4QixHQUFMLENBQVN1QixDQUFDLENBQUNFLElBQVgsQ0FBWjs7QUFFQSxVQUFJRCxHQUFHLElBQUksS0FBS2IsY0FBTCxDQUFvQmUsT0FBcEIsQ0FBNEJGLEdBQTVCLE1BQXFDLENBQUMsQ0FBakQsRUFBb0Q7QUFDbEQsYUFBS2IsY0FBTCxDQUFvQmdCLE9BQXBCLENBQTRCSCxHQUE1QixFQURrRCxDQUVsRDtBQUNEO0FBQ0YsS0FQRDtBQVNBSCxJQUFBQSxRQUFRLENBQUNDLGdCQUFULENBQTBCLE9BQTFCLEVBQW9DQyxDQUFELElBQU87QUFDeEMsVUFBTUMsR0FBRyxHQUFHLEtBQUt4QixHQUFMLENBQVN1QixDQUFDLENBQUNFLElBQVgsQ0FBWjtBQUNBLFVBQU1HLEtBQUssR0FBRyxLQUFLakIsY0FBTCxDQUFvQmUsT0FBcEIsQ0FBNEJGLEdBQTVCLENBQWQ7O0FBQ0EsVUFBSUksS0FBSyxHQUFHLENBQUMsQ0FBYixFQUFnQjtBQUNkLGFBQUtqQixjQUFMLENBQW9Ca0IsTUFBcEIsQ0FBMkJELEtBQTNCLEVBQWtDLENBQWxDO0FBQ0Q7QUFDRixLQU5EO0FBT0Q7QUFFRDtBQUNGO0FBQ0E7OztBQUNlLE1BQVR0QyxTQUFTLEdBQUc7QUFDZCxXQUFPLEtBQUtxQixjQUFMLENBQW9CLENBQXBCLENBQVA7QUFDRDs7QUF2Q2tCOztBQTBDckIsaUVBQWVGLGNBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTXdCLFVBQU4sQ0FBaUI7QUFDZjtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNFdkIsRUFBQUEsV0FBVyxDQUFDd0IsTUFBRCxFQUFTO0FBQ2xCLFNBQUtDLEVBQUwsR0FBVUQsTUFBTSxDQUFDQyxFQUFQLEdBQVlELE1BQU0sQ0FBQ0MsRUFBbkIsR0FBd0IsSUFBbEM7QUFDQSxTQUFLQyxTQUFMLEdBQWlCLEtBQWpCO0FBQ0EsUUFBTUMsV0FBVyxHQUNmSCxNQUFNLENBQUNJLFNBQVAsS0FBcUIsSUFBckIsSUFBNkJKLE1BQU0sQ0FBQ0ksU0FBUCxLQUFxQkMsU0FBbEQsR0FDSUwsTUFBTSxDQUFDSSxTQURYLEdBRUksSUFITjtBQUlBLFNBQUt0RCxDQUFMLEdBQVNrRCxNQUFNLENBQUNsRCxDQUFQLElBQVksQ0FBckI7QUFDQSxTQUFLQyxDQUFMLEdBQVNpRCxNQUFNLENBQUNqRCxDQUFQLElBQVksQ0FBckI7QUFDQSxTQUFLSyxTQUFMLEdBQWlCNEMsTUFBTSxDQUFDNUMsU0FBUCxJQUFvQixNQUFyQztBQUNBLFNBQUtrRCxNQUFMLEdBQWMsSUFBSVIsK0NBQUosQ0FBVztBQUN2QlMsTUFBQUEsVUFBVSxFQUFFLElBRFc7QUFFdkJ2RCxNQUFBQSxHQUFHLEVBQUVnRCxNQUFNLENBQUNoRCxHQUZXO0FBR3ZCb0QsTUFBQUEsU0FBUyxFQUFFRCxXQUhZO0FBSXZCbEMsTUFBQUEsVUFBVSxFQUFFK0IsTUFBTSxDQUFDL0IsVUFBUCxHQUFvQitCLE1BQU0sQ0FBQy9CLFVBQTNCLEdBQXdDLEVBSjdCO0FBS3ZCdUMsTUFBQUEsZ0JBQWdCLEVBQUVSLE1BQU0sQ0FBQ1EsZ0JBQVAsR0FDZFIsTUFBTSxDQUFDUSxnQkFETyxHQUVkO0FBQUUxRCxRQUFBQSxDQUFDLEVBQUUsQ0FBTDtBQUFRQyxRQUFBQSxDQUFDLEVBQUU7QUFBWDtBQVBtQixLQUFYLENBQWQ7QUFVQSxTQUFLRyxZQUFMLEdBQW9COEMsTUFBTSxDQUFDOUMsWUFBUCxHQUFzQjhDLE1BQU0sQ0FBQzlDLFlBQTdCLEdBQTRDLEVBQWhFO0FBQ0EsU0FBS3VELGlCQUFMLEdBQXlCLENBQXpCO0FBRUEsU0FBS25ELE9BQUwsR0FBZTBDLE1BQU0sQ0FBQzFDLE9BQVAsSUFBa0IsRUFBakM7QUFDRDtBQUVEO0FBQ0Y7QUFDQTs7O0FBQ0VvRCxFQUFBQSxLQUFLLENBQUM1QyxHQUFELEVBQU07QUFDVCxTQUFLb0MsU0FBTCxHQUFpQixJQUFqQjtBQUNBcEMsSUFBQUEsR0FBRyxDQUFDNkMsT0FBSixDQUFZLEtBQUs3RCxDQUFqQixFQUFvQixLQUFLQyxDQUF6QjtBQUVBNkQsSUFBQUEsVUFBVSxDQUFDLE1BQU07QUFDZixXQUFLQyxlQUFMLENBQXFCL0MsR0FBckI7QUFDRCxLQUZTLENBQVY7QUFHRDs7QUFFRGdELEVBQUFBLE1BQU0sR0FBRyxDQUFFO0FBRVg7QUFDRjtBQUNBOzs7QUFDUUQsRUFBQUEsZUFBZSxDQUFDL0MsR0FBRCxFQUFNO0FBQUE7O0FBQUE7QUFDekIsVUFDRUEsR0FBRyxDQUFDaUQsaUJBQUosSUFDQSxLQUFJLENBQUM3RCxZQUFMLENBQWtCOEQsTUFBbEIsS0FBNkIsQ0FEN0IsSUFFQSxLQUFJLENBQUNDLFVBSFAsRUFJRTtBQUNBO0FBQ0Q7O0FBQ0QsVUFBSUMsS0FBSyxHQUFHLEtBQUksQ0FBQ2hFLFlBQUwsQ0FBa0IsS0FBSSxDQUFDdUQsaUJBQXZCLENBQVo7QUFDQVMsTUFBQUEsS0FBSyxDQUFDckQsR0FBTixHQUFZLEtBQUksQ0FBQ29DLEVBQWpCO0FBQ0EsVUFBTWtCLFlBQVksR0FBRyxJQUFJdkIsdURBQUosQ0FBbUI7QUFBRTlCLFFBQUFBLEdBQUcsRUFBRUEsR0FBUDtBQUFZb0QsUUFBQUEsS0FBSyxFQUFFQTtBQUFuQixPQUFuQixDQUFyQjtBQUNBLFlBQU1DLFlBQVksQ0FBQ2pDLElBQWIsRUFBTjtBQUNBLFdBQUksQ0FBQ3VCLGlCQUFMLElBQTBCLENBQTFCOztBQUNBLFVBQUksS0FBSSxDQUFDQSxpQkFBTCxLQUEyQixLQUFJLENBQUN2RCxZQUFMLENBQWtCOEQsTUFBakQsRUFBeUQ7QUFDdkQsYUFBSSxDQUFDUCxpQkFBTCxHQUF5QixDQUF6QjtBQUNEOztBQUNELFdBQUksQ0FBQ0ksZUFBTCxDQUFxQi9DLEdBQXJCO0FBaEJ5QjtBQWlCMUI7O0FBMUVjOztBQTZFakIsaUVBQWVpQyxVQUFmOzs7Ozs7Ozs7Ozs7OztBQ2pGQSxNQUFNcUIsZ0JBQU4sQ0FBdUI7QUFDckI7QUFDRjtBQUNBO0FBQ0E7QUFDRTVDLEVBQUFBLFdBQVcsQ0FBQzZDLE9BQUQsRUFBVUMsUUFBVixFQUFvQjtBQUM3QixRQUFJQyxPQUFPLEdBQUcsSUFBZDs7QUFDQSxTQUFLQyxlQUFMLEdBQXdCTixLQUFELElBQVc7QUFDaEMsVUFBSUEsS0FBSyxDQUFDM0IsSUFBTixLQUFlOEIsT0FBbkIsRUFBNEI7QUFDMUIsWUFBSUUsT0FBSixFQUFhO0FBQ1hBLFVBQUFBLE9BQU8sR0FBRyxLQUFWO0FBQ0FELFVBQUFBLFFBQVE7QUFDVDtBQUNGO0FBQ0YsS0FQRDs7QUFTQSxTQUFLRyxhQUFMLEdBQXNCUCxLQUFELElBQVc7QUFDOUIsVUFBSUEsS0FBSyxDQUFDM0IsSUFBTixLQUFlOEIsT0FBbkIsRUFBNEI7QUFDMUJFLFFBQUFBLE9BQU8sR0FBRyxJQUFWO0FBQ0Q7QUFDRixLQUpEOztBQU1BcEMsSUFBQUEsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixTQUExQixFQUFxQyxLQUFLb0MsZUFBMUM7QUFDQXJDLElBQUFBLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUMsS0FBS3FDLGFBQXhDO0FBQ0Q7O0FBRURDLEVBQUFBLE1BQU0sR0FBRztBQUNQdkMsSUFBQUEsUUFBUSxDQUFDd0MsbUJBQVQsQ0FBNkIsU0FBN0IsRUFBd0MsS0FBS0gsZUFBN0M7QUFDQXJDLElBQUFBLFFBQVEsQ0FBQ3dDLG1CQUFULENBQTZCLE9BQTdCLEVBQXNDLEtBQUtGLGFBQTNDO0FBQ0Q7O0FBN0JvQjs7QUFnQ3ZCLGlFQUFlTCxnQkFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1TLFNBQU4sQ0FBZ0I7QUFDZDtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0VyRCxFQUFBQSxXQUFXLENBQUN3QixNQUFELEVBQVM7QUFDbEIsUUFBTTtBQUFFOEIsTUFBQUE7QUFBRixRQUFjOUIsTUFBcEI7QUFDQSxTQUFLOEIsT0FBTCxHQUFlQSxPQUFmO0FBRUE7QUFDSjtBQUNBOztBQUNJLFNBQUtDLE1BQUwsR0FBYyxLQUFLRCxPQUFMLENBQWFFLGFBQWIsQ0FBMkIsY0FBM0IsQ0FBZCxDQVBrQixDQU93Qzs7QUFFMUQsU0FBS0MsR0FBTCxHQUFXLEtBQUtGLE1BQUwsQ0FBWUcsVUFBWixDQUF1QixJQUF2QixDQUFYO0FBRUE7QUFDSjtBQUNBOztBQUNJLFNBQUtwRSxHQUFMLEdBQVcsSUFBWDtBQUNEOztBQUVEcUUsRUFBQUEsYUFBYSxHQUFHO0FBQ2QsUUFBTUMsSUFBSSxHQUFHLE1BQU07QUFDakI7QUFDQSxXQUFLSCxHQUFMLENBQVNJLFNBQVQsQ0FBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsS0FBS04sTUFBTCxDQUFZTyxLQUFyQyxFQUE0QyxLQUFLUCxNQUFMLENBQVlRLE1BQXhELEVBRmlCLENBSWpCOztBQUNBLFVBQU1DLFlBQVksR0FBRyxLQUFLMUUsR0FBTCxDQUFTbkIsV0FBVCxDQUFxQkMsSUFBMUMsQ0FMaUIsQ0FPakI7O0FBQ0E2RixNQUFBQSxNQUFNLENBQUNDLE1BQVAsQ0FBYyxLQUFLNUUsR0FBTCxDQUFTbkIsV0FBdkIsRUFBb0NnRyxPQUFwQztBQUNFO0FBQ1I7QUFDQTtBQUNTQyxNQUFBQSxHQUFELElBQVM7QUFDUEEsUUFBQUEsR0FBRyxDQUFDOUIsTUFBSixDQUFXO0FBQ1QrQixVQUFBQSxLQUFLLEVBQUUsS0FBS0MsbUJBQUwsQ0FBeUIxRixTQUR2QjtBQUVUVSxVQUFBQSxHQUFHLEVBQUUsS0FBS0E7QUFGRCxTQUFYO0FBSUQsT0FUSCxFQVJpQixDQW9CakI7O0FBQ0EsV0FBS0EsR0FBTCxDQUFTaUYsY0FBVCxDQUF3QixLQUFLZCxHQUE3QixFQUFrQ08sWUFBbEMsRUFyQmlCLENBdUJqQjs7QUFDQUMsTUFBQUEsTUFBTSxDQUFDQyxNQUFQLENBQWMsS0FBSzVFLEdBQUwsQ0FBU25CLFdBQXZCLEVBQ0dxRyxJQURILENBQ1EsQ0FBQ0MsQ0FBRCxFQUFJQyxDQUFKLEtBQVU7QUFDZCxlQUFPRCxDQUFDLENBQUNsRyxDQUFGLEdBQU1tRyxDQUFDLENBQUNuRyxDQUFmO0FBQ0QsT0FISCxFQUlHNEYsT0FKSDtBQUtJO0FBQ1Y7QUFDQTtBQUNXQyxNQUFBQSxHQUFELElBQVM7QUFDUEEsUUFBQUEsR0FBRyxDQUFDdEMsTUFBSixDQUFXNkMsSUFBWCxDQUFnQixLQUFLbEIsR0FBckIsRUFBMEJPLFlBQTFCO0FBQ0QsT0FWTDtBQWFBLFdBQUsxRSxHQUFMLENBQVNzRixjQUFULENBQXdCLEtBQUtuQixHQUE3QixFQUFrQ08sWUFBbEM7QUFFQWEsTUFBQUEscUJBQXFCLENBQUMsTUFBTTtBQUMxQmpCLFFBQUFBLElBQUk7QUFDTCxPQUZvQixDQUFyQjtBQUdELEtBMUNEOztBQTRDQUEsSUFBQUEsSUFBSTtBQUNMOztBQUVEa0IsRUFBQUEsZUFBZSxHQUFHO0FBQ2hCLFFBQUlsQyx5REFBSixDQUFxQixPQUFyQixFQUE4QixNQUFNO0FBQ2xDLFdBQUt0RCxHQUFMLENBQVN5RixzQkFBVDtBQUNELEtBRkQ7QUFHQSxRQUFJbkMseURBQUosQ0FBcUIsT0FBckIsRUFBOEIsTUFBTTtBQUNsQyxXQUFLdEQsR0FBTCxDQUFTeUYsc0JBQVQ7QUFDRCxLQUZEO0FBR0Q7O0FBRURDLEVBQUFBLHFCQUFxQixHQUFHO0FBQ3RCckUsSUFBQUEsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQndDLG9GQUExQixFQUFtRXZDLENBQUQsSUFBTztBQUN2RSxVQUFJQSxDQUFDLENBQUNvRSxNQUFGLENBQVNDLEtBQVQsS0FBbUIsTUFBdkIsRUFBK0I7QUFDN0IsYUFBSzVGLEdBQUwsQ0FBUzZGLHdCQUFUO0FBQ0Q7QUFDRixLQUpEO0FBS0Q7O0FBRURDLEVBQUFBLFFBQVEsQ0FBQ0MsU0FBRCxFQUFZO0FBQ2xCLFNBQUsvRixHQUFMLEdBQVcsSUFBSStCLHFEQUFKLENBQWlCZ0UsU0FBakIsQ0FBWDtBQUNBLFNBQUsvRixHQUFMLENBQVNnRyxTQUFULEdBQXFCLElBQXJCO0FBQ0EsU0FBS2hHLEdBQUwsQ0FBU2lHLFlBQVQ7QUFDRDs7QUFFRDdFLEVBQUFBLElBQUksR0FBRztBQUNMLFNBQUswRSxRQUFMLENBQWNySCx3RUFBZDtBQUNBLFNBQUsrRyxlQUFMO0FBQ0EsU0FBS0UscUJBQUw7QUFFQSxTQUFLVixtQkFBTCxHQUEyQixJQUFJdkUsdURBQUosRUFBM0I7QUFDQSxTQUFLdUUsbUJBQUwsQ0FBeUI1RCxJQUF6QixHQU5LLENBUUw7O0FBQ0EsU0FBS2lELGFBQUwsR0FUSyxDQVdMOztBQUNBLFNBQUtyRSxHQUFMLENBQVNrRyxhQUFULENBQXVCLENBQ3JCO0FBQUU3RyxNQUFBQSxJQUFJLEVBQUUsYUFBUjtBQUF1QkssTUFBQUEsSUFBSSxFQUFFO0FBQTdCLEtBRHFCLENBQXZCO0FBR0Q7O0FBN0dhOztBQWdIaEIsaUVBQWVxRSxTQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTWpDLGNBQU4sQ0FBcUI7QUFDbkI7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0VwQixFQUFBQSxXQUFXLENBQUN3QixNQUFELEVBQVM7QUFDbEIsUUFBTTtBQUFFbEMsTUFBQUEsR0FBRjtBQUFPb0QsTUFBQUE7QUFBUCxRQUFpQmxCLE1BQXZCO0FBQ0EsU0FBS2xDLEdBQUwsR0FBV0EsR0FBWDtBQUNBLFNBQUtvRCxLQUFMLEdBQWFBLEtBQWI7QUFDRDtBQUVEO0FBQ0Y7QUFDQTs7O0FBQ0VoQyxFQUFBQSxJQUFJLEdBQUc7QUFDTCxXQUFPLElBQUlpRixPQUFKLENBQWFDLE9BQUQsSUFBYTtBQUM5QixXQUFLLEtBQUtsRCxLQUFMLENBQVcvRCxJQUFoQixFQUFzQmlILE9BQXRCO0FBQ0QsS0FGTSxDQUFQO0FBR0Q7O0FBRURDLEVBQUFBLEtBQUssQ0FBQ0QsT0FBRCxFQUFVO0FBQ2IsUUFBTXZHLEdBQUcsR0FBRyxLQUFLQyxHQUFMLENBQVNuQixXQUFULENBQXFCLEtBQUt1RSxLQUFMLENBQVdyRCxHQUFoQyxDQUFaO0FBQ0FBLElBQUFBLEdBQUcsQ0FBQ3lHLGFBQUosQ0FDRTtBQUNFeEcsTUFBQUEsR0FBRyxFQUFFLEtBQUtBO0FBRFosS0FERixFQUlFO0FBQ0VYLE1BQUFBLElBQUksRUFBRSxPQURSO0FBRUVDLE1BQUFBLFNBQVMsRUFBRSxLQUFLOEQsS0FBTCxDQUFXOUQsU0FGeEI7QUFHRUMsTUFBQUEsSUFBSSxFQUFFLEtBQUs2RCxLQUFMLENBQVc3RDtBQUhuQixLQUpGOztBQVdBLFFBQU1rSCxlQUFlLEdBQUlsRixDQUFELElBQU87QUFDN0IsVUFBSUEsQ0FBQyxDQUFDb0UsTUFBRixDQUFTQyxLQUFULEtBQW1CLEtBQUt4QyxLQUFMLENBQVdyRCxHQUFsQyxFQUF1QztBQUNyQ3NCLFFBQUFBLFFBQVEsQ0FBQ3dDLG1CQUFULENBQ0VDLGtGQURGLEVBRUUyQyxlQUZGO0FBSUFILFFBQUFBLE9BQU87QUFDUjtBQUNGLEtBUkQ7O0FBVUFqRixJQUFBQSxRQUFRLENBQUNDLGdCQUFULENBQ0V3QyxrRkFERixFQUVFMkMsZUFGRjtBQUlEOztBQUVEQyxFQUFBQSxJQUFJLENBQUNKLE9BQUQsRUFBVTtBQUNaLFFBQU12RyxHQUFHLEdBQUcsS0FBS0MsR0FBTCxDQUFTbkIsV0FBVCxDQUFxQixLQUFLdUUsS0FBTCxDQUFXckQsR0FBaEMsQ0FBWjtBQUNBQSxJQUFBQSxHQUFHLENBQUN5RyxhQUFKLENBQ0U7QUFDRXhHLE1BQUFBLEdBQUcsRUFBRSxLQUFLQTtBQURaLEtBREYsRUFJRTtBQUNFWCxNQUFBQSxJQUFJLEVBQUUsTUFEUjtBQUVFQyxNQUFBQSxTQUFTLEVBQUUsS0FBSzhELEtBQUwsQ0FBVzlELFNBRnhCO0FBR0VxSCxNQUFBQSxLQUFLLEVBQUU7QUFIVCxLQUpGOztBQVdBLFFBQU1GLGVBQWUsR0FBSWxGLENBQUQsSUFBTztBQUM3QixVQUFJQSxDQUFDLENBQUNvRSxNQUFGLENBQVNDLEtBQVQsS0FBbUIsS0FBS3hDLEtBQUwsQ0FBV3JELEdBQWxDLEVBQXVDO0FBQ3JDc0IsUUFBQUEsUUFBUSxDQUFDd0MsbUJBQVQsQ0FDRUMsb0ZBREYsRUFFRTJDLGVBRkY7QUFJQUgsUUFBQUEsT0FBTztBQUNSO0FBQ0YsS0FSRDs7QUFVQWpGLElBQUFBLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FDRXdDLG9GQURGLEVBRUUyQyxlQUZGO0FBSUQ7O0FBRURHLEVBQUFBLFdBQVcsQ0FBQ04sT0FBRCxFQUFVO0FBQ25CLFFBQUksS0FBS2xELEtBQUwsQ0FBV3pELFFBQWYsRUFBeUI7QUFDdkIsVUFBTW1GLEdBQUcsR0FBRyxLQUFLOUUsR0FBTCxDQUFTbkIsV0FBVCxDQUFxQixLQUFLdUUsS0FBTCxDQUFXekQsUUFBaEMsQ0FBWjtBQUNBbUYsTUFBQUEsR0FBRyxDQUFDeEYsU0FBSixHQUFnQjhHLGdFQUFpQixDQUFDLEtBQUtwRyxHQUFMLENBQVNuQixXQUFULENBQXFCLE1BQXJCLEVBQTZCUyxTQUE5QixDQUFqQztBQUNEOztBQUVELFFBQU11SCxPQUFPLEdBQUcsSUFBSVYsb0RBQUosQ0FBZ0I7QUFDOUJ6RyxNQUFBQSxJQUFJLEVBQUUsS0FBSzBELEtBQUwsQ0FBVzFELElBRGE7QUFFOUJvSCxNQUFBQSxVQUFVLEVBQUUsTUFBTVIsT0FBTztBQUZLLEtBQWhCLENBQWhCO0FBS0EsUUFBTVMsZ0JBQWdCLEdBQUcxRixRQUFRLENBQUM2QyxhQUFULENBQXVCLGlCQUF2QixDQUF6QjtBQUNBMkMsSUFBQUEsT0FBTyxDQUFDekYsSUFBUixDQUFhMkYsZ0JBQWI7QUFDRDs7QUFFREMsRUFBQUEsU0FBUyxDQUFDVixPQUFELEVBQVU7QUFDakIsU0FBS3RHLEdBQUwsQ0FBU2dHLFNBQVQsQ0FBbUJGLFFBQW5CLENBQTRCckgsK0RBQWlCLENBQUMsS0FBSzJFLEtBQUwsQ0FBV3BELEdBQVosQ0FBN0M7QUFDQXNHLElBQUFBLE9BQU87QUFDUjs7QUF4R2tCOztBQTJHckIsaUVBQWV4RSxjQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakhBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUNBLE1BQU1DLFlBQU4sQ0FBbUI7QUFDakI7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNFckIsRUFBQUEsV0FBVyxDQUFDd0IsTUFBRCxFQUFTO0FBQ2xCO0FBQ0o7QUFDQTtBQUNJLFNBQUs4RCxTQUFMLEdBQWlCLElBQWpCO0FBQ0EsU0FBS25ILFdBQUwsR0FBbUJxRCxNQUFNLENBQUNyRCxXQUExQjtBQUNBLFNBQUtnQixLQUFMLEdBQWFxQyxNQUFNLENBQUNyQyxLQUFQLElBQWdCLEVBQTdCO0FBQ0EsU0FBS0MsY0FBTCxHQUFzQm9DLE1BQU0sQ0FBQ3BDLGNBQVAsSUFBeUIsRUFBL0M7QUFFQSxTQUFLb0gsVUFBTCxHQUFrQixJQUFJQyxLQUFKLEVBQWxCO0FBQ0EsU0FBS0QsVUFBTCxDQUFnQmhJLEdBQWhCLEdBQXNCZ0QsTUFBTSxDQUFDdkQsUUFBN0I7QUFFQSxTQUFLeUksVUFBTCxHQUFrQixJQUFJRCxLQUFKLEVBQWxCO0FBQ0EsU0FBS0MsVUFBTCxDQUFnQmxJLEdBQWhCLEdBQXNCZ0QsTUFBTSxDQUFDdEQsUUFBN0I7QUFFQSxTQUFLcUUsaUJBQUwsR0FBeUIsS0FBekI7QUFDRDtBQUVEO0FBQ0Y7QUFDQTtBQUNBOzs7QUFDRWdDLEVBQUFBLGNBQWMsQ0FBQ2QsR0FBRCxFQUFNTyxZQUFOLEVBQW9CO0FBQ2hDUCxJQUFBQSxHQUFHLENBQUNrRCxTQUFKLENBQ0UsS0FBS0gsVUFEUCxFQUVFMUksd0RBQVMsQ0FBQyxJQUFELENBQVQsR0FBa0JrRyxZQUFZLENBQUMxRixDQUZqQyxFQUdFUix3REFBUyxDQUFDLENBQUQsQ0FBVCxHQUFla0csWUFBWSxDQUFDekYsQ0FIOUI7QUFLRDtBQUVEO0FBQ0Y7QUFDQTtBQUNBOzs7QUFDRXFHLEVBQUFBLGNBQWMsQ0FBQ25CLEdBQUQsRUFBTU8sWUFBTixFQUFvQjtBQUNoQ1AsSUFBQUEsR0FBRyxDQUFDa0QsU0FBSixDQUNFLEtBQUtELFVBRFAsRUFFRTVJLHdEQUFTLENBQUMsSUFBRCxDQUFULEdBQWtCa0csWUFBWSxDQUFDMUYsQ0FGakMsRUFHRVIsd0RBQVMsQ0FBQyxDQUFELENBQVQsR0FBZWtHLFlBQVksQ0FBQ3pGLENBSDlCO0FBS0Q7QUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBOzs7QUFDRXFJLEVBQUFBLFlBQVksQ0FBQ0MsSUFBRCxFQUFPQyxJQUFQLEVBQWFsSSxTQUFiLEVBQXdCO0FBQ2xDLFFBQU07QUFBRU4sTUFBQUEsQ0FBRjtBQUFLQyxNQUFBQTtBQUFMLFFBQVdnSSwyREFBWSxDQUFDTSxJQUFELEVBQU9DLElBQVAsRUFBYWxJLFNBQWIsQ0FBN0I7QUFDQSxXQUFPLEtBQUtPLEtBQUwsV0FBY2IsQ0FBZCxjQUFtQkMsQ0FBbkIsTUFBMkIsS0FBbEM7QUFDRCxHQTNEZ0IsQ0E2RGpCOzs7QUFDQWdILEVBQUFBLFlBQVksR0FBRztBQUNiO0FBQ0E7QUFDQTtBQUVBdEIsSUFBQUEsTUFBTSxDQUFDOEMsSUFBUCxDQUFZLEtBQUs1SSxXQUFqQixFQUE4Qm1CLEdBQTlCLENBQW1DMEgsR0FBRCxJQUFTO0FBQ3pDLFVBQUlDLE1BQU0sR0FBRyxLQUFLOUksV0FBTCxDQUFpQjZJLEdBQWpCLENBQWI7QUFDQUMsTUFBQUEsTUFBTSxDQUFDeEYsRUFBUCxHQUFZdUYsR0FBWjtBQUNBQyxNQUFBQSxNQUFNLENBQUMvRSxLQUFQLENBQWEsSUFBYjtBQUNELEtBSkQ7QUFLRCxHQXhFZ0IsQ0EwRWpCOzs7QUFFQTZDLEVBQUFBLHNCQUFzQixHQUFHO0FBQ3ZCLFFBQU0zRyxJQUFJLEdBQUcsS0FBS0QsV0FBTCxDQUFpQixNQUFqQixDQUFiO0FBQ0EsUUFBTStJLFNBQVMsR0FBR1gsMkRBQVksQ0FBQ25JLElBQUksQ0FBQ0UsQ0FBTixFQUFTRixJQUFJLENBQUNHLENBQWQsRUFBaUJILElBQUksQ0FBQ1EsU0FBdEIsQ0FBOUI7QUFDQSxRQUFNdUksS0FBSyxHQUFHbEQsTUFBTSxDQUFDQyxNQUFQLENBQWMsS0FBSy9GLFdBQW5CLEVBQWdDaUosSUFBaEMsQ0FBc0NILE1BQUQsSUFBWTtBQUM3RCxhQUFPLFVBQUdBLE1BQU0sQ0FBQzNJLENBQVYsY0FBZTJJLE1BQU0sQ0FBQzFJLENBQXRCLGdCQUFpQzJJLFNBQVMsQ0FBQzVJLENBQTNDLGNBQWdENEksU0FBUyxDQUFDM0ksQ0FBMUQsQ0FBUDtBQUNELEtBRmEsQ0FBZDs7QUFJQSxRQUFJLENBQUMsS0FBS2dFLGlCQUFOLElBQTJCNEUsS0FBM0IsSUFBb0NBLEtBQUssQ0FBQ3JJLE9BQU4sQ0FBYzBELE1BQXRELEVBQThEO0FBQzVELFdBQUtnRCxhQUFMLENBQW1CMkIsS0FBSyxDQUFDckksT0FBTixDQUFjLENBQWQsRUFBaUJDLE1BQXBDO0FBQ0Q7QUFDRjs7QUFFRG9HLEVBQUFBLHdCQUF3QixHQUFHO0FBQ3pCLFFBQU0vRyxJQUFJLEdBQUcsS0FBS0QsV0FBTCxDQUFpQixNQUFqQixDQUFiO0FBQ0EsUUFBTWdKLEtBQUssR0FBRyxLQUFLL0gsY0FBTCxXQUF1QmhCLElBQUksQ0FBQ0UsQ0FBNUIsY0FBaUNGLElBQUksQ0FBQ0csQ0FBdEMsRUFBZDs7QUFDQSxRQUFJLENBQUMsS0FBS2dFLGlCQUFOLElBQTJCNEUsS0FBL0IsRUFBc0M7QUFDcEMsV0FBSzNCLGFBQUwsQ0FBbUIyQixLQUFLLENBQUMsQ0FBRCxDQUFMLENBQVNwSSxNQUE1QjtBQUNEO0FBQ0Y7O0FBRUt5RyxFQUFBQSxhQUFhLENBQUN6RyxNQUFELEVBQVM7QUFBQTs7QUFBQTtBQUMxQixXQUFJLENBQUN3RCxpQkFBTCxHQUF5QixJQUF6Qjs7QUFDQSxXQUFLLElBQUk4RSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHdEksTUFBTSxDQUFDeUQsTUFBM0IsRUFBbUM2RSxDQUFDLEVBQXBDLEVBQXdDO0FBQ3RDLFlBQU0xRSxZQUFZLEdBQUcsSUFBSXZCLHVEQUFKLENBQW1CO0FBQ3RDc0IsVUFBQUEsS0FBSyxFQUFFM0QsTUFBTSxDQUFDc0ksQ0FBRCxDQUR5QjtBQUV0Qy9ILFVBQUFBLEdBQUcsRUFBRTtBQUZpQyxTQUFuQixDQUFyQjtBQUtBLGNBQU1xRCxZQUFZLENBQUNqQyxJQUFiLEVBQU47QUFDRDs7QUFFRHVELE1BQUFBLE1BQU0sQ0FBQzhDLElBQVAsQ0FBWSxLQUFJLENBQUM1SSxXQUFqQixFQUE4Qm1CLEdBQTlCLENBQW1DMEgsR0FBRCxJQUFTO0FBQ3pDLFlBQUlDLE1BQU0sR0FBRyxLQUFJLENBQUM5SSxXQUFMLENBQWlCNkksR0FBakIsQ0FBYjtBQUNBQyxRQUFBQSxNQUFNLENBQUN4RixFQUFQLEdBQVl1RixHQUFaO0FBQ0FDLFFBQUFBLE1BQU0sQ0FBQy9FLEtBQVAsQ0FBYSxLQUFiO0FBQ0QsT0FKRDtBQUtBLFdBQUksQ0FBQ0ssaUJBQUwsR0FBeUIsS0FBekI7QUFoQjBCO0FBaUIzQixHQWpIZ0IsQ0FtSGpCOzs7QUFDQUosRUFBQUEsT0FBTyxDQUFDN0QsQ0FBRCxFQUFJQyxDQUFKLEVBQU87QUFDWixTQUFLWSxLQUFMLFdBQWNiLENBQWQsY0FBbUJDLENBQW5CLEtBQTBCLElBQTFCO0FBQ0Q7O0FBRUQrSSxFQUFBQSxVQUFVLENBQUNoSixDQUFELEVBQUlDLENBQUosRUFBTztBQUNmLFdBQU8sS0FBS1ksS0FBTCxXQUFjYixDQUFkLGNBQW1CQyxDQUFuQixFQUFQO0FBQ0Q7QUFDRDtBQUNGO0FBQ0E7QUFDQTs7O0FBQ0VnSixFQUFBQSxRQUFRLENBQUNDLElBQUQsRUFBT0MsSUFBUCxFQUFhN0ksU0FBYixFQUF3QjtBQUM5QixTQUFLMEksVUFBTCxDQUFnQkUsSUFBaEIsRUFBc0JDLElBQXRCO0FBQ0EsUUFBTTtBQUFFbkosTUFBQUEsQ0FBRjtBQUFLQyxNQUFBQTtBQUFMLFFBQVdnSSwyREFBWSxDQUFDaUIsSUFBRCxFQUFPQyxJQUFQLEVBQWE3SSxTQUFiLENBQTdCO0FBQ0EsU0FBS3VELE9BQUwsQ0FBYTdELENBQWIsRUFBZ0JDLENBQWhCO0FBQ0Q7O0FBbklnQjs7QUFzSW5CLGlFQUFlOEMsWUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFDQSxNQUFNekQsTUFBTixTQUFxQjJELG1EQUFyQixDQUFnQztBQUM5QjtBQUNGO0FBQ0E7QUFDRXZCLEVBQUFBLFdBQVcsQ0FBQ3dCLE1BQUQsRUFBUztBQUNsQixVQUFNQSxNQUFOO0FBRUEsU0FBS21HLHNCQUFMLEdBQThCLENBQTlCO0FBRUEsU0FBS3RKLGtCQUFMLEdBQTBCbUQsTUFBTSxDQUFDbkQsa0JBQVAsSUFBNkIsS0FBdkQ7QUFFQSxTQUFLb0UsVUFBTCxHQUFrQixLQUFsQjtBQUVBLFNBQUttRixlQUFMLEdBQXVCO0FBQ3JCQyxNQUFBQSxFQUFFLEVBQUUsQ0FBQyxHQUFELEVBQU0sQ0FBQyxDQUFQLENBRGlCO0FBRXJCQyxNQUFBQSxJQUFJLEVBQUUsQ0FBQyxHQUFELEVBQU0sQ0FBTixDQUZlO0FBR3JCQyxNQUFBQSxJQUFJLEVBQUUsQ0FBQyxHQUFELEVBQU0sQ0FBQyxDQUFQLENBSGU7QUFJckJDLE1BQUFBLEtBQUssRUFBRSxDQUFDLEdBQUQsRUFBTSxDQUFOO0FBSmMsS0FBdkI7QUFNRDtBQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7OztBQUNFMUYsRUFBQUEsTUFBTSxDQUFDMkYsS0FBRCxFQUFRO0FBQ1osUUFBSSxLQUFLTixzQkFBTCxHQUE4QixDQUFsQyxFQUFxQztBQUNuQyxXQUFLTyxjQUFMO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsVUFDRSxLQUFLN0osa0JBQUwsSUFDQSxDQUFDNEosS0FBSyxDQUFDM0ksR0FBTixDQUFVaUQsaUJBRFgsSUFFQTBGLEtBQUssQ0FBQzVELEtBSFIsRUFJRTtBQUNBLGFBQUt5QixhQUFMLENBQW1CbUMsS0FBbkIsRUFBMEI7QUFDeEJ0SixVQUFBQSxJQUFJLEVBQUUsTUFEa0I7QUFFeEJDLFVBQUFBLFNBQVMsRUFBRXFKLEtBQUssQ0FBQzVEO0FBRk8sU0FBMUI7QUFJRDs7QUFFRCxXQUFLOEQsWUFBTCxDQUFrQkYsS0FBbEI7QUFDRDtBQUNGO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDRW5DLEVBQUFBLGFBQWEsQ0FBQ21DLEtBQUQsRUFBUUcsUUFBUixFQUFrQjtBQUM3QixTQUFLeEosU0FBTCxHQUFpQndKLFFBQVEsQ0FBQ3hKLFNBQTFCOztBQUVBLFFBQUl3SixRQUFRLENBQUN6SixJQUFULEtBQWtCLE1BQXRCLEVBQThCO0FBQzVCLFVBQU1pSSxZQUFZLEdBQUdxQixLQUFLLENBQUMzSSxHQUFOLENBQVVzSCxZQUFWLENBQ25CLEtBQUt0SSxDQURjLEVBRW5CLEtBQUtDLENBRmMsRUFHbkIsS0FBS0ssU0FIYyxDQUFyQjs7QUFLQSxVQUFJZ0ksWUFBSixFQUFrQjtBQUNoQndCLFFBQUFBLFFBQVEsQ0FBQ25DLEtBQVQsSUFDRTdELFVBQVUsQ0FBQyxNQUFNO0FBQ2YsZUFBSzBELGFBQUwsQ0FBbUJtQyxLQUFuQixFQUEwQkcsUUFBMUI7QUFDRCxTQUZTLEVBRVAsRUFGTyxDQURaO0FBSUE7QUFDRDs7QUFDREgsTUFBQUEsS0FBSyxDQUFDM0ksR0FBTixDQUFVaUksUUFBVixDQUFtQixLQUFLakosQ0FBeEIsRUFBMkIsS0FBS0MsQ0FBaEMsRUFBbUMsS0FBS0ssU0FBeEM7QUFDQSxXQUFLK0ksc0JBQUwsR0FBOEJ2RSxzRUFBOUI7QUFDQSxXQUFLK0UsWUFBTCxDQUFrQkYsS0FBbEI7QUFDRDs7QUFFRCxRQUFJRyxRQUFRLENBQUN6SixJQUFULEtBQWtCLE9BQXRCLEVBQStCO0FBQzdCLFdBQUs4RCxVQUFMLEdBQWtCLElBQWxCO0FBQ0FMLE1BQUFBLFVBQVUsQ0FBQyxNQUFNO0FBQ2ZzRixRQUFBQSx3REFBUyxDQUFDdEUsa0ZBQUQsRUFBdUM7QUFBRThCLFVBQUFBLEtBQUssRUFBRSxLQUFLekQ7QUFBZCxTQUF2QyxDQUFUO0FBQ0EsYUFBS2dCLFVBQUwsR0FBa0IsS0FBbEI7QUFDRCxPQUhTLEVBR1AyRixRQUFRLENBQUN2SixJQUhGLENBQVY7QUFJRDtBQUNGOztBQUVEcUosRUFBQUEsY0FBYyxHQUFHO0FBQ2YsUUFBSSxLQUFLUCxzQkFBTCxHQUE4QixDQUFsQyxFQUFxQztBQUNuQyxVQUFNLENBQUNVLFFBQUQsRUFBV0MsTUFBWCxJQUFxQixLQUFLVixlQUFMLENBQXFCLEtBQUtoSixTQUExQixDQUEzQjtBQUNBLFdBQUt5SixRQUFMLEtBQWtCQyxNQUFsQjtBQUNBLFdBQUtYLHNCQUFMLElBQStCLENBQS9CO0FBQ0Q7O0FBQ0QsUUFBSSxLQUFLQSxzQkFBTCxLQUFnQyxDQUFwQyxFQUF1QztBQUNyQ0QsTUFBQUEsd0RBQVMsQ0FBQ3RFLG9GQUFELEVBQXlDO0FBQ2hEOEIsUUFBQUEsS0FBSyxFQUFFLEtBQUt6RDtBQURvQyxPQUF6QyxDQUFUO0FBR0Q7QUFDRjs7QUFFRDBHLEVBQUFBLFlBQVksR0FBRztBQUNiLFFBQUksS0FBS1Isc0JBQUwsR0FBOEIsQ0FBbEMsRUFBcUM7QUFDbkMsV0FBSzdGLE1BQUwsQ0FBWXlHLFlBQVosQ0FBeUIsU0FBU0MscUJBQXFCLENBQUMsS0FBSzVKLFNBQU4sQ0FBdkQ7QUFDQTtBQUNEOztBQUVELFNBQUtrRCxNQUFMLENBQVl5RyxZQUFaLENBQXlCLFNBQVNDLHFCQUFxQixDQUFDLEtBQUs1SixTQUFOLENBQXZEO0FBQ0Q7O0FBeEc2QjtBQTJHaEM7QUFDQTtBQUNBOzs7QUFDQSxTQUFTNEoscUJBQVQsQ0FBK0JDLE1BQS9CLEVBQXVDO0FBQ3JDLFNBQU9BLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLENBQWQsRUFBaUJDLFdBQWpCLEtBQWlDRixNQUFNLENBQUNHLEtBQVAsQ0FBYSxDQUFiLENBQXhDO0FBQ0Q7O0FBRUQsaUVBQWVoTCxNQUFmOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3pIQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBQ0EsTUFBTTBELE1BQU4sQ0FBYTtBQUNYO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRXRCLEVBQUFBLFdBQVcsQ0FBQ3dCLE1BQUQsRUFBUztBQUNsQjtBQUNBLFNBQUsvQixVQUFMLEdBQWtCK0IsTUFBTSxDQUFDL0IsVUFBUCxJQUFxQjJELGtFQUF2QztBQUNBLFNBQUtwQixnQkFBTCxHQUF3QlIsTUFBTSxDQUFDUSxnQkFBUCxHQUNwQlIsTUFBTSxDQUFDUSxnQkFEYSxHQUVwQjtBQUFFMUQsTUFBQUEsQ0FBQyxFQUFFLENBQUw7QUFBUUMsTUFBQUEsQ0FBQyxFQUFFO0FBQVgsS0FGSixDQUhrQixDQU9sQjs7QUFDQW9JLElBQUFBLHdEQUFTLENBQ1BuRixNQUFNLENBQUNoRCxHQUFQLElBQWMsMkNBRFAsRUFFTnFLLEtBQUQsSUFBVztBQUNULFdBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFdBQUtDLGFBQUwsR0FBcUIsSUFBckI7QUFDRCxLQUxNLENBQVQsQ0FSa0IsQ0FnQmxCOztBQUNBLFNBQUtsSCxTQUFMLEdBQWlCSixNQUFNLENBQUNJLFNBQVAsSUFBb0IsS0FBckM7O0FBQ0EsUUFBSSxLQUFLQSxTQUFULEVBQW9CO0FBQ2xCK0UsTUFBQUEsd0RBQVMsQ0FBQyxzQ0FBRCxFQUEwQ2tDLEtBQUQsSUFBVztBQUMzRCxhQUFLRSxXQUFMLEdBQW1CRixLQUFuQjtBQUNBLGFBQUtHLGlCQUFMLEdBQXlCLElBQXpCO0FBQ0QsT0FIUSxDQUFUO0FBSUQsS0F2QmlCLENBeUJsQjs7O0FBQ0EsU0FBS0MsVUFBTCxHQUFrQnpILE1BQU0sQ0FBQ3lILFVBQVAsSUFBcUI7QUFDckNDLE1BQUFBLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBRCxDQUQyQjtBQUVyQ0MsTUFBQUEsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUFELENBRjBCO0FBR3JDQyxNQUFBQSxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUQsRUFBSSxDQUFKLENBQUQsQ0FINkI7QUFJckNDLE1BQUFBLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBRCxDQUoyQjtBQUtyQ0MsTUFBQUEsUUFBUSxFQUFFLENBQ1IsQ0FBQyxDQUFELEVBQUksQ0FBSixDQURRLEVBQ0E7QUFDUixPQUFDLENBQUQsRUFBSSxDQUFKLENBRlEsRUFFQTtBQUNSLE9BQUMsQ0FBRCxFQUFJLENBQUosQ0FIUSxFQUdBO0FBQ1IsT0FBQyxDQUFELEVBQUksQ0FBSixDQUpRLENBSUE7QUFKQSxPQUwyQjtBQVdyQ0MsTUFBQUEsU0FBUyxFQUFFLENBQ1QsQ0FBQyxDQUFELEVBQUksQ0FBSixDQURTLEVBQ0Q7QUFDUixPQUFDLENBQUQsRUFBSSxDQUFKLENBRlMsRUFFRDtBQUNSLE9BQUMsQ0FBRCxFQUFJLENBQUosQ0FIUyxFQUdEO0FBQ1IsT0FBQyxDQUFELEVBQUksQ0FBSixDQUpTLENBSUQ7QUFKQyxPQVgwQjtBQWlCckNDLE1BQUFBLE1BQU0sRUFBRSxDQUNOLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FETSxFQUNFO0FBQ1IsT0FBQyxDQUFELEVBQUksQ0FBSixDQUZNLEVBRUU7QUFDUixPQUFDLENBQUQsRUFBSSxDQUFKLENBSE0sRUFHRTtBQUNSLE9BQUMsQ0FBRCxFQUFJLENBQUosQ0FKTSxDQUlFO0FBSkYsT0FqQjZCO0FBdUJyQ0MsTUFBQUEsUUFBUSxFQUFFLENBQ1IsQ0FBQyxDQUFELEVBQUksQ0FBSixDQURRLEVBQ0E7QUFDUixPQUFDLENBQUQsRUFBSSxDQUFKLENBRlEsRUFFQTtBQUNSLE9BQUMsQ0FBRCxFQUFJLENBQUosQ0FIUSxFQUdBO0FBQ1IsT0FBQyxDQUFELEVBQUksQ0FBSixDQUpRLENBSUE7QUFKQTtBQXZCMkIsS0FBdkMsQ0ExQmtCLENBeURsQjs7QUFDQSxTQUFLQyxnQkFBTCxHQUF3QmxJLE1BQU0sQ0FBQ2tJLGdCQUFQLElBQTJCLFVBQW5EO0FBQ0EsU0FBS0MscUJBQUwsR0FBNkIsQ0FBN0I7QUFDQSxTQUFLL0osbUJBQUwsR0FDRTRCLE1BQU0sQ0FBQzVCLG1CQUFQLElBQThCd0QsMkVBRGhDO0FBRUEsU0FBS3dHLHNCQUFMLEdBQThCLEtBQUtoSyxtQkFBbkMsQ0E5RGtCLENBZ0VsQjtBQUNBOztBQUNBLFNBQUttQyxVQUFMLEdBQWtCUCxNQUFNLENBQUNPLFVBQXpCO0FBQ0QsR0EvRVUsQ0FpRlg7O0FBQ0E7QUFDRjtBQUNBOzs7QUFDVyxNQUFMOEgsS0FBSyxHQUFHO0FBQ1YsV0FBTyxLQUFLWixVQUFMLENBQWdCLEtBQUtTLGdCQUFyQixFQUF1QyxLQUFLQyxxQkFBNUMsQ0FBUDtBQUNEOztBQUVEcEIsRUFBQUEsWUFBWSxDQUFDdkIsR0FBRCxFQUFNO0FBQ2hCLFFBQUksS0FBSzBDLGdCQUFMLEtBQTBCMUMsR0FBOUIsRUFBbUM7QUFDakMsV0FBSzBDLGdCQUFMLEdBQXdCMUMsR0FBeEI7QUFDQSxXQUFLMkMscUJBQUwsR0FBNkIsQ0FBN0I7QUFDQSxXQUFLQyxzQkFBTCxHQUE4QixLQUFLaEssbUJBQW5DO0FBQ0Q7QUFDRjs7QUFFRGtLLEVBQUFBLHVCQUF1QixHQUFHO0FBQ3hCO0FBQ0EsUUFBSSxLQUFLRixzQkFBTCxHQUE4QixDQUFsQyxFQUFxQztBQUNuQyxXQUFLQSxzQkFBTCxJQUErQixDQUEvQjtBQUNBO0FBQ0QsS0FMdUIsQ0FPeEI7OztBQUNBLFNBQUtBLHNCQUFMLEdBQThCLEtBQUtoSyxtQkFBbkM7QUFDQSxTQUFLK0oscUJBQUwsSUFBOEIsQ0FBOUI7O0FBRUEsUUFBSSxLQUFLRSxLQUFMLEtBQWVoSSxTQUFuQixFQUE4QjtBQUM1QixXQUFLOEgscUJBQUwsR0FBNkIsQ0FBN0I7QUFDRDtBQUNGO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0VoRixFQUFBQSxJQUFJLENBQUNsQixHQUFELEVBQU1PLFlBQU4sRUFBb0I7QUFDdEIsUUFBTTFGLENBQUMsR0FDTCxLQUFLeUQsVUFBTCxDQUFnQnpELENBQWhCLEdBQ0EsS0FBSzBELGdCQUFMLENBQXNCMUQsQ0FEdEIsR0FFQVIsd0RBQVMsQ0FBQyxJQUFELENBRlQsR0FHQWtHLFlBQVksQ0FBQzFGLENBSmYsQ0FEc0IsQ0FLSjs7QUFDbEIsUUFBTUMsQ0FBQyxHQUNMLEtBQUt3RCxVQUFMLENBQWdCeEQsQ0FBaEIsR0FDQSxLQUFLeUQsZ0JBQUwsQ0FBc0J6RCxDQUR0QixHQUVBVCx3REFBUyxDQUFDLENBQUQsQ0FGVCxHQUdBa0csWUFBWSxDQUFDekYsQ0FKZixDQU5zQixDQVVKOztBQUNsQixRQUFNLENBQUN3TCxNQUFELEVBQVNDLE1BQVQsSUFBbUIsS0FBS0gsS0FBOUIsQ0FYc0IsQ0FZdEI7QUFFQTtBQUNBO0FBRUE7O0FBQ0EsU0FBS2YsYUFBTCxJQUNFckYsR0FBRyxDQUFDa0QsU0FBSixDQUNFLEtBQUtrQyxLQURQLEVBQ2M7QUFDWmtCLElBQUFBLE1BQU0sR0FBRzNHLGtFQUZYLEVBRWlDO0FBQy9CNEcsSUFBQUEsTUFBTSxHQUFHNUcsa0VBSFgsRUFHaUM7QUFDL0IsU0FBSzNELFVBSlAsRUFJbUI7QUFDakIsU0FBS0EsVUFMUCxFQUttQjtBQUNqQm5CLElBQUFBLENBTkYsRUFNSztBQUNIQyxJQUFBQSxDQVBGLEVBT0s7QUFDSCxTQUFLa0IsVUFSUCxFQVFtQjtBQUNqQixTQUFLQSxVQVRQLENBU2tCO0FBVGxCLEtBREYsQ0FsQnNCLENBK0J0Qjs7QUFDQSxTQUFLcUssdUJBQUw7QUFFQSxTQUFLZCxpQkFBTCxJQUNFdkYsR0FBRyxDQUFDa0QsU0FBSixDQUNFLEtBQUtvQyxXQURQLEVBQ29CO0FBQ2xCekssSUFBQUEsQ0FGRixFQUVLO0FBQ0hDLElBQUFBLENBSEYsQ0FHSTtBQUhKLEtBREY7QUFNRDs7QUE5SlU7O0FBaUtiLGlFQUFlK0MsTUFBZjs7Ozs7Ozs7Ozs7Ozs7O0FDeEtBOztBQUVBLE1BQU1tRSxXQUFOLENBQWtCO0FBQ2hCekYsRUFBQUEsV0FBVyxDQUFDd0IsTUFBRCxFQUFTO0FBQ2xCLFNBQUt4QyxJQUFMLEdBQVl3QyxNQUFNLENBQUN4QyxJQUFQLElBQWUsRUFBM0I7QUFDQSxTQUFLb0gsVUFBTCxHQUFrQjVFLE1BQU0sQ0FBQzRFLFVBQXpCO0FBQ0EsU0FBSzlDLE9BQUwsR0FBZSxJQUFmO0FBQ0Q7O0FBRUQyRyxFQUFBQSxhQUFhLEdBQUc7QUFDZCxTQUFLM0csT0FBTCxHQUFlM0MsUUFBUSxDQUFDc0osYUFBVCxDQUF1QixLQUF2QixDQUFmO0FBQ0EsU0FBSzNHLE9BQUwsQ0FBYTRHLFNBQWIsQ0FBdUJDLEdBQXZCLENBQTJCLGFBQTNCO0FBRUEsU0FBSzdHLE9BQUwsQ0FBYThHLFNBQWIsa0RBQytCLEtBQUtwTCxJQURwQztBQUtBLFNBQUtzRSxPQUFMLENBQWFFLGFBQWIsQ0FBMkIsUUFBM0IsRUFBcUM1QyxnQkFBckMsQ0FBc0QsT0FBdEQsRUFBK0QsTUFBTTtBQUNuRSxXQUFLeUosSUFBTDtBQUNELEtBRkQ7QUFJQTtBQUNKO0FBQ0E7O0FBQ0ksU0FBS0MsY0FBTCxHQUFzQixJQUFJMUgseURBQUosQ0FBcUIsT0FBckIsRUFBOEIsTUFBTTtBQUN4RCxXQUFLMEgsY0FBTCxDQUFvQnBILE1BQXBCO0FBQ0EsV0FBS21ILElBQUw7QUFDRCxLQUhxQixDQUF0QjtBQUtBLFNBQUtFLG1CQUFMLEdBQTJCLElBQUkzSCx5REFBSixDQUFxQixPQUFyQixFQUE4QixNQUFNO0FBQzdELFdBQUsySCxtQkFBTCxDQUF5QnJILE1BQXpCO0FBQ0EsV0FBS21ILElBQUw7QUFDRCxLQUgwQixDQUEzQjtBQUlEOztBQUVEQSxFQUFBQSxJQUFJLEdBQUc7QUFDTCxTQUFLL0csT0FBTCxDQUFha0gsTUFBYjtBQUNBLFNBQUtwRSxVQUFMO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7OztBQUNFMUYsRUFBQUEsSUFBSSxDQUFDK0osU0FBRCxFQUFZO0FBQ2QsU0FBS1IsYUFBTDtBQUNBUSxJQUFBQSxTQUFTLENBQUNDLFdBQVYsQ0FBc0IsS0FBS3BILE9BQTNCO0FBQ0Q7O0FBN0NlOztBQWdEbEIsaUVBQWVtQyxXQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xEQTtBQUVPLElBQU1rQixTQUFTLEdBQUcsQ0FBQ25JLEdBQUQsRUFBTW1NLEVBQU4sS0FBYTtBQUNwQyxNQUFNQyxHQUFHLEdBQUcsSUFBSW5FLEtBQUosRUFBWjs7QUFDQW1FLEVBQUFBLEdBQUcsQ0FBQ0MsTUFBSixHQUFhLE1BQU07QUFDakIsUUFBSUYsRUFBSixFQUFRO0FBQ05BLE1BQUFBLEVBQUUsQ0FBQ0MsR0FBRCxDQUFGO0FBQ0Q7QUFDRixHQUpEOztBQUtBQSxFQUFBQSxHQUFHLENBQUNwTSxHQUFKLEdBQVVBLEdBQVY7QUFDRCxDQVJNO0FBVUEsSUFBTVYsU0FBUyxHQUFJZ04sQ0FBRCxJQUFPO0FBQzlCLFNBQU9BLENBQUMsR0FBRzFILHNFQUFYO0FBQ0QsQ0FGTTtBQUlBLElBQU12RixXQUFXLEdBQUcsQ0FBQ1MsQ0FBRCxFQUFJQyxDQUFKLEtBQVU7QUFDbkMsbUJBQVVELENBQUMsR0FBRzhFLHNFQUFkLGNBQTBDN0UsQ0FBQyxHQUFHNkUsc0VBQTlDO0FBQ0QsQ0FGTTtBQUlBLElBQU1tRCxZQUFZLEdBQUcsQ0FBQ00sSUFBRCxFQUFPQyxJQUFQLEVBQWFsSSxTQUFiLEtBQTJCO0FBQ3JELE1BQUlOLENBQUosRUFBT0MsQ0FBUCxFQUFVd00sSUFBVjtBQUNBek0sRUFBQUEsQ0FBQyxHQUFHdUksSUFBSjtBQUNBdEksRUFBQUEsQ0FBQyxHQUFHdUksSUFBSjtBQUNBaUUsRUFBQUEsSUFBSSxHQUFHLEVBQVA7O0FBQ0EsTUFBSW5NLFNBQVMsS0FBSyxNQUFsQixFQUEwQjtBQUN4Qk4sSUFBQUEsQ0FBQyxJQUFJeU0sSUFBTDtBQUNELEdBRkQsTUFFTyxJQUFJbk0sU0FBUyxLQUFLLE9BQWxCLEVBQTJCO0FBQ2hDTixJQUFBQSxDQUFDLElBQUl5TSxJQUFMO0FBQ0QsR0FGTSxNQUVBLElBQUluTSxTQUFTLEtBQUssSUFBbEIsRUFBd0I7QUFDN0JMLElBQUFBLENBQUMsSUFBSXdNLElBQUw7QUFDRCxHQUZNLE1BRUEsSUFBSW5NLFNBQVMsS0FBSyxNQUFsQixFQUEwQjtBQUMvQkwsSUFBQUEsQ0FBQyxJQUFJd00sSUFBTDtBQUNEOztBQUVELFNBQU87QUFBRXpNLElBQUFBLENBQUY7QUFBS0MsSUFBQUE7QUFBTCxHQUFQO0FBQ0QsQ0FoQk07QUFrQkEsSUFBTW1KLFNBQVMsR0FBRyxDQUFDc0QsSUFBRCxFQUFPL0YsTUFBUCxLQUFrQjtBQUN6QztBQUNBLE1BQU12QyxLQUFLLEdBQUcsSUFBSXVJLFdBQUosQ0FBZ0JELElBQWhCLEVBQXNCO0FBQ2xDL0YsSUFBQUE7QUFEa0MsR0FBdEIsQ0FBZDtBQUlBdEUsRUFBQUEsUUFBUSxDQUFDdUssYUFBVCxDQUF1QnhJLEtBQXZCO0FBQ0QsQ0FQTTtBQVNBLElBQU1nRCxpQkFBaUIsR0FBSTlHLFNBQUQsSUFBZTtBQUM5QyxNQUFJQSxTQUFTLEtBQUssTUFBbEIsRUFBMEI7QUFDeEIsV0FBTyxPQUFQO0FBQ0Q7O0FBQ0QsTUFBSUEsU0FBUyxLQUFLLE9BQWxCLEVBQTJCO0FBQ3pCLFdBQU8sTUFBUDtBQUNEOztBQUNELE1BQUlBLFNBQVMsS0FBSyxJQUFsQixFQUF3QjtBQUN0QixXQUFPLE1BQVA7QUFDRDs7QUFFRCxTQUFPLElBQVA7QUFDRCxDQVpNOzs7Ozs7VUMvQ1A7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05BO0FBRUEsSUFBTXVNLEtBQUssR0FBRyxJQUFJOUgsdURBQUosQ0FBYztBQUMxQkMsRUFBQUEsT0FBTyxFQUFFM0MsUUFBUSxDQUFDNkMsYUFBVCxDQUF1QixpQkFBdkI7QUFEaUIsQ0FBZCxDQUFkO0FBSUEySCxLQUFLLENBQUN6SyxJQUFOLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ycGctZ2FtZS8uL3NyYy9EYXRhL0FsbE1hcExpc3QuanMiLCJ3ZWJwYWNrOi8vcnBnLWdhbWUvLi9zcmMvRGF0YS9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vcnBnLWdhbWUvLi9zcmMvR2FtZS9EaXJlY3Rpb25JbnB1dC5qcyIsIndlYnBhY2s6Ly9ycGctZ2FtZS8uL3NyYy9HYW1lL0dhbWVPYmplY3QuanMiLCJ3ZWJwYWNrOi8vcnBnLWdhbWUvLi9zcmMvR2FtZS9LZXlQcmVzc0xpc3RlbmVyLmpzIiwid2VicGFjazovL3JwZy1nYW1lLy4vc3JjL0dhbWUvT3ZlcldvcmxkLmpzIiwid2VicGFjazovL3JwZy1nYW1lLy4vc3JjL0dhbWUvT3ZlcldvcmxkRXZlbnQuanMiLCJ3ZWJwYWNrOi8vcnBnLWdhbWUvLi9zcmMvR2FtZS9PdmVyV29ybGRNYXAuanMiLCJ3ZWJwYWNrOi8vcnBnLWdhbWUvLi9zcmMvR2FtZS9QZXJzb24uanMiLCJ3ZWJwYWNrOi8vcnBnLWdhbWUvLi9zcmMvR2FtZS9TcHJpdGUuanMiLCJ3ZWJwYWNrOi8vcnBnLWdhbWUvLi9zcmMvR2FtZS9UZXh0TWVzc2FnZS5qcyIsIndlYnBhY2s6Ly9ycGctZ2FtZS8uL3NyYy91dGlscy9oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vcnBnLWdhbWUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcnBnLWdhbWUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3JwZy1nYW1lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcnBnLWdhbWUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9ycGctZ2FtZS8uL3NyYy9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBlcnNvbiBmcm9tIFwiLi4vR2FtZS9QZXJzb25cIjtcclxuaW1wb3J0IHsgYXNHcmlkQ29vcmQsIHdpdGhHcmlkcyB9IGZyb20gXCIuLi91dGlscy9oZWxwZXJcIjtcclxuLyoqXHJcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFJvb21PYmpcclxuICogQHByb3BlcnR5IHtTdHJpbmd9IGxvd2VyU3JjIC1cclxuICogQHByb3BlcnR5IHtTdHJpbmd9IHVwcGVyU3JjIC1cclxuICogQHByb3BlcnR5IHtPYmplY3R9IGdhbWVPYmplY3RzIC1cclxuICovXHJcblxyXG5leHBvcnQgY29uc3QgT3ZlcldvcmxkTWFwc0xpc3QgPSB7XHJcbiAgLyoqXHJcbiAgICogQHR5cGUge1Jvb21PYmp9XHJcbiAgICovXHJcbiAgRGVtb1Jvb206IHtcclxuICAgIGxvd2VyU3JjOiBcIi9wdWJsaWMvaW1hZ2VzL21hcHMvRGVtb0xvd2VyLnBuZ1wiLFxyXG4gICAgdXBwZXJTcmM6IFwiL3B1YmxpYy9pbWFnZXMvbWFwcy9EZW1vVXBwZXIucG5nXCIsXHJcbiAgICBnYW1lT2JqZWN0czoge1xyXG4gICAgICBoZXJvOiBuZXcgUGVyc29uKHtcclxuICAgICAgICBpc1BsYXllckNvbnRyb2xsZWQ6IHRydWUsXHJcbiAgICAgICAgeDogd2l0aEdyaWRzKDIpLFxyXG4gICAgICAgIHk6IHdpdGhHcmlkcyg0KSxcclxuICAgICAgICBzcmM6IFwiL3B1YmxpYy9pbWFnZXMvY2hhcmFjdGVycy9wZW9wbGUvaGVyby5wbmdcIixcclxuICAgICAgfSksXHJcbiAgICAgIG5wYzE6IG5ldyBQZXJzb24oe1xyXG4gICAgICAgIHg6IHdpdGhHcmlkcyg3KSxcclxuICAgICAgICB5OiB3aXRoR3JpZHMoOSksXHJcbiAgICAgICAgc3JjOiBcIi9wdWJsaWMvaW1hZ2VzL2NoYXJhY3RlcnMvcGVvcGxlL25wYzEucG5nIFwiLFxyXG4gICAgICAgIGJlaGF2aW9yTG9vcDogW1xyXG4gICAgICAgICAgeyB0eXBlOiBcInN0YW5kXCIsIGRpcmVjdGlvbjogXCJsZWZ0XCIsIHRpbWU6IDE1MDAgfSxcclxuICAgICAgICAgIHsgdHlwZTogXCJzdGFuZFwiLCBkaXJlY3Rpb246IFwidXBcIiwgdGltZTogMTUwMCB9LFxyXG4gICAgICAgICAgeyB0eXBlOiBcInN0YW5kXCIsIGRpcmVjdGlvbjogXCJyaWdodFwiLCB0aW1lOiAxMjAwIH0sXHJcbiAgICAgICAgICB7IHR5cGU6IFwic3RhbmRcIiwgZGlyZWN0aW9uOiBcInVwXCIsIHRpbWU6IDMwMCB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgdGFsa2luZzogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBldmVudHM6IFtcclxuICAgICAgICAgICAgICB7IHR5cGU6IFwidGV4dE1lc3NhZ2VcIiwgdGV4dDogXCJJJ20gQnVzeVwiLCBmYWNlSGVybzogXCJucGMxXCIgfSxcclxuICAgICAgICAgICAgICB7IHR5cGU6IFwidGV4dE1lc3NhZ2VcIiwgdGV4dDogXCJHbyBhd2F5IVwiIH0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0pLFxyXG4gICAgICBucGMyOiBuZXcgUGVyc29uKHtcclxuICAgICAgICB4OiB3aXRoR3JpZHMoOCksXHJcbiAgICAgICAgeTogd2l0aEdyaWRzKDUpLFxyXG4gICAgICAgIHNyYzogXCIvcHVibGljL2ltYWdlcy9jaGFyYWN0ZXJzL3Blb3BsZS9ucGMyLnBuZyBcIixcclxuICAgICAgICAvLyBiZWhhdmlvckxvb3A6IFtcclxuICAgICAgICAvLyAgIHsgdHlwZTogXCJ3YWxrXCIsIGRpcmVjdGlvbjogXCJsZWZ0XCIgfSxcclxuICAgICAgICAvLyAgIHsgdHlwZTogXCJzdGFuZFwiLCBkaXJlY3Rpb246IFwidXBcIiwgdGltZTogODAwIH0sXHJcbiAgICAgICAgLy8gICB7IHR5cGU6IFwid2Fsa1wiLCBkaXJlY3Rpb246IFwidXBcIiB9LFxyXG4gICAgICAgIC8vICAgeyB0eXBlOiBcIndhbGtcIiwgZGlyZWN0aW9uOiBcInJpZ2h0XCIgfSxcclxuICAgICAgICAvLyAgIHsgdHlwZTogXCJ3YWxrXCIsIGRpcmVjdGlvbjogXCJkb3duXCIgfSxcclxuICAgICAgICAvLyBdLFxyXG4gICAgICAgIHRhbGtpbmc6IFtdLFxyXG4gICAgICB9KSxcclxuICAgIH0sXHJcbiAgICB3YWxsczoge1xyXG4gICAgICBbYXNHcmlkQ29vcmQoNywgNildOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoOCwgNildOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoNywgNyldOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoOCwgNyldOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIGN1dHNjZW5lU3BhY2VzOiB7XHJcbiAgICAgIFthc0dyaWRDb29yZCg3LCA0KV06IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBldmVudHM6IFtcclxuICAgICAgICAgICAgeyB3aG86IFwibnBjMlwiLCB0eXBlOiBcIndhbGtcIiwgZGlyZWN0aW9uOiBcImxlZnRcIiB9LFxyXG4gICAgICAgICAgICB7IHdobzogXCJucGMyXCIsIHR5cGU6IFwic3RhbmRcIiwgZGlyZWN0aW9uOiBcInVwXCIsIHRpbWU6IDUwMCB9LFxyXG4gICAgICAgICAgICB7IHR5cGU6IFwidGV4dE1lc3NhZ2VcIiwgdGV4dDogXCJZb3UgY2FuJ3QgYmUgaW4gdGhlcmUhXCIgfSxcclxuICAgICAgICAgICAgeyB3aG86IFwibnBjMlwiLCB0eXBlOiBcIndhbGtcIiwgZGlyZWN0aW9uOiBcInJpZ2h0XCIgfSxcclxuICAgICAgICAgICAgeyB3aG86IFwibnBjMlwiLCB0eXBlOiBcInN0YW5kXCIsIGRpcmVjdGlvbjogXCJkb3duXCIgfSxcclxuICAgICAgICAgICAgeyB3aG86IFwiaGVyb1wiLCB0eXBlOiBcIndhbGtcIiwgZGlyZWN0aW9uOiBcImRvd25cIiB9LFxyXG4gICAgICAgICAgICB7IHdobzogXCJoZXJvXCIsIHR5cGU6IFwid2Fsa1wiLCBkaXJlY3Rpb246IFwibGVmdFwiIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICAgIFthc0dyaWRDb29yZCg1LCAxMCldOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgZXZlbnRzOiBbeyB0eXBlOiBcImNoYW5nZU1hcFwiLCBtYXA6IFwiS2l0Y2hlblwiIH1dLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG4gIEtpdGNoZW46IHtcclxuICAgIGxvd2VyU3JjOiBcIi9wdWJsaWMvaW1hZ2VzL21hcHMvS2l0Y2hlbkxvd2VyLnBuZ1wiLFxyXG4gICAgdXBwZXJTcmM6IFwiL3B1YmxpYy9pbWFnZXMvbWFwcy9LaXRjaGVuVXBwZXIucG5nXCIsXHJcbiAgICBnYW1lT2JqZWN0czoge1xyXG4gICAgICBoZXJvOiBuZXcgUGVyc29uKHtcclxuICAgICAgICBpc1BsYXllckNvbnRyb2xsZWQ6IHRydWUsXHJcbiAgICAgICAgeDogd2l0aEdyaWRzKDMpLFxyXG4gICAgICAgIHk6IHdpdGhHcmlkcyg1KSxcclxuICAgICAgfSksXHJcbiAgICAgIG5wYzM6IG5ldyBQZXJzb24oe1xyXG4gICAgICAgIHg6IHdpdGhHcmlkcygxMCksXHJcbiAgICAgICAgeTogd2l0aEdyaWRzKDgpLFxyXG4gICAgICAgIHNyYzogXCIvcHVibGljL2ltYWdlcy9jaGFyYWN0ZXJzL3Blb3BsZS9ucGMzLnBuZyBcIixcclxuICAgICAgICB0YWxraW5nOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGV2ZW50czogW1xyXG4gICAgICAgICAgICAgIHsgdHlwZTogXCJ0ZXh0TWVzc2FnZVwiLCB0ZXh0OiBcIllvdSBNYWRlIGl0ISFcIiwgZmFjZUhlcm86IFwibnBjM1wiIH0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0pLFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgc3F1YXJlU2l6ZTogMzIsXHJcbiAgaGFsZlNxdWFyZVNpemU6IDE2LFxyXG4gIG1vdmluZ1Byb2dyZXNzOiAxNixcclxuICBhbmltYXRpb25GcmFtZUxpbWl0OiA4LFxyXG5cclxuICBldmVudHM6IHtcclxuICAgIFBlcnNvbldhbGtpbmdDb21wbGV0ZTogXCJQZXJzb25XYWxraW5nQ29tcGxldGVcIixcclxuICAgIFBlcnNvblN0YW5kQ29tcGxldGU6IFwiUGVyc29uU3RhbmRDb21wbGV0ZVwiLFxyXG4gIH0sXHJcbn07XHJcbiIsImNsYXNzIERpcmVjdGlvbklucHV0IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuaGVsZERpcmVjdGlvbnMgPSBbXTtcclxuICAgIHRoaXMubWFwID0ge1xyXG4gICAgICBBcnJvd1VwOiBcInVwXCIsXHJcbiAgICAgIEtleVc6IFwidXBcIixcclxuICAgICAgQXJyb3dEb3duOiBcImRvd25cIixcclxuICAgICAgS2V5UzogXCJkb3duXCIsXHJcbiAgICAgIEFycm93TGVmdDogXCJsZWZ0XCIsXHJcbiAgICAgIEtleUE6IFwibGVmdFwiLFxyXG4gICAgICBBcnJvd1JpZ2h0OiBcInJpZ2h0XCIsXHJcbiAgICAgIEtleUQ6IFwicmlnaHRcIixcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBpbml0KCkge1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcclxuICAgICAgY29uc3QgZGlyID0gdGhpcy5tYXBbZS5jb2RlXTtcclxuXHJcbiAgICAgIGlmIChkaXIgJiYgdGhpcy5oZWxkRGlyZWN0aW9ucy5pbmRleE9mKGRpcikgPT09IC0xKSB7XHJcbiAgICAgICAgdGhpcy5oZWxkRGlyZWN0aW9ucy51bnNoaWZ0KGRpcik7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5oZWxkRGlyZWN0aW9ucyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoZSkgPT4ge1xyXG4gICAgICBjb25zdCBkaXIgPSB0aGlzLm1hcFtlLmNvZGVdO1xyXG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMuaGVsZERpcmVjdGlvbnMuaW5kZXhPZihkaXIpO1xyXG4gICAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICAgIHRoaXMuaGVsZERpcmVjdGlvbnMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcmV0dXJuIHtBcnJheTwnbGVmdCcgfCAncmlnaHQnIHwgJ3VwJyB8ICdkb3duJyA+fVxyXG4gICAqL1xyXG4gIGdldCBkaXJlY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5oZWxkRGlyZWN0aW9uc1swXTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERpcmVjdGlvbklucHV0O1xyXG4iLCJpbXBvcnQgT3ZlcldvcmxkRXZlbnQgZnJvbSBcIi4vT3ZlcldvcmxkRXZlbnRcIjtcclxuaW1wb3J0IE92ZXJXb3JsZE1hcCBmcm9tIFwiLi9PdmVyV29ybGRNYXBcIjtcclxuaW1wb3J0IFNwcml0ZSBmcm9tIFwiLi9TcHJpdGVcIjtcclxuXHJcbmNsYXNzIEdhbWVPYmplY3Qge1xyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcclxuICAgKiBAcGFyYW0ge051bWJlcn0gY29uZmlnLnhcclxuICAgKiBAcGFyYW0ge051bWJlcn0gY29uZmlnLnlcclxuICAgKiBAcGFyYW0ge1N0cmluZ30gY29uZmlnLnNyY1xyXG4gICAqIEBwYXJhbSB7J2Rvd24nIHwgJ3VwJyB8ICdsZWZ0JyB8ICdyaWdodCcgfCBudWxsfSBjb25maWcuZGlyZWN0aW9uXHJcbiAgICogQHBhcmFtIHtCb29sZWFuIHwgbnVsbH0gY29uZmlnLnVzZVNoYWRvd1xyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBjb25maWcuc3F1YXJlU2l6ZVxyXG4gICAqIEBwYXJhbSB7e3g6IE51bWJlciwgeTogTnVtYmVyfSB8IG51bGx9IGNvbmZpZy5yZW1vdmVTcXVhcmVTaXplXHJcbiAgICogQHBhcmFtIHtCb29sZWFufSBjb25maWcuaXNQbGF5ZXJDb250cm9sbGVkXHJcbiAgICogQHBhcmFtIHthbnlbXX0gY29uZmlnLmJlaGF2aW9yTG9vcFxyXG4gICAqIEBwYXJhbSB7QXJyYXk8e2V2ZW50czogKltdfT59IGNvbmZpZy50YWxraW5nXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XHJcbiAgICB0aGlzLmlkID0gY29uZmlnLmlkID8gY29uZmlnLmlkIDogbnVsbDtcclxuICAgIHRoaXMuaXNNb3VudGVkID0gZmFsc2U7XHJcbiAgICBjb25zdCBpc1VzZVNoYWRvdyA9XHJcbiAgICAgIGNvbmZpZy51c2VTaGFkb3cgIT09IG51bGwgJiYgY29uZmlnLnVzZVNoYWRvdyAhPT0gdW5kZWZpbmVkXHJcbiAgICAgICAgPyBjb25maWcudXNlU2hhZG93XHJcbiAgICAgICAgOiB0cnVlO1xyXG4gICAgdGhpcy54ID0gY29uZmlnLnggfHwgMDtcclxuICAgIHRoaXMueSA9IGNvbmZpZy55IHx8IDA7XHJcbiAgICB0aGlzLmRpcmVjdGlvbiA9IGNvbmZpZy5kaXJlY3Rpb24gfHwgXCJkb3duXCI7XHJcbiAgICB0aGlzLnNwcml0ZSA9IG5ldyBTcHJpdGUoe1xyXG4gICAgICBnYW1lT2JqZWN0OiB0aGlzLFxyXG4gICAgICBzcmM6IGNvbmZpZy5zcmMsXHJcbiAgICAgIHVzZVNoYWRvdzogaXNVc2VTaGFkb3csXHJcbiAgICAgIHNxdWFyZVNpemU6IGNvbmZpZy5zcXVhcmVTaXplID8gY29uZmlnLnNxdWFyZVNpemUgOiAzMixcclxuICAgICAgcmVtb3ZlU3F1YXJlU2l6ZTogY29uZmlnLnJlbW92ZVNxdWFyZVNpemVcclxuICAgICAgICA/IGNvbmZpZy5yZW1vdmVTcXVhcmVTaXplXHJcbiAgICAgICAgOiB7IHg6IDgsIHk6IDE4IH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmJlaGF2aW9yTG9vcCA9IGNvbmZpZy5iZWhhdmlvckxvb3AgPyBjb25maWcuYmVoYXZpb3JMb29wIDogW107XHJcbiAgICB0aGlzLmJlaGF2aW9yTG9vcEluZGV4ID0gMDtcclxuXHJcbiAgICB0aGlzLnRhbGtpbmcgPSBjb25maWcudGFsa2luZyB8fCBbXTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7T3ZlcldvcmxkTWFwfSBtYXBcclxuICAgKi9cclxuICBtb3VudChtYXApIHtcclxuICAgIHRoaXMuaXNNb3VudGVkID0gdHJ1ZTtcclxuICAgIG1hcC5hZGRXYWxsKHRoaXMueCwgdGhpcy55KTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5kb0JlaGF2aW9yRXZlbnQobWFwKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKCkge31cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtPdmVyV29ybGRNYXB9IG1hcFxyXG4gICAqL1xyXG4gIGFzeW5jIGRvQmVoYXZpb3JFdmVudChtYXApIHtcclxuICAgIGlmIChcclxuICAgICAgbWFwLmlzQ3V0c2NlbmVQbGF5aW5nIHx8XHJcbiAgICAgIHRoaXMuYmVoYXZpb3JMb29wLmxlbmd0aCA9PT0gMCB8fFxyXG4gICAgICB0aGlzLmlzU3RhbmRpbmdcclxuICAgICkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBsZXQgZXZlbnQgPSB0aGlzLmJlaGF2aW9yTG9vcFt0aGlzLmJlaGF2aW9yTG9vcEluZGV4XTtcclxuICAgIGV2ZW50LndobyA9IHRoaXMuaWQ7XHJcbiAgICBjb25zdCBldmVudEhhbmRsZXIgPSBuZXcgT3ZlcldvcmxkRXZlbnQoeyBtYXA6IG1hcCwgZXZlbnQ6IGV2ZW50IH0pO1xyXG4gICAgYXdhaXQgZXZlbnRIYW5kbGVyLmluaXQoKTtcclxuICAgIHRoaXMuYmVoYXZpb3JMb29wSW5kZXggKz0gMTtcclxuICAgIGlmICh0aGlzLmJlaGF2aW9yTG9vcEluZGV4ID09PSB0aGlzLmJlaGF2aW9yTG9vcC5sZW5ndGgpIHtcclxuICAgICAgdGhpcy5iZWhhdmlvckxvb3BJbmRleCA9IDA7XHJcbiAgICB9XHJcbiAgICB0aGlzLmRvQmVoYXZpb3JFdmVudChtYXApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2FtZU9iamVjdDtcclxuIiwiY2xhc3MgS2V5UHJlc3NMaXN0ZW5lciB7XHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IGtleUNvZGVcclxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGtleUNvZGUsIGNhbGxiYWNrKSB7XHJcbiAgICBsZXQga2V5U2FmZSA9IHRydWU7XHJcbiAgICB0aGlzLmtleWRvd25GdW5jdGlvbiA9IChldmVudCkgPT4ge1xyXG4gICAgICBpZiAoZXZlbnQuY29kZSA9PT0ga2V5Q29kZSkge1xyXG4gICAgICAgIGlmIChrZXlTYWZlKSB7XHJcbiAgICAgICAgICBrZXlTYWZlID0gZmFsc2U7XHJcbiAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmtleXVwRnVuY3Rpb24gPSAoZXZlbnQpID0+IHtcclxuICAgICAgaWYgKGV2ZW50LmNvZGUgPT09IGtleUNvZGUpIHtcclxuICAgICAgICBrZXlTYWZlID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLmtleWRvd25GdW5jdGlvbik7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgdGhpcy5rZXl1cEZ1bmN0aW9uKTtcclxuICB9XHJcblxyXG4gIHVuYmluZCgpIHtcclxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMua2V5ZG93bkZ1bmN0aW9uKTtcclxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCB0aGlzLmtleXVwRnVuY3Rpb24pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgS2V5UHJlc3NMaXN0ZW5lcjtcclxuIiwiaW1wb3J0IHsgT3ZlcldvcmxkTWFwc0xpc3QgfSBmcm9tIFwiLi4vRGF0YS9BbGxNYXBMaXN0XCI7XHJcbmltcG9ydCBHYW1lT2JqZWN0IGZyb20gXCIuL0dhbWVPYmplY3RcIjtcclxuaW1wb3J0IFBlcnNvbiBmcm9tIFwiLi9QZXJzb25cIjtcclxuaW1wb3J0IE92ZXJXb3JsZE1hcCBmcm9tIFwiLi9PdmVyV29ybGRNYXBcIjtcclxuaW1wb3J0IERpcmVjdGlvbklucHV0IGZyb20gXCIuL0RpcmVjdGlvbklucHV0XCI7XHJcbmltcG9ydCBLZXlQcmVzc0xpc3RlbmVyIGZyb20gXCIuL0tleVByZXNzTGlzdGVuZXJcIjtcclxuaW1wb3J0IGNvbnN0YW50cyBmcm9tIFwiLi4vRGF0YS9jb25zdGFudHNcIjtcclxuXHJcbmNsYXNzIE92ZXJXb3JsZCB7XHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xyXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGNvbmZpZy5lbGVtZW50XHJcbiAgICogQHBhcmFtIHsnaGVoZSd8J2hhaGEnfSBjb25maWcudGVzdFxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xyXG4gICAgY29uc3QgeyBlbGVtZW50IH0gPSBjb25maWc7XHJcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHR5cGUge0hUTUxDYW52YXNFbGVtZW50fVxyXG4gICAgICovXHJcbiAgICB0aGlzLmNhbnZhcyA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWUtY2FudmFzXCIpOyAvL0hUTUxDYW52YXNFbGVtZW50XHJcblxyXG4gICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAdHlwZSB7T3ZlcldvcmxkTWFwIHwgbnVsbH1cclxuICAgICAqL1xyXG4gICAgdGhpcy5tYXAgPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgc3RhcnRHYW1lTG9vcCgpIHtcclxuICAgIGNvbnN0IHN0ZXAgPSAoKSA9PiB7XHJcbiAgICAgIC8vIENsZWFyIE9mIFRoZSBDYW52YXNcclxuICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xyXG5cclxuICAgICAgLy8gQ2FtZXJhXHJcbiAgICAgIGNvbnN0IGNhbWVyYVBlcnNvbiA9IHRoaXMubWFwLmdhbWVPYmplY3RzLmhlcm87XHJcblxyXG4gICAgICAvLyBVcGRhdGUgQWxsIE9iamVjdHNcclxuICAgICAgT2JqZWN0LnZhbHVlcyh0aGlzLm1hcC5nYW1lT2JqZWN0cykuZm9yRWFjaChcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAcGFyYW0ge0dhbWVPYmplY3QgfCBQZXJzb259IG9ialxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIChvYmopID0+IHtcclxuICAgICAgICAgIG9iai51cGRhdGUoe1xyXG4gICAgICAgICAgICBhcnJvdzogdGhpcy5kaXJlY3Rpb25Db250cm9sbGVyLmRpcmVjdGlvbixcclxuICAgICAgICAgICAgbWFwOiB0aGlzLm1hcCxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuXHJcbiAgICAgIC8vIERyYXcgdGhlIExvd2VyIExheWVyXHJcbiAgICAgIHRoaXMubWFwLmRyYXdMb3dlckltYWdlKHRoaXMuY3R4LCBjYW1lcmFQZXJzb24pO1xyXG5cclxuICAgICAgLy8gTWFrZSBQZXJzb24gYW5kIE1pZGRsZSBMYXllclxyXG4gICAgICBPYmplY3QudmFsdWVzKHRoaXMubWFwLmdhbWVPYmplY3RzKVxyXG4gICAgICAgIC5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gYS55IC0gYi55O1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmZvckVhY2goXHJcbiAgICAgICAgICAvKipcclxuICAgICAgICAgICAqIEBwYXJhbSB7R2FtZU9iamVjdCB8IFBlcnNvbn0gb2JqXHJcbiAgICAgICAgICAgKi9cclxuICAgICAgICAgIChvYmopID0+IHtcclxuICAgICAgICAgICAgb2JqLnNwcml0ZS5kcmF3KHRoaXMuY3R4LCBjYW1lcmFQZXJzb24pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICB0aGlzLm1hcC5kcmF3VXBwZXJJbWFnZSh0aGlzLmN0eCwgY2FtZXJhUGVyc29uKTtcclxuXHJcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XHJcbiAgICAgICAgc3RlcCgpO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgc3RlcCgpO1xyXG4gIH1cclxuXHJcbiAgYmluZEFjdGlvbklucHV0KCkge1xyXG4gICAgbmV3IEtleVByZXNzTGlzdGVuZXIoXCJFbnRlclwiLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMubWFwLmNoZWNrRm9yQWN0aW9uQ3V0c2NlbmUoKTtcclxuICAgIH0pO1xyXG4gICAgbmV3IEtleVByZXNzTGlzdGVuZXIoXCJTcGFjZVwiLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMubWFwLmNoZWNrRm9yQWN0aW9uQ3V0c2NlbmUoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYmluZEhlcm9Qb3NpdGlvbkNoZWNrKCkge1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihjb25zdGFudHMuZXZlbnRzLlBlcnNvbldhbGtpbmdDb21wbGV0ZSwgKGUpID0+IHtcclxuICAgICAgaWYgKGUuZGV0YWlsLndob0lkID09PSBcImhlcm9cIikge1xyXG4gICAgICAgIHRoaXMubWFwLmNoZWNrRm9yRm9vdHN0ZXBDdXRzY2VuZSgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHN0YXJ0TWFwKG1hcENvbmZpZykge1xyXG4gICAgdGhpcy5tYXAgPSBuZXcgT3ZlcldvcmxkTWFwKG1hcENvbmZpZyk7XHJcbiAgICB0aGlzLm1hcC5vdmVyV29ybGQgPSB0aGlzO1xyXG4gICAgdGhpcy5tYXAubW91bnRPYmplY3RzKCk7XHJcbiAgfVxyXG5cclxuICBpbml0KCkge1xyXG4gICAgdGhpcy5zdGFydE1hcChPdmVyV29ybGRNYXBzTGlzdC5EZW1vUm9vbSk7XHJcbiAgICB0aGlzLmJpbmRBY3Rpb25JbnB1dCgpO1xyXG4gICAgdGhpcy5iaW5kSGVyb1Bvc2l0aW9uQ2hlY2soKTtcclxuXHJcbiAgICB0aGlzLmRpcmVjdGlvbkNvbnRyb2xsZXIgPSBuZXcgRGlyZWN0aW9uSW5wdXQoKTtcclxuICAgIHRoaXMuZGlyZWN0aW9uQ29udHJvbGxlci5pbml0KCk7XHJcblxyXG4gICAgLy8gU3RhcnQgR2FtZSBMb29wXHJcbiAgICB0aGlzLnN0YXJ0R2FtZUxvb3AoKTtcclxuXHJcbiAgICAvLyBpZiBDdXRzY2VuZVxyXG4gICAgdGhpcy5tYXAuc3RhcnRDdXRTY2VuZShbXHJcbiAgICAgIHsgdHlwZTogXCJ0ZXh0TWVzc2FnZVwiLCB0ZXh0OiBcIkhlbGxvIEZpbnRlY2ggR2FtZSFcIiB9LFxyXG4gICAgXSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPdmVyV29ybGQ7XHJcbiIsImltcG9ydCBPdmVyV29ybGRNYXAgZnJvbSBcIi4vT3ZlcldvcmxkTWFwXCI7XHJcbmltcG9ydCBjb25zdGFudHMgZnJvbSBcIi4uL0RhdGEvY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IE92ZXJXb3JsZE1hcHNMaXN0IH0gZnJvbSBcIi4uL0RhdGEvQWxsTWFwTGlzdFwiO1xyXG5pbXBvcnQgVGV4dE1lc3NhZ2UgZnJvbSBcIi4vVGV4dE1lc3NhZ2VcIjtcclxuaW1wb3J0IHsgb3Bwb3NpdGVEaXJlY3Rpb24gfSBmcm9tIFwiLi4vdXRpbHMvaGVscGVyXCI7XHJcblxyXG5jbGFzcyBPdmVyV29ybGRFdmVudCB7XHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xyXG4gICAqIEBwYXJhbSB7T3ZlcldvcmxkTWFwfSBjb25maWcubWFwXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZy5ldmVudFxyXG4gICAqIEBwYXJhbSB7J3dhbGsnIHwgJ3N0YW5kJyB9IGNvbmZpZy5ldmVudC50eXBlXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IGNvbmZpZy5ldmVudC53aG9cclxuICAgKiBAcGFyYW0ge051bWJlcn0gY29uZmlnLmV2ZW50LnRpbWVcclxuICAgKiBAcGFyYW0geyd1cCcgfCAnZG93bicgfCAnbGVmdCcgfCAncmlnaHQnIH0gY29uZmlnLmV2ZW50LmRpcmVjdGlvblxyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBjb25maWcuZXZlbnQudGV4dFxyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBjb25maWcuZXZlbnQuZmFjZUhlcm9cclxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjb25maWcuZXZlbnQub25Db21wbGV0ZVxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xyXG4gICAgY29uc3QgeyBtYXAsIGV2ZW50IH0gPSBjb25maWc7XHJcbiAgICB0aGlzLm1hcCA9IG1hcDtcclxuICAgIHRoaXMuZXZlbnQgPSBldmVudDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8QW55Pn1cclxuICAgKi9cclxuICBpbml0KCkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgIHRoaXNbdGhpcy5ldmVudC50eXBlXShyZXNvbHZlKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc3RhbmQocmVzb2x2ZSkge1xyXG4gICAgY29uc3Qgd2hvID0gdGhpcy5tYXAuZ2FtZU9iamVjdHNbdGhpcy5ldmVudC53aG9dO1xyXG4gICAgd2hvLnN0YXJ0QmVoYXZpb3IoXHJcbiAgICAgIHtcclxuICAgICAgICBtYXA6IHRoaXMubWFwLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdHlwZTogXCJzdGFuZFwiLFxyXG4gICAgICAgIGRpcmVjdGlvbjogdGhpcy5ldmVudC5kaXJlY3Rpb24sXHJcbiAgICAgICAgdGltZTogdGhpcy5ldmVudC50aW1lLFxyXG4gICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IGNvbXBsZXRlSGFuZGxlciA9IChlKSA9PiB7XHJcbiAgICAgIGlmIChlLmRldGFpbC53aG9JZCA9PT0gdGhpcy5ldmVudC53aG8pIHtcclxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICAgY29uc3RhbnRzLmV2ZW50cy5QZXJzb25TdGFuZENvbXBsZXRlLFxyXG4gICAgICAgICAgY29tcGxldGVIYW5kbGVyXHJcbiAgICAgICAgKTtcclxuICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgY29uc3RhbnRzLmV2ZW50cy5QZXJzb25TdGFuZENvbXBsZXRlLFxyXG4gICAgICBjb21wbGV0ZUhhbmRsZXJcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICB3YWxrKHJlc29sdmUpIHtcclxuICAgIGNvbnN0IHdobyA9IHRoaXMubWFwLmdhbWVPYmplY3RzW3RoaXMuZXZlbnQud2hvXTtcclxuICAgIHdoby5zdGFydEJlaGF2aW9yKFxyXG4gICAgICB7XHJcbiAgICAgICAgbWFwOiB0aGlzLm1hcCxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHR5cGU6IFwid2Fsa1wiLFxyXG4gICAgICAgIGRpcmVjdGlvbjogdGhpcy5ldmVudC5kaXJlY3Rpb24sXHJcbiAgICAgICAgcmV0cnk6IHRydWUsXHJcbiAgICAgIH1cclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgY29tcGxldGVIYW5kbGVyID0gKGUpID0+IHtcclxuICAgICAgaWYgKGUuZGV0YWlsLndob0lkID09PSB0aGlzLmV2ZW50Lndobykge1xyXG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgICBjb25zdGFudHMuZXZlbnRzLlBlcnNvbldhbGtpbmdDb21wbGV0ZSxcclxuICAgICAgICAgIGNvbXBsZXRlSGFuZGxlclxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgIGNvbnN0YW50cy5ldmVudHMuUGVyc29uV2Fsa2luZ0NvbXBsZXRlLFxyXG4gICAgICBjb21wbGV0ZUhhbmRsZXJcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICB0ZXh0TWVzc2FnZShyZXNvbHZlKSB7XHJcbiAgICBpZiAodGhpcy5ldmVudC5mYWNlSGVybykge1xyXG4gICAgICBjb25zdCBvYmogPSB0aGlzLm1hcC5nYW1lT2JqZWN0c1t0aGlzLmV2ZW50LmZhY2VIZXJvXTtcclxuICAgICAgb2JqLmRpcmVjdGlvbiA9IG9wcG9zaXRlRGlyZWN0aW9uKHRoaXMubWFwLmdhbWVPYmplY3RzW1wiaGVyb1wiXS5kaXJlY3Rpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG1lc3NhZ2UgPSBuZXcgVGV4dE1lc3NhZ2Uoe1xyXG4gICAgICB0ZXh0OiB0aGlzLmV2ZW50LnRleHQsXHJcbiAgICAgIG9uQ29tcGxldGU6ICgpID0+IHJlc29sdmUoKSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IG1lc3NhZ2VDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWUtY29udGFpbmVyXCIpO1xyXG4gICAgbWVzc2FnZS5pbml0KG1lc3NhZ2VDb250YWluZXIpO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlTWFwKHJlc29sdmUpIHtcclxuICAgIHRoaXMubWFwLm92ZXJXb3JsZC5zdGFydE1hcChPdmVyV29ybGRNYXBzTGlzdFt0aGlzLmV2ZW50Lm1hcF0pO1xyXG4gICAgcmVzb2x2ZSgpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgT3ZlcldvcmxkRXZlbnQ7XHJcbiIsImltcG9ydCB7IG5leHRQb3NpdGlvbiwgd2l0aEdyaWRzIH0gZnJvbSBcIi4uL3V0aWxzL2hlbHBlclwiO1xyXG5pbXBvcnQgR2FtZU9iamVjdCBmcm9tIFwiLi9HYW1lT2JqZWN0XCI7XHJcbmltcG9ydCBPdmVyV29ybGRFdmVudCBmcm9tIFwiLi9PdmVyV29ybGRFdmVudFwiO1xyXG5pbXBvcnQgT3ZlcldvcmxkIGZyb20gXCIuL092ZXJXb3JsZFwiO1xyXG5cclxuLyoqXHJcbiAqIEBuYW1lIE92ZXJXb3JsTWFwXHJcbiAqL1xyXG5jbGFzcyBPdmVyV29ybGRNYXAge1xyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcclxuICAgKiBAcGFyYW0ge1N0cmluZ30gY29uZmlnLmxvd2VyU3JjXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IGNvbmZpZy51cHBlclNyY1xyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcud2FsbHNcclxuICAgKiBAcGFyYW0ge0FycmF5PHtldmVudHM6ICpbXX0+fSBjb25maWcuY3V0c2NlbmVTcGFjZXNcclxuICAgKiBAcGFyYW0ge3toZXJvOiBHYW1lT2JqZWN0LCBucGMxOiBHYW1lT2JqZWN0LCBucGMyOiBHYW1lT2JqZWN0fX0gY29uZmlnLmdhbWVPYmplY3RzXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XHJcbiAgICAvKipcclxuICAgICAqIEB0eXBlIHtPdmVyV29ybGR9XHJcbiAgICAgKi9cclxuICAgIHRoaXMub3ZlcldvcmxkID0gbnVsbDtcclxuICAgIHRoaXMuZ2FtZU9iamVjdHMgPSBjb25maWcuZ2FtZU9iamVjdHM7XHJcbiAgICB0aGlzLndhbGxzID0gY29uZmlnLndhbGxzIHx8IHt9O1xyXG4gICAgdGhpcy5jdXRzY2VuZVNwYWNlcyA9IGNvbmZpZy5jdXRzY2VuZVNwYWNlcyB8fCBbXTtcclxuXHJcbiAgICB0aGlzLmxvd2VyTGF5ZXIgPSBuZXcgSW1hZ2UoKTtcclxuICAgIHRoaXMubG93ZXJMYXllci5zcmMgPSBjb25maWcubG93ZXJTcmM7XHJcblxyXG4gICAgdGhpcy51cHBlckxheWVyID0gbmV3IEltYWdlKCk7XHJcbiAgICB0aGlzLnVwcGVyTGF5ZXIuc3JjID0gY29uZmlnLnVwcGVyU3JjO1xyXG5cclxuICAgIHRoaXMuaXNDdXRzY2VuZVBsYXlpbmcgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEfSBjdHhcclxuICAgKiBAcGFyYW0ge0dhbWVPYmplY3R9IGNhbWVyYVBlcnNvblxyXG4gICAqL1xyXG4gIGRyYXdMb3dlckltYWdlKGN0eCwgY2FtZXJhUGVyc29uKSB7XHJcbiAgICBjdHguZHJhd0ltYWdlKFxyXG4gICAgICB0aGlzLmxvd2VyTGF5ZXIsXHJcbiAgICAgIHdpdGhHcmlkcygxMC41KSAtIGNhbWVyYVBlcnNvbi54LFxyXG4gICAgICB3aXRoR3JpZHMoNikgLSBjYW1lcmFQZXJzb24ueVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEfSBjdHhcclxuICAgKiBAcGFyYW0ge0dhbWVPYmplY3R9IGNhbWVyYVBlcnNvblxyXG4gICAqL1xyXG4gIGRyYXdVcHBlckltYWdlKGN0eCwgY2FtZXJhUGVyc29uKSB7XHJcbiAgICBjdHguZHJhd0ltYWdlKFxyXG4gICAgICB0aGlzLnVwcGVyTGF5ZXIsXHJcbiAgICAgIHdpdGhHcmlkcygxMC41KSAtIGNhbWVyYVBlcnNvbi54LFxyXG4gICAgICB3aXRoR3JpZHMoNikgLSBjYW1lcmFQZXJzb24ueVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBjdXJYXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGN1cllcclxuICAgKiBAcGFyYW0geyd1cCcgfCAnZG93bicgfCAnbGVmdCcgfCAncmlnaHQnIH0gZGlyZWN0aW9uXHJcbiAgICovXHJcbiAgaXNTcGFjZVRha2VuKGN1clgsIGN1clksIGRpcmVjdGlvbikge1xyXG4gICAgY29uc3QgeyB4LCB5IH0gPSBuZXh0UG9zaXRpb24oY3VyWCwgY3VyWSwgZGlyZWN0aW9uKTtcclxuICAgIHJldHVybiB0aGlzLndhbGxzW2Ake3h9LCR7eX1gXSB8fCBmYWxzZTtcclxuICB9XHJcblxyXG4gIC8vIE1vdW50aW5nIE9iamVjdFxyXG4gIG1vdW50T2JqZWN0cygpIHtcclxuICAgIC8vIE9iamVjdC52YWx1ZXModGhpcy5nYW1lT2JqZWN0cykubWFwKChvYmopID0+IHtcclxuICAgIC8vICAgb2JqLm1vdW50KHRoaXMpO1xyXG4gICAgLy8gfSk7XHJcblxyXG4gICAgT2JqZWN0LmtleXModGhpcy5nYW1lT2JqZWN0cykubWFwKChrZXkpID0+IHtcclxuICAgICAgbGV0IG9iamVjdCA9IHRoaXMuZ2FtZU9iamVjdHNba2V5XTtcclxuICAgICAgb2JqZWN0LmlkID0ga2V5O1xyXG4gICAgICBvYmplY3QubW91bnQodGhpcyk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIE1hcCBJbml0aWFsaXplXHJcblxyXG4gIGNoZWNrRm9yQWN0aW9uQ3V0c2NlbmUoKSB7XHJcbiAgICBjb25zdCBoZXJvID0gdGhpcy5nYW1lT2JqZWN0c1tcImhlcm9cIl07XHJcbiAgICBjb25zdCBuZXh0Q29vcmQgPSBuZXh0UG9zaXRpb24oaGVyby54LCBoZXJvLnksIGhlcm8uZGlyZWN0aW9uKTtcclxuICAgIGNvbnN0IG1hdGNoID0gT2JqZWN0LnZhbHVlcyh0aGlzLmdhbWVPYmplY3RzKS5maW5kKChvYmplY3QpID0+IHtcclxuICAgICAgcmV0dXJuIGAke29iamVjdC54fSwke29iamVjdC55fWAgPT09IGAke25leHRDb29yZC54fSwke25leHRDb29yZC55fWA7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoIXRoaXMuaXNDdXRzY2VuZVBsYXlpbmcgJiYgbWF0Y2ggJiYgbWF0Y2gudGFsa2luZy5sZW5ndGgpIHtcclxuICAgICAgdGhpcy5zdGFydEN1dFNjZW5lKG1hdGNoLnRhbGtpbmdbMF0uZXZlbnRzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNoZWNrRm9yRm9vdHN0ZXBDdXRzY2VuZSgpIHtcclxuICAgIGNvbnN0IGhlcm8gPSB0aGlzLmdhbWVPYmplY3RzW1wiaGVyb1wiXTtcclxuICAgIGNvbnN0IG1hdGNoID0gdGhpcy5jdXRzY2VuZVNwYWNlc1tgJHtoZXJvLnh9LCR7aGVyby55fWBdO1xyXG4gICAgaWYgKCF0aGlzLmlzQ3V0c2NlbmVQbGF5aW5nICYmIG1hdGNoKSB7XHJcbiAgICAgIHRoaXMuc3RhcnRDdXRTY2VuZShtYXRjaFswXS5ldmVudHMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgc3RhcnRDdXRTY2VuZShldmVudHMpIHtcclxuICAgIHRoaXMuaXNDdXRzY2VuZVBsYXlpbmcgPSB0cnVlO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBldmVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgZXZlbnRIYW5kbGVyID0gbmV3IE92ZXJXb3JsZEV2ZW50KHtcclxuICAgICAgICBldmVudDogZXZlbnRzW2ldLFxyXG4gICAgICAgIG1hcDogdGhpcyxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBhd2FpdCBldmVudEhhbmRsZXIuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIE9iamVjdC5rZXlzKHRoaXMuZ2FtZU9iamVjdHMpLm1hcCgoa2V5KSA9PiB7XHJcbiAgICAgIGxldCBvYmplY3QgPSB0aGlzLmdhbWVPYmplY3RzW2tleV07XHJcbiAgICAgIG9iamVjdC5pZCA9IGtleTtcclxuICAgICAgb2JqZWN0Lm1vdW50KHRoaXMpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmlzQ3V0c2NlbmVQbGF5aW5nID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICAvLyBPdGhlciBPYmplY3QgV2FsbHNcclxuICBhZGRXYWxsKHgsIHkpIHtcclxuICAgIHRoaXMud2FsbHNbYCR7eH0sJHt5fWBdID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHJlbW92ZVdhbGwoeCwgeSkge1xyXG4gICAgZGVsZXRlIHRoaXMud2FsbHNbYCR7eH0sJHt5fWBdO1xyXG4gIH1cclxuICAvKipcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7J3VwJyB8ICdkb3duJyB8ICdsZWZ0JyB8ICdyaWdodCcgfSBkaXJlY3Rpb25cclxuICAgKi9cclxuICBtb3ZlV2FsbCh3YXNYLCB3YXNZLCBkaXJlY3Rpb24pIHtcclxuICAgIHRoaXMucmVtb3ZlV2FsbCh3YXNYLCB3YXNZKTtcclxuICAgIGNvbnN0IHsgeCwgeSB9ID0gbmV4dFBvc2l0aW9uKHdhc1gsIHdhc1ksIGRpcmVjdGlvbik7XHJcbiAgICB0aGlzLmFkZFdhbGwoeCwgeSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPdmVyV29ybGRNYXA7XHJcbiIsImltcG9ydCBjb25zdGFudHMgZnJvbSBcIi4uL0RhdGEvY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IGVtaXRFdmVudCB9IGZyb20gXCIuLi91dGlscy9oZWxwZXJcIjtcclxuaW1wb3J0IEdhbWVPYmplY3QgZnJvbSBcIi4vR2FtZU9iamVjdFwiO1xyXG5pbXBvcnQgT3ZlcldvcmxkTWFwIGZyb20gXCIuL092ZXJXb3JsZE1hcFwiO1xyXG5cclxuLyoqXHJcbiAqL1xyXG5jbGFzcyBQZXJzb24gZXh0ZW5kcyBHYW1lT2JqZWN0IHtcclxuICAvKipcclxuICAgKiBAcGFyYW0ge0dhbWVPYmplY3R9IGNvbmZpZ1xyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xyXG4gICAgc3VwZXIoY29uZmlnKTtcclxuXHJcbiAgICB0aGlzLm1vdmluZ1Byb2dyZXNzUmVtYWluaWcgPSAwO1xyXG5cclxuICAgIHRoaXMuaXNQbGF5ZXJDb250cm9sbGVkID0gY29uZmlnLmlzUGxheWVyQ29udHJvbGxlZCB8fCBmYWxzZTtcclxuXHJcbiAgICB0aGlzLmlzU3RhbmRpbmcgPSBmYWxzZTtcclxuXHJcbiAgICB0aGlzLmRpcmVjdGlvblVwZGF0ZSA9IHtcclxuICAgICAgdXA6IFtcInlcIiwgLTFdLFxyXG4gICAgICBkb3duOiBbXCJ5XCIsIDFdLFxyXG4gICAgICBsZWZ0OiBbXCJ4XCIsIC0xXSxcclxuICAgICAgcmlnaHQ6IFtcInhcIiwgMV0sXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IHN0YXRlXHJcbiAgICogQHBhcmFtIHsnZG93bicgfCAndXAnIHwgJ2xlZnQnIHwgJ3JpZ2h0JyB9IHN0YXRlLmFycm93XHJcbiAgICogQHBhcmFtIHtPdmVyV29ybGRNYXB9IHN0YXRlLm1hcFxyXG4gICAqL1xyXG4gIHVwZGF0ZShzdGF0ZSkge1xyXG4gICAgaWYgKHRoaXMubW92aW5nUHJvZ3Jlc3NSZW1haW5pZyA+IDApIHtcclxuICAgICAgdGhpcy51cGRhdGVQb3NpdGlvbigpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIHRoaXMuaXNQbGF5ZXJDb250cm9sbGVkICYmXHJcbiAgICAgICAgIXN0YXRlLm1hcC5pc0N1dHNjZW5lUGxheWluZyAmJlxyXG4gICAgICAgIHN0YXRlLmFycm93XHJcbiAgICAgICkge1xyXG4gICAgICAgIHRoaXMuc3RhcnRCZWhhdmlvcihzdGF0ZSwge1xyXG4gICAgICAgICAgdHlwZTogXCJ3YWxrXCIsXHJcbiAgICAgICAgICBkaXJlY3Rpb246IHN0YXRlLmFycm93LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnVwZGF0ZVNwcmludChzdGF0ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0ge09iamVjdH0gc3RhdGVcclxuICAgKiBAcGFyYW0ge092ZXJXb3JsZE1hcH0gc3RhdGUubWFwXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IGJlaGF2aW9yXHJcbiAgICogQHBhcmFtIHsnd2FsaycgfCAnc3RhbmQnIH0gYmVoYXZpb3IudHlwZVxyXG4gICAqIEBwYXJhbSB7J3VwJyB8ICdkb3duJyB8ICdsZWZ0JyB8ICdyaWdodCcgfSBiZWhhdmlvci5kaXJlY3Rpb25cclxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IGJlaGF2aW9yLnJldHJ5XHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGJlaGF2aW9yLnRpbWVcclxuICAgKi9cclxuICBzdGFydEJlaGF2aW9yKHN0YXRlLCBiZWhhdmlvcikge1xyXG4gICAgdGhpcy5kaXJlY3Rpb24gPSBiZWhhdmlvci5kaXJlY3Rpb247XHJcblxyXG4gICAgaWYgKGJlaGF2aW9yLnR5cGUgPT09IFwid2Fsa1wiKSB7XHJcbiAgICAgIGNvbnN0IGlzU3BhY2VUYWtlbiA9IHN0YXRlLm1hcC5pc1NwYWNlVGFrZW4oXHJcbiAgICAgICAgdGhpcy54LFxyXG4gICAgICAgIHRoaXMueSxcclxuICAgICAgICB0aGlzLmRpcmVjdGlvblxyXG4gICAgICApO1xyXG4gICAgICBpZiAoaXNTcGFjZVRha2VuKSB7XHJcbiAgICAgICAgYmVoYXZpb3IucmV0cnkgJiZcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0QmVoYXZpb3Ioc3RhdGUsIGJlaGF2aW9yKTtcclxuICAgICAgICAgIH0sIDEwKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgc3RhdGUubWFwLm1vdmVXYWxsKHRoaXMueCwgdGhpcy55LCB0aGlzLmRpcmVjdGlvbik7XHJcbiAgICAgIHRoaXMubW92aW5nUHJvZ3Jlc3NSZW1haW5pZyA9IGNvbnN0YW50cy5tb3ZpbmdQcm9ncmVzcztcclxuICAgICAgdGhpcy51cGRhdGVTcHJpbnQoc3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChiZWhhdmlvci50eXBlID09PSBcInN0YW5kXCIpIHtcclxuICAgICAgdGhpcy5pc1N0YW5kaW5nID0gdHJ1ZTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgZW1pdEV2ZW50KGNvbnN0YW50cy5ldmVudHMuUGVyc29uU3RhbmRDb21wbGV0ZSwgeyB3aG9JZDogdGhpcy5pZCB9KTtcclxuICAgICAgICB0aGlzLmlzU3RhbmRpbmcgPSBmYWxzZTtcclxuICAgICAgfSwgYmVoYXZpb3IudGltZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVQb3NpdGlvbigpIHtcclxuICAgIGlmICh0aGlzLm1vdmluZ1Byb2dyZXNzUmVtYWluaWcgPiAwKSB7XHJcbiAgICAgIGNvbnN0IFtwcm9wZXJ0eSwgY2hhbmdlXSA9IHRoaXMuZGlyZWN0aW9uVXBkYXRlW3RoaXMuZGlyZWN0aW9uXTtcclxuICAgICAgdGhpc1twcm9wZXJ0eV0gKz0gY2hhbmdlO1xyXG4gICAgICB0aGlzLm1vdmluZ1Byb2dyZXNzUmVtYWluaWcgLT0gMTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLm1vdmluZ1Byb2dyZXNzUmVtYWluaWcgPT09IDApIHtcclxuICAgICAgZW1pdEV2ZW50KGNvbnN0YW50cy5ldmVudHMuUGVyc29uV2Fsa2luZ0NvbXBsZXRlLCB7XHJcbiAgICAgICAgd2hvSWQ6IHRoaXMuaWQsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlU3ByaW50KCkge1xyXG4gICAgaWYgKHRoaXMubW92aW5nUHJvZ3Jlc3NSZW1haW5pZyA+IDApIHtcclxuICAgICAgdGhpcy5zcHJpdGUuc2V0QW5pbWF0aW9uKFwid2Fsa1wiICsgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHRoaXMuZGlyZWN0aW9uKSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNwcml0ZS5zZXRBbmltYXRpb24oXCJpZGxlXCIgKyBjYXBpdGFsaXplRmlyc3RMZXR0ZXIodGhpcy5kaXJlY3Rpb24pKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcmV0dXJuIHtTdHJpbmd9XHJcbiAqL1xyXG5mdW5jdGlvbiBjYXBpdGFsaXplRmlyc3RMZXR0ZXIoc3RyaW5nKSB7XHJcbiAgcmV0dXJuIHN0cmluZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGVyc29uO1xyXG4iLCJpbXBvcnQgY29uc3RhbnRzIGZyb20gXCIuLi9EYXRhL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBkcmF3SW1hZ2UsIHdpdGhHcmlkcyB9IGZyb20gXCIuLi91dGlscy9oZWxwZXJcIjtcclxuaW1wb3J0IEdhbWVPYmplY3QgZnJvbSBcIi4vR2FtZU9iamVjdFwiO1xyXG5cclxuLyoqXHJcbiAqIEBuYW1lIFNwcml0ZVxyXG4gKi9cclxuY2xhc3MgU3ByaXRlIHtcclxuICAvKipcclxuICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZy5hbmltYXRpb25zXHJcbiAgICogQHBhcmFtIHsnaWRsZURvd24nIHwgJ2lkbGVSaWdodCcgfCAnaWRsZVVwJyB8ICdpZGxlTGVmdCcgfCAnd2Fsa0Rvd24nIHwnd2Fsa1JpZ2h0JyB8ICd3YWxrVXAnIHwgJ3dhbGtMZWZ0JyB9IGNvbmZpZy5jdXJyZW50QW5pbWF0aW9uXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IGNvbmZpZy5zcmNcclxuICAgKiBAcGFyYW0ge051bWJlcn0gY29uZmlnLnNxdWFyZVNpemVcclxuICAgKiBAcGFyYW0ge0dhbWVPYmplY3R9IGNvbmZpZy5nYW1lT2JqZWN0XHJcbiAgICogQHBhcmFtIHtOdW1iZXIgfCBudWxsfSBjb25maWcuYW5pbWF0aW9uRnJhbWVMaW1pdFxyXG4gICAqIEBwYXJhbSB7eyAgeDogTnVtYmVyLCB5OiBOdW1iZXJ9IHwgbnVsbH0gY29uZmlnLnJlbW92ZVNxdWFyZVNpemVcclxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IGNvbmZpZy51c2VTaGFkb3dcclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcclxuICAgIC8vIFNxdWFyZVNpemUgRGVmYXVsdCAzMlxyXG4gICAgdGhpcy5zcXVhcmVTaXplID0gY29uZmlnLnNxdWFyZVNpemUgfHwgY29uc3RhbnRzLnNxdWFyZVNpemU7XHJcbiAgICB0aGlzLnJlbW92ZVNxdWFyZVNpemUgPSBjb25maWcucmVtb3ZlU3F1YXJlU2l6ZVxyXG4gICAgICA/IGNvbmZpZy5yZW1vdmVTcXVhcmVTaXplXHJcbiAgICAgIDogeyB4OiA4LCB5OiAxOCB9O1xyXG5cclxuICAgIC8vIFNldHVwIHRoZSBpbWFnZVxyXG4gICAgZHJhd0ltYWdlKFxyXG4gICAgICBjb25maWcuc3JjIHx8IFwiL3B1YmxpYy9pbWFnZXMvY2hhcmFjdGVycy9wZW9wbGUvaGVyby5wbmdcIixcclxuICAgICAgKGltYWdlKSA9PiB7XHJcbiAgICAgICAgdGhpcy5pbWFnZSA9IGltYWdlO1xyXG4gICAgICAgIHRoaXMuaW1hZ2VJc0xvYWRlZCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICk7XHJcblxyXG4gICAgLy8gU2hhZG93IEltYWdlXHJcbiAgICB0aGlzLnVzZVNoYWRvdyA9IGNvbmZpZy51c2VTaGFkb3cgfHwgZmFsc2U7XHJcbiAgICBpZiAodGhpcy51c2VTaGFkb3cpIHtcclxuICAgICAgZHJhd0ltYWdlKFwiL3B1YmxpYy9pbWFnZXMvY2hhcmFjdGVycy9zaGFkb3cucG5nXCIsIChpbWFnZSkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2hhZG93SW1hZ2UgPSBpbWFnZTtcclxuICAgICAgICB0aGlzLnNoYWRvd0ltYWdlTG9hZGVkID0gdHJ1ZTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ29uZml1cmUgQW5pbWF0aW9uIEFuZCBJbml0aWFsIFN0YXRlXHJcbiAgICB0aGlzLmFuaW1hdGlvbnMgPSBjb25maWcuYW5pbWF0aW9ucyB8fCB7XHJcbiAgICAgIGlkbGVEb3duOiBbWzAsIDBdXSxcclxuICAgICAgaWRsZVJpZ2h0OiBbWzAsIDFdXSxcclxuICAgICAgaWRsZVVwOiBbWzAsIDJdXSxcclxuICAgICAgaWRsZUxlZnQ6IFtbMCwgM11dLFxyXG4gICAgICB3YWxrRG93bjogW1xyXG4gICAgICAgIFsxLCAwXSwgLy8gaW1hZ2Ugcm93IDEgY29sIDFcclxuICAgICAgICBbMCwgMF0sIC8vIGltYWdlIHJvdyAxIGNvbCAyXHJcbiAgICAgICAgWzMsIDBdLCAvLyBpbWFnZSByb3cgMSBjb2wgNFxyXG4gICAgICAgIFswLCAwXSwgLy8gaW1hZ2Ugcm93IDEgY29sIDJcclxuICAgICAgXSxcclxuICAgICAgd2Fsa1JpZ2h0OiBbXHJcbiAgICAgICAgWzEsIDFdLCAvLyBpbWFnZSByb3cgMSBjb2wgMVxyXG4gICAgICAgIFswLCAxXSwgLy8gaW1hZ2Ugcm93IDEgY29sIDJcclxuICAgICAgICBbMywgMV0sIC8vIGltYWdlIHJvdyAxIGNvbCA0XHJcbiAgICAgICAgWzAsIDFdLCAvLyBpbWFnZSByb3cgMSBjb2wgMlxyXG4gICAgICBdLFxyXG4gICAgICB3YWxrVXA6IFtcclxuICAgICAgICBbMSwgMl0sIC8vIGltYWdlIHJvdyAxIGNvbCAxXHJcbiAgICAgICAgWzAsIDJdLCAvLyBpbWFnZSByb3cgMSBjb2wgMlxyXG4gICAgICAgIFszLCAyXSwgLy8gaW1hZ2Ugcm93IDEgY29sIDRcclxuICAgICAgICBbMCwgMl0sIC8vIGltYWdlIHJvdyAxIGNvbCAyXHJcbiAgICAgIF0sXHJcbiAgICAgIHdhbGtMZWZ0OiBbXHJcbiAgICAgICAgWzEsIDNdLCAvLyBpbWFnZSByb3cgMSBjb2wgMVxyXG4gICAgICAgIFswLCAzXSwgLy8gaW1hZ2Ugcm93IDEgY29sIDJcclxuICAgICAgICBbMywgM10sIC8vIGltYWdlIHJvdyAxIGNvbCA0XHJcbiAgICAgICAgWzAsIDNdLCAvLyBpbWFnZSByb3cgMSBjb2wgMlxyXG4gICAgICBdLFxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBTZXQgQW5pbWF0aW9uIEZyYW1lXHJcbiAgICB0aGlzLmN1cnJlbnRBbmltYXRpb24gPSBjb25maWcuY3VycmVudEFuaW1hdGlvbiB8fCBcImlkbGVEb3duXCI7XHJcbiAgICB0aGlzLmN1cnJlbnRBbmltYXRpb25GcmFtZSA9IDA7XHJcbiAgICB0aGlzLmFuaW1hdGlvbkZyYW1lTGltaXQgPVxyXG4gICAgICBjb25maWcuYW5pbWF0aW9uRnJhbWVMaW1pdCB8fCBjb25zdGFudHMuYW5pbWF0aW9uRnJhbWVMaW1pdDtcclxuICAgIHRoaXMuYW5pbWF0aW9uRnJhbWVQcm9ncmVzcyA9IHRoaXMuYW5pbWF0aW9uRnJhbWVMaW1pdDtcclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIiB0aGlzLmFuaW1hdGlvbkZyYW1lUHJvZ3Jlc3NcIiwgdGhpcy5hbmltYXRpb25GcmFtZVByb2dyZXNzKTtcclxuICAgIC8vXHJcbiAgICB0aGlzLmdhbWVPYmplY3QgPSBjb25maWcuZ2FtZU9iamVjdDtcclxuICB9XHJcblxyXG4gIC8vIEdldCBDdXJyZW50IEFuaW1hdGlvbiBGcmFtZVxyXG4gIC8qKlxyXG4gICAqIEByZXR1cm4ge1tOdW1iZXIsIE51bWJlcl0gfCB1bmRlZmluZWQgfVxyXG4gICAqL1xyXG4gIGdldCBmcmFtZSgpIHtcclxuICAgIHJldHVybiB0aGlzLmFuaW1hdGlvbnNbdGhpcy5jdXJyZW50QW5pbWF0aW9uXVt0aGlzLmN1cnJlbnRBbmltYXRpb25GcmFtZV07XHJcbiAgfVxyXG5cclxuICBzZXRBbmltYXRpb24oa2V5KSB7XHJcbiAgICBpZiAodGhpcy5jdXJyZW50QW5pbWF0aW9uICE9PSBrZXkpIHtcclxuICAgICAgdGhpcy5jdXJyZW50QW5pbWF0aW9uID0ga2V5O1xyXG4gICAgICB0aGlzLmN1cnJlbnRBbmltYXRpb25GcmFtZSA9IDA7XHJcbiAgICAgIHRoaXMuYW5pbWF0aW9uRnJhbWVQcm9ncmVzcyA9IHRoaXMuYW5pbWF0aW9uRnJhbWVMaW1pdDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZUFuaW1hdGlvblByb2dyZXNzKCkge1xyXG4gICAgLy8gRG93bnRpY2sgRnJhbWUgUHJvZ3Jlc3NcclxuICAgIGlmICh0aGlzLmFuaW1hdGlvbkZyYW1lUHJvZ3Jlc3MgPiAwKSB7XHJcbiAgICAgIHRoaXMuYW5pbWF0aW9uRnJhbWVQcm9ncmVzcyAtPSAxO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmVzZXQgdGhlIGNvdW50ZXJcclxuICAgIHRoaXMuYW5pbWF0aW9uRnJhbWVQcm9ncmVzcyA9IHRoaXMuYW5pbWF0aW9uRnJhbWVMaW1pdDtcclxuICAgIHRoaXMuY3VycmVudEFuaW1hdGlvbkZyYW1lICs9IDE7XHJcblxyXG4gICAgaWYgKHRoaXMuZnJhbWUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLmN1cnJlbnRBbmltYXRpb25GcmFtZSA9IDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEcmF3IENvbnRleHRcclxuICAgKiBAcGFyYW0ge0NhbnZhc1JlbmRlcmluZ0NvbnRleHQyRH0gY3R4XHJcbiAgICogQHBhcmFtIHtHYW1lT2JqZWN0fSBjYW1lcmFQZXJzb25cclxuICAgKi9cclxuICBkcmF3KGN0eCwgY2FtZXJhUGVyc29uKSB7XHJcbiAgICBjb25zdCB4ID1cclxuICAgICAgdGhpcy5nYW1lT2JqZWN0LnggLVxyXG4gICAgICB0aGlzLnJlbW92ZVNxdWFyZVNpemUueCArXHJcbiAgICAgIHdpdGhHcmlkcygxMC41KSAtXHJcbiAgICAgIGNhbWVyYVBlcnNvbi54OyAvLyBSZW1vdmUgVW5uZWNlc3Nhcnkgd2lkdGhcclxuICAgIGNvbnN0IHkgPVxyXG4gICAgICB0aGlzLmdhbWVPYmplY3QueSAtXHJcbiAgICAgIHRoaXMucmVtb3ZlU3F1YXJlU2l6ZS55ICtcclxuICAgICAgd2l0aEdyaWRzKDYpIC1cclxuICAgICAgY2FtZXJhUGVyc29uLnk7IC8vIFJlbW92ZSBVbm5lY2Vzc2FyeSBoZWlnaHRcclxuICAgIGNvbnN0IFtmcmFtZVgsIGZyYW1lWV0gPSB0aGlzLmZyYW1lO1xyXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5mcmFtZSk7XHJcblxyXG4gICAgLy8gY29uc29sZS5sb2coXCJGcmFtZVhcIiwgZnJhbWVYKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiRnJhbWVZXCIsIGZyYW1lWSk7XHJcblxyXG4gICAgLy8gV2hlbiBJbWFnZSBMb2FkaW5nXHJcbiAgICB0aGlzLmltYWdlSXNMb2FkZWQgJiZcclxuICAgICAgY3R4LmRyYXdJbWFnZShcclxuICAgICAgICB0aGlzLmltYWdlLCAvLyBJbnNlcnQgSW1hZ2VcclxuICAgICAgICBmcmFtZVggKiBjb25zdGFudHMuc3F1YXJlU2l6ZSwgLy8gWCBmcm9tIEltYWdlXHJcbiAgICAgICAgZnJhbWVZICogY29uc3RhbnRzLnNxdWFyZVNpemUsIC8vIFkgZnJvbSBJbWFnZVxyXG4gICAgICAgIHRoaXMuc3F1YXJlU2l6ZSwgLy8gV2lkdGggRnJvbSBJbWFnZSxcclxuICAgICAgICB0aGlzLnNxdWFyZVNpemUsIC8vIEhlaWdodCBGcm9tIEltYWdlXHJcbiAgICAgICAgeCwgLy8gWCBmb3IgQ2FudmFzXHJcbiAgICAgICAgeSwgLy8gWSBmb3IgQ2FudmFzXHJcbiAgICAgICAgdGhpcy5zcXVhcmVTaXplLCAvLyBXaWR0aCBGb3IgQ2FudmFzXHJcbiAgICAgICAgdGhpcy5zcXVhcmVTaXplIC8vIEhlaWdodCBGb3IgQ2FudmFzXHJcbiAgICAgICk7XHJcblxyXG4gICAgLy8gQ2FsbCBBbmltYXRpb25cclxuICAgIHRoaXMudXBkYXRlQW5pbWF0aW9uUHJvZ3Jlc3MoKTtcclxuXHJcbiAgICB0aGlzLnNoYWRvd0ltYWdlTG9hZGVkICYmXHJcbiAgICAgIGN0eC5kcmF3SW1hZ2UoXHJcbiAgICAgICAgdGhpcy5zaGFkb3dJbWFnZSwgLy8gSW5zZXJ0IEltYWdlXHJcbiAgICAgICAgeCwgLy8gWCBmb3IgQ2FudmFzXHJcbiAgICAgICAgeSAvLyBZIGZvciBDYW52YXNcclxuICAgICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNwcml0ZTtcclxuIiwiaW1wb3J0IEtleVByZXNzTGlzdGVuZXIgZnJvbSBcIi4vS2V5UHJlc3NMaXN0ZW5lclwiO1xyXG5cclxuY2xhc3MgVGV4dE1lc3NhZ2Uge1xyXG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xyXG4gICAgdGhpcy50ZXh0ID0gY29uZmlnLnRleHQgfHwgXCJcIjtcclxuICAgIHRoaXMub25Db21wbGV0ZSA9IGNvbmZpZy5vbkNvbXBsZXRlO1xyXG4gICAgdGhpcy5lbGVtZW50ID0gbnVsbDtcclxuICB9XHJcblxyXG4gIGNyZWF0ZUVsZW1lbnQoKSB7XHJcbiAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJUZXh0TWVzc2FnZVwiKTtcclxuXHJcbiAgICB0aGlzLmVsZW1lbnQuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgIDxwIGNsYXNzPVwiVGV4dE1lc3NhZ2VfcFwiPiR7dGhpcy50ZXh0fTwvcD5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiVGV4dE1lc3NhZ2VfYnV0dG9uXCI+TmV4dDwvYnV0dG9uPlxyXG4gICAgYDtcclxuXHJcbiAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICB0aGlzLmRvbmUoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHR5cGUge0tleVByZXNzTGlzdGVuZXJ9XHJcbiAgICAgKi9cclxuICAgIHRoaXMuYWN0aW9uTGlzdGVuZXIgPSBuZXcgS2V5UHJlc3NMaXN0ZW5lcihcIkVudGVyXCIsICgpID0+IHtcclxuICAgICAgdGhpcy5hY3Rpb25MaXN0ZW5lci51bmJpbmQoKTtcclxuICAgICAgdGhpcy5kb25lKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmFjdGlvblNwYWNlTGlzdGVuZXIgPSBuZXcgS2V5UHJlc3NMaXN0ZW5lcihcIlNwYWNlXCIsICgpID0+IHtcclxuICAgICAgdGhpcy5hY3Rpb25TcGFjZUxpc3RlbmVyLnVuYmluZCgpO1xyXG4gICAgICB0aGlzLmRvbmUoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZG9uZSgpIHtcclxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmUoKTtcclxuICAgIHRoaXMub25Db21wbGV0ZSgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gY29udGFpbmVyXHJcbiAgICovXHJcbiAgaW5pdChjb250YWluZXIpIHtcclxuICAgIHRoaXMuY3JlYXRlRWxlbWVudCgpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUZXh0TWVzc2FnZTtcclxuIiwiaW1wb3J0IGNvbnN0YW50cyBmcm9tIFwiLi4vRGF0YS9jb25zdGFudHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBkcmF3SW1hZ2UgPSAoc3JjLCBjYikgPT4ge1xyXG4gIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xyXG4gIGltZy5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICBpZiAoY2IpIHtcclxuICAgICAgY2IoaW1nKTtcclxuICAgIH1cclxuICB9O1xyXG4gIGltZy5zcmMgPSBzcmM7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgd2l0aEdyaWRzID0gKG4pID0+IHtcclxuICByZXR1cm4gbiAqIGNvbnN0YW50cy5oYWxmU3F1YXJlU2l6ZTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBhc0dyaWRDb29yZCA9ICh4LCB5KSA9PiB7XHJcbiAgcmV0dXJuIGAke3ggKiBjb25zdGFudHMuaGFsZlNxdWFyZVNpemV9LCR7eSAqIGNvbnN0YW50cy5oYWxmU3F1YXJlU2l6ZX1gO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IG5leHRQb3NpdGlvbiA9IChjdXJYLCBjdXJZLCBkaXJlY3Rpb24pID0+IHtcclxuICBsZXQgeCwgeSwgc2l6ZTtcclxuICB4ID0gY3VyWDtcclxuICB5ID0gY3VyWTtcclxuICBzaXplID0gMTY7XHJcbiAgaWYgKGRpcmVjdGlvbiA9PT0gXCJsZWZ0XCIpIHtcclxuICAgIHggLT0gc2l6ZTtcclxuICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gXCJyaWdodFwiKSB7XHJcbiAgICB4ICs9IHNpemU7XHJcbiAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09IFwidXBcIikge1xyXG4gICAgeSAtPSBzaXplO1xyXG4gIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSBcImRvd25cIikge1xyXG4gICAgeSArPSBzaXplO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHsgeCwgeSB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGVtaXRFdmVudCA9IChuYW1lLCBkZXRhaWwpID0+IHtcclxuICAvLyBXZSBGaW5pc2hlZCB0aGUgd2Fsa1xyXG4gIGNvbnN0IGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KG5hbWUsIHtcclxuICAgIGRldGFpbCxcclxuICB9KTtcclxuXHJcbiAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChldmVudCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgb3Bwb3NpdGVEaXJlY3Rpb24gPSAoZGlyZWN0aW9uKSA9PiB7XHJcbiAgaWYgKGRpcmVjdGlvbiA9PT0gXCJsZWZ0XCIpIHtcclxuICAgIHJldHVybiBcInJpZ2h0XCI7XHJcbiAgfVxyXG4gIGlmIChkaXJlY3Rpb24gPT09IFwicmlnaHRcIikge1xyXG4gICAgcmV0dXJuIFwibGVmdFwiO1xyXG4gIH1cclxuICBpZiAoZGlyZWN0aW9uID09PSBcInVwXCIpIHtcclxuICAgIHJldHVybiBcImRvd25cIjtcclxuICB9XHJcblxyXG4gIHJldHVybiBcInVwXCI7XHJcbn07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IE92ZXJXb3JsZCBmcm9tIFwiLi9HYW1lL092ZXJXb3JsZFwiO1xyXG5cclxuY29uc3Qgd29scmQgPSBuZXcgT3ZlcldvcmxkKHtcclxuICBlbGVtZW50OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWUtY29udGFpbmVyXCIpLFxyXG59KTtcclxuXHJcbndvbHJkLmluaXQoKTtcclxuIl0sIm5hbWVzIjpbIlBlcnNvbiIsImFzR3JpZENvb3JkIiwid2l0aEdyaWRzIiwiT3ZlcldvcmxkTWFwc0xpc3QiLCJEZW1vUm9vbSIsImxvd2VyU3JjIiwidXBwZXJTcmMiLCJnYW1lT2JqZWN0cyIsImhlcm8iLCJpc1BsYXllckNvbnRyb2xsZWQiLCJ4IiwieSIsInNyYyIsIm5wYzEiLCJiZWhhdmlvckxvb3AiLCJ0eXBlIiwiZGlyZWN0aW9uIiwidGltZSIsInRhbGtpbmciLCJldmVudHMiLCJ0ZXh0IiwiZmFjZUhlcm8iLCJucGMyIiwid2FsbHMiLCJjdXRzY2VuZVNwYWNlcyIsIndobyIsIm1hcCIsIktpdGNoZW4iLCJucGMzIiwic3F1YXJlU2l6ZSIsImhhbGZTcXVhcmVTaXplIiwibW92aW5nUHJvZ3Jlc3MiLCJhbmltYXRpb25GcmFtZUxpbWl0IiwiUGVyc29uV2Fsa2luZ0NvbXBsZXRlIiwiUGVyc29uU3RhbmRDb21wbGV0ZSIsIkRpcmVjdGlvbklucHV0IiwiY29uc3RydWN0b3IiLCJoZWxkRGlyZWN0aW9ucyIsIkFycm93VXAiLCJLZXlXIiwiQXJyb3dEb3duIiwiS2V5UyIsIkFycm93TGVmdCIsIktleUEiLCJBcnJvd1JpZ2h0IiwiS2V5RCIsImluaXQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiZGlyIiwiY29kZSIsImluZGV4T2YiLCJ1bnNoaWZ0IiwiaW5kZXgiLCJzcGxpY2UiLCJPdmVyV29ybGRFdmVudCIsIk92ZXJXb3JsZE1hcCIsIlNwcml0ZSIsIkdhbWVPYmplY3QiLCJjb25maWciLCJpZCIsImlzTW91bnRlZCIsImlzVXNlU2hhZG93IiwidXNlU2hhZG93IiwidW5kZWZpbmVkIiwic3ByaXRlIiwiZ2FtZU9iamVjdCIsInJlbW92ZVNxdWFyZVNpemUiLCJiZWhhdmlvckxvb3BJbmRleCIsIm1vdW50IiwiYWRkV2FsbCIsInNldFRpbWVvdXQiLCJkb0JlaGF2aW9yRXZlbnQiLCJ1cGRhdGUiLCJpc0N1dHNjZW5lUGxheWluZyIsImxlbmd0aCIsImlzU3RhbmRpbmciLCJldmVudCIsImV2ZW50SGFuZGxlciIsIktleVByZXNzTGlzdGVuZXIiLCJrZXlDb2RlIiwiY2FsbGJhY2siLCJrZXlTYWZlIiwia2V5ZG93bkZ1bmN0aW9uIiwia2V5dXBGdW5jdGlvbiIsInVuYmluZCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjb25zdGFudHMiLCJPdmVyV29ybGQiLCJlbGVtZW50IiwiY2FudmFzIiwicXVlcnlTZWxlY3RvciIsImN0eCIsImdldENvbnRleHQiLCJzdGFydEdhbWVMb29wIiwic3RlcCIsImNsZWFyUmVjdCIsIndpZHRoIiwiaGVpZ2h0IiwiY2FtZXJhUGVyc29uIiwiT2JqZWN0IiwidmFsdWVzIiwiZm9yRWFjaCIsIm9iaiIsImFycm93IiwiZGlyZWN0aW9uQ29udHJvbGxlciIsImRyYXdMb3dlckltYWdlIiwic29ydCIsImEiLCJiIiwiZHJhdyIsImRyYXdVcHBlckltYWdlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYmluZEFjdGlvbklucHV0IiwiY2hlY2tGb3JBY3Rpb25DdXRzY2VuZSIsImJpbmRIZXJvUG9zaXRpb25DaGVjayIsImRldGFpbCIsIndob0lkIiwiY2hlY2tGb3JGb290c3RlcEN1dHNjZW5lIiwic3RhcnRNYXAiLCJtYXBDb25maWciLCJvdmVyV29ybGQiLCJtb3VudE9iamVjdHMiLCJzdGFydEN1dFNjZW5lIiwiVGV4dE1lc3NhZ2UiLCJvcHBvc2l0ZURpcmVjdGlvbiIsIlByb21pc2UiLCJyZXNvbHZlIiwic3RhbmQiLCJzdGFydEJlaGF2aW9yIiwiY29tcGxldGVIYW5kbGVyIiwid2FsayIsInJldHJ5IiwidGV4dE1lc3NhZ2UiLCJtZXNzYWdlIiwib25Db21wbGV0ZSIsIm1lc3NhZ2VDb250YWluZXIiLCJjaGFuZ2VNYXAiLCJuZXh0UG9zaXRpb24iLCJsb3dlckxheWVyIiwiSW1hZ2UiLCJ1cHBlckxheWVyIiwiZHJhd0ltYWdlIiwiaXNTcGFjZVRha2VuIiwiY3VyWCIsImN1clkiLCJrZXlzIiwia2V5Iiwib2JqZWN0IiwibmV4dENvb3JkIiwibWF0Y2giLCJmaW5kIiwiaSIsInJlbW92ZVdhbGwiLCJtb3ZlV2FsbCIsIndhc1giLCJ3YXNZIiwiZW1pdEV2ZW50IiwibW92aW5nUHJvZ3Jlc3NSZW1haW5pZyIsImRpcmVjdGlvblVwZGF0ZSIsInVwIiwiZG93biIsImxlZnQiLCJyaWdodCIsInN0YXRlIiwidXBkYXRlUG9zaXRpb24iLCJ1cGRhdGVTcHJpbnQiLCJiZWhhdmlvciIsInByb3BlcnR5IiwiY2hhbmdlIiwic2V0QW5pbWF0aW9uIiwiY2FwaXRhbGl6ZUZpcnN0TGV0dGVyIiwic3RyaW5nIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsImltYWdlIiwiaW1hZ2VJc0xvYWRlZCIsInNoYWRvd0ltYWdlIiwic2hhZG93SW1hZ2VMb2FkZWQiLCJhbmltYXRpb25zIiwiaWRsZURvd24iLCJpZGxlUmlnaHQiLCJpZGxlVXAiLCJpZGxlTGVmdCIsIndhbGtEb3duIiwid2Fsa1JpZ2h0Iiwid2Fsa1VwIiwid2Fsa0xlZnQiLCJjdXJyZW50QW5pbWF0aW9uIiwiY3VycmVudEFuaW1hdGlvbkZyYW1lIiwiYW5pbWF0aW9uRnJhbWVQcm9ncmVzcyIsImZyYW1lIiwidXBkYXRlQW5pbWF0aW9uUHJvZ3Jlc3MiLCJmcmFtZVgiLCJmcmFtZVkiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiaW5uZXJIVE1MIiwiZG9uZSIsImFjdGlvbkxpc3RlbmVyIiwiYWN0aW9uU3BhY2VMaXN0ZW5lciIsInJlbW92ZSIsImNvbnRhaW5lciIsImFwcGVuZENoaWxkIiwiY2IiLCJpbWciLCJvbmxvYWQiLCJuIiwic2l6ZSIsIm5hbWUiLCJDdXN0b21FdmVudCIsImRpc3BhdGNoRXZlbnQiLCJ3b2xyZCJdLCJzb3VyY2VSb290IjoiIn0=