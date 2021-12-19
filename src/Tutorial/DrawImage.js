const gameContainerEl = document.getElementById("game-container");
const canvaEl = document.createElement("canvas");
canvaEl.width = 320;
canvaEl.height = 320;
canvaEl.id = "canvas";

const DrawImage = () => {
  console.log("Drawing Canvas");
  gameContainerEl.appendChild(canvaEl);
};

export default DrawImage;
