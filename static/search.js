(function(){
  "use strict";
  if (!window.pastores){
    window.pastores = {};
  }
  var pastores = window.pastores;

  pastores.define = function(){
    // type Object
    var args = Array.prototype.slice.call(arguments);
    var n = typeof args[0] === 'object' ? args.shift() : '__';
    var _factory = args[args.length - 1];
    console.log(_factory);
  }
})();
