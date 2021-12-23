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
        this.heldDirections.unshift(dir);
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
/* harmony import */ var _Sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sprite */ "./src/Game/Sprite.js");

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
    var isUseShadow = config.useShadow !== null && config.useShadow !== undefined ? config.useShadow : true;
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.direction = config.direction || "down";
    this.sprite = new _Sprite__WEBPACK_IMPORTED_MODULE_0__["default"]({
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
          arrow: this.directionController.direction
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
   * @param {{hero: GameObject, npc1: GameObject, npc2: GameObject}} config.gameObjects
   */
  constructor(config, cameraPerson) {
    this.gameObjects = config.gameObjects;
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
/* harmony import */ var _GameObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameObject */ "./src/Game/GameObject.js");


class Person extends _GameObject__WEBPACK_IMPORTED_MODULE_0__["default"] {
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
    this.updatePosition();
    this.updateSprint(state);

    if (this.isPlayerControlled && this.movingProgressRemainig === 0 && state.arrow) {
      this.direction = state.arrow;
      this.movingProgressRemainig = 16;
    }
  }

  updatePosition() {
    if (this.movingProgressRemainig > 0) {
      var [property, change] = this.directionUpdate[this.direction];
      this[property] += change;
      this.movingProgressRemainig -= 1;
    }
  }

  updateSprint(state) {
    // console.log(state);capitalizeFirstLetter
    if (this.isPlayerControlled && this.movingProgressRemainig === 0 && !state.arrow) {
      this.sprite.setAnimation("idle" + capitalizeFirstLetter(this.direction));
    }

    if (this.movingProgressRemainig > 0) {
      this.sprite.setAnimation("walk" + capitalizeFirstLetter(this.direction));
    }
  }

}

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
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/helper */ "./src/utils/helper.js");
/* harmony import */ var _GameObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GameObject */ "./src/Game/GameObject.js");


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
    this.squareSize = config.squareSize || 32;
    this.removeSquareSize = config.removeSquareSize ? config.removeSquareSize : {
      x: 8,
      y: 18
    }; // Setup the image

    (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.drawImage)(config.src || "/public/images/characters/people/hero.png", image => {
      this.image = image;
      this.imageIsLoaded = true;
    }); // Shadow Image

    this.useShadow = config.useShadow || false;

    if (this.useShadow) {
      (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.drawImage)("/public/images/characters/shadow.png", image => {
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
    this.animationFrameLimit = config.animationFrameLimit || 8;
    this.animationFrameProgress = this.animationFrameLimit;
    console.log(" this.animationFrameProgress", this.animationFrameProgress); //

    this.gameObject = config.gameObject;
  } // Get Current Animation Frame


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
    var x = this.gameObject.x - this.removeSquareSize.x + (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.withGrids)(10.5) - cameraPerson.x; // Remove Unnecessary width

    var y = this.gameObject.y - this.removeSquareSize.y + (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.withGrids)(6) - cameraPerson.y; // Remove Unnecessary height

    var [frameX, frameY] = this.frame; // console.log(this.frame);
    // console.log("FrameX", frameX);
    // console.log("FrameY", frameY);
    // When Image Loading

    this.imageIsLoaded && ctx.drawImage(this.image, // Insert Image
    frameX * 32, // X from Image
    frameY * 32, // Y from Image
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
/* harmony export */   "asGridCoord": () => (/* binding */ asGridCoord)
/* harmony export */ });
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
  return n * 16;
};
var asGridCoord = (x, y) => {
  return "".concat(x * 16, ", ").concat(y * 16);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRU8sSUFBTUksaUJBQWlCLEdBQUc7QUFDL0JDLEVBQUFBLFFBQVEsRUFBRTtBQUNSQyxJQUFBQSxRQUFRLEVBQUUsbUNBREY7QUFFUkMsSUFBQUEsUUFBUSxFQUFFLG1DQUZGO0FBR1JDLElBQUFBLFdBQVcsRUFBRTtBQUNYQyxNQUFBQSxJQUFJLEVBQUUsSUFBSVIsb0RBQUosQ0FBVztBQUNmUyxRQUFBQSxrQkFBa0IsRUFBRSxJQURMO0FBRWZDLFFBQUFBLENBQUMsRUFBRVIsd0RBQVMsQ0FBQyxDQUFELENBRkc7QUFHZlMsUUFBQUEsQ0FBQyxFQUFFVCx3REFBUyxDQUFDLENBQUQsQ0FIRztBQUlmVSxRQUFBQSxHQUFHLEVBQUU7QUFKVSxPQUFYLENBREs7QUFPWEMsTUFBQUEsSUFBSSxFQUFFLElBQUlkLHdEQUFKLENBQWU7QUFDbkJXLFFBQUFBLENBQUMsRUFBRVIsd0RBQVMsQ0FBQyxDQUFELENBRE87QUFFbkJTLFFBQUFBLENBQUMsRUFBRVQsd0RBQVMsQ0FBQyxDQUFELENBRk87QUFHbkJVLFFBQUFBLEdBQUcsRUFBRTtBQUhjLE9BQWY7QUFQSyxLQUhMO0FBZ0JSRSxJQUFBQSxLQUFLLEVBQUU7QUFDTCxPQUFDYiwwREFBVyxDQUFDLENBQUQsRUFBSSxDQUFKLENBQVosR0FBcUIsSUFEaEI7QUFFTCxPQUFDQSwwREFBVyxDQUFDLENBQUQsRUFBSSxDQUFKLENBQVosR0FBcUIsSUFGaEI7QUFHTCxPQUFDQSwwREFBVyxDQUFDLENBQUQsRUFBSSxDQUFKLENBQVosR0FBcUIsSUFIaEI7QUFJTCxPQUFDQSwwREFBVyxDQUFDLENBQUQsRUFBSSxDQUFKLENBQVosR0FBcUI7QUFKaEI7QUFoQkMsR0FEcUI7QUF5Qi9CYyxFQUFBQSxPQUFPLEVBQUU7QUFDUFYsSUFBQUEsUUFBUSxFQUFFLHNDQURIO0FBRVBDLElBQUFBLFFBQVEsRUFBRSxzQ0FGSDtBQUdQQyxJQUFBQSxXQUFXLEVBQUUsQ0FDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZFc7QUFITjtBQXpCc0IsQ0FBMUI7Ozs7Ozs7Ozs7Ozs7O0FDSlAsTUFBTVMsY0FBTixDQUFxQjtBQUNuQkMsRUFBQUEsV0FBVyxHQUFHO0FBQ1osU0FBS0MsY0FBTCxHQUFzQixFQUF0QjtBQUNBLFNBQUtDLEdBQUwsR0FBVztBQUNUQyxNQUFBQSxPQUFPLEVBQUUsSUFEQTtBQUVUQyxNQUFBQSxJQUFJLEVBQUUsSUFGRztBQUdUQyxNQUFBQSxTQUFTLEVBQUUsTUFIRjtBQUlUQyxNQUFBQSxJQUFJLEVBQUUsTUFKRztBQUtUQyxNQUFBQSxTQUFTLEVBQUUsTUFMRjtBQU1UQyxNQUFBQSxJQUFJLEVBQUUsTUFORztBQU9UQyxNQUFBQSxVQUFVLEVBQUUsT0FQSDtBQVFUQyxNQUFBQSxJQUFJLEVBQUU7QUFSRyxLQUFYO0FBVUQ7O0FBRURDLEVBQUFBLElBQUksR0FBRztBQUNMQyxJQUFBQSxRQUFRLENBQUNDLGdCQUFULENBQTBCLFNBQTFCLEVBQXNDQyxDQUFELElBQU87QUFDMUMsVUFBTUMsR0FBRyxHQUFHLEtBQUtiLEdBQUwsQ0FBU1ksQ0FBQyxDQUFDRSxJQUFYLENBQVo7O0FBRUEsVUFBSUQsR0FBRyxJQUFJLEtBQUtkLGNBQUwsQ0FBb0JnQixPQUFwQixDQUE0QkYsR0FBNUIsTUFBcUMsQ0FBQyxDQUFqRCxFQUFvRDtBQUNsRCxhQUFLZCxjQUFMLENBQW9CaUIsT0FBcEIsQ0FBNEJILEdBQTVCO0FBQ0Q7QUFDRixLQU5EO0FBUUFILElBQUFBLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBb0NDLENBQUQsSUFBTztBQUN4QyxVQUFNQyxHQUFHLEdBQUcsS0FBS2IsR0FBTCxDQUFTWSxDQUFDLENBQUNFLElBQVgsQ0FBWjtBQUNBLFVBQU1HLEtBQUssR0FBRyxLQUFLbEIsY0FBTCxDQUFvQmdCLE9BQXBCLENBQTRCRixHQUE1QixDQUFkOztBQUNBLFVBQUlJLEtBQUssR0FBRyxDQUFDLENBQWIsRUFBZ0I7QUFDZCxhQUFLbEIsY0FBTCxDQUFvQm1CLE1BQXBCLENBQTJCRCxLQUEzQixFQUFrQyxDQUFsQztBQUNEO0FBQ0YsS0FORDtBQU9EOztBQUVZLE1BQVRFLFNBQVMsR0FBRztBQUNkLFdBQU8sS0FBS3BCLGNBQUwsQ0FBb0IsQ0FBcEIsQ0FBUDtBQUNEOztBQW5Da0I7O0FBc0NyQixpRUFBZUYsY0FBZjs7Ozs7Ozs7Ozs7Ozs7O0FDdENBO0FBRUE7QUFDQTtBQUNBOztBQUNBLE1BQU1qQixVQUFOLENBQWlCO0FBQ2Y7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRWtCLEVBQUFBLFdBQVcsQ0FBQ3VCLE1BQUQsRUFBUztBQUNsQixRQUFNQyxXQUFXLEdBQ2ZELE1BQU0sQ0FBQ0UsU0FBUCxLQUFxQixJQUFyQixJQUE2QkYsTUFBTSxDQUFDRSxTQUFQLEtBQXFCQyxTQUFsRCxHQUNJSCxNQUFNLENBQUNFLFNBRFgsR0FFSSxJQUhOO0FBSUEsU0FBS2hDLENBQUwsR0FBUzhCLE1BQU0sQ0FBQzlCLENBQVAsSUFBWSxDQUFyQjtBQUNBLFNBQUtDLENBQUwsR0FBUzZCLE1BQU0sQ0FBQzdCLENBQVAsSUFBWSxDQUFyQjtBQUNBLFNBQUsyQixTQUFMLEdBQWlCRSxNQUFNLENBQUNGLFNBQVAsSUFBb0IsTUFBckM7QUFDQSxTQUFLTSxNQUFMLEdBQWMsSUFBSUwsK0NBQUosQ0FBVztBQUN2Qk0sTUFBQUEsVUFBVSxFQUFFLElBRFc7QUFFdkJqQyxNQUFBQSxHQUFHLEVBQUU0QixNQUFNLENBQUM1QixHQUZXO0FBR3ZCOEIsTUFBQUEsU0FBUyxFQUFFRCxXQUhZO0FBSXZCSyxNQUFBQSxVQUFVLEVBQUVOLE1BQU0sQ0FBQ00sVUFBUCxHQUFvQk4sTUFBTSxDQUFDTSxVQUEzQixHQUF3QyxFQUo3QjtBQUt2QkMsTUFBQUEsZ0JBQWdCLEVBQUVQLE1BQU0sQ0FBQ08sZ0JBQVAsR0FDZFAsTUFBTSxDQUFDTyxnQkFETyxHQUVkO0FBQUVyQyxRQUFBQSxDQUFDLEVBQUUsQ0FBTDtBQUFRQyxRQUFBQSxDQUFDLEVBQUU7QUFBWDtBQVBtQixLQUFYLENBQWQ7QUFTRDs7QUFFRHFDLEVBQUFBLE1BQU0sR0FBRyxDQUFFOztBQTlCSTs7QUFpQ2pCLGlFQUFlakQsVUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1tRCxTQUFOLENBQWdCO0FBQ2Q7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNFakMsRUFBQUEsV0FBVyxDQUFDdUIsTUFBRCxFQUFTO0FBQ2xCLFFBQU07QUFBRVcsTUFBQUE7QUFBRixRQUFjWCxNQUFwQjtBQUNBLFNBQUtXLE9BQUwsR0FBZUEsT0FBZjtBQUVBO0FBQ0o7QUFDQTs7QUFDSSxTQUFLQyxNQUFMLEdBQWMsS0FBS0QsT0FBTCxDQUFhRSxhQUFiLENBQTJCLGNBQTNCLENBQWQsQ0FQa0IsQ0FPd0M7O0FBRTFELFNBQUtDLEdBQUwsR0FBVyxLQUFLRixNQUFMLENBQVlHLFVBQVosQ0FBdUIsSUFBdkIsQ0FBWDtBQUVBO0FBQ0o7QUFDQTs7QUFDSSxTQUFLcEMsR0FBTCxHQUFXLElBQVg7QUFDRDs7QUFFRHFDLEVBQUFBLGFBQWEsR0FBRztBQUNkLFFBQU1DLElBQUksR0FBRyxNQUFNO0FBQ2pCO0FBQ0EsV0FBS0gsR0FBTCxDQUFTSSxTQUFULENBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLEtBQUtOLE1BQUwsQ0FBWU8sS0FBckMsRUFBNEMsS0FBS1AsTUFBTCxDQUFZUSxNQUF4RCxFQUZpQixDQUlqQjs7QUFDQSxVQUFNQyxZQUFZLEdBQUcsS0FBSzFDLEdBQUwsQ0FBU1osV0FBVCxDQUFxQkMsSUFBMUMsQ0FMaUIsQ0FPakI7O0FBQ0FzRCxNQUFBQSxNQUFNLENBQUNDLE1BQVAsQ0FBYyxLQUFLNUMsR0FBTCxDQUFTWixXQUF2QixFQUFvQ3lELE9BQXBDO0FBQ0U7QUFDUjtBQUNBO0FBQ1NDLE1BQUFBLEdBQUQsSUFBUztBQUNQQSxRQUFBQSxHQUFHLENBQUNqQixNQUFKLENBQVc7QUFDVGtCLFVBQUFBLEtBQUssRUFBRSxLQUFLQyxtQkFBTCxDQUF5QjdCO0FBRHZCLFNBQVg7QUFHRCxPQVJILEVBUmlCLENBbUJqQjs7QUFDQSxXQUFLbkIsR0FBTCxDQUFTaUQsY0FBVCxDQUF3QixLQUFLZCxHQUE3QixFQUFrQ08sWUFBbEMsRUFwQmlCLENBc0JqQjs7QUFDQUMsTUFBQUEsTUFBTSxDQUFDQyxNQUFQLENBQWMsS0FBSzVDLEdBQUwsQ0FBU1osV0FBdkIsRUFBb0N5RCxPQUFwQztBQUNFO0FBQ1I7QUFDQTtBQUNTQyxNQUFBQSxHQUFELElBQVM7QUFDUEEsUUFBQUEsR0FBRyxDQUFDckIsTUFBSixDQUFXeUIsSUFBWCxDQUFnQixLQUFLZixHQUFyQixFQUEwQk8sWUFBMUI7QUFDRCxPQU5IO0FBU0EsV0FBSzFDLEdBQUwsQ0FBU21ELGNBQVQsQ0FBd0IsS0FBS2hCLEdBQTdCLEVBQWtDTyxZQUFsQztBQUVBVSxNQUFBQSxxQkFBcUIsQ0FBQyxNQUFNO0FBQzFCZCxRQUFBQSxJQUFJO0FBQ0wsT0FGb0IsQ0FBckI7QUFHRCxLQXJDRDs7QUF1Q0FBLElBQUFBLElBQUk7QUFDTDs7QUFFRDdCLEVBQUFBLElBQUksR0FBRztBQUNMLFNBQUtULEdBQUwsR0FBVyxJQUFJOEIscURBQUosQ0FBaUI5Qyx3RUFBakIsQ0FBWDtBQUVBLFNBQUtnRSxtQkFBTCxHQUEyQixJQUFJbkQsdURBQUosRUFBM0I7QUFDQSxTQUFLbUQsbUJBQUwsQ0FBeUJ2QyxJQUF6QixHQUpLLENBTUw7O0FBQ0EsU0FBSzRCLGFBQUw7QUFDRDs7QUExRWE7O0FBNkVoQixpRUFBZU4sU0FBZjs7Ozs7Ozs7Ozs7Ozs7OztBQ25GQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUNBLE1BQU1ELFlBQU4sQ0FBbUI7QUFDakI7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0VoQyxFQUFBQSxXQUFXLENBQUN1QixNQUFELEVBQVNxQixZQUFULEVBQXVCO0FBQ2hDLFNBQUt0RCxXQUFMLEdBQW1CaUMsTUFBTSxDQUFDakMsV0FBMUI7QUFFQSxTQUFLaUUsVUFBTCxHQUFrQixJQUFJQyxLQUFKLEVBQWxCO0FBQ0EsU0FBS0QsVUFBTCxDQUFnQjVELEdBQWhCLEdBQXNCNEIsTUFBTSxDQUFDbkMsUUFBN0I7QUFFQSxTQUFLcUUsVUFBTCxHQUFrQixJQUFJRCxLQUFKLEVBQWxCO0FBQ0EsU0FBS0MsVUFBTCxDQUFnQjlELEdBQWhCLEdBQXNCNEIsTUFBTSxDQUFDbEMsUUFBN0I7QUFDRDtBQUVEO0FBQ0Y7QUFDQTtBQUNBOzs7QUFDRThELEVBQUFBLGNBQWMsQ0FBQ2QsR0FBRCxFQUFNTyxZQUFOLEVBQW9CO0FBQ2hDUCxJQUFBQSxHQUFHLENBQUNxQixTQUFKLENBQ0UsS0FBS0gsVUFEUCxFQUVFdEUsd0RBQVMsQ0FBQyxJQUFELENBQVQsR0FBa0IyRCxZQUFZLENBQUNuRCxDQUZqQyxFQUdFUix3REFBUyxDQUFDLENBQUQsQ0FBVCxHQUFlMkQsWUFBWSxDQUFDbEQsQ0FIOUI7QUFLRDtBQUVEO0FBQ0Y7QUFDQTtBQUNBOzs7QUFDRTJELEVBQUFBLGNBQWMsQ0FBQ2hCLEdBQUQsRUFBTU8sWUFBTixFQUFvQjtBQUNoQ1AsSUFBQUEsR0FBRyxDQUFDcUIsU0FBSixDQUNFLEtBQUtELFVBRFAsRUFFRXhFLHdEQUFTLENBQUMsSUFBRCxDQUFULEdBQWtCMkQsWUFBWSxDQUFDbkQsQ0FGakMsRUFHRVIsd0RBQVMsQ0FBQyxDQUFELENBQVQsR0FBZTJELFlBQVksQ0FBQ2xELENBSDlCO0FBS0Q7O0FBdkNnQjs7QUEwQ25CLGlFQUFlc0MsWUFBZjs7Ozs7Ozs7Ozs7Ozs7O0FDaERBOztBQUVBLE1BQU1qRCxNQUFOLFNBQXFCRCxtREFBckIsQ0FBZ0M7QUFDOUI7QUFDRjtBQUNBO0FBQ0E7QUFDRWtCLEVBQUFBLFdBQVcsQ0FBQzJELEtBQUQsRUFBUTtBQUNqQixVQUFNQSxLQUFOO0FBRUEsU0FBS0Msc0JBQUwsR0FBOEIsQ0FBOUI7QUFFQSxTQUFLcEUsa0JBQUwsR0FBMEJtRSxLQUFLLENBQUNuRSxrQkFBTixJQUE0QixLQUF0RDtBQUVBLFNBQUtxRSxlQUFMLEdBQXVCO0FBQ3JCQyxNQUFBQSxFQUFFLEVBQUUsQ0FBQyxHQUFELEVBQU0sQ0FBQyxDQUFQLENBRGlCO0FBRXJCQyxNQUFBQSxJQUFJLEVBQUUsQ0FBQyxHQUFELEVBQU0sQ0FBTixDQUZlO0FBR3JCQyxNQUFBQSxJQUFJLEVBQUUsQ0FBQyxHQUFELEVBQU0sQ0FBQyxDQUFQLENBSGU7QUFJckJDLE1BQUFBLEtBQUssRUFBRSxDQUFDLEdBQUQsRUFBTSxDQUFOO0FBSmMsS0FBdkI7QUFNRDtBQUVEO0FBQ0Y7QUFDQTtBQUNBOzs7QUFDRWxDLEVBQUFBLE1BQU0sQ0FBQ21DLEtBQUQsRUFBUTtBQUNaLFNBQUtDLGNBQUw7QUFDQSxTQUFLQyxZQUFMLENBQWtCRixLQUFsQjs7QUFFQSxRQUNFLEtBQUsxRSxrQkFBTCxJQUNBLEtBQUtvRSxzQkFBTCxLQUFnQyxDQURoQyxJQUVBTSxLQUFLLENBQUNqQixLQUhSLEVBSUU7QUFDQSxXQUFLNUIsU0FBTCxHQUFpQjZDLEtBQUssQ0FBQ2pCLEtBQXZCO0FBQ0EsV0FBS1csc0JBQUwsR0FBOEIsRUFBOUI7QUFDRDtBQUNGOztBQUVETyxFQUFBQSxjQUFjLEdBQUc7QUFDZixRQUFJLEtBQUtQLHNCQUFMLEdBQThCLENBQWxDLEVBQXFDO0FBQ25DLFVBQU0sQ0FBQ1MsUUFBRCxFQUFXQyxNQUFYLElBQXFCLEtBQUtULGVBQUwsQ0FBcUIsS0FBS3hDLFNBQTFCLENBQTNCO0FBQ0EsV0FBS2dELFFBQUwsS0FBa0JDLE1BQWxCO0FBQ0EsV0FBS1Ysc0JBQUwsSUFBK0IsQ0FBL0I7QUFDRDtBQUNGOztBQUVEUSxFQUFBQSxZQUFZLENBQUNGLEtBQUQsRUFBUTtBQUNsQjtBQUNBLFFBQ0UsS0FBSzFFLGtCQUFMLElBQ0EsS0FBS29FLHNCQUFMLEtBQWdDLENBRGhDLElBRUEsQ0FBQ00sS0FBSyxDQUFDakIsS0FIVCxFQUlFO0FBQ0EsV0FBS3RCLE1BQUwsQ0FBWTRDLFlBQVosQ0FBeUIsU0FBU0MscUJBQXFCLENBQUMsS0FBS25ELFNBQU4sQ0FBdkQ7QUFDRDs7QUFFRCxRQUFJLEtBQUt1QyxzQkFBTCxHQUE4QixDQUFsQyxFQUFxQztBQUNuQyxXQUFLakMsTUFBTCxDQUFZNEMsWUFBWixDQUF5QixTQUFTQyxxQkFBcUIsQ0FBQyxLQUFLbkQsU0FBTixDQUF2RDtBQUNEO0FBQ0Y7O0FBM0Q2Qjs7QUE4RGhDLFNBQVNtRCxxQkFBVCxDQUErQkMsTUFBL0IsRUFBdUM7QUFDckMsU0FBT0EsTUFBTSxDQUFDQyxNQUFQLENBQWMsQ0FBZCxFQUFpQkMsV0FBakIsS0FBaUNGLE1BQU0sQ0FBQ0csS0FBUCxDQUFhLENBQWIsQ0FBeEM7QUFDRDs7QUFFRCxpRUFBZTdGLE1BQWY7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFDQSxNQUFNdUMsTUFBTixDQUFhO0FBQ1g7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNFdEIsRUFBQUEsV0FBVyxDQUFDdUIsTUFBRCxFQUFTO0FBQ2xCO0FBQ0EsU0FBS00sVUFBTCxHQUFrQk4sTUFBTSxDQUFDTSxVQUFQLElBQXFCLEVBQXZDO0FBQ0EsU0FBS0MsZ0JBQUwsR0FBd0JQLE1BQU0sQ0FBQ08sZ0JBQVAsR0FDcEJQLE1BQU0sQ0FBQ08sZ0JBRGEsR0FFcEI7QUFBRXJDLE1BQUFBLENBQUMsRUFBRSxDQUFMO0FBQVFDLE1BQUFBLENBQUMsRUFBRTtBQUFYLEtBRkosQ0FIa0IsQ0FPbEI7O0FBQ0FnRSxJQUFBQSx3REFBUyxDQUNQbkMsTUFBTSxDQUFDNUIsR0FBUCxJQUFjLDJDQURQLEVBRU5rRixLQUFELElBQVc7QUFDVCxXQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDQSxXQUFLQyxhQUFMLEdBQXFCLElBQXJCO0FBQ0QsS0FMTSxDQUFULENBUmtCLENBZ0JsQjs7QUFDQSxTQUFLckQsU0FBTCxHQUFpQkYsTUFBTSxDQUFDRSxTQUFQLElBQW9CLEtBQXJDOztBQUNBLFFBQUksS0FBS0EsU0FBVCxFQUFvQjtBQUNsQmlDLE1BQUFBLHdEQUFTLENBQUMsc0NBQUQsRUFBMENtQixLQUFELElBQVc7QUFDM0QsYUFBS0UsV0FBTCxHQUFtQkYsS0FBbkI7QUFDQSxhQUFLRyxpQkFBTCxHQUF5QixJQUF6QjtBQUNELE9BSFEsQ0FBVDtBQUlELEtBdkJpQixDQXlCbEI7OztBQUNBLFNBQUtDLFVBQUwsR0FBa0IxRCxNQUFNLENBQUMwRCxVQUFQLElBQXFCO0FBQ3JDQyxNQUFBQSxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUQsRUFBSSxDQUFKLENBQUQsQ0FEMkI7QUFFckNDLE1BQUFBLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBRCxDQUYwQjtBQUdyQ0MsTUFBQUEsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUFELENBSDZCO0FBSXJDQyxNQUFBQSxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUQsRUFBSSxDQUFKLENBQUQsQ0FKMkI7QUFLckNDLE1BQUFBLFFBQVEsRUFBRSxDQUNSLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FEUSxFQUNBO0FBQ1IsT0FBQyxDQUFELEVBQUksQ0FBSixDQUZRLEVBRUE7QUFDUixPQUFDLENBQUQsRUFBSSxDQUFKLENBSFEsRUFHQTtBQUNSLE9BQUMsQ0FBRCxFQUFJLENBQUosQ0FKUSxDQUlBO0FBSkEsT0FMMkI7QUFXckNDLE1BQUFBLFNBQVMsRUFBRSxDQUNULENBQUMsQ0FBRCxFQUFJLENBQUosQ0FEUyxFQUNEO0FBQ1IsT0FBQyxDQUFELEVBQUksQ0FBSixDQUZTLEVBRUQ7QUFDUixPQUFDLENBQUQsRUFBSSxDQUFKLENBSFMsRUFHRDtBQUNSLE9BQUMsQ0FBRCxFQUFJLENBQUosQ0FKUyxDQUlEO0FBSkMsT0FYMEI7QUFpQnJDQyxNQUFBQSxNQUFNLEVBQUUsQ0FDTixDQUFDLENBQUQsRUFBSSxDQUFKLENBRE0sRUFDRTtBQUNSLE9BQUMsQ0FBRCxFQUFJLENBQUosQ0FGTSxFQUVFO0FBQ1IsT0FBQyxDQUFELEVBQUksQ0FBSixDQUhNLEVBR0U7QUFDUixPQUFDLENBQUQsRUFBSSxDQUFKLENBSk0sQ0FJRTtBQUpGLE9BakI2QjtBQXVCckNDLE1BQUFBLFFBQVEsRUFBRSxDQUNSLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FEUSxFQUNBO0FBQ1IsT0FBQyxDQUFELEVBQUksQ0FBSixDQUZRLEVBRUE7QUFDUixPQUFDLENBQUQsRUFBSSxDQUFKLENBSFEsRUFHQTtBQUNSLE9BQUMsQ0FBRCxFQUFJLENBQUosQ0FKUSxDQUlBO0FBSkE7QUF2QjJCLEtBQXZDLENBMUJrQixDQXlEbEI7O0FBQ0EsU0FBS0MsZ0JBQUwsR0FBd0JuRSxNQUFNLENBQUNtRSxnQkFBUCxJQUEyQixVQUFuRDtBQUNBLFNBQUtDLHFCQUFMLEdBQTZCLENBQTdCO0FBQ0EsU0FBS0MsbUJBQUwsR0FBMkJyRSxNQUFNLENBQUNxRSxtQkFBUCxJQUE4QixDQUF6RDtBQUNBLFNBQUtDLHNCQUFMLEdBQThCLEtBQUtELG1CQUFuQztBQUVBRSxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSw4QkFBWixFQUE0QyxLQUFLRixzQkFBakQsRUEvRGtCLENBZ0VsQjs7QUFDQSxTQUFLakUsVUFBTCxHQUFrQkwsTUFBTSxDQUFDSyxVQUF6QjtBQUNELEdBOUVVLENBZ0ZYOzs7QUFDUyxNQUFMb0UsS0FBSyxHQUFHO0FBQ1YsV0FBTyxLQUFLZixVQUFMLENBQWdCLEtBQUtTLGdCQUFyQixFQUF1QyxLQUFLQyxxQkFBNUMsQ0FBUDtBQUNEOztBQUVEcEIsRUFBQUEsWUFBWSxDQUFDMEIsR0FBRCxFQUFNO0FBQ2hCLFFBQUksS0FBS1AsZ0JBQUwsS0FBMEJPLEdBQTlCLEVBQW1DO0FBQ2pDLFdBQUtQLGdCQUFMLEdBQXdCTyxHQUF4QjtBQUNBLFdBQUtOLHFCQUFMLEdBQTZCLENBQTdCO0FBQ0EsV0FBS0Usc0JBQUwsR0FBOEIsS0FBS0QsbUJBQW5DO0FBQ0Q7QUFDRjs7QUFFRE0sRUFBQUEsdUJBQXVCLEdBQUc7QUFDeEI7QUFDQSxRQUFJLEtBQUtMLHNCQUFMLEdBQThCLENBQWxDLEVBQXFDO0FBQ25DLFdBQUtBLHNCQUFMLElBQStCLENBQS9CO0FBQ0E7QUFDRCxLQUx1QixDQU94Qjs7O0FBQ0EsU0FBS0Esc0JBQUwsR0FBOEIsS0FBS0QsbUJBQW5DO0FBQ0EsU0FBS0QscUJBQUwsSUFBOEIsQ0FBOUI7O0FBRUEsUUFBSSxLQUFLSyxLQUFMLEtBQWV0RSxTQUFuQixFQUE4QjtBQUM1QixXQUFLaUUscUJBQUwsR0FBNkIsQ0FBN0I7QUFDRDtBQUNGO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0V2QyxFQUFBQSxJQUFJLENBQUNmLEdBQUQsRUFBTU8sWUFBTixFQUFvQjtBQUN0QixRQUFNbkQsQ0FBQyxHQUNMLEtBQUttQyxVQUFMLENBQWdCbkMsQ0FBaEIsR0FDQSxLQUFLcUMsZ0JBQUwsQ0FBc0JyQyxDQUR0QixHQUVBUix3REFBUyxDQUFDLElBQUQsQ0FGVCxHQUdBMkQsWUFBWSxDQUFDbkQsQ0FKZixDQURzQixDQUtKOztBQUNsQixRQUFNQyxDQUFDLEdBQ0wsS0FBS2tDLFVBQUwsQ0FBZ0JsQyxDQUFoQixHQUNBLEtBQUtvQyxnQkFBTCxDQUFzQnBDLENBRHRCLEdBRUFULHdEQUFTLENBQUMsQ0FBRCxDQUZULEdBR0EyRCxZQUFZLENBQUNsRCxDQUpmLENBTnNCLENBVUo7O0FBQ2xCLFFBQU0sQ0FBQ3lHLE1BQUQsRUFBU0MsTUFBVCxJQUFtQixLQUFLSixLQUE5QixDQVhzQixDQVl0QjtBQUVBO0FBQ0E7QUFFQTs7QUFDQSxTQUFLbEIsYUFBTCxJQUNFekMsR0FBRyxDQUFDcUIsU0FBSixDQUNFLEtBQUttQixLQURQLEVBQ2M7QUFDWnNCLElBQUFBLE1BQU0sR0FBRyxFQUZYLEVBRWU7QUFDYkMsSUFBQUEsTUFBTSxHQUFHLEVBSFgsRUFHZTtBQUNiLFNBQUt2RSxVQUpQLEVBSW1CO0FBQ2pCLFNBQUtBLFVBTFAsRUFLbUI7QUFDakJwQyxJQUFBQSxDQU5GLEVBTUs7QUFDSEMsSUFBQUEsQ0FQRixFQU9LO0FBQ0gsU0FBS21DLFVBUlAsRUFRbUI7QUFDakIsU0FBS0EsVUFUUCxDQVNrQjtBQVRsQixLQURGLENBbEJzQixDQStCdEI7O0FBQ0EsU0FBS3FFLHVCQUFMO0FBRUEsU0FBS2xCLGlCQUFMLElBQ0UzQyxHQUFHLENBQUNxQixTQUFKLENBQ0UsS0FBS3FCLFdBRFAsRUFDb0I7QUFDbEJ0RixJQUFBQSxDQUZGLEVBRUs7QUFDSEMsSUFBQUEsQ0FIRixDQUdJO0FBSEosS0FERjtBQU1EOztBQTFKVTs7QUE2SmIsaUVBQWU0QixNQUFmOzs7Ozs7Ozs7Ozs7Ozs7O0FDbktPLElBQU1vQyxTQUFTLEdBQUcsQ0FBQy9ELEdBQUQsRUFBTTBHLEVBQU4sS0FBYTtBQUNwQyxNQUFNQyxHQUFHLEdBQUcsSUFBSTlDLEtBQUosRUFBWjs7QUFDQThDLEVBQUFBLEdBQUcsQ0FBQ0MsTUFBSixHQUFhLE1BQU07QUFDakIsUUFBSUYsRUFBSixFQUFRO0FBQ05BLE1BQUFBLEVBQUUsQ0FBQ0MsR0FBRCxDQUFGO0FBQ0Q7QUFDRixHQUpEOztBQUtBQSxFQUFBQSxHQUFHLENBQUMzRyxHQUFKLEdBQVVBLEdBQVY7QUFDRCxDQVJNO0FBVUEsSUFBTVYsU0FBUyxHQUFJdUgsQ0FBRCxJQUFPO0FBQzlCLFNBQU9BLENBQUMsR0FBRyxFQUFYO0FBQ0QsQ0FGTTtBQUlBLElBQU14SCxXQUFXLEdBQUcsQ0FBQ1MsQ0FBRCxFQUFJQyxDQUFKLEtBQVU7QUFDbkMsbUJBQVVELENBQUMsR0FBRyxFQUFkLGVBQXFCQyxDQUFDLEdBQUcsRUFBekI7QUFDRCxDQUZNOzs7Ozs7VUNkUDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTkE7QUFFQSxJQUFNK0csS0FBSyxHQUFHLElBQUl4RSx1REFBSixDQUFjO0FBQzFCQyxFQUFBQSxPQUFPLEVBQUV0QixRQUFRLENBQUN3QixhQUFULENBQXVCLGlCQUF2QjtBQURpQixDQUFkLENBQWQ7QUFJQXFFLEtBQUssQ0FBQzlGLElBQU4sRyIsInNvdXJjZXMiOlsid2VicGFjazovL3JwZy1nYW1lLy4vc3JjL0RhdGEvQWxsTWFwTGlzdC5qcyIsIndlYnBhY2s6Ly9ycGctZ2FtZS8uL3NyYy9HYW1lL0RpcmVjdGlvbklucHV0LmpzIiwid2VicGFjazovL3JwZy1nYW1lLy4vc3JjL0dhbWUvR2FtZU9iamVjdC5qcyIsIndlYnBhY2s6Ly9ycGctZ2FtZS8uL3NyYy9HYW1lL092ZXJXb3JsZC5qcyIsIndlYnBhY2s6Ly9ycGctZ2FtZS8uL3NyYy9HYW1lL092ZXJXb3JsZE1hcC5qcyIsIndlYnBhY2s6Ly9ycGctZ2FtZS8uL3NyYy9HYW1lL1BlcnNvbi5qcyIsIndlYnBhY2s6Ly9ycGctZ2FtZS8uL3NyYy9HYW1lL1Nwcml0ZS5qcyIsIndlYnBhY2s6Ly9ycGctZ2FtZS8uL3NyYy91dGlscy9oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vcnBnLWdhbWUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcnBnLWdhbWUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3JwZy1nYW1lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcnBnLWdhbWUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9ycGctZ2FtZS8uL3NyYy9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWVPYmplY3QgZnJvbSBcIi4uL0dhbWUvR2FtZU9iamVjdFwiO1xyXG5pbXBvcnQgUGVyc29uIGZyb20gXCIuLi9HYW1lL1BlcnNvblwiO1xyXG5pbXBvcnQgeyBhc0dyaWRDb29yZCwgd2l0aEdyaWRzIH0gZnJvbSBcIi4uL3V0aWxzL2hlbHBlclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IE92ZXJXb3JsZE1hcHNMaXN0ID0ge1xyXG4gIERlbW9Sb29tOiB7XHJcbiAgICBsb3dlclNyYzogXCIvcHVibGljL2ltYWdlcy9tYXBzL0RlbW9Mb3dlci5wbmdcIixcclxuICAgIHVwcGVyU3JjOiBcIi9wdWJsaWMvaW1hZ2VzL21hcHMvRGVtb1VwcGVyLnBuZ1wiLFxyXG4gICAgZ2FtZU9iamVjdHM6IHtcclxuICAgICAgaGVybzogbmV3IFBlcnNvbih7XHJcbiAgICAgICAgaXNQbGF5ZXJDb250cm9sbGVkOiB0cnVlLFxyXG4gICAgICAgIHg6IHdpdGhHcmlkcygyKSxcclxuICAgICAgICB5OiB3aXRoR3JpZHMoNCksXHJcbiAgICAgICAgc3JjOiBcIi9wdWJsaWMvaW1hZ2VzL2NoYXJhY3RlcnMvcGVvcGxlL2hlcm8ucG5nXCIsXHJcbiAgICAgIH0pLFxyXG4gICAgICBucGMxOiBuZXcgR2FtZU9iamVjdCh7XHJcbiAgICAgICAgeDogd2l0aEdyaWRzKDcpLFxyXG4gICAgICAgIHk6IHdpdGhHcmlkcyg5KSxcclxuICAgICAgICBzcmM6IFwiL3B1YmxpYy9pbWFnZXMvY2hhcmFjdGVycy9wZW9wbGUvbnBjMS5wbmcgXCIsXHJcbiAgICAgIH0pLFxyXG4gICAgfSxcclxuICAgIHdhbGxzOiB7XHJcbiAgICAgIFthc0dyaWRDb29yZCg3LCA2KV06IHRydWUsXHJcbiAgICAgIFthc0dyaWRDb29yZCg4LCA2KV06IHRydWUsXHJcbiAgICAgIFthc0dyaWRDb29yZCg3LCA3KV06IHRydWUsXHJcbiAgICAgIFthc0dyaWRDb29yZCg4LCA3KV06IHRydWUsXHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG4gIEtpdGNoZW46IHtcclxuICAgIGxvd2VyU3JjOiBcIi9wdWJsaWMvaW1hZ2VzL21hcHMvS2l0Y2hlbkxvd2VyLnBuZ1wiLFxyXG4gICAgdXBwZXJTcmM6IFwiL3B1YmxpYy9pbWFnZXMvbWFwcy9LaXRjaGVuVXBwZXIucG5nXCIsXHJcbiAgICBnYW1lT2JqZWN0czoge1xyXG4gICAgICAvLyBoZXJvOiBuZXcgR2FtZU9iamVjdCh7XHJcbiAgICAgIC8vICAgeDogd2l0aEdyaWRzKDMpLFxyXG4gICAgICAvLyAgIHk6IHdpdGhHcmlkcyg1KSxcclxuICAgICAgLy8gfSksXHJcbiAgICAgIC8vIG5wYzE6IG5ldyBHYW1lT2JqZWN0KHtcclxuICAgICAgLy8gICB4OiB3aXRoR3JpZHMoOSksXHJcbiAgICAgIC8vICAgeTogd2l0aEdyaWRzKDYpLFxyXG4gICAgICAvLyAgIHNyYzogXCIvcHVibGljL2ltYWdlcy9jaGFyYWN0ZXJzL3Blb3BsZS9ucGMyLnBuZyBcIixcclxuICAgICAgLy8gfSksXHJcbiAgICAgIC8vIG5wYzM6IG5ldyBHYW1lT2JqZWN0KHtcclxuICAgICAgLy8gICB4OiB3aXRoR3JpZHMoMTApLFxyXG4gICAgICAvLyAgIHk6IHdpdGhHcmlkcyg4KSxcclxuICAgICAgLy8gICBzcmM6IFwiL3B1YmxpYy9pbWFnZXMvY2hhcmFjdGVycy9wZW9wbGUvbnBjMy5wbmcgXCIsXHJcbiAgICAgIC8vIH0pLFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG4iLCJjbGFzcyBEaXJlY3Rpb25JbnB1dCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmhlbGREaXJlY3Rpb25zID0gW107XHJcbiAgICB0aGlzLm1hcCA9IHtcclxuICAgICAgQXJyb3dVcDogXCJ1cFwiLFxyXG4gICAgICBLZXlXOiBcInVwXCIsXHJcbiAgICAgIEFycm93RG93bjogXCJkb3duXCIsXHJcbiAgICAgIEtleVM6IFwiZG93blwiLFxyXG4gICAgICBBcnJvd0xlZnQ6IFwibGVmdFwiLFxyXG4gICAgICBLZXlBOiBcImxlZnRcIixcclxuICAgICAgQXJyb3dSaWdodDogXCJyaWdodFwiLFxyXG4gICAgICBLZXlEOiBcInJpZ2h0XCIsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpIHtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XHJcbiAgICAgIGNvbnN0IGRpciA9IHRoaXMubWFwW2UuY29kZV07XHJcblxyXG4gICAgICBpZiAoZGlyICYmIHRoaXMuaGVsZERpcmVjdGlvbnMuaW5kZXhPZihkaXIpID09PSAtMSkge1xyXG4gICAgICAgIHRoaXMuaGVsZERpcmVjdGlvbnMudW5zaGlmdChkaXIpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgKGUpID0+IHtcclxuICAgICAgY29uc3QgZGlyID0gdGhpcy5tYXBbZS5jb2RlXTtcclxuICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmhlbGREaXJlY3Rpb25zLmluZGV4T2YoZGlyKTtcclxuICAgICAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgICAgICB0aGlzLmhlbGREaXJlY3Rpb25zLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGRpcmVjdGlvbigpIHtcclxuICAgIHJldHVybiB0aGlzLmhlbGREaXJlY3Rpb25zWzBdO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGlyZWN0aW9uSW5wdXQ7XHJcbiIsImltcG9ydCBTcHJpdGUgZnJvbSBcIi4vU3ByaXRlXCI7XHJcblxyXG4vKipcclxuICogQG5hbWUgR2FtZU9iamVjdFxyXG4gKi9cclxuY2xhc3MgR2FtZU9iamVjdCB7XHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBjb25maWcueFxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBjb25maWcueVxyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBjb25maWcuc3JjXHJcbiAgICogQHBhcmFtIHsnZG93bicgfCAndXAnIHwgJ2xlZnQnIHwgJ3JpZ2h0JyB8IG51bGx9IGNvbmZpZy5kaXJlY3Rpb25cclxuICAgKiBAcGFyYW0ge0Jvb2xlYW4gfCBudWxsfSBjb25maWcudXNlU2hhZG93XHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGNvbmZpZy5zcXVhcmVTaXplXHJcbiAgICogQHBhcmFtIHt7eDogTnVtYmVyLCB5OiBOdW1iZXJ9IHwgbnVsbH0gY29uZmlnLnJlbW92ZVNxdWFyZVNpemVcclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcclxuICAgIGNvbnN0IGlzVXNlU2hhZG93ID1cclxuICAgICAgY29uZmlnLnVzZVNoYWRvdyAhPT0gbnVsbCAmJiBjb25maWcudXNlU2hhZG93ICE9PSB1bmRlZmluZWRcclxuICAgICAgICA/IGNvbmZpZy51c2VTaGFkb3dcclxuICAgICAgICA6IHRydWU7XHJcbiAgICB0aGlzLnggPSBjb25maWcueCB8fCAwO1xyXG4gICAgdGhpcy55ID0gY29uZmlnLnkgfHwgMDtcclxuICAgIHRoaXMuZGlyZWN0aW9uID0gY29uZmlnLmRpcmVjdGlvbiB8fCBcImRvd25cIjtcclxuICAgIHRoaXMuc3ByaXRlID0gbmV3IFNwcml0ZSh7XHJcbiAgICAgIGdhbWVPYmplY3Q6IHRoaXMsXHJcbiAgICAgIHNyYzogY29uZmlnLnNyYyxcclxuICAgICAgdXNlU2hhZG93OiBpc1VzZVNoYWRvdyxcclxuICAgICAgc3F1YXJlU2l6ZTogY29uZmlnLnNxdWFyZVNpemUgPyBjb25maWcuc3F1YXJlU2l6ZSA6IDMyLFxyXG4gICAgICByZW1vdmVTcXVhcmVTaXplOiBjb25maWcucmVtb3ZlU3F1YXJlU2l6ZVxyXG4gICAgICAgID8gY29uZmlnLnJlbW92ZVNxdWFyZVNpemVcclxuICAgICAgICA6IHsgeDogOCwgeTogMTggfSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKCkge31cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2FtZU9iamVjdDtcclxuIiwiaW1wb3J0IHsgT3ZlcldvcmxkTWFwc0xpc3QgfSBmcm9tIFwiLi4vRGF0YS9BbGxNYXBMaXN0XCI7XHJcbmltcG9ydCBHYW1lT2JqZWN0IGZyb20gXCIuL0dhbWVPYmplY3RcIjtcclxuaW1wb3J0IFBlcnNvbiBmcm9tIFwiLi9QZXJzb25cIjtcclxuaW1wb3J0IE92ZXJXb3JsZE1hcCBmcm9tIFwiLi9PdmVyV29ybGRNYXBcIjtcclxuaW1wb3J0IERpcmVjdGlvbklucHV0IGZyb20gXCIuL0RpcmVjdGlvbklucHV0XCI7XHJcblxyXG5jbGFzcyBPdmVyV29ybGQge1xyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcclxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBjb25maWcuZWxlbWVudFxyXG4gICAqIEBwYXJhbSB7J2hlaGUnfCdoYWhhJ30gY29uZmlnLnRlc3RcclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcclxuICAgIGNvbnN0IHsgZWxlbWVudCB9ID0gY29uZmlnO1xyXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEB0eXBlIHtIVE1MQ2FudmFzRWxlbWVudH1cclxuICAgICAqL1xyXG4gICAgdGhpcy5jYW52YXMgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lLWNhbnZhc1wiKTsgLy9IVE1MQ2FudmFzRWxlbWVudFxyXG5cclxuICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHR5cGUge092ZXJXb3JsZE1hcCB8IG51bGx9XHJcbiAgICAgKi9cclxuICAgIHRoaXMubWFwID0gbnVsbDtcclxuICB9XHJcblxyXG4gIHN0YXJ0R2FtZUxvb3AoKSB7XHJcbiAgICBjb25zdCBzdGVwID0gKCkgPT4ge1xyXG4gICAgICAvLyBDbGVhciBPZiBUaGUgQ2FudmFzXHJcbiAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcclxuXHJcbiAgICAgIC8vIENhbWVyYVxyXG4gICAgICBjb25zdCBjYW1lcmFQZXJzb24gPSB0aGlzLm1hcC5nYW1lT2JqZWN0cy5oZXJvO1xyXG5cclxuICAgICAgLy8gVXBkYXRlIEFsbCBPYmplY3RzXHJcbiAgICAgIE9iamVjdC52YWx1ZXModGhpcy5tYXAuZ2FtZU9iamVjdHMpLmZvckVhY2goXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQHBhcmFtIHtHYW1lT2JqZWN0IHwgUGVyc29ufSBvYmpcclxuICAgICAgICAgKi9cclxuICAgICAgICAob2JqKSA9PiB7XHJcbiAgICAgICAgICBvYmoudXBkYXRlKHtcclxuICAgICAgICAgICAgYXJyb3c6IHRoaXMuZGlyZWN0aW9uQ29udHJvbGxlci5kaXJlY3Rpb24sXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcblxyXG4gICAgICAvLyBEcmF3IHRoZSBMb3dlciBMYXllclxyXG4gICAgICB0aGlzLm1hcC5kcmF3TG93ZXJJbWFnZSh0aGlzLmN0eCwgY2FtZXJhUGVyc29uKTtcclxuXHJcbiAgICAgIC8vIE1ha2UgUGVyc29uIGFuZCBNaWRkbGUgTGF5ZXJcclxuICAgICAgT2JqZWN0LnZhbHVlcyh0aGlzLm1hcC5nYW1lT2JqZWN0cykuZm9yRWFjaChcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAcGFyYW0ge0dhbWVPYmplY3QgfCBQZXJzb259IG9ialxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIChvYmopID0+IHtcclxuICAgICAgICAgIG9iai5zcHJpdGUuZHJhdyh0aGlzLmN0eCwgY2FtZXJhUGVyc29uKTtcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcblxyXG4gICAgICB0aGlzLm1hcC5kcmF3VXBwZXJJbWFnZSh0aGlzLmN0eCwgY2FtZXJhUGVyc29uKTtcclxuXHJcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XHJcbiAgICAgICAgc3RlcCgpO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgc3RlcCgpO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpIHtcclxuICAgIHRoaXMubWFwID0gbmV3IE92ZXJXb3JsZE1hcChPdmVyV29ybGRNYXBzTGlzdC5EZW1vUm9vbSk7XHJcblxyXG4gICAgdGhpcy5kaXJlY3Rpb25Db250cm9sbGVyID0gbmV3IERpcmVjdGlvbklucHV0KCk7XHJcbiAgICB0aGlzLmRpcmVjdGlvbkNvbnRyb2xsZXIuaW5pdCgpO1xyXG5cclxuICAgIC8vIFN0YXJ0IEdhbWUgTG9vcFxyXG4gICAgdGhpcy5zdGFydEdhbWVMb29wKCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPdmVyV29ybGQ7XHJcbiIsImltcG9ydCB7IHdpdGhHcmlkcyB9IGZyb20gXCIuLi91dGlscy9oZWxwZXJcIjtcclxuaW1wb3J0IEdhbWVPYmplY3QgZnJvbSBcIi4vR2FtZU9iamVjdFwiO1xyXG5cclxuLyoqXHJcbiAqIEBuYW1lIE92ZXJXb3JsTWFwXHJcbiAqL1xyXG5jbGFzcyBPdmVyV29ybGRNYXAge1xyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcclxuICAgKiBAcGFyYW0ge1N0cmluZ30gY29uZmlnLmxvd2VyU3JjXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IGNvbmZpZy51cHBlclNyY1xyXG4gICAqIEBwYXJhbSB7e2hlcm86IEdhbWVPYmplY3QsIG5wYzE6IEdhbWVPYmplY3QsIG5wYzI6IEdhbWVPYmplY3R9fSBjb25maWcuZ2FtZU9iamVjdHNcclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihjb25maWcsIGNhbWVyYVBlcnNvbikge1xyXG4gICAgdGhpcy5nYW1lT2JqZWN0cyA9IGNvbmZpZy5nYW1lT2JqZWN0cztcclxuXHJcbiAgICB0aGlzLmxvd2VyTGF5ZXIgPSBuZXcgSW1hZ2UoKTtcclxuICAgIHRoaXMubG93ZXJMYXllci5zcmMgPSBjb25maWcubG93ZXJTcmM7XHJcblxyXG4gICAgdGhpcy51cHBlckxheWVyID0gbmV3IEltYWdlKCk7XHJcbiAgICB0aGlzLnVwcGVyTGF5ZXIuc3JjID0gY29uZmlnLnVwcGVyU3JjO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtDYW52YXNSZW5kZXJpbmdDb250ZXh0MkR9IGN0eFxyXG4gICAqIEBwYXJhbSB7R2FtZU9iamVjdH0gY2FtZXJhUGVyc29uXHJcbiAgICovXHJcbiAgZHJhd0xvd2VySW1hZ2UoY3R4LCBjYW1lcmFQZXJzb24pIHtcclxuICAgIGN0eC5kcmF3SW1hZ2UoXHJcbiAgICAgIHRoaXMubG93ZXJMYXllcixcclxuICAgICAgd2l0aEdyaWRzKDEwLjUpIC0gY2FtZXJhUGVyc29uLngsXHJcbiAgICAgIHdpdGhHcmlkcyg2KSAtIGNhbWVyYVBlcnNvbi55XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtDYW52YXNSZW5kZXJpbmdDb250ZXh0MkR9IGN0eFxyXG4gICAqIEBwYXJhbSB7R2FtZU9iamVjdH0gY2FtZXJhUGVyc29uXHJcbiAgICovXHJcbiAgZHJhd1VwcGVySW1hZ2UoY3R4LCBjYW1lcmFQZXJzb24pIHtcclxuICAgIGN0eC5kcmF3SW1hZ2UoXHJcbiAgICAgIHRoaXMudXBwZXJMYXllcixcclxuICAgICAgd2l0aEdyaWRzKDEwLjUpIC0gY2FtZXJhUGVyc29uLngsXHJcbiAgICAgIHdpdGhHcmlkcyg2KSAtIGNhbWVyYVBlcnNvbi55XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgT3ZlcldvcmxkTWFwO1xyXG4iLCJpbXBvcnQgR2FtZU9iamVjdCBmcm9tIFwiLi9HYW1lT2JqZWN0XCI7XHJcblxyXG5jbGFzcyBQZXJzb24gZXh0ZW5kcyBHYW1lT2JqZWN0IHtcclxuICAvKipcclxuICAgKiBAcGFyYW0ge0dhbWVPYmplY3R9IHByb3BzXHJcbiAgICogQHBhcmFtIHtCb29sZWFufSBwcm9wcy5pc1BsYXllckNvbnRyb2xsZWRcclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMubW92aW5nUHJvZ3Jlc3NSZW1haW5pZyA9IDA7XHJcblxyXG4gICAgdGhpcy5pc1BsYXllckNvbnRyb2xsZWQgPSBwcm9wcy5pc1BsYXllckNvbnRyb2xsZWQgfHwgZmFsc2U7XHJcblxyXG4gICAgdGhpcy5kaXJlY3Rpb25VcGRhdGUgPSB7XHJcbiAgICAgIHVwOiBbXCJ5XCIsIC0xXSxcclxuICAgICAgZG93bjogW1wieVwiLCAxXSxcclxuICAgICAgbGVmdDogW1wieFwiLCAtMV0sXHJcbiAgICAgIHJpZ2h0OiBbXCJ4XCIsIDFdLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZVxyXG4gICAqIEBwYXJhbSB7J2Rvd24nIHwgJ3VwJyB8ICdsZWZ0JyB8ICdyaWdodCcgfSBzdGF0ZS5hcnJvd1xyXG4gICAqL1xyXG4gIHVwZGF0ZShzdGF0ZSkge1xyXG4gICAgdGhpcy51cGRhdGVQb3NpdGlvbigpO1xyXG4gICAgdGhpcy51cGRhdGVTcHJpbnQoc3RhdGUpO1xyXG5cclxuICAgIGlmIChcclxuICAgICAgdGhpcy5pc1BsYXllckNvbnRyb2xsZWQgJiZcclxuICAgICAgdGhpcy5tb3ZpbmdQcm9ncmVzc1JlbWFpbmlnID09PSAwICYmXHJcbiAgICAgIHN0YXRlLmFycm93XHJcbiAgICApIHtcclxuICAgICAgdGhpcy5kaXJlY3Rpb24gPSBzdGF0ZS5hcnJvdztcclxuICAgICAgdGhpcy5tb3ZpbmdQcm9ncmVzc1JlbWFpbmlnID0gMTY7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVQb3NpdGlvbigpIHtcclxuICAgIGlmICh0aGlzLm1vdmluZ1Byb2dyZXNzUmVtYWluaWcgPiAwKSB7XHJcbiAgICAgIGNvbnN0IFtwcm9wZXJ0eSwgY2hhbmdlXSA9IHRoaXMuZGlyZWN0aW9uVXBkYXRlW3RoaXMuZGlyZWN0aW9uXTtcclxuICAgICAgdGhpc1twcm9wZXJ0eV0gKz0gY2hhbmdlO1xyXG4gICAgICB0aGlzLm1vdmluZ1Byb2dyZXNzUmVtYWluaWcgLT0gMTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZVNwcmludChzdGF0ZSkge1xyXG4gICAgLy8gY29uc29sZS5sb2coc3RhdGUpO2NhcGl0YWxpemVGaXJzdExldHRlclxyXG4gICAgaWYgKFxyXG4gICAgICB0aGlzLmlzUGxheWVyQ29udHJvbGxlZCAmJlxyXG4gICAgICB0aGlzLm1vdmluZ1Byb2dyZXNzUmVtYWluaWcgPT09IDAgJiZcclxuICAgICAgIXN0YXRlLmFycm93XHJcbiAgICApIHtcclxuICAgICAgdGhpcy5zcHJpdGUuc2V0QW5pbWF0aW9uKFwiaWRsZVwiICsgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHRoaXMuZGlyZWN0aW9uKSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMubW92aW5nUHJvZ3Jlc3NSZW1haW5pZyA+IDApIHtcclxuICAgICAgdGhpcy5zcHJpdGUuc2V0QW5pbWF0aW9uKFwid2Fsa1wiICsgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHRoaXMuZGlyZWN0aW9uKSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjYXBpdGFsaXplRmlyc3RMZXR0ZXIoc3RyaW5nKSB7XHJcbiAgcmV0dXJuIHN0cmluZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGVyc29uO1xyXG4iLCJpbXBvcnQgeyBkcmF3SW1hZ2UsIHdpdGhHcmlkcyB9IGZyb20gXCIuLi91dGlscy9oZWxwZXJcIjtcclxuaW1wb3J0IEdhbWVPYmplY3QgZnJvbSBcIi4vR2FtZU9iamVjdFwiO1xyXG5cclxuLyoqXHJcbiAqIEBuYW1lIFNwcml0ZVxyXG4gKi9cclxuY2xhc3MgU3ByaXRlIHtcclxuICAvKipcclxuICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZy5hbmltYXRpb25zXHJcbiAgICogQHBhcmFtIHsnaWRsZURvd24nIHwgJ2lkbGVSaWdodCcgfCAnaWRsZVVwJyB8ICdpZGxlTGVmdCcgfCAnd2Fsa0Rvd24nIHwnd2Fsa1JpZ2h0JyB8ICd3YWxrVXAnIHwgJ3dhbGtMZWZ0JyB9IGNvbmZpZy5jdXJyZW50QW5pbWF0aW9uXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IGNvbmZpZy5zcmNcclxuICAgKiBAcGFyYW0ge051bWJlcn0gY29uZmlnLnNxdWFyZVNpemVcclxuICAgKiBAcGFyYW0ge0dhbWVPYmplY3R9IGNvbmZpZy5nYW1lT2JqZWN0XHJcbiAgICogQHBhcmFtIHtOdW1iZXIgfCBudWxsfSBjb25maWcuYW5pbWF0aW9uRnJhbWVMaW1pdFxyXG4gICAqIEBwYXJhbSB7eyAgeDogTnVtYmVyLCB5OiBOdW1iZXJ9IHwgbnVsbH0gY29uZmlnLnJlbW92ZVNxdWFyZVNpemVcclxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IGNvbmZpZy51c2VTaGFkb3dcclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcclxuICAgIC8vIFNxdWFyZVNpemUgRGVmYXVsdCAzMlxyXG4gICAgdGhpcy5zcXVhcmVTaXplID0gY29uZmlnLnNxdWFyZVNpemUgfHwgMzI7XHJcbiAgICB0aGlzLnJlbW92ZVNxdWFyZVNpemUgPSBjb25maWcucmVtb3ZlU3F1YXJlU2l6ZVxyXG4gICAgICA/IGNvbmZpZy5yZW1vdmVTcXVhcmVTaXplXHJcbiAgICAgIDogeyB4OiA4LCB5OiAxOCB9O1xyXG5cclxuICAgIC8vIFNldHVwIHRoZSBpbWFnZVxyXG4gICAgZHJhd0ltYWdlKFxyXG4gICAgICBjb25maWcuc3JjIHx8IFwiL3B1YmxpYy9pbWFnZXMvY2hhcmFjdGVycy9wZW9wbGUvaGVyby5wbmdcIixcclxuICAgICAgKGltYWdlKSA9PiB7XHJcbiAgICAgICAgdGhpcy5pbWFnZSA9IGltYWdlO1xyXG4gICAgICAgIHRoaXMuaW1hZ2VJc0xvYWRlZCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICk7XHJcblxyXG4gICAgLy8gU2hhZG93IEltYWdlXHJcbiAgICB0aGlzLnVzZVNoYWRvdyA9IGNvbmZpZy51c2VTaGFkb3cgfHwgZmFsc2U7XHJcbiAgICBpZiAodGhpcy51c2VTaGFkb3cpIHtcclxuICAgICAgZHJhd0ltYWdlKFwiL3B1YmxpYy9pbWFnZXMvY2hhcmFjdGVycy9zaGFkb3cucG5nXCIsIChpbWFnZSkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2hhZG93SW1hZ2UgPSBpbWFnZTtcclxuICAgICAgICB0aGlzLnNoYWRvd0ltYWdlTG9hZGVkID0gdHJ1ZTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ29uZml1cmUgQW5pbWF0aW9uIEFuZCBJbml0aWFsIFN0YXRlXHJcbiAgICB0aGlzLmFuaW1hdGlvbnMgPSBjb25maWcuYW5pbWF0aW9ucyB8fCB7XHJcbiAgICAgIGlkbGVEb3duOiBbWzAsIDBdXSxcclxuICAgICAgaWRsZVJpZ2h0OiBbWzAsIDFdXSxcclxuICAgICAgaWRsZVVwOiBbWzAsIDJdXSxcclxuICAgICAgaWRsZUxlZnQ6IFtbMCwgM11dLFxyXG4gICAgICB3YWxrRG93bjogW1xyXG4gICAgICAgIFsxLCAwXSwgLy8gaW1hZ2Ugcm93IDEgY29sIDFcclxuICAgICAgICBbMCwgMF0sIC8vIGltYWdlIHJvdyAxIGNvbCAyXHJcbiAgICAgICAgWzMsIDBdLCAvLyBpbWFnZSByb3cgMSBjb2wgNFxyXG4gICAgICAgIFswLCAwXSwgLy8gaW1hZ2Ugcm93IDEgY29sIDJcclxuICAgICAgXSxcclxuICAgICAgd2Fsa1JpZ2h0OiBbXHJcbiAgICAgICAgWzEsIDFdLCAvLyBpbWFnZSByb3cgMSBjb2wgMVxyXG4gICAgICAgIFswLCAxXSwgLy8gaW1hZ2Ugcm93IDEgY29sIDJcclxuICAgICAgICBbMywgMV0sIC8vIGltYWdlIHJvdyAxIGNvbCA0XHJcbiAgICAgICAgWzAsIDFdLCAvLyBpbWFnZSByb3cgMSBjb2wgMlxyXG4gICAgICBdLFxyXG4gICAgICB3YWxrVXA6IFtcclxuICAgICAgICBbMSwgMl0sIC8vIGltYWdlIHJvdyAxIGNvbCAxXHJcbiAgICAgICAgWzAsIDJdLCAvLyBpbWFnZSByb3cgMSBjb2wgMlxyXG4gICAgICAgIFszLCAyXSwgLy8gaW1hZ2Ugcm93IDEgY29sIDRcclxuICAgICAgICBbMCwgMl0sIC8vIGltYWdlIHJvdyAxIGNvbCAyXHJcbiAgICAgIF0sXHJcbiAgICAgIHdhbGtMZWZ0OiBbXHJcbiAgICAgICAgWzEsIDNdLCAvLyBpbWFnZSByb3cgMSBjb2wgMVxyXG4gICAgICAgIFswLCAzXSwgLy8gaW1hZ2Ugcm93IDEgY29sIDJcclxuICAgICAgICBbMywgM10sIC8vIGltYWdlIHJvdyAxIGNvbCA0XHJcbiAgICAgICAgWzAsIDNdLCAvLyBpbWFnZSByb3cgMSBjb2wgMlxyXG4gICAgICBdLFxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBTZXQgQW5pbWF0aW9uIEZyYW1lXHJcbiAgICB0aGlzLmN1cnJlbnRBbmltYXRpb24gPSBjb25maWcuY3VycmVudEFuaW1hdGlvbiB8fCBcImlkbGVEb3duXCI7XHJcbiAgICB0aGlzLmN1cnJlbnRBbmltYXRpb25GcmFtZSA9IDA7XHJcbiAgICB0aGlzLmFuaW1hdGlvbkZyYW1lTGltaXQgPSBjb25maWcuYW5pbWF0aW9uRnJhbWVMaW1pdCB8fCA4O1xyXG4gICAgdGhpcy5hbmltYXRpb25GcmFtZVByb2dyZXNzID0gdGhpcy5hbmltYXRpb25GcmFtZUxpbWl0O1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiIHRoaXMuYW5pbWF0aW9uRnJhbWVQcm9ncmVzc1wiLCB0aGlzLmFuaW1hdGlvbkZyYW1lUHJvZ3Jlc3MpO1xyXG4gICAgLy9cclxuICAgIHRoaXMuZ2FtZU9iamVjdCA9IGNvbmZpZy5nYW1lT2JqZWN0O1xyXG4gIH1cclxuXHJcbiAgLy8gR2V0IEN1cnJlbnQgQW5pbWF0aW9uIEZyYW1lXHJcbiAgZ2V0IGZyYW1lKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuYW5pbWF0aW9uc1t0aGlzLmN1cnJlbnRBbmltYXRpb25dW3RoaXMuY3VycmVudEFuaW1hdGlvbkZyYW1lXTtcclxuICB9XHJcblxyXG4gIHNldEFuaW1hdGlvbihrZXkpIHtcclxuICAgIGlmICh0aGlzLmN1cnJlbnRBbmltYXRpb24gIT09IGtleSkge1xyXG4gICAgICB0aGlzLmN1cnJlbnRBbmltYXRpb24gPSBrZXk7XHJcbiAgICAgIHRoaXMuY3VycmVudEFuaW1hdGlvbkZyYW1lID0gMDtcclxuICAgICAgdGhpcy5hbmltYXRpb25GcmFtZVByb2dyZXNzID0gdGhpcy5hbmltYXRpb25GcmFtZUxpbWl0O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlQW5pbWF0aW9uUHJvZ3Jlc3MoKSB7XHJcbiAgICAvLyBEb3dudGljayBGcmFtZSBQcm9ncmVzc1xyXG4gICAgaWYgKHRoaXMuYW5pbWF0aW9uRnJhbWVQcm9ncmVzcyA+IDApIHtcclxuICAgICAgdGhpcy5hbmltYXRpb25GcmFtZVByb2dyZXNzIC09IDE7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXNldCB0aGUgY291bnRlclxyXG4gICAgdGhpcy5hbmltYXRpb25GcmFtZVByb2dyZXNzID0gdGhpcy5hbmltYXRpb25GcmFtZUxpbWl0O1xyXG4gICAgdGhpcy5jdXJyZW50QW5pbWF0aW9uRnJhbWUgKz0gMTtcclxuXHJcbiAgICBpZiAodGhpcy5mcmFtZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMuY3VycmVudEFuaW1hdGlvbkZyYW1lID0gMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERyYXcgQ29udGV4dFxyXG4gICAqIEBwYXJhbSB7Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEfSBjdHhcclxuICAgKiBAcGFyYW0ge0dhbWVPYmplY3R9IGNhbWVyYVBlcnNvblxyXG4gICAqL1xyXG4gIGRyYXcoY3R4LCBjYW1lcmFQZXJzb24pIHtcclxuICAgIGNvbnN0IHggPVxyXG4gICAgICB0aGlzLmdhbWVPYmplY3QueCAtXHJcbiAgICAgIHRoaXMucmVtb3ZlU3F1YXJlU2l6ZS54ICtcclxuICAgICAgd2l0aEdyaWRzKDEwLjUpIC1cclxuICAgICAgY2FtZXJhUGVyc29uLng7IC8vIFJlbW92ZSBVbm5lY2Vzc2FyeSB3aWR0aFxyXG4gICAgY29uc3QgeSA9XHJcbiAgICAgIHRoaXMuZ2FtZU9iamVjdC55IC1cclxuICAgICAgdGhpcy5yZW1vdmVTcXVhcmVTaXplLnkgK1xyXG4gICAgICB3aXRoR3JpZHMoNikgLVxyXG4gICAgICBjYW1lcmFQZXJzb24ueTsgLy8gUmVtb3ZlIFVubmVjZXNzYXJ5IGhlaWdodFxyXG4gICAgY29uc3QgW2ZyYW1lWCwgZnJhbWVZXSA9IHRoaXMuZnJhbWU7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmZyYW1lKTtcclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIkZyYW1lWFwiLCBmcmFtZVgpO1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJGcmFtZVlcIiwgZnJhbWVZKTtcclxuXHJcbiAgICAvLyBXaGVuIEltYWdlIExvYWRpbmdcclxuICAgIHRoaXMuaW1hZ2VJc0xvYWRlZCAmJlxyXG4gICAgICBjdHguZHJhd0ltYWdlKFxyXG4gICAgICAgIHRoaXMuaW1hZ2UsIC8vIEluc2VydCBJbWFnZVxyXG4gICAgICAgIGZyYW1lWCAqIDMyLCAvLyBYIGZyb20gSW1hZ2VcclxuICAgICAgICBmcmFtZVkgKiAzMiwgLy8gWSBmcm9tIEltYWdlXHJcbiAgICAgICAgdGhpcy5zcXVhcmVTaXplLCAvLyBXaWR0aCBGcm9tIEltYWdlLFxyXG4gICAgICAgIHRoaXMuc3F1YXJlU2l6ZSwgLy8gSGVpZ2h0IEZyb20gSW1hZ2VcclxuICAgICAgICB4LCAvLyBYIGZvciBDYW52YXNcclxuICAgICAgICB5LCAvLyBZIGZvciBDYW52YXNcclxuICAgICAgICB0aGlzLnNxdWFyZVNpemUsIC8vIFdpZHRoIEZvciBDYW52YXNcclxuICAgICAgICB0aGlzLnNxdWFyZVNpemUgLy8gSGVpZ2h0IEZvciBDYW52YXNcclxuICAgICAgKTtcclxuXHJcbiAgICAvLyBDYWxsIEFuaW1hdGlvblxyXG4gICAgdGhpcy51cGRhdGVBbmltYXRpb25Qcm9ncmVzcygpO1xyXG5cclxuICAgIHRoaXMuc2hhZG93SW1hZ2VMb2FkZWQgJiZcclxuICAgICAgY3R4LmRyYXdJbWFnZShcclxuICAgICAgICB0aGlzLnNoYWRvd0ltYWdlLCAvLyBJbnNlcnQgSW1hZ2VcclxuICAgICAgICB4LCAvLyBYIGZvciBDYW52YXNcclxuICAgICAgICB5IC8vIFkgZm9yIENhbnZhc1xyXG4gICAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3ByaXRlO1xyXG4iLCJleHBvcnQgY29uc3QgZHJhd0ltYWdlID0gKHNyYywgY2IpID0+IHtcclxuICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcclxuICBpbWcub25sb2FkID0gKCkgPT4ge1xyXG4gICAgaWYgKGNiKSB7XHJcbiAgICAgIGNiKGltZyk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBpbWcuc3JjID0gc3JjO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHdpdGhHcmlkcyA9IChuKSA9PiB7XHJcbiAgcmV0dXJuIG4gKiAxNjtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBhc0dyaWRDb29yZCA9ICh4LCB5KSA9PiB7XHJcbiAgcmV0dXJuIGAke3ggKiAxNn0sICR7eSAqIDE2fWA7XHJcbn07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IE92ZXJXb3JsZCBmcm9tIFwiLi9HYW1lL092ZXJXb3JsZFwiO1xyXG5cclxuY29uc3Qgd29scmQgPSBuZXcgT3ZlcldvcmxkKHtcclxuICBlbGVtZW50OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWUtY29udGFpbmVyXCIpLFxyXG59KTtcclxuXHJcbndvbHJkLmluaXQoKTtcclxuIl0sIm5hbWVzIjpbIkdhbWVPYmplY3QiLCJQZXJzb24iLCJhc0dyaWRDb29yZCIsIndpdGhHcmlkcyIsIk92ZXJXb3JsZE1hcHNMaXN0IiwiRGVtb1Jvb20iLCJsb3dlclNyYyIsInVwcGVyU3JjIiwiZ2FtZU9iamVjdHMiLCJoZXJvIiwiaXNQbGF5ZXJDb250cm9sbGVkIiwieCIsInkiLCJzcmMiLCJucGMxIiwid2FsbHMiLCJLaXRjaGVuIiwiRGlyZWN0aW9uSW5wdXQiLCJjb25zdHJ1Y3RvciIsImhlbGREaXJlY3Rpb25zIiwibWFwIiwiQXJyb3dVcCIsIktleVciLCJBcnJvd0Rvd24iLCJLZXlTIiwiQXJyb3dMZWZ0IiwiS2V5QSIsIkFycm93UmlnaHQiLCJLZXlEIiwiaW5pdCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJkaXIiLCJjb2RlIiwiaW5kZXhPZiIsInVuc2hpZnQiLCJpbmRleCIsInNwbGljZSIsImRpcmVjdGlvbiIsIlNwcml0ZSIsImNvbmZpZyIsImlzVXNlU2hhZG93IiwidXNlU2hhZG93IiwidW5kZWZpbmVkIiwic3ByaXRlIiwiZ2FtZU9iamVjdCIsInNxdWFyZVNpemUiLCJyZW1vdmVTcXVhcmVTaXplIiwidXBkYXRlIiwiT3ZlcldvcmxkTWFwIiwiT3ZlcldvcmxkIiwiZWxlbWVudCIsImNhbnZhcyIsInF1ZXJ5U2VsZWN0b3IiLCJjdHgiLCJnZXRDb250ZXh0Iiwic3RhcnRHYW1lTG9vcCIsInN0ZXAiLCJjbGVhclJlY3QiLCJ3aWR0aCIsImhlaWdodCIsImNhbWVyYVBlcnNvbiIsIk9iamVjdCIsInZhbHVlcyIsImZvckVhY2giLCJvYmoiLCJhcnJvdyIsImRpcmVjdGlvbkNvbnRyb2xsZXIiLCJkcmF3TG93ZXJJbWFnZSIsImRyYXciLCJkcmF3VXBwZXJJbWFnZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImxvd2VyTGF5ZXIiLCJJbWFnZSIsInVwcGVyTGF5ZXIiLCJkcmF3SW1hZ2UiLCJwcm9wcyIsIm1vdmluZ1Byb2dyZXNzUmVtYWluaWciLCJkaXJlY3Rpb25VcGRhdGUiLCJ1cCIsImRvd24iLCJsZWZ0IiwicmlnaHQiLCJzdGF0ZSIsInVwZGF0ZVBvc2l0aW9uIiwidXBkYXRlU3ByaW50IiwicHJvcGVydHkiLCJjaGFuZ2UiLCJzZXRBbmltYXRpb24iLCJjYXBpdGFsaXplRmlyc3RMZXR0ZXIiLCJzdHJpbmciLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiaW1hZ2UiLCJpbWFnZUlzTG9hZGVkIiwic2hhZG93SW1hZ2UiLCJzaGFkb3dJbWFnZUxvYWRlZCIsImFuaW1hdGlvbnMiLCJpZGxlRG93biIsImlkbGVSaWdodCIsImlkbGVVcCIsImlkbGVMZWZ0Iiwid2Fsa0Rvd24iLCJ3YWxrUmlnaHQiLCJ3YWxrVXAiLCJ3YWxrTGVmdCIsImN1cnJlbnRBbmltYXRpb24iLCJjdXJyZW50QW5pbWF0aW9uRnJhbWUiLCJhbmltYXRpb25GcmFtZUxpbWl0IiwiYW5pbWF0aW9uRnJhbWVQcm9ncmVzcyIsImNvbnNvbGUiLCJsb2ciLCJmcmFtZSIsImtleSIsInVwZGF0ZUFuaW1hdGlvblByb2dyZXNzIiwiZnJhbWVYIiwiZnJhbWVZIiwiY2IiLCJpbWciLCJvbmxvYWQiLCJuIiwid29scmQiXSwic291cmNlUm9vdCI6IiJ9