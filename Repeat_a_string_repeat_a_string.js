function repeat(str, num) {
  //container to hold new string
  var repeated = '';

  //if num is 0 or less, return blank
  if (num <=0) return repeated;

  //loop through 'num'. With each iteration, concatenate 'str' to 'repeated'
  for (var i = 0; i < num; i++){
    repeated += str;
  }
  return repeated;
}

repeat('abc', 3);
