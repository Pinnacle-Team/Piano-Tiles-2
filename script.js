const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const tileWidth = window.innerWidth/4;

ctx.strokeStyle = '#000000';
for(let i=1;i<4;++i){
    ctx.moveTo(tileWidth*i,0);
    ctx.lineTo(tileWidth*i,canvas.height);
    ctx.stroke();
}