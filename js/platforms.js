var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

function Platforms(x, y, width, height) {
  this.x = x,
  this.y = y,
  this.width = width,
  this.height = height
};

Platforms.prototype.draw = function() {
  ctx.beginPath(),
  ctx.rect(this.x, this.y, this.width, this.height),
  ctx.fillStyle = 'rgb(162,210,223)',
  ctx.fill()
};