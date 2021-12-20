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
   * @param {Boolean | null} config.useShadow
   */
  constructor(config) {
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.sprite = new _Sprite__WEBPACK_IMPORTED_MODULE_0__["default"]({
      gameObject: this,
      src: config.src,
      useShadow: config.useShadow !== null || config.useShadow !== undefined ? config.useShadow : true
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
/* harmony import */ var _OverWorldMap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OverWorldMap */ "./src/Game/OverWorldMap.js");




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

  init() {
    console.log("Class ".concat(this.constructor.name, " is initialize now ."));
    this.map = new _OverWorldMap__WEBPACK_IMPORTED_MODULE_2__["default"](_OverWorldMap__WEBPACK_IMPORTED_MODULE_2__.OverWorldMapsList.Kitchen); // Start Game Loop

    this.startGameLoop();
  }

  startGameLoop() {
    var step = () => {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // Clear Canvas

      this.map.drawLowerImage(this.ctx);
      Object.values(this.map.gameObjects).forEach(
      /**
       * @param {GameObject} obj
       */
      obj => {
        obj.x += 0.03;
        obj.sprite.draw(this.ctx);
      });
      this.map.drawUpperImage(this.ctx);
      requestAnimationFrame(() => {
        step();
      });
    };

    step();
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
/* harmony export */   "OverWorldMapsList": () => (/* binding */ OverWorldMapsList),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/helper */ "./src/utils/helper.js");
/* harmony import */ var _GameObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GameObject */ "./src/Game/GameObject.js");


var OverWorldMapsList = {
  DemoRoom: {
    lowerSrc: "/public/images/maps/DemoLower.png",
    upperSrc: "/public/images/maps/DemoUpper.png",
    gameObjects: {
      hero: new _GameObject__WEBPACK_IMPORTED_MODULE_1__["default"]({
        x: 5,
        y: 6,
        src: "/public/images/characters/people/hero.png"
      }),
      npc1: new _GameObject__WEBPACK_IMPORTED_MODULE_1__["default"]({
        x: 7,
        y: 8,
        src: "/public/images/characters/people/npc1.png "
      })
    }
  },
  Kitchen: {
    lowerSrc: "/public/images/maps/KitchenLower.png",
    upperSrc: "/public/images/maps/KitchenUpper.png",
    gameObjects: {
      hero: new _GameObject__WEBPACK_IMPORTED_MODULE_1__["default"]({
        x: 3,
        y: 5
      }),
      npc1: new _GameObject__WEBPACK_IMPORTED_MODULE_1__["default"]({
        x: 9,
        y: 6,
        src: "/public/images/characters/people/npc2.png "
      }),
      npc3: new _GameObject__WEBPACK_IMPORTED_MODULE_1__["default"]({
        x: 10,
        y: 8,
        src: "/public/images/characters/people/npc3.png "
      })
    }
  }
};
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUVBLElBQU11RCxLQUFLLEdBQUcsSUFBSWpELHVEQUFKLENBQWM7QUFDMUJDLEVBQUFBLE9BQU8sRUFBRWlELFFBQVEsQ0FBQy9DLGFBQVQsQ0FBdUIsaUJBQXZCO0FBRGlCLENBQWQsQ0FBZDtBQUlBOEMsS0FBSyxDQUFDMUMsSUFBTixHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcnBnLWdhbWUvLi9zcmMvR2FtZS9HYW1lT2JqZWN0LmpzIiwid2VicGFjazovL3JwZy1nYW1lLy4vc3JjL0dhbWUvT3ZlcldvcmxkLmpzIiwid2VicGFjazovL3JwZy1nYW1lLy4vc3JjL0dhbWUvT3ZlcldvcmxkTWFwLmpzIiwid2VicGFjazovL3JwZy1nYW1lLy4vc3JjL0dhbWUvU3ByaXRlLmpzIiwid2VicGFjazovL3JwZy1nYW1lLy4vc3JjL3V0aWxzL2hlbHBlci5qcyIsIndlYnBhY2s6Ly9ycGctZ2FtZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9ycGctZ2FtZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcnBnLWdhbWUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9ycGctZ2FtZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3JwZy1nYW1lLy4vc3JjL2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3ByaXRlIGZyb20gXCIuL1Nwcml0ZVwiO1xyXG5cclxuLyoqXHJcbiAqIEBuYW1lIEdhbWVPYmplY3RcclxuICovXHJcbmNsYXNzIEdhbWVPYmplY3Qge1xyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcclxuICAgKiBAcGFyYW0ge051bWJlcn0gY29uZmlnLnhcclxuICAgKiBAcGFyYW0ge051bWJlcn0gY29uZmlnLnlcclxuICAgKiBAcGFyYW0ge1N0cmluZ30gY29uZmlnLnNyY1xyXG4gICAqIEBwYXJhbSB7Qm9vbGVhbiB8IG51bGx9IGNvbmZpZy51c2VTaGFkb3dcclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcclxuICAgIHRoaXMueCA9IGNvbmZpZy54IHx8IDA7XHJcbiAgICB0aGlzLnkgPSBjb25maWcueSB8fCAwO1xyXG4gICAgdGhpcy5zcHJpdGUgPSBuZXcgU3ByaXRlKHtcclxuICAgICAgZ2FtZU9iamVjdDogdGhpcyxcclxuICAgICAgc3JjOiBjb25maWcuc3JjLFxyXG4gICAgICB1c2VTaGFkb3c6XHJcbiAgICAgICAgY29uZmlnLnVzZVNoYWRvdyAhPT0gbnVsbCB8fCBjb25maWcudXNlU2hhZG93ICE9PSB1bmRlZmluZWRcclxuICAgICAgICAgID8gY29uZmlnLnVzZVNoYWRvd1xyXG4gICAgICAgICAgOiB0cnVlLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHYW1lT2JqZWN0O1xyXG4iLCJpbXBvcnQgeyBkcmF3SW1hZ2UgfSBmcm9tIFwiLi4vdXRpbHMvaGVscGVyXCI7XHJcbmltcG9ydCBHYW1lT2JqZWN0IGZyb20gXCIuL0dhbWVPYmplY3RcIjtcclxuaW1wb3J0IE92ZXJXb3JsZE1hcCwgeyBPdmVyV29ybGRNYXBzTGlzdCB9IGZyb20gXCIuL092ZXJXb3JsZE1hcFwiO1xyXG5cclxuY2xhc3MgT3ZlcldvcmxkIHtcclxuICAvKipcclxuICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXHJcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gY29uZmlnLmVsZW1lbnRcclxuICAgKiBAcGFyYW0geydoZWhlJ3wnaGFoYSd9IGNvbmZpZy50ZXN0XHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XHJcbiAgICBjb25zdCB7IGVsZW1lbnQgfSA9IGNvbmZpZztcclxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAdHlwZSB7SFRNTENhbnZhc0VsZW1lbnR9XHJcbiAgICAgKi9cclxuICAgIHRoaXMuY2FudmFzID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZS1jYW52YXNcIik7IC8vSFRNTENhbnZhc0VsZW1lbnRcclxuXHJcbiAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEB0eXBlIHtPdmVyV29ybGRNYXAgfCBudWxsfVxyXG4gICAgICovXHJcbiAgICB0aGlzLm1hcCA9IG51bGw7XHJcbiAgfVxyXG5cclxuICBpbml0KCkge1xyXG4gICAgY29uc29sZS5sb2coYENsYXNzICR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfSBpcyBpbml0aWFsaXplIG5vdyAuYCk7XHJcbiAgICB0aGlzLm1hcCA9IG5ldyBPdmVyV29ybGRNYXAoT3ZlcldvcmxkTWFwc0xpc3QuS2l0Y2hlbik7XHJcbiAgICAvLyBTdGFydCBHYW1lIExvb3BcclxuICAgIHRoaXMuc3RhcnRHYW1lTG9vcCgpO1xyXG4gIH1cclxuXHJcbiAgc3RhcnRHYW1lTG9vcCgpIHtcclxuICAgIGNvbnN0IHN0ZXAgPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcclxuXHJcbiAgICAgIC8vIENsZWFyIENhbnZhc1xyXG4gICAgICB0aGlzLm1hcC5kcmF3TG93ZXJJbWFnZSh0aGlzLmN0eCk7XHJcblxyXG4gICAgICBPYmplY3QudmFsdWVzKHRoaXMubWFwLmdhbWVPYmplY3RzKS5mb3JFYWNoKFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBwYXJhbSB7R2FtZU9iamVjdH0gb2JqXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgKG9iaikgPT4ge1xyXG4gICAgICAgICAgb2JqLnggKz0gMC4wMztcclxuICAgICAgICAgIG9iai5zcHJpdGUuZHJhdyh0aGlzLmN0eCk7XHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG5cclxuICAgICAgdGhpcy5tYXAuZHJhd1VwcGVySW1hZ2UodGhpcy5jdHgpO1xyXG5cclxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcclxuICAgICAgICBzdGVwKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBzdGVwKCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPdmVyV29ybGQ7XHJcbiIsImltcG9ydCB7IGRyYXdJbWFnZSB9IGZyb20gXCIuLi91dGlscy9oZWxwZXJcIjtcclxuaW1wb3J0IEdhbWVPYmplY3QgZnJvbSBcIi4vR2FtZU9iamVjdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IE92ZXJXb3JsZE1hcHNMaXN0ID0ge1xyXG4gIERlbW9Sb29tOiB7XHJcbiAgICBsb3dlclNyYzogXCIvcHVibGljL2ltYWdlcy9tYXBzL0RlbW9Mb3dlci5wbmdcIixcclxuICAgIHVwcGVyU3JjOiBcIi9wdWJsaWMvaW1hZ2VzL21hcHMvRGVtb1VwcGVyLnBuZ1wiLFxyXG4gICAgZ2FtZU9iamVjdHM6IHtcclxuICAgICAgaGVybzogbmV3IEdhbWVPYmplY3Qoe1xyXG4gICAgICAgIHg6IDUsXHJcbiAgICAgICAgeTogNixcclxuICAgICAgICBzcmM6IFwiL3B1YmxpYy9pbWFnZXMvY2hhcmFjdGVycy9wZW9wbGUvaGVyby5wbmdcIixcclxuICAgICAgfSksXHJcbiAgICAgIG5wYzE6IG5ldyBHYW1lT2JqZWN0KHtcclxuICAgICAgICB4OiA3LFxyXG4gICAgICAgIHk6IDgsXHJcbiAgICAgICAgc3JjOiBcIi9wdWJsaWMvaW1hZ2VzL2NoYXJhY3RlcnMvcGVvcGxlL25wYzEucG5nIFwiLFxyXG4gICAgICB9KSxcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbiAgS2l0Y2hlbjoge1xyXG4gICAgbG93ZXJTcmM6IFwiL3B1YmxpYy9pbWFnZXMvbWFwcy9LaXRjaGVuTG93ZXIucG5nXCIsXHJcbiAgICB1cHBlclNyYzogXCIvcHVibGljL2ltYWdlcy9tYXBzL0tpdGNoZW5VcHBlci5wbmdcIixcclxuICAgIGdhbWVPYmplY3RzOiB7XHJcbiAgICAgIGhlcm86IG5ldyBHYW1lT2JqZWN0KHtcclxuICAgICAgICB4OiAzLFxyXG4gICAgICAgIHk6IDUsXHJcbiAgICAgIH0pLFxyXG4gICAgICBucGMxOiBuZXcgR2FtZU9iamVjdCh7XHJcbiAgICAgICAgeDogOSxcclxuICAgICAgICB5OiA2LFxyXG4gICAgICAgIHNyYzogXCIvcHVibGljL2ltYWdlcy9jaGFyYWN0ZXJzL3Blb3BsZS9ucGMyLnBuZyBcIixcclxuICAgICAgfSksXHJcbiAgICAgIG5wYzM6IG5ldyBHYW1lT2JqZWN0KHtcclxuICAgICAgICB4OiAxMCxcclxuICAgICAgICB5OiA4LFxyXG4gICAgICAgIHNyYzogXCIvcHVibGljL2ltYWdlcy9jaGFyYWN0ZXJzL3Blb3BsZS9ucGMzLnBuZyBcIixcclxuICAgICAgfSksXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcblxyXG4vKipcclxuICogQG5hbWUgT3ZlcldvcmxNYXBcclxuICovXHJcbmNsYXNzIE92ZXJXb3JsZE1hcCB7XHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBjb25maWcubG93ZXJTcmNcclxuICAgKiBAcGFyYW0ge1N0cmluZ30gY29uZmlnLnVwcGVyU3JjXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XHJcbiAgICB0aGlzLmdhbWVPYmplY3RzID0gY29uZmlnLmdhbWVPYmplY3RzO1xyXG5cclxuICAgIHRoaXMubG93ZXJMYXllciA9IG5ldyBJbWFnZSgpO1xyXG4gICAgdGhpcy5sb3dlckxheWVyLnNyYyA9IGNvbmZpZy5sb3dlclNyYztcclxuXHJcbiAgICB0aGlzLnVwcGVyTGF5ZXIgPSBuZXcgSW1hZ2UoKTtcclxuICAgIHRoaXMudXBwZXJMYXllci5zcmMgPSBjb25maWcudXBwZXJTcmM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0ge0NhbnZhc1JlbmRlcmluZ0NvbnRleHQyRH0gY3R4XHJcbiAgICovXHJcbiAgZHJhd0xvd2VySW1hZ2UoY3R4KSB7XHJcbiAgICBjdHguZHJhd0ltYWdlKHRoaXMubG93ZXJMYXllciwgMCwgMCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0ge0NhbnZhc1JlbmRlcmluZ0NvbnRleHQyRH0gY3R4XHJcbiAgICovXHJcbiAgZHJhd1VwcGVySW1hZ2UoY3R4KSB7XHJcbiAgICBjdHguZHJhd0ltYWdlKHRoaXMudXBwZXJMYXllciwgMCwgMCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPdmVyV29ybGRNYXA7XHJcbiIsImltcG9ydCB7IGRyYXdJbWFnZSB9IGZyb20gXCIuLi91dGlscy9oZWxwZXJcIjtcclxuaW1wb3J0IEdhbWVPYmplY3QgZnJvbSBcIi4vR2FtZU9iamVjdFwiO1xyXG5cclxuLyoqXHJcbiAqIEBuYW1lIFNwcml0ZVxyXG4gKi9cclxuY2xhc3MgU3ByaXRlIHtcclxuICAvKipcclxuICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZy5hbmltYXRpb25zXHJcbiAgICogQHBhcmFtIHsnaWRsZURvd24nfCAnd2Fsa0Rvd24nIHwgbnVsbH0gY29uZmlnLmN1cnJlbnRBbmltYXRpb25cclxuICAgKiBAcGFyYW0ge1N0cmluZ30gY29uZmlnLnNyY1xyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBjb25maWcuc3F1YXJlU2l6ZVxyXG4gICAqIEBwYXJhbSB7R2FtZU9iamVjdH0gY29uZmlnLmdhbWVPYmplY3RcclxuICAgKiBAcGFyYW0ge3t4OiBOdW1iZXIsIHk6IE51bWJlcn0gfCBudWxsfSBjb25maWcucmVtb3ZlU3F1YXJlU2l6ZVxyXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gY29uZmlnLnVzZVNoYWRvd1xyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xyXG4gICAgLy8gU3F1YXJlU2l6ZSBEZWZhdWx0IDMyXHJcbiAgICB0aGlzLnNxdWFyZVNpemUgPSBjb25maWcuc3F1YXJlU2l6ZSB8fCAzMjtcclxuICAgIHRoaXMucmVtb3ZlU3F1YXJlU2l6ZSA9IGNvbmZpZy5yZW1vdmVTcXVhcmVTaXplXHJcbiAgICAgID8gY29uZmlnLnJlbW92ZVNxdWFyZVNpemVcclxuICAgICAgOiB7IHg6IDgsIHk6IDE4IH07XHJcblxyXG4gICAgLy8gU2V0dXAgdGhlIGltYWdlXHJcbiAgICBkcmF3SW1hZ2UoXHJcbiAgICAgIGNvbmZpZy5zcmMgfHwgXCIvcHVibGljL2ltYWdlcy9jaGFyYWN0ZXJzL3Blb3BsZS9oZXJvLnBuZ1wiLFxyXG4gICAgICAoaW1hZ2UpID0+IHtcclxuICAgICAgICB0aGlzLmltYWdlID0gaW1hZ2U7XHJcbiAgICAgICAgdGhpcy5pbWFnZUlzTG9hZGVkID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICAvLyBTaGFkb3cgSW1hZ2VcclxuICAgIHRoaXMudXNlU2hhZG93ID0gY29uZmlnLnVzZVNoYWRvdyB8fCBmYWxzZTtcclxuICAgIGlmICh0aGlzLnVzZVNoYWRvdykge1xyXG4gICAgICBkcmF3SW1hZ2UoXCIvcHVibGljL2ltYWdlcy9jaGFyYWN0ZXJzL3NoYWRvdy5wbmdcIiwgKGltYWdlKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zaGFkb3dJbWFnZSA9IGltYWdlO1xyXG4gICAgICAgIHRoaXMuc2hhZG93SW1hZ2VMb2FkZWQgPSB0cnVlO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDb25maXVyZSBBbmltYXRpb24gQW5kIEluaXRpYWwgU3RhdGVcclxuICAgIHRoaXMuYW5pbWF0aW9ucyA9IGNvbmZpZy5hbmltYXRpb25zIHx8IHtcclxuICAgICAgaWRsZURvd246IFtbMCwgMF1dLFxyXG4gICAgICB3YWxrRG93bjogW1xyXG4gICAgICAgIFswLCAwXSwgLy8gaW1hZ2Ugcm93IDEgY29sIDFcclxuICAgICAgICBbMSwgMF0sIC8vIGltYWdlIHJvdyAxIGNvbCAyXHJcbiAgICAgICAgWzIsIDBdLCAvLyBpbWFnZSByb3cgMSBjb2wgM1xyXG4gICAgICAgIFszLCAwXSwgLy8gaW1hZ2Ugcm93IDEgY29sIDRcclxuICAgICAgXSxcclxuICAgIH07XHJcbiAgICB0aGlzLmN1cnJlbnRBbmltYXRpb24gPSBjb25maWcuY3VycmVudEFuaW1hdGlvbiB8fCBcImlkbGVEb3duXCI7XHJcbiAgICB0aGlzLmN1cnJlbnRBbmltYXRpb25GcmFtZSA9IDA7XHJcblxyXG4gICAgLy9cclxuICAgIHRoaXMuZ2FtZU9iamVjdCA9IGNvbmZpZy5nYW1lT2JqZWN0O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRHJhdyBDb250ZXh0XHJcbiAgICogQHBhcmFtIHtDYW52YXNSZW5kZXJpbmdDb250ZXh0MkR9IGN0eFxyXG4gICAqL1xyXG4gIGRyYXcoY3R4KSB7XHJcbiAgICB0aGlzLnggPSB0aGlzLmdhbWVPYmplY3QueCAqIDE2IC0gdGhpcy5yZW1vdmVTcXVhcmVTaXplLng7IC8vIFJlbW92ZSBVbm5lY2Vzc2FyeSB3aWR0aFxyXG4gICAgdGhpcy55ID0gdGhpcy5nYW1lT2JqZWN0LnkgKiAxNiAtIHRoaXMucmVtb3ZlU3F1YXJlU2l6ZS55OyAvLyBSZW1vdmUgVW5uZWNlc3NhcnkgaGVpZ2h0XHJcblxyXG4gICAgLy8gV2hlbiBJbWFnZSBMb2FkaW5nXHJcbiAgICB0aGlzLmltYWdlSXNMb2FkZWQgJiZcclxuICAgICAgY3R4LmRyYXdJbWFnZShcclxuICAgICAgICB0aGlzLmltYWdlLCAvLyBJbnNlcnQgSW1hZ2VcclxuICAgICAgICAwLCAvLyBYIGZyb20gSW1hZ2VcclxuICAgICAgICAwLCAvLyBZIGZyb20gSW1hZ2VcclxuICAgICAgICB0aGlzLnNxdWFyZVNpemUsIC8vIFdpZHRoIEZyb20gSW1hZ2UsXHJcbiAgICAgICAgdGhpcy5zcXVhcmVTaXplLCAvLyBIZWlnaHQgRnJvbSBJbWFnZVxyXG4gICAgICAgIHRoaXMueCwgLy8gWCBmb3IgQ2FudmFzXHJcbiAgICAgICAgdGhpcy55LCAvLyBZIGZvciBDYW52YXNcclxuICAgICAgICB0aGlzLnNxdWFyZVNpemUsIC8vIFdpZHRoIEZvciBDYW52YXNcclxuICAgICAgICB0aGlzLnNxdWFyZVNpemUgLy8gSGVpZ2h0IEZvciBDYW52YXNcclxuICAgICAgKTtcclxuXHJcbiAgICB0aGlzLnNoYWRvd0ltYWdlTG9hZGVkICYmXHJcbiAgICAgIGN0eC5kcmF3SW1hZ2UoXHJcbiAgICAgICAgdGhpcy5zaGFkb3dJbWFnZSwgLy8gSW5zZXJ0IEltYWdlXHJcbiAgICAgICAgdGhpcy54LCAvLyBYIGZvciBDYW52YXNcclxuICAgICAgICB0aGlzLnkgLy8gWSBmb3IgQ2FudmFzXHJcbiAgICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTcHJpdGU7XHJcbiIsImV4cG9ydCBjb25zdCBkcmF3SW1hZ2UgPSAoc3JjLCBjYikgPT4ge1xyXG4gIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xyXG4gIGltZy5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICBpZiAoY2IpIHtcclxuICAgICAgY2IoaW1nKTtcclxuICAgIH1cclxuICB9O1xyXG4gIGltZy5zcmMgPSBzcmM7XHJcbn07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IE92ZXJXb3JsZCBmcm9tIFwiLi9HYW1lL092ZXJXb3JsZFwiO1xyXG5cclxuY29uc3Qgd29scmQgPSBuZXcgT3ZlcldvcmxkKHtcclxuICBlbGVtZW50OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWUtY29udGFpbmVyXCIpLFxyXG59KTtcclxuXHJcbndvbHJkLmluaXQoKTtcclxuIl0sIm5hbWVzIjpbIlNwcml0ZSIsIkdhbWVPYmplY3QiLCJjb25zdHJ1Y3RvciIsImNvbmZpZyIsIngiLCJ5Iiwic3ByaXRlIiwiZ2FtZU9iamVjdCIsInNyYyIsInVzZVNoYWRvdyIsInVuZGVmaW5lZCIsImRyYXdJbWFnZSIsIk92ZXJXb3JsZE1hcCIsIk92ZXJXb3JsZE1hcHNMaXN0IiwiT3ZlcldvcmxkIiwiZWxlbWVudCIsImNhbnZhcyIsInF1ZXJ5U2VsZWN0b3IiLCJjdHgiLCJnZXRDb250ZXh0IiwibWFwIiwiaW5pdCIsImNvbnNvbGUiLCJsb2ciLCJuYW1lIiwiS2l0Y2hlbiIsInN0YXJ0R2FtZUxvb3AiLCJzdGVwIiwiY2xlYXJSZWN0Iiwid2lkdGgiLCJoZWlnaHQiLCJkcmF3TG93ZXJJbWFnZSIsIk9iamVjdCIsInZhbHVlcyIsImdhbWVPYmplY3RzIiwiZm9yRWFjaCIsIm9iaiIsImRyYXciLCJkcmF3VXBwZXJJbWFnZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIkRlbW9Sb29tIiwibG93ZXJTcmMiLCJ1cHBlclNyYyIsImhlcm8iLCJucGMxIiwibnBjMyIsImxvd2VyTGF5ZXIiLCJJbWFnZSIsInVwcGVyTGF5ZXIiLCJzcXVhcmVTaXplIiwicmVtb3ZlU3F1YXJlU2l6ZSIsImltYWdlIiwiaW1hZ2VJc0xvYWRlZCIsInNoYWRvd0ltYWdlIiwic2hhZG93SW1hZ2VMb2FkZWQiLCJhbmltYXRpb25zIiwiaWRsZURvd24iLCJ3YWxrRG93biIsImN1cnJlbnRBbmltYXRpb24iLCJjdXJyZW50QW5pbWF0aW9uRnJhbWUiLCJjYiIsImltZyIsIm9ubG9hZCIsIndvbHJkIiwiZG9jdW1lbnQiXSwic291cmNlUm9vdCI6IiJ9