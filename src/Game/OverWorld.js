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
  }
}

export default OverWorld;
