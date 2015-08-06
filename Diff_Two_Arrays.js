// Compare two arrays and return a new array with any items not found in both of the original arrays.
function diff(arr1, arr2) {
  var newArr = [];
  var arrOne = arr1.filter(function(i){
    if (arr2.indexOf(i)===-1) return newArr.concat(i);
  });
  
  var arrTwo = arr2.filter(function(i){
    if (arr1.indexOf(i)===-1) return newArr.concat(i);
  });
  
  return newArr.concat(arrOne,arrTwo);
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);
