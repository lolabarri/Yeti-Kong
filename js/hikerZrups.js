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
  this.speed = 3,
  this.speedX = 0,
  this.speedY = 0,
  this.jumpStrength = 6,
  this.jumping = false,
  this.grounded = false,
  this.image = new Image()
};

HikerZrups.prototype.draw = function() {
  if (this.speedX > 0) {
    this.image.src = './Images/HZ walk-right.png';
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);}
  else if (this.speedX < 0) {
    this.image.src = './Images/HZ walk-left.png';
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);}
  else if (this.speedX === 0) {
    this.image.src = './Images/hikerZrups.png';
  ctx.drawImage(this.image, this.x, this.y, this.width, this.height);}
  };


HikerZrups.prototype.moveRight = function() {
  if (this.speedX < this.speed) {                         
    this.speedX++;
  }        
};

HikerZrups.prototype.moveLeft = function() {
  if (this.speedX > -this.speed) {
    this.speedX--;
  }
};

HikerZrups.prototype.jump = function() {
  if(!this.jumping){
    this.jumping = true;
    this.grounded = false;
    this.speedY = - this.jumpStrength;
   }
};

HikerZrups.prototype.movement = function(gravity, friction){
  this.x += this.speedX;
  this.y += this.speedY;
  this.speedY += gravity;
  this.speedX *= friction;
};

HikerZrups.prototype.boundaries = function() {
  var rockbottom = 650;
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
  }
  else if (this.x < rockleft) {
    this.x = rockleft;
  }
};

HikerZrups.prototype.receiveDamage = function(damage) {
   this.lives -= damage;
};

HikerZrups.prototype.checkWinOrLose = function() {
  if (this.lives <= 0) {
    alert("You lose");
  }
  else if (this.x <= 10 && this.y <= 200) {
    alert("You win");
  }
};