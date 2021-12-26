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
  return `${x * constants.halfSquareSize},${y * constants.halfSquareSize}`;
};

export const nextPosition = (curX, curY, direction) => {
  let x, y, size;
  x = curX;
  y = curY;
  size = 16;
  if (direction === "left") {
    x -= size;
  } else if (direction === "right") {
    x += size;
  } else if (direction === "up") {
    y -= size;
  } else if (direction === "down") {
    y += size;
  }

  return { x, y };
};

export const emitEvent = (name, detail) => {
  // We Finished the walk
  const event = new CustomEvent(name, {
    detail,
  });

  document.dispatchEvent(event);
};

export const oppositeDirection = (direction) => {
  if (direction === "left") {
    return "right";
  }
  if (direction === "right") {
    return "left";
  }
  if (direction === "up") {
    return "down";
  }

  return "up";
};
