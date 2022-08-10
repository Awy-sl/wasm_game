import init, { World } from "wasm_game";

init().then(() => {
  const CELL_SIZE = 20;

  const world = World.new(16);

  const worldWidth = world.width();

  const canvas = document.getElementById("sanke-world");

  const ctx = canvas.getContext("2d");

  canvas.width = worldWidth * CELL_SIZE;
  canvas.height = worldWidth * CELL_SIZE;

  function drawWorld() {
    ctx.beginPath();
    for (let x = 0; x < worldWidth + 1; x++) {
      ctx.moveTo(x * CELL_SIZE, 0);
      ctx.lineTo(x * CELL_SIZE, worldWidth * CELL_SIZE);
    }
    for (let y = 0; y < worldWidth + 1; y++) {
      ctx.moveTo(0, y * CELL_SIZE);
      ctx.lineTo(CELL_SIZE * worldWidth, CELL_SIZE * y);
    }

    ctx.stroke();
  }
  drawWorld();
});
