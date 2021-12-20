import { drawImage } from "../utils/helper";
import GameObject from "./GameObject";
import OverWorldMap, { OverWorldMapsList } from "./OverWorldMap";

class OverWorld {
  /**
   * @param {Object} config
   * @param {HTMLElement} config.element
   * @param {'hehe'|'haha'} config.test
   */
  constructor(config) {
    const { element } = config;
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
    console.log(`Class ${this.constructor.name} is initialize now .`);
    this.map = new OverWorldMap(OverWorldMapsList.Kitchen);
    // Start Game Loop
    this.startGameLoop();
  }

  startGameLoop() {
    const step = () => {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      // Clear Canvas
      this.map.drawLowerImage(this.ctx);

      Object.values(this.map.gameObjects).forEach(
        /**
         * @param {GameObject} obj
         */
        (obj) => {
          obj.x += 0.03;
          obj.sprite.draw(this.ctx);
        }
      );

      this.map.drawUpperImage(this.ctx);

      requestAnimationFrame(() => {
        step();
      });
    };

    step();
  }
}

export default OverWorld;
