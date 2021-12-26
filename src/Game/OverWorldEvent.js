import OverWorldMap from "./OverWorldMap";
import constants from "../Data/constants";

class OverWorldEvent {
  /**
   * @param {Object} config
   * @param {Object} config.eventConfig
   * @param {'walk' | 'stand' } config.eventConfig.type
   * @param {String} config.eventConfig.who
   * @param {Number} config.eventConfig.time
   * @param {'up' | 'down' | 'left' | 'right' } config.eventConfig.direction
   * @param {OverWorldMap} config.map
   */
  constructor(config) {
    const { map, eventConfig } = config;
    this.map = map;
    this.eventConfig = eventConfig;
  }

  /**
   * @return {Promise<Any>}
   */
  init() {
    return new Promise((resolve) => {
      this[this.eventConfig.type](resolve);
    });
  }

  stand(resolve) {
    const who = this.map.gameObjects[this.eventConfig.who];
    who.startBehavior(
      {
        map: this.map,
      },
      {
        type: "stand",
        direction: this.eventConfig.direction,
        time: this.eventConfig.time,
      }
    );

    const completeHandler = (e) => {
      if (e.detail.whoId === this.eventConfig.who) {
        document.removeEventListener(
          constants.events.PersonStandComplete,
          completeHandler
        );
        resolve();
      }
    };

    document.addEventListener(
      constants.events.PersonStandComplete,
      completeHandler
    );
  }

  walk(resolve) {
    const who = this.map.gameObjects[this.eventConfig.who];
    who.startBehavior(
      {
        map: this.map,
      },
      {
        type: "walk",
        direction: this.eventConfig.direction,
        retry: true,
      }
    );

    const completeHandler = (e) => {
      if (e.detail.whoId === this.eventConfig.who) {
        document.removeEventListener(
          constants.events.PersonWalkingComplete,
          completeHandler
        );
        resolve();
      }
    };

    document.addEventListener(
      constants.events.PersonWalkingComplete,
      completeHandler
    );
  }
}

export default OverWorldEvent;
