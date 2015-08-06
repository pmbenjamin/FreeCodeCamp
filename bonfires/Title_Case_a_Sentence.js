function titleCase(str) {
  //split string into an array of words
  var strArr = str.toLowerCase().split(' ');

  //new array to store results
  var newArr = [];

  //loop through array
  strArr.forEach(function(i){
      //grab first letter, make it upper case, concatenate it to the rest of the word
      var word = i.charAt(0).toUpperCase()+i.substring(1,i.length);	
      
      //store new, capitalized word in array
      newArr.push(word);	
  });
  
  //return the array back to a sentence
  return newArr.join(' ');
}

titleCase("I'm a little tea pot");
