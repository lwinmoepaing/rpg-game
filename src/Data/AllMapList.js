import GameObject from "../Game/GameObject";
import Person from "../Game/Person";
import { asGridCoord, withGrids } from "../utils/helper";

/**
 * @typedef {Object} RoomObj
 * @property {String} lowerSrc -
 * @property {String} upperSrc -
 * @property {Object} gameObjects -
 */

export const OverWorldMapsList = {
  /**
   * @type {RoomObj}
   */
  DemoRoom: {
    lowerSrc: "/public/images/maps/DemoLower.png",
    upperSrc: "/public/images/maps/DemoUpper.png",
    gameObjects: {
      hero: new Person({
        isPlayerControlled: true,
        x: withGrids(2),
        y: withGrids(4),
        src: "/public/images/characters/people/hero.png",
      }),
      npc1: new Person({
        x: withGrids(7),
        y: withGrids(9),
        src: "/public/images/characters/people/npc1.png ",
        behaviorLoop: [
          { type: "stand", direction: "left", time: 800 },
          { type: "stand", direction: "up", time: 800 },
          { type: "stand", direction: "right", time: 1200 },
          { type: "stand", direction: "up", time: 300 },
        ],
      }),
      npc2: new Person({
        x: withGrids(3),
        y: withGrids(7),
        src: "/public/images/characters/people/npc2.png ",
        behaviorLoop: [
          { type: "walk", direction: "left" },
          { type: "stand", direction: "up", time: 800 },
          { type: "walk", direction: "up" },
          { type: "walk", direction: "right" },
          { type: "walk", direction: "down" },
        ],
      }),
    },
    walls: {
      [asGridCoord(7, 6)]: true,
      [asGridCoord(8, 6)]: true,
      [asGridCoord(7, 7)]: true,
      [asGridCoord(8, 7)]: true,
    },
  },

  Kitchen: {
    lowerSrc: "/public/images/maps/KitchenLower.png",
    upperSrc: "/public/images/maps/KitchenUpper.png",
    gameObjects: {
      // hero: new GameObject({
      //   x: withGrids(3),
      //   y: withGrids(5),
      // }),
      // npc1: new GameObject({
      //   x: withGrids(9),
      //   y: withGrids(6),
      //   src: "/public/images/characters/people/npc2.png ",
      // }),
      // npc3: new GameObject({
      //   x: withGrids(10),
      //   y: withGrids(8),
      //   src: "/public/images/characters/people/npc3.png ",
      // }),
    },
  },
};
