function add() {
  for (var i = 0; i < arguments.length; i++){
    if (typeof arguments[i] !== 'number') return undefined;
  }
  var num = arguments[0];
  if (arguments.length == 1){
    return function(x){
      if (typeof x !== 'number') return undefined;
      return x + num;
    };
    
  } else {
    return arguments[0] + arguments[1];
  }
}

add(2,3);
