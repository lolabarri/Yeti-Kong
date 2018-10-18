var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

function Platforms(x1, y1, x2, y2) {
  this.x1 = x1,
  this.y1 = y1,
  this.x2 = x2,
  this.y2 = y2
};

Platforms.prototype.draw = function() {
  ctx.beginPath(),
  ctx.moveTo(this.x1, this.y1),
  ctx.lineTo(this.x2, this.y2),
  ctx.lineWidth = 10,
  ctx.strokeStyle = 'rgb(162,210,223)',
  ctx.stroke()
};

Platforms.prototype.collision = function (HikerZ) {

  var vectorX = (HikerZ.x + (HikerZ.width / 2)) -  (this.x1 + ((this.x2 - this.x1)/2));
  var vectorY = (HikerZ.y + (HikerZ.height / 2)) -  (this.y1 + ((this.y2 - this.y1)/2));

  var halfWidths = (HikerZ.width / 2) +  ((this.x2 - this.x1)/2);
  var halfHeights = (HikerZ.height / 2) +  ((this.y2 - this.y1)/2);

  let collisionDirection = null;

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