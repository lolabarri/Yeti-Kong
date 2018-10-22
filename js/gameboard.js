//iceblue: rgb(162,210,223)
//Global Variables
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var img = new Image();

function Gameboard() {
  this.x = 0,
  this.y = 0,
  this.width = 600,
  this.height = 650,
  this.image = img
};

Gameboard.prototype.draw = function() {
  this.image.src = './Images/bg.png';
  ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
};

Gameboard.prototype.collision = function (HikerZ, object) {

  var vectorX = (HikerZ.x + (HikerZ.width / 2)) -  (object.x +  (object.width / 2));
  var vectorY = (HikerZ.y + (HikerZ.height / 2)) -  (object.y +  (object.height / 2));

  var halfWidths = (HikerZ.width / 2) +  (object.width / 2);
  var halfHeights = (HikerZ.height / 2) +  (object.height / 2);

  var collisionDirection = null;

  if (Math.abs(vectorX) < halfWidths && Math.abs(vectorY) < halfHeights) {
    var offsetX = halfWidths - Math.abs(vectorX);
    var offsetY = halfHeights - Math.abs(vectorY);
    if (offsetX >= offsetY) {
      if (vectorY > 0) {
        collisionDirection = "top";
        HikerZ.y += offsetY;
      } else {
        collisionDirection = "bottom";
        HikerZ.y -= offsetY;
      }
    } else {
      if (vectorX > 0) {
        collisionDirection = "left";
        HikerZ.x += offsetX;
      } else {
        collisionDirection = "right";
        HikerZ.x -= offsetX;
      }
    }
  };
  return collisionDirection;
};

Gameboard.prototype.drawLives = function(HikerZ){
  ctx.font = 'bold 15pt Calibri';
  ctx.fillStyle = 'rgb(162,210,223)';
  ctx.fillText('Lives: '+Math.floor(HikerZ.lives), 500, 20);
  ctx.textBaseline = "top";
};