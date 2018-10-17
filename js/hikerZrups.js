// Global Variables
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var img = new Image();

// Constructor HikerZrups

function HikerZrups(lives, x, y, width, height, color) {
  this.lives = lives,
  this.x = x,
  this.y = y,
  this.width = width,
  this.height = height,
  this.color = color,
  this.speed = 10,
  this.speedX = 0,
  this.speedY = 0,
  this.jumpStrenth = 3,
  this.jumping = false
};

HikerZrups.prototype.draw = function() {
  ctx.fillStyle = this.color;
  ctx.fillRect(this.x, this.y, this.width, this.height);
}

HikerZrups.prototype.moveRight = function() {
  if (this.speedX < this.speed) {                         
    this.speedX++;}
  return this.x +=this.speedX;         
};

HikerZrups.prototype.moveLeft = function() {
  if (this.speedX < -this.speed) {
    this.speedX++;}
  this.x -= this.speedX;
};

HikerZrups.prototype.moveUp = function() {
  this.y -= this.speedY;
};

HikerZrups.prototype.moveDown = function() {
  this.y += this.speedY;
};

HikerZrups.prototype.jump = function() {
  if(!this.jumping){
    this.jumping = true;
    this.speedY = -this.jumpStrenth;
   };
};

HikerZrups.prototype.movement = function(gravity){
  this.y += this.speedY;
  this.speedY += gravity;
};

HikerZrups.prototype.jumpAgain = function() {
  if(this.y >= 610){
    this.y = 610;
    this.jumping = false;
}
}




// HikerZrups.prototype.moveUpRight = function() {
//   this.speedY = 0.5;
//   this.x += this.speedX;
//   this.y -= this.speedY;
// };

HikerZrups.prototype.hitBottom = function() {
  var rockbottom = 630 - this.height;
  var rocktop = 0 + this.height;
  var rockright = 590 - this.width;
  var rockleft = 0 + this.width;
  if (this.y > rockbottom) {
    this.y = rockbottom;
  }
  else if (this.y < rocktop) {
    this.y = rocktop;
  }
  else if (this.x > rockright) {
    this.x = rockright;
  }
  else if (this.x < rockleft) {
    this.x = rockleft;
  }
};

// HikerZrups.prototype.receiveDamage = function(damage) {
//    this.lives -= damage //cómo en los vikings ;)
// }