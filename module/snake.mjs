export const snakeSpeed = 1;
// 中心
const snakeBody = [{ x: 11, y: 11 }];

export const update = () => {
  console.log("update snake");
};

export const draw = (board) => {
  // console.log("draw snake");

  snakeBody.forEach((segment) => {
    const snakeElement = document.createElement("div");
    snakeElement.style.gridRowStart = segment.x;
    snakeElement.style.gridColumnStart = segment.y;
    snakeElement.classList.add("item");
    board.appendChild(snakeElement);
  });
};
