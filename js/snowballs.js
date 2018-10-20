var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var img = new Image();

function Snowballs(x, y, radius, startAngle, endAngle, anticlockwise) {
  this.x = x,
  this.y = y,
  this.radius = radius,
  this.startAngle = startAngle,
  this.endAngle = endAngle,
  this.anticlockwise = anticlockwise,
  this.speedX = 0,
  this.speedY = 0,
  this.gravity = 0.3,
  this.friction = 0.6
  this.jumping = false;
  this.grounded = false;
}

Snowballs.prototype.draw = function() {
  ctx.beginPath(),
  ctx.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle, this.anticlockwise),
  ctx.fillStyle = 'rgb(240,255,255)',
  ctx.fill()
};

Snowballs.prototype.movement = function(gravity, friction){
  this.x += this.speedX;
  this.y += this.speedY;
  this.speedY += this.gravity;
  this.speedX *= this.friction;
};