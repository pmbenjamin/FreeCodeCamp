function find(arr, func) {
  var num;
  
  arr.some(function(e){
    if (func(e)) {
      num = e;
      return true;
    }
  });
  
  return num;
}

find([1, 2, 3, 4], function(num){ return num % 2 === 0; });
