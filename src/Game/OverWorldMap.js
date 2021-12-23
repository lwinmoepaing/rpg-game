import { withGrids } from "../utils/helper";
import GameObject from "./GameObject";

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
  constructor(config) {
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
    ctx.drawImage(
      this.lowerLayer,
      withGrids(10.5) - cameraPerson.x,
      withGrids(6) - cameraPerson.y
    );
  }

  /**
   * @param {CanvasRenderingContext2D} ctx
   * @param {GameObject} cameraPerson
   */
  drawUpperImage(ctx, cameraPerson) {
    ctx.drawImage(
      this.upperLayer,
      withGrids(10.5) - cameraPerson.x,
      withGrids(6) - cameraPerson.y
    );
  }
}

export default OverWorldMap;
