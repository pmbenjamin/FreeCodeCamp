function replace(str, before, after) {
  var strArr = str.split(' ');
    
  function upCase(letter){
    return letter.replace(/[a-z]/,function(uc){ return uc.toUpperCase(); });
    // console.log(word);
  }
  for (var i in strArr){
    if (strArr[i] === before) {
        if (before[0]===before[0].toUpperCase()) strArr[i] = after.replace(/[a-z]/, upCase);
        else strArr[i] = after;
    }
  }
  str = strArr.join(' ');
  return str;
}

replace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");