/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
   */
  constructor(config) {
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.sprite = new _Sprite__WEBPACK_IMPORTED_MODULE_0__["default"]({
      gameObject: this,
      src: config.src,
      useShadow: true
    });
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
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/helper */ "./src/utils/helper.js");
/* harmony import */ var _GameObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GameObject */ "./src/Game/GameObject.js");



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
  }

  init() {
    console.log("Class ".concat(this.constructor.name, " is initialize now .")); // Draw Map

    this.drawMap(); // After Drawing Map, Draw Characters

    this.drawCharacters();
  }

  drawMap() {
    (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.drawImage)("/public/images/maps/DemoLower.png", mapImage => {
      this.ctx.drawImage(mapImage, 0, 0);
    });
  }

  drawCharacters() {
    // Place GameObject
    var hero = new _GameObject__WEBPACK_IMPORTED_MODULE_1__["default"]({
      x: 5,
      y: 6,
      src: "/public/images/characters/people/hero.png"
    });
    var npc1 = new _GameObject__WEBPACK_IMPORTED_MODULE_1__["default"]({
      x: 7,
      y: 9,
      src: "/public/images/characters/people/npc1.png"
    });
    setTimeout(() => {
      hero.sprite.draw(this.ctx);
      npc1.sprite.draw(this.ctx);
    }, 100);
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OverWorld);

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
   * @param {{x: Number, y: Number} | null} config.removeSquareSize
   * @param {Boolean} config.useShadow
   */
  constructor(config) {
    // SquareSize Default 32
    this.squareSize = config.squareSize || 32;
    this.removeSquareSize = config.removeSquareSize ? config.removeSquareSize : {
      x: 8,
      y: 18
    }; // Setup the image

    (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.drawImage)(config.src, image => {
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
    this.x = this.gameObject.x * 16 - this.removeSquareSize.x; // Remove Unnecessary width

    this.y = this.gameObject.y * 16 - this.removeSquareSize.y; // Remove Unnecessary height
    // When Image Loading

    this.imageIsLoaded && ctx.drawImage(this.image, // Insert Image
    0, // X from Image
    0, // Y from Image
    this.squareSize, // Width From Image,
    this.squareSize, // Height From Image
    this.x, // X for Canvas
    this.y, // Y for Canvas
    this.squareSize, // Width For Canvas
    this.squareSize // Height For Canvas
    );
    this.shadowImageLoaded && ctx.drawImage(this.shadowImage, // Insert Image
    this.x, // X for Canvas
    this.y // Y for Canvas
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
/* harmony export */   "drawImage": () => (/* binding */ drawImage)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQ2hDLEdBQUosR0FBVUEsR0FBVjtBQUNELENBUk07Ozs7OztVQ0FQO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUVBLElBQU1tQyxLQUFLLEdBQUcsSUFBSWhDLHVEQUFKLENBQWM7QUFDMUJDLEVBQUFBLE9BQU8sRUFBRWdDLFFBQVEsQ0FBQzlCLGFBQVQsQ0FBdUIsaUJBQXZCO0FBRGlCLENBQWQsQ0FBZDtBQUlBNkIsS0FBSyxDQUFDMUIsSUFBTixHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcnBnLWdhbWUvLi9zcmMvR2FtZS9HYW1lT2JqZWN0LmpzIiwid2VicGFjazovL3JwZy1nYW1lLy4vc3JjL0dhbWUvT3ZlcldvcmxkLmpzIiwid2VicGFjazovL3JwZy1nYW1lLy4vc3JjL0dhbWUvU3ByaXRlLmpzIiwid2VicGFjazovL3JwZy1nYW1lLy4vc3JjL3V0aWxzL2hlbHBlci5qcyIsIndlYnBhY2s6Ly9ycGctZ2FtZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9ycGctZ2FtZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcnBnLWdhbWUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9ycGctZ2FtZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3JwZy1nYW1lLy4vc3JjL2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3ByaXRlIGZyb20gXCIuL1Nwcml0ZVwiO1xyXG5cclxuLyoqXHJcbiAqIEBuYW1lIEdhbWVPYmplY3RcclxuICovXHJcbmNsYXNzIEdhbWVPYmplY3Qge1xyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcclxuICAgKiBAcGFyYW0ge051bWJlcn0gY29uZmlnLnhcclxuICAgKiBAcGFyYW0ge051bWJlcn0gY29uZmlnLnlcclxuICAgKiBAcGFyYW0ge1N0cmluZ30gY29uZmlnLnNyY1xyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xyXG4gICAgdGhpcy54ID0gY29uZmlnLnggfHwgMDtcclxuICAgIHRoaXMueSA9IGNvbmZpZy55IHx8IDA7XHJcbiAgICB0aGlzLnNwcml0ZSA9IG5ldyBTcHJpdGUoe1xyXG4gICAgICBnYW1lT2JqZWN0OiB0aGlzLFxyXG4gICAgICBzcmM6IGNvbmZpZy5zcmMsXHJcbiAgICAgIHVzZVNoYWRvdzogdHJ1ZSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2FtZU9iamVjdDtcclxuIiwiaW1wb3J0IHsgZHJhd0ltYWdlIH0gZnJvbSBcIi4uL3V0aWxzL2hlbHBlclwiO1xyXG5pbXBvcnQgR2FtZU9iamVjdCBmcm9tIFwiLi9HYW1lT2JqZWN0XCI7XHJcblxyXG5jbGFzcyBPdmVyV29ybGQge1xyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcclxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBjb25maWcuZWxlbWVudFxyXG4gICAqIEBwYXJhbSB7J2hlaGUnfCdoYWhhJ30gY29uZmlnLnRlc3RcclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcclxuICAgIGNvbnN0IHsgZWxlbWVudCB9ID0gY29uZmlnO1xyXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEB0eXBlIHtIVE1MQ2FudmFzRWxlbWVudH1cclxuICAgICAqL1xyXG4gICAgdGhpcy5jYW52YXMgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lLWNhbnZhc1wiKTsgLy9IVE1MQ2FudmFzRWxlbWVudFxyXG5cclxuICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpIHtcclxuICAgIGNvbnNvbGUubG9nKGBDbGFzcyAke3RoaXMuY29uc3RydWN0b3IubmFtZX0gaXMgaW5pdGlhbGl6ZSBub3cgLmApO1xyXG5cclxuICAgIC8vIERyYXcgTWFwXHJcbiAgICB0aGlzLmRyYXdNYXAoKTtcclxuXHJcbiAgICAvLyBBZnRlciBEcmF3aW5nIE1hcCwgRHJhdyBDaGFyYWN0ZXJzXHJcbiAgICB0aGlzLmRyYXdDaGFyYWN0ZXJzKCk7XHJcbiAgfVxyXG5cclxuICBkcmF3TWFwKCkge1xyXG4gICAgZHJhd0ltYWdlKFwiL3B1YmxpYy9pbWFnZXMvbWFwcy9EZW1vTG93ZXIucG5nXCIsIChtYXBJbWFnZSkgPT4ge1xyXG4gICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UobWFwSW1hZ2UsIDAsIDApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBkcmF3Q2hhcmFjdGVycygpIHtcclxuICAgIC8vIFBsYWNlIEdhbWVPYmplY3RcclxuICAgIGNvbnN0IGhlcm8gPSBuZXcgR2FtZU9iamVjdCh7XHJcbiAgICAgIHg6IDUsXHJcbiAgICAgIHk6IDYsXHJcbiAgICAgIHNyYzogXCIvcHVibGljL2ltYWdlcy9jaGFyYWN0ZXJzL3Blb3BsZS9oZXJvLnBuZ1wiLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgbnBjMSA9IG5ldyBHYW1lT2JqZWN0KHtcclxuICAgICAgeDogNyxcclxuICAgICAgeTogOSxcclxuICAgICAgc3JjOiBcIi9wdWJsaWMvaW1hZ2VzL2NoYXJhY3RlcnMvcGVvcGxlL25wYzEucG5nXCIsXHJcbiAgICB9KTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgaGVyby5zcHJpdGUuZHJhdyh0aGlzLmN0eCk7XHJcbiAgICAgIG5wYzEuc3ByaXRlLmRyYXcodGhpcy5jdHgpO1xyXG4gICAgfSwgMTAwKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE92ZXJXb3JsZDtcclxuIiwiaW1wb3J0IHsgZHJhd0ltYWdlIH0gZnJvbSBcIi4uL3V0aWxzL2hlbHBlclwiO1xyXG5pbXBvcnQgR2FtZU9iamVjdCBmcm9tIFwiLi9HYW1lT2JqZWN0XCI7XHJcblxyXG4vKipcclxuICogQG5hbWUgU3ByaXRlXHJcbiAqL1xyXG5jbGFzcyBTcHJpdGUge1xyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcclxuICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnLmFuaW1hdGlvbnNcclxuICAgKiBAcGFyYW0geydpZGxlRG93bid8ICd3YWxrRG93bicgfCBudWxsfSBjb25maWcuY3VycmVudEFuaW1hdGlvblxyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBjb25maWcuc3JjXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGNvbmZpZy5zcXVhcmVTaXplXHJcbiAgICogQHBhcmFtIHtHYW1lT2JqZWN0fSBjb25maWcuZ2FtZU9iamVjdFxyXG4gICAqIEBwYXJhbSB7e3g6IE51bWJlciwgeTogTnVtYmVyfSB8IG51bGx9IGNvbmZpZy5yZW1vdmVTcXVhcmVTaXplXHJcbiAgICogQHBhcmFtIHtCb29sZWFufSBjb25maWcudXNlU2hhZG93XHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XHJcbiAgICAvLyBTcXVhcmVTaXplIERlZmF1bHQgMzJcclxuICAgIHRoaXMuc3F1YXJlU2l6ZSA9IGNvbmZpZy5zcXVhcmVTaXplIHx8IDMyO1xyXG4gICAgdGhpcy5yZW1vdmVTcXVhcmVTaXplID0gY29uZmlnLnJlbW92ZVNxdWFyZVNpemVcclxuICAgICAgPyBjb25maWcucmVtb3ZlU3F1YXJlU2l6ZVxyXG4gICAgICA6IHsgeDogOCwgeTogMTggfTtcclxuXHJcbiAgICAvLyBTZXR1cCB0aGUgaW1hZ2VcclxuICAgIGRyYXdJbWFnZShjb25maWcuc3JjLCAoaW1hZ2UpID0+IHtcclxuICAgICAgdGhpcy5pbWFnZSA9IGltYWdlO1xyXG4gICAgICB0aGlzLmltYWdlSXNMb2FkZWQgPSB0cnVlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gU2hhZG93IEltYWdlXHJcbiAgICB0aGlzLnVzZVNoYWRvdyA9IGNvbmZpZy51c2VTaGFkb3cgfHwgZmFsc2U7XHJcbiAgICBpZiAodGhpcy51c2VTaGFkb3cpIHtcclxuICAgICAgZHJhd0ltYWdlKFwiL3B1YmxpYy9pbWFnZXMvY2hhcmFjdGVycy9zaGFkb3cucG5nXCIsIChpbWFnZSkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2hhZG93SW1hZ2UgPSBpbWFnZTtcclxuICAgICAgICB0aGlzLnNoYWRvd0ltYWdlTG9hZGVkID0gdHJ1ZTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ29uZml1cmUgQW5pbWF0aW9uIEFuZCBJbml0aWFsIFN0YXRlXHJcbiAgICB0aGlzLmFuaW1hdGlvbnMgPSBjb25maWcuYW5pbWF0aW9ucyB8fCB7XHJcbiAgICAgIGlkbGVEb3duOiBbWzAsIDBdXSxcclxuICAgICAgd2Fsa0Rvd246IFtcclxuICAgICAgICBbMCwgMF0sIC8vIGltYWdlIHJvdyAxIGNvbCAxXHJcbiAgICAgICAgWzEsIDBdLCAvLyBpbWFnZSByb3cgMSBjb2wgMlxyXG4gICAgICAgIFsyLCAwXSwgLy8gaW1hZ2Ugcm93IDEgY29sIDNcclxuICAgICAgICBbMywgMF0sIC8vIGltYWdlIHJvdyAxIGNvbCA0XHJcbiAgICAgIF0sXHJcbiAgICB9O1xyXG4gICAgdGhpcy5jdXJyZW50QW5pbWF0aW9uID0gY29uZmlnLmN1cnJlbnRBbmltYXRpb24gfHwgXCJpZGxlRG93blwiO1xyXG4gICAgdGhpcy5jdXJyZW50QW5pbWF0aW9uRnJhbWUgPSAwO1xyXG5cclxuICAgIC8vXHJcbiAgICB0aGlzLmdhbWVPYmplY3QgPSBjb25maWcuZ2FtZU9iamVjdDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERyYXcgQ29udGV4dFxyXG4gICAqIEBwYXJhbSB7Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEfSBjdHhcclxuICAgKi9cclxuICBkcmF3KGN0eCkge1xyXG4gICAgdGhpcy54ID0gdGhpcy5nYW1lT2JqZWN0LnggKiAxNiAtIHRoaXMucmVtb3ZlU3F1YXJlU2l6ZS54OyAvLyBSZW1vdmUgVW5uZWNlc3Nhcnkgd2lkdGhcclxuICAgIHRoaXMueSA9IHRoaXMuZ2FtZU9iamVjdC55ICogMTYgLSB0aGlzLnJlbW92ZVNxdWFyZVNpemUueTsgLy8gUmVtb3ZlIFVubmVjZXNzYXJ5IGhlaWdodFxyXG5cclxuICAgIC8vIFdoZW4gSW1hZ2UgTG9hZGluZ1xyXG4gICAgdGhpcy5pbWFnZUlzTG9hZGVkICYmXHJcbiAgICAgIGN0eC5kcmF3SW1hZ2UoXHJcbiAgICAgICAgdGhpcy5pbWFnZSwgLy8gSW5zZXJ0IEltYWdlXHJcbiAgICAgICAgMCwgLy8gWCBmcm9tIEltYWdlXHJcbiAgICAgICAgMCwgLy8gWSBmcm9tIEltYWdlXHJcbiAgICAgICAgdGhpcy5zcXVhcmVTaXplLCAvLyBXaWR0aCBGcm9tIEltYWdlLFxyXG4gICAgICAgIHRoaXMuc3F1YXJlU2l6ZSwgLy8gSGVpZ2h0IEZyb20gSW1hZ2VcclxuICAgICAgICB0aGlzLngsIC8vIFggZm9yIENhbnZhc1xyXG4gICAgICAgIHRoaXMueSwgLy8gWSBmb3IgQ2FudmFzXHJcbiAgICAgICAgdGhpcy5zcXVhcmVTaXplLCAvLyBXaWR0aCBGb3IgQ2FudmFzXHJcbiAgICAgICAgdGhpcy5zcXVhcmVTaXplIC8vIEhlaWdodCBGb3IgQ2FudmFzXHJcbiAgICAgICk7XHJcblxyXG4gICAgdGhpcy5zaGFkb3dJbWFnZUxvYWRlZCAmJlxyXG4gICAgICBjdHguZHJhd0ltYWdlKFxyXG4gICAgICAgIHRoaXMuc2hhZG93SW1hZ2UsIC8vIEluc2VydCBJbWFnZVxyXG4gICAgICAgIHRoaXMueCwgLy8gWCBmb3IgQ2FudmFzXHJcbiAgICAgICAgdGhpcy55IC8vIFkgZm9yIENhbnZhc1xyXG4gICAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3ByaXRlO1xyXG4iLCJleHBvcnQgY29uc3QgZHJhd0ltYWdlID0gKHNyYywgY2IpID0+IHtcclxuICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcclxuICBpbWcub25sb2FkID0gKCkgPT4ge1xyXG4gICAgaWYgKGNiKSB7XHJcbiAgICAgIGNiKGltZyk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBpbWcuc3JjID0gc3JjO1xyXG59O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBPdmVyV29ybGQgZnJvbSBcIi4vR2FtZS9PdmVyV29ybGRcIjtcclxuXHJcbmNvbnN0IHdvbHJkID0gbmV3IE92ZXJXb3JsZCh7XHJcbiAgZWxlbWVudDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lLWNvbnRhaW5lclwiKSxcclxufSk7XHJcblxyXG53b2xyZC5pbml0KCk7XHJcbiJdLCJuYW1lcyI6WyJTcHJpdGUiLCJHYW1lT2JqZWN0IiwiY29uc3RydWN0b3IiLCJjb25maWciLCJ4IiwieSIsInNwcml0ZSIsImdhbWVPYmplY3QiLCJzcmMiLCJ1c2VTaGFkb3ciLCJkcmF3SW1hZ2UiLCJPdmVyV29ybGQiLCJlbGVtZW50IiwiY2FudmFzIiwicXVlcnlTZWxlY3RvciIsImN0eCIsImdldENvbnRleHQiLCJpbml0IiwiY29uc29sZSIsImxvZyIsIm5hbWUiLCJkcmF3TWFwIiwiZHJhd0NoYXJhY3RlcnMiLCJtYXBJbWFnZSIsImhlcm8iLCJucGMxIiwic2V0VGltZW91dCIsImRyYXciLCJzcXVhcmVTaXplIiwicmVtb3ZlU3F1YXJlU2l6ZSIsImltYWdlIiwiaW1hZ2VJc0xvYWRlZCIsInNoYWRvd0ltYWdlIiwic2hhZG93SW1hZ2VMb2FkZWQiLCJhbmltYXRpb25zIiwiaWRsZURvd24iLCJ3YWxrRG93biIsImN1cnJlbnRBbmltYXRpb24iLCJjdXJyZW50QW5pbWF0aW9uRnJhbWUiLCJjYiIsImltZyIsIkltYWdlIiwib25sb2FkIiwid29scmQiLCJkb2N1bWVudCJdLCJzb3VyY2VSb290IjoiIn0=