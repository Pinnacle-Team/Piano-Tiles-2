const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
ctx.lineWidth = "2";

//global variables
const WIDTH = canvas.width;
const HEIGHT = canvas.height;
const tileWidth = WIDTH / 4 ;
const tileHeight = HEIGHT / 4;


for (let x = 1; x < 4; ++x) {
  for (let y = 1; y < 4; ++y) {
    // ctx.translate(1, 1);
    ctx.moveTo(-1, tileHeight * x);
    ctx.lineTo(WIDTH + 1, tileHeight * x);
    ctx.moveTo(tileWidth * y, -1);
    ctx.lineTo(tileWidth * y, HEIGHT + 1);
    ctx.stroke();
    // ctx.translate(-1, -1);
  }
}


var tiles = [];

//add new row function
function addNewRow(){
  let blackIndex = Math.floor(Math.random()*4);
  for(let i=0;i<4;++i){
    if(i===blackIndex){
      tiles.push(0);
    }else{
      tiles.push(1);
    }
  }
}

function drawTiles(){

  let alphabets=['A','S','D','F'];
  for(let i=0;i<tiles.length;++i){
    let xpos = (i%4)*tileWidth;
    let ypos = Math.floor(i/4)*tileHeight;

    ctx.strokeStyle = '#FFFFFF';
    if(tiles[i]==0){
      ctx.fillStyle ='#000000';
      ctx.fillRect(xpos,ypos,tileWidth,tileHeight);
      ctx.fillStyle ='#FFFFFF';
      ctx.font = '50px Arial';
      ctx.fillText(alphabets[i%4],xpos+33,ypos+85);
    }
  }
}

addNewRow();
addNewRow();
addNewRow();
addNewRow();
drawTiles();
console.log(tiles);