/**
 * Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true.
 */
function drop(arr, func) {
  // Drop them elements.
  return arr.filter(function(e){
    return func(e);
  });
}

drop([1, 2, 3], function(n) {return n < 3; });