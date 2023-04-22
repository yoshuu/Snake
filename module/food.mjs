import { onSnake, expendSnake } from "./snake.mjs";

let food = { x: 0, y: 0 };

const expansionRate = 1;

export const update = () => {};

export const draw = (board) => {
  const foodElement = document.createElement("div");
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add("food");
  board.appendChild(foodElement);
};
