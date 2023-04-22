import { add } from "./add.mjs";
import {
  update as snakeUpdate,
  draw as snakeDraw,
  snakeSpeed,
  getSnakeHead,
  snakeIntersection,
} from "./snake.mjs";

import { outsideGrid } from "./grid.mjs";

import { update as foodUpdate, draw as foodDraw } from "./food.mjs";

console.log(add(10, 2));

const board = document.querySelector(".snake");
let lastRenderTime = 0;
let gameOver = false;

const main = (currentTime) => {
  if (gameOver) {
    if (confirm("失敗")) {
      window.location = "/";
    }
    return;
  }
  window.requestAnimationFrame(main);
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;

  if (secondsSinceLastRender < 1 / snakeSpeed) {
    return;
  }

  console.log("Render");
  lastRenderTime = currentTime;

  update();
  draw();
};

window.requestAnimationFrame(main);

const update = () => {
  snakeUpdate();
  foodUpdate();
  checkDeath();
};
const draw = () => {
  board.innerHTML = "";
  snakeDraw(board);
  foodDraw(board);
};

const checkDeath = () => {
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
};
