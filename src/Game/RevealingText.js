class RevealingText {
  /**
   * @param {Object} config
   * @param {HTMLElement} config.element
   * @param {String} config.text
   * @param {Number} config.speed
   * @param {Number | null} config.timeout
   */
  constructor(config) {
    this.element = config.element;
    this.text = config.text;
    this.speed = config.speed || 70;

    this.timeout = null;
    this.isDone = false;
  }

  init() {
    let characters = [];
    this.text.split("").forEach((char) => {
      let span = document.createElement("span");
      span.textContent = char;
      this.element.appendChild(span);

      characters.push({ span, delayAfter: char === " " ? 0 : this.speed });
    });
  }
}

export default RevealingText;
