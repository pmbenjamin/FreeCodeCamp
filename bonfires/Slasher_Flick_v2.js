function slasher(arr, howMany) {
  //just slice the array by passing in the number (starting number). If you pass 1 argument, JS assumes it's the starting index and will slice until last index of array.
  return arr.slice(howMany);
}

slasher([1, 2, 3], 2);
