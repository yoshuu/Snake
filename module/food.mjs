const getRandomFoodPosition = () => {
  let newFoodPosition;
  while (newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = randomGridPosition();
  }

  return newFoodPosition;
};
import { onSnake, expendSnake } from "./snake.mjs";
import { randomGridPosition } from "./grid.mjs";

let food = getRandomFoodPosition();
const expansionRate = 1;

export const update = () => {
  if (onSnake(food)) {
    expendSnake(expansionRate);
    food = getRandomFoodPosition();
  }
};

export const draw = (board) => {
  const foodElement = document.createElement("div");
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add("food");
  board.appendChild(foodElement);
};
