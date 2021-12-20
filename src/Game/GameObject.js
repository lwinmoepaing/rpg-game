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
   * @param {Boolean | null} config.useShadow
   */
  constructor(config) {
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.sprite = new Sprite({
      gameObject: this,
      src: config.src,
      useShadow:
        config.useShadow !== null || config.useShadow !== undefined
          ? config.useShadow
          : true,
    });
  }
}

export default GameObject;
