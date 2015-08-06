//Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
function mutation(arr) {
  //instantiate variables
  var isMutation,
      arr1 = arr[0].toLowerCase(),
      arr2 = arr[1].toLowerCase();

  //loop over each letter of second array
  for (var l = 0; l < arr2.length; l++){
    //if letter from second array does not exist in first array, set isMutation to false and break from loop
    if (arr1.indexOf(arr2[l])==-1) {
      isMutation = false;
      break;
    }
    else{
      isMutation = true;
    }
  }

  return isMutation;
}

mutation(['hello', 'hey']);