function findLongestWord(str) {
  //split sentence into array
  strArray = str.split(' ');

  //container to store length of longest word
  var len = 0;

  //container to store longest word
  var word = '';
  
  //loop through array
  for (var i = 0; i < strArray.length; i++) {
    //if word in array is greater than current length of longest word
    if (strArray[i].length > len){
      //then store the new length of longest word in len container
      len = strArray[i].length;
      //also store longest word in word container (optional)
      word = strArray[i];
    }
  }
  return len;
}

findLongestWord('The quick brown fox jumped over the lazy dog');