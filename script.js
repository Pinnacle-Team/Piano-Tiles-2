const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const tileWidth = canvas.width / 4;
const tileHeight = canvas.height / 4;

ctx.lineWidth = "2";

for (let x = 1; x < 4; ++x) {
  for (let y = 1; y < 4; ++y) {
    ctx.translate(1, 1);
    ctx.moveTo(-1, tileHeight * x);
    ctx.lineTo(canvas.width + 1, tileHeight * x);
    ctx.moveTo(tileWidth * y, -1);
    ctx.lineTo(tileWidth * y, canvas.height + 1);
    ctx.stroke();
    ctx.translate(-1, -1);
  }
}
