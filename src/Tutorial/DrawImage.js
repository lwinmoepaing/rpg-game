/* <div id="game-container">
<div style="max-width: 360px; margin: 0 auto">
  <img src="/public/images/test-human.png" class="human" />
  <span id="text" style="font-size: 30px"></span>
</div>
</div> */

const gameContainerEl = document.getElementById("game-container");
const canvaEl = document.createElement("canvas");
canvaEl.width = 320;
canvaEl.height = 320;
canvaEl.id = "canvas";

const DrawImage = () => {
  console.log("Drawing Canvas");
  gameContainerEl.appendChild(canvaEl);

  const img = new Image();
  img.src = "https://assets.codepen.io/21542/CameraDemoMap.png";

  const cxt = canvaEl.getContext("2d");
  img.onload = (e) => {
    console.log(e);
    cxt.drawImage(img, 0, 0, 320, 280);
  };

  (() => {
    let px = 64;
    let temp = 0;
    let upOrDown = false;
    let leftOrRight = false;

    const img = document.querySelector(".human");

    let interval = null;

    const textInput = (key) => {
      document.getElementById("text").innerHTML = key.toUpperCase();
    };

    window.addEventListener("keypress", (e) => {
      console.log(e);
      switch (e.key) {
        case "w":
        case "s":
          if (upOrDown) return;
          if (interval) clearInterval(interval);
          interval = setInterval(() => {
            temp = temp - px < -180 ? px : temp - px;
            img.style.objectPosition = `${temp - px}px -0px`;
          }, 88);
          upOrDown = true;
          leftOrRight = false;
          textInput(e.key);
          return;
        case "d":
          if (leftOrRight) return;
          if (interval) clearInterval(interval);
          interval = setInterval(() => {
            temp = temp - px < -180 ? px : temp - px;
            img.style.objectPosition = `${temp - px}px -64px`;
          }, 88);
          upOrDown = false;
          leftOrRight = true;
          textInput(e.key);
          return;
        case "a":
          if (leftOrRight) return;
          if (interval) clearInterval(interval);
          interval = setInterval(() => {
            temp = temp - px < -180 ? px : temp - px;
            img.style.objectPosition = `${temp - px}px -128px`;
          }, 88);
          upOrDown = false;
          leftOrRight = true;
          textInput(e.key);
          return;
        default:
          if (interval) clearInterval(interval);
      }
    });

    window.addEventListener("keyup", (e) => {
      switch (e.key) {
        case "w":
        case "s":
          img.style.objectPosition = `${0 - 0}px -0px`;
          if (interval && !leftOrRight) {
            clearInterval(interval);
            upOrDown = false;
            leftOrRight = false;
          }
          return;
        case "d":
          img.style.objectPosition = `${0 - 0}px -64px`;
          if (interval && !upOrDown) {
            clearInterval(interval);
          }
          upOrDown = false;
          leftOrRight = false;
          return;
        case "a":
          img.style.objectPosition = `${0 - 0}px -128px`;
          if (interval && !upOrDown) {
            clearInterval(interval);
          }
          upOrDown = false;
          leftOrRight = false;
          return;
        default:
          if (interval) clearInterval(interval);
      }
    });
  })();
};

export default DrawImage;
