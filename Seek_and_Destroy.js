//You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
function destroyer(arr) {
  var args = [];
  
  for (var i = 1; i < arguments.length; i++) {
    args.push(arguments[i]);
  }

  function destroy(index){
    for (var i = 0; i < args.length; i++) {
      if(arr[index] === args[i]){
          return true;
      }
      else {
          return false;
      }
    }
  }
  return arr.filter(destroy);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);