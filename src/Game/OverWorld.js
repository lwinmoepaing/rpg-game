import { drawImage } from "../utils/helper";
import GameObject from "./GameObject";

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
  }

  init() {
    console.log(`Class ${this.constructor.name} is initialize now .`);

    // Draw Map
    this.drawMap();

    // After Drawing Map, Draw Characters
    this.drawCharacters();
  }

  drawMap() {
    drawImage("/public/images/maps/DemoLower.png", (mapImage) => {
      this.ctx.drawImage(mapImage, 0, 0);
    });
  }

  drawCharacters() {
    // Place GameObject
    const hero = new GameObject({
      x: 5,
      y: 6,
      src: "/public/images/characters/people/hero.png",
    });

    const npc1 = new GameObject({
      x: 7,
      y: 9,
      src: "/public/images/characters/people/npc1.png",
    });

    setTimeout(() => {
      hero.sprite.draw(this.ctx);
      npc1.sprite.draw(this.ctx);
    }, 100);
  }
}

export default OverWorld;
