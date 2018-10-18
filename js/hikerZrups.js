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
  this.speed = 15,
  this.speedX = 0,
  this.speedY = 0,
  this.jumpStrenth = 7,
  this.jumping = false,
  this.grounded = false  // maybe false?
};

HikerZrups.prototype.draw = function() {
  ctx.fillStyle = this.color;
  ctx.fillRect(this.x, this.y, this.width, this.height);
}

HikerZrups.prototype.moveRight = function() {
  if (this.speedX < this.speed) {                         
    this.speedX++;}        
};

HikerZrups.prototype.moveLeft = function() {
  if (this.speedX > -this.speed) {
    this.speedX--;}
};

HikerZrups.prototype.moveUp = function() {
  this.y -= this.speedY;
};

HikerZrups.prototype.moveDown = function() {
  this.y += this.speedY;
};

HikerZrups.prototype.jump = function() {
  console.log("entra en jump");
  if(!this.jumping){
    console.log(this.speedY)
    this.speedY = this.jumpStrenth * 2;
    console.log(this.speedY)
    this.jumping = true;
   }
};

HikerZrups.prototype.movement = function(gravity, friction){
  this.x += this.speedX;
  this.y += this.speedY;
  console.log(this.speedY);
  this.speedY += gravity;
  this.speedX *= friction;
};

HikerZrups.prototype.hitBottom = function() {
  var rocktop = 0 + this.height;
  var rockright = 590 - this.width;
  var rockleft = 0 + this.width;
  if (this.y < rocktop) {
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