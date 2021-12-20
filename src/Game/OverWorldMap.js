import { drawImage } from "../utils/helper";
import GameObject from "./GameObject";

export const OverWorldMapsList = {
  DemoRoom: {
    lowerSrc: "/public/images/maps/DemoLower.png",
    upperSrc: "/public/images/maps/DemoUpper.png",
    gameObjects: {
      hero: new GameObject({
        x: 5,
        y: 6,
        src: "/public/images/characters/people/hero.png",
      }),
      npc1: new GameObject({
        x: 7,
        y: 8,
        src: "/public/images/characters/people/npc1.png ",
      }),
    },
  },

  Kitchen: {
    lowerSrc: "/public/images/maps/KitchenLower.png",
    upperSrc: "/public/images/maps/KitchenUpper.png",
    gameObjects: {
      hero: new GameObject({
        x: 3,
        y: 5,
      }),
      npc1: new GameObject({
        x: 9,
        y: 6,
        src: "/public/images/characters/people/npc2.png ",
      }),
      npc3: new GameObject({
        x: 10,
        y: 8,
        src: "/public/images/characters/people/npc3.png ",
      }),
    },
  },
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

export default OverWorldMap;
