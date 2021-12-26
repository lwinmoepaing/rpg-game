import constants from "../Data/constants";
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
   */
  update(state) {
    if (this.movingProgressRemainig > 0) {
      this.updatePosition();
    } else {
      if (this.isPlayerControlled && state.arrow) {
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
   */
  startBehavior(state, behavior) {
    this.direction = behavior.direction;

    if (behavior.type === "walk") {
      const isSpaceTaken = state.map.isSpaceTaken(
        this.x,
        this.y,
        this.direction
      );
      if (isSpaceTaken) return;
      state.map.moveWall(this.x, this.y, this.direction);
      this.movingProgressRemainig = constants.movingProgress;
    }
  }

  updatePosition() {
    if (this.movingProgressRemainig > 0) {
      const [property, change] = this.directionUpdate[this.direction];
      this[property] += change;
      this.movingProgressRemainig -= 1;
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
