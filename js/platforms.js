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

// GameArea.prototype.collision = function (HikerZrups, Platforms) {

//   var vectorX = (HikerZrups.x + (HikerZrups.width / 2)) -  (objects.x +  (objects.width / 2));
//   var vectorY = (ninja.y + (ninja.height / 2)) -  (objects.y +  (objects.height / 2));

//   let halfWidths = (ninja.width / 2) +  (objects.width / 2);
//   let halfHeights = (ninja.height / 2) +  (objects.height / 2);

//   let collisionDirection = null;

//   if (Math.abs(vectorX) < halfWidths && Math.abs(vectorY) < halfHeights) {
//     let offsetX = halfWidths - Math.abs(vectorX);
//     let offsetY = halfHeights - Math.abs(vectorY);
//     if (offsetX < offsetY) {
//       if (vectorX > 0) {
//         collisionDirection = "left";
//         ninja.x += offsetX;
//       } else {
//         ollisionDirection = "right";
//         ninja.x -= offsetX;
//       }
//     } else {
//       if (vectorY > 0) {
//         collisionDirection = "top";
//         ninja.y += offsetY;
//       } else {
//         collisionDirection = "bottom";
//         ninja.y -= offsetY;
//       }
//     }
//   };
//   return collisionDirection;
// };