export const drawImage = (src, cb) => {
  const img = new Image();
  img.onload = () => {
    if (cb) {
      cb(img);
    }
  };
  img.src = src;
};
