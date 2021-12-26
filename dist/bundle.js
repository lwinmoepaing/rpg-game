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

  init() {
    this.map = new _OverWorldMap__WEBPACK_IMPORTED_MODULE_3__["default"](_Data_AllMapList__WEBPACK_IMPORTED_MODULE_0__.OverWorldMapsList.DemoRoom);
    this.map.mountObjects();
    this.directionController = new _DirectionInput__WEBPACK_IMPORTED_MODULE_4__["default"]();
    this.directionController.init(); // Start Game Loop

    this.startGameLoop(); // if Cutscene
    // this.map.startCutScene([
    //   { who: "hero", type: "walk", direction: "right" },
    //   { who: "hero", type: "walk", direction: "right" },
    //   { who: "hero", type: "walk", direction: "right" },
    //   { who: "hero", type: "walk", direction: "down" },
    //   { who: "hero", type: "walk", direction: "down" },
    //   { who: "hero", type: "walk", direction: "down" },
    //   { who: "hero", type: "stand", direction: "down", time: 1000 },
    // ]);
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
/* harmony import */ var _OverWorldEvent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OverWorldEvent */ "./src/Game/OverWorldEvent.js");
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


  startCutScene(events) {
    var _this = this;

    return _asyncToGenerator(function* () {
      _this.isCutscenePlaying = true;

      for (var i = 0; i < events.length; i++) {
        var eventHandler = new _OverWorldEvent__WEBPACK_IMPORTED_MODULE_2__["default"]({
          eventConfig: events[i],
          map: _this
        });
        yield eventHandler.init();
      }

      _this.isCutscenePlaying = false;
    })();
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFKLENBQWdCRCxJQUFoQixFQUFzQjtBQUNsQ25FLElBQUFBO0FBRGtDLEdBQXRCLENBQWQ7QUFJQW5FLEVBQUFBLFFBQVEsQ0FBQ3dJLGFBQVQsQ0FBdUJ6RyxLQUF2QjtBQUNELENBUE07Ozs7OztVQ3RDUDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTkE7QUFFQSxJQUFNMEcsS0FBSyxHQUFHLElBQUl0Ryx1REFBSixDQUFjO0FBQzFCQyxFQUFBQSxPQUFPLEVBQUVwQyxRQUFRLENBQUNzQyxhQUFULENBQXVCLGlCQUF2QjtBQURpQixDQUFkLENBQWQ7QUFJQW1HLEtBQUssQ0FBQzFJLElBQU4sRyIsInNvdXJjZXMiOlsid2VicGFjazovL3JwZy1nYW1lLy4vc3JjL0RhdGEvQWxsTWFwTGlzdC5qcyIsIndlYnBhY2s6Ly9ycGctZ2FtZS8uL3NyYy9EYXRhL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9ycGctZ2FtZS8uL3NyYy9HYW1lL0RpcmVjdGlvbklucHV0LmpzIiwid2VicGFjazovL3JwZy1nYW1lLy4vc3JjL0dhbWUvR2FtZU9iamVjdC5qcyIsIndlYnBhY2s6Ly9ycGctZ2FtZS8uL3NyYy9HYW1lL092ZXJXb3JsZC5qcyIsIndlYnBhY2s6Ly9ycGctZ2FtZS8uL3NyYy9HYW1lL092ZXJXb3JsZEV2ZW50LmpzIiwid2VicGFjazovL3JwZy1nYW1lLy4vc3JjL0dhbWUvT3ZlcldvcmxkTWFwLmpzIiwid2VicGFjazovL3JwZy1nYW1lLy4vc3JjL0dhbWUvUGVyc29uLmpzIiwid2VicGFjazovL3JwZy1nYW1lLy4vc3JjL0dhbWUvU3ByaXRlLmpzIiwid2VicGFjazovL3JwZy1nYW1lLy4vc3JjL3V0aWxzL2hlbHBlci5qcyIsIndlYnBhY2s6Ly9ycGctZ2FtZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9ycGctZ2FtZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcnBnLWdhbWUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9ycGctZ2FtZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3JwZy1nYW1lLy4vc3JjL2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZU9iamVjdCBmcm9tIFwiLi4vR2FtZS9HYW1lT2JqZWN0XCI7XHJcbmltcG9ydCBQZXJzb24gZnJvbSBcIi4uL0dhbWUvUGVyc29uXCI7XHJcbmltcG9ydCB7IGFzR3JpZENvb3JkLCB3aXRoR3JpZHMgfSBmcm9tIFwiLi4vdXRpbHMvaGVscGVyXCI7XHJcblxyXG4vKipcclxuICogQHR5cGVkZWYge09iamVjdH0gUm9vbU9ialxyXG4gKiBAcHJvcGVydHkge1N0cmluZ30gbG93ZXJTcmMgLVxyXG4gKiBAcHJvcGVydHkge1N0cmluZ30gdXBwZXJTcmMgLVxyXG4gKiBAcHJvcGVydHkge09iamVjdH0gZ2FtZU9iamVjdHMgLVxyXG4gKi9cclxuXHJcbmV4cG9ydCBjb25zdCBPdmVyV29ybGRNYXBzTGlzdCA9IHtcclxuICAvKipcclxuICAgKiBAdHlwZSB7Um9vbU9ian1cclxuICAgKi9cclxuICBEZW1vUm9vbToge1xyXG4gICAgbG93ZXJTcmM6IFwiL3B1YmxpYy9pbWFnZXMvbWFwcy9EZW1vTG93ZXIucG5nXCIsXHJcbiAgICB1cHBlclNyYzogXCIvcHVibGljL2ltYWdlcy9tYXBzL0RlbW9VcHBlci5wbmdcIixcclxuICAgIGdhbWVPYmplY3RzOiB7XHJcbiAgICAgIGhlcm86IG5ldyBQZXJzb24oe1xyXG4gICAgICAgIGlzUGxheWVyQ29udHJvbGxlZDogdHJ1ZSxcclxuICAgICAgICB4OiB3aXRoR3JpZHMoMiksXHJcbiAgICAgICAgeTogd2l0aEdyaWRzKDQpLFxyXG4gICAgICAgIHNyYzogXCIvcHVibGljL2ltYWdlcy9jaGFyYWN0ZXJzL3Blb3BsZS9oZXJvLnBuZ1wiLFxyXG4gICAgICB9KSxcclxuICAgICAgbnBjMTogbmV3IFBlcnNvbih7XHJcbiAgICAgICAgeDogd2l0aEdyaWRzKDcpLFxyXG4gICAgICAgIHk6IHdpdGhHcmlkcyg5KSxcclxuICAgICAgICBzcmM6IFwiL3B1YmxpYy9pbWFnZXMvY2hhcmFjdGVycy9wZW9wbGUvbnBjMS5wbmcgXCIsXHJcbiAgICAgICAgYmVoYXZpb3JMb29wOiBbXHJcbiAgICAgICAgICB7IHR5cGU6IFwic3RhbmRcIiwgZGlyZWN0aW9uOiBcImxlZnRcIiwgdGltZTogMTUwMCB9LFxyXG4gICAgICAgICAgeyB0eXBlOiBcInN0YW5kXCIsIGRpcmVjdGlvbjogXCJ1cFwiLCB0aW1lOiAxNTAwIH0sXHJcbiAgICAgICAgICB7IHR5cGU6IFwic3RhbmRcIiwgZGlyZWN0aW9uOiBcInJpZ2h0XCIsIHRpbWU6IDEyMDAgfSxcclxuICAgICAgICAgIHsgdHlwZTogXCJzdGFuZFwiLCBkaXJlY3Rpb246IFwidXBcIiwgdGltZTogMzAwIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfSksXHJcbiAgICAgIG5wYzI6IG5ldyBQZXJzb24oe1xyXG4gICAgICAgIHg6IHdpdGhHcmlkcygzKSxcclxuICAgICAgICB5OiB3aXRoR3JpZHMoNyksXHJcbiAgICAgICAgc3JjOiBcIi9wdWJsaWMvaW1hZ2VzL2NoYXJhY3RlcnMvcGVvcGxlL25wYzIucG5nIFwiLFxyXG4gICAgICAgIGJlaGF2aW9yTG9vcDogW1xyXG4gICAgICAgICAgeyB0eXBlOiBcIndhbGtcIiwgZGlyZWN0aW9uOiBcImxlZnRcIiB9LFxyXG4gICAgICAgICAgeyB0eXBlOiBcInN0YW5kXCIsIGRpcmVjdGlvbjogXCJ1cFwiLCB0aW1lOiA4MDAgfSxcclxuICAgICAgICAgIHsgdHlwZTogXCJ3YWxrXCIsIGRpcmVjdGlvbjogXCJ1cFwiIH0sXHJcbiAgICAgICAgICB7IHR5cGU6IFwid2Fsa1wiLCBkaXJlY3Rpb246IFwicmlnaHRcIiB9LFxyXG4gICAgICAgICAgeyB0eXBlOiBcIndhbGtcIiwgZGlyZWN0aW9uOiBcImRvd25cIiB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0pLFxyXG4gICAgfSxcclxuICAgIHdhbGxzOiB7XHJcbiAgICAgIFthc0dyaWRDb29yZCg3LCA2KV06IHRydWUsXHJcbiAgICAgIFthc0dyaWRDb29yZCg4LCA2KV06IHRydWUsXHJcbiAgICAgIFthc0dyaWRDb29yZCg3LCA3KV06IHRydWUsXHJcbiAgICAgIFthc0dyaWRDb29yZCg4LCA3KV06IHRydWUsXHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG4gIEtpdGNoZW46IHtcclxuICAgIGxvd2VyU3JjOiBcIi9wdWJsaWMvaW1hZ2VzL21hcHMvS2l0Y2hlbkxvd2VyLnBuZ1wiLFxyXG4gICAgdXBwZXJTcmM6IFwiL3B1YmxpYy9pbWFnZXMvbWFwcy9LaXRjaGVuVXBwZXIucG5nXCIsXHJcbiAgICBnYW1lT2JqZWN0czoge1xyXG4gICAgICAvLyBoZXJvOiBuZXcgR2FtZU9iamVjdCh7XHJcbiAgICAgIC8vICAgeDogd2l0aEdyaWRzKDMpLFxyXG4gICAgICAvLyAgIHk6IHdpdGhHcmlkcyg1KSxcclxuICAgICAgLy8gfSksXHJcbiAgICAgIC8vIG5wYzE6IG5ldyBHYW1lT2JqZWN0KHtcclxuICAgICAgLy8gICB4OiB3aXRoR3JpZHMoOSksXHJcbiAgICAgIC8vICAgeTogd2l0aEdyaWRzKDYpLFxyXG4gICAgICAvLyAgIHNyYzogXCIvcHVibGljL2ltYWdlcy9jaGFyYWN0ZXJzL3Blb3BsZS9ucGMyLnBuZyBcIixcclxuICAgICAgLy8gfSksXHJcbiAgICAgIC8vIG5wYzM6IG5ldyBHYW1lT2JqZWN0KHtcclxuICAgICAgLy8gICB4OiB3aXRoR3JpZHMoMTApLFxyXG4gICAgICAvLyAgIHk6IHdpdGhHcmlkcyg4KSxcclxuICAgICAgLy8gICBzcmM6IFwiL3B1YmxpYy9pbWFnZXMvY2hhcmFjdGVycy9wZW9wbGUvbnBjMy5wbmcgXCIsXHJcbiAgICAgIC8vIH0pLFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgc3F1YXJlU2l6ZTogMzIsXHJcbiAgaGFsZlNxdWFyZVNpemU6IDE2LFxyXG4gIG1vdmluZ1Byb2dyZXNzOiAxNixcclxuICBhbmltYXRpb25GcmFtZUxpbWl0OiA4LFxyXG5cclxuICBldmVudHM6IHtcclxuICAgIFBlcnNvbldhbGtpbmdDb21wbGV0ZTogXCJQZXJzb25XYWxraW5nQ29tcGxldGVcIixcclxuICAgIFBlcnNvblN0YW5kQ29tcGxldGU6IFwiUGVyc29uU3RhbmRDb21wbGV0ZVwiLFxyXG4gIH0sXHJcbn07XHJcbiIsImNsYXNzIERpcmVjdGlvbklucHV0IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuaGVsZERpcmVjdGlvbnMgPSBbXTtcclxuICAgIHRoaXMubWFwID0ge1xyXG4gICAgICBBcnJvd1VwOiBcInVwXCIsXHJcbiAgICAgIEtleVc6IFwidXBcIixcclxuICAgICAgQXJyb3dEb3duOiBcImRvd25cIixcclxuICAgICAgS2V5UzogXCJkb3duXCIsXHJcbiAgICAgIEFycm93TGVmdDogXCJsZWZ0XCIsXHJcbiAgICAgIEtleUE6IFwibGVmdFwiLFxyXG4gICAgICBBcnJvd1JpZ2h0OiBcInJpZ2h0XCIsXHJcbiAgICAgIEtleUQ6IFwicmlnaHRcIixcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBpbml0KCkge1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcclxuICAgICAgY29uc3QgZGlyID0gdGhpcy5tYXBbZS5jb2RlXTtcclxuXHJcbiAgICAgIGlmIChkaXIgJiYgdGhpcy5oZWxkRGlyZWN0aW9ucy5pbmRleE9mKGRpcikgPT09IC0xKSB7XHJcbiAgICAgICAgdGhpcy5oZWxkRGlyZWN0aW9ucy51bnNoaWZ0KGRpcik7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5oZWxkRGlyZWN0aW9ucyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoZSkgPT4ge1xyXG4gICAgICBjb25zdCBkaXIgPSB0aGlzLm1hcFtlLmNvZGVdO1xyXG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMuaGVsZERpcmVjdGlvbnMuaW5kZXhPZihkaXIpO1xyXG4gICAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICAgIHRoaXMuaGVsZERpcmVjdGlvbnMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcmV0dXJuIHtBcnJheTwnbGVmdCcgfCAncmlnaHQnIHwgJ3VwJyB8ICdkb3duJyA+fVxyXG4gICAqL1xyXG4gIGdldCBkaXJlY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5oZWxkRGlyZWN0aW9uc1swXTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERpcmVjdGlvbklucHV0O1xyXG4iLCJpbXBvcnQgT3ZlcldvcmxkRXZlbnQgZnJvbSBcIi4vT3ZlcldvcmxkRXZlbnRcIjtcclxuaW1wb3J0IE92ZXJXb3JsZE1hcCBmcm9tIFwiLi9PdmVyV29ybGRNYXBcIjtcclxuaW1wb3J0IFNwcml0ZSBmcm9tIFwiLi9TcHJpdGVcIjtcclxuXHJcbmNsYXNzIEdhbWVPYmplY3Qge1xyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcclxuICAgKiBAcGFyYW0ge051bWJlcn0gY29uZmlnLnhcclxuICAgKiBAcGFyYW0ge051bWJlcn0gY29uZmlnLnlcclxuICAgKiBAcGFyYW0ge1N0cmluZ30gY29uZmlnLnNyY1xyXG4gICAqIEBwYXJhbSB7J2Rvd24nIHwgJ3VwJyB8ICdsZWZ0JyB8ICdyaWdodCcgfCBudWxsfSBjb25maWcuZGlyZWN0aW9uXHJcbiAgICogQHBhcmFtIHtCb29sZWFuIHwgbnVsbH0gY29uZmlnLnVzZVNoYWRvd1xyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBjb25maWcuc3F1YXJlU2l6ZVxyXG4gICAqIEBwYXJhbSB7e3g6IE51bWJlciwgeTogTnVtYmVyfSB8IG51bGx9IGNvbmZpZy5yZW1vdmVTcXVhcmVTaXplXHJcbiAgICogQHBhcmFtIHtCb29sZWFufSBjb25maWcuaXNQbGF5ZXJDb250cm9sbGVkXHJcbiAgICogQHBhcmFtIHthbnlbXX0gY29uZmlnLmJlaGF2aW9yTG9vcFxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xyXG4gICAgdGhpcy5pZCA9IGNvbmZpZy5pZCA/IGNvbmZpZy5pZCA6IG51bGw7XHJcbiAgICB0aGlzLmlzTW91bnRlZCA9IGZhbHNlO1xyXG4gICAgY29uc3QgaXNVc2VTaGFkb3cgPVxyXG4gICAgICBjb25maWcudXNlU2hhZG93ICE9PSBudWxsICYmIGNvbmZpZy51c2VTaGFkb3cgIT09IHVuZGVmaW5lZFxyXG4gICAgICAgID8gY29uZmlnLnVzZVNoYWRvd1xyXG4gICAgICAgIDogdHJ1ZTtcclxuICAgIHRoaXMueCA9IGNvbmZpZy54IHx8IDA7XHJcbiAgICB0aGlzLnkgPSBjb25maWcueSB8fCAwO1xyXG4gICAgdGhpcy5kaXJlY3Rpb24gPSBjb25maWcuZGlyZWN0aW9uIHx8IFwiZG93blwiO1xyXG4gICAgdGhpcy5zcHJpdGUgPSBuZXcgU3ByaXRlKHtcclxuICAgICAgZ2FtZU9iamVjdDogdGhpcyxcclxuICAgICAgc3JjOiBjb25maWcuc3JjLFxyXG4gICAgICB1c2VTaGFkb3c6IGlzVXNlU2hhZG93LFxyXG4gICAgICBzcXVhcmVTaXplOiBjb25maWcuc3F1YXJlU2l6ZSA/IGNvbmZpZy5zcXVhcmVTaXplIDogMzIsXHJcbiAgICAgIHJlbW92ZVNxdWFyZVNpemU6IGNvbmZpZy5yZW1vdmVTcXVhcmVTaXplXHJcbiAgICAgICAgPyBjb25maWcucmVtb3ZlU3F1YXJlU2l6ZVxyXG4gICAgICAgIDogeyB4OiA4LCB5OiAxOCB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5iZWhhdmlvckxvb3AgPSBjb25maWcuYmVoYXZpb3JMb29wID8gY29uZmlnLmJlaGF2aW9yTG9vcCA6IFtdO1xyXG4gICAgdGhpcy5iZWhhdmlvckxvb3BJbmRleCA9IDA7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0ge092ZXJXb3JsZE1hcH0gbWFwXHJcbiAgICovXHJcbiAgbW91bnQobWFwKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIk1vdW50aW5nXCIpO1xyXG4gICAgdGhpcy5pc01vdW50ZWQgPSB0cnVlO1xyXG4gICAgbWFwLmFkZFdhbGwodGhpcy54LCB0aGlzLnkpO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLmRvQmVoYXZpb3JFdmVudChtYXApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUoKSB7fVxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0ge092ZXJXb3JsZE1hcH0gbWFwXHJcbiAgICovXHJcbiAgYXN5bmMgZG9CZWhhdmlvckV2ZW50KG1hcCkge1xyXG4gICAgaWYgKG1hcC5pc0N1dHNjZW5lUGxheWluZyB8fCB0aGlzLmJlaGF2aW9yTG9vcC5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbGV0IGV2ZW50ID0gdGhpcy5iZWhhdmlvckxvb3BbdGhpcy5iZWhhdmlvckxvb3BJbmRleF07XHJcbiAgICBldmVudC53aG8gPSB0aGlzLmlkO1xyXG4gICAgY29uc3QgZXZlbnRIYW5kbGVyID0gbmV3IE92ZXJXb3JsZEV2ZW50KHsgbWFwOiBtYXAsIGV2ZW50Q29uZmlnOiBldmVudCB9KTtcclxuICAgIGF3YWl0IGV2ZW50SGFuZGxlci5pbml0KCk7XHJcbiAgICB0aGlzLmJlaGF2aW9yTG9vcEluZGV4ICs9IDE7XHJcbiAgICBpZiAodGhpcy5iZWhhdmlvckxvb3BJbmRleCA9PT0gdGhpcy5iZWhhdmlvckxvb3AubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMuYmVoYXZpb3JMb29wSW5kZXggPSAwO1xyXG4gICAgfVxyXG4gICAgdGhpcy5kb0JlaGF2aW9yRXZlbnQobWFwKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbWVPYmplY3Q7XHJcbiIsImltcG9ydCB7IE92ZXJXb3JsZE1hcHNMaXN0IH0gZnJvbSBcIi4uL0RhdGEvQWxsTWFwTGlzdFwiO1xyXG5pbXBvcnQgR2FtZU9iamVjdCBmcm9tIFwiLi9HYW1lT2JqZWN0XCI7XHJcbmltcG9ydCBQZXJzb24gZnJvbSBcIi4vUGVyc29uXCI7XHJcbmltcG9ydCBPdmVyV29ybGRNYXAgZnJvbSBcIi4vT3ZlcldvcmxkTWFwXCI7XHJcbmltcG9ydCBEaXJlY3Rpb25JbnB1dCBmcm9tIFwiLi9EaXJlY3Rpb25JbnB1dFwiO1xyXG5cclxuY2xhc3MgT3ZlcldvcmxkIHtcclxuICAvKipcclxuICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXHJcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gY29uZmlnLmVsZW1lbnRcclxuICAgKiBAcGFyYW0geydoZWhlJ3wnaGFoYSd9IGNvbmZpZy50ZXN0XHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XHJcbiAgICBjb25zdCB7IGVsZW1lbnQgfSA9IGNvbmZpZztcclxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAdHlwZSB7SFRNTENhbnZhc0VsZW1lbnR9XHJcbiAgICAgKi9cclxuICAgIHRoaXMuY2FudmFzID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZS1jYW52YXNcIik7IC8vSFRNTENhbnZhc0VsZW1lbnRcclxuXHJcbiAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEB0eXBlIHtPdmVyV29ybGRNYXAgfCBudWxsfVxyXG4gICAgICovXHJcbiAgICB0aGlzLm1hcCA9IG51bGw7XHJcbiAgfVxyXG5cclxuICBzdGFydEdhbWVMb29wKCkge1xyXG4gICAgY29uc3Qgc3RlcCA9ICgpID0+IHtcclxuICAgICAgLy8gQ2xlYXIgT2YgVGhlIENhbnZhc1xyXG4gICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XHJcblxyXG4gICAgICAvLyBDYW1lcmFcclxuICAgICAgY29uc3QgY2FtZXJhUGVyc29uID0gdGhpcy5tYXAuZ2FtZU9iamVjdHMuaGVybztcclxuXHJcbiAgICAgIC8vIFVwZGF0ZSBBbGwgT2JqZWN0c1xyXG4gICAgICBPYmplY3QudmFsdWVzKHRoaXMubWFwLmdhbWVPYmplY3RzKS5mb3JFYWNoKFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBwYXJhbSB7R2FtZU9iamVjdCB8IFBlcnNvbn0gb2JqXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgKG9iaikgPT4ge1xyXG4gICAgICAgICAgb2JqLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgIGFycm93OiB0aGlzLmRpcmVjdGlvbkNvbnRyb2xsZXIuZGlyZWN0aW9uLFxyXG4gICAgICAgICAgICBtYXA6IHRoaXMubWFwLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG5cclxuICAgICAgLy8gRHJhdyB0aGUgTG93ZXIgTGF5ZXJcclxuICAgICAgdGhpcy5tYXAuZHJhd0xvd2VySW1hZ2UodGhpcy5jdHgsIGNhbWVyYVBlcnNvbik7XHJcblxyXG4gICAgICAvLyBNYWtlIFBlcnNvbiBhbmQgTWlkZGxlIExheWVyXHJcbiAgICAgIE9iamVjdC52YWx1ZXModGhpcy5tYXAuZ2FtZU9iamVjdHMpXHJcbiAgICAgICAgLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgIHJldHVybiBhLnkgLSBiLnk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuZm9yRWFjaChcclxuICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICogQHBhcmFtIHtHYW1lT2JqZWN0IHwgUGVyc29ufSBvYmpcclxuICAgICAgICAgICAqL1xyXG4gICAgICAgICAgKG9iaikgPT4ge1xyXG4gICAgICAgICAgICBvYmouc3ByaXRlLmRyYXcodGhpcy5jdHgsIGNhbWVyYVBlcnNvbik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgIHRoaXMubWFwLmRyYXdVcHBlckltYWdlKHRoaXMuY3R4LCBjYW1lcmFQZXJzb24pO1xyXG5cclxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcclxuICAgICAgICBzdGVwKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBzdGVwKCk7XHJcbiAgfVxyXG5cclxuICBpbml0KCkge1xyXG4gICAgdGhpcy5tYXAgPSBuZXcgT3ZlcldvcmxkTWFwKE92ZXJXb3JsZE1hcHNMaXN0LkRlbW9Sb29tKTtcclxuICAgIHRoaXMubWFwLm1vdW50T2JqZWN0cygpO1xyXG5cclxuICAgIHRoaXMuZGlyZWN0aW9uQ29udHJvbGxlciA9IG5ldyBEaXJlY3Rpb25JbnB1dCgpO1xyXG4gICAgdGhpcy5kaXJlY3Rpb25Db250cm9sbGVyLmluaXQoKTtcclxuXHJcbiAgICAvLyBTdGFydCBHYW1lIExvb3BcclxuICAgIHRoaXMuc3RhcnRHYW1lTG9vcCgpO1xyXG5cclxuICAgIC8vIGlmIEN1dHNjZW5lXHJcbiAgICAvLyB0aGlzLm1hcC5zdGFydEN1dFNjZW5lKFtcclxuICAgIC8vICAgeyB3aG86IFwiaGVyb1wiLCB0eXBlOiBcIndhbGtcIiwgZGlyZWN0aW9uOiBcInJpZ2h0XCIgfSxcclxuICAgIC8vICAgeyB3aG86IFwiaGVyb1wiLCB0eXBlOiBcIndhbGtcIiwgZGlyZWN0aW9uOiBcInJpZ2h0XCIgfSxcclxuICAgIC8vICAgeyB3aG86IFwiaGVyb1wiLCB0eXBlOiBcIndhbGtcIiwgZGlyZWN0aW9uOiBcInJpZ2h0XCIgfSxcclxuICAgIC8vICAgeyB3aG86IFwiaGVyb1wiLCB0eXBlOiBcIndhbGtcIiwgZGlyZWN0aW9uOiBcImRvd25cIiB9LFxyXG4gICAgLy8gICB7IHdobzogXCJoZXJvXCIsIHR5cGU6IFwid2Fsa1wiLCBkaXJlY3Rpb246IFwiZG93blwiIH0sXHJcbiAgICAvLyAgIHsgd2hvOiBcImhlcm9cIiwgdHlwZTogXCJ3YWxrXCIsIGRpcmVjdGlvbjogXCJkb3duXCIgfSxcclxuICAgIC8vICAgeyB3aG86IFwiaGVyb1wiLCB0eXBlOiBcInN0YW5kXCIsIGRpcmVjdGlvbjogXCJkb3duXCIsIHRpbWU6IDEwMDAgfSxcclxuICAgIC8vIF0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgT3ZlcldvcmxkO1xyXG4iLCJpbXBvcnQgT3ZlcldvcmxkTWFwIGZyb20gXCIuL092ZXJXb3JsZE1hcFwiO1xyXG5pbXBvcnQgY29uc3RhbnRzIGZyb20gXCIuLi9EYXRhL2NvbnN0YW50c1wiO1xyXG5cclxuY2xhc3MgT3ZlcldvcmxkRXZlbnQge1xyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcclxuICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnLmV2ZW50Q29uZmlnXHJcbiAgICogQHBhcmFtIHsnd2FsaycgfCAnc3RhbmQnIH0gY29uZmlnLmV2ZW50Q29uZmlnLnR5cGVcclxuICAgKiBAcGFyYW0ge1N0cmluZ30gY29uZmlnLmV2ZW50Q29uZmlnLndob1xyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBjb25maWcuZXZlbnRDb25maWcudGltZVxyXG4gICAqIEBwYXJhbSB7J3VwJyB8ICdkb3duJyB8ICdsZWZ0JyB8ICdyaWdodCcgfSBjb25maWcuZXZlbnRDb25maWcuZGlyZWN0aW9uXHJcbiAgICogQHBhcmFtIHtPdmVyV29ybGRNYXB9IGNvbmZpZy5tYXBcclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcclxuICAgIGNvbnN0IHsgbWFwLCBldmVudENvbmZpZyB9ID0gY29uZmlnO1xyXG4gICAgdGhpcy5tYXAgPSBtYXA7XHJcbiAgICB0aGlzLmV2ZW50Q29uZmlnID0gZXZlbnRDb25maWc7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPEFueT59XHJcbiAgICovXHJcbiAgaW5pdCgpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICB0aGlzW3RoaXMuZXZlbnRDb25maWcudHlwZV0ocmVzb2x2ZSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHN0YW5kKHJlc29sdmUpIHtcclxuICAgIGNvbnN0IHdobyA9IHRoaXMubWFwLmdhbWVPYmplY3RzW3RoaXMuZXZlbnRDb25maWcud2hvXTtcclxuICAgIHdoby5zdGFydEJlaGF2aW9yKFxyXG4gICAgICB7XHJcbiAgICAgICAgbWFwOiB0aGlzLm1hcCxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHR5cGU6IFwic3RhbmRcIixcclxuICAgICAgICBkaXJlY3Rpb246IHRoaXMuZXZlbnRDb25maWcuZGlyZWN0aW9uLFxyXG4gICAgICAgIHRpbWU6IHRoaXMuZXZlbnRDb25maWcudGltZSxcclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBjb21wbGV0ZUhhbmRsZXIgPSAoZSkgPT4ge1xyXG4gICAgICBpZiAoZS5kZXRhaWwud2hvSWQgPT09IHRoaXMuZXZlbnRDb25maWcud2hvKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICAgIGNvbnN0YW50cy5ldmVudHMuUGVyc29uU3RhbmRDb21wbGV0ZSxcclxuICAgICAgICAgIGNvbXBsZXRlSGFuZGxlclxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgIGNvbnN0YW50cy5ldmVudHMuUGVyc29uU3RhbmRDb21wbGV0ZSxcclxuICAgICAgY29tcGxldGVIYW5kbGVyXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgd2FsayhyZXNvbHZlKSB7XHJcbiAgICBjb25zdCB3aG8gPSB0aGlzLm1hcC5nYW1lT2JqZWN0c1t0aGlzLmV2ZW50Q29uZmlnLndob107XHJcbiAgICB3aG8uc3RhcnRCZWhhdmlvcihcclxuICAgICAge1xyXG4gICAgICAgIG1hcDogdGhpcy5tYXAsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0eXBlOiBcIndhbGtcIixcclxuICAgICAgICBkaXJlY3Rpb246IHRoaXMuZXZlbnRDb25maWcuZGlyZWN0aW9uLFxyXG4gICAgICAgIHJldHJ5OiB0cnVlLFxyXG4gICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IGNvbXBsZXRlSGFuZGxlciA9IChlKSA9PiB7XHJcbiAgICAgIGlmIChlLmRldGFpbC53aG9JZCA9PT0gdGhpcy5ldmVudENvbmZpZy53aG8pIHtcclxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICAgY29uc3RhbnRzLmV2ZW50cy5QZXJzb25XYWxraW5nQ29tcGxldGUsXHJcbiAgICAgICAgICBjb21wbGV0ZUhhbmRsZXJcclxuICAgICAgICApO1xyXG4gICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICBjb25zdGFudHMuZXZlbnRzLlBlcnNvbldhbGtpbmdDb21wbGV0ZSxcclxuICAgICAgY29tcGxldGVIYW5kbGVyXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgT3ZlcldvcmxkRXZlbnQ7XHJcbiIsImltcG9ydCB7IG5leHRQb3NpdGlvbiwgd2l0aEdyaWRzIH0gZnJvbSBcIi4uL3V0aWxzL2hlbHBlclwiO1xyXG5pbXBvcnQgR2FtZU9iamVjdCBmcm9tIFwiLi9HYW1lT2JqZWN0XCI7XHJcbmltcG9ydCBPdmVyV29ybGRFdmVudCBmcm9tIFwiLi9PdmVyV29ybGRFdmVudFwiO1xyXG5cclxuLyoqXHJcbiAqIEBuYW1lIE92ZXJXb3JsTWFwXHJcbiAqL1xyXG5jbGFzcyBPdmVyV29ybGRNYXAge1xyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcclxuICAgKiBAcGFyYW0ge1N0cmluZ30gY29uZmlnLmxvd2VyU3JjXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IGNvbmZpZy51cHBlclNyY1xyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcud2FsbHNcclxuICAgKiBAcGFyYW0ge3toZXJvOiBHYW1lT2JqZWN0LCBucGMxOiBHYW1lT2JqZWN0LCBucGMyOiBHYW1lT2JqZWN0fX0gY29uZmlnLmdhbWVPYmplY3RzXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XHJcbiAgICB0aGlzLmdhbWVPYmplY3RzID0gY29uZmlnLmdhbWVPYmplY3RzO1xyXG4gICAgdGhpcy53YWxscyA9IGNvbmZpZy53YWxscyB8fCB7fTtcclxuXHJcbiAgICB0aGlzLmxvd2VyTGF5ZXIgPSBuZXcgSW1hZ2UoKTtcclxuICAgIHRoaXMubG93ZXJMYXllci5zcmMgPSBjb25maWcubG93ZXJTcmM7XHJcblxyXG4gICAgdGhpcy51cHBlckxheWVyID0gbmV3IEltYWdlKCk7XHJcbiAgICB0aGlzLnVwcGVyTGF5ZXIuc3JjID0gY29uZmlnLnVwcGVyU3JjO1xyXG5cclxuICAgIHRoaXMuaXNDdXRzY2VuZVBsYXlpbmcgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEfSBjdHhcclxuICAgKiBAcGFyYW0ge0dhbWVPYmplY3R9IGNhbWVyYVBlcnNvblxyXG4gICAqL1xyXG4gIGRyYXdMb3dlckltYWdlKGN0eCwgY2FtZXJhUGVyc29uKSB7XHJcbiAgICBjdHguZHJhd0ltYWdlKFxyXG4gICAgICB0aGlzLmxvd2VyTGF5ZXIsXHJcbiAgICAgIHdpdGhHcmlkcygxMC41KSAtIGNhbWVyYVBlcnNvbi54LFxyXG4gICAgICB3aXRoR3JpZHMoNikgLSBjYW1lcmFQZXJzb24ueVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEfSBjdHhcclxuICAgKiBAcGFyYW0ge0dhbWVPYmplY3R9IGNhbWVyYVBlcnNvblxyXG4gICAqL1xyXG4gIGRyYXdVcHBlckltYWdlKGN0eCwgY2FtZXJhUGVyc29uKSB7XHJcbiAgICBjdHguZHJhd0ltYWdlKFxyXG4gICAgICB0aGlzLnVwcGVyTGF5ZXIsXHJcbiAgICAgIHdpdGhHcmlkcygxMC41KSAtIGNhbWVyYVBlcnNvbi54LFxyXG4gICAgICB3aXRoR3JpZHMoNikgLSBjYW1lcmFQZXJzb24ueVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBjdXJYXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGN1cllcclxuICAgKiBAcGFyYW0geyd1cCcgfCAnZG93bicgfCAnbGVmdCcgfCAncmlnaHQnIH0gZGlyZWN0aW9uXHJcbiAgICovXHJcbiAgaXNTcGFjZVRha2VuKGN1clgsIGN1clksIGRpcmVjdGlvbikge1xyXG4gICAgY29uc3QgeyB4LCB5IH0gPSBuZXh0UG9zaXRpb24oY3VyWCwgY3VyWSwgZGlyZWN0aW9uKTtcclxuICAgIHJldHVybiB0aGlzLndhbGxzW2Ake3h9LCR7eX1gXSB8fCBmYWxzZTtcclxuICB9XHJcblxyXG4gIC8vIE1vdW50aW5nIE9iamVjdFxyXG4gIG1vdW50T2JqZWN0cygpIHtcclxuICAgIC8vIE9iamVjdC52YWx1ZXModGhpcy5nYW1lT2JqZWN0cykubWFwKChvYmopID0+IHtcclxuICAgIC8vICAgb2JqLm1vdW50KHRoaXMpO1xyXG4gICAgLy8gfSk7XHJcblxyXG4gICAgT2JqZWN0LmtleXModGhpcy5nYW1lT2JqZWN0cykubWFwKChrZXkpID0+IHtcclxuICAgICAgbGV0IG9iamVjdCA9IHRoaXMuZ2FtZU9iamVjdHNba2V5XTtcclxuICAgICAgb2JqZWN0LmlkID0ga2V5O1xyXG4gICAgICBvYmplY3QubW91bnQodGhpcyk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIE1hcCBJbml0aWFsaXplXHJcblxyXG4gIGFzeW5jIHN0YXJ0Q3V0U2NlbmUoZXZlbnRzKSB7XHJcbiAgICB0aGlzLmlzQ3V0c2NlbmVQbGF5aW5nID0gdHJ1ZTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXZlbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGV2ZW50SGFuZGxlciA9IG5ldyBPdmVyV29ybGRFdmVudCh7XHJcbiAgICAgICAgZXZlbnRDb25maWc6IGV2ZW50c1tpXSxcclxuICAgICAgICBtYXA6IHRoaXMsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgYXdhaXQgZXZlbnRIYW5kbGVyLmluaXQoKTtcclxuICAgIH1cclxuICAgIHRoaXMuaXNDdXRzY2VuZVBsYXlpbmcgPSBmYWxzZTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHhcclxuICAgKiBAcGFyYW0ge051bWJlcn0geVxyXG4gICAqL1xyXG4gIGFkZE1hcCh4LCB5KSB7fVxyXG5cclxuICAvLyBPdGhlciBPYmplY3QgV2FsbHNcclxuICBhZGRXYWxsKHgsIHkpIHtcclxuICAgIHRoaXMud2FsbHNbYCR7eH0sJHt5fWBdID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHJlbW92ZVdhbGwoeCwgeSkge1xyXG4gICAgZGVsZXRlIHRoaXMud2FsbHNbYCR7eH0sJHt5fWBdO1xyXG4gIH1cclxuICAvKipcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7J3VwJyB8ICdkb3duJyB8ICdsZWZ0JyB8ICdyaWdodCcgfSBkaXJlY3Rpb25cclxuICAgKi9cclxuICBtb3ZlV2FsbCh3YXNYLCB3YXNZLCBkaXJlY3Rpb24pIHtcclxuICAgIHRoaXMucmVtb3ZlV2FsbCh3YXNYLCB3YXNZKTtcclxuICAgIGNvbnN0IHsgeCwgeSB9ID0gbmV4dFBvc2l0aW9uKHdhc1gsIHdhc1ksIGRpcmVjdGlvbik7XHJcbiAgICB0aGlzLmFkZFdhbGwoeCwgeSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPdmVyV29ybGRNYXA7XHJcbiIsImltcG9ydCBjb25zdGFudHMgZnJvbSBcIi4uL0RhdGEvY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IGVtaXRFdmVudCB9IGZyb20gXCIuLi91dGlscy9oZWxwZXJcIjtcclxuaW1wb3J0IEdhbWVPYmplY3QgZnJvbSBcIi4vR2FtZU9iamVjdFwiO1xyXG5pbXBvcnQgT3ZlcldvcmxkTWFwIGZyb20gXCIuL092ZXJXb3JsZE1hcFwiO1xyXG5cclxuLyoqXHJcbiAqL1xyXG5jbGFzcyBQZXJzb24gZXh0ZW5kcyBHYW1lT2JqZWN0IHtcclxuICAvKipcclxuICAgKiBAcGFyYW0ge0dhbWVPYmplY3R9IGNvbmZpZ1xyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xyXG4gICAgc3VwZXIoY29uZmlnKTtcclxuXHJcbiAgICB0aGlzLm1vdmluZ1Byb2dyZXNzUmVtYWluaWcgPSAwO1xyXG5cclxuICAgIHRoaXMuaXNQbGF5ZXJDb250cm9sbGVkID0gY29uZmlnLmlzUGxheWVyQ29udHJvbGxlZCB8fCBmYWxzZTtcclxuXHJcbiAgICB0aGlzLmRpcmVjdGlvblVwZGF0ZSA9IHtcclxuICAgICAgdXA6IFtcInlcIiwgLTFdLFxyXG4gICAgICBkb3duOiBbXCJ5XCIsIDFdLFxyXG4gICAgICBsZWZ0OiBbXCJ4XCIsIC0xXSxcclxuICAgICAgcmlnaHQ6IFtcInhcIiwgMV0sXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IHN0YXRlXHJcbiAgICogQHBhcmFtIHsnZG93bicgfCAndXAnIHwgJ2xlZnQnIHwgJ3JpZ2h0JyB9IHN0YXRlLmFycm93XHJcbiAgICogQHBhcmFtIHtPdmVyV29ybGRNYXB9IHN0YXRlLm1hcFxyXG4gICAqL1xyXG4gIHVwZGF0ZShzdGF0ZSkge1xyXG4gICAgaWYgKHRoaXMubW92aW5nUHJvZ3Jlc3NSZW1haW5pZyA+IDApIHtcclxuICAgICAgdGhpcy51cGRhdGVQb3NpdGlvbigpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIHRoaXMuaXNQbGF5ZXJDb250cm9sbGVkICYmXHJcbiAgICAgICAgIXN0YXRlLm1hcC5pc0N1dHNjZW5lUGxheWluZyAmJlxyXG4gICAgICAgIHN0YXRlLmFycm93XHJcbiAgICAgICkge1xyXG4gICAgICAgIHRoaXMuc3RhcnRCZWhhdmlvcihzdGF0ZSwge1xyXG4gICAgICAgICAgdHlwZTogXCJ3YWxrXCIsXHJcbiAgICAgICAgICBkaXJlY3Rpb246IHN0YXRlLmFycm93LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnVwZGF0ZVNwcmludChzdGF0ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0ge09iamVjdH0gc3RhdGVcclxuICAgKiBAcGFyYW0ge092ZXJXb3JsZE1hcH0gc3RhdGUubWFwXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IGJlaGF2aW9yXHJcbiAgICogQHBhcmFtIHsnd2FsaycgfCAnc3RhbmQnIH0gYmVoYXZpb3IudHlwZVxyXG4gICAqIEBwYXJhbSB7J3VwJyB8ICdkb3duJyB8ICdsZWZ0JyB8ICdyaWdodCcgfSBiZWhhdmlvci5kaXJlY3Rpb25cclxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IGJlaGF2aW9yLnJldHJ5XHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGJlaGF2aW9yLnRpbWVcclxuICAgKi9cclxuICBzdGFydEJlaGF2aW9yKHN0YXRlLCBiZWhhdmlvcikge1xyXG4gICAgdGhpcy5kaXJlY3Rpb24gPSBiZWhhdmlvci5kaXJlY3Rpb247XHJcblxyXG4gICAgaWYgKGJlaGF2aW9yLnR5cGUgPT09IFwid2Fsa1wiKSB7XHJcbiAgICAgIGNvbnN0IGlzU3BhY2VUYWtlbiA9IHN0YXRlLm1hcC5pc1NwYWNlVGFrZW4oXHJcbiAgICAgICAgdGhpcy54LFxyXG4gICAgICAgIHRoaXMueSxcclxuICAgICAgICB0aGlzLmRpcmVjdGlvblxyXG4gICAgICApO1xyXG4gICAgICBpZiAoaXNTcGFjZVRha2VuKSB7XHJcbiAgICAgICAgYmVoYXZpb3IucmV0cnkgJiZcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0QmVoYXZpb3Ioc3RhdGUsIGJlaGF2aW9yKTtcclxuICAgICAgICAgIH0sIDEwKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgc3RhdGUubWFwLm1vdmVXYWxsKHRoaXMueCwgdGhpcy55LCB0aGlzLmRpcmVjdGlvbik7XHJcbiAgICAgIHRoaXMubW92aW5nUHJvZ3Jlc3NSZW1haW5pZyA9IGNvbnN0YW50cy5tb3ZpbmdQcm9ncmVzcztcclxuICAgICAgdGhpcy51cGRhdGVTcHJpbnQoc3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChiZWhhdmlvci50eXBlID09PSBcInN0YW5kXCIpIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgZW1pdEV2ZW50KGNvbnN0YW50cy5ldmVudHMuUGVyc29uU3RhbmRDb21wbGV0ZSwgeyB3aG9JZDogdGhpcy5pZCB9KTtcclxuICAgICAgfSwgYmVoYXZpb3IudGltZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVQb3NpdGlvbigpIHtcclxuICAgIGlmICh0aGlzLm1vdmluZ1Byb2dyZXNzUmVtYWluaWcgPiAwKSB7XHJcbiAgICAgIGNvbnN0IFtwcm9wZXJ0eSwgY2hhbmdlXSA9IHRoaXMuZGlyZWN0aW9uVXBkYXRlW3RoaXMuZGlyZWN0aW9uXTtcclxuICAgICAgdGhpc1twcm9wZXJ0eV0gKz0gY2hhbmdlO1xyXG4gICAgICB0aGlzLm1vdmluZ1Byb2dyZXNzUmVtYWluaWcgLT0gMTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLm1vdmluZ1Byb2dyZXNzUmVtYWluaWcgPT09IDApIHtcclxuICAgICAgZW1pdEV2ZW50KGNvbnN0YW50cy5ldmVudHMuUGVyc29uV2Fsa2luZ0NvbXBsZXRlLCB7XHJcbiAgICAgICAgd2hvSWQ6IHRoaXMuaWQsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlU3ByaW50KCkge1xyXG4gICAgaWYgKHRoaXMubW92aW5nUHJvZ3Jlc3NSZW1haW5pZyA+IDApIHtcclxuICAgICAgdGhpcy5zcHJpdGUuc2V0QW5pbWF0aW9uKFwid2Fsa1wiICsgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHRoaXMuZGlyZWN0aW9uKSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNwcml0ZS5zZXRBbmltYXRpb24oXCJpZGxlXCIgKyBjYXBpdGFsaXplRmlyc3RMZXR0ZXIodGhpcy5kaXJlY3Rpb24pKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcmV0dXJuIHtTdHJpbmd9XHJcbiAqL1xyXG5mdW5jdGlvbiBjYXBpdGFsaXplRmlyc3RMZXR0ZXIoc3RyaW5nKSB7XHJcbiAgcmV0dXJuIHN0cmluZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGVyc29uO1xyXG4iLCJpbXBvcnQgY29uc3RhbnRzIGZyb20gXCIuLi9EYXRhL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBkcmF3SW1hZ2UsIHdpdGhHcmlkcyB9IGZyb20gXCIuLi91dGlscy9oZWxwZXJcIjtcclxuaW1wb3J0IEdhbWVPYmplY3QgZnJvbSBcIi4vR2FtZU9iamVjdFwiO1xyXG5cclxuLyoqXHJcbiAqIEBuYW1lIFNwcml0ZVxyXG4gKi9cclxuY2xhc3MgU3ByaXRlIHtcclxuICAvKipcclxuICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZy5hbmltYXRpb25zXHJcbiAgICogQHBhcmFtIHsnaWRsZURvd24nIHwgJ2lkbGVSaWdodCcgfCAnaWRsZVVwJyB8ICdpZGxlTGVmdCcgfCAnd2Fsa0Rvd24nIHwnd2Fsa1JpZ2h0JyB8ICd3YWxrVXAnIHwgJ3dhbGtMZWZ0JyB9IGNvbmZpZy5jdXJyZW50QW5pbWF0aW9uXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IGNvbmZpZy5zcmNcclxuICAgKiBAcGFyYW0ge051bWJlcn0gY29uZmlnLnNxdWFyZVNpemVcclxuICAgKiBAcGFyYW0ge0dhbWVPYmplY3R9IGNvbmZpZy5nYW1lT2JqZWN0XHJcbiAgICogQHBhcmFtIHtOdW1iZXIgfCBudWxsfSBjb25maWcuYW5pbWF0aW9uRnJhbWVMaW1pdFxyXG4gICAqIEBwYXJhbSB7eyAgeDogTnVtYmVyLCB5OiBOdW1iZXJ9IHwgbnVsbH0gY29uZmlnLnJlbW92ZVNxdWFyZVNpemVcclxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IGNvbmZpZy51c2VTaGFkb3dcclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcclxuICAgIC8vIFNxdWFyZVNpemUgRGVmYXVsdCAzMlxyXG4gICAgdGhpcy5zcXVhcmVTaXplID0gY29uZmlnLnNxdWFyZVNpemUgfHwgY29uc3RhbnRzLnNxdWFyZVNpemU7XHJcbiAgICB0aGlzLnJlbW92ZVNxdWFyZVNpemUgPSBjb25maWcucmVtb3ZlU3F1YXJlU2l6ZVxyXG4gICAgICA/IGNvbmZpZy5yZW1vdmVTcXVhcmVTaXplXHJcbiAgICAgIDogeyB4OiA4LCB5OiAxOCB9O1xyXG5cclxuICAgIC8vIFNldHVwIHRoZSBpbWFnZVxyXG4gICAgZHJhd0ltYWdlKFxyXG4gICAgICBjb25maWcuc3JjIHx8IFwiL3B1YmxpYy9pbWFnZXMvY2hhcmFjdGVycy9wZW9wbGUvaGVyby5wbmdcIixcclxuICAgICAgKGltYWdlKSA9PiB7XHJcbiAgICAgICAgdGhpcy5pbWFnZSA9IGltYWdlO1xyXG4gICAgICAgIHRoaXMuaW1hZ2VJc0xvYWRlZCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICk7XHJcblxyXG4gICAgLy8gU2hhZG93IEltYWdlXHJcbiAgICB0aGlzLnVzZVNoYWRvdyA9IGNvbmZpZy51c2VTaGFkb3cgfHwgZmFsc2U7XHJcbiAgICBpZiAodGhpcy51c2VTaGFkb3cpIHtcclxuICAgICAgZHJhd0ltYWdlKFwiL3B1YmxpYy9pbWFnZXMvY2hhcmFjdGVycy9zaGFkb3cucG5nXCIsIChpbWFnZSkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2hhZG93SW1hZ2UgPSBpbWFnZTtcclxuICAgICAgICB0aGlzLnNoYWRvd0ltYWdlTG9hZGVkID0gdHJ1ZTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ29uZml1cmUgQW5pbWF0aW9uIEFuZCBJbml0aWFsIFN0YXRlXHJcbiAgICB0aGlzLmFuaW1hdGlvbnMgPSBjb25maWcuYW5pbWF0aW9ucyB8fCB7XHJcbiAgICAgIGlkbGVEb3duOiBbWzAsIDBdXSxcclxuICAgICAgaWRsZVJpZ2h0OiBbWzAsIDFdXSxcclxuICAgICAgaWRsZVVwOiBbWzAsIDJdXSxcclxuICAgICAgaWRsZUxlZnQ6IFtbMCwgM11dLFxyXG4gICAgICB3YWxrRG93bjogW1xyXG4gICAgICAgIFsxLCAwXSwgLy8gaW1hZ2Ugcm93IDEgY29sIDFcclxuICAgICAgICBbMCwgMF0sIC8vIGltYWdlIHJvdyAxIGNvbCAyXHJcbiAgICAgICAgWzMsIDBdLCAvLyBpbWFnZSByb3cgMSBjb2wgNFxyXG4gICAgICAgIFswLCAwXSwgLy8gaW1hZ2Ugcm93IDEgY29sIDJcclxuICAgICAgXSxcclxuICAgICAgd2Fsa1JpZ2h0OiBbXHJcbiAgICAgICAgWzEsIDFdLCAvLyBpbWFnZSByb3cgMSBjb2wgMVxyXG4gICAgICAgIFswLCAxXSwgLy8gaW1hZ2Ugcm93IDEgY29sIDJcclxuICAgICAgICBbMywgMV0sIC8vIGltYWdlIHJvdyAxIGNvbCA0XHJcbiAgICAgICAgWzAsIDFdLCAvLyBpbWFnZSByb3cgMSBjb2wgMlxyXG4gICAgICBdLFxyXG4gICAgICB3YWxrVXA6IFtcclxuICAgICAgICBbMSwgMl0sIC8vIGltYWdlIHJvdyAxIGNvbCAxXHJcbiAgICAgICAgWzAsIDJdLCAvLyBpbWFnZSByb3cgMSBjb2wgMlxyXG4gICAgICAgIFszLCAyXSwgLy8gaW1hZ2Ugcm93IDEgY29sIDRcclxuICAgICAgICBbMCwgMl0sIC8vIGltYWdlIHJvdyAxIGNvbCAyXHJcbiAgICAgIF0sXHJcbiAgICAgIHdhbGtMZWZ0OiBbXHJcbiAgICAgICAgWzEsIDNdLCAvLyBpbWFnZSByb3cgMSBjb2wgMVxyXG4gICAgICAgIFswLCAzXSwgLy8gaW1hZ2Ugcm93IDEgY29sIDJcclxuICAgICAgICBbMywgM10sIC8vIGltYWdlIHJvdyAxIGNvbCA0XHJcbiAgICAgICAgWzAsIDNdLCAvLyBpbWFnZSByb3cgMSBjb2wgMlxyXG4gICAgICBdLFxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBTZXQgQW5pbWF0aW9uIEZyYW1lXHJcbiAgICB0aGlzLmN1cnJlbnRBbmltYXRpb24gPSBjb25maWcuY3VycmVudEFuaW1hdGlvbiB8fCBcImlkbGVEb3duXCI7XHJcbiAgICB0aGlzLmN1cnJlbnRBbmltYXRpb25GcmFtZSA9IDA7XHJcbiAgICB0aGlzLmFuaW1hdGlvbkZyYW1lTGltaXQgPVxyXG4gICAgICBjb25maWcuYW5pbWF0aW9uRnJhbWVMaW1pdCB8fCBjb25zdGFudHMuYW5pbWF0aW9uRnJhbWVMaW1pdDtcclxuICAgIHRoaXMuYW5pbWF0aW9uRnJhbWVQcm9ncmVzcyA9IHRoaXMuYW5pbWF0aW9uRnJhbWVMaW1pdDtcclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIiB0aGlzLmFuaW1hdGlvbkZyYW1lUHJvZ3Jlc3NcIiwgdGhpcy5hbmltYXRpb25GcmFtZVByb2dyZXNzKTtcclxuICAgIC8vXHJcbiAgICB0aGlzLmdhbWVPYmplY3QgPSBjb25maWcuZ2FtZU9iamVjdDtcclxuICB9XHJcblxyXG4gIC8vIEdldCBDdXJyZW50IEFuaW1hdGlvbiBGcmFtZVxyXG4gIC8qKlxyXG4gICAqIEByZXR1cm4ge1tOdW1iZXIsIE51bWJlcl0gfCB1bmRlZmluZWQgfVxyXG4gICAqL1xyXG4gIGdldCBmcmFtZSgpIHtcclxuICAgIHJldHVybiB0aGlzLmFuaW1hdGlvbnNbdGhpcy5jdXJyZW50QW5pbWF0aW9uXVt0aGlzLmN1cnJlbnRBbmltYXRpb25GcmFtZV07XHJcbiAgfVxyXG5cclxuICBzZXRBbmltYXRpb24oa2V5KSB7XHJcbiAgICBpZiAodGhpcy5jdXJyZW50QW5pbWF0aW9uICE9PSBrZXkpIHtcclxuICAgICAgdGhpcy5jdXJyZW50QW5pbWF0aW9uID0ga2V5O1xyXG4gICAgICB0aGlzLmN1cnJlbnRBbmltYXRpb25GcmFtZSA9IDA7XHJcbiAgICAgIHRoaXMuYW5pbWF0aW9uRnJhbWVQcm9ncmVzcyA9IHRoaXMuYW5pbWF0aW9uRnJhbWVMaW1pdDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZUFuaW1hdGlvblByb2dyZXNzKCkge1xyXG4gICAgLy8gRG93bnRpY2sgRnJhbWUgUHJvZ3Jlc3NcclxuICAgIGlmICh0aGlzLmFuaW1hdGlvbkZyYW1lUHJvZ3Jlc3MgPiAwKSB7XHJcbiAgICAgIHRoaXMuYW5pbWF0aW9uRnJhbWVQcm9ncmVzcyAtPSAxO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmVzZXQgdGhlIGNvdW50ZXJcclxuICAgIHRoaXMuYW5pbWF0aW9uRnJhbWVQcm9ncmVzcyA9IHRoaXMuYW5pbWF0aW9uRnJhbWVMaW1pdDtcclxuICAgIHRoaXMuY3VycmVudEFuaW1hdGlvbkZyYW1lICs9IDE7XHJcblxyXG4gICAgaWYgKHRoaXMuZnJhbWUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLmN1cnJlbnRBbmltYXRpb25GcmFtZSA9IDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEcmF3IENvbnRleHRcclxuICAgKiBAcGFyYW0ge0NhbnZhc1JlbmRlcmluZ0NvbnRleHQyRH0gY3R4XHJcbiAgICogQHBhcmFtIHtHYW1lT2JqZWN0fSBjYW1lcmFQZXJzb25cclxuICAgKi9cclxuICBkcmF3KGN0eCwgY2FtZXJhUGVyc29uKSB7XHJcbiAgICBjb25zdCB4ID1cclxuICAgICAgdGhpcy5nYW1lT2JqZWN0LnggLVxyXG4gICAgICB0aGlzLnJlbW92ZVNxdWFyZVNpemUueCArXHJcbiAgICAgIHdpdGhHcmlkcygxMC41KSAtXHJcbiAgICAgIGNhbWVyYVBlcnNvbi54OyAvLyBSZW1vdmUgVW5uZWNlc3Nhcnkgd2lkdGhcclxuICAgIGNvbnN0IHkgPVxyXG4gICAgICB0aGlzLmdhbWVPYmplY3QueSAtXHJcbiAgICAgIHRoaXMucmVtb3ZlU3F1YXJlU2l6ZS55ICtcclxuICAgICAgd2l0aEdyaWRzKDYpIC1cclxuICAgICAgY2FtZXJhUGVyc29uLnk7IC8vIFJlbW92ZSBVbm5lY2Vzc2FyeSBoZWlnaHRcclxuICAgIGNvbnN0IFtmcmFtZVgsIGZyYW1lWV0gPSB0aGlzLmZyYW1lO1xyXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5mcmFtZSk7XHJcblxyXG4gICAgLy8gY29uc29sZS5sb2coXCJGcmFtZVhcIiwgZnJhbWVYKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiRnJhbWVZXCIsIGZyYW1lWSk7XHJcblxyXG4gICAgLy8gV2hlbiBJbWFnZSBMb2FkaW5nXHJcbiAgICB0aGlzLmltYWdlSXNMb2FkZWQgJiZcclxuICAgICAgY3R4LmRyYXdJbWFnZShcclxuICAgICAgICB0aGlzLmltYWdlLCAvLyBJbnNlcnQgSW1hZ2VcclxuICAgICAgICBmcmFtZVggKiBjb25zdGFudHMuc3F1YXJlU2l6ZSwgLy8gWCBmcm9tIEltYWdlXHJcbiAgICAgICAgZnJhbWVZICogY29uc3RhbnRzLnNxdWFyZVNpemUsIC8vIFkgZnJvbSBJbWFnZVxyXG4gICAgICAgIHRoaXMuc3F1YXJlU2l6ZSwgLy8gV2lkdGggRnJvbSBJbWFnZSxcclxuICAgICAgICB0aGlzLnNxdWFyZVNpemUsIC8vIEhlaWdodCBGcm9tIEltYWdlXHJcbiAgICAgICAgeCwgLy8gWCBmb3IgQ2FudmFzXHJcbiAgICAgICAgeSwgLy8gWSBmb3IgQ2FudmFzXHJcbiAgICAgICAgdGhpcy5zcXVhcmVTaXplLCAvLyBXaWR0aCBGb3IgQ2FudmFzXHJcbiAgICAgICAgdGhpcy5zcXVhcmVTaXplIC8vIEhlaWdodCBGb3IgQ2FudmFzXHJcbiAgICAgICk7XHJcblxyXG4gICAgLy8gQ2FsbCBBbmltYXRpb25cclxuICAgIHRoaXMudXBkYXRlQW5pbWF0aW9uUHJvZ3Jlc3MoKTtcclxuXHJcbiAgICB0aGlzLnNoYWRvd0ltYWdlTG9hZGVkICYmXHJcbiAgICAgIGN0eC5kcmF3SW1hZ2UoXHJcbiAgICAgICAgdGhpcy5zaGFkb3dJbWFnZSwgLy8gSW5zZXJ0IEltYWdlXHJcbiAgICAgICAgeCwgLy8gWCBmb3IgQ2FudmFzXHJcbiAgICAgICAgeSAvLyBZIGZvciBDYW52YXNcclxuICAgICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNwcml0ZTtcclxuIiwiaW1wb3J0IGNvbnN0YW50cyBmcm9tIFwiLi4vRGF0YS9jb25zdGFudHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBkcmF3SW1hZ2UgPSAoc3JjLCBjYikgPT4ge1xyXG4gIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xyXG4gIGltZy5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICBpZiAoY2IpIHtcclxuICAgICAgY2IoaW1nKTtcclxuICAgIH1cclxuICB9O1xyXG4gIGltZy5zcmMgPSBzcmM7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgd2l0aEdyaWRzID0gKG4pID0+IHtcclxuICByZXR1cm4gbiAqIGNvbnN0YW50cy5oYWxmU3F1YXJlU2l6ZTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBhc0dyaWRDb29yZCA9ICh4LCB5KSA9PiB7XHJcbiAgcmV0dXJuIGAke3ggKiBjb25zdGFudHMuaGFsZlNxdWFyZVNpemV9LCR7eSAqIGNvbnN0YW50cy5oYWxmU3F1YXJlU2l6ZX1gO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IG5leHRQb3NpdGlvbiA9IChjdXJYLCBjdXJZLCBkaXJlY3Rpb24pID0+IHtcclxuICBsZXQgeCwgeSwgc2l6ZTtcclxuICB4ID0gY3VyWDtcclxuICB5ID0gY3VyWTtcclxuICBzaXplID0gMTY7XHJcbiAgaWYgKGRpcmVjdGlvbiA9PT0gXCJsZWZ0XCIpIHtcclxuICAgIHggLT0gc2l6ZTtcclxuICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gXCJyaWdodFwiKSB7XHJcbiAgICB4ICs9IHNpemU7XHJcbiAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09IFwidXBcIikge1xyXG4gICAgeSAtPSBzaXplO1xyXG4gIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSBcImRvd25cIikge1xyXG4gICAgeSArPSBzaXplO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHsgeCwgeSB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGVtaXRFdmVudCA9IChuYW1lLCBkZXRhaWwpID0+IHtcclxuICAvLyBXZSBGaW5pc2hlZCB0aGUgd2Fsa1xyXG4gIGNvbnN0IGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KG5hbWUsIHtcclxuICAgIGRldGFpbCxcclxuICB9KTtcclxuXHJcbiAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChldmVudCk7XHJcbn07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IE92ZXJXb3JsZCBmcm9tIFwiLi9HYW1lL092ZXJXb3JsZFwiO1xyXG5cclxuY29uc3Qgd29scmQgPSBuZXcgT3ZlcldvcmxkKHtcclxuICBlbGVtZW50OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWUtY29udGFpbmVyXCIpLFxyXG59KTtcclxuXHJcbndvbHJkLmluaXQoKTtcclxuIl0sIm5hbWVzIjpbIkdhbWVPYmplY3QiLCJQZXJzb24iLCJhc0dyaWRDb29yZCIsIndpdGhHcmlkcyIsIk92ZXJXb3JsZE1hcHNMaXN0IiwiRGVtb1Jvb20iLCJsb3dlclNyYyIsInVwcGVyU3JjIiwiZ2FtZU9iamVjdHMiLCJoZXJvIiwiaXNQbGF5ZXJDb250cm9sbGVkIiwieCIsInkiLCJzcmMiLCJucGMxIiwiYmVoYXZpb3JMb29wIiwidHlwZSIsImRpcmVjdGlvbiIsInRpbWUiLCJucGMyIiwid2FsbHMiLCJLaXRjaGVuIiwic3F1YXJlU2l6ZSIsImhhbGZTcXVhcmVTaXplIiwibW92aW5nUHJvZ3Jlc3MiLCJhbmltYXRpb25GcmFtZUxpbWl0IiwiZXZlbnRzIiwiUGVyc29uV2Fsa2luZ0NvbXBsZXRlIiwiUGVyc29uU3RhbmRDb21wbGV0ZSIsIkRpcmVjdGlvbklucHV0IiwiY29uc3RydWN0b3IiLCJoZWxkRGlyZWN0aW9ucyIsIm1hcCIsIkFycm93VXAiLCJLZXlXIiwiQXJyb3dEb3duIiwiS2V5UyIsIkFycm93TGVmdCIsIktleUEiLCJBcnJvd1JpZ2h0IiwiS2V5RCIsImluaXQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiZGlyIiwiY29kZSIsImluZGV4T2YiLCJ1bnNoaWZ0IiwiaW5kZXgiLCJzcGxpY2UiLCJPdmVyV29ybGRFdmVudCIsIk92ZXJXb3JsZE1hcCIsIlNwcml0ZSIsImNvbmZpZyIsImlkIiwiaXNNb3VudGVkIiwiaXNVc2VTaGFkb3ciLCJ1c2VTaGFkb3ciLCJ1bmRlZmluZWQiLCJzcHJpdGUiLCJnYW1lT2JqZWN0IiwicmVtb3ZlU3F1YXJlU2l6ZSIsImJlaGF2aW9yTG9vcEluZGV4IiwibW91bnQiLCJjb25zb2xlIiwibG9nIiwiYWRkV2FsbCIsInNldFRpbWVvdXQiLCJkb0JlaGF2aW9yRXZlbnQiLCJ1cGRhdGUiLCJpc0N1dHNjZW5lUGxheWluZyIsImxlbmd0aCIsImV2ZW50Iiwid2hvIiwiZXZlbnRIYW5kbGVyIiwiZXZlbnRDb25maWciLCJPdmVyV29ybGQiLCJlbGVtZW50IiwiY2FudmFzIiwicXVlcnlTZWxlY3RvciIsImN0eCIsImdldENvbnRleHQiLCJzdGFydEdhbWVMb29wIiwic3RlcCIsImNsZWFyUmVjdCIsIndpZHRoIiwiaGVpZ2h0IiwiY2FtZXJhUGVyc29uIiwiT2JqZWN0IiwidmFsdWVzIiwiZm9yRWFjaCIsIm9iaiIsImFycm93IiwiZGlyZWN0aW9uQ29udHJvbGxlciIsImRyYXdMb3dlckltYWdlIiwic29ydCIsImEiLCJiIiwiZHJhdyIsImRyYXdVcHBlckltYWdlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibW91bnRPYmplY3RzIiwiY29uc3RhbnRzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzdGFuZCIsInN0YXJ0QmVoYXZpb3IiLCJjb21wbGV0ZUhhbmRsZXIiLCJkZXRhaWwiLCJ3aG9JZCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ3YWxrIiwicmV0cnkiLCJuZXh0UG9zaXRpb24iLCJsb3dlckxheWVyIiwiSW1hZ2UiLCJ1cHBlckxheWVyIiwiZHJhd0ltYWdlIiwiaXNTcGFjZVRha2VuIiwiY3VyWCIsImN1clkiLCJrZXlzIiwia2V5Iiwib2JqZWN0Iiwic3RhcnRDdXRTY2VuZSIsImkiLCJhZGRNYXAiLCJyZW1vdmVXYWxsIiwibW92ZVdhbGwiLCJ3YXNYIiwid2FzWSIsImVtaXRFdmVudCIsIm1vdmluZ1Byb2dyZXNzUmVtYWluaWciLCJkaXJlY3Rpb25VcGRhdGUiLCJ1cCIsImRvd24iLCJsZWZ0IiwicmlnaHQiLCJzdGF0ZSIsInVwZGF0ZVBvc2l0aW9uIiwidXBkYXRlU3ByaW50IiwiYmVoYXZpb3IiLCJwcm9wZXJ0eSIsImNoYW5nZSIsInNldEFuaW1hdGlvbiIsImNhcGl0YWxpemVGaXJzdExldHRlciIsInN0cmluZyIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJpbWFnZSIsImltYWdlSXNMb2FkZWQiLCJzaGFkb3dJbWFnZSIsInNoYWRvd0ltYWdlTG9hZGVkIiwiYW5pbWF0aW9ucyIsImlkbGVEb3duIiwiaWRsZVJpZ2h0IiwiaWRsZVVwIiwiaWRsZUxlZnQiLCJ3YWxrRG93biIsIndhbGtSaWdodCIsIndhbGtVcCIsIndhbGtMZWZ0IiwiY3VycmVudEFuaW1hdGlvbiIsImN1cnJlbnRBbmltYXRpb25GcmFtZSIsImFuaW1hdGlvbkZyYW1lUHJvZ3Jlc3MiLCJmcmFtZSIsInVwZGF0ZUFuaW1hdGlvblByb2dyZXNzIiwiZnJhbWVYIiwiZnJhbWVZIiwiY2IiLCJpbWciLCJvbmxvYWQiLCJuIiwic2l6ZSIsIm5hbWUiLCJDdXN0b21FdmVudCIsImRpc3BhdGNoRXZlbnQiLCJ3b2xyZCJdLCJzb3VyY2VSb290IjoiIn0=