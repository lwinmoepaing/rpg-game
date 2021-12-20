import Sprite from "./Sprite";

/**
 * @name GameObject
 */
class GameObject {
  /**
   * @param {Object} config
   * @param {Number} config.x
   * @param {Number} config.y
   * @param {String} config.src
   * @param {'down' | 'up' | 'left' | 'right' | null} config.direction
   * @param {Boolean | null} config.useShadow
   * @param {Number} config.squareSize
   * @param {{x: Number, y: Number} | null} config.removeSquareSize
   */
  constructor(config) {
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.direction = config.direction || "down";
    this.sprite = new Sprite({
      gameObject: this,
      src: config.src,
      useShadow:
        config.useShadow !== null || config.useShadow !== undefined
          ? config.useShadow
          : true,
      squareSize: config.squareSize ? config.squareSize : 32,
      removeSquareSize: config.removeSquareSize
        ? config.removeSquareSize
        : { x: 8, y: 18 },
    });
  }

  update() {}
}

export default GameObject;
