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
    lowerSrc: "/public/images/maps/UabMap1.png",
    upperSrc: "/public/images/maps/UabMap1Lower.png",
    gameObjects: {
      hero: new Person({
        isPlayerControlled: true,
        x: withGrids(4),
        y: withGrids(13),
        src: "/public/images/characters/people/npc3.png",
      }),
      npc1: new Person({
        x: withGrids(7),
        y: withGrids(7),
        src: "/public/images/characters/people/npc4.png ",
        behaviorLoop: [
          { type: "stand", direction: "left", time: 2000 },
          { type: "stand", direction: "down", time: 4000 },
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
        x: withGrids(6),
        y: withGrids(11),
        src: "/public/images/characters/people/npc2.png ",
        direction: "right",
        behaviorLoop: [{ type: "stand", direction: "right", time: 2000 }],
      }),

      npc4: new Person({
        x: withGrids(8),
        y: withGrids(11),
        direction: "left",
        src: "/public/images/characters/people/npc5.png ",
        behaviorLoop: [{ type: "stand", direction: "left", time: 2000 }],
        talking: [],
      }),
    },
    walls: {
      [asGridCoord(6, 11)]: true,
      [asGridCoord(7, 11)]: true,
      [asGridCoord(8, 11)]: true,
      [asGridCoord(4, 10)]: true,
      [asGridCoord(4, 9)]: true,
      [asGridCoord(2, 10)]: true,
      [asGridCoord(2, 9)]: true,
      [asGridCoord(5, 7)]: true,
      [asGridCoord(5, 8)]: true,
      [asGridCoord(6, 8)]: true,
      [asGridCoord(7, 8)]: true,
      [asGridCoord(8, 8)]: true,
      [asGridCoord(1, 3)]: true,
      [asGridCoord(1, 5)]: true,
      [asGridCoord(1, 7)]: true,
      [asGridCoord(5, 1)]: true,
      [asGridCoord(5, 3)]: true,
      [asGridCoord(5, 5)]: true,
      [asGridCoord(6, 5)]: true,
      [asGridCoord(7, 5)]: true,
      [asGridCoord(8, 5)]: true,
      [asGridCoord(1, 1)]: true,
      [asGridCoord(2, 1)]: true,
      [asGridCoord(3, 1)]: true,
      [asGridCoord(4, 1)]: true,
      [asGridCoord(9, 6)]: true,
      [asGridCoord(9, 7)]: true,
      [asGridCoord(9, 8)]: true,
      [asGridCoord(9, 9)]: true,
      [asGridCoord(9, 10)]: true,
      [asGridCoord(9, 12)]: true,
      [asGridCoord(0, 8)]: true,
      [asGridCoord(0, 9)]: true,
      [asGridCoord(0, 10)]: true,
      [asGridCoord(0, 11)]: true,
      [asGridCoord(1, 13)]: true,
      [asGridCoord(2, 13)]: true,
      [asGridCoord(6, 13)]: true,
      [asGridCoord(7, 13)]: true,
      [asGridCoord(8, 13)]: true,
      [asGridCoord(8, 13)]: true,

      [asGridCoord(0, 12)]: true,
      [asGridCoord(0, 2)]: true,
      [asGridCoord(0, 4)]: true,
      [asGridCoord(0, 6)]: true,
      [asGridCoord(6, 4)]: true,
      [asGridCoord(6, 2)]: true,
      [asGridCoord(3, 14)]: true,
      [asGridCoord(4, 14)]: true,
      [asGridCoord(5, 14)]: true,
    },
    cutsceneSpaces: {
      [asGridCoord(1, 2)]: [
        {
          events: [{ type: "changeMap", map: "Map2" }],
        },
      ],
      [asGridCoord(1, 4)]: [
        {
          events: [{ type: "changeMap", map: "Map2" }],
        },
      ],
      [asGridCoord(1, 6)]: [
        {
          events: [{ type: "changeMap", map: "Map2" }],
        },
      ],

      [asGridCoord(5, 4)]: [
        {
          events: [{ type: "changeMap", map: "Map2" }],
        },
      ],
      [asGridCoord(5, 2)]: [
        {
          events: [{ type: "changeMap", map: "Map2" }],
        },
      ],
    },
  },

  Map2: {
    lowerSrc: "/public/images/maps/UabMap2.png",
    upperSrc: "/public/images/maps/UabMap2Lower.png",
    gameObjects: {
      hero: new Person({
        isPlayerControlled: true,
        x: withGrids(3),
        y: withGrids(10),
        src: "/public/images/characters/people/npc3.png ",
      }),
      npc3: new Person({
        x: withGrids(15),
        y: withGrids(13),
        src: "/public/images/characters/people/npc1.png ",
        talking: [
          {
            events: [
              { type: "textMessage", text: "You Made it!!", faceHero: "npc3" },
            ],
          },
        ],

        behaviorLoop: [
          { type: "stand", direction: "left", time: 2000 },
          { type: "stand", direction: "down", time: 4000 },
          { type: "stand", direction: "right", time: 4000 },
          { type: "stand", direction: "down", time: 4000 },
        ],
      }),
    },

    walls: {
      [asGridCoord(1, 4)]: true,
      [asGridCoord(2, 4)]: true,
      [asGridCoord(3, 3)]: true,
      [asGridCoord(4, 4)]: true,
      [asGridCoord(5, 4)]: true,
      [asGridCoord(6, 4)]: true,
      [asGridCoord(7, 4)]: true,
      [asGridCoord(8, 4)]: true,
      [asGridCoord(9, 4)]: true,
      [asGridCoord(10, 3)]: true,
      [asGridCoord(11, 4)]: true,
      [asGridCoord(12, 3)]: true,
      [asGridCoord(13, 4)]: true,
      [asGridCoord(14, 4)]: true,
      [asGridCoord(15, 4)]: true,
      [asGridCoord(15, 3)]: true,
      [asGridCoord(16, 2)]: true,
      [asGridCoord(17, 1)]: true,
      [asGridCoord(17, 2)]: true,
      [asGridCoord(17, 3)]: true,
      [asGridCoord(17, 4)]: true,
      [asGridCoord(18, 4)]: true,
      [asGridCoord(18, 3)]: true,
      [asGridCoord(16, 6)]: true,
      [asGridCoord(14, 9)]: true,
      [asGridCoord(18, 9)]: true,
      [asGridCoord(19, 9)]: true,
      [asGridCoord(17, 9)]: true,
      [asGridCoord(18, 8)]: true,
      [asGridCoord(19, 8)]: true,
      [asGridCoord(17, 8)]: true,
      [asGridCoord(19, 10)]: true,
      [asGridCoord(17, 10)]: true,
      [asGridCoord(12, 6)]: true,
      [asGridCoord(12, 7)]: true,
      [asGridCoord(12, 8)]: true,
      [asGridCoord(12, 9)]: true,
      [asGridCoord(12, 10)]: true,
      [asGridCoord(12, 11)]: true,
      [asGridCoord(12, 12)]: true,
      [asGridCoord(12, 13)]: true,
      [asGridCoord(12, 14)]: true,
      [asGridCoord(14, 14)]: true,
      [asGridCoord(15, 14)]: true,
      [asGridCoord(16, 14)]: true,
      [asGridCoord(14, 12)]: true,
      [asGridCoord(15, 12)]: true,
      [asGridCoord(16, 12)]: true,
      [asGridCoord(16, 13)]: true,
      [asGridCoord(14, 16)]: true,
      [asGridCoord(15, 16)]: true,
      [asGridCoord(16, 16)]: true,
      [asGridCoord(17, 16)]: true,
      [asGridCoord(18, 16)]: true,
      [asGridCoord(1, 19)]: true,
      [asGridCoord(2, 18)]: true,
      [asGridCoord(2, 19)]: true,
      [asGridCoord(2, 20)]: true,
      [asGridCoord(2, 21)]: true,

      [asGridCoord(5, 18)]: true,
      [asGridCoord(5, 19)]: true,
      [asGridCoord(5, 20)]: true,
      [asGridCoord(5, 21)]: true,

      [asGridCoord(8, 18)]: true,
      [asGridCoord(8, 19)]: true,
      [asGridCoord(8, 20)]: true,
      [asGridCoord(8, 21)]: true,

      [asGridCoord(11, 18)]: true,
      [asGridCoord(11, 19)]: true,
      [asGridCoord(11, 20)]: true,
      [asGridCoord(11, 21)]: true,

      [asGridCoord(14, 18)]: true,
      [asGridCoord(14, 19)]: true,
      [asGridCoord(14, 20)]: true,
      [asGridCoord(14, 21)]: true,

      [asGridCoord(17, 18)]: true,
      [asGridCoord(17, 19)]: true,
      [asGridCoord(17, 20)]: true,
      [asGridCoord(17, 21)]: true,

      [asGridCoord(0, 5)]: true,
      [asGridCoord(1, 6)]: true,
      [asGridCoord(1, 7)]: true,
      [asGridCoord(1, 9)]: true,
      [asGridCoord(1, 11)]: true,
      [asGridCoord(1, 13)]: true,
      [asGridCoord(1, 14)]: true,
      [asGridCoord(0, 15)]: true,
      [asGridCoord(0, 16)]: true,
      [asGridCoord(0, 17)]: true,
      [asGridCoord(0, 18)]: true,

      [asGridCoord(3, 22)]: true,
      [asGridCoord(4, 22)]: true,
      [asGridCoord(6, 22)]: true,
      [asGridCoord(7, 22)]: true,
      [asGridCoord(9, 22)]: true,
      [asGridCoord(10, 22)]: true,
      [asGridCoord(12, 22)]: true,
      [asGridCoord(13, 22)]: true,
      [asGridCoord(15, 22)]: true,
      [asGridCoord(16, 22)]: true,
      [asGridCoord(18, 22)]: true,
      [asGridCoord(19, 22)]: true,

      [asGridCoord(20, 21)]: true,
      [asGridCoord(20, 20)]: true,
      [asGridCoord(20, 19)]: true,
      [asGridCoord(20, 18)]: true,
      [asGridCoord(20, 17)]: true,
      [asGridCoord(20, 16)]: true,
      [asGridCoord(20, 15)]: true,
      [asGridCoord(20, 14)]: true,
      [asGridCoord(20, 13)]: true,
      [asGridCoord(20, 12)]: true,
      [asGridCoord(20, 11)]: true,
      [asGridCoord(20, 7)]: true,
      [asGridCoord(20, 6)]: true,
      [asGridCoord(20, 5)]: true,
      [asGridCoord(20, 4)]: true,
      [asGridCoord(20, 3)]: true,
      [asGridCoord(20, 2)]: true,
      [asGridCoord(20, 1)]: true,
      [asGridCoord(19, 0)]: true,
      [asGridCoord(18, 0)]: true,

      [asGridCoord(5, 6)]: true,
      [asGridCoord(5, 7)]: true,
      [asGridCoord(5, 9)]: true,
      [asGridCoord(5, 12)]: true,
      [asGridCoord(5, 13)]: true,
      [asGridCoord(5, 14)]: true,
      [asGridCoord(6, 6)]: true,
      [asGridCoord(6, 7)]: true,
      [asGridCoord(6, 8)]: true,
      [asGridCoord(6, 9)]: true,
      [asGridCoord(6, 10)]: true,
      [asGridCoord(6, 11)]: true,
      [asGridCoord(6, 12)]: true,
      [asGridCoord(6, 13)]: true,
      [asGridCoord(6, 14)]: true,

      [asGridCoord(0, 8)]: true,
      [asGridCoord(0, 10)]: true,
      [asGridCoord(0, 12)]: true,
    },

    cutsceneSpaces: {
      [asGridCoord(1, 8)]: [
        {
          events: [{ type: "changeMap", map: "DemoRoom" }],
        },
      ],
      [asGridCoord(1, 10)]: [
        {
          events: [{ type: "changeMap", map: "DemoRoom" }],
        },
      ],
      [asGridCoord(1, 12)]: [
        {
          events: [{ type: "changeMap", map: "DemoRoom" }],
        },
      ],

      [asGridCoord(5, 8)]: [
        {
          events: [{ type: "changeMap", map: "DemoRoom" }],
        },
      ],
      [asGridCoord(5, 10)]: [
        {
          events: [{ type: "changeMap", map: "DemoRoom" }],
        },
      ],
    },
  },
};
