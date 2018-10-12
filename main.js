window.onload = function() {

  var gravity = 3;
  var HikerZ = new HikerZrups(3, 0, 610, 20, 20, 'rgb(255,0,0)');

  function updateCanvas() {
    ctx.clearRect(0, 0, 600, 650);
    Gameboard();
    HikerZ.draw();
  };

  document.onkeydown = function(e) {
    switch (e.keyCode) {
      case 38: HikerZ.moveUp(); break;
      case 40: HikerZ.moveDown(); break;
      case 37: HikerZ.moveLeft(); break;
      case 39: HikerZ.moveRight(); break;
    }
    updateCanvas();
  };

  updateCanvas();
};

