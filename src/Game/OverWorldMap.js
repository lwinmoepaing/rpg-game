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
