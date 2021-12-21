import GameObject from "../Game/GameObject";
import Person from "../Game/Person";
import { withGrids } from "../utils/helper";

export const OverWorldMapsList = {
  DemoRoom: {
    lowerSrc: "/public/images/maps/DemoLower.png",
    upperSrc: "/public/images/maps/DemoUpper.png",
    gameObjects: {
      hero: new Person({
        isPlayerControlled: true,
        x: withGrids(5),
        y: withGrids(6),
        src: "/public/images/characters/people/hero.png",
      }),
      // npc1: new GameObject({
      //   x: withGrids(7),
      //   y: withGrids(9),
      //   src: "/public/images/characters/people/npc1.png ",
      // }),
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
