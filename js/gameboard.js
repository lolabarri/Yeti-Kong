//iceblue: rgb(162,210,223)
//Global Variables
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

function Gameboard() {};

Gameboard.prototype.collision = function (HikerZ, object) {

  var vectorX = (HikerZ.x + (HikerZ.width / 2)) -  (object.x +  (object.width / 2));
  var vectorY = (HikerZ.y + (HikerZ.height / 2)) -  (object.y +  (object.height / 2));

  var halfWidths = (HikerZ.width / 2) +  (object.width / 2);
  var halfHeights = (HikerZ.height / 2) +  (object.height / 2);

  var collisionDirection = null;

  if (Math.abs(vectorX) < halfWidths && Math.abs(vectorY) < halfHeights) {
    var offsetX = halfWidths - Math.abs(vectorX);
    var offsetY = halfHeights - Math.abs(vectorY);
    if (offsetX < offsetY) {
      if (vectorX > 0) {
        collisionDirection = "left";
        HikerZ.x += offsetX;
      } else {
        collisionDirection = "right";
        HikerZ.x -= offsetX;
      }
    } else {
      if (vectorY > 0) {
        collisionDirection = "top";
        HikerZ.y += offsetY;
      } else {
        collisionDirection = "bottom";
        HikerZ.y -= offsetY;
      }
    }
  };
  return collisionDirection;
};



