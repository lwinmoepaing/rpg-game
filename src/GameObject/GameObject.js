/**
 * @name GameObject
 *
 */
class GameObject {
  /**
   * @param {Object} config
   * @param {String} config.name
   * @param {String} config.age
   */
  constructor(config) {
    this.name = config.name;
    this.agec = config.age;
  }
}

export default GameObject;
