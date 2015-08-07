function translate(str) {
  var vowels = ['a','e','i','o','u'];
  var strArr = str.split('');  
  for (var v in vowels){
    var spliced;
    if(strArr.indexOf(vowels[v])===0) {
      strArr.push('way');
      return strArr.join('');
    } 
    
    else if (strArr.indexOf(vowels[v])===1){
      spliced = strArr.splice(0,1);
      strArr.push(spliced+'ay');
      return strArr.join('');
    } 
    
    else if (strArr.indexOf(vowels[v])===2){
      spliced = strArr.splice(0,2).join('');
      strArr.push(spliced+'ay');
      return strArr.join('');
    }
  }
}

translate("consonant");
translate("eight");