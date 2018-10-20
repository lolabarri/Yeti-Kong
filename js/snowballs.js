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
  this.width = 10,
  this.height = 10,
  this.speedX = 2,
  this.speedY = 0,
  this.jumping = false;
  this.grounded = false;
}

Snowballs.prototype.draw = function() {
  ctx.beginPath(),
  ctx.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle, this.anticlockwise),
  ctx.fillStyle = 'rgb(240,255,255)',
  ctx.fill(),
  ctx.strokeWidth = 1,
  ctx.strokeStyle = 'rgb(162,210,223)',
  ctx.stroke();
};

Snowballs.prototype.movement = function(gravity){
  this.x += this.speedX;
  this.y += this.speedY;
  this.speedY += gravity;
};

Snowballs.prototype.boundaries = function() {
  var rockbottom = 630;
  var rocktop = 0;
  var rockright = 590 - this.width / 2;
  var rockleft = 0;
  if (this.y > rockbottom) {
    this.y = rockbottom;
  }
  else if (this.y < rocktop) {
    this.y = rocktop;
  }
  else if (this.x > rockright) {
    this.x = rockright;
    this.speedX = - this.speedX;
  }
  else if (this.x < rockleft) {
    this.x = rockleft;
    this.speedX = - this.speedX;
  }
};