import { OverWorldMapsList } from "../Data/AllMapList";
import GameObject from "./GameObject";
import Person from "./Person";
import OverWorldMap from "./OverWorldMap";
import DirectionInput from "./DirectionInput";

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

  startGameLoop() {
    const step = () => {
      // Clear Of The Canvas
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      // Camera
      const cameraPerson = this.map.gameObjects.hero;

      // Update All Objects
      Object.values(this.map.gameObjects).forEach(
        /**
         * @param {GameObject | Person} obj
         */
        (obj) => {
          obj.update({
            arrow: this.directionController.direction,
          });
        }
      );

      // Draw the Lower Layer
      this.map.drawLowerImage(this.ctx, cameraPerson);

      // Make Person and Middle Layer
      Object.values(this.map.gameObjects).forEach(
        /**
         * @param {GameObject | Person} obj
         */
        (obj) => {
          obj.sprite.draw(this.ctx, cameraPerson);
        }
      );

      this.map.drawUpperImage(this.ctx, cameraPerson);

      requestAnimationFrame(() => {
        step();
      });
    };

    step();
  }

  init() {
    this.map = new OverWorldMap(OverWorldMapsList.DemoRoom);

    this.directionController = new DirectionInput();
    this.directionController.init();

    // Start Game Loop
    this.startGameLoop();
  }
}

export default OverWorld;
