import constants from "../Data/constants";

export const drawImage = (src, cb) => {
  const img = new Image();
  img.onload = () => {
    if (cb) {
      cb(img);
    }
  };
  img.src = src;
};

export const withGrids = (n) => {
  return n * constants.halfSquareSize;
};

export const asGridCoord = (x, y) => {
  return `${x * constants.halfSquareSize}, ${y * constants.halfSquareSize}`;
};
