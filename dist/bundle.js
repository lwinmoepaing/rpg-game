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
/* harmony import */ var _Game_GameObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Game/GameObject */ "./src/Game/GameObject.js");
/* harmony import */ var _Game_Person__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Game/Person */ "./src/Game/Person.js");
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/helper */ "./src/utils/helper.js");



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
      hero: new _Game_Person__WEBPACK_IMPORTED_MODULE_1__["default"]({
        isPlayerControlled: true,
        x: (0,_utils_helper__WEBPACK_IMPORTED_MODULE_2__.withGrids)(2),
        y: (0,_utils_helper__WEBPACK_IMPORTED_MODULE_2__.withGrids)(4),
        src: "/public/images/characters/people/hero.png"
      }),
      npc1: new _Game_Person__WEBPACK_IMPORTED_MODULE_1__["default"]({
        x: (0,_utils_helper__WEBPACK_IMPORTED_MODULE_2__.withGrids)(7),
        y: (0,_utils_helper__WEBPACK_IMPORTED_MODULE_2__.withGrids)(9),
        src: "/public/images/characters/people/npc1.png ",
        behaviorLoop: [{
          type: "stand",
          direction: "left",
          time: 800
        }, {
          type: "stand",
          direction: "up",
          time: 800
        }, {
          type: "stand",
          direction: "right",
          time: 1200
        }, {
          type: "stand",
          direction: "up",
          time: 300
        }]
      }),
      npc2: new _Game_Person__WEBPACK_IMPORTED_MODULE_1__["default"]({
        x: (0,_utils_helper__WEBPACK_IMPORTED_MODULE_2__.withGrids)(3),
        y: (0,_utils_helper__WEBPACK_IMPORTED_MODULE_2__.withGrids)(7),
        src: "/public/images/characters/people/npc2.png ",
        behaviorLoop: [{
          type: "walk",
          direction: "left"
        }, {
          type: "stand",
          direction: "up",
          time: 800
        }, {
          type: "walk",
          direction: "up"
        }, {
          type: "walk",
          direction: "right"
        }, {
          type: "walk",
          direction: "down"
        }]
      })
    },
    walls: {
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_2__.asGridCoord)(7, 6)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_2__.asGridCoord)(8, 6)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_2__.asGridCoord)(7, 7)]: true,
      [(0,_utils_helper__WEBPACK_IMPORTED_MODULE_2__.asGridCoord)(8, 7)]: true
    }
  },
  Kitchen: {
    lowerSrc: "/public/images/maps/KitchenLower.png",
    upperSrc: "/public/images/maps/KitchenUpper.png",
    gameObjects: {// hero: new GameObject({
      //   x: withGrids(3),
      //   y: withGrids(5),
      // }),
      // npc1: new GameObject({
      //   x: withGrids(9),
      //   y: withGrids(6),
      //   src: "/public/images/characters/people/npc2.png ",
      // }),
      // npc3: new GameObject({
      //   x: withGrids(10),
      //   y: withGrids(8),
      //   src: "/public/images/characters/people/npc3.png ",
      // }),
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
  }
  /**
   * @param {OverWorldMap} map
   */


  mount(map) {
    console.log("Mounting");
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
      if (map.isCutscenePlaying || _this.behaviorLoop.length === 0) {
        return;
      }

      var event = _this.behaviorLoop[_this.behaviorLoopIndex];
      event.who = _this.id;
      var eventHandler = new _OverWorldEvent__WEBPACK_IMPORTED_MODULE_0__["default"]({
        map: map,
        eventConfig: event
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

      Object.values(this.map.gameObjects).forEach(
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

  init() {
    this.map = new _OverWorldMap__WEBPACK_IMPORTED_MODULE_3__["default"](_Data_AllMapList__WEBPACK_IMPORTED_MODULE_0__.OverWorldMapsList.DemoRoom);
    this.map.mountObjects();
    this.directionController = new _DirectionInput__WEBPACK_IMPORTED_MODULE_4__["default"]();
    this.directionController.init(); // Start Game Loop

    this.startGameLoop();
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



class OverWorldEvent {
  /**
   * @param {Object} config
   * @param {Object} config.eventConfig
   * @param {'walk' | 'stand' } config.eventConfig.type
   * @param {String} config.eventConfig.who
   * @param {Number} config.eventConfig.time
   * @param {'up' | 'down' | 'left' | 'right' } config.eventConfig.direction
   * @param {OverWorldMap} config.map
   */
  constructor(config) {
    var {
      map,
      eventConfig
    } = config;
    this.map = map;
    this.eventConfig = eventConfig;
  }
  /**
   * @return {Promise<Any>}
   */


  init() {
    return new Promise(resolve => {
      this[this.eventConfig.type](resolve);
    });
  }

  stand(resolve) {
    var who = this.map.gameObjects[this.eventConfig.who];
    who.startBehavior({
      map: this.map
    }, {
      type: "stand",
      direction: this.eventConfig.direction,
      time: this.eventConfig.time
    });

    var completeHandler = e => {
      if (e.detail.whoId === this.eventConfig.who) {
        document.removeEventListener(_Data_constants__WEBPACK_IMPORTED_MODULE_1__["default"].events.PersonStandComplete, completeHandler);
        resolve();
      }
    };

    document.addEventListener(_Data_constants__WEBPACK_IMPORTED_MODULE_1__["default"].events.PersonStandComplete, completeHandler);
  }

  walk(resolve) {
    var who = this.map.gameObjects[this.eventConfig.who];
    who.startBehavior({
      map: this.map
    }, {
      type: "walk",
      direction: this.eventConfig.direction,
      retry: true
    });

    var completeHandler = e => {
      if (e.detail.whoId === this.eventConfig.who) {
        document.removeEventListener(_Data_constants__WEBPACK_IMPORTED_MODULE_1__["default"].events.PersonWalkingComplete, completeHandler);
        resolve();
      }
    };

    document.addEventListener(_Data_constants__WEBPACK_IMPORTED_MODULE_1__["default"].events.PersonWalkingComplete, completeHandler);
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


/**
 * @name OverWorlMap
 */

class OverWorldMap {
  /**
   * @param {Object} config
   * @param {String} config.lowerSrc
   * @param {String} config.upperSrc
   * @param {Object} config.walls
   * @param {{hero: GameObject, npc1: GameObject, npc2: GameObject}} config.gameObjects
   */
  constructor(config) {
    this.gameObjects = config.gameObjects;
    this.walls = config.walls || {};
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

  /**
   * @param {Number} x
   * @param {Number} y
   */


  addMap(x, y) {} // Other Object Walls


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
   */


  update(state) {
    if (this.movingProgressRemainig > 0) {
      this.updatePosition();
    } else {
      if (this.isPlayerControlled && state.arrow) {
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
      setTimeout(() => {
        (0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.emitEvent)(_Data_constants__WEBPACK_IMPORTED_MODULE_0__["default"].events.PersonStandComplete, {
          whoId: this.id
        });
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
/* harmony export */   "emitEvent": () => (/* binding */ emitEvent)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SXpKLFNBQVMsS0FBSyxJQUFsQixFQUF3QjtBQUM3QkwsSUFBQUEsQ0FBQyxJQUFJOEosSUFBTDtBQUNELEdBRk0sTUFFQSxJQUFJekosU0FBUyxLQUFLLE1BQWxCLEVBQTBCO0FBQy9CTCxJQUFBQSxDQUFDLElBQUk4SixJQUFMO0FBQ0Q7O0FBRUQsU0FBTztBQUFFL0osSUFBQUEsQ0FBRjtBQUFLQyxJQUFBQTtBQUFMLEdBQVA7QUFDRCxDQWhCTTtBQWtCQSxJQUFNbUgsU0FBUyxHQUFHLENBQUM0QyxJQUFELEVBQU9qRSxNQUFQLEtBQWtCO0FBQ3pDO0FBQ0EsTUFBTWpDLEtBQUssR0FBRyxJQUFJbUcsV0FBSixDQUFnQkQsSUFBaEIsRUFBc0I7QUFDbENqRSxJQUFBQTtBQURrQyxHQUF0QixDQUFkO0FBSUFoRSxFQUFBQSxRQUFRLENBQUNtSSxhQUFULENBQXVCcEcsS0FBdkI7QUFDRCxDQVBNOzs7Ozs7VUN0Q1A7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05BO0FBRUEsSUFBTXFHLEtBQUssR0FBRyxJQUFJakcsdURBQUosQ0FBYztBQUMxQkMsRUFBQUEsT0FBTyxFQUFFcEMsUUFBUSxDQUFDc0MsYUFBVCxDQUF1QixpQkFBdkI7QUFEaUIsQ0FBZCxDQUFkO0FBSUE4RixLQUFLLENBQUNySSxJQUFOLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ycGctZ2FtZS8uL3NyYy9EYXRhL0FsbE1hcExpc3QuanMiLCJ3ZWJwYWNrOi8vcnBnLWdhbWUvLi9zcmMvRGF0YS9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vcnBnLWdhbWUvLi9zcmMvR2FtZS9EaXJlY3Rpb25JbnB1dC5qcyIsIndlYnBhY2s6Ly9ycGctZ2FtZS8uL3NyYy9HYW1lL0dhbWVPYmplY3QuanMiLCJ3ZWJwYWNrOi8vcnBnLWdhbWUvLi9zcmMvR2FtZS9PdmVyV29ybGQuanMiLCJ3ZWJwYWNrOi8vcnBnLWdhbWUvLi9zcmMvR2FtZS9PdmVyV29ybGRFdmVudC5qcyIsIndlYnBhY2s6Ly9ycGctZ2FtZS8uL3NyYy9HYW1lL092ZXJXb3JsZE1hcC5qcyIsIndlYnBhY2s6Ly9ycGctZ2FtZS8uL3NyYy9HYW1lL1BlcnNvbi5qcyIsIndlYnBhY2s6Ly9ycGctZ2FtZS8uL3NyYy9HYW1lL1Nwcml0ZS5qcyIsIndlYnBhY2s6Ly9ycGctZ2FtZS8uL3NyYy91dGlscy9oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vcnBnLWdhbWUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcnBnLWdhbWUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3JwZy1nYW1lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcnBnLWdhbWUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9ycGctZ2FtZS8uL3NyYy9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWVPYmplY3QgZnJvbSBcIi4uL0dhbWUvR2FtZU9iamVjdFwiO1xyXG5pbXBvcnQgUGVyc29uIGZyb20gXCIuLi9HYW1lL1BlcnNvblwiO1xyXG5pbXBvcnQgeyBhc0dyaWRDb29yZCwgd2l0aEdyaWRzIH0gZnJvbSBcIi4uL3V0aWxzL2hlbHBlclwiO1xyXG5cclxuLyoqXHJcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFJvb21PYmpcclxuICogQHByb3BlcnR5IHtTdHJpbmd9IGxvd2VyU3JjIC1cclxuICogQHByb3BlcnR5IHtTdHJpbmd9IHVwcGVyU3JjIC1cclxuICogQHByb3BlcnR5IHtPYmplY3R9IGdhbWVPYmplY3RzIC1cclxuICovXHJcblxyXG5leHBvcnQgY29uc3QgT3ZlcldvcmxkTWFwc0xpc3QgPSB7XHJcbiAgLyoqXHJcbiAgICogQHR5cGUge1Jvb21PYmp9XHJcbiAgICovXHJcbiAgRGVtb1Jvb206IHtcclxuICAgIGxvd2VyU3JjOiBcIi9wdWJsaWMvaW1hZ2VzL21hcHMvRGVtb0xvd2VyLnBuZ1wiLFxyXG4gICAgdXBwZXJTcmM6IFwiL3B1YmxpYy9pbWFnZXMvbWFwcy9EZW1vVXBwZXIucG5nXCIsXHJcbiAgICBnYW1lT2JqZWN0czoge1xyXG4gICAgICBoZXJvOiBuZXcgUGVyc29uKHtcclxuICAgICAgICBpc1BsYXllckNvbnRyb2xsZWQ6IHRydWUsXHJcbiAgICAgICAgeDogd2l0aEdyaWRzKDIpLFxyXG4gICAgICAgIHk6IHdpdGhHcmlkcyg0KSxcclxuICAgICAgICBzcmM6IFwiL3B1YmxpYy9pbWFnZXMvY2hhcmFjdGVycy9wZW9wbGUvaGVyby5wbmdcIixcclxuICAgICAgfSksXHJcbiAgICAgIG5wYzE6IG5ldyBQZXJzb24oe1xyXG4gICAgICAgIHg6IHdpdGhHcmlkcyg3KSxcclxuICAgICAgICB5OiB3aXRoR3JpZHMoOSksXHJcbiAgICAgICAgc3JjOiBcIi9wdWJsaWMvaW1hZ2VzL2NoYXJhY3RlcnMvcGVvcGxlL25wYzEucG5nIFwiLFxyXG4gICAgICAgIGJlaGF2aW9yTG9vcDogW1xyXG4gICAgICAgICAgeyB0eXBlOiBcInN0YW5kXCIsIGRpcmVjdGlvbjogXCJsZWZ0XCIsIHRpbWU6IDgwMCB9LFxyXG4gICAgICAgICAgeyB0eXBlOiBcInN0YW5kXCIsIGRpcmVjdGlvbjogXCJ1cFwiLCB0aW1lOiA4MDAgfSxcclxuICAgICAgICAgIHsgdHlwZTogXCJzdGFuZFwiLCBkaXJlY3Rpb246IFwicmlnaHRcIiwgdGltZTogMTIwMCB9LFxyXG4gICAgICAgICAgeyB0eXBlOiBcInN0YW5kXCIsIGRpcmVjdGlvbjogXCJ1cFwiLCB0aW1lOiAzMDAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9KSxcclxuICAgICAgbnBjMjogbmV3IFBlcnNvbih7XHJcbiAgICAgICAgeDogd2l0aEdyaWRzKDMpLFxyXG4gICAgICAgIHk6IHdpdGhHcmlkcyg3KSxcclxuICAgICAgICBzcmM6IFwiL3B1YmxpYy9pbWFnZXMvY2hhcmFjdGVycy9wZW9wbGUvbnBjMi5wbmcgXCIsXHJcbiAgICAgICAgYmVoYXZpb3JMb29wOiBbXHJcbiAgICAgICAgICB7IHR5cGU6IFwid2Fsa1wiLCBkaXJlY3Rpb246IFwibGVmdFwiIH0sXHJcbiAgICAgICAgICB7IHR5cGU6IFwic3RhbmRcIiwgZGlyZWN0aW9uOiBcInVwXCIsIHRpbWU6IDgwMCB9LFxyXG4gICAgICAgICAgeyB0eXBlOiBcIndhbGtcIiwgZGlyZWN0aW9uOiBcInVwXCIgfSxcclxuICAgICAgICAgIHsgdHlwZTogXCJ3YWxrXCIsIGRpcmVjdGlvbjogXCJyaWdodFwiIH0sXHJcbiAgICAgICAgICB7IHR5cGU6IFwid2Fsa1wiLCBkaXJlY3Rpb246IFwiZG93blwiIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfSksXHJcbiAgICB9LFxyXG4gICAgd2FsbHM6IHtcclxuICAgICAgW2FzR3JpZENvb3JkKDcsIDYpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDgsIDYpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDcsIDcpXTogdHJ1ZSxcclxuICAgICAgW2FzR3JpZENvb3JkKDgsIDcpXTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbiAgS2l0Y2hlbjoge1xyXG4gICAgbG93ZXJTcmM6IFwiL3B1YmxpYy9pbWFnZXMvbWFwcy9LaXRjaGVuTG93ZXIucG5nXCIsXHJcbiAgICB1cHBlclNyYzogXCIvcHVibGljL2ltYWdlcy9tYXBzL0tpdGNoZW5VcHBlci5wbmdcIixcclxuICAgIGdhbWVPYmplY3RzOiB7XHJcbiAgICAgIC8vIGhlcm86IG5ldyBHYW1lT2JqZWN0KHtcclxuICAgICAgLy8gICB4OiB3aXRoR3JpZHMoMyksXHJcbiAgICAgIC8vICAgeTogd2l0aEdyaWRzKDUpLFxyXG4gICAgICAvLyB9KSxcclxuICAgICAgLy8gbnBjMTogbmV3IEdhbWVPYmplY3Qoe1xyXG4gICAgICAvLyAgIHg6IHdpdGhHcmlkcyg5KSxcclxuICAgICAgLy8gICB5OiB3aXRoR3JpZHMoNiksXHJcbiAgICAgIC8vICAgc3JjOiBcIi9wdWJsaWMvaW1hZ2VzL2NoYXJhY3RlcnMvcGVvcGxlL25wYzIucG5nIFwiLFxyXG4gICAgICAvLyB9KSxcclxuICAgICAgLy8gbnBjMzogbmV3IEdhbWVPYmplY3Qoe1xyXG4gICAgICAvLyAgIHg6IHdpdGhHcmlkcygxMCksXHJcbiAgICAgIC8vICAgeTogd2l0aEdyaWRzKDgpLFxyXG4gICAgICAvLyAgIHNyYzogXCIvcHVibGljL2ltYWdlcy9jaGFyYWN0ZXJzL3Blb3BsZS9ucGMzLnBuZyBcIixcclxuICAgICAgLy8gfSksXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbiIsImV4cG9ydCBkZWZhdWx0IHtcclxuICBzcXVhcmVTaXplOiAzMixcclxuICBoYWxmU3F1YXJlU2l6ZTogMTYsXHJcbiAgbW92aW5nUHJvZ3Jlc3M6IDE2LFxyXG4gIGFuaW1hdGlvbkZyYW1lTGltaXQ6IDgsXHJcblxyXG4gIGV2ZW50czoge1xyXG4gICAgUGVyc29uV2Fsa2luZ0NvbXBsZXRlOiBcIlBlcnNvbldhbGtpbmdDb21wbGV0ZVwiLFxyXG4gICAgUGVyc29uU3RhbmRDb21wbGV0ZTogXCJQZXJzb25TdGFuZENvbXBsZXRlXCIsXHJcbiAgfSxcclxufTtcclxuIiwiY2xhc3MgRGlyZWN0aW9uSW5wdXQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5oZWxkRGlyZWN0aW9ucyA9IFtdO1xyXG4gICAgdGhpcy5tYXAgPSB7XHJcbiAgICAgIEFycm93VXA6IFwidXBcIixcclxuICAgICAgS2V5VzogXCJ1cFwiLFxyXG4gICAgICBBcnJvd0Rvd246IFwiZG93blwiLFxyXG4gICAgICBLZXlTOiBcImRvd25cIixcclxuICAgICAgQXJyb3dMZWZ0OiBcImxlZnRcIixcclxuICAgICAgS2V5QTogXCJsZWZ0XCIsXHJcbiAgICAgIEFycm93UmlnaHQ6IFwicmlnaHRcIixcclxuICAgICAgS2V5RDogXCJyaWdodFwiLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xyXG4gICAgICBjb25zdCBkaXIgPSB0aGlzLm1hcFtlLmNvZGVdO1xyXG5cclxuICAgICAgaWYgKGRpciAmJiB0aGlzLmhlbGREaXJlY3Rpb25zLmluZGV4T2YoZGlyKSA9PT0gLTEpIHtcclxuICAgICAgICB0aGlzLmhlbGREaXJlY3Rpb25zLnVuc2hpZnQoZGlyKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmhlbGREaXJlY3Rpb25zKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIChlKSA9PiB7XHJcbiAgICAgIGNvbnN0IGRpciA9IHRoaXMubWFwW2UuY29kZV07XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5oZWxkRGlyZWN0aW9ucy5pbmRleE9mKGRpcik7XHJcbiAgICAgIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgICAgdGhpcy5oZWxkRGlyZWN0aW9ucy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEByZXR1cm4ge0FycmF5PCdsZWZ0JyB8ICdyaWdodCcgfCAndXAnIHwgJ2Rvd24nID59XHJcbiAgICovXHJcbiAgZ2V0IGRpcmVjdGlvbigpIHtcclxuICAgIHJldHVybiB0aGlzLmhlbGREaXJlY3Rpb25zWzBdO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGlyZWN0aW9uSW5wdXQ7XHJcbiIsImltcG9ydCBPdmVyV29ybGRFdmVudCBmcm9tIFwiLi9PdmVyV29ybGRFdmVudFwiO1xyXG5pbXBvcnQgT3ZlcldvcmxkTWFwIGZyb20gXCIuL092ZXJXb3JsZE1hcFwiO1xyXG5pbXBvcnQgU3ByaXRlIGZyb20gXCIuL1Nwcml0ZVwiO1xyXG5cclxuY2xhc3MgR2FtZU9iamVjdCB7XHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBjb25maWcueFxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBjb25maWcueVxyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBjb25maWcuc3JjXHJcbiAgICogQHBhcmFtIHsnZG93bicgfCAndXAnIHwgJ2xlZnQnIHwgJ3JpZ2h0JyB8IG51bGx9IGNvbmZpZy5kaXJlY3Rpb25cclxuICAgKiBAcGFyYW0ge0Jvb2xlYW4gfCBudWxsfSBjb25maWcudXNlU2hhZG93XHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGNvbmZpZy5zcXVhcmVTaXplXHJcbiAgICogQHBhcmFtIHt7eDogTnVtYmVyLCB5OiBOdW1iZXJ9IHwgbnVsbH0gY29uZmlnLnJlbW92ZVNxdWFyZVNpemVcclxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IGNvbmZpZy5pc1BsYXllckNvbnRyb2xsZWRcclxuICAgKiBAcGFyYW0ge2FueVtdfSBjb25maWcuYmVoYXZpb3JMb29wXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XHJcbiAgICB0aGlzLmlkID0gY29uZmlnLmlkID8gY29uZmlnLmlkIDogbnVsbDtcclxuICAgIHRoaXMuaXNNb3VudGVkID0gZmFsc2U7XHJcbiAgICBjb25zdCBpc1VzZVNoYWRvdyA9XHJcbiAgICAgIGNvbmZpZy51c2VTaGFkb3cgIT09IG51bGwgJiYgY29uZmlnLnVzZVNoYWRvdyAhPT0gdW5kZWZpbmVkXHJcbiAgICAgICAgPyBjb25maWcudXNlU2hhZG93XHJcbiAgICAgICAgOiB0cnVlO1xyXG4gICAgdGhpcy54ID0gY29uZmlnLnggfHwgMDtcclxuICAgIHRoaXMueSA9IGNvbmZpZy55IHx8IDA7XHJcbiAgICB0aGlzLmRpcmVjdGlvbiA9IGNvbmZpZy5kaXJlY3Rpb24gfHwgXCJkb3duXCI7XHJcbiAgICB0aGlzLnNwcml0ZSA9IG5ldyBTcHJpdGUoe1xyXG4gICAgICBnYW1lT2JqZWN0OiB0aGlzLFxyXG4gICAgICBzcmM6IGNvbmZpZy5zcmMsXHJcbiAgICAgIHVzZVNoYWRvdzogaXNVc2VTaGFkb3csXHJcbiAgICAgIHNxdWFyZVNpemU6IGNvbmZpZy5zcXVhcmVTaXplID8gY29uZmlnLnNxdWFyZVNpemUgOiAzMixcclxuICAgICAgcmVtb3ZlU3F1YXJlU2l6ZTogY29uZmlnLnJlbW92ZVNxdWFyZVNpemVcclxuICAgICAgICA/IGNvbmZpZy5yZW1vdmVTcXVhcmVTaXplXHJcbiAgICAgICAgOiB7IHg6IDgsIHk6IDE4IH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmJlaGF2aW9yTG9vcCA9IGNvbmZpZy5iZWhhdmlvckxvb3AgPyBjb25maWcuYmVoYXZpb3JMb29wIDogW107XHJcbiAgICB0aGlzLmJlaGF2aW9yTG9vcEluZGV4ID0gMDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7T3ZlcldvcmxkTWFwfSBtYXBcclxuICAgKi9cclxuICBtb3VudChtYXApIHtcclxuICAgIGNvbnNvbGUubG9nKFwiTW91bnRpbmdcIik7XHJcbiAgICB0aGlzLmlzTW91bnRlZCA9IHRydWU7XHJcbiAgICBtYXAuYWRkV2FsbCh0aGlzLngsIHRoaXMueSk7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuZG9CZWhhdmlvckV2ZW50KG1hcCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSgpIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7T3ZlcldvcmxkTWFwfSBtYXBcclxuICAgKi9cclxuICBhc3luYyBkb0JlaGF2aW9yRXZlbnQobWFwKSB7XHJcbiAgICBpZiAobWFwLmlzQ3V0c2NlbmVQbGF5aW5nIHx8IHRoaXMuYmVoYXZpb3JMb29wLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBsZXQgZXZlbnQgPSB0aGlzLmJlaGF2aW9yTG9vcFt0aGlzLmJlaGF2aW9yTG9vcEluZGV4XTtcclxuICAgIGV2ZW50LndobyA9IHRoaXMuaWQ7XHJcbiAgICBjb25zdCBldmVudEhhbmRsZXIgPSBuZXcgT3ZlcldvcmxkRXZlbnQoeyBtYXA6IG1hcCwgZXZlbnRDb25maWc6IGV2ZW50IH0pO1xyXG4gICAgYXdhaXQgZXZlbnRIYW5kbGVyLmluaXQoKTtcclxuICAgIHRoaXMuYmVoYXZpb3JMb29wSW5kZXggKz0gMTtcclxuICAgIGlmICh0aGlzLmJlaGF2aW9yTG9vcEluZGV4ID09PSB0aGlzLmJlaGF2aW9yTG9vcC5sZW5ndGgpIHtcclxuICAgICAgdGhpcy5iZWhhdmlvckxvb3BJbmRleCA9IDA7XHJcbiAgICB9XHJcbiAgICB0aGlzLmRvQmVoYXZpb3JFdmVudChtYXApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2FtZU9iamVjdDtcclxuIiwiaW1wb3J0IHsgT3ZlcldvcmxkTWFwc0xpc3QgfSBmcm9tIFwiLi4vRGF0YS9BbGxNYXBMaXN0XCI7XHJcbmltcG9ydCBHYW1lT2JqZWN0IGZyb20gXCIuL0dhbWVPYmplY3RcIjtcclxuaW1wb3J0IFBlcnNvbiBmcm9tIFwiLi9QZXJzb25cIjtcclxuaW1wb3J0IE92ZXJXb3JsZE1hcCBmcm9tIFwiLi9PdmVyV29ybGRNYXBcIjtcclxuaW1wb3J0IERpcmVjdGlvbklucHV0IGZyb20gXCIuL0RpcmVjdGlvbklucHV0XCI7XHJcblxyXG5jbGFzcyBPdmVyV29ybGQge1xyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcclxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBjb25maWcuZWxlbWVudFxyXG4gICAqIEBwYXJhbSB7J2hlaGUnfCdoYWhhJ30gY29uZmlnLnRlc3RcclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcclxuICAgIGNvbnN0IHsgZWxlbWVudCB9ID0gY29uZmlnO1xyXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEB0eXBlIHtIVE1MQ2FudmFzRWxlbWVudH1cclxuICAgICAqL1xyXG4gICAgdGhpcy5jYW52YXMgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lLWNhbnZhc1wiKTsgLy9IVE1MQ2FudmFzRWxlbWVudFxyXG5cclxuICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHR5cGUge092ZXJXb3JsZE1hcCB8IG51bGx9XHJcbiAgICAgKi9cclxuICAgIHRoaXMubWFwID0gbnVsbDtcclxuICB9XHJcblxyXG4gIHN0YXJ0R2FtZUxvb3AoKSB7XHJcbiAgICBjb25zdCBzdGVwID0gKCkgPT4ge1xyXG4gICAgICAvLyBDbGVhciBPZiBUaGUgQ2FudmFzXHJcbiAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcclxuXHJcbiAgICAgIC8vIENhbWVyYVxyXG4gICAgICBjb25zdCBjYW1lcmFQZXJzb24gPSB0aGlzLm1hcC5nYW1lT2JqZWN0cy5oZXJvO1xyXG5cclxuICAgICAgLy8gVXBkYXRlIEFsbCBPYmplY3RzXHJcbiAgICAgIE9iamVjdC52YWx1ZXModGhpcy5tYXAuZ2FtZU9iamVjdHMpLmZvckVhY2goXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQHBhcmFtIHtHYW1lT2JqZWN0IHwgUGVyc29ufSBvYmpcclxuICAgICAgICAgKi9cclxuICAgICAgICAob2JqKSA9PiB7XHJcbiAgICAgICAgICBvYmoudXBkYXRlKHtcclxuICAgICAgICAgICAgYXJyb3c6IHRoaXMuZGlyZWN0aW9uQ29udHJvbGxlci5kaXJlY3Rpb24sXHJcbiAgICAgICAgICAgIG1hcDogdGhpcy5tYXAsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcblxyXG4gICAgICAvLyBEcmF3IHRoZSBMb3dlciBMYXllclxyXG4gICAgICB0aGlzLm1hcC5kcmF3TG93ZXJJbWFnZSh0aGlzLmN0eCwgY2FtZXJhUGVyc29uKTtcclxuXHJcbiAgICAgIC8vIE1ha2UgUGVyc29uIGFuZCBNaWRkbGUgTGF5ZXJcclxuICAgICAgT2JqZWN0LnZhbHVlcyh0aGlzLm1hcC5nYW1lT2JqZWN0cykuZm9yRWFjaChcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAcGFyYW0ge0dhbWVPYmplY3QgfCBQZXJzb259IG9ialxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIChvYmopID0+IHtcclxuICAgICAgICAgIG9iai5zcHJpdGUuZHJhdyh0aGlzLmN0eCwgY2FtZXJhUGVyc29uKTtcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcblxyXG4gICAgICB0aGlzLm1hcC5kcmF3VXBwZXJJbWFnZSh0aGlzLmN0eCwgY2FtZXJhUGVyc29uKTtcclxuXHJcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XHJcbiAgICAgICAgc3RlcCgpO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgc3RlcCgpO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpIHtcclxuICAgIHRoaXMubWFwID0gbmV3IE92ZXJXb3JsZE1hcChPdmVyV29ybGRNYXBzTGlzdC5EZW1vUm9vbSk7XHJcbiAgICB0aGlzLm1hcC5tb3VudE9iamVjdHMoKTtcclxuXHJcbiAgICB0aGlzLmRpcmVjdGlvbkNvbnRyb2xsZXIgPSBuZXcgRGlyZWN0aW9uSW5wdXQoKTtcclxuICAgIHRoaXMuZGlyZWN0aW9uQ29udHJvbGxlci5pbml0KCk7XHJcblxyXG4gICAgLy8gU3RhcnQgR2FtZSBMb29wXHJcbiAgICB0aGlzLnN0YXJ0R2FtZUxvb3AoKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE92ZXJXb3JsZDtcclxuIiwiaW1wb3J0IE92ZXJXb3JsZE1hcCBmcm9tIFwiLi9PdmVyV29ybGRNYXBcIjtcclxuaW1wb3J0IGNvbnN0YW50cyBmcm9tIFwiLi4vRGF0YS9jb25zdGFudHNcIjtcclxuXHJcbmNsYXNzIE92ZXJXb3JsZEV2ZW50IHtcclxuICAvKipcclxuICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZy5ldmVudENvbmZpZ1xyXG4gICAqIEBwYXJhbSB7J3dhbGsnIHwgJ3N0YW5kJyB9IGNvbmZpZy5ldmVudENvbmZpZy50eXBlXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IGNvbmZpZy5ldmVudENvbmZpZy53aG9cclxuICAgKiBAcGFyYW0ge051bWJlcn0gY29uZmlnLmV2ZW50Q29uZmlnLnRpbWVcclxuICAgKiBAcGFyYW0geyd1cCcgfCAnZG93bicgfCAnbGVmdCcgfCAncmlnaHQnIH0gY29uZmlnLmV2ZW50Q29uZmlnLmRpcmVjdGlvblxyXG4gICAqIEBwYXJhbSB7T3ZlcldvcmxkTWFwfSBjb25maWcubWFwXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XHJcbiAgICBjb25zdCB7IG1hcCwgZXZlbnRDb25maWcgfSA9IGNvbmZpZztcclxuICAgIHRoaXMubWFwID0gbWFwO1xyXG4gICAgdGhpcy5ldmVudENvbmZpZyA9IGV2ZW50Q29uZmlnO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxBbnk+fVxyXG4gICAqL1xyXG4gIGluaXQoKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgdGhpc1t0aGlzLmV2ZW50Q29uZmlnLnR5cGVdKHJlc29sdmUpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzdGFuZChyZXNvbHZlKSB7XHJcbiAgICBjb25zdCB3aG8gPSB0aGlzLm1hcC5nYW1lT2JqZWN0c1t0aGlzLmV2ZW50Q29uZmlnLndob107XHJcbiAgICB3aG8uc3RhcnRCZWhhdmlvcihcclxuICAgICAge1xyXG4gICAgICAgIG1hcDogdGhpcy5tYXAsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0eXBlOiBcInN0YW5kXCIsXHJcbiAgICAgICAgZGlyZWN0aW9uOiB0aGlzLmV2ZW50Q29uZmlnLmRpcmVjdGlvbixcclxuICAgICAgICB0aW1lOiB0aGlzLmV2ZW50Q29uZmlnLnRpbWUsXHJcbiAgICAgIH1cclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgY29tcGxldGVIYW5kbGVyID0gKGUpID0+IHtcclxuICAgICAgaWYgKGUuZGV0YWlsLndob0lkID09PSB0aGlzLmV2ZW50Q29uZmlnLndobykge1xyXG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgICBjb25zdGFudHMuZXZlbnRzLlBlcnNvblN0YW5kQ29tcGxldGUsXHJcbiAgICAgICAgICBjb21wbGV0ZUhhbmRsZXJcclxuICAgICAgICApO1xyXG4gICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICBjb25zdGFudHMuZXZlbnRzLlBlcnNvblN0YW5kQ29tcGxldGUsXHJcbiAgICAgIGNvbXBsZXRlSGFuZGxlclxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHdhbGsocmVzb2x2ZSkge1xyXG4gICAgY29uc3Qgd2hvID0gdGhpcy5tYXAuZ2FtZU9iamVjdHNbdGhpcy5ldmVudENvbmZpZy53aG9dO1xyXG4gICAgd2hvLnN0YXJ0QmVoYXZpb3IoXHJcbiAgICAgIHtcclxuICAgICAgICBtYXA6IHRoaXMubWFwLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdHlwZTogXCJ3YWxrXCIsXHJcbiAgICAgICAgZGlyZWN0aW9uOiB0aGlzLmV2ZW50Q29uZmlnLmRpcmVjdGlvbixcclxuICAgICAgICByZXRyeTogdHJ1ZSxcclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBjb21wbGV0ZUhhbmRsZXIgPSAoZSkgPT4ge1xyXG4gICAgICBpZiAoZS5kZXRhaWwud2hvSWQgPT09IHRoaXMuZXZlbnRDb25maWcud2hvKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICAgIGNvbnN0YW50cy5ldmVudHMuUGVyc29uV2Fsa2luZ0NvbXBsZXRlLFxyXG4gICAgICAgICAgY29tcGxldGVIYW5kbGVyXHJcbiAgICAgICAgKTtcclxuICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgY29uc3RhbnRzLmV2ZW50cy5QZXJzb25XYWxraW5nQ29tcGxldGUsXHJcbiAgICAgIGNvbXBsZXRlSGFuZGxlclxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE92ZXJXb3JsZEV2ZW50O1xyXG4iLCJpbXBvcnQgeyBuZXh0UG9zaXRpb24sIHdpdGhHcmlkcyB9IGZyb20gXCIuLi91dGlscy9oZWxwZXJcIjtcclxuaW1wb3J0IEdhbWVPYmplY3QgZnJvbSBcIi4vR2FtZU9iamVjdFwiO1xyXG5cclxuLyoqXHJcbiAqIEBuYW1lIE92ZXJXb3JsTWFwXHJcbiAqL1xyXG5jbGFzcyBPdmVyV29ybGRNYXAge1xyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcclxuICAgKiBAcGFyYW0ge1N0cmluZ30gY29uZmlnLmxvd2VyU3JjXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IGNvbmZpZy51cHBlclNyY1xyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcud2FsbHNcclxuICAgKiBAcGFyYW0ge3toZXJvOiBHYW1lT2JqZWN0LCBucGMxOiBHYW1lT2JqZWN0LCBucGMyOiBHYW1lT2JqZWN0fX0gY29uZmlnLmdhbWVPYmplY3RzXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XHJcbiAgICB0aGlzLmdhbWVPYmplY3RzID0gY29uZmlnLmdhbWVPYmplY3RzO1xyXG4gICAgdGhpcy53YWxscyA9IGNvbmZpZy53YWxscyB8fCB7fTtcclxuXHJcbiAgICB0aGlzLmxvd2VyTGF5ZXIgPSBuZXcgSW1hZ2UoKTtcclxuICAgIHRoaXMubG93ZXJMYXllci5zcmMgPSBjb25maWcubG93ZXJTcmM7XHJcblxyXG4gICAgdGhpcy51cHBlckxheWVyID0gbmV3IEltYWdlKCk7XHJcbiAgICB0aGlzLnVwcGVyTGF5ZXIuc3JjID0gY29uZmlnLnVwcGVyU3JjO1xyXG5cclxuICAgIHRoaXMuaXNDdXRzY2VuZVBsYXlpbmcgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEfSBjdHhcclxuICAgKiBAcGFyYW0ge0dhbWVPYmplY3R9IGNhbWVyYVBlcnNvblxyXG4gICAqL1xyXG4gIGRyYXdMb3dlckltYWdlKGN0eCwgY2FtZXJhUGVyc29uKSB7XHJcbiAgICBjdHguZHJhd0ltYWdlKFxyXG4gICAgICB0aGlzLmxvd2VyTGF5ZXIsXHJcbiAgICAgIHdpdGhHcmlkcygxMC41KSAtIGNhbWVyYVBlcnNvbi54LFxyXG4gICAgICB3aXRoR3JpZHMoNikgLSBjYW1lcmFQZXJzb24ueVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEfSBjdHhcclxuICAgKiBAcGFyYW0ge0dhbWVPYmplY3R9IGNhbWVyYVBlcnNvblxyXG4gICAqL1xyXG4gIGRyYXdVcHBlckltYWdlKGN0eCwgY2FtZXJhUGVyc29uKSB7XHJcbiAgICBjdHguZHJhd0ltYWdlKFxyXG4gICAgICB0aGlzLnVwcGVyTGF5ZXIsXHJcbiAgICAgIHdpdGhHcmlkcygxMC41KSAtIGNhbWVyYVBlcnNvbi54LFxyXG4gICAgICB3aXRoR3JpZHMoNikgLSBjYW1lcmFQZXJzb24ueVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBjdXJYXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGN1cllcclxuICAgKiBAcGFyYW0geyd1cCcgfCAnZG93bicgfCAnbGVmdCcgfCAncmlnaHQnIH0gZGlyZWN0aW9uXHJcbiAgICovXHJcbiAgaXNTcGFjZVRha2VuKGN1clgsIGN1clksIGRpcmVjdGlvbikge1xyXG4gICAgY29uc3QgeyB4LCB5IH0gPSBuZXh0UG9zaXRpb24oY3VyWCwgY3VyWSwgZGlyZWN0aW9uKTtcclxuICAgIHJldHVybiB0aGlzLndhbGxzW2Ake3h9LCR7eX1gXSB8fCBmYWxzZTtcclxuICB9XHJcblxyXG4gIC8vIE1vdW50aW5nIE9iamVjdFxyXG4gIG1vdW50T2JqZWN0cygpIHtcclxuICAgIC8vIE9iamVjdC52YWx1ZXModGhpcy5nYW1lT2JqZWN0cykubWFwKChvYmopID0+IHtcclxuICAgIC8vICAgb2JqLm1vdW50KHRoaXMpO1xyXG4gICAgLy8gfSk7XHJcblxyXG4gICAgT2JqZWN0LmtleXModGhpcy5nYW1lT2JqZWN0cykubWFwKChrZXkpID0+IHtcclxuICAgICAgbGV0IG9iamVjdCA9IHRoaXMuZ2FtZU9iamVjdHNba2V5XTtcclxuICAgICAgb2JqZWN0LmlkID0ga2V5O1xyXG4gICAgICBvYmplY3QubW91bnQodGhpcyk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIE1hcCBJbml0aWFsaXplXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHhcclxuICAgKiBAcGFyYW0ge051bWJlcn0geVxyXG4gICAqL1xyXG4gIGFkZE1hcCh4LCB5KSB7fVxyXG5cclxuICAvLyBPdGhlciBPYmplY3QgV2FsbHNcclxuICBhZGRXYWxsKHgsIHkpIHtcclxuICAgIHRoaXMud2FsbHNbYCR7eH0sJHt5fWBdID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHJlbW92ZVdhbGwoeCwgeSkge1xyXG4gICAgZGVsZXRlIHRoaXMud2FsbHNbYCR7eH0sJHt5fWBdO1xyXG4gIH1cclxuICAvKipcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7J3VwJyB8ICdkb3duJyB8ICdsZWZ0JyB8ICdyaWdodCcgfSBkaXJlY3Rpb25cclxuICAgKi9cclxuICBtb3ZlV2FsbCh3YXNYLCB3YXNZLCBkaXJlY3Rpb24pIHtcclxuICAgIHRoaXMucmVtb3ZlV2FsbCh3YXNYLCB3YXNZKTtcclxuICAgIGNvbnN0IHsgeCwgeSB9ID0gbmV4dFBvc2l0aW9uKHdhc1gsIHdhc1ksIGRpcmVjdGlvbik7XHJcbiAgICB0aGlzLmFkZFdhbGwoeCwgeSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPdmVyV29ybGRNYXA7XHJcbiIsImltcG9ydCBjb25zdGFudHMgZnJvbSBcIi4uL0RhdGEvY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IGVtaXRFdmVudCB9IGZyb20gXCIuLi91dGlscy9oZWxwZXJcIjtcclxuaW1wb3J0IEdhbWVPYmplY3QgZnJvbSBcIi4vR2FtZU9iamVjdFwiO1xyXG5pbXBvcnQgT3ZlcldvcmxkTWFwIGZyb20gXCIuL092ZXJXb3JsZE1hcFwiO1xyXG5cclxuLyoqXHJcbiAqL1xyXG5jbGFzcyBQZXJzb24gZXh0ZW5kcyBHYW1lT2JqZWN0IHtcclxuICAvKipcclxuICAgKiBAcGFyYW0ge0dhbWVPYmplY3R9IGNvbmZpZ1xyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xyXG4gICAgc3VwZXIoY29uZmlnKTtcclxuXHJcbiAgICB0aGlzLm1vdmluZ1Byb2dyZXNzUmVtYWluaWcgPSAwO1xyXG5cclxuICAgIHRoaXMuaXNQbGF5ZXJDb250cm9sbGVkID0gY29uZmlnLmlzUGxheWVyQ29udHJvbGxlZCB8fCBmYWxzZTtcclxuXHJcbiAgICB0aGlzLmRpcmVjdGlvblVwZGF0ZSA9IHtcclxuICAgICAgdXA6IFtcInlcIiwgLTFdLFxyXG4gICAgICBkb3duOiBbXCJ5XCIsIDFdLFxyXG4gICAgICBsZWZ0OiBbXCJ4XCIsIC0xXSxcclxuICAgICAgcmlnaHQ6IFtcInhcIiwgMV0sXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IHN0YXRlXHJcbiAgICogQHBhcmFtIHsnZG93bicgfCAndXAnIHwgJ2xlZnQnIHwgJ3JpZ2h0JyB9IHN0YXRlLmFycm93XHJcbiAgICovXHJcbiAgdXBkYXRlKHN0YXRlKSB7XHJcbiAgICBpZiAodGhpcy5tb3ZpbmdQcm9ncmVzc1JlbWFpbmlnID4gMCkge1xyXG4gICAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAodGhpcy5pc1BsYXllckNvbnRyb2xsZWQgJiYgc3RhdGUuYXJyb3cpIHtcclxuICAgICAgICB0aGlzLnN0YXJ0QmVoYXZpb3Ioc3RhdGUsIHtcclxuICAgICAgICAgIHR5cGU6IFwid2Fsa1wiLFxyXG4gICAgICAgICAgZGlyZWN0aW9uOiBzdGF0ZS5hcnJvdyxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy51cGRhdGVTcHJpbnQoc3RhdGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IHN0YXRlXHJcbiAgICogQHBhcmFtIHtPdmVyV29ybGRNYXB9IHN0YXRlLm1hcFxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBiZWhhdmlvclxyXG4gICAqIEBwYXJhbSB7J3dhbGsnIHwgJ3N0YW5kJyB9IGJlaGF2aW9yLnR5cGVcclxuICAgKiBAcGFyYW0geyd1cCcgfCAnZG93bicgfCAnbGVmdCcgfCAncmlnaHQnIH0gYmVoYXZpb3IuZGlyZWN0aW9uXHJcbiAgICogQHBhcmFtIHtCb29sZWFufSBiZWhhdmlvci5yZXRyeVxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBiZWhhdmlvci50aW1lXHJcbiAgICovXHJcbiAgc3RhcnRCZWhhdmlvcihzdGF0ZSwgYmVoYXZpb3IpIHtcclxuICAgIHRoaXMuZGlyZWN0aW9uID0gYmVoYXZpb3IuZGlyZWN0aW9uO1xyXG5cclxuICAgIGlmIChiZWhhdmlvci50eXBlID09PSBcIndhbGtcIikge1xyXG4gICAgICBjb25zdCBpc1NwYWNlVGFrZW4gPSBzdGF0ZS5tYXAuaXNTcGFjZVRha2VuKFxyXG4gICAgICAgIHRoaXMueCxcclxuICAgICAgICB0aGlzLnksXHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb25cclxuICAgICAgKTtcclxuICAgICAgaWYgKGlzU3BhY2VUYWtlbikge1xyXG4gICAgICAgIGJlaGF2aW9yLnJldHJ5ICYmXHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zdGFydEJlaGF2aW9yKHN0YXRlLCBiZWhhdmlvcik7XHJcbiAgICAgICAgICB9LCAxMCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIHN0YXRlLm1hcC5tb3ZlV2FsbCh0aGlzLngsIHRoaXMueSwgdGhpcy5kaXJlY3Rpb24pO1xyXG4gICAgICB0aGlzLm1vdmluZ1Byb2dyZXNzUmVtYWluaWcgPSBjb25zdGFudHMubW92aW5nUHJvZ3Jlc3M7XHJcbiAgICAgIHRoaXMudXBkYXRlU3ByaW50KHN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoYmVoYXZpb3IudHlwZSA9PT0gXCJzdGFuZFwiKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGVtaXRFdmVudChjb25zdGFudHMuZXZlbnRzLlBlcnNvblN0YW5kQ29tcGxldGUsIHsgd2hvSWQ6IHRoaXMuaWQgfSk7XHJcbiAgICAgIH0sIGJlaGF2aW9yLnRpbWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlUG9zaXRpb24oKSB7XHJcbiAgICBpZiAodGhpcy5tb3ZpbmdQcm9ncmVzc1JlbWFpbmlnID4gMCkge1xyXG4gICAgICBjb25zdCBbcHJvcGVydHksIGNoYW5nZV0gPSB0aGlzLmRpcmVjdGlvblVwZGF0ZVt0aGlzLmRpcmVjdGlvbl07XHJcbiAgICAgIHRoaXNbcHJvcGVydHldICs9IGNoYW5nZTtcclxuICAgICAgdGhpcy5tb3ZpbmdQcm9ncmVzc1JlbWFpbmlnIC09IDE7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5tb3ZpbmdQcm9ncmVzc1JlbWFpbmlnID09PSAwKSB7XHJcbiAgICAgIGVtaXRFdmVudChjb25zdGFudHMuZXZlbnRzLlBlcnNvbldhbGtpbmdDb21wbGV0ZSwge1xyXG4gICAgICAgIHdob0lkOiB0aGlzLmlkLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZVNwcmludCgpIHtcclxuICAgIGlmICh0aGlzLm1vdmluZ1Byb2dyZXNzUmVtYWluaWcgPiAwKSB7XHJcbiAgICAgIHRoaXMuc3ByaXRlLnNldEFuaW1hdGlvbihcIndhbGtcIiArIGNhcGl0YWxpemVGaXJzdExldHRlcih0aGlzLmRpcmVjdGlvbikpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zcHJpdGUuc2V0QW5pbWF0aW9uKFwiaWRsZVwiICsgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHRoaXMuZGlyZWN0aW9uKSk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQHJldHVybiB7U3RyaW5nfVxyXG4gKi9cclxuZnVuY3Rpb24gY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHN0cmluZykge1xyXG4gIHJldHVybiBzdHJpbmcuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBlcnNvbjtcclxuIiwiaW1wb3J0IGNvbnN0YW50cyBmcm9tIFwiLi4vRGF0YS9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgZHJhd0ltYWdlLCB3aXRoR3JpZHMgfSBmcm9tIFwiLi4vdXRpbHMvaGVscGVyXCI7XHJcbmltcG9ydCBHYW1lT2JqZWN0IGZyb20gXCIuL0dhbWVPYmplY3RcIjtcclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBTcHJpdGVcclxuICovXHJcbmNsYXNzIFNwcml0ZSB7XHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcuYW5pbWF0aW9uc1xyXG4gICAqIEBwYXJhbSB7J2lkbGVEb3duJyB8ICdpZGxlUmlnaHQnIHwgJ2lkbGVVcCcgfCAnaWRsZUxlZnQnIHwgJ3dhbGtEb3duJyB8J3dhbGtSaWdodCcgfCAnd2Fsa1VwJyB8ICd3YWxrTGVmdCcgfSBjb25maWcuY3VycmVudEFuaW1hdGlvblxyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBjb25maWcuc3JjXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGNvbmZpZy5zcXVhcmVTaXplXHJcbiAgICogQHBhcmFtIHtHYW1lT2JqZWN0fSBjb25maWcuZ2FtZU9iamVjdFxyXG4gICAqIEBwYXJhbSB7TnVtYmVyIHwgbnVsbH0gY29uZmlnLmFuaW1hdGlvbkZyYW1lTGltaXRcclxuICAgKiBAcGFyYW0ge3sgIHg6IE51bWJlciwgeTogTnVtYmVyfSB8IG51bGx9IGNvbmZpZy5yZW1vdmVTcXVhcmVTaXplXHJcbiAgICogQHBhcmFtIHtCb29sZWFufSBjb25maWcudXNlU2hhZG93XHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XHJcbiAgICAvLyBTcXVhcmVTaXplIERlZmF1bHQgMzJcclxuICAgIHRoaXMuc3F1YXJlU2l6ZSA9IGNvbmZpZy5zcXVhcmVTaXplIHx8IGNvbnN0YW50cy5zcXVhcmVTaXplO1xyXG4gICAgdGhpcy5yZW1vdmVTcXVhcmVTaXplID0gY29uZmlnLnJlbW92ZVNxdWFyZVNpemVcclxuICAgICAgPyBjb25maWcucmVtb3ZlU3F1YXJlU2l6ZVxyXG4gICAgICA6IHsgeDogOCwgeTogMTggfTtcclxuXHJcbiAgICAvLyBTZXR1cCB0aGUgaW1hZ2VcclxuICAgIGRyYXdJbWFnZShcclxuICAgICAgY29uZmlnLnNyYyB8fCBcIi9wdWJsaWMvaW1hZ2VzL2NoYXJhY3RlcnMvcGVvcGxlL2hlcm8ucG5nXCIsXHJcbiAgICAgIChpbWFnZSkgPT4ge1xyXG4gICAgICAgIHRoaXMuaW1hZ2UgPSBpbWFnZTtcclxuICAgICAgICB0aGlzLmltYWdlSXNMb2FkZWQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIC8vIFNoYWRvdyBJbWFnZVxyXG4gICAgdGhpcy51c2VTaGFkb3cgPSBjb25maWcudXNlU2hhZG93IHx8IGZhbHNlO1xyXG4gICAgaWYgKHRoaXMudXNlU2hhZG93KSB7XHJcbiAgICAgIGRyYXdJbWFnZShcIi9wdWJsaWMvaW1hZ2VzL2NoYXJhY3RlcnMvc2hhZG93LnBuZ1wiLCAoaW1hZ2UpID0+IHtcclxuICAgICAgICB0aGlzLnNoYWRvd0ltYWdlID0gaW1hZ2U7XHJcbiAgICAgICAgdGhpcy5zaGFkb3dJbWFnZUxvYWRlZCA9IHRydWU7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENvbmZpdXJlIEFuaW1hdGlvbiBBbmQgSW5pdGlhbCBTdGF0ZVxyXG4gICAgdGhpcy5hbmltYXRpb25zID0gY29uZmlnLmFuaW1hdGlvbnMgfHwge1xyXG4gICAgICBpZGxlRG93bjogW1swLCAwXV0sXHJcbiAgICAgIGlkbGVSaWdodDogW1swLCAxXV0sXHJcbiAgICAgIGlkbGVVcDogW1swLCAyXV0sXHJcbiAgICAgIGlkbGVMZWZ0OiBbWzAsIDNdXSxcclxuICAgICAgd2Fsa0Rvd246IFtcclxuICAgICAgICBbMSwgMF0sIC8vIGltYWdlIHJvdyAxIGNvbCAxXHJcbiAgICAgICAgWzAsIDBdLCAvLyBpbWFnZSByb3cgMSBjb2wgMlxyXG4gICAgICAgIFszLCAwXSwgLy8gaW1hZ2Ugcm93IDEgY29sIDRcclxuICAgICAgICBbMCwgMF0sIC8vIGltYWdlIHJvdyAxIGNvbCAyXHJcbiAgICAgIF0sXHJcbiAgICAgIHdhbGtSaWdodDogW1xyXG4gICAgICAgIFsxLCAxXSwgLy8gaW1hZ2Ugcm93IDEgY29sIDFcclxuICAgICAgICBbMCwgMV0sIC8vIGltYWdlIHJvdyAxIGNvbCAyXHJcbiAgICAgICAgWzMsIDFdLCAvLyBpbWFnZSByb3cgMSBjb2wgNFxyXG4gICAgICAgIFswLCAxXSwgLy8gaW1hZ2Ugcm93IDEgY29sIDJcclxuICAgICAgXSxcclxuICAgICAgd2Fsa1VwOiBbXHJcbiAgICAgICAgWzEsIDJdLCAvLyBpbWFnZSByb3cgMSBjb2wgMVxyXG4gICAgICAgIFswLCAyXSwgLy8gaW1hZ2Ugcm93IDEgY29sIDJcclxuICAgICAgICBbMywgMl0sIC8vIGltYWdlIHJvdyAxIGNvbCA0XHJcbiAgICAgICAgWzAsIDJdLCAvLyBpbWFnZSByb3cgMSBjb2wgMlxyXG4gICAgICBdLFxyXG4gICAgICB3YWxrTGVmdDogW1xyXG4gICAgICAgIFsxLCAzXSwgLy8gaW1hZ2Ugcm93IDEgY29sIDFcclxuICAgICAgICBbMCwgM10sIC8vIGltYWdlIHJvdyAxIGNvbCAyXHJcbiAgICAgICAgWzMsIDNdLCAvLyBpbWFnZSByb3cgMSBjb2wgNFxyXG4gICAgICAgIFswLCAzXSwgLy8gaW1hZ2Ugcm93IDEgY29sIDJcclxuICAgICAgXSxcclxuICAgIH07XHJcblxyXG4gICAgLy8gU2V0IEFuaW1hdGlvbiBGcmFtZVxyXG4gICAgdGhpcy5jdXJyZW50QW5pbWF0aW9uID0gY29uZmlnLmN1cnJlbnRBbmltYXRpb24gfHwgXCJpZGxlRG93blwiO1xyXG4gICAgdGhpcy5jdXJyZW50QW5pbWF0aW9uRnJhbWUgPSAwO1xyXG4gICAgdGhpcy5hbmltYXRpb25GcmFtZUxpbWl0ID1cclxuICAgICAgY29uZmlnLmFuaW1hdGlvbkZyYW1lTGltaXQgfHwgY29uc3RhbnRzLmFuaW1hdGlvbkZyYW1lTGltaXQ7XHJcbiAgICB0aGlzLmFuaW1hdGlvbkZyYW1lUHJvZ3Jlc3MgPSB0aGlzLmFuaW1hdGlvbkZyYW1lTGltaXQ7XHJcblxyXG4gICAgLy8gY29uc29sZS5sb2coXCIgdGhpcy5hbmltYXRpb25GcmFtZVByb2dyZXNzXCIsIHRoaXMuYW5pbWF0aW9uRnJhbWVQcm9ncmVzcyk7XHJcbiAgICAvL1xyXG4gICAgdGhpcy5nYW1lT2JqZWN0ID0gY29uZmlnLmdhbWVPYmplY3Q7XHJcbiAgfVxyXG5cclxuICAvLyBHZXQgQ3VycmVudCBBbmltYXRpb24gRnJhbWVcclxuICAvKipcclxuICAgKiBAcmV0dXJuIHtbTnVtYmVyLCBOdW1iZXJdIHwgdW5kZWZpbmVkIH1cclxuICAgKi9cclxuICBnZXQgZnJhbWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5hbmltYXRpb25zW3RoaXMuY3VycmVudEFuaW1hdGlvbl1bdGhpcy5jdXJyZW50QW5pbWF0aW9uRnJhbWVdO1xyXG4gIH1cclxuXHJcbiAgc2V0QW5pbWF0aW9uKGtleSkge1xyXG4gICAgaWYgKHRoaXMuY3VycmVudEFuaW1hdGlvbiAhPT0ga2V5KSB7XHJcbiAgICAgIHRoaXMuY3VycmVudEFuaW1hdGlvbiA9IGtleTtcclxuICAgICAgdGhpcy5jdXJyZW50QW5pbWF0aW9uRnJhbWUgPSAwO1xyXG4gICAgICB0aGlzLmFuaW1hdGlvbkZyYW1lUHJvZ3Jlc3MgPSB0aGlzLmFuaW1hdGlvbkZyYW1lTGltaXQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVBbmltYXRpb25Qcm9ncmVzcygpIHtcclxuICAgIC8vIERvd250aWNrIEZyYW1lIFByb2dyZXNzXHJcbiAgICBpZiAodGhpcy5hbmltYXRpb25GcmFtZVByb2dyZXNzID4gMCkge1xyXG4gICAgICB0aGlzLmFuaW1hdGlvbkZyYW1lUHJvZ3Jlc3MgLT0gMTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJlc2V0IHRoZSBjb3VudGVyXHJcbiAgICB0aGlzLmFuaW1hdGlvbkZyYW1lUHJvZ3Jlc3MgPSB0aGlzLmFuaW1hdGlvbkZyYW1lTGltaXQ7XHJcbiAgICB0aGlzLmN1cnJlbnRBbmltYXRpb25GcmFtZSArPSAxO1xyXG5cclxuICAgIGlmICh0aGlzLmZyYW1lID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5jdXJyZW50QW5pbWF0aW9uRnJhbWUgPSAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRHJhdyBDb250ZXh0XHJcbiAgICogQHBhcmFtIHtDYW52YXNSZW5kZXJpbmdDb250ZXh0MkR9IGN0eFxyXG4gICAqIEBwYXJhbSB7R2FtZU9iamVjdH0gY2FtZXJhUGVyc29uXHJcbiAgICovXHJcbiAgZHJhdyhjdHgsIGNhbWVyYVBlcnNvbikge1xyXG4gICAgY29uc3QgeCA9XHJcbiAgICAgIHRoaXMuZ2FtZU9iamVjdC54IC1cclxuICAgICAgdGhpcy5yZW1vdmVTcXVhcmVTaXplLnggK1xyXG4gICAgICB3aXRoR3JpZHMoMTAuNSkgLVxyXG4gICAgICBjYW1lcmFQZXJzb24ueDsgLy8gUmVtb3ZlIFVubmVjZXNzYXJ5IHdpZHRoXHJcbiAgICBjb25zdCB5ID1cclxuICAgICAgdGhpcy5nYW1lT2JqZWN0LnkgLVxyXG4gICAgICB0aGlzLnJlbW92ZVNxdWFyZVNpemUueSArXHJcbiAgICAgIHdpdGhHcmlkcyg2KSAtXHJcbiAgICAgIGNhbWVyYVBlcnNvbi55OyAvLyBSZW1vdmUgVW5uZWNlc3NhcnkgaGVpZ2h0XHJcbiAgICBjb25zdCBbZnJhbWVYLCBmcmFtZVldID0gdGhpcy5mcmFtZTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZnJhbWUpO1xyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKFwiRnJhbWVYXCIsIGZyYW1lWCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIkZyYW1lWVwiLCBmcmFtZVkpO1xyXG5cclxuICAgIC8vIFdoZW4gSW1hZ2UgTG9hZGluZ1xyXG4gICAgdGhpcy5pbWFnZUlzTG9hZGVkICYmXHJcbiAgICAgIGN0eC5kcmF3SW1hZ2UoXHJcbiAgICAgICAgdGhpcy5pbWFnZSwgLy8gSW5zZXJ0IEltYWdlXHJcbiAgICAgICAgZnJhbWVYICogY29uc3RhbnRzLnNxdWFyZVNpemUsIC8vIFggZnJvbSBJbWFnZVxyXG4gICAgICAgIGZyYW1lWSAqIGNvbnN0YW50cy5zcXVhcmVTaXplLCAvLyBZIGZyb20gSW1hZ2VcclxuICAgICAgICB0aGlzLnNxdWFyZVNpemUsIC8vIFdpZHRoIEZyb20gSW1hZ2UsXHJcbiAgICAgICAgdGhpcy5zcXVhcmVTaXplLCAvLyBIZWlnaHQgRnJvbSBJbWFnZVxyXG4gICAgICAgIHgsIC8vIFggZm9yIENhbnZhc1xyXG4gICAgICAgIHksIC8vIFkgZm9yIENhbnZhc1xyXG4gICAgICAgIHRoaXMuc3F1YXJlU2l6ZSwgLy8gV2lkdGggRm9yIENhbnZhc1xyXG4gICAgICAgIHRoaXMuc3F1YXJlU2l6ZSAvLyBIZWlnaHQgRm9yIENhbnZhc1xyXG4gICAgICApO1xyXG5cclxuICAgIC8vIENhbGwgQW5pbWF0aW9uXHJcbiAgICB0aGlzLnVwZGF0ZUFuaW1hdGlvblByb2dyZXNzKCk7XHJcblxyXG4gICAgdGhpcy5zaGFkb3dJbWFnZUxvYWRlZCAmJlxyXG4gICAgICBjdHguZHJhd0ltYWdlKFxyXG4gICAgICAgIHRoaXMuc2hhZG93SW1hZ2UsIC8vIEluc2VydCBJbWFnZVxyXG4gICAgICAgIHgsIC8vIFggZm9yIENhbnZhc1xyXG4gICAgICAgIHkgLy8gWSBmb3IgQ2FudmFzXHJcbiAgICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTcHJpdGU7XHJcbiIsImltcG9ydCBjb25zdGFudHMgZnJvbSBcIi4uL0RhdGEvY29uc3RhbnRzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZHJhd0ltYWdlID0gKHNyYywgY2IpID0+IHtcclxuICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcclxuICBpbWcub25sb2FkID0gKCkgPT4ge1xyXG4gICAgaWYgKGNiKSB7XHJcbiAgICAgIGNiKGltZyk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBpbWcuc3JjID0gc3JjO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHdpdGhHcmlkcyA9IChuKSA9PiB7XHJcbiAgcmV0dXJuIG4gKiBjb25zdGFudHMuaGFsZlNxdWFyZVNpemU7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYXNHcmlkQ29vcmQgPSAoeCwgeSkgPT4ge1xyXG4gIHJldHVybiBgJHt4ICogY29uc3RhbnRzLmhhbGZTcXVhcmVTaXplfSwke3kgKiBjb25zdGFudHMuaGFsZlNxdWFyZVNpemV9YDtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBuZXh0UG9zaXRpb24gPSAoY3VyWCwgY3VyWSwgZGlyZWN0aW9uKSA9PiB7XHJcbiAgbGV0IHgsIHksIHNpemU7XHJcbiAgeCA9IGN1clg7XHJcbiAgeSA9IGN1clk7XHJcbiAgc2l6ZSA9IDE2O1xyXG4gIGlmIChkaXJlY3Rpb24gPT09IFwibGVmdFwiKSB7XHJcbiAgICB4IC09IHNpemU7XHJcbiAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09IFwicmlnaHRcIikge1xyXG4gICAgeCArPSBzaXplO1xyXG4gIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSBcInVwXCIpIHtcclxuICAgIHkgLT0gc2l6ZTtcclxuICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gXCJkb3duXCIpIHtcclxuICAgIHkgKz0gc2l6ZTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7IHgsIHkgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBlbWl0RXZlbnQgPSAobmFtZSwgZGV0YWlsKSA9PiB7XHJcbiAgLy8gV2UgRmluaXNoZWQgdGhlIHdhbGtcclxuICBjb25zdCBldmVudCA9IG5ldyBDdXN0b21FdmVudChuYW1lLCB7XHJcbiAgICBkZXRhaWwsXHJcbiAgfSk7XHJcblxyXG4gIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xyXG59O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBPdmVyV29ybGQgZnJvbSBcIi4vR2FtZS9PdmVyV29ybGRcIjtcclxuXHJcbmNvbnN0IHdvbHJkID0gbmV3IE92ZXJXb3JsZCh7XHJcbiAgZWxlbWVudDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lLWNvbnRhaW5lclwiKSxcclxufSk7XHJcblxyXG53b2xyZC5pbml0KCk7XHJcbiJdLCJuYW1lcyI6WyJHYW1lT2JqZWN0IiwiUGVyc29uIiwiYXNHcmlkQ29vcmQiLCJ3aXRoR3JpZHMiLCJPdmVyV29ybGRNYXBzTGlzdCIsIkRlbW9Sb29tIiwibG93ZXJTcmMiLCJ1cHBlclNyYyIsImdhbWVPYmplY3RzIiwiaGVybyIsImlzUGxheWVyQ29udHJvbGxlZCIsIngiLCJ5Iiwic3JjIiwibnBjMSIsImJlaGF2aW9yTG9vcCIsInR5cGUiLCJkaXJlY3Rpb24iLCJ0aW1lIiwibnBjMiIsIndhbGxzIiwiS2l0Y2hlbiIsInNxdWFyZVNpemUiLCJoYWxmU3F1YXJlU2l6ZSIsIm1vdmluZ1Byb2dyZXNzIiwiYW5pbWF0aW9uRnJhbWVMaW1pdCIsImV2ZW50cyIsIlBlcnNvbldhbGtpbmdDb21wbGV0ZSIsIlBlcnNvblN0YW5kQ29tcGxldGUiLCJEaXJlY3Rpb25JbnB1dCIsImNvbnN0cnVjdG9yIiwiaGVsZERpcmVjdGlvbnMiLCJtYXAiLCJBcnJvd1VwIiwiS2V5VyIsIkFycm93RG93biIsIktleVMiLCJBcnJvd0xlZnQiLCJLZXlBIiwiQXJyb3dSaWdodCIsIktleUQiLCJpbml0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImRpciIsImNvZGUiLCJpbmRleE9mIiwidW5zaGlmdCIsImluZGV4Iiwic3BsaWNlIiwiT3ZlcldvcmxkRXZlbnQiLCJPdmVyV29ybGRNYXAiLCJTcHJpdGUiLCJjb25maWciLCJpZCIsImlzTW91bnRlZCIsImlzVXNlU2hhZG93IiwidXNlU2hhZG93IiwidW5kZWZpbmVkIiwic3ByaXRlIiwiZ2FtZU9iamVjdCIsInJlbW92ZVNxdWFyZVNpemUiLCJiZWhhdmlvckxvb3BJbmRleCIsIm1vdW50IiwiY29uc29sZSIsImxvZyIsImFkZFdhbGwiLCJzZXRUaW1lb3V0IiwiZG9CZWhhdmlvckV2ZW50IiwidXBkYXRlIiwiaXNDdXRzY2VuZVBsYXlpbmciLCJsZW5ndGgiLCJldmVudCIsIndobyIsImV2ZW50SGFuZGxlciIsImV2ZW50Q29uZmlnIiwiT3ZlcldvcmxkIiwiZWxlbWVudCIsImNhbnZhcyIsInF1ZXJ5U2VsZWN0b3IiLCJjdHgiLCJnZXRDb250ZXh0Iiwic3RhcnRHYW1lTG9vcCIsInN0ZXAiLCJjbGVhclJlY3QiLCJ3aWR0aCIsImhlaWdodCIsImNhbWVyYVBlcnNvbiIsIk9iamVjdCIsInZhbHVlcyIsImZvckVhY2giLCJvYmoiLCJhcnJvdyIsImRpcmVjdGlvbkNvbnRyb2xsZXIiLCJkcmF3TG93ZXJJbWFnZSIsImRyYXciLCJkcmF3VXBwZXJJbWFnZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1vdW50T2JqZWN0cyIsImNvbnN0YW50cyIsIlByb21pc2UiLCJyZXNvbHZlIiwic3RhbmQiLCJzdGFydEJlaGF2aW9yIiwiY29tcGxldGVIYW5kbGVyIiwiZGV0YWlsIiwid2hvSWQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwid2FsayIsInJldHJ5IiwibmV4dFBvc2l0aW9uIiwibG93ZXJMYXllciIsIkltYWdlIiwidXBwZXJMYXllciIsImRyYXdJbWFnZSIsImlzU3BhY2VUYWtlbiIsImN1clgiLCJjdXJZIiwia2V5cyIsImtleSIsIm9iamVjdCIsImFkZE1hcCIsInJlbW92ZVdhbGwiLCJtb3ZlV2FsbCIsIndhc1giLCJ3YXNZIiwiZW1pdEV2ZW50IiwibW92aW5nUHJvZ3Jlc3NSZW1haW5pZyIsImRpcmVjdGlvblVwZGF0ZSIsInVwIiwiZG93biIsImxlZnQiLCJyaWdodCIsInN0YXRlIiwidXBkYXRlUG9zaXRpb24iLCJ1cGRhdGVTcHJpbnQiLCJiZWhhdmlvciIsInByb3BlcnR5IiwiY2hhbmdlIiwic2V0QW5pbWF0aW9uIiwiY2FwaXRhbGl6ZUZpcnN0TGV0dGVyIiwic3RyaW5nIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsImltYWdlIiwiaW1hZ2VJc0xvYWRlZCIsInNoYWRvd0ltYWdlIiwic2hhZG93SW1hZ2VMb2FkZWQiLCJhbmltYXRpb25zIiwiaWRsZURvd24iLCJpZGxlUmlnaHQiLCJpZGxlVXAiLCJpZGxlTGVmdCIsIndhbGtEb3duIiwid2Fsa1JpZ2h0Iiwid2Fsa1VwIiwid2Fsa0xlZnQiLCJjdXJyZW50QW5pbWF0aW9uIiwiY3VycmVudEFuaW1hdGlvbkZyYW1lIiwiYW5pbWF0aW9uRnJhbWVQcm9ncmVzcyIsImZyYW1lIiwidXBkYXRlQW5pbWF0aW9uUHJvZ3Jlc3MiLCJmcmFtZVgiLCJmcmFtZVkiLCJjYiIsImltZyIsIm9ubG9hZCIsIm4iLCJzaXplIiwibmFtZSIsIkN1c3RvbUV2ZW50IiwiZGlzcGF0Y2hFdmVudCIsIndvbHJkIl0sInNvdXJjZVJvb3QiOiIifQ==