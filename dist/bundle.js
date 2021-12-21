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
        x: (0,_utils_helper__WEBPACK_IMPORTED_MODULE_2__.withGrids)(5),
        y: (0,_utils_helper__WEBPACK_IMPORTED_MODULE_2__.withGrids)(6),
        src: "/public/images/characters/people/hero.png"
      }) // npc1: new GameObject({
      //   x: withGrids(7),
      //   y: withGrids(9),
      //   src: "/public/images/characters/people/npc1.png ",
      // }),

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
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.direction = config.direction || "down";
    this.sprite = new _Sprite__WEBPACK_IMPORTED_MODULE_0__["default"]({
      gameObject: this,
      src: config.src,
      useShadow: config.useShadow !== null || config.useShadow !== undefined ? config.useShadow : true,
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
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // Clear Canvas

      this.map.drawLowerImage(this.ctx);
      Object.values(this.map.gameObjects).forEach(
      /**
       * @param {GameObject | Person} obj
       */
      obj => {
        obj.update({
          arrow: this.directionController.direction
        });
        obj.sprite.draw(this.ctx);
      });
      this.map.drawUpperImage(this.ctx);
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
/**
 * @name OverWorlMap
 */
class OverWorldMap {
  /**
   * @param {Object} config
   * @param {String} config.lowerSrc
   * @param {String} config.upperSrc
   */
  constructor(config) {
    this.gameObjects = config.gameObjects;
    this.lowerLayer = new Image();
    this.lowerLayer.src = config.lowerSrc;
    this.upperLayer = new Image();
    this.upperLayer.src = config.upperSrc;
  }
  /**
   * @param {CanvasRenderingContext2D} ctx
   */


  drawLowerImage(ctx) {
    ctx.drawImage(this.lowerLayer, 0, 0);
  }
  /**
   * @param {CanvasRenderingContext2D} ctx
   */


  drawUpperImage(ctx) {
    ctx.drawImage(this.upperLayer, 0, 0);
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
    this.animationFrameLimit = config.animationFrameLimit || 10;
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
   */


  draw(ctx) {
    var x = this.gameObject.x - this.removeSquareSize.x; // Remove Unnecessary width

    var y = this.gameObject.y - this.removeSquareSize.y; // Remove Unnecessary height

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
/* harmony export */   "withGrids": () => (/* binding */ withGrids)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cGFjazovL3JwZy1nYW1lLy4vc3JjL0dhbWUvRGlyZWN0aW9uSW5wdXQuanMiLCJ3ZWJwYWNrOi8vcnBnLWdhbWUvLi9zcmMvR2FtZS9HYW1lT2JqZWN0LmpzIiwid2VicGFjazovL3JwZy1nYW1lLy4vc3JjL0dhbWUvT3ZlcldvcmxkLmpzIiwid2VicGFjazovL3JwZy1nYW1lLy4vc3JjL0dhbWUvT3ZlcldvcmxkTWFwLmpzIiwid2VicGFjazovL3JwZy1nYW1lLy4vc3JjL0dhbWUvUGVyc29uLmpzIiwid2VicGFjazovL3JwZy1nYW1lLy4vc3JjL0dhbWUvU3ByaXRlLmpzIiwid2VicGFjazovL3JwZy1nYW1lLy4vc3JjL3V0aWxzL2hlbHBlci5qcyIsIndlYnBhY2s6Ly9ycGctZ2FtZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9ycGctZ2FtZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcnBnLWdhbWUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9ycGctZ2FtZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3JwZy1nYW1lLy4vc3JjL2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZU9iamVjdCBmcm9tIFwiLi4vR2FtZS9HYW1lT2JqZWN0XCI7XHJcbmltcG9ydCBQZXJzb24gZnJvbSBcIi4uL0dhbWUvUGVyc29uXCI7XHJcbmltcG9ydCB7IHdpdGhHcmlkcyB9IGZyb20gXCIuLi91dGlscy9oZWxwZXJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBPdmVyV29ybGRNYXBzTGlzdCA9IHtcclxuICBEZW1vUm9vbToge1xyXG4gICAgbG93ZXJTcmM6IFwiL3B1YmxpYy9pbWFnZXMvbWFwcy9EZW1vTG93ZXIucG5nXCIsXHJcbiAgICB1cHBlclNyYzogXCIvcHVibGljL2ltYWdlcy9tYXBzL0RlbW9VcHBlci5wbmdcIixcclxuICAgIGdhbWVPYmplY3RzOiB7XHJcbiAgICAgIGhlcm86IG5ldyBQZXJzb24oe1xyXG4gICAgICAgIGlzUGxheWVyQ29udHJvbGxlZDogdHJ1ZSxcclxuICAgICAgICB4OiB3aXRoR3JpZHMoNSksXHJcbiAgICAgICAgeTogd2l0aEdyaWRzKDYpLFxyXG4gICAgICAgIHNyYzogXCIvcHVibGljL2ltYWdlcy9jaGFyYWN0ZXJzL3Blb3BsZS9oZXJvLnBuZ1wiLFxyXG4gICAgICB9KSxcclxuICAgICAgLy8gbnBjMTogbmV3IEdhbWVPYmplY3Qoe1xyXG4gICAgICAvLyAgIHg6IHdpdGhHcmlkcyg3KSxcclxuICAgICAgLy8gICB5OiB3aXRoR3JpZHMoOSksXHJcbiAgICAgIC8vICAgc3JjOiBcIi9wdWJsaWMvaW1hZ2VzL2NoYXJhY3RlcnMvcGVvcGxlL25wYzEucG5nIFwiLFxyXG4gICAgICAvLyB9KSxcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbiAgS2l0Y2hlbjoge1xyXG4gICAgbG93ZXJTcmM6IFwiL3B1YmxpYy9pbWFnZXMvbWFwcy9LaXRjaGVuTG93ZXIucG5nXCIsXHJcbiAgICB1cHBlclNyYzogXCIvcHVibGljL2ltYWdlcy9tYXBzL0tpdGNoZW5VcHBlci5wbmdcIixcclxuICAgIGdhbWVPYmplY3RzOiB7XHJcbiAgICAgIC8vIGhlcm86IG5ldyBHYW1lT2JqZWN0KHtcclxuICAgICAgLy8gICB4OiB3aXRoR3JpZHMoMyksXHJcbiAgICAgIC8vICAgeTogd2l0aEdyaWRzKDUpLFxyXG4gICAgICAvLyB9KSxcclxuICAgICAgLy8gbnBjMTogbmV3IEdhbWVPYmplY3Qoe1xyXG4gICAgICAvLyAgIHg6IHdpdGhHcmlkcyg5KSxcclxuICAgICAgLy8gICB5OiB3aXRoR3JpZHMoNiksXHJcbiAgICAgIC8vICAgc3JjOiBcIi9wdWJsaWMvaW1hZ2VzL2NoYXJhY3RlcnMvcGVvcGxlL25wYzIucG5nIFwiLFxyXG4gICAgICAvLyB9KSxcclxuICAgICAgLy8gbnBjMzogbmV3IEdhbWVPYmplY3Qoe1xyXG4gICAgICAvLyAgIHg6IHdpdGhHcmlkcygxMCksXHJcbiAgICAgIC8vICAgeTogd2l0aEdyaWRzKDgpLFxyXG4gICAgICAvLyAgIHNyYzogXCIvcHVibGljL2ltYWdlcy9jaGFyYWN0ZXJzL3Blb3BsZS9ucGMzLnBuZyBcIixcclxuICAgICAgLy8gfSksXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbiIsImNsYXNzIERpcmVjdGlvbklucHV0IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuaGVsZERpcmVjdGlvbnMgPSBbXTtcclxuICAgIHRoaXMubWFwID0ge1xyXG4gICAgICBBcnJvd1VwOiBcInVwXCIsXHJcbiAgICAgIEtleVc6IFwidXBcIixcclxuICAgICAgQXJyb3dEb3duOiBcImRvd25cIixcclxuICAgICAgS2V5UzogXCJkb3duXCIsXHJcbiAgICAgIEFycm93TGVmdDogXCJsZWZ0XCIsXHJcbiAgICAgIEtleUE6IFwibGVmdFwiLFxyXG4gICAgICBBcnJvd1JpZ2h0OiBcInJpZ2h0XCIsXHJcbiAgICAgIEtleUQ6IFwicmlnaHRcIixcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBpbml0KCkge1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcclxuICAgICAgY29uc3QgZGlyID0gdGhpcy5tYXBbZS5jb2RlXTtcclxuXHJcbiAgICAgIGlmIChkaXIgJiYgdGhpcy5oZWxkRGlyZWN0aW9ucy5pbmRleE9mKGRpcikgPT09IC0xKSB7XHJcbiAgICAgICAgdGhpcy5oZWxkRGlyZWN0aW9ucy51bnNoaWZ0KGRpcik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoZSkgPT4ge1xyXG4gICAgICBjb25zdCBkaXIgPSB0aGlzLm1hcFtlLmNvZGVdO1xyXG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMuaGVsZERpcmVjdGlvbnMuaW5kZXhPZihkaXIpO1xyXG4gICAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICAgIHRoaXMuaGVsZERpcmVjdGlvbnMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXQgZGlyZWN0aW9uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaGVsZERpcmVjdGlvbnNbMF07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEaXJlY3Rpb25JbnB1dDtcclxuIiwiaW1wb3J0IFNwcml0ZSBmcm9tIFwiLi9TcHJpdGVcIjtcclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBHYW1lT2JqZWN0XHJcbiAqL1xyXG5jbGFzcyBHYW1lT2JqZWN0IHtcclxuICAvKipcclxuICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGNvbmZpZy54XHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGNvbmZpZy55XHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IGNvbmZpZy5zcmNcclxuICAgKiBAcGFyYW0geydkb3duJyB8ICd1cCcgfCAnbGVmdCcgfCAncmlnaHQnIHwgbnVsbH0gY29uZmlnLmRpcmVjdGlvblxyXG4gICAqIEBwYXJhbSB7Qm9vbGVhbiB8IG51bGx9IGNvbmZpZy51c2VTaGFkb3dcclxuICAgKiBAcGFyYW0ge051bWJlcn0gY29uZmlnLnNxdWFyZVNpemVcclxuICAgKiBAcGFyYW0ge3t4OiBOdW1iZXIsIHk6IE51bWJlcn0gfCBudWxsfSBjb25maWcucmVtb3ZlU3F1YXJlU2l6ZVxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xyXG4gICAgdGhpcy54ID0gY29uZmlnLnggfHwgMDtcclxuICAgIHRoaXMueSA9IGNvbmZpZy55IHx8IDA7XHJcbiAgICB0aGlzLmRpcmVjdGlvbiA9IGNvbmZpZy5kaXJlY3Rpb24gfHwgXCJkb3duXCI7XHJcbiAgICB0aGlzLnNwcml0ZSA9IG5ldyBTcHJpdGUoe1xyXG4gICAgICBnYW1lT2JqZWN0OiB0aGlzLFxyXG4gICAgICBzcmM6IGNvbmZpZy5zcmMsXHJcbiAgICAgIHVzZVNoYWRvdzpcclxuICAgICAgICBjb25maWcudXNlU2hhZG93ICE9PSBudWxsIHx8IGNvbmZpZy51c2VTaGFkb3cgIT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgPyBjb25maWcudXNlU2hhZG93XHJcbiAgICAgICAgICA6IHRydWUsXHJcbiAgICAgIHNxdWFyZVNpemU6IGNvbmZpZy5zcXVhcmVTaXplID8gY29uZmlnLnNxdWFyZVNpemUgOiAzMixcclxuICAgICAgcmVtb3ZlU3F1YXJlU2l6ZTogY29uZmlnLnJlbW92ZVNxdWFyZVNpemVcclxuICAgICAgICA/IGNvbmZpZy5yZW1vdmVTcXVhcmVTaXplXHJcbiAgICAgICAgOiB7IHg6IDgsIHk6IDE4IH0sXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSgpIHt9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbWVPYmplY3Q7XHJcbiIsImltcG9ydCB7IE92ZXJXb3JsZE1hcHNMaXN0IH0gZnJvbSBcIi4uL0RhdGEvQWxsTWFwTGlzdFwiO1xyXG5pbXBvcnQgR2FtZU9iamVjdCBmcm9tIFwiLi9HYW1lT2JqZWN0XCI7XHJcbmltcG9ydCBQZXJzb24gZnJvbSBcIi4vUGVyc29uXCI7XHJcbmltcG9ydCBPdmVyV29ybGRNYXAgZnJvbSBcIi4vT3ZlcldvcmxkTWFwXCI7XHJcbmltcG9ydCBEaXJlY3Rpb25JbnB1dCBmcm9tIFwiLi9EaXJlY3Rpb25JbnB1dFwiO1xyXG5cclxuY2xhc3MgT3ZlcldvcmxkIHtcclxuICAvKipcclxuICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXHJcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gY29uZmlnLmVsZW1lbnRcclxuICAgKiBAcGFyYW0geydoZWhlJ3wnaGFoYSd9IGNvbmZpZy50ZXN0XHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XHJcbiAgICBjb25zdCB7IGVsZW1lbnQgfSA9IGNvbmZpZztcclxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAdHlwZSB7SFRNTENhbnZhc0VsZW1lbnR9XHJcbiAgICAgKi9cclxuICAgIHRoaXMuY2FudmFzID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZS1jYW52YXNcIik7IC8vSFRNTENhbnZhc0VsZW1lbnRcclxuXHJcbiAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEB0eXBlIHtPdmVyV29ybGRNYXAgfCBudWxsfVxyXG4gICAgICovXHJcbiAgICB0aGlzLm1hcCA9IG51bGw7XHJcbiAgfVxyXG5cclxuICBzdGFydEdhbWVMb29wKCkge1xyXG4gICAgY29uc3Qgc3RlcCA9ICgpID0+IHtcclxuICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xyXG5cclxuICAgICAgLy8gQ2xlYXIgQ2FudmFzXHJcbiAgICAgIHRoaXMubWFwLmRyYXdMb3dlckltYWdlKHRoaXMuY3R4KTtcclxuXHJcbiAgICAgIE9iamVjdC52YWx1ZXModGhpcy5tYXAuZ2FtZU9iamVjdHMpLmZvckVhY2goXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQHBhcmFtIHtHYW1lT2JqZWN0IHwgUGVyc29ufSBvYmpcclxuICAgICAgICAgKi9cclxuICAgICAgICAob2JqKSA9PiB7XHJcbiAgICAgICAgICBvYmoudXBkYXRlKHtcclxuICAgICAgICAgICAgYXJyb3c6IHRoaXMuZGlyZWN0aW9uQ29udHJvbGxlci5kaXJlY3Rpb24sXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIG9iai5zcHJpdGUuZHJhdyh0aGlzLmN0eCk7XHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG5cclxuICAgICAgdGhpcy5tYXAuZHJhd1VwcGVySW1hZ2UodGhpcy5jdHgpO1xyXG5cclxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcclxuICAgICAgICBzdGVwKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBzdGVwKCk7XHJcbiAgfVxyXG5cclxuICBpbml0KCkge1xyXG4gICAgdGhpcy5tYXAgPSBuZXcgT3ZlcldvcmxkTWFwKE92ZXJXb3JsZE1hcHNMaXN0LkRlbW9Sb29tKTtcclxuXHJcbiAgICB0aGlzLmRpcmVjdGlvbkNvbnRyb2xsZXIgPSBuZXcgRGlyZWN0aW9uSW5wdXQoKTtcclxuICAgIHRoaXMuZGlyZWN0aW9uQ29udHJvbGxlci5pbml0KCk7XHJcblxyXG4gICAgLy8gU3RhcnQgR2FtZSBMb29wXHJcbiAgICB0aGlzLnN0YXJ0R2FtZUxvb3AoKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE92ZXJXb3JsZDtcclxuIiwiLyoqXHJcbiAqIEBuYW1lIE92ZXJXb3JsTWFwXHJcbiAqL1xyXG5jbGFzcyBPdmVyV29ybGRNYXAge1xyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcclxuICAgKiBAcGFyYW0ge1N0cmluZ30gY29uZmlnLmxvd2VyU3JjXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IGNvbmZpZy51cHBlclNyY1xyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xyXG4gICAgdGhpcy5nYW1lT2JqZWN0cyA9IGNvbmZpZy5nYW1lT2JqZWN0cztcclxuXHJcbiAgICB0aGlzLmxvd2VyTGF5ZXIgPSBuZXcgSW1hZ2UoKTtcclxuICAgIHRoaXMubG93ZXJMYXllci5zcmMgPSBjb25maWcubG93ZXJTcmM7XHJcblxyXG4gICAgdGhpcy51cHBlckxheWVyID0gbmV3IEltYWdlKCk7XHJcbiAgICB0aGlzLnVwcGVyTGF5ZXIuc3JjID0gY29uZmlnLnVwcGVyU3JjO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtDYW52YXNSZW5kZXJpbmdDb250ZXh0MkR9IGN0eFxyXG4gICAqL1xyXG4gIGRyYXdMb3dlckltYWdlKGN0eCkge1xyXG4gICAgY3R4LmRyYXdJbWFnZSh0aGlzLmxvd2VyTGF5ZXIsIDAsIDApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtDYW52YXNSZW5kZXJpbmdDb250ZXh0MkR9IGN0eFxyXG4gICAqL1xyXG4gIGRyYXdVcHBlckltYWdlKGN0eCkge1xyXG4gICAgY3R4LmRyYXdJbWFnZSh0aGlzLnVwcGVyTGF5ZXIsIDAsIDApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgT3ZlcldvcmxkTWFwO1xyXG4iLCJpbXBvcnQgR2FtZU9iamVjdCBmcm9tIFwiLi9HYW1lT2JqZWN0XCI7XHJcblxyXG5jbGFzcyBQZXJzb24gZXh0ZW5kcyBHYW1lT2JqZWN0IHtcclxuICAvKipcclxuICAgKiBAcGFyYW0ge0dhbWVPYmplY3R9IHByb3BzXHJcbiAgICogQHBhcmFtIHtCb29sZWFufSBwcm9wcy5pc1BsYXllckNvbnRyb2xsZWRcclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMubW92aW5nUHJvZ3Jlc3NSZW1haW5pZyA9IDA7XHJcblxyXG4gICAgdGhpcy5pc1BsYXllckNvbnRyb2xsZWQgPSBwcm9wcy5pc1BsYXllckNvbnRyb2xsZWQgfHwgZmFsc2U7XHJcblxyXG4gICAgdGhpcy5kaXJlY3Rpb25VcGRhdGUgPSB7XHJcbiAgICAgIHVwOiBbXCJ5XCIsIC0xXSxcclxuICAgICAgZG93bjogW1wieVwiLCAxXSxcclxuICAgICAgbGVmdDogW1wieFwiLCAtMV0sXHJcbiAgICAgIHJpZ2h0OiBbXCJ4XCIsIDFdLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZVxyXG4gICAqIEBwYXJhbSB7J2Rvd24nIHwgJ3VwJyB8ICdsZWZ0JyB8ICdyaWdodCcgfSBzdGF0ZS5hcnJvd1xyXG4gICAqL1xyXG4gIHVwZGF0ZShzdGF0ZSkge1xyXG4gICAgdGhpcy51cGRhdGVQb3NpdGlvbigpO1xyXG4gICAgdGhpcy51cGRhdGVTcHJpbnQoc3RhdGUpO1xyXG5cclxuICAgIGlmIChcclxuICAgICAgdGhpcy5pc1BsYXllckNvbnRyb2xsZWQgJiZcclxuICAgICAgdGhpcy5tb3ZpbmdQcm9ncmVzc1JlbWFpbmlnID09PSAwICYmXHJcbiAgICAgIHN0YXRlLmFycm93XHJcbiAgICApIHtcclxuICAgICAgdGhpcy5kaXJlY3Rpb24gPSBzdGF0ZS5hcnJvdztcclxuICAgICAgdGhpcy5tb3ZpbmdQcm9ncmVzc1JlbWFpbmlnID0gMTY7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVQb3NpdGlvbigpIHtcclxuICAgIGlmICh0aGlzLm1vdmluZ1Byb2dyZXNzUmVtYWluaWcgPiAwKSB7XHJcbiAgICAgIGNvbnN0IFtwcm9wZXJ0eSwgY2hhbmdlXSA9IHRoaXMuZGlyZWN0aW9uVXBkYXRlW3RoaXMuZGlyZWN0aW9uXTtcclxuICAgICAgdGhpc1twcm9wZXJ0eV0gKz0gY2hhbmdlO1xyXG4gICAgICB0aGlzLm1vdmluZ1Byb2dyZXNzUmVtYWluaWcgLT0gMTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZVNwcmludChzdGF0ZSkge1xyXG4gICAgLy8gY29uc29sZS5sb2coc3RhdGUpO2NhcGl0YWxpemVGaXJzdExldHRlclxyXG4gICAgaWYgKFxyXG4gICAgICB0aGlzLmlzUGxheWVyQ29udHJvbGxlZCAmJlxyXG4gICAgICB0aGlzLm1vdmluZ1Byb2dyZXNzUmVtYWluaWcgPT09IDAgJiZcclxuICAgICAgIXN0YXRlLmFycm93XHJcbiAgICApIHtcclxuICAgICAgdGhpcy5zcHJpdGUuc2V0QW5pbWF0aW9uKFwiaWRsZVwiICsgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHRoaXMuZGlyZWN0aW9uKSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMubW92aW5nUHJvZ3Jlc3NSZW1haW5pZyA+IDApIHtcclxuICAgICAgdGhpcy5zcHJpdGUuc2V0QW5pbWF0aW9uKFwid2Fsa1wiICsgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHRoaXMuZGlyZWN0aW9uKSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjYXBpdGFsaXplRmlyc3RMZXR0ZXIoc3RyaW5nKSB7XHJcbiAgcmV0dXJuIHN0cmluZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGVyc29uO1xyXG4iLCJpbXBvcnQgeyBkcmF3SW1hZ2UgfSBmcm9tIFwiLi4vdXRpbHMvaGVscGVyXCI7XHJcbmltcG9ydCBHYW1lT2JqZWN0IGZyb20gXCIuL0dhbWVPYmplY3RcIjtcclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBTcHJpdGVcclxuICovXHJcbmNsYXNzIFNwcml0ZSB7XHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcuYW5pbWF0aW9uc1xyXG4gICAqIEBwYXJhbSB7J2lkbGVEb3duJyB8ICdpZGxlUmlnaHQnIHwgJ2lkbGVVcCcgfCAnaWRsZUxlZnQnIHwgJ3dhbGtEb3duJyB8J3dhbGtSaWdodCcgfCAnd2Fsa1VwJyB8ICd3YWxrTGVmdCcgfSBjb25maWcuY3VycmVudEFuaW1hdGlvblxyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBjb25maWcuc3JjXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGNvbmZpZy5zcXVhcmVTaXplXHJcbiAgICogQHBhcmFtIHtHYW1lT2JqZWN0fSBjb25maWcuZ2FtZU9iamVjdFxyXG4gICAqIEBwYXJhbSB7TnVtYmVyIHwgbnVsbH0gY29uZmlnLmFuaW1hdGlvbkZyYW1lTGltaXRcclxuICAgKiBAcGFyYW0ge3sgIHg6IE51bWJlciwgeTogTnVtYmVyfSB8IG51bGx9IGNvbmZpZy5yZW1vdmVTcXVhcmVTaXplXHJcbiAgICogQHBhcmFtIHtCb29sZWFufSBjb25maWcudXNlU2hhZG93XHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XHJcbiAgICAvLyBTcXVhcmVTaXplIERlZmF1bHQgMzJcclxuICAgIHRoaXMuc3F1YXJlU2l6ZSA9IGNvbmZpZy5zcXVhcmVTaXplIHx8IDMyO1xyXG4gICAgdGhpcy5yZW1vdmVTcXVhcmVTaXplID0gY29uZmlnLnJlbW92ZVNxdWFyZVNpemVcclxuICAgICAgPyBjb25maWcucmVtb3ZlU3F1YXJlU2l6ZVxyXG4gICAgICA6IHsgeDogOCwgeTogMTggfTtcclxuXHJcbiAgICAvLyBTZXR1cCB0aGUgaW1hZ2VcclxuICAgIGRyYXdJbWFnZShcclxuICAgICAgY29uZmlnLnNyYyB8fCBcIi9wdWJsaWMvaW1hZ2VzL2NoYXJhY3RlcnMvcGVvcGxlL2hlcm8ucG5nXCIsXHJcbiAgICAgIChpbWFnZSkgPT4ge1xyXG4gICAgICAgIHRoaXMuaW1hZ2UgPSBpbWFnZTtcclxuICAgICAgICB0aGlzLmltYWdlSXNMb2FkZWQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIC8vIFNoYWRvdyBJbWFnZVxyXG4gICAgdGhpcy51c2VTaGFkb3cgPSBjb25maWcudXNlU2hhZG93IHx8IGZhbHNlO1xyXG4gICAgaWYgKHRoaXMudXNlU2hhZG93KSB7XHJcbiAgICAgIGRyYXdJbWFnZShcIi9wdWJsaWMvaW1hZ2VzL2NoYXJhY3RlcnMvc2hhZG93LnBuZ1wiLCAoaW1hZ2UpID0+IHtcclxuICAgICAgICB0aGlzLnNoYWRvd0ltYWdlID0gaW1hZ2U7XHJcbiAgICAgICAgdGhpcy5zaGFkb3dJbWFnZUxvYWRlZCA9IHRydWU7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENvbmZpdXJlIEFuaW1hdGlvbiBBbmQgSW5pdGlhbCBTdGF0ZVxyXG4gICAgdGhpcy5hbmltYXRpb25zID0gY29uZmlnLmFuaW1hdGlvbnMgfHwge1xyXG4gICAgICBpZGxlRG93bjogW1swLCAwXV0sXHJcbiAgICAgIGlkbGVSaWdodDogW1swLCAxXV0sXHJcbiAgICAgIGlkbGVVcDogW1swLCAyXV0sXHJcbiAgICAgIGlkbGVMZWZ0OiBbWzAsIDNdXSxcclxuICAgICAgd2Fsa0Rvd246IFtcclxuICAgICAgICBbMSwgMF0sIC8vIGltYWdlIHJvdyAxIGNvbCAxXHJcbiAgICAgICAgWzAsIDBdLCAvLyBpbWFnZSByb3cgMSBjb2wgMlxyXG4gICAgICAgIFszLCAwXSwgLy8gaW1hZ2Ugcm93IDEgY29sIDRcclxuICAgICAgICBbMCwgMF0sIC8vIGltYWdlIHJvdyAxIGNvbCAyXHJcbiAgICAgIF0sXHJcbiAgICAgIHdhbGtSaWdodDogW1xyXG4gICAgICAgIFsxLCAxXSwgLy8gaW1hZ2Ugcm93IDEgY29sIDFcclxuICAgICAgICBbMCwgMV0sIC8vIGltYWdlIHJvdyAxIGNvbCAyXHJcbiAgICAgICAgWzMsIDFdLCAvLyBpbWFnZSByb3cgMSBjb2wgNFxyXG4gICAgICAgIFswLCAxXSwgLy8gaW1hZ2Ugcm93IDEgY29sIDJcclxuICAgICAgXSxcclxuICAgICAgd2Fsa1VwOiBbXHJcbiAgICAgICAgWzEsIDJdLCAvLyBpbWFnZSByb3cgMSBjb2wgMVxyXG4gICAgICAgIFswLCAyXSwgLy8gaW1hZ2Ugcm93IDEgY29sIDJcclxuICAgICAgICBbMywgMl0sIC8vIGltYWdlIHJvdyAxIGNvbCA0XHJcbiAgICAgICAgWzAsIDJdLCAvLyBpbWFnZSByb3cgMSBjb2wgMlxyXG4gICAgICBdLFxyXG4gICAgICB3YWxrTGVmdDogW1xyXG4gICAgICAgIFsxLCAzXSwgLy8gaW1hZ2Ugcm93IDEgY29sIDFcclxuICAgICAgICBbMCwgM10sIC8vIGltYWdlIHJvdyAxIGNvbCAyXHJcbiAgICAgICAgWzMsIDNdLCAvLyBpbWFnZSByb3cgMSBjb2wgNFxyXG4gICAgICAgIFswLCAzXSwgLy8gaW1hZ2Ugcm93IDEgY29sIDJcclxuICAgICAgXSxcclxuICAgIH07XHJcblxyXG4gICAgLy8gU2V0IEFuaW1hdGlvbiBGcmFtZVxyXG4gICAgdGhpcy5jdXJyZW50QW5pbWF0aW9uID0gY29uZmlnLmN1cnJlbnRBbmltYXRpb24gfHwgXCJpZGxlRG93blwiO1xyXG4gICAgdGhpcy5jdXJyZW50QW5pbWF0aW9uRnJhbWUgPSAwO1xyXG4gICAgdGhpcy5hbmltYXRpb25GcmFtZUxpbWl0ID0gY29uZmlnLmFuaW1hdGlvbkZyYW1lTGltaXQgfHwgMTA7XHJcbiAgICB0aGlzLmFuaW1hdGlvbkZyYW1lUHJvZ3Jlc3MgPSB0aGlzLmFuaW1hdGlvbkZyYW1lTGltaXQ7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCIgdGhpcy5hbmltYXRpb25GcmFtZVByb2dyZXNzXCIsIHRoaXMuYW5pbWF0aW9uRnJhbWVQcm9ncmVzcyk7XHJcbiAgICAvL1xyXG4gICAgdGhpcy5nYW1lT2JqZWN0ID0gY29uZmlnLmdhbWVPYmplY3Q7XHJcbiAgfVxyXG5cclxuICAvLyBHZXQgQ3VycmVudCBBbmltYXRpb24gRnJhbWVcclxuICBnZXQgZnJhbWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5hbmltYXRpb25zW3RoaXMuY3VycmVudEFuaW1hdGlvbl1bdGhpcy5jdXJyZW50QW5pbWF0aW9uRnJhbWVdO1xyXG4gIH1cclxuXHJcbiAgc2V0QW5pbWF0aW9uKGtleSkge1xyXG4gICAgaWYgKHRoaXMuY3VycmVudEFuaW1hdGlvbiAhPT0ga2V5KSB7XHJcbiAgICAgIHRoaXMuY3VycmVudEFuaW1hdGlvbiA9IGtleTtcclxuICAgICAgdGhpcy5jdXJyZW50QW5pbWF0aW9uRnJhbWUgPSAwO1xyXG4gICAgICB0aGlzLmFuaW1hdGlvbkZyYW1lUHJvZ3Jlc3MgPSB0aGlzLmFuaW1hdGlvbkZyYW1lTGltaXQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVBbmltYXRpb25Qcm9ncmVzcygpIHtcclxuICAgIC8vIERvd250aWNrIEZyYW1lIFByb2dyZXNzXHJcbiAgICBpZiAodGhpcy5hbmltYXRpb25GcmFtZVByb2dyZXNzID4gMCkge1xyXG4gICAgICB0aGlzLmFuaW1hdGlvbkZyYW1lUHJvZ3Jlc3MgLT0gMTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJlc2V0IHRoZSBjb3VudGVyXHJcbiAgICB0aGlzLmFuaW1hdGlvbkZyYW1lUHJvZ3Jlc3MgPSB0aGlzLmFuaW1hdGlvbkZyYW1lTGltaXQ7XHJcbiAgICB0aGlzLmN1cnJlbnRBbmltYXRpb25GcmFtZSArPSAxO1xyXG5cclxuICAgIGlmICh0aGlzLmZyYW1lID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5jdXJyZW50QW5pbWF0aW9uRnJhbWUgPSAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRHJhdyBDb250ZXh0XHJcbiAgICogQHBhcmFtIHtDYW52YXNSZW5kZXJpbmdDb250ZXh0MkR9IGN0eFxyXG4gICAqL1xyXG4gIGRyYXcoY3R4KSB7XHJcbiAgICBjb25zdCB4ID0gdGhpcy5nYW1lT2JqZWN0LnggLSB0aGlzLnJlbW92ZVNxdWFyZVNpemUueDsgLy8gUmVtb3ZlIFVubmVjZXNzYXJ5IHdpZHRoXHJcbiAgICBjb25zdCB5ID0gdGhpcy5nYW1lT2JqZWN0LnkgLSB0aGlzLnJlbW92ZVNxdWFyZVNpemUueTsgLy8gUmVtb3ZlIFVubmVjZXNzYXJ5IGhlaWdodFxyXG4gICAgY29uc3QgW2ZyYW1lWCwgZnJhbWVZXSA9IHRoaXMuZnJhbWU7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmZyYW1lKTtcclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIkZyYW1lWFwiLCBmcmFtZVgpO1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJGcmFtZVlcIiwgZnJhbWVZKTtcclxuXHJcbiAgICAvLyBXaGVuIEltYWdlIExvYWRpbmdcclxuICAgIHRoaXMuaW1hZ2VJc0xvYWRlZCAmJlxyXG4gICAgICBjdHguZHJhd0ltYWdlKFxyXG4gICAgICAgIHRoaXMuaW1hZ2UsIC8vIEluc2VydCBJbWFnZVxyXG4gICAgICAgIGZyYW1lWCAqIDMyLCAvLyBYIGZyb20gSW1hZ2VcclxuICAgICAgICBmcmFtZVkgKiAzMiwgLy8gWSBmcm9tIEltYWdlXHJcbiAgICAgICAgdGhpcy5zcXVhcmVTaXplLCAvLyBXaWR0aCBGcm9tIEltYWdlLFxyXG4gICAgICAgIHRoaXMuc3F1YXJlU2l6ZSwgLy8gSGVpZ2h0IEZyb20gSW1hZ2VcclxuICAgICAgICB4LCAvLyBYIGZvciBDYW52YXNcclxuICAgICAgICB5LCAvLyBZIGZvciBDYW52YXNcclxuICAgICAgICB0aGlzLnNxdWFyZVNpemUsIC8vIFdpZHRoIEZvciBDYW52YXNcclxuICAgICAgICB0aGlzLnNxdWFyZVNpemUgLy8gSGVpZ2h0IEZvciBDYW52YXNcclxuICAgICAgKTtcclxuXHJcbiAgICAvLyBDYWxsIEFuaW1hdGlvblxyXG4gICAgdGhpcy51cGRhdGVBbmltYXRpb25Qcm9ncmVzcygpO1xyXG5cclxuICAgIHRoaXMuc2hhZG93SW1hZ2VMb2FkZWQgJiZcclxuICAgICAgY3R4LmRyYXdJbWFnZShcclxuICAgICAgICB0aGlzLnNoYWRvd0ltYWdlLCAvLyBJbnNlcnQgSW1hZ2VcclxuICAgICAgICB4LCAvLyBYIGZvciBDYW52YXNcclxuICAgICAgICB5IC8vIFkgZm9yIENhbnZhc1xyXG4gICAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3ByaXRlO1xyXG4iLCJleHBvcnQgY29uc3QgZHJhd0ltYWdlID0gKHNyYywgY2IpID0+IHtcclxuICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcclxuICBpbWcub25sb2FkID0gKCkgPT4ge1xyXG4gICAgaWYgKGNiKSB7XHJcbiAgICAgIGNiKGltZyk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBpbWcuc3JjID0gc3JjO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHdpdGhHcmlkcyA9IChuKSA9PiB7XHJcbiAgcmV0dXJuIG4gKiAxNjtcclxufTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgT3ZlcldvcmxkIGZyb20gXCIuL0dhbWUvT3ZlcldvcmxkXCI7XHJcblxyXG5jb25zdCB3b2xyZCA9IG5ldyBPdmVyV29ybGQoe1xyXG4gIGVsZW1lbnQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZS1jb250YWluZXJcIiksXHJcbn0pO1xyXG5cclxud29scmQuaW5pdCgpO1xyXG4iXSwibmFtZXMiOlsiR2FtZU9iamVjdCIsIlBlcnNvbiIsIndpdGhHcmlkcyIsIk92ZXJXb3JsZE1hcHNMaXN0IiwiRGVtb1Jvb20iLCJsb3dlclNyYyIsInVwcGVyU3JjIiwiZ2FtZU9iamVjdHMiLCJoZXJvIiwiaXNQbGF5ZXJDb250cm9sbGVkIiwieCIsInkiLCJzcmMiLCJLaXRjaGVuIiwiRGlyZWN0aW9uSW5wdXQiLCJjb25zdHJ1Y3RvciIsImhlbGREaXJlY3Rpb25zIiwibWFwIiwiQXJyb3dVcCIsIktleVciLCJBcnJvd0Rvd24iLCJLZXlTIiwiQXJyb3dMZWZ0IiwiS2V5QSIsIkFycm93UmlnaHQiLCJLZXlEIiwiaW5pdCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJkaXIiLCJjb2RlIiwiaW5kZXhPZiIsInVuc2hpZnQiLCJpbmRleCIsInNwbGljZSIsImRpcmVjdGlvbiIsIlNwcml0ZSIsImNvbmZpZyIsInNwcml0ZSIsImdhbWVPYmplY3QiLCJ1c2VTaGFkb3ciLCJ1bmRlZmluZWQiLCJzcXVhcmVTaXplIiwicmVtb3ZlU3F1YXJlU2l6ZSIsInVwZGF0ZSIsIk92ZXJXb3JsZE1hcCIsIk92ZXJXb3JsZCIsImVsZW1lbnQiLCJjYW52YXMiLCJxdWVyeVNlbGVjdG9yIiwiY3R4IiwiZ2V0Q29udGV4dCIsInN0YXJ0R2FtZUxvb3AiLCJzdGVwIiwiY2xlYXJSZWN0Iiwid2lkdGgiLCJoZWlnaHQiLCJkcmF3TG93ZXJJbWFnZSIsIk9iamVjdCIsInZhbHVlcyIsImZvckVhY2giLCJvYmoiLCJhcnJvdyIsImRpcmVjdGlvbkNvbnRyb2xsZXIiLCJkcmF3IiwiZHJhd1VwcGVySW1hZ2UiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJsb3dlckxheWVyIiwiSW1hZ2UiLCJ1cHBlckxheWVyIiwiZHJhd0ltYWdlIiwicHJvcHMiLCJtb3ZpbmdQcm9ncmVzc1JlbWFpbmlnIiwiZGlyZWN0aW9uVXBkYXRlIiwidXAiLCJkb3duIiwibGVmdCIsInJpZ2h0Iiwic3RhdGUiLCJ1cGRhdGVQb3NpdGlvbiIsInVwZGF0ZVNwcmludCIsInByb3BlcnR5IiwiY2hhbmdlIiwic2V0QW5pbWF0aW9uIiwiY2FwaXRhbGl6ZUZpcnN0TGV0dGVyIiwic3RyaW5nIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsImltYWdlIiwiaW1hZ2VJc0xvYWRlZCIsInNoYWRvd0ltYWdlIiwic2hhZG93SW1hZ2VMb2FkZWQiLCJhbmltYXRpb25zIiwiaWRsZURvd24iLCJpZGxlUmlnaHQiLCJpZGxlVXAiLCJpZGxlTGVmdCIsIndhbGtEb3duIiwid2Fsa1JpZ2h0Iiwid2Fsa1VwIiwid2Fsa0xlZnQiLCJjdXJyZW50QW5pbWF0aW9uIiwiY3VycmVudEFuaW1hdGlvbkZyYW1lIiwiYW5pbWF0aW9uRnJhbWVMaW1pdCIsImFuaW1hdGlvbkZyYW1lUHJvZ3Jlc3MiLCJjb25zb2xlIiwibG9nIiwiZnJhbWUiLCJrZXkiLCJ1cGRhdGVBbmltYXRpb25Qcm9ncmVzcyIsImZyYW1lWCIsImZyYW1lWSIsImNiIiwiaW1nIiwib25sb2FkIiwibiIsIndvbHJkIl0sInNvdXJjZVJvb3QiOiIifQ==