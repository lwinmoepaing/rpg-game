import { nextPosition, withGrids } from "../utils/helper";
import GameObject from "./GameObject";

/**
 * @name OverWorlMap
 */
class OverWorldMap {
  /**
   * @param {Object} config
   * @param {String} config.lowerSrc
   * @param {String} config.upperSrc
   * @param {Object} config.walls
   * @param {{hero: GameObject, npc1: GameObject, npc2: GameObject}} config.gameObjects
   */
  constructor(config) {
    this.gameObjects = config.gameObjects;
    this.walls = config.walls || {};

    this.lowerLayer = new Image();
    this.lowerLayer.src = config.lowerSrc;

    this.upperLayer = new Image();
    this.upperLayer.src = config.upperSrc;

    this.isCutscenePlaying = false;
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

  /**
   * @param {Number} curX
   * @param {Number} curY
   * @param {'up' | 'down' | 'left' | 'right' } direction
   */
  isSpaceTaken(curX, curY, direction) {
    const { x, y } = nextPosition(curX, curY, direction);
    return this.walls[`${x},${y}`] || false;
  }

  // Mounting Object
  mountObjects() {
    // Object.values(this.gameObjects).map((obj) => {
    //   obj.mount(this);
    // });

    Object.keys(this.gameObjects).map((key) => {
      let object = this.gameObjects[key];
      object.id = key;
      object.mount(this);
    });
  }

  // Map Initialize
  /**
   * @param {Number} x
   * @param {Number} y
   */
  addMap(x, y) {}

  // Other Object Walls
  addWall(x, y) {
    this.walls[`${x},${y}`] = true;
  }

  removeWall(x, y) {
    delete this.walls[`${x},${y}`];
  }
  /**
   *
   * @param {'up' | 'down' | 'left' | 'right' } direction
   */
  moveWall(wasX, wasY, direction) {
    this.removeWall(wasX, wasY);
    const { x, y } = nextPosition(wasX, wasY, direction);
    this.addWall(x, y);
  }
}

export default OverWorldMap;
