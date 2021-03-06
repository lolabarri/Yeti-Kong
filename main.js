window.onload = function() {


  //Calling all the constructors to make the elements of the game
  var HikerZ = new HikerZrups(3, 650, 610, 30, 30, 'rgb(255,0,0)');
  var Boardgame = new Gameboard();
  var Yeti = new TheYeti(10, 15, 60, 60);
  var Wingmonster1 = new Enemies(100, 150, 30, 30, 3);
  var Wingmonster2 = new Enemies(320, 326, 30, 30, 2.5);
  var BackgroundMusic = new sound('./Sounds/heavy_howling_arctic_wind.mp3');
  var gravity = 0.3;
  var friction = 0.8;
  var damage = 1;
  var keys = [];

  Boardgame.init(HikerZ);
  
  //This push new snowballs to an array every 5 seconds
  setInterval(()=>Boardgame.createSnow(), 5000);

  var Plat0 = new Platforms(0, 640, 600, 20);
  var Plat1 = new Platforms(75, 570, 600, 20);
  var Plat2 = new Platforms(0, 485, 525, 20);
  var Plat3 = new Platforms(75, 395, 600, 20);
  var Plat4 = new Platforms(0, 300, 525, 20);
  var Plat5 = new Platforms(75, 220, 600, 20);
  var Plat6 = new Platforms(0, 125, 525, 20);
  var Plat7 = new Platforms(0, 70, 100, 20);

  var platformsArr = [Plat0, Plat1, Plat2, Plat3, Plat4, Plat5, Plat6, Plat7];

// Press Intro to start the game
  document.body.addEventListener("keydown", function(e) {
    if (e.keyCode == 13 && !HikerZ.alive) {startGame();}
    if (e.keyCode == 13 && !HikerZ.dead) {startGame();}
    keys[e.keyCode] = true;
  });

  function startGame() {
    HikerZ.alive = true;
    HikerZ.dead = false;
    loop();
  };

// All the drawings and movement of constructors
  function updateCanvas() {
    ctx.clearRect(0, 0, 600, 650);
    Boardgame.draw();
    platformsArr.forEach(el => {
      el.draw();
    });
    HikerZ.draw();
    Yeti.draw();
    Wingmonster1.draw();
    Wingmonster2.draw();
    BackgroundMusic.play();
    Boardgame.drawSnow(gravity);
    HikerZ.movement(gravity, friction);
    Wingmonster1.movement();
    Wingmonster2.movement();
    HikerZ.boundaries();
    Wingmonster1.boundaries();
    Wingmonster2.boundaries();
    Boardgame.drawLives(HikerZ);
    Boardgame.checkWinOrLose(HikerZ);
  };

// Key pressing and some of the collision
  function loop() {
    document.onkeydown = function (e) {
      keys[e.keyCode] = true;
    };
    
    document.onkeyup = function (e) {
        keys[e.keyCode] = false;
    };

    if (keys[32]) {HikerZ.jump();}
    if (keys[37]) {HikerZ.moveLeft();}
    if (keys[39]) {HikerZ.moveRight();}

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
   Boardgame.colEnemies1(HikerZ, damage, Wingmonster1);
   Boardgame.colEnemies2(HikerZ, damage, Wingmonster2); 
   updateCanvas();
   requestAnimationFrame(loop);
};
};

