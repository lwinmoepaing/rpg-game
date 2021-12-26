import constants from "../Data/constants";
import { emitEvent } from "../utils/helper";
import GameObject from "./GameObject";
import OverWorldMap from "./OverWorldMap";

/**
 */
class Person extends GameObject {
  /**
   * @param {GameObject} config
   */
  constructor(config) {
    super(config);

    this.movingProgressRemainig = 0;

    this.isPlayerControlled = config.isPlayerControlled || false;

    this.isStanding = false;

    this.directionUpdate = {
      up: ["y", -1],
      down: ["y", 1],
      left: ["x", -1],
      right: ["x", 1],
    };
  }

  /**
   * @param {Object} state
   * @param {'down' | 'up' | 'left' | 'right' } state.arrow
   * @param {OverWorldMap} state.map
   */
  update(state) {
    if (this.movingProgressRemainig > 0) {
      this.updatePosition();
    } else {
      if (
        this.isPlayerControlled &&
        !state.map.isCutscenePlaying &&
        state.arrow
      ) {
        this.startBehavior(state, {
          type: "walk",
          direction: state.arrow,
        });
      }

      this.updateSprint(state);
    }
  }

  /**
   * @param {Object} state
   * @param {OverWorldMap} state.map
   * @param {Object} behavior
   * @param {'walk' | 'stand' } behavior.type
   * @param {'up' | 'down' | 'left' | 'right' } behavior.direction
   * @param {Boolean} behavior.retry
   * @param {Number} behavior.time
   */
  startBehavior(state, behavior) {
    this.direction = behavior.direction;

    if (behavior.type === "walk") {
      const isSpaceTaken = state.map.isSpaceTaken(
        this.x,
        this.y,
        this.direction
      );
      if (isSpaceTaken) {
        behavior.retry &&
          setTimeout(() => {
            this.startBehavior(state, behavior);
          }, 10);
        return;
      }
      state.map.moveWall(this.x, this.y, this.direction);
      this.movingProgressRemainig = constants.movingProgress;
      this.updateSprint(state);
    }

    if (behavior.type === "stand") {
      this.isStanding = true;
      setTimeout(() => {
        emitEvent(constants.events.PersonStandComplete, { whoId: this.id });
        this.isStanding = false;
      }, behavior.time);
    }
  }

  updatePosition() {
    if (this.movingProgressRemainig > 0) {
      const [property, change] = this.directionUpdate[this.direction];
      this[property] += change;
      this.movingProgressRemainig -= 1;
    }
    if (this.movingProgressRemainig === 0) {
      emitEvent(constants.events.PersonWalkingComplete, {
        whoId: this.id,
      });
    }
  }

  updateSprint() {
    if (this.movingProgressRemainig > 0) {
      this.sprite.setAnimation("walk" + capitalizeFirstLetter(this.direction));
      return;
    }

    this.sprite.setAnimation("idle" + capitalizeFirstLetter(this.direction));
  }
}

/**
 * @return {String}
 */
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default Person;
