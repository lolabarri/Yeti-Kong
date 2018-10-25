window.onload = function() {

  var gameStarted = false;
  var HikerZ = new HikerZrups(3, 650, 610, 30, 30, 'rgb(255,0,0)');
  var Boardgame = new Gameboard();
  var gravity = 0.3;
  var friction = 0.8;
  var damage = 1;
  var keys = [];

  setInterval(()=>Boardgame.createSnow(), 5000);

  var Plat0 = new Platforms(0, 630, 600, 20);
  var Plat1 = new Platforms(75, 570, 600, 20);
  var Plat2 = new Platforms(0, 485, 525, 20);
  var Plat3 = new Platforms(75, 395, 600, 20);
  var Plat4 = new Platforms(0, 300, 525, 20);
  var Plat5 = new Platforms(75, 220, 600, 20);
  var Plat6 = new Platforms(0, 125, 525, 20);

  var platformsArr = [Plat0, Plat1, Plat2, Plat3, Plat4, Plat5, Plat6];

  document.body.addEventListener("keydown", function(e) {
    if (e.keyCode == 13 && !gameStarted) {startGame();}
    if (e.keyCode == 13 && HikerZ.lives <= 0) {reset();}
    keys[e.keyCode] = true;
  });

  function startGame() {
    gameStarted = true;
    board.clear();
    requestAnimationFrame(loop);
  };

  function reset() {
    board.clear();
    ninjaCat.resetGame();
    ninjaCat.deadNinja = false;
    board.clearPoints();
    _timer();
    requestAnimationFrame(loop);
  };

  function updateCanvas() {
    ctx.clearRect(0, 0, 600, 650);
    Boardgame.draw();
    platformsArr.forEach(el => {
      el.draw();
    });
    HikerZ.draw();
    Boardgame.drawSnow(gravity);
    HikerZ.movement(gravity, friction);
    HikerZ.boundaries();
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

   Boardgame.collSnow(platformsArr); 
   Boardgame.collHiker(HikerZ, damage);   
   updateCanvas()
   requestAnimationFrame(loop);
};

  loop();
};

