var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var canvasWidth = canvas.width;
var canvasHeight = canvas.height;

var positionX = 0;
var positionY = canvasHeight / 2;
var padding = 1;

for (var i = 0; i <= canvasWidth / padding; i++) {
  context.beginPath();
  context.moveTo(positionX, positionY);
  if (positionX % 4 === 0) {
    context.lineTo(canvasWidth - canvasWidth, canvasHeight - canvasHeight);
  } else if (positionX % 4 === 1) {
    context.lineTo(canvasWidth, canvasHeight - canvasHeight);
  } else if (positionX % 4 === 2) {
    context.lineTo(canvasWidth - canvasWidth, canvasHeight);
  } else {
    context.lineTo(canvasWidth, canvasHeight);
  }
  context.strokeStyle = 'rgba(0,0,255,.5)';
  context.stroke();
  positionX += padding;
}