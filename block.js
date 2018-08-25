var Block = function(position) {
     var p = position;
     var image = imageFromPath('Image/Block.png');
     var o = {
         image: image,
         x: p[0],
         y: p[1],
         width: 60,
         height: 40,
         alive: true,
     }
     o.kill = function() {
         o.alive = false;
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
