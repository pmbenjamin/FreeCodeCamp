//Return the remaining elements of an array after chopping off n elements from the head.
function slasher(arr, howMany) {
  if (howMany < 1) return arr;
  else return arr.slice(howMany,howMany+1);
}

/*
// This option seem to work as well, but SLICE() doc states that 2 arguments are required!
function slasher(arr, howMany) {
  return arr.slice(2);
}

slasher([1, 2, 3], 2);
*/

slasher([1, 2, 3], 2);