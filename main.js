window.onload = function() {

  var HikerZ = new HikerZrups(3, 0, 610, 20, 20, 'rgb(255,0,0)');
  var Boardgame = new Gameboard();
  var Snowbullets = new Snowballs(100, 30, 10, 0, 2*Math.PI, false);
  var gravity = 0.3;
  var friction = 0.8;
  var damage = 1;
  var keys = [];

  var Plat0 = new Platforms(0, 630, 600, 20);
  var Plat1 = new Platforms(75, 570, 600, 20);
  var Plat2 = new Platforms(0, 485, 525, 20);
  var Plat3 = new Platforms(75, 395, 600, 20);
  var Plat4 = new Platforms(0, 300, 525, 20);
  var Plat5 = new Platforms(75, 220, 600, 20);
  var Plat6 = new Platforms(0, 125, 525, 20);

  var platformsArr = [Plat0, Plat1, Plat2, Plat3, Plat4, Plat5, Plat6];

  function updateCanvas() {
    ctx.clearRect(0, 0, 600, 650);
    platformsArr.forEach(e => {
      e.draw();
    });
    HikerZ.draw();
    Snowbullets.draw();
    HikerZ.movement(gravity, friction);
    Snowbullets.movement(gravity);
    HikerZ.boundaries();
    Snowbullets.boundaries();
    Boardgame.drawLives(HikerZ);
    // HikerZ.checkWinOrLose();
  };

  function loop() {
    document.onkeydown = function (e) {
      keys[e.keyCode] = true;
    };
    
    document.onkeyup = function (e) {
        keys[e.keyCode] = false;
    };

    if (keys[32]) { HikerZ.jump(); }
    if (keys[38]) { HikerZ.moveUp(); }
    if (keys[40]) { HikerZ.moveDown(); }
    if (keys[37]) { HikerZ.moveLeft(); }
    if (keys[39]) { HikerZ.moveRight(); }

    HikerZ.grounded = false;
    platformsArr.forEach(el => {
      var dir = Boardgame.collision(HikerZ, el);
      if (dir === "left" || dir === "right") {
        HikerZ.speedX = 0;
        HikerZ.jumping = false;
      } else if (dir === "bottom") {
        HikerZ.grounded = true;
        HikerZ.jumping = false;
      } else if (dir === "top") {
          HikerZ.speedY *= -1;
      }
    }
  );

      if(HikerZ.grounded){
      HikerZ.speedY = 0;
      };
      
    Snowbullets.grounded = false;
    platformsArr.forEach(el => {
      var dir = Boardgame.collision(Snowbullets, el);
      if (dir === "left" || dir === "right") {
        Snowbullets.speedX = 0;
        Snowbullets.jumping = false;
    } else if (dir === "bottom") {
        Snowbullets.grounded = true;
        Snowbullets.jumping = false;
    } else if (dir === "top") {
        Snowbullets.speedY *= -1;
        }
      }
    );
  
      if(Snowbullets.grounded){
        Snowbullets.speedY = 0;
      };
        
   updateCanvas()
   requestAnimationFrame(loop);
};

  loop();
};

