var Paddle = function() {
     var image = imageFromPath('Image/Wall.jpg');
     var o = {
         image: image,
         x: 300,
         y: 400,
         speed: 5,
         width: 200,
         height: 100,
     }
     o.recmove = function (x) {
         if (x < 0) {
               x = 0;
         }
         if (x + o.width > 800) {
               x = 800 - o.width;
         }
         o.x = x;
     }

     o.moveleft = function() {
         o.recmove(o.x - o.speed);
     }
     o.moveright = function() {
         o.recmove(o.x + o.speed);
     }
     o.collided = function(ball) {
         if (ball.y + ball.height >= o.y) {

               if (ball.x <= o.x + o.width && ball.x + ball.width >= o.x) {
                     return true;
               }
               return false;
         }
     }

     return o;
}
