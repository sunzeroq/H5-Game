
var loadLevel = function(n) {
     var n = n - 1;
     var level = levels[n];
     var blocks = [];
     for (var i = 0; i < level.length; i++) {
          var p = level[i];
          var b = Block(p);
          blocks.push(b);
     }
     return blocks
}
var blocks = [];
var DebugMode = function(enable) {
     if (!enable) {
          return;
     }
     window.addEventListener('keydown', function(event) {
         var k = event.key;
         if (k == 'p') {
              window.paused = !window.paused;
         }else if ('12345'.includes(k)) {
              blocks = loadLevel(Number(k));
         }
   })
   document.querySelector('#fpsRange').addEventListener('input', function(event) {
        var input = event.target;
        window.fps = Number(input.value + 1);
   })
}

var _main = function() {
     DebugMode(true);
     var paddle = Paddle();
     var ball = Ball();
     var game = GuaGame(50);
     var paused = false;
     blocks = loadLevel(2);
     var score = 0;

     game.registerAction('a', function(){
         paddle.moveleft();
    });
     game.registerAction('d', function(){
         paddle.moveright();
    });
    game.registerAction('f', function(){
        ball.fire();
   });




     game.update = function() {

          if (window.paused) {
               return;
          }
          ball.move();
          //相撞判断
          if (paddle.collided(ball)) {
               ball.speedx *= 1;
               ball.speedy *= -1;
          }

          for (var i = 0; i < blocks.length; i++) {
              var block = blocks[i];
              if (block.collided(ball)) {
                  ball.speedx *= 1;
                  ball.speedy *= -1;
                  block.kill();
                  //计分
                  score += 10;
             }
         }

    }

     game.draw = function() {
         game.drawImage(paddle);
         game.drawImage(ball);
         game.context.fillText("分数：" + score, 700, 500);
         //blocks
         for (var i = 0; i < blocks.length; i++) {
              var block = blocks[i];
              if (block.alive) {
                  game.drawImage(block);
              }
         }



    }

}

     _main();
