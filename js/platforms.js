var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var img = new Image();

function Platforms(x, y, width, height) {
  this.x = x,
  this.y = y,
  this.width = width,
  this.height = height,
  this.image = new Image();
};

Platforms.prototype.draw = function() {
  this.image.src = './Images/snow_58.png';
  ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
};