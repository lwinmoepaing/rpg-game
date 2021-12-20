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
  return n * 16;
};
