var Block = function(position) {
     var p = position;
     var image = imageFromPath('Image/Block.png');
     var o = {
         image: image,
         x: p[0],
         y: p[1],
         width: 30,
         height: 20,
         alive: true,
         hp: p[2] || 1,
     }
     o.kill = function() {
          o.hp--;
          if (o.hp == 0) {
               o.alive = false;
          }
     }
     o.collided = function(ball) {
        if (ball.y <= o.y + o.height && ball.y + ball.height >= o.y) {

              if (ball.x <= o.x + o.width && ball.x + ball.width >= o.x) {
                  if (o.alive) {
                        return true;
                  }
              }
              return false;
        }
    }
     return o;
}
