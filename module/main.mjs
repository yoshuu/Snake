import { add } from "./add.mjs";

console.log(add(10, 2));

const snakeSpeed = 1;

let lastRenderTime = 0;

const main = (currentTime) => {
  window.requestAnimationFrame(main);
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;

  if (secondsSinceLastRender < 1 / snakeSpeed) {
    return;
  }

  console.log("Render");
  lastRenderTime = currentTime;
};

window.requestAnimationFrame(main);
