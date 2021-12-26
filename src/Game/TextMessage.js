import KeyPressListener from "./KeyPressListener";

class TextMessage {
  constructor(config) {
    this.text = config.text || "";
    this.onComplete = config.onComplete;
    this.element = null;
  }

  createElement() {
    this.element = document.createElement("div");
    this.element.classList.add("TextMessage");

    this.element.innerHTML = `
        <p class="TextMessage_p">${this.text}</p>
        <button class="TextMessage_button">Next</button>
    `;

    this.element.querySelector("button").addEventListener("click", () => {
      this.done();
    });

    /**
     * @type {KeyPressListener}
     */
    this.actionListener = new KeyPressListener("Enter", () => {
      this.actionListener.unbind();
      this.done();
    });

    this.actionSpaceListener = new KeyPressListener("Space", () => {
      this.actionSpaceListener.unbind();
      this.done();
    });
  }

  done() {
    this.element.remove();
    this.onComplete();
  }

  /**
   * @param {HTMLElement} container
   */
  init(container) {
    this.createElement();
    container.appendChild(this.element);
  }
}

export default TextMessage;
