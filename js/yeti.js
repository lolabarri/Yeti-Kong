var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

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