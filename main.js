window.onload = function() {

  var HikerZ = new HikerZrups(3, 0, 610, 20, 20, 'rgb(255,0,0)');

  var gravity = 0.3;
  var friction = 0.95;

  var Plat1 = new Platforms(75, 575, 600, 550);
  var Plat2 = new Platforms(0, 460, 525, 485);
  var Plat3 = new Platforms(75, 400, 600, 375);
  var Plat4 = new Platforms(0, 275, 525, 300);
  var Plat5 = new Platforms(75, 200, 600, 175);
  var Plat6 = new Platforms(0, 100, 525, 125);

  function updateCanvas() {
    ctx.clearRect(0, 0, 600, 650);
    Gameboard();
    Plat1.draw();
    Plat2.draw();
    Plat3.draw();
    Plat4.draw();
    Plat5.draw();
    Plat6.draw();
    HikerZ.draw();
    HikerZ.movement(gravity, friction);
    HikerZ.jumpAgain();
    Plat1.collision();
    HikerZ.hitBottom();
  };

  document.onkeydown = function(e) {
    switch (e.keyCode) {
      case 32: HikerZ.jump(); break;
      case 38: HikerZ.moveUp(); break;
      case 40: HikerZ.moveDown(); break;
      case 37: HikerZ.moveLeft(); break;
      case 39: HikerZ.moveRight(); break;
    }
  };

  function loop() {
    updateCanvas();
    requestAnimationFrame(loop);
  };

  loop();
};

