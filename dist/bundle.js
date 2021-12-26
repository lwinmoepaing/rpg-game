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



var OverWorldMapsList = {
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
      npc1: new _Game_GameObject__WEBPACK_IMPORTED_MODULE_0__["default"]({
        x: (0,_utils_helper__WEBPACK_IMPORTED_MODULE_2__.withGrids)(7),
        y: (0,_utils_helper__WEBPACK_IMPORTED_MODULE_2__.withGrids)(9),
        src: "/public/images/characters/people/npc1.png "
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
  animationFrameLimit: 8
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
/* harmony import */ var _OverWorldMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OverWorldMap */ "./src/Game/OverWorldMap.js");
/* harmony import */ var _Sprite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sprite */ "./src/Game/Sprite.js");


/**
 * @name GameObject
 */

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
   */
  constructor(config) {
    this.id = config.id ? config.id : null;
    this.isMounted = false;
    var isUseShadow = config.useShadow !== null && config.useShadow !== undefined ? config.useShadow : true;
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.direction = config.direction || "down";
    this.sprite = new _Sprite__WEBPACK_IMPORTED_MODULE_1__["default"]({
      gameObject: this,
      src: config.src,
      useShadow: isUseShadow,
      squareSize: config.squareSize ? config.squareSize : 32,
      removeSquareSize: config.removeSquareSize ? config.removeSquareSize : {
        x: 8,
        y: 18
      }
    });
  }
  /**
   * @param {OverWorldMap} map
   */


  mount(map) {
    console.log("Mounting");
    this.isMounted = true;
    map.addWall(this.x, this.y);
  }

  update() {}

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
    Object.values(this.gameObjects).map(obj => {
      obj.mount(this);
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
/* harmony import */ var _GameObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GameObject */ "./src/Game/GameObject.js");
/* harmony import */ var _OverWorldMap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OverWorldMap */ "./src/Game/OverWorldMap.js");




class Person extends _GameObject__WEBPACK_IMPORTED_MODULE_1__["default"] {
  /**
   * @param {GameObject} props
   * @param {Boolean} props.isPlayerControlled
   */
  constructor(props) {
    super(props);
    this.movingProgressRemainig = 0;
    this.isPlayerControlled = props.isPlayerControlled || false;
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
   * @param {'walk' | 'stop' } behavior.type
   * @param {'up' | 'down' | 'left' | 'right' } behavior.direction
   */


  startBehavior(state, behavior) {
    this.direction = behavior.direction;

    if (behavior.type === "walk") {
      var isSpaceTaken = state.map.isSpaceTaken(this.x, this.y, this.direction);
      if (isSpaceTaken) return;
      state.map.moveWall(this.x, this.y, this.direction);
      this.movingProgressRemainig = _Data_constants__WEBPACK_IMPORTED_MODULE_0__["default"].movingProgress;
    }
  }

  updatePosition() {
    if (this.movingProgressRemainig > 0) {
      var [property, change] = this.directionUpdate[this.direction];
      this[property] += change;
      this.movingProgressRemainig -= 1;
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
/* harmony export */   "nextPosition": () => (/* binding */ nextPosition)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VCxDQUF1QixpQkFBdkI7QUFEaUIsQ0FBZCxDQUFkO0FBSUFpRixLQUFLLENBQUMvRyxJQUFOLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ycGctZ2FtZS8uL3NyYy9EYXRhL0FsbE1hcExpc3QuanMiLCJ3ZWJwYWNrOi8vcnBnLWdhbWUvLi9zcmMvRGF0YS9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vcnBnLWdhbWUvLi9zcmMvR2FtZS9EaXJlY3Rpb25JbnB1dC5qcyIsIndlYnBhY2s6Ly9ycGctZ2FtZS8uL3NyYy9HYW1lL0dhbWVPYmplY3QuanMiLCJ3ZWJwYWNrOi8vcnBnLWdhbWUvLi9zcmMvR2FtZS9PdmVyV29ybGQuanMiLCJ3ZWJwYWNrOi8vcnBnLWdhbWUvLi9zcmMvR2FtZS9PdmVyV29ybGRNYXAuanMiLCJ3ZWJwYWNrOi8vcnBnLWdhbWUvLi9zcmMvR2FtZS9QZXJzb24uanMiLCJ3ZWJwYWNrOi8vcnBnLWdhbWUvLi9zcmMvR2FtZS9TcHJpdGUuanMiLCJ3ZWJwYWNrOi8vcnBnLWdhbWUvLi9zcmMvdXRpbHMvaGVscGVyLmpzIiwid2VicGFjazovL3JwZy1nYW1lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3JwZy1nYW1lL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9ycGctZ2FtZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3JwZy1nYW1lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcnBnLWdhbWUvLi9zcmMvYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lT2JqZWN0IGZyb20gXCIuLi9HYW1lL0dhbWVPYmplY3RcIjtcclxuaW1wb3J0IFBlcnNvbiBmcm9tIFwiLi4vR2FtZS9QZXJzb25cIjtcclxuaW1wb3J0IHsgYXNHcmlkQ29vcmQsIHdpdGhHcmlkcyB9IGZyb20gXCIuLi91dGlscy9oZWxwZXJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBPdmVyV29ybGRNYXBzTGlzdCA9IHtcclxuICBEZW1vUm9vbToge1xyXG4gICAgbG93ZXJTcmM6IFwiL3B1YmxpYy9pbWFnZXMvbWFwcy9EZW1vTG93ZXIucG5nXCIsXHJcbiAgICB1cHBlclNyYzogXCIvcHVibGljL2ltYWdlcy9tYXBzL0RlbW9VcHBlci5wbmdcIixcclxuICAgIGdhbWVPYmplY3RzOiB7XHJcbiAgICAgIGhlcm86IG5ldyBQZXJzb24oe1xyXG4gICAgICAgIGlzUGxheWVyQ29udHJvbGxlZDogdHJ1ZSxcclxuICAgICAgICB4OiB3aXRoR3JpZHMoMiksXHJcbiAgICAgICAgeTogd2l0aEdyaWRzKDQpLFxyXG4gICAgICAgIHNyYzogXCIvcHVibGljL2ltYWdlcy9jaGFyYWN0ZXJzL3Blb3BsZS9oZXJvLnBuZ1wiLFxyXG4gICAgICB9KSxcclxuICAgICAgbnBjMTogbmV3IEdhbWVPYmplY3Qoe1xyXG4gICAgICAgIHg6IHdpdGhHcmlkcyg3KSxcclxuICAgICAgICB5OiB3aXRoR3JpZHMoOSksXHJcbiAgICAgICAgc3JjOiBcIi9wdWJsaWMvaW1hZ2VzL2NoYXJhY3RlcnMvcGVvcGxlL25wYzEucG5nIFwiLFxyXG4gICAgICB9KSxcclxuICAgIH0sXHJcbiAgICB3YWxsczoge1xyXG4gICAgICBbYXNHcmlkQ29vcmQoNywgNildOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoOCwgNildOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoNywgNyldOiB0cnVlLFxyXG4gICAgICBbYXNHcmlkQ29vcmQoOCwgNyldOiB0cnVlLFxyXG4gICAgfSxcclxuICB9LFxyXG5cclxuICBLaXRjaGVuOiB7XHJcbiAgICBsb3dlclNyYzogXCIvcHVibGljL2ltYWdlcy9tYXBzL0tpdGNoZW5Mb3dlci5wbmdcIixcclxuICAgIHVwcGVyU3JjOiBcIi9wdWJsaWMvaW1hZ2VzL21hcHMvS2l0Y2hlblVwcGVyLnBuZ1wiLFxyXG4gICAgZ2FtZU9iamVjdHM6IHtcclxuICAgICAgLy8gaGVybzogbmV3IEdhbWVPYmplY3Qoe1xyXG4gICAgICAvLyAgIHg6IHdpdGhHcmlkcygzKSxcclxuICAgICAgLy8gICB5OiB3aXRoR3JpZHMoNSksXHJcbiAgICAgIC8vIH0pLFxyXG4gICAgICAvLyBucGMxOiBuZXcgR2FtZU9iamVjdCh7XHJcbiAgICAgIC8vICAgeDogd2l0aEdyaWRzKDkpLFxyXG4gICAgICAvLyAgIHk6IHdpdGhHcmlkcyg2KSxcclxuICAgICAgLy8gICBzcmM6IFwiL3B1YmxpYy9pbWFnZXMvY2hhcmFjdGVycy9wZW9wbGUvbnBjMi5wbmcgXCIsXHJcbiAgICAgIC8vIH0pLFxyXG4gICAgICAvLyBucGMzOiBuZXcgR2FtZU9iamVjdCh7XHJcbiAgICAgIC8vICAgeDogd2l0aEdyaWRzKDEwKSxcclxuICAgICAgLy8gICB5OiB3aXRoR3JpZHMoOCksXHJcbiAgICAgIC8vICAgc3JjOiBcIi9wdWJsaWMvaW1hZ2VzL2NoYXJhY3RlcnMvcGVvcGxlL25wYzMucG5nIFwiLFxyXG4gICAgICAvLyB9KSxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gIHNxdWFyZVNpemU6IDMyLFxyXG4gIGhhbGZTcXVhcmVTaXplOiAxNixcclxuICBtb3ZpbmdQcm9ncmVzczogMTYsXHJcbiAgYW5pbWF0aW9uRnJhbWVMaW1pdDogOCxcclxufTtcclxuIiwiY2xhc3MgRGlyZWN0aW9uSW5wdXQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5oZWxkRGlyZWN0aW9ucyA9IFtdO1xyXG4gICAgdGhpcy5tYXAgPSB7XHJcbiAgICAgIEFycm93VXA6IFwidXBcIixcclxuICAgICAgS2V5VzogXCJ1cFwiLFxyXG4gICAgICBBcnJvd0Rvd246IFwiZG93blwiLFxyXG4gICAgICBLZXlTOiBcImRvd25cIixcclxuICAgICAgQXJyb3dMZWZ0OiBcImxlZnRcIixcclxuICAgICAgS2V5QTogXCJsZWZ0XCIsXHJcbiAgICAgIEFycm93UmlnaHQ6IFwicmlnaHRcIixcclxuICAgICAgS2V5RDogXCJyaWdodFwiLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xyXG4gICAgICBjb25zdCBkaXIgPSB0aGlzLm1hcFtlLmNvZGVdO1xyXG5cclxuICAgICAgaWYgKGRpciAmJiB0aGlzLmhlbGREaXJlY3Rpb25zLmluZGV4T2YoZGlyKSA9PT0gLTEpIHtcclxuICAgICAgICB0aGlzLmhlbGREaXJlY3Rpb25zLnVuc2hpZnQoZGlyKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmhlbGREaXJlY3Rpb25zKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIChlKSA9PiB7XHJcbiAgICAgIGNvbnN0IGRpciA9IHRoaXMubWFwW2UuY29kZV07XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5oZWxkRGlyZWN0aW9ucy5pbmRleE9mKGRpcik7XHJcbiAgICAgIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgICAgdGhpcy5oZWxkRGlyZWN0aW9ucy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEByZXR1cm4ge0FycmF5PCdsZWZ0JyB8ICdyaWdodCcgfCAndXAnIHwgJ2Rvd24nID59XHJcbiAgICovXHJcbiAgZ2V0IGRpcmVjdGlvbigpIHtcclxuICAgIHJldHVybiB0aGlzLmhlbGREaXJlY3Rpb25zWzBdO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGlyZWN0aW9uSW5wdXQ7XHJcbiIsImltcG9ydCBPdmVyV29ybGRNYXAgZnJvbSBcIi4vT3ZlcldvcmxkTWFwXCI7XHJcbmltcG9ydCBTcHJpdGUgZnJvbSBcIi4vU3ByaXRlXCI7XHJcblxyXG4vKipcclxuICogQG5hbWUgR2FtZU9iamVjdFxyXG4gKi9cclxuY2xhc3MgR2FtZU9iamVjdCB7XHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBjb25maWcueFxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBjb25maWcueVxyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBjb25maWcuc3JjXHJcbiAgICogQHBhcmFtIHsnZG93bicgfCAndXAnIHwgJ2xlZnQnIHwgJ3JpZ2h0JyB8IG51bGx9IGNvbmZpZy5kaXJlY3Rpb25cclxuICAgKiBAcGFyYW0ge0Jvb2xlYW4gfCBudWxsfSBjb25maWcudXNlU2hhZG93XHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGNvbmZpZy5zcXVhcmVTaXplXHJcbiAgICogQHBhcmFtIHt7eDogTnVtYmVyLCB5OiBOdW1iZXJ9IHwgbnVsbH0gY29uZmlnLnJlbW92ZVNxdWFyZVNpemVcclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcclxuICAgIHRoaXMuaWQgPSBjb25maWcuaWQgPyBjb25maWcuaWQgOiBudWxsO1xyXG4gICAgdGhpcy5pc01vdW50ZWQgPSBmYWxzZTtcclxuICAgIGNvbnN0IGlzVXNlU2hhZG93ID1cclxuICAgICAgY29uZmlnLnVzZVNoYWRvdyAhPT0gbnVsbCAmJiBjb25maWcudXNlU2hhZG93ICE9PSB1bmRlZmluZWRcclxuICAgICAgICA/IGNvbmZpZy51c2VTaGFkb3dcclxuICAgICAgICA6IHRydWU7XHJcbiAgICB0aGlzLnggPSBjb25maWcueCB8fCAwO1xyXG4gICAgdGhpcy55ID0gY29uZmlnLnkgfHwgMDtcclxuICAgIHRoaXMuZGlyZWN0aW9uID0gY29uZmlnLmRpcmVjdGlvbiB8fCBcImRvd25cIjtcclxuICAgIHRoaXMuc3ByaXRlID0gbmV3IFNwcml0ZSh7XHJcbiAgICAgIGdhbWVPYmplY3Q6IHRoaXMsXHJcbiAgICAgIHNyYzogY29uZmlnLnNyYyxcclxuICAgICAgdXNlU2hhZG93OiBpc1VzZVNoYWRvdyxcclxuICAgICAgc3F1YXJlU2l6ZTogY29uZmlnLnNxdWFyZVNpemUgPyBjb25maWcuc3F1YXJlU2l6ZSA6IDMyLFxyXG4gICAgICByZW1vdmVTcXVhcmVTaXplOiBjb25maWcucmVtb3ZlU3F1YXJlU2l6ZVxyXG4gICAgICAgID8gY29uZmlnLnJlbW92ZVNxdWFyZVNpemVcclxuICAgICAgICA6IHsgeDogOCwgeTogMTggfSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtPdmVyV29ybGRNYXB9IG1hcFxyXG4gICAqL1xyXG4gIG1vdW50KG1hcCkge1xyXG4gICAgY29uc29sZS5sb2coXCJNb3VudGluZ1wiKTtcclxuICAgIHRoaXMuaXNNb3VudGVkID0gdHJ1ZTtcclxuICAgIG1hcC5hZGRXYWxsKHRoaXMueCwgdGhpcy55KTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSgpIHt9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbWVPYmplY3Q7XHJcbiIsImltcG9ydCB7IE92ZXJXb3JsZE1hcHNMaXN0IH0gZnJvbSBcIi4uL0RhdGEvQWxsTWFwTGlzdFwiO1xyXG5pbXBvcnQgR2FtZU9iamVjdCBmcm9tIFwiLi9HYW1lT2JqZWN0XCI7XHJcbmltcG9ydCBQZXJzb24gZnJvbSBcIi4vUGVyc29uXCI7XHJcbmltcG9ydCBPdmVyV29ybGRNYXAgZnJvbSBcIi4vT3ZlcldvcmxkTWFwXCI7XHJcbmltcG9ydCBEaXJlY3Rpb25JbnB1dCBmcm9tIFwiLi9EaXJlY3Rpb25JbnB1dFwiO1xyXG5cclxuY2xhc3MgT3ZlcldvcmxkIHtcclxuICAvKipcclxuICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXHJcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gY29uZmlnLmVsZW1lbnRcclxuICAgKiBAcGFyYW0geydoZWhlJ3wnaGFoYSd9IGNvbmZpZy50ZXN0XHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XHJcbiAgICBjb25zdCB7IGVsZW1lbnQgfSA9IGNvbmZpZztcclxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAdHlwZSB7SFRNTENhbnZhc0VsZW1lbnR9XHJcbiAgICAgKi9cclxuICAgIHRoaXMuY2FudmFzID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZS1jYW52YXNcIik7IC8vSFRNTENhbnZhc0VsZW1lbnRcclxuXHJcbiAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEB0eXBlIHtPdmVyV29ybGRNYXAgfCBudWxsfVxyXG4gICAgICovXHJcbiAgICB0aGlzLm1hcCA9IG51bGw7XHJcbiAgfVxyXG5cclxuICBzdGFydEdhbWVMb29wKCkge1xyXG4gICAgY29uc3Qgc3RlcCA9ICgpID0+IHtcclxuICAgICAgLy8gQ2xlYXIgT2YgVGhlIENhbnZhc1xyXG4gICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XHJcblxyXG4gICAgICAvLyBDYW1lcmFcclxuICAgICAgY29uc3QgY2FtZXJhUGVyc29uID0gdGhpcy5tYXAuZ2FtZU9iamVjdHMuaGVybztcclxuXHJcbiAgICAgIC8vIFVwZGF0ZSBBbGwgT2JqZWN0c1xyXG4gICAgICBPYmplY3QudmFsdWVzKHRoaXMubWFwLmdhbWVPYmplY3RzKS5mb3JFYWNoKFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBwYXJhbSB7R2FtZU9iamVjdCB8IFBlcnNvbn0gb2JqXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgKG9iaikgPT4ge1xyXG4gICAgICAgICAgb2JqLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgIGFycm93OiB0aGlzLmRpcmVjdGlvbkNvbnRyb2xsZXIuZGlyZWN0aW9uLFxyXG4gICAgICAgICAgICBtYXA6IHRoaXMubWFwLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG5cclxuICAgICAgLy8gRHJhdyB0aGUgTG93ZXIgTGF5ZXJcclxuICAgICAgdGhpcy5tYXAuZHJhd0xvd2VySW1hZ2UodGhpcy5jdHgsIGNhbWVyYVBlcnNvbik7XHJcblxyXG4gICAgICAvLyBNYWtlIFBlcnNvbiBhbmQgTWlkZGxlIExheWVyXHJcbiAgICAgIE9iamVjdC52YWx1ZXModGhpcy5tYXAuZ2FtZU9iamVjdHMpLmZvckVhY2goXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQHBhcmFtIHtHYW1lT2JqZWN0IHwgUGVyc29ufSBvYmpcclxuICAgICAgICAgKi9cclxuICAgICAgICAob2JqKSA9PiB7XHJcbiAgICAgICAgICBvYmouc3ByaXRlLmRyYXcodGhpcy5jdHgsIGNhbWVyYVBlcnNvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG5cclxuICAgICAgdGhpcy5tYXAuZHJhd1VwcGVySW1hZ2UodGhpcy5jdHgsIGNhbWVyYVBlcnNvbik7XHJcblxyXG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xyXG4gICAgICAgIHN0ZXAoKTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHN0ZXAoKTtcclxuICB9XHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICB0aGlzLm1hcCA9IG5ldyBPdmVyV29ybGRNYXAoT3ZlcldvcmxkTWFwc0xpc3QuRGVtb1Jvb20pO1xyXG4gICAgdGhpcy5tYXAubW91bnRPYmplY3RzKCk7XHJcblxyXG4gICAgdGhpcy5kaXJlY3Rpb25Db250cm9sbGVyID0gbmV3IERpcmVjdGlvbklucHV0KCk7XHJcbiAgICB0aGlzLmRpcmVjdGlvbkNvbnRyb2xsZXIuaW5pdCgpO1xyXG5cclxuICAgIC8vIFN0YXJ0IEdhbWUgTG9vcFxyXG4gICAgdGhpcy5zdGFydEdhbWVMb29wKCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPdmVyV29ybGQ7XHJcbiIsImltcG9ydCB7IG5leHRQb3NpdGlvbiwgd2l0aEdyaWRzIH0gZnJvbSBcIi4uL3V0aWxzL2hlbHBlclwiO1xyXG5pbXBvcnQgR2FtZU9iamVjdCBmcm9tIFwiLi9HYW1lT2JqZWN0XCI7XHJcblxyXG4vKipcclxuICogQG5hbWUgT3ZlcldvcmxNYXBcclxuICovXHJcbmNsYXNzIE92ZXJXb3JsZE1hcCB7XHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBjb25maWcubG93ZXJTcmNcclxuICAgKiBAcGFyYW0ge1N0cmluZ30gY29uZmlnLnVwcGVyU3JjXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZy53YWxsc1xyXG4gICAqIEBwYXJhbSB7e2hlcm86IEdhbWVPYmplY3QsIG5wYzE6IEdhbWVPYmplY3QsIG5wYzI6IEdhbWVPYmplY3R9fSBjb25maWcuZ2FtZU9iamVjdHNcclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcclxuICAgIHRoaXMuZ2FtZU9iamVjdHMgPSBjb25maWcuZ2FtZU9iamVjdHM7XHJcbiAgICB0aGlzLndhbGxzID0gY29uZmlnLndhbGxzIHx8IHt9O1xyXG5cclxuICAgIHRoaXMubG93ZXJMYXllciA9IG5ldyBJbWFnZSgpO1xyXG4gICAgdGhpcy5sb3dlckxheWVyLnNyYyA9IGNvbmZpZy5sb3dlclNyYztcclxuXHJcbiAgICB0aGlzLnVwcGVyTGF5ZXIgPSBuZXcgSW1hZ2UoKTtcclxuICAgIHRoaXMudXBwZXJMYXllci5zcmMgPSBjb25maWcudXBwZXJTcmM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0ge0NhbnZhc1JlbmRlcmluZ0NvbnRleHQyRH0gY3R4XHJcbiAgICogQHBhcmFtIHtHYW1lT2JqZWN0fSBjYW1lcmFQZXJzb25cclxuICAgKi9cclxuICBkcmF3TG93ZXJJbWFnZShjdHgsIGNhbWVyYVBlcnNvbikge1xyXG4gICAgY3R4LmRyYXdJbWFnZShcclxuICAgICAgdGhpcy5sb3dlckxheWVyLFxyXG4gICAgICB3aXRoR3JpZHMoMTAuNSkgLSBjYW1lcmFQZXJzb24ueCxcclxuICAgICAgd2l0aEdyaWRzKDYpIC0gY2FtZXJhUGVyc29uLnlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0ge0NhbnZhc1JlbmRlcmluZ0NvbnRleHQyRH0gY3R4XHJcbiAgICogQHBhcmFtIHtHYW1lT2JqZWN0fSBjYW1lcmFQZXJzb25cclxuICAgKi9cclxuICBkcmF3VXBwZXJJbWFnZShjdHgsIGNhbWVyYVBlcnNvbikge1xyXG4gICAgY3R4LmRyYXdJbWFnZShcclxuICAgICAgdGhpcy51cHBlckxheWVyLFxyXG4gICAgICB3aXRoR3JpZHMoMTAuNSkgLSBjYW1lcmFQZXJzb24ueCxcclxuICAgICAgd2l0aEdyaWRzKDYpIC0gY2FtZXJhUGVyc29uLnlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0ge051bWJlcn0gY3VyWFxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBjdXJZXHJcbiAgICogQHBhcmFtIHsndXAnIHwgJ2Rvd24nIHwgJ2xlZnQnIHwgJ3JpZ2h0JyB9IGRpcmVjdGlvblxyXG4gICAqL1xyXG4gIGlzU3BhY2VUYWtlbihjdXJYLCBjdXJZLCBkaXJlY3Rpb24pIHtcclxuICAgIGNvbnN0IHsgeCwgeSB9ID0gbmV4dFBvc2l0aW9uKGN1clgsIGN1clksIGRpcmVjdGlvbik7XHJcbiAgICByZXR1cm4gdGhpcy53YWxsc1tgJHt4fSwke3l9YF0gfHwgZmFsc2U7XHJcbiAgfVxyXG5cclxuICAvLyBNb3VudGluZyBPYmplY3RcclxuICBtb3VudE9iamVjdHMoKSB7XHJcbiAgICBPYmplY3QudmFsdWVzKHRoaXMuZ2FtZU9iamVjdHMpLm1hcCgob2JqKSA9PiB7XHJcbiAgICAgIG9iai5tb3VudCh0aGlzKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gTWFwIEluaXRpYWxpemVcclxuICAvKipcclxuICAgKiBAcGFyYW0ge051bWJlcn0geFxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB5XHJcbiAgICovXHJcbiAgYWRkTWFwKHgsIHkpIHt9XHJcblxyXG4gIC8vIE90aGVyIE9iamVjdCBXYWxsc1xyXG4gIGFkZFdhbGwoeCwgeSkge1xyXG4gICAgdGhpcy53YWxsc1tgJHt4fSwke3l9YF0gPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlV2FsbCh4LCB5KSB7XHJcbiAgICBkZWxldGUgdGhpcy53YWxsc1tgJHt4fSwke3l9YF07XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHsndXAnIHwgJ2Rvd24nIHwgJ2xlZnQnIHwgJ3JpZ2h0JyB9IGRpcmVjdGlvblxyXG4gICAqL1xyXG4gIG1vdmVXYWxsKHdhc1gsIHdhc1ksIGRpcmVjdGlvbikge1xyXG4gICAgdGhpcy5yZW1vdmVXYWxsKHdhc1gsIHdhc1kpO1xyXG4gICAgY29uc3QgeyB4LCB5IH0gPSBuZXh0UG9zaXRpb24od2FzWCwgd2FzWSwgZGlyZWN0aW9uKTtcclxuICAgIHRoaXMuYWRkV2FsbCh4LCB5KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE92ZXJXb3JsZE1hcDtcclxuIiwiaW1wb3J0IGNvbnN0YW50cyBmcm9tIFwiLi4vRGF0YS9jb25zdGFudHNcIjtcclxuaW1wb3J0IEdhbWVPYmplY3QgZnJvbSBcIi4vR2FtZU9iamVjdFwiO1xyXG5pbXBvcnQgT3ZlcldvcmxkTWFwIGZyb20gXCIuL092ZXJXb3JsZE1hcFwiO1xyXG5cclxuY2xhc3MgUGVyc29uIGV4dGVuZHMgR2FtZU9iamVjdCB7XHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtHYW1lT2JqZWN0fSBwcm9wc1xyXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gcHJvcHMuaXNQbGF5ZXJDb250cm9sbGVkXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLm1vdmluZ1Byb2dyZXNzUmVtYWluaWcgPSAwO1xyXG5cclxuICAgIHRoaXMuaXNQbGF5ZXJDb250cm9sbGVkID0gcHJvcHMuaXNQbGF5ZXJDb250cm9sbGVkIHx8IGZhbHNlO1xyXG5cclxuICAgIHRoaXMuZGlyZWN0aW9uVXBkYXRlID0ge1xyXG4gICAgICB1cDogW1wieVwiLCAtMV0sXHJcbiAgICAgIGRvd246IFtcInlcIiwgMV0sXHJcbiAgICAgIGxlZnQ6IFtcInhcIiwgLTFdLFxyXG4gICAgICByaWdodDogW1wieFwiLCAxXSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0ge09iamVjdH0gc3RhdGVcclxuICAgKiBAcGFyYW0geydkb3duJyB8ICd1cCcgfCAnbGVmdCcgfCAncmlnaHQnIH0gc3RhdGUuYXJyb3dcclxuICAgKi9cclxuICB1cGRhdGUoc3RhdGUpIHtcclxuICAgIGlmICh0aGlzLm1vdmluZ1Byb2dyZXNzUmVtYWluaWcgPiAwKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlUG9zaXRpb24oKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICh0aGlzLmlzUGxheWVyQ29udHJvbGxlZCAmJiBzdGF0ZS5hcnJvdykge1xyXG4gICAgICAgIHRoaXMuc3RhcnRCZWhhdmlvcihzdGF0ZSwge1xyXG4gICAgICAgICAgdHlwZTogXCJ3YWxrXCIsXHJcbiAgICAgICAgICBkaXJlY3Rpb246IHN0YXRlLmFycm93LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnVwZGF0ZVNwcmludChzdGF0ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0ge09iamVjdH0gc3RhdGVcclxuICAgKiBAcGFyYW0ge092ZXJXb3JsZE1hcH0gc3RhdGUubWFwXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IGJlaGF2aW9yXHJcbiAgICogQHBhcmFtIHsnd2FsaycgfCAnc3RvcCcgfSBiZWhhdmlvci50eXBlXHJcbiAgICogQHBhcmFtIHsndXAnIHwgJ2Rvd24nIHwgJ2xlZnQnIHwgJ3JpZ2h0JyB9IGJlaGF2aW9yLmRpcmVjdGlvblxyXG4gICAqL1xyXG4gIHN0YXJ0QmVoYXZpb3Ioc3RhdGUsIGJlaGF2aW9yKSB7XHJcbiAgICB0aGlzLmRpcmVjdGlvbiA9IGJlaGF2aW9yLmRpcmVjdGlvbjtcclxuXHJcbiAgICBpZiAoYmVoYXZpb3IudHlwZSA9PT0gXCJ3YWxrXCIpIHtcclxuICAgICAgY29uc3QgaXNTcGFjZVRha2VuID0gc3RhdGUubWFwLmlzU3BhY2VUYWtlbihcclxuICAgICAgICB0aGlzLngsXHJcbiAgICAgICAgdGhpcy55LFxyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uXHJcbiAgICAgICk7XHJcbiAgICAgIGlmIChpc1NwYWNlVGFrZW4pIHJldHVybjtcclxuICAgICAgc3RhdGUubWFwLm1vdmVXYWxsKHRoaXMueCwgdGhpcy55LCB0aGlzLmRpcmVjdGlvbik7XHJcbiAgICAgIHRoaXMubW92aW5nUHJvZ3Jlc3NSZW1haW5pZyA9IGNvbnN0YW50cy5tb3ZpbmdQcm9ncmVzcztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZVBvc2l0aW9uKCkge1xyXG4gICAgaWYgKHRoaXMubW92aW5nUHJvZ3Jlc3NSZW1haW5pZyA+IDApIHtcclxuICAgICAgY29uc3QgW3Byb3BlcnR5LCBjaGFuZ2VdID0gdGhpcy5kaXJlY3Rpb25VcGRhdGVbdGhpcy5kaXJlY3Rpb25dO1xyXG4gICAgICB0aGlzW3Byb3BlcnR5XSArPSBjaGFuZ2U7XHJcbiAgICAgIHRoaXMubW92aW5nUHJvZ3Jlc3NSZW1haW5pZyAtPSAxO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlU3ByaW50KCkge1xyXG4gICAgaWYgKHRoaXMubW92aW5nUHJvZ3Jlc3NSZW1haW5pZyA+IDApIHtcclxuICAgICAgdGhpcy5zcHJpdGUuc2V0QW5pbWF0aW9uKFwid2Fsa1wiICsgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHRoaXMuZGlyZWN0aW9uKSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNwcml0ZS5zZXRBbmltYXRpb24oXCJpZGxlXCIgKyBjYXBpdGFsaXplRmlyc3RMZXR0ZXIodGhpcy5kaXJlY3Rpb24pKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcmV0dXJuIHtTdHJpbmd9XHJcbiAqL1xyXG5mdW5jdGlvbiBjYXBpdGFsaXplRmlyc3RMZXR0ZXIoc3RyaW5nKSB7XHJcbiAgcmV0dXJuIHN0cmluZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGVyc29uO1xyXG4iLCJpbXBvcnQgY29uc3RhbnRzIGZyb20gXCIuLi9EYXRhL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBkcmF3SW1hZ2UsIHdpdGhHcmlkcyB9IGZyb20gXCIuLi91dGlscy9oZWxwZXJcIjtcclxuaW1wb3J0IEdhbWVPYmplY3QgZnJvbSBcIi4vR2FtZU9iamVjdFwiO1xyXG5cclxuLyoqXHJcbiAqIEBuYW1lIFNwcml0ZVxyXG4gKi9cclxuY2xhc3MgU3ByaXRlIHtcclxuICAvKipcclxuICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZy5hbmltYXRpb25zXHJcbiAgICogQHBhcmFtIHsnaWRsZURvd24nIHwgJ2lkbGVSaWdodCcgfCAnaWRsZVVwJyB8ICdpZGxlTGVmdCcgfCAnd2Fsa0Rvd24nIHwnd2Fsa1JpZ2h0JyB8ICd3YWxrVXAnIHwgJ3dhbGtMZWZ0JyB9IGNvbmZpZy5jdXJyZW50QW5pbWF0aW9uXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IGNvbmZpZy5zcmNcclxuICAgKiBAcGFyYW0ge051bWJlcn0gY29uZmlnLnNxdWFyZVNpemVcclxuICAgKiBAcGFyYW0ge0dhbWVPYmplY3R9IGNvbmZpZy5nYW1lT2JqZWN0XHJcbiAgICogQHBhcmFtIHtOdW1iZXIgfCBudWxsfSBjb25maWcuYW5pbWF0aW9uRnJhbWVMaW1pdFxyXG4gICAqIEBwYXJhbSB7eyAgeDogTnVtYmVyLCB5OiBOdW1iZXJ9IHwgbnVsbH0gY29uZmlnLnJlbW92ZVNxdWFyZVNpemVcclxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IGNvbmZpZy51c2VTaGFkb3dcclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcclxuICAgIC8vIFNxdWFyZVNpemUgRGVmYXVsdCAzMlxyXG4gICAgdGhpcy5zcXVhcmVTaXplID0gY29uZmlnLnNxdWFyZVNpemUgfHwgY29uc3RhbnRzLnNxdWFyZVNpemU7XHJcbiAgICB0aGlzLnJlbW92ZVNxdWFyZVNpemUgPSBjb25maWcucmVtb3ZlU3F1YXJlU2l6ZVxyXG4gICAgICA/IGNvbmZpZy5yZW1vdmVTcXVhcmVTaXplXHJcbiAgICAgIDogeyB4OiA4LCB5OiAxOCB9O1xyXG5cclxuICAgIC8vIFNldHVwIHRoZSBpbWFnZVxyXG4gICAgZHJhd0ltYWdlKFxyXG4gICAgICBjb25maWcuc3JjIHx8IFwiL3B1YmxpYy9pbWFnZXMvY2hhcmFjdGVycy9wZW9wbGUvaGVyby5wbmdcIixcclxuICAgICAgKGltYWdlKSA9PiB7XHJcbiAgICAgICAgdGhpcy5pbWFnZSA9IGltYWdlO1xyXG4gICAgICAgIHRoaXMuaW1hZ2VJc0xvYWRlZCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICk7XHJcblxyXG4gICAgLy8gU2hhZG93IEltYWdlXHJcbiAgICB0aGlzLnVzZVNoYWRvdyA9IGNvbmZpZy51c2VTaGFkb3cgfHwgZmFsc2U7XHJcbiAgICBpZiAodGhpcy51c2VTaGFkb3cpIHtcclxuICAgICAgZHJhd0ltYWdlKFwiL3B1YmxpYy9pbWFnZXMvY2hhcmFjdGVycy9zaGFkb3cucG5nXCIsIChpbWFnZSkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2hhZG93SW1hZ2UgPSBpbWFnZTtcclxuICAgICAgICB0aGlzLnNoYWRvd0ltYWdlTG9hZGVkID0gdHJ1ZTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ29uZml1cmUgQW5pbWF0aW9uIEFuZCBJbml0aWFsIFN0YXRlXHJcbiAgICB0aGlzLmFuaW1hdGlvbnMgPSBjb25maWcuYW5pbWF0aW9ucyB8fCB7XHJcbiAgICAgIGlkbGVEb3duOiBbWzAsIDBdXSxcclxuICAgICAgaWRsZVJpZ2h0OiBbWzAsIDFdXSxcclxuICAgICAgaWRsZVVwOiBbWzAsIDJdXSxcclxuICAgICAgaWRsZUxlZnQ6IFtbMCwgM11dLFxyXG4gICAgICB3YWxrRG93bjogW1xyXG4gICAgICAgIFsxLCAwXSwgLy8gaW1hZ2Ugcm93IDEgY29sIDFcclxuICAgICAgICBbMCwgMF0sIC8vIGltYWdlIHJvdyAxIGNvbCAyXHJcbiAgICAgICAgWzMsIDBdLCAvLyBpbWFnZSByb3cgMSBjb2wgNFxyXG4gICAgICAgIFswLCAwXSwgLy8gaW1hZ2Ugcm93IDEgY29sIDJcclxuICAgICAgXSxcclxuICAgICAgd2Fsa1JpZ2h0OiBbXHJcbiAgICAgICAgWzEsIDFdLCAvLyBpbWFnZSByb3cgMSBjb2wgMVxyXG4gICAgICAgIFswLCAxXSwgLy8gaW1hZ2Ugcm93IDEgY29sIDJcclxuICAgICAgICBbMywgMV0sIC8vIGltYWdlIHJvdyAxIGNvbCA0XHJcbiAgICAgICAgWzAsIDFdLCAvLyBpbWFnZSByb3cgMSBjb2wgMlxyXG4gICAgICBdLFxyXG4gICAgICB3YWxrVXA6IFtcclxuICAgICAgICBbMSwgMl0sIC8vIGltYWdlIHJvdyAxIGNvbCAxXHJcbiAgICAgICAgWzAsIDJdLCAvLyBpbWFnZSByb3cgMSBjb2wgMlxyXG4gICAgICAgIFszLCAyXSwgLy8gaW1hZ2Ugcm93IDEgY29sIDRcclxuICAgICAgICBbMCwgMl0sIC8vIGltYWdlIHJvdyAxIGNvbCAyXHJcbiAgICAgIF0sXHJcbiAgICAgIHdhbGtMZWZ0OiBbXHJcbiAgICAgICAgWzEsIDNdLCAvLyBpbWFnZSByb3cgMSBjb2wgMVxyXG4gICAgICAgIFswLCAzXSwgLy8gaW1hZ2Ugcm93IDEgY29sIDJcclxuICAgICAgICBbMywgM10sIC8vIGltYWdlIHJvdyAxIGNvbCA0XHJcbiAgICAgICAgWzAsIDNdLCAvLyBpbWFnZSByb3cgMSBjb2wgMlxyXG4gICAgICBdLFxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBTZXQgQW5pbWF0aW9uIEZyYW1lXHJcbiAgICB0aGlzLmN1cnJlbnRBbmltYXRpb24gPSBjb25maWcuY3VycmVudEFuaW1hdGlvbiB8fCBcImlkbGVEb3duXCI7XHJcbiAgICB0aGlzLmN1cnJlbnRBbmltYXRpb25GcmFtZSA9IDA7XHJcbiAgICB0aGlzLmFuaW1hdGlvbkZyYW1lTGltaXQgPVxyXG4gICAgICBjb25maWcuYW5pbWF0aW9uRnJhbWVMaW1pdCB8fCBjb25zdGFudHMuYW5pbWF0aW9uRnJhbWVMaW1pdDtcclxuICAgIHRoaXMuYW5pbWF0aW9uRnJhbWVQcm9ncmVzcyA9IHRoaXMuYW5pbWF0aW9uRnJhbWVMaW1pdDtcclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIiB0aGlzLmFuaW1hdGlvbkZyYW1lUHJvZ3Jlc3NcIiwgdGhpcy5hbmltYXRpb25GcmFtZVByb2dyZXNzKTtcclxuICAgIC8vXHJcbiAgICB0aGlzLmdhbWVPYmplY3QgPSBjb25maWcuZ2FtZU9iamVjdDtcclxuICB9XHJcblxyXG4gIC8vIEdldCBDdXJyZW50IEFuaW1hdGlvbiBGcmFtZVxyXG4gIC8qKlxyXG4gICAqIEByZXR1cm4ge1tOdW1iZXIsIE51bWJlcl0gfCB1bmRlZmluZWQgfVxyXG4gICAqL1xyXG4gIGdldCBmcmFtZSgpIHtcclxuICAgIHJldHVybiB0aGlzLmFuaW1hdGlvbnNbdGhpcy5jdXJyZW50QW5pbWF0aW9uXVt0aGlzLmN1cnJlbnRBbmltYXRpb25GcmFtZV07XHJcbiAgfVxyXG5cclxuICBzZXRBbmltYXRpb24oa2V5KSB7XHJcbiAgICBpZiAodGhpcy5jdXJyZW50QW5pbWF0aW9uICE9PSBrZXkpIHtcclxuICAgICAgdGhpcy5jdXJyZW50QW5pbWF0aW9uID0ga2V5O1xyXG4gICAgICB0aGlzLmN1cnJlbnRBbmltYXRpb25GcmFtZSA9IDA7XHJcbiAgICAgIHRoaXMuYW5pbWF0aW9uRnJhbWVQcm9ncmVzcyA9IHRoaXMuYW5pbWF0aW9uRnJhbWVMaW1pdDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZUFuaW1hdGlvblByb2dyZXNzKCkge1xyXG4gICAgLy8gRG93bnRpY2sgRnJhbWUgUHJvZ3Jlc3NcclxuICAgIGlmICh0aGlzLmFuaW1hdGlvbkZyYW1lUHJvZ3Jlc3MgPiAwKSB7XHJcbiAgICAgIHRoaXMuYW5pbWF0aW9uRnJhbWVQcm9ncmVzcyAtPSAxO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmVzZXQgdGhlIGNvdW50ZXJcclxuICAgIHRoaXMuYW5pbWF0aW9uRnJhbWVQcm9ncmVzcyA9IHRoaXMuYW5pbWF0aW9uRnJhbWVMaW1pdDtcclxuICAgIHRoaXMuY3VycmVudEFuaW1hdGlvbkZyYW1lICs9IDE7XHJcblxyXG4gICAgaWYgKHRoaXMuZnJhbWUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLmN1cnJlbnRBbmltYXRpb25GcmFtZSA9IDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEcmF3IENvbnRleHRcclxuICAgKiBAcGFyYW0ge0NhbnZhc1JlbmRlcmluZ0NvbnRleHQyRH0gY3R4XHJcbiAgICogQHBhcmFtIHtHYW1lT2JqZWN0fSBjYW1lcmFQZXJzb25cclxuICAgKi9cclxuICBkcmF3KGN0eCwgY2FtZXJhUGVyc29uKSB7XHJcbiAgICBjb25zdCB4ID1cclxuICAgICAgdGhpcy5nYW1lT2JqZWN0LnggLVxyXG4gICAgICB0aGlzLnJlbW92ZVNxdWFyZVNpemUueCArXHJcbiAgICAgIHdpdGhHcmlkcygxMC41KSAtXHJcbiAgICAgIGNhbWVyYVBlcnNvbi54OyAvLyBSZW1vdmUgVW5uZWNlc3Nhcnkgd2lkdGhcclxuICAgIGNvbnN0IHkgPVxyXG4gICAgICB0aGlzLmdhbWVPYmplY3QueSAtXHJcbiAgICAgIHRoaXMucmVtb3ZlU3F1YXJlU2l6ZS55ICtcclxuICAgICAgd2l0aEdyaWRzKDYpIC1cclxuICAgICAgY2FtZXJhUGVyc29uLnk7IC8vIFJlbW92ZSBVbm5lY2Vzc2FyeSBoZWlnaHRcclxuICAgIGNvbnN0IFtmcmFtZVgsIGZyYW1lWV0gPSB0aGlzLmZyYW1lO1xyXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5mcmFtZSk7XHJcblxyXG4gICAgLy8gY29uc29sZS5sb2coXCJGcmFtZVhcIiwgZnJhbWVYKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiRnJhbWVZXCIsIGZyYW1lWSk7XHJcblxyXG4gICAgLy8gV2hlbiBJbWFnZSBMb2FkaW5nXHJcbiAgICB0aGlzLmltYWdlSXNMb2FkZWQgJiZcclxuICAgICAgY3R4LmRyYXdJbWFnZShcclxuICAgICAgICB0aGlzLmltYWdlLCAvLyBJbnNlcnQgSW1hZ2VcclxuICAgICAgICBmcmFtZVggKiBjb25zdGFudHMuc3F1YXJlU2l6ZSwgLy8gWCBmcm9tIEltYWdlXHJcbiAgICAgICAgZnJhbWVZICogY29uc3RhbnRzLnNxdWFyZVNpemUsIC8vIFkgZnJvbSBJbWFnZVxyXG4gICAgICAgIHRoaXMuc3F1YXJlU2l6ZSwgLy8gV2lkdGggRnJvbSBJbWFnZSxcclxuICAgICAgICB0aGlzLnNxdWFyZVNpemUsIC8vIEhlaWdodCBGcm9tIEltYWdlXHJcbiAgICAgICAgeCwgLy8gWCBmb3IgQ2FudmFzXHJcbiAgICAgICAgeSwgLy8gWSBmb3IgQ2FudmFzXHJcbiAgICAgICAgdGhpcy5zcXVhcmVTaXplLCAvLyBXaWR0aCBGb3IgQ2FudmFzXHJcbiAgICAgICAgdGhpcy5zcXVhcmVTaXplIC8vIEhlaWdodCBGb3IgQ2FudmFzXHJcbiAgICAgICk7XHJcblxyXG4gICAgLy8gQ2FsbCBBbmltYXRpb25cclxuICAgIHRoaXMudXBkYXRlQW5pbWF0aW9uUHJvZ3Jlc3MoKTtcclxuXHJcbiAgICB0aGlzLnNoYWRvd0ltYWdlTG9hZGVkICYmXHJcbiAgICAgIGN0eC5kcmF3SW1hZ2UoXHJcbiAgICAgICAgdGhpcy5zaGFkb3dJbWFnZSwgLy8gSW5zZXJ0IEltYWdlXHJcbiAgICAgICAgeCwgLy8gWCBmb3IgQ2FudmFzXHJcbiAgICAgICAgeSAvLyBZIGZvciBDYW52YXNcclxuICAgICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNwcml0ZTtcclxuIiwiaW1wb3J0IGNvbnN0YW50cyBmcm9tIFwiLi4vRGF0YS9jb25zdGFudHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBkcmF3SW1hZ2UgPSAoc3JjLCBjYikgPT4ge1xyXG4gIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xyXG4gIGltZy5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICBpZiAoY2IpIHtcclxuICAgICAgY2IoaW1nKTtcclxuICAgIH1cclxuICB9O1xyXG4gIGltZy5zcmMgPSBzcmM7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgd2l0aEdyaWRzID0gKG4pID0+IHtcclxuICByZXR1cm4gbiAqIGNvbnN0YW50cy5oYWxmU3F1YXJlU2l6ZTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBhc0dyaWRDb29yZCA9ICh4LCB5KSA9PiB7XHJcbiAgcmV0dXJuIGAke3ggKiBjb25zdGFudHMuaGFsZlNxdWFyZVNpemV9LCR7eSAqIGNvbnN0YW50cy5oYWxmU3F1YXJlU2l6ZX1gO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IG5leHRQb3NpdGlvbiA9IChjdXJYLCBjdXJZLCBkaXJlY3Rpb24pID0+IHtcclxuICBsZXQgeCwgeSwgc2l6ZTtcclxuICB4ID0gY3VyWDtcclxuICB5ID0gY3VyWTtcclxuICBzaXplID0gMTY7XHJcbiAgaWYgKGRpcmVjdGlvbiA9PT0gXCJsZWZ0XCIpIHtcclxuICAgIHggLT0gc2l6ZTtcclxuICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gXCJyaWdodFwiKSB7XHJcbiAgICB4ICs9IHNpemU7XHJcbiAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09IFwidXBcIikge1xyXG4gICAgeSAtPSBzaXplO1xyXG4gIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSBcImRvd25cIikge1xyXG4gICAgeSArPSBzaXplO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHsgeCwgeSB9O1xyXG59O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBPdmVyV29ybGQgZnJvbSBcIi4vR2FtZS9PdmVyV29ybGRcIjtcclxuXHJcbmNvbnN0IHdvbHJkID0gbmV3IE92ZXJXb3JsZCh7XHJcbiAgZWxlbWVudDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lLWNvbnRhaW5lclwiKSxcclxufSk7XHJcblxyXG53b2xyZC5pbml0KCk7XHJcbiJdLCJuYW1lcyI6WyJHYW1lT2JqZWN0IiwiUGVyc29uIiwiYXNHcmlkQ29vcmQiLCJ3aXRoR3JpZHMiLCJPdmVyV29ybGRNYXBzTGlzdCIsIkRlbW9Sb29tIiwibG93ZXJTcmMiLCJ1cHBlclNyYyIsImdhbWVPYmplY3RzIiwiaGVybyIsImlzUGxheWVyQ29udHJvbGxlZCIsIngiLCJ5Iiwic3JjIiwibnBjMSIsIndhbGxzIiwiS2l0Y2hlbiIsInNxdWFyZVNpemUiLCJoYWxmU3F1YXJlU2l6ZSIsIm1vdmluZ1Byb2dyZXNzIiwiYW5pbWF0aW9uRnJhbWVMaW1pdCIsIkRpcmVjdGlvbklucHV0IiwiY29uc3RydWN0b3IiLCJoZWxkRGlyZWN0aW9ucyIsIm1hcCIsIkFycm93VXAiLCJLZXlXIiwiQXJyb3dEb3duIiwiS2V5UyIsIkFycm93TGVmdCIsIktleUEiLCJBcnJvd1JpZ2h0IiwiS2V5RCIsImluaXQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiZGlyIiwiY29kZSIsImluZGV4T2YiLCJ1bnNoaWZ0IiwiaW5kZXgiLCJzcGxpY2UiLCJkaXJlY3Rpb24iLCJPdmVyV29ybGRNYXAiLCJTcHJpdGUiLCJjb25maWciLCJpZCIsImlzTW91bnRlZCIsImlzVXNlU2hhZG93IiwidXNlU2hhZG93IiwidW5kZWZpbmVkIiwic3ByaXRlIiwiZ2FtZU9iamVjdCIsInJlbW92ZVNxdWFyZVNpemUiLCJtb3VudCIsImNvbnNvbGUiLCJsb2ciLCJhZGRXYWxsIiwidXBkYXRlIiwiT3ZlcldvcmxkIiwiZWxlbWVudCIsImNhbnZhcyIsInF1ZXJ5U2VsZWN0b3IiLCJjdHgiLCJnZXRDb250ZXh0Iiwic3RhcnRHYW1lTG9vcCIsInN0ZXAiLCJjbGVhclJlY3QiLCJ3aWR0aCIsImhlaWdodCIsImNhbWVyYVBlcnNvbiIsIk9iamVjdCIsInZhbHVlcyIsImZvckVhY2giLCJvYmoiLCJhcnJvdyIsImRpcmVjdGlvbkNvbnRyb2xsZXIiLCJkcmF3TG93ZXJJbWFnZSIsImRyYXciLCJkcmF3VXBwZXJJbWFnZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1vdW50T2JqZWN0cyIsIm5leHRQb3NpdGlvbiIsImxvd2VyTGF5ZXIiLCJJbWFnZSIsInVwcGVyTGF5ZXIiLCJkcmF3SW1hZ2UiLCJpc1NwYWNlVGFrZW4iLCJjdXJYIiwiY3VyWSIsImFkZE1hcCIsInJlbW92ZVdhbGwiLCJtb3ZlV2FsbCIsIndhc1giLCJ3YXNZIiwiY29uc3RhbnRzIiwicHJvcHMiLCJtb3ZpbmdQcm9ncmVzc1JlbWFpbmlnIiwiZGlyZWN0aW9uVXBkYXRlIiwidXAiLCJkb3duIiwibGVmdCIsInJpZ2h0Iiwic3RhdGUiLCJ1cGRhdGVQb3NpdGlvbiIsInN0YXJ0QmVoYXZpb3IiLCJ0eXBlIiwidXBkYXRlU3ByaW50IiwiYmVoYXZpb3IiLCJwcm9wZXJ0eSIsImNoYW5nZSIsInNldEFuaW1hdGlvbiIsImNhcGl0YWxpemVGaXJzdExldHRlciIsInN0cmluZyIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJpbWFnZSIsImltYWdlSXNMb2FkZWQiLCJzaGFkb3dJbWFnZSIsInNoYWRvd0ltYWdlTG9hZGVkIiwiYW5pbWF0aW9ucyIsImlkbGVEb3duIiwiaWRsZVJpZ2h0IiwiaWRsZVVwIiwiaWRsZUxlZnQiLCJ3YWxrRG93biIsIndhbGtSaWdodCIsIndhbGtVcCIsIndhbGtMZWZ0IiwiY3VycmVudEFuaW1hdGlvbiIsImN1cnJlbnRBbmltYXRpb25GcmFtZSIsImFuaW1hdGlvbkZyYW1lUHJvZ3Jlc3MiLCJmcmFtZSIsImtleSIsInVwZGF0ZUFuaW1hdGlvblByb2dyZXNzIiwiZnJhbWVYIiwiZnJhbWVZIiwiY2IiLCJpbWciLCJvbmxvYWQiLCJuIiwic2l6ZSIsIndvbHJkIl0sInNvdXJjZVJvb3QiOiIifQ==