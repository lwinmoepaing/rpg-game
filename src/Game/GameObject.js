import OverWorldEvent from "./OverWorldEvent";
import OverWorldMap from "./OverWorldMap";
import Sprite from "./Sprite";

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
   * @param {Boolean} config.isPlayerControlled
   * @param {any[]} config.behaviorLoop
   * @param {Array<{events: *[]}>} config.talking
   */
  constructor(config) {
    this.id = config.id ? config.id : null;
    this.isMounted = false;
    const isUseShadow =
      config.useShadow !== null && config.useShadow !== undefined
        ? config.useShadow
        : true;
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.direction = config.direction || "down";
    this.sprite = new Sprite({
      gameObject: this,
      src: config.src,
      useShadow: isUseShadow,
      squareSize: config.squareSize ? config.squareSize : 32,
      removeSquareSize: config.removeSquareSize
        ? config.removeSquareSize
        : { x: 8, y: 18 },
    });

    this.behaviorLoop = config.behaviorLoop ? config.behaviorLoop : [];
    this.behaviorLoopIndex = 0;

    this.talking = config.talking || [];
  }

  /**
   * @param {OverWorldMap} map
   */
  mount(map) {
    this.isMounted = true;
    map.addWall(this.x, this.y);

    setTimeout(() => {
      this.doBehaviorEvent(map);
    });
  }

  update() {}

  /**
   * @param {OverWorldMap} map
   */
  async doBehaviorEvent(map) {
    if (
      map.isCutscenePlaying ||
      this.behaviorLoop.length === 0 ||
      this.isStanding
    ) {
      return;
    }
    let event = this.behaviorLoop[this.behaviorLoopIndex];
    event.who = this.id;
    const eventHandler = new OverWorldEvent({ map: map, event: event });
    await eventHandler.init();
    this.behaviorLoopIndex += 1;
    if (this.behaviorLoopIndex === this.behaviorLoop.length) {
      this.behaviorLoopIndex = 0;
    }
    this.doBehaviorEvent(map);
  }
}

export default GameObject;
