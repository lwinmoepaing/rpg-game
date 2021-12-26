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
          { type: "stand", direction: "left", time: 1500 },
          { type: "stand", direction: "up", time: 1500 },
          { type: "stand", direction: "right", time: 1200 },
          { type: "stand", direction: "up", time: 300 },
        ],
        talking: [
          {
            events: [
              { type: "textMessage", text: "I'm Busy", faceHero: "npc1" },
              { type: "textMessage", text: "Go away!" },
            ],
          },
        ],
      }),
      npc2: new Person({
        x: withGrids(8),
        y: withGrids(5),
        src: "/public/images/characters/people/npc2.png ",
        // behaviorLoop: [
        //   { type: "walk", direction: "left" },
        //   { type: "stand", direction: "up", time: 800 },
        //   { type: "walk", direction: "up" },
        //   { type: "walk", direction: "right" },
        //   { type: "walk", direction: "down" },
        // ],
        talking: [],
      }),
    },
    walls: {
      [asGridCoord(7, 6)]: true,
      [asGridCoord(8, 6)]: true,
      [asGridCoord(7, 7)]: true,
      [asGridCoord(8, 7)]: true,
    },
    cutsceneSpaces: {
      [asGridCoord(7, 4)]: [
        {
          events: [
            { who: "npc2", type: "walk", direction: "left" },
            { who: "npc2", type: "stand", direction: "up", time: 500 },
            { type: "textMessage", text: "You can't be in there!" },
            { who: "npc2", type: "walk", direction: "right" },
            { who: "npc2", type: "stand", direction: "down" },
            { who: "hero", type: "walk", direction: "down" },
            { who: "hero", type: "walk", direction: "left" },
          ],
        },
      ],
      [asGridCoord(5, 10)]: [
        {
          events: [{ type: "changeMap", map: "Kitchen" }],
        },
      ],
    },
  },

  Kitchen: {
    lowerSrc: "/public/images/maps/KitchenLower.png",
    upperSrc: "/public/images/maps/KitchenUpper.png",
    gameObjects: {
      hero: new Person({
        isPlayerControlled: true,
        x: withGrids(3),
        y: withGrids(5),
      }),
      npc3: new Person({
        x: withGrids(10),
        y: withGrids(8),
        src: "/public/images/characters/people/npc3.png ",
        talking: [
          {
            events: [
              { type: "textMessage", text: "You Made it!!", faceHero: "npc3" },
            ],
          },
        ],
      }),
    },
  },
};
