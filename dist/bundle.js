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
      }),
      npc1: new _Game_GameObject__WEBPACK_IMPORTED_MODULE_0__["default"]({
        x: (0,_utils_helper__WEBPACK_IMPORTED_MODULE_2__.withGrids)(7),
        y: (0,_utils_helper__WEBPACK_IMPORTED_MODULE_2__.withGrids)(9),
        src: "/public/images/characters/people/npc1.png "
      })
    }
  },
  Kitchen: {
    lowerSrc: "/public/images/maps/KitchenLower.png",
    upperSrc: "/public/images/maps/KitchenUpper.png",
    gameObjects: {
      hero: new _Game_GameObject__WEBPACK_IMPORTED_MODULE_0__["default"]({
        x: (0,_utils_helper__WEBPACK_IMPORTED_MODULE_2__.withGrids)(3),
        y: (0,_utils_helper__WEBPACK_IMPORTED_MODULE_2__.withGrids)(5)
      }),
      npc1: new _Game_GameObject__WEBPACK_IMPORTED_MODULE_0__["default"]({
        x: (0,_utils_helper__WEBPACK_IMPORTED_MODULE_2__.withGrids)(9),
        y: (0,_utils_helper__WEBPACK_IMPORTED_MODULE_2__.withGrids)(6),
        src: "/public/images/characters/people/npc2.png "
      }),
      npc3: new _Game_GameObject__WEBPACK_IMPORTED_MODULE_0__["default"]({
        x: (0,_utils_helper__WEBPACK_IMPORTED_MODULE_2__.withGrids)(10),
        y: (0,_utils_helper__WEBPACK_IMPORTED_MODULE_2__.withGrids)(8),
        src: "/public/images/characters/people/npc3.png "
      })
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
   * @param {'idleDown'| 'walkDown' | null} config.currentAnimation
   * @param {String} config.src
   * @param {Number} config.squareSize
   * @param {GameObject} config.gameObject
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
      walkDown: [[0, 0], // image row 1 col 1
      [1, 0], // image row 1 col 2
      [2, 0], // image row 1 col 3
      [3, 0] // image row 1 col 4
      ]
    };
    this.currentAnimation = config.currentAnimation || "idleDown";
    this.currentAnimationFrame = 0; //

    this.gameObject = config.gameObject;
  }
  /**
   * Draw Context
   * @param {CanvasRenderingContext2D} ctx
   */


  draw(ctx) {
    var x = this.gameObject.x - this.removeSquareSize.x; // Remove Unnecessary width

    var y = this.gameObject.y - this.removeSquareSize.y; // Remove Unnecessary height
    // When Image Loading

    this.imageIsLoaded && ctx.drawImage(this.image, // Insert Image
    0, // X from Image
    0, // Y from Image
    this.squareSize, // Width From Image,
    this.squareSize, // Height From Image
    x, // X for Canvas
    y, // Y for Canvas
    this.squareSize, // Width For Canvas
    this.squareSize // Height For Canvas
    );
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTkE7QUFFQSxJQUFNQyxLQUFLLEdBQUcsSUFBSWpELHVEQUFKLENBQWM7QUFDMUJDLEVBQUFBLE9BQU8sRUFBRXJCLFFBQVEsQ0FBQ3VCLGFBQVQsQ0FBdUIsaUJBQXZCO0FBRGlCLENBQWQsQ0FBZDtBQUlBOEMsS0FBSyxDQUFDdEUsSUFBTixHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcnBnLWdhbWUvLi9zcmMvRGF0YS9BbGxNYXBMaXN0LmpzIiwid2VicGFjazovL3JwZy1nYW1lLy4vc3JjL0dhbWUvRGlyZWN0aW9uSW5wdXQuanMiLCJ3ZWJwYWNrOi8vcnBnLWdhbWUvLi9zcmMvR2FtZS9HYW1lT2JqZWN0LmpzIiwid2VicGFjazovL3JwZy1nYW1lLy4vc3JjL0dhbWUvT3ZlcldvcmxkLmpzIiwid2VicGFjazovL3JwZy1nYW1lLy4vc3JjL0dhbWUvT3ZlcldvcmxkTWFwLmpzIiwid2VicGFjazovL3JwZy1nYW1lLy4vc3JjL0dhbWUvUGVyc29uLmpzIiwid2VicGFjazovL3JwZy1nYW1lLy4vc3JjL0dhbWUvU3ByaXRlLmpzIiwid2VicGFjazovL3JwZy1nYW1lLy4vc3JjL3V0aWxzL2hlbHBlci5qcyIsIndlYnBhY2s6Ly9ycGctZ2FtZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9ycGctZ2FtZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcnBnLWdhbWUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9ycGctZ2FtZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3JwZy1nYW1lLy4vc3JjL2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZU9iamVjdCBmcm9tIFwiLi4vR2FtZS9HYW1lT2JqZWN0XCI7XHJcbmltcG9ydCBQZXJzb24gZnJvbSBcIi4uL0dhbWUvUGVyc29uXCI7XHJcbmltcG9ydCB7IHdpdGhHcmlkcyB9IGZyb20gXCIuLi91dGlscy9oZWxwZXJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBPdmVyV29ybGRNYXBzTGlzdCA9IHtcclxuICBEZW1vUm9vbToge1xyXG4gICAgbG93ZXJTcmM6IFwiL3B1YmxpYy9pbWFnZXMvbWFwcy9EZW1vTG93ZXIucG5nXCIsXHJcbiAgICB1cHBlclNyYzogXCIvcHVibGljL2ltYWdlcy9tYXBzL0RlbW9VcHBlci5wbmdcIixcclxuICAgIGdhbWVPYmplY3RzOiB7XHJcbiAgICAgIGhlcm86IG5ldyBQZXJzb24oe1xyXG4gICAgICAgIGlzUGxheWVyQ29udHJvbGxlZDogdHJ1ZSxcclxuICAgICAgICB4OiB3aXRoR3JpZHMoNSksXHJcbiAgICAgICAgeTogd2l0aEdyaWRzKDYpLFxyXG4gICAgICAgIHNyYzogXCIvcHVibGljL2ltYWdlcy9jaGFyYWN0ZXJzL3Blb3BsZS9oZXJvLnBuZ1wiLFxyXG4gICAgICB9KSxcclxuICAgICAgbnBjMTogbmV3IEdhbWVPYmplY3Qoe1xyXG4gICAgICAgIHg6IHdpdGhHcmlkcyg3KSxcclxuICAgICAgICB5OiB3aXRoR3JpZHMoOSksXHJcbiAgICAgICAgc3JjOiBcIi9wdWJsaWMvaW1hZ2VzL2NoYXJhY3RlcnMvcGVvcGxlL25wYzEucG5nIFwiLFxyXG4gICAgICB9KSxcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbiAgS2l0Y2hlbjoge1xyXG4gICAgbG93ZXJTcmM6IFwiL3B1YmxpYy9pbWFnZXMvbWFwcy9LaXRjaGVuTG93ZXIucG5nXCIsXHJcbiAgICB1cHBlclNyYzogXCIvcHVibGljL2ltYWdlcy9tYXBzL0tpdGNoZW5VcHBlci5wbmdcIixcclxuICAgIGdhbWVPYmplY3RzOiB7XHJcbiAgICAgIGhlcm86IG5ldyBHYW1lT2JqZWN0KHtcclxuICAgICAgICB4OiB3aXRoR3JpZHMoMyksXHJcbiAgICAgICAgeTogd2l0aEdyaWRzKDUpLFxyXG4gICAgICB9KSxcclxuICAgICAgbnBjMTogbmV3IEdhbWVPYmplY3Qoe1xyXG4gICAgICAgIHg6IHdpdGhHcmlkcyg5KSxcclxuICAgICAgICB5OiB3aXRoR3JpZHMoNiksXHJcbiAgICAgICAgc3JjOiBcIi9wdWJsaWMvaW1hZ2VzL2NoYXJhY3RlcnMvcGVvcGxlL25wYzIucG5nIFwiLFxyXG4gICAgICB9KSxcclxuICAgICAgbnBjMzogbmV3IEdhbWVPYmplY3Qoe1xyXG4gICAgICAgIHg6IHdpdGhHcmlkcygxMCksXHJcbiAgICAgICAgeTogd2l0aEdyaWRzKDgpLFxyXG4gICAgICAgIHNyYzogXCIvcHVibGljL2ltYWdlcy9jaGFyYWN0ZXJzL3Blb3BsZS9ucGMzLnBuZyBcIixcclxuICAgICAgfSksXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbiIsImNsYXNzIERpcmVjdGlvbklucHV0IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuaGVsZERpcmVjdGlvbnMgPSBbXTtcclxuICAgIHRoaXMubWFwID0ge1xyXG4gICAgICBBcnJvd1VwOiBcInVwXCIsXHJcbiAgICAgIEtleVc6IFwidXBcIixcclxuICAgICAgQXJyb3dEb3duOiBcImRvd25cIixcclxuICAgICAgS2V5UzogXCJkb3duXCIsXHJcbiAgICAgIEFycm93TGVmdDogXCJsZWZ0XCIsXHJcbiAgICAgIEtleUE6IFwibGVmdFwiLFxyXG4gICAgICBBcnJvd1JpZ2h0OiBcInJpZ2h0XCIsXHJcbiAgICAgIEtleUQ6IFwicmlnaHRcIixcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBpbml0KCkge1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcclxuICAgICAgY29uc3QgZGlyID0gdGhpcy5tYXBbZS5jb2RlXTtcclxuXHJcbiAgICAgIGlmIChkaXIgJiYgdGhpcy5oZWxkRGlyZWN0aW9ucy5pbmRleE9mKGRpcikgPT09IC0xKSB7XHJcbiAgICAgICAgdGhpcy5oZWxkRGlyZWN0aW9ucy51bnNoaWZ0KGRpcik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoZSkgPT4ge1xyXG4gICAgICBjb25zdCBkaXIgPSB0aGlzLm1hcFtlLmNvZGVdO1xyXG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMuaGVsZERpcmVjdGlvbnMuaW5kZXhPZihkaXIpO1xyXG4gICAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICAgIHRoaXMuaGVsZERpcmVjdGlvbnMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXQgZGlyZWN0aW9uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaGVsZERpcmVjdGlvbnNbMF07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEaXJlY3Rpb25JbnB1dDtcclxuIiwiaW1wb3J0IFNwcml0ZSBmcm9tIFwiLi9TcHJpdGVcIjtcclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBHYW1lT2JqZWN0XHJcbiAqL1xyXG5jbGFzcyBHYW1lT2JqZWN0IHtcclxuICAvKipcclxuICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGNvbmZpZy54XHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGNvbmZpZy55XHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IGNvbmZpZy5zcmNcclxuICAgKiBAcGFyYW0geydkb3duJyB8ICd1cCcgfCAnbGVmdCcgfCAncmlnaHQnIHwgbnVsbH0gY29uZmlnLmRpcmVjdGlvblxyXG4gICAqIEBwYXJhbSB7Qm9vbGVhbiB8IG51bGx9IGNvbmZpZy51c2VTaGFkb3dcclxuICAgKiBAcGFyYW0ge051bWJlcn0gY29uZmlnLnNxdWFyZVNpemVcclxuICAgKiBAcGFyYW0ge3t4OiBOdW1iZXIsIHk6IE51bWJlcn0gfCBudWxsfSBjb25maWcucmVtb3ZlU3F1YXJlU2l6ZVxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xyXG4gICAgdGhpcy54ID0gY29uZmlnLnggfHwgMDtcclxuICAgIHRoaXMueSA9IGNvbmZpZy55IHx8IDA7XHJcbiAgICB0aGlzLmRpcmVjdGlvbiA9IGNvbmZpZy5kaXJlY3Rpb24gfHwgXCJkb3duXCI7XHJcbiAgICB0aGlzLnNwcml0ZSA9IG5ldyBTcHJpdGUoe1xyXG4gICAgICBnYW1lT2JqZWN0OiB0aGlzLFxyXG4gICAgICBzcmM6IGNvbmZpZy5zcmMsXHJcbiAgICAgIHVzZVNoYWRvdzpcclxuICAgICAgICBjb25maWcudXNlU2hhZG93ICE9PSBudWxsIHx8IGNvbmZpZy51c2VTaGFkb3cgIT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgPyBjb25maWcudXNlU2hhZG93XHJcbiAgICAgICAgICA6IHRydWUsXHJcbiAgICAgIHNxdWFyZVNpemU6IGNvbmZpZy5zcXVhcmVTaXplID8gY29uZmlnLnNxdWFyZVNpemUgOiAzMixcclxuICAgICAgcmVtb3ZlU3F1YXJlU2l6ZTogY29uZmlnLnJlbW92ZVNxdWFyZVNpemVcclxuICAgICAgICA/IGNvbmZpZy5yZW1vdmVTcXVhcmVTaXplXHJcbiAgICAgICAgOiB7IHg6IDgsIHk6IDE4IH0sXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSgpIHt9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbWVPYmplY3Q7XHJcbiIsImltcG9ydCB7IE92ZXJXb3JsZE1hcHNMaXN0IH0gZnJvbSBcIi4uL0RhdGEvQWxsTWFwTGlzdFwiO1xyXG5pbXBvcnQgR2FtZU9iamVjdCBmcm9tIFwiLi9HYW1lT2JqZWN0XCI7XHJcbmltcG9ydCBQZXJzb24gZnJvbSBcIi4vUGVyc29uXCI7XHJcbmltcG9ydCBPdmVyV29ybGRNYXAgZnJvbSBcIi4vT3ZlcldvcmxkTWFwXCI7XHJcbmltcG9ydCBEaXJlY3Rpb25JbnB1dCBmcm9tIFwiLi9EaXJlY3Rpb25JbnB1dFwiO1xyXG5cclxuY2xhc3MgT3ZlcldvcmxkIHtcclxuICAvKipcclxuICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXHJcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gY29uZmlnLmVsZW1lbnRcclxuICAgKiBAcGFyYW0geydoZWhlJ3wnaGFoYSd9IGNvbmZpZy50ZXN0XHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XHJcbiAgICBjb25zdCB7IGVsZW1lbnQgfSA9IGNvbmZpZztcclxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAdHlwZSB7SFRNTENhbnZhc0VsZW1lbnR9XHJcbiAgICAgKi9cclxuICAgIHRoaXMuY2FudmFzID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZS1jYW52YXNcIik7IC8vSFRNTENhbnZhc0VsZW1lbnRcclxuXHJcbiAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEB0eXBlIHtPdmVyV29ybGRNYXAgfCBudWxsfVxyXG4gICAgICovXHJcbiAgICB0aGlzLm1hcCA9IG51bGw7XHJcbiAgfVxyXG5cclxuICBzdGFydEdhbWVMb29wKCkge1xyXG4gICAgY29uc3Qgc3RlcCA9ICgpID0+IHtcclxuICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xyXG5cclxuICAgICAgLy8gQ2xlYXIgQ2FudmFzXHJcbiAgICAgIHRoaXMubWFwLmRyYXdMb3dlckltYWdlKHRoaXMuY3R4KTtcclxuXHJcbiAgICAgIE9iamVjdC52YWx1ZXModGhpcy5tYXAuZ2FtZU9iamVjdHMpLmZvckVhY2goXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQHBhcmFtIHtHYW1lT2JqZWN0IHwgUGVyc29ufSBvYmpcclxuICAgICAgICAgKi9cclxuICAgICAgICAob2JqKSA9PiB7XHJcbiAgICAgICAgICBvYmoudXBkYXRlKHtcclxuICAgICAgICAgICAgYXJyb3c6IHRoaXMuZGlyZWN0aW9uQ29udHJvbGxlci5kaXJlY3Rpb24sXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIG9iai5zcHJpdGUuZHJhdyh0aGlzLmN0eCk7XHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG5cclxuICAgICAgdGhpcy5tYXAuZHJhd1VwcGVySW1hZ2UodGhpcy5jdHgpO1xyXG5cclxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcclxuICAgICAgICBzdGVwKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBzdGVwKCk7XHJcbiAgfVxyXG5cclxuICBpbml0KCkge1xyXG4gICAgdGhpcy5tYXAgPSBuZXcgT3ZlcldvcmxkTWFwKE92ZXJXb3JsZE1hcHNMaXN0LkRlbW9Sb29tKTtcclxuXHJcbiAgICB0aGlzLmRpcmVjdGlvbkNvbnRyb2xsZXIgPSBuZXcgRGlyZWN0aW9uSW5wdXQoKTtcclxuICAgIHRoaXMuZGlyZWN0aW9uQ29udHJvbGxlci5pbml0KCk7XHJcblxyXG4gICAgLy8gU3RhcnQgR2FtZSBMb29wXHJcbiAgICB0aGlzLnN0YXJ0R2FtZUxvb3AoKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE92ZXJXb3JsZDtcclxuIiwiLyoqXHJcbiAqIEBuYW1lIE92ZXJXb3JsTWFwXHJcbiAqL1xyXG5jbGFzcyBPdmVyV29ybGRNYXAge1xyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcclxuICAgKiBAcGFyYW0ge1N0cmluZ30gY29uZmlnLmxvd2VyU3JjXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IGNvbmZpZy51cHBlclNyY1xyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xyXG4gICAgdGhpcy5nYW1lT2JqZWN0cyA9IGNvbmZpZy5nYW1lT2JqZWN0cztcclxuXHJcbiAgICB0aGlzLmxvd2VyTGF5ZXIgPSBuZXcgSW1hZ2UoKTtcclxuICAgIHRoaXMubG93ZXJMYXllci5zcmMgPSBjb25maWcubG93ZXJTcmM7XHJcblxyXG4gICAgdGhpcy51cHBlckxheWVyID0gbmV3IEltYWdlKCk7XHJcbiAgICB0aGlzLnVwcGVyTGF5ZXIuc3JjID0gY29uZmlnLnVwcGVyU3JjO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtDYW52YXNSZW5kZXJpbmdDb250ZXh0MkR9IGN0eFxyXG4gICAqL1xyXG4gIGRyYXdMb3dlckltYWdlKGN0eCkge1xyXG4gICAgY3R4LmRyYXdJbWFnZSh0aGlzLmxvd2VyTGF5ZXIsIDAsIDApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtDYW52YXNSZW5kZXJpbmdDb250ZXh0MkR9IGN0eFxyXG4gICAqL1xyXG4gIGRyYXdVcHBlckltYWdlKGN0eCkge1xyXG4gICAgY3R4LmRyYXdJbWFnZSh0aGlzLnVwcGVyTGF5ZXIsIDAsIDApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgT3ZlcldvcmxkTWFwO1xyXG4iLCJpbXBvcnQgR2FtZU9iamVjdCBmcm9tIFwiLi9HYW1lT2JqZWN0XCI7XHJcblxyXG5jbGFzcyBQZXJzb24gZXh0ZW5kcyBHYW1lT2JqZWN0IHtcclxuICAvKipcclxuICAgKiBAcGFyYW0ge0dhbWVPYmplY3R9IHByb3BzXHJcbiAgICogQHBhcmFtIHtCb29sZWFufSBwcm9wcy5pc1BsYXllckNvbnRyb2xsZWRcclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMubW92aW5nUHJvZ3Jlc3NSZW1haW5pZyA9IDA7XHJcblxyXG4gICAgdGhpcy5pc1BsYXllckNvbnRyb2xsZWQgPSBwcm9wcy5pc1BsYXllckNvbnRyb2xsZWQgfHwgZmFsc2U7XHJcblxyXG4gICAgdGhpcy5kaXJlY3Rpb25VcGRhdGUgPSB7XHJcbiAgICAgIHVwOiBbXCJ5XCIsIC0xXSxcclxuICAgICAgZG93bjogW1wieVwiLCAxXSxcclxuICAgICAgbGVmdDogW1wieFwiLCAtMV0sXHJcbiAgICAgIHJpZ2h0OiBbXCJ4XCIsIDFdLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZVxyXG4gICAqIEBwYXJhbSB7J2Rvd24nIHwgJ3VwJyB8ICdsZWZ0JyB8ICdyaWdodCcgfSBzdGF0ZS5hcnJvd1xyXG4gICAqL1xyXG4gIHVwZGF0ZShzdGF0ZSkge1xyXG4gICAgdGhpcy51cGRhdGVQb3NpdGlvbigpO1xyXG4gICAgaWYgKFxyXG4gICAgICB0aGlzLmlzUGxheWVyQ29udHJvbGxlZCAmJlxyXG4gICAgICB0aGlzLm1vdmluZ1Byb2dyZXNzUmVtYWluaWcgPT09IDAgJiZcclxuICAgICAgc3RhdGUuYXJyb3dcclxuICAgICkge1xyXG4gICAgICB0aGlzLmRpcmVjdGlvbiA9IHN0YXRlLmFycm93O1xyXG4gICAgICB0aGlzLm1vdmluZ1Byb2dyZXNzUmVtYWluaWcgPSAxNjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZVBvc2l0aW9uKCkge1xyXG4gICAgaWYgKHRoaXMubW92aW5nUHJvZ3Jlc3NSZW1haW5pZyA+IDApIHtcclxuICAgICAgY29uc3QgW3Byb3BlcnR5LCBjaGFuZ2VdID0gdGhpcy5kaXJlY3Rpb25VcGRhdGVbdGhpcy5kaXJlY3Rpb25dO1xyXG4gICAgICB0aGlzW3Byb3BlcnR5XSArPSBjaGFuZ2U7XHJcbiAgICAgIHRoaXMubW92aW5nUHJvZ3Jlc3NSZW1haW5pZyAtPSAxO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGVyc29uO1xyXG4iLCJpbXBvcnQgeyBkcmF3SW1hZ2UgfSBmcm9tIFwiLi4vdXRpbHMvaGVscGVyXCI7XHJcbmltcG9ydCBHYW1lT2JqZWN0IGZyb20gXCIuL0dhbWVPYmplY3RcIjtcclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBTcHJpdGVcclxuICovXHJcbmNsYXNzIFNwcml0ZSB7XHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcuYW5pbWF0aW9uc1xyXG4gICAqIEBwYXJhbSB7J2lkbGVEb3duJ3wgJ3dhbGtEb3duJyB8IG51bGx9IGNvbmZpZy5jdXJyZW50QW5pbWF0aW9uXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IGNvbmZpZy5zcmNcclxuICAgKiBAcGFyYW0ge051bWJlcn0gY29uZmlnLnNxdWFyZVNpemVcclxuICAgKiBAcGFyYW0ge0dhbWVPYmplY3R9IGNvbmZpZy5nYW1lT2JqZWN0XHJcbiAgICogQHBhcmFtIHt7ICB4OiBOdW1iZXIsIHk6IE51bWJlcn0gfCBudWxsfSBjb25maWcucmVtb3ZlU3F1YXJlU2l6ZVxyXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gY29uZmlnLnVzZVNoYWRvd1xyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xyXG4gICAgLy8gU3F1YXJlU2l6ZSBEZWZhdWx0IDMyXHJcbiAgICB0aGlzLnNxdWFyZVNpemUgPSBjb25maWcuc3F1YXJlU2l6ZSB8fCAzMjtcclxuICAgIHRoaXMucmVtb3ZlU3F1YXJlU2l6ZSA9IGNvbmZpZy5yZW1vdmVTcXVhcmVTaXplXHJcbiAgICAgID8gY29uZmlnLnJlbW92ZVNxdWFyZVNpemVcclxuICAgICAgOiB7IHg6IDgsIHk6IDE4IH07XHJcblxyXG4gICAgLy8gU2V0dXAgdGhlIGltYWdlXHJcbiAgICBkcmF3SW1hZ2UoXHJcbiAgICAgIGNvbmZpZy5zcmMgfHwgXCIvcHVibGljL2ltYWdlcy9jaGFyYWN0ZXJzL3Blb3BsZS9oZXJvLnBuZ1wiLFxyXG4gICAgICAoaW1hZ2UpID0+IHtcclxuICAgICAgICB0aGlzLmltYWdlID0gaW1hZ2U7XHJcbiAgICAgICAgdGhpcy5pbWFnZUlzTG9hZGVkID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICAvLyBTaGFkb3cgSW1hZ2VcclxuICAgIHRoaXMudXNlU2hhZG93ID0gY29uZmlnLnVzZVNoYWRvdyB8fCBmYWxzZTtcclxuICAgIGlmICh0aGlzLnVzZVNoYWRvdykge1xyXG4gICAgICBkcmF3SW1hZ2UoXCIvcHVibGljL2ltYWdlcy9jaGFyYWN0ZXJzL3NoYWRvdy5wbmdcIiwgKGltYWdlKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zaGFkb3dJbWFnZSA9IGltYWdlO1xyXG4gICAgICAgIHRoaXMuc2hhZG93SW1hZ2VMb2FkZWQgPSB0cnVlO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDb25maXVyZSBBbmltYXRpb24gQW5kIEluaXRpYWwgU3RhdGVcclxuICAgIHRoaXMuYW5pbWF0aW9ucyA9IGNvbmZpZy5hbmltYXRpb25zIHx8IHtcclxuICAgICAgaWRsZURvd246IFtbMCwgMF1dLFxyXG4gICAgICB3YWxrRG93bjogW1xyXG4gICAgICAgIFswLCAwXSwgLy8gaW1hZ2Ugcm93IDEgY29sIDFcclxuICAgICAgICBbMSwgMF0sIC8vIGltYWdlIHJvdyAxIGNvbCAyXHJcbiAgICAgICAgWzIsIDBdLCAvLyBpbWFnZSByb3cgMSBjb2wgM1xyXG4gICAgICAgIFszLCAwXSwgLy8gaW1hZ2Ugcm93IDEgY29sIDRcclxuICAgICAgXSxcclxuICAgIH07XHJcbiAgICB0aGlzLmN1cnJlbnRBbmltYXRpb24gPSBjb25maWcuY3VycmVudEFuaW1hdGlvbiB8fCBcImlkbGVEb3duXCI7XHJcbiAgICB0aGlzLmN1cnJlbnRBbmltYXRpb25GcmFtZSA9IDA7XHJcblxyXG4gICAgLy9cclxuICAgIHRoaXMuZ2FtZU9iamVjdCA9IGNvbmZpZy5nYW1lT2JqZWN0O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRHJhdyBDb250ZXh0XHJcbiAgICogQHBhcmFtIHtDYW52YXNSZW5kZXJpbmdDb250ZXh0MkR9IGN0eFxyXG4gICAqL1xyXG4gIGRyYXcoY3R4KSB7XHJcbiAgICBjb25zdCB4ID0gdGhpcy5nYW1lT2JqZWN0LnggLSB0aGlzLnJlbW92ZVNxdWFyZVNpemUueDsgLy8gUmVtb3ZlIFVubmVjZXNzYXJ5IHdpZHRoXHJcbiAgICBjb25zdCB5ID0gdGhpcy5nYW1lT2JqZWN0LnkgLSB0aGlzLnJlbW92ZVNxdWFyZVNpemUueTsgLy8gUmVtb3ZlIFVubmVjZXNzYXJ5IGhlaWdodFxyXG5cclxuICAgIC8vIFdoZW4gSW1hZ2UgTG9hZGluZ1xyXG4gICAgdGhpcy5pbWFnZUlzTG9hZGVkICYmXHJcbiAgICAgIGN0eC5kcmF3SW1hZ2UoXHJcbiAgICAgICAgdGhpcy5pbWFnZSwgLy8gSW5zZXJ0IEltYWdlXHJcbiAgICAgICAgMCwgLy8gWCBmcm9tIEltYWdlXHJcbiAgICAgICAgMCwgLy8gWSBmcm9tIEltYWdlXHJcbiAgICAgICAgdGhpcy5zcXVhcmVTaXplLCAvLyBXaWR0aCBGcm9tIEltYWdlLFxyXG4gICAgICAgIHRoaXMuc3F1YXJlU2l6ZSwgLy8gSGVpZ2h0IEZyb20gSW1hZ2VcclxuICAgICAgICB4LCAvLyBYIGZvciBDYW52YXNcclxuICAgICAgICB5LCAvLyBZIGZvciBDYW52YXNcclxuICAgICAgICB0aGlzLnNxdWFyZVNpemUsIC8vIFdpZHRoIEZvciBDYW52YXNcclxuICAgICAgICB0aGlzLnNxdWFyZVNpemUgLy8gSGVpZ2h0IEZvciBDYW52YXNcclxuICAgICAgKTtcclxuXHJcbiAgICB0aGlzLnNoYWRvd0ltYWdlTG9hZGVkICYmXHJcbiAgICAgIGN0eC5kcmF3SW1hZ2UoXHJcbiAgICAgICAgdGhpcy5zaGFkb3dJbWFnZSwgLy8gSW5zZXJ0IEltYWdlXHJcbiAgICAgICAgeCwgLy8gWCBmb3IgQ2FudmFzXHJcbiAgICAgICAgeSAvLyBZIGZvciBDYW52YXNcclxuICAgICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNwcml0ZTtcclxuIiwiZXhwb3J0IGNvbnN0IGRyYXdJbWFnZSA9IChzcmMsIGNiKSA9PiB7XHJcbiAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgaW1nLm9ubG9hZCA9ICgpID0+IHtcclxuICAgIGlmIChjYikge1xyXG4gICAgICBjYihpbWcpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgaW1nLnNyYyA9IHNyYztcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB3aXRoR3JpZHMgPSAobikgPT4ge1xyXG4gIHJldHVybiBuICogMTY7XHJcbn07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IE92ZXJXb3JsZCBmcm9tIFwiLi9HYW1lL092ZXJXb3JsZFwiO1xyXG5cclxuY29uc3Qgd29scmQgPSBuZXcgT3ZlcldvcmxkKHtcclxuICBlbGVtZW50OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWUtY29udGFpbmVyXCIpLFxyXG59KTtcclxuXHJcbndvbHJkLmluaXQoKTtcclxuIl0sIm5hbWVzIjpbIkdhbWVPYmplY3QiLCJQZXJzb24iLCJ3aXRoR3JpZHMiLCJPdmVyV29ybGRNYXBzTGlzdCIsIkRlbW9Sb29tIiwibG93ZXJTcmMiLCJ1cHBlclNyYyIsImdhbWVPYmplY3RzIiwiaGVybyIsImlzUGxheWVyQ29udHJvbGxlZCIsIngiLCJ5Iiwic3JjIiwibnBjMSIsIktpdGNoZW4iLCJucGMzIiwiRGlyZWN0aW9uSW5wdXQiLCJjb25zdHJ1Y3RvciIsImhlbGREaXJlY3Rpb25zIiwibWFwIiwiQXJyb3dVcCIsIktleVciLCJBcnJvd0Rvd24iLCJLZXlTIiwiQXJyb3dMZWZ0IiwiS2V5QSIsIkFycm93UmlnaHQiLCJLZXlEIiwiaW5pdCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJkaXIiLCJjb2RlIiwiaW5kZXhPZiIsInVuc2hpZnQiLCJpbmRleCIsInNwbGljZSIsImRpcmVjdGlvbiIsIlNwcml0ZSIsImNvbmZpZyIsInNwcml0ZSIsImdhbWVPYmplY3QiLCJ1c2VTaGFkb3ciLCJ1bmRlZmluZWQiLCJzcXVhcmVTaXplIiwicmVtb3ZlU3F1YXJlU2l6ZSIsInVwZGF0ZSIsIk92ZXJXb3JsZE1hcCIsIk92ZXJXb3JsZCIsImVsZW1lbnQiLCJjYW52YXMiLCJxdWVyeVNlbGVjdG9yIiwiY3R4IiwiZ2V0Q29udGV4dCIsInN0YXJ0R2FtZUxvb3AiLCJzdGVwIiwiY2xlYXJSZWN0Iiwid2lkdGgiLCJoZWlnaHQiLCJkcmF3TG93ZXJJbWFnZSIsIk9iamVjdCIsInZhbHVlcyIsImZvckVhY2giLCJvYmoiLCJhcnJvdyIsImRpcmVjdGlvbkNvbnRyb2xsZXIiLCJkcmF3IiwiZHJhd1VwcGVySW1hZ2UiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJsb3dlckxheWVyIiwiSW1hZ2UiLCJ1cHBlckxheWVyIiwiZHJhd0ltYWdlIiwicHJvcHMiLCJtb3ZpbmdQcm9ncmVzc1JlbWFpbmlnIiwiZGlyZWN0aW9uVXBkYXRlIiwidXAiLCJkb3duIiwibGVmdCIsInJpZ2h0Iiwic3RhdGUiLCJ1cGRhdGVQb3NpdGlvbiIsInByb3BlcnR5IiwiY2hhbmdlIiwiaW1hZ2UiLCJpbWFnZUlzTG9hZGVkIiwic2hhZG93SW1hZ2UiLCJzaGFkb3dJbWFnZUxvYWRlZCIsImFuaW1hdGlvbnMiLCJpZGxlRG93biIsIndhbGtEb3duIiwiY3VycmVudEFuaW1hdGlvbiIsImN1cnJlbnRBbmltYXRpb25GcmFtZSIsImNiIiwiaW1nIiwib25sb2FkIiwibiIsIndvbHJkIl0sInNvdXJjZVJvb3QiOiIifQ==