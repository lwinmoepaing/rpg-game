import GameObject from "./GameObject";

class Person extends GameObject {
  /**
   * @param {GameObject} props
   * @param {Boolean} props.isPlayerControlled
   */
  constructor(props) {
    super(props);

    this.movingProgressRemainig = 0;

    this.isPlayerControlled = props.isPlayerControlled || false;

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
    this.updatePosition();
    this.updateSprint(state);

    if (
      this.isPlayerControlled &&
      this.movingProgressRemainig === 0 &&
      state.arrow
    ) {
      this.direction = state.arrow;
      this.movingProgressRemainig = 16;
    }
  }

  updatePosition() {
    if (this.movingProgressRemainig > 0) {
      const [property, change] = this.directionUpdate[this.direction];
      this[property] += change;
      this.movingProgressRemainig -= 1;
    }
  }

  updateSprint(state) {
    // console.log(state);capitalizeFirstLetter
    if (
      this.isPlayerControlled &&
      this.movingProgressRemainig === 0 &&
      !state.arrow
    ) {
      this.sprite.setAnimation("idle" + capitalizeFirstLetter(this.direction));
    }

    if (this.movingProgressRemainig > 0) {
      this.sprite.setAnimation("walk" + capitalizeFirstLetter(this.direction));
    }
  }
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default Person;
