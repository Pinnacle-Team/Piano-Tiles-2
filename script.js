const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const tileWidth = canvas.width / 4;

for (let i = 1; i < 4; ++i) {
  ctx.beginPath();
  ctx.moveTo(tileWidth * i, 0);
  ctx.lineTo(tileWidth * i, canvas.height);
  ctx.stroke();
}
