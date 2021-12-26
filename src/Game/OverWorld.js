import { OverWorldMapsList } from "../Data/AllMapList";
import GameObject from "./GameObject";
import Person from "./Person";
import OverWorldMap from "./OverWorldMap";
import DirectionInput from "./DirectionInput";
import KeyPressListener from "./KeyPressListener";
import constants from "../Data/constants";

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
            map: this.map,
          });
        }
      );

      // Draw the Lower Layer
      this.map.drawLowerImage(this.ctx, cameraPerson);

      // Make Person and Middle Layer
      Object.values(this.map.gameObjects)
        .sort((a, b) => {
          return a.y - b.y;
        })
        .forEach(
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

  bindActionInput() {
    new KeyPressListener("Enter", () => {
      this.map.checkForActionCutscene();
    });
    new KeyPressListener("Space", () => {
      this.map.checkForActionCutscene();
    });
  }

  bindHeroPositionCheck() {
    document.addEventListener(constants.events.PersonWalkingComplete, (e) => {
      if (e.detail.whoId === "hero") {
        this.map.checkForFootstepCutscene();
      }
    });
  }

  startMap(mapConfig) {
    this.map = new OverWorldMap(mapConfig);
    this.map.overWorld = this;
    this.map.mountObjects();
  }

  init() {
    this.startMap(OverWorldMapsList.DemoRoom);
    this.bindActionInput();
    this.bindHeroPositionCheck();

    this.directionController = new DirectionInput();
    this.directionController.init();

    // Start Game Loop
    this.startGameLoop();

    // if Cutscene
    this.map.startCutScene([
      { type: "textMessage", text: "Hello Fintech Game!" },
    ]);
  }
}

export default OverWorld;
