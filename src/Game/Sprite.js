import constants from "../Data/constants";
import { drawImage, withGrids } from "../utils/helper";
import GameObject from "./GameObject";

/**
 * @name Sprite
 */
class Sprite {
  /**
   * @param {Object} config
   * @param {Object} config.animations
   * @param {'idleDown' | 'idleRight' | 'idleUp' | 'idleLeft' | 'walkDown' |'walkRight' | 'walkUp' | 'walkLeft' } config.currentAnimation
   * @param {String} config.src
   * @param {Number} config.squareSize
   * @param {GameObject} config.gameObject
   * @param {Number | null} config.animationFrameLimit
   * @param {{  x: Number, y: Number} | null} config.removeSquareSize
   * @param {Boolean} config.useShadow
   */
  constructor(config) {
    // SquareSize Default 32
    this.squareSize = config.squareSize || constants.squareSize;
    this.removeSquareSize = config.removeSquareSize
      ? config.removeSquareSize
      : { x: 8, y: 18 };

    // Setup the image
    drawImage(
      config.src || "/public/images/characters/people/hero.png",
      (image) => {
        this.image = image;
        this.imageIsLoaded = true;
      }
    );

    // Shadow Image
    this.useShadow = config.useShadow || false;
    if (this.useShadow) {
      drawImage("/public/images/characters/shadow.png", (image) => {
        this.shadowImage = image;
        this.shadowImageLoaded = true;
      });
    }

    // Confiure Animation And Initial State
    this.animations = config.animations || {
      idleDown: [[0, 0]],
      idleRight: [[0, 1]],
      idleUp: [[0, 2]],
      idleLeft: [[0, 3]],
      walkDown: [
        [1, 0], // image row 1 col 1
        [0, 0], // image row 1 col 2
        [3, 0], // image row 1 col 4
        [0, 0], // image row 1 col 2
      ],
      walkRight: [
        [1, 1], // image row 1 col 1
        [0, 1], // image row 1 col 2
        [3, 1], // image row 1 col 4
        [0, 1], // image row 1 col 2
      ],
      walkUp: [
        [1, 2], // image row 1 col 1
        [0, 2], // image row 1 col 2
        [3, 2], // image row 1 col 4
        [0, 2], // image row 1 col 2
      ],
      walkLeft: [
        [1, 3], // image row 1 col 1
        [0, 3], // image row 1 col 2
        [3, 3], // image row 1 col 4
        [0, 3], // image row 1 col 2
      ],
    };

    // Set Animation Frame
    this.currentAnimation = config.currentAnimation || "idleDown";
    this.currentAnimationFrame = 0;
    this.animationFrameLimit = config.animationFrameLimit || 8;
    this.animationFrameProgress = this.animationFrameLimit;

    console.log(" this.animationFrameProgress", this.animationFrameProgress);
    //
    this.gameObject = config.gameObject;
  }

  // Get Current Animation Frame
  get frame() {
    return this.animations[this.currentAnimation][this.currentAnimationFrame];
  }

  setAnimation(key) {
    if (this.currentAnimation !== key) {
      this.currentAnimation = key;
      this.currentAnimationFrame = 0;
      this.animationFrameProgress = this.animationFrameLimit;
    }
  }

  updateAnimationProgress() {
    // Downtick Frame Progress
    if (this.animationFrameProgress > 0) {
      this.animationFrameProgress -= 1;
      return;
    }

    // Reset the counter
    this.animationFrameProgress = this.animationFrameLimit;
    this.currentAnimationFrame += 1;

    if (this.frame === undefined) {
      this.currentAnimationFrame = 0;
    }
  }

  /**
   * Draw Context
   * @param {CanvasRenderingContext2D} ctx
   * @param {GameObject} cameraPerson
   */
  draw(ctx, cameraPerson) {
    const x =
      this.gameObject.x -
      this.removeSquareSize.x +
      withGrids(10.5) -
      cameraPerson.x; // Remove Unnecessary width
    const y =
      this.gameObject.y -
      this.removeSquareSize.y +
      withGrids(6) -
      cameraPerson.y; // Remove Unnecessary height
    const [frameX, frameY] = this.frame;
    // console.log(this.frame);

    // console.log("FrameX", frameX);
    // console.log("FrameY", frameY);

    // When Image Loading
    this.imageIsLoaded &&
      ctx.drawImage(
        this.image, // Insert Image
        frameX * constants.squareSize, // X from Image
        frameY * constants.squareSize, // Y from Image
        this.squareSize, // Width From Image,
        this.squareSize, // Height From Image
        x, // X for Canvas
        y, // Y for Canvas
        this.squareSize, // Width For Canvas
        this.squareSize // Height For Canvas
      );

    // Call Animation
    this.updateAnimationProgress();

    this.shadowImageLoaded &&
      ctx.drawImage(
        this.shadowImage, // Insert Image
        x, // X for Canvas
        y // Y for Canvas
      );
  }
}

export default Sprite;
