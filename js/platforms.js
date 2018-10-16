var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

function Platforms(x1, y1, x2, y2) {
  this.x1 = x1,
  this.y1 = y1,
  this.x2 = x2,
  this.y2 = y2
};

Platforms.prototype.draw = function() {
  ctx.beginPath(),
  ctx.moveTo(this.x1, this.y1),
  ctx.lineTo(this.x2, this.y2),
  ctx.lineWidth = 10,
  ctx.strokeStyle = 'rgb(162,210,223)',
  ctx.stroke()
};