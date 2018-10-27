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
  this.image = new Image();
  this.snowArr = []
};

Gameboard.prototype.draw = function() {
  this.image.src = './Images/bg_snow.png';
  ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
};

Gameboard.prototype.init = function(HikerZ) {
  var that = this;
  ctx.clearRect(0, 0, 600, 650);
  this.image.src = './Images/gameStart.png';
  this.image.onload = function() {
  ctx.drawImage(that.image, 0, 0, 600, 650);
  HikerZ.dead = false;
  HikerZ.alive = true;
  }
};

Gameboard.prototype.gameEnd = function(HikerZ) {
  HikerZ.alive = false;
  HikerZ.dead = true;
}

Gameboard.prototype.checkWinOrLose = function(HikerZ) {
  if (HikerZ.lives <= 0) {
    ctx.clearRect(0, 0, 600, 650);
    this.image.src = './Images/gameOver1.png';
    ctx.drawImage(this.image, 0, 0, 600, 650);
    HikerZ.dead = true;
    HikerZ.alive = false;
    }

  else if (HikerZ.x <= 10 && HikerZ.y <= 200) {
    ctx.clearRect(0, 0, 600, 650);
    this.image.src = './Images/gameWin1.png';
    ctx.drawImage(this.image, 0, 0, 600, 650);
    HikerZ.dead = false;
    HikerZ.alive = false;
  }
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
  ctx.font = 'bold 15pt Frozito';
  ctx.fillStyle = 'rgb(255,250,250)';
  ctx.fillText('Lives: '+Math.floor(HikerZ.lives), 500, 20);
  ctx.textBaseline = "top";
};

Gameboard.prototype.createSnow = function(){
  for (var i = 0; this.snowArr.length < 30; i++){
    return this.snowArr.push(new Snowballs(45, 15, 10, 0, 2*Math.PI, false));
  }; 
};

Gameboard.prototype.drawSnow = function(gravity) {
  for (var i = 0; i < this.snowArr.length; i++) {
    this.snowArr[i].draw();
    this.snowArr[i].movement(gravity);
    this.snowArr[i].boundaries();
  };
};

Gameboard.prototype.collSnow = function(platformsArr) {
  for (var i = 0; i < this.snowArr.length; i++) {
    this.snowArr[i].grounded = false;
    platformsArr.forEach(el => {
      var dir = this.collision(this.snowArr[i], el);
      if (dir === "left" || dir === "right") {
        this.snowArr[i].speedX = 0;
        this.snowArr[i].jumping = false;
    } else if (dir === "bottom") {
        this.snowArr[i].grounded = true;
        this.snowArr[i].jumping = false;
    } else if (dir === "top") {
        this.snowArr[i].speedY *= -1;
        }
      }
    );
  
      if(this.snowArr[i].grounded){
        this.snowArr[i].speedY = 0;
      };
}
};

Gameboard.prototype.collHiker = function(HikerZ, damage) {
    this.snowArr.forEach(el => {
      var dir = this.collision(HikerZ, el);
      if (dir === "left" || dir === "right") {
        HikerZ.lives -= damage;
        HikerZ.x = 0;
        HikerZ.y = 610;
      } else if (dir === "bottom") {
        HikerZ.lives -= damage;
        HikerZ.x = 0;
        HikerZ.y = 610;
      } else if (dir === "top") {
        HikerZ.lives -= damage;
        HikerZ.x = 0;
        HikerZ.y = 610;
      }
    }
  );
};