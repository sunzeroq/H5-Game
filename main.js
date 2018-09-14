
// TODO: 关卡编辑器 
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
     //加载所有场景
     var game = GuaGame(50);
     var scene = Scene(game);


}

     _main();
