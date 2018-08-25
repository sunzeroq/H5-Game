var Ball = function() {
     var image = imageFromPath('Image/Ball.png');
     var o = {
         image: image,
         x: 400,
         y: 200,
         speedx: 5,
         speedy: 5,
         width: 50,
         height: 50,
         fired: false,
     }
     o.fire = function() {
         o.fired = true;
     }
     o.move = function() {
         if (o.fired) {
              //fantan
              if (o.x < 0 || o.x > 750) {
                    o.speedx *= -1;
              }
              if (o.y < 0 || o.y > 550) {
                    o.speedy *= -1;
              }
              //move
              o.x += o.speedx;
              o.y += o.speedy;
         }
     }

     return o;
}
