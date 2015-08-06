function end(str, target) {
  //split sentence into array of words  
  strArr = str.split(' ');
  
  //if array contains 1 word, then compare last letters
  if(strArr.length == 1){
    if(target == str.substring(str.length-1,str.length)){
      return true;
    }
    else {
      return false;
    }
  }
  //if array contains more than 1 word, then compare last words
  else {
    if(target == strArr[strArr.length-1]){
      return true;
    }
    else{
      return false;
    }
  }
}

end('Bastian', 'n');