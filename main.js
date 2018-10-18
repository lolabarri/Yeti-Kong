window.onload = function() {

  var HikerZ = new HikerZrups(3, 0, 610, 20, 20, 'rgb(255,0,0)');
  var Boardgame = new Gameboard();
  var gravity = 0.3;
  var friction = 0.95;

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
    HikerZ.movement(gravity, friction);
    HikerZ.hitBottom();
  };

  function loop() {
    document.onkeydown = function(e) {
      switch (e.keyCode) {
         case 32: HikerZ.jump(); break;
        // case 32: {
        //   if(!HikerZ.jumping){
        //     console.log(HikerZ.speedY)
        //     HikerZ.speedY = HikerZ.jumpStrenth * 2;
        //     console.log(HikerZ.speedY)
        //     HikerZ.jumping = true;
        //    }
        // }; break;
        case 38: HikerZ.moveUp(); break;
        case 40: HikerZ.moveDown(); break;
        case 37: HikerZ.moveLeft(); break;
        case 39: HikerZ.moveRight(); break;
      }
    };
    

      platformsArr.forEach(e => {
        var dir = Boardgame.collision(HikerZ, e);
        if (dir === "left" || dir === "right") {
          console.log("entra en left o right")
            HikerZ.speedX = 0;
            HikerZ.jumping = false;
        } else if (dir === "bottom") {
          console.log("entra en bottom")
            HikerZ.grounded = true;
            HikerZ.jumping = false;
        } else if (dir === "top") {
            HikerZ.speedY *= -1;
        } 
        if(HikerZ.grounded){
          HikerZ.speedY = 0;
        } 
      })
     
      updateCanvas()
    requestAnimationFrame(loop);
  };

  loop();
};

