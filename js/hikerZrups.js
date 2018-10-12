window.onload = function() {

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var gravity = 3;

var hikerZrups = {
  x: 0,
  y: 610,
  width: 20,
  height: 20,
  speedX: 0,
  speedY: gravity,
  color: rgb(255,0,0),

  draw: function() {
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    return;
  }
};

hikerZrups.draw();

};