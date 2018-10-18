window.onload = function() {

  var HikerZ = new HikerZrups(3, 0, 610, 20, 20, 'rgb(255,0,0)');

  var gravity = 0.3;
  var friction = 0.95;

  var Plat0 = new Platforms (0, 640, 600, 640);
  var Plat1 = new Platforms(75, 570, 600, 570);
  var Plat2 = new Platforms(0, 485, 525, 485);
  var Plat3 = new Platforms(75, 395, 600, 395);
  var Plat4 = new Platforms(0, 300, 525, 300);
  var Plat5 = new Platforms(75, 220, 600, 220);
  var Plat6 = new Platforms(0, 125, 525, 125);

  function updateCanvas() {
    ctx.clearRect(0, 0, 600, 650);
    Plat0.draw();
    Plat1.draw();
    Plat2.draw();
    Plat3.draw();
    Plat4.draw();
    Plat5.draw();
    Plat6.draw();
    HikerZ.draw();
    HikerZ.movement(gravity, friction);
    Plat0.collision(HikerZ);
    Plat1.collision(HikerZ);
    Plat2.collision(HikerZ);
    Plat3.collision(HikerZ);
    Plat4.collision(HikerZ);
    Plat5.collision(HikerZ);
    Plat6.collision(HikerZ);
    HikerZ.coll(Plat1);
    HikerZ.hitBottom();
  };

  function loop() {
    document.onkeydown = function(e) {
      switch (e.keyCode) {
        case 32: HikerZ.jump(); break;
        case 38: HikerZ.moveUp(); break;
        case 40: HikerZ.moveDown(); break;
        case 37: HikerZ.moveLeft(); break;
        case 39: HikerZ.moveRight(); break;
      }
    };
    console.log(HikerZ.jumping);
    console.log(HikerZ.grounded);
    updateCanvas();
    requestAnimationFrame(loop);
  };

  loop();
};

