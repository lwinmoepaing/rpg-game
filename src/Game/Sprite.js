import { drawImage } from "../utils/helper";
import GameObject from "./GameObject";

/**
 * @name Sprite
 */
class Sprite {
  /**
   * @param {Object} config
   * @param {Object} config.animations
   * @param {'idleDown'| 'walkDown' | null} config.currentAnimation
   * @param {String} config.src
   * @param {Number} config.squareSize
   * @param {GameObject} config.gameObject
   * @param {{  x: Number, y: Number} | null} config.removeSquareSize
   * @param {Boolean} config.useShadow
   */
  constructor(config) {
    // SquareSize Default 32
    this.squareSize = config.squareSize || 32;
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
      walkDown: [
        [0, 0], // image row 1 col 1
        [1, 0], // image row 1 col 2
        [2, 0], // image row 1 col 3
        [3, 0], // image row 1 col 4
      ],
    };
    this.currentAnimation = config.currentAnimation || "idleDown";
    this.currentAnimationFrame = 0;

    //
    this.gameObject = config.gameObject;
  }

  /**
   * Draw Context
   * @param {CanvasRenderingContext2D} ctx
   */
  draw(ctx) {
    const x = this.gameObject.x - this.removeSquareSize.x; // Remove Unnecessary width
    const y = this.gameObject.y - this.removeSquareSize.y; // Remove Unnecessary height

    // When Image Loading
    this.imageIsLoaded &&
      ctx.drawImage(
        this.image, // Insert Image
        0, // X from Image
        0, // Y from Image
        this.squareSize, // Width From Image,
        this.squareSize, // Height From Image
        x, // X for Canvas
        y, // Y for Canvas
        this.squareSize, // Width For Canvas
        this.squareSize // Height For Canvas
      );

    this.shadowImageLoaded &&
      ctx.drawImage(
        this.shadowImage, // Insert Image
        x, // X for Canvas
        y // Y for Canvas
      );
  }
}

export default Sprite;
