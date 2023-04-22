let inputDirection = { x: 0, y: 0 };

export const getInputDirection = () => {
  return inputDirection;
};

window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp") {
    inputDirection = { x: 0, y: -1 };
  }
  if (e.key === "ArrowDown") {
    inputDirection = { x: 0, y: 1 };
  }
  if (e.key === "ArrowLeft") {
    inputDirection = { x: -1, y: 0 };
  }
  if (e.key === "ArrowRight") {
    inputDirection = { x: 1, y: 0 };
  }
});
