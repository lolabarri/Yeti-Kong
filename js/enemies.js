var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

function Enemies(x, y, width, height, speedX) {
  this.x = x,
  this.y = y,
  this.width = width,
  this.height = height,
  this.speedX = speedX;
  this.image = new Image()
};

Enemies.prototype.draw = function() {
  if(this.speedX <0) {
  this.image.src = './Images/monster2_left.png';
  ctx.drawImage(this.image, this.x, this.y, this.width, this.height);}
  else if(this.speedX >0) {
  this.image.src = './Images/monster2_right.png';
  ctx.drawImage(this.image, this.x, this.y, this.width, this.height);} 
  };

Enemies.prototype.movement = function(){
  this.x += this.speedX;
};

Enemies.prototype.boundaries = function() {
  if (this.x > 575) {
    this.speedX = -this.speedX;
  }
  else if (this.x < 75) {
    this.speedX = -this.speedX;
  }
};