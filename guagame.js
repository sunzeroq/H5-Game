var GuaGame = function (fps) {
     var g = {
         actions: {},
         keydowns: {},
     };
     var canvas = document.querySelector('#id_canvas');
     var context = canvas.getContext('2d');
     g.canvas = canvas;
     g.context = context;

     //drawImage
     g.drawImage = function(guaImage) {
         g.context.drawImage(guaImage.image, guaImage.x, guaImage.y, guaImage.width, guaImage.height);
     }

     //events
     window.addEventListener('keydown', function(event){
         g.keydowns[event.key] = true;
     })
     window.addEventListener('keyup', function(event){
         g.keydowns[event.key] = false;
     })

     //registerAction 按下key执行callback函数，然后将callback存到g.actions，后面可以直接调用
     g.registerAction = function(key, callback){
         g.actions[key] = callback;
     }
     //循环调用，提升帧率
     setInterval(function () {
         //events
         var actions = Object.keys(g.actions);
         for (var i = 0; i < actions.length; i++) {
              var key = actions[i];
              //按键按下调用g.actions[key]函数（也就是callback函数）
              if (g.keydowns[key]) {
                    g.actions[key]();
              }
         }
         //update
         g.update();
         context.clearRect(0, 0, canvas.width, canvas.height);
         //drawImage
         g.draw();
    },1000/fps)

     return g;
}
