import OverWorldMap from "./OverWorldMap";
import constants from "../Data/constants";
import { OverWorldMapsList } from "../Data/AllMapList";
import TextMessage from "./TextMessage";
import { oppositeDirection } from "../utils/helper";

class OverWorldEvent {
  /**
   * @param {Object} config
   * @param {OverWorldMap} config.map
   * @param {Object} config.event
   * @param {'walk' | 'stand' } config.event.type
   * @param {String} config.event.who
   * @param {Number} config.event.time
   * @param {'up' | 'down' | 'left' | 'right' } config.event.direction
   * @param {String} config.event.text
   * @param {String} config.event.faceHero
   * @param {Function} config.event.onComplete
   */
  constructor(config) {
    const { map, event } = config;
    this.map = map;
    this.event = event;
  }

  /**
   * @return {Promise<Any>}
   */
  init() {
    return new Promise((resolve) => {
      this[this.event.type](resolve);
    });
  }

  stand(resolve) {
    const who = this.map.gameObjects[this.event.who];
    who.startBehavior(
      {
        map: this.map,
      },
      {
        type: "stand",
        direction: this.event.direction,
        time: this.event.time,
      }
    );

    const completeHandler = (e) => {
      if (e.detail.whoId === this.event.who) {
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
    const who = this.map.gameObjects[this.event.who];
    who.startBehavior(
      {
        map: this.map,
      },
      {
        type: "walk",
        direction: this.event.direction,
        retry: true,
      }
    );

    const completeHandler = (e) => {
      if (e.detail.whoId === this.event.who) {
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

  textMessage(resolve) {
    if (this.event.faceHero) {
      const obj = this.map.gameObjects[this.event.faceHero];
      obj.direction = oppositeDirection(this.map.gameObjects["hero"].direction);
    }

    const message = new TextMessage({
      text: this.event.text,
      onComplete: () => resolve(),
    });

    const messageContainer = document.querySelector(".game-container");
    message.init(messageContainer);
  }

  changeMap(resolve) {
    this.map.overWorld.startMap(OverWorldMapsList[this.event.map]);
    resolve();
  }
}

export default OverWorldEvent;
