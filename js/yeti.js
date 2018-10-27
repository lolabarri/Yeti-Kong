var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

function TheYeti(x, y, width, height) {
  this.x = x,
  this.y = y,
  this.width = width,
  this.height = height,
  this.image = new Image()
};

TheYeti.prototype.draw = function() {
  this.image.src = './Images/Yeti_up.png';
  ctx.drawImage(this.image, this.x, this.y, this.width, this.height);}