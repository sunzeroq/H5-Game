var Scene = function(g) {
     //加载所有的场景元素
     var paddle = Paddle();
     var ball = Ball();

     var paused = false;
     blocks = loadLevel(2);
     var score = 0;

     g.registerAction('a', function(){
         paddle.moveleft();
     });
     g.registerAction('d', function(){
         paddle.moveright();
     });
     g.registerAction('f', function(){
        ball.fire();
     });




     g.update = function() {
          //暂停
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

     g.draw = function() {
         g.drawImage(paddle);
         g.drawImage(ball);
         g.context.fillText("分数：" + score, 700, 500);
         //blocks
         for (var i = 0; i < blocks.length; i++) {
              var block = blocks[i];
              if (block.alive) {
                  g.drawImage(block);
              }
         }

     }

}
