function convert(num) {
  var romanArr = ['I','II','III','IV','V','VI','VII','IIX','IX','X','XX','XXX'],
    newArr = [];
  for (var i = 0; i < num; i++){
    if ( i <= 9 ) newArr.splice(0,1,romanArr[i]);
    else if (i>9 && i<20) newArr.splice(1,1,romanArr[i%10]);
    else if (i>=20 && i<30) newArr.splice(2,1,romanArr[i%10]);
    else newArr.splice(3,1,romanArr[i%10]);
  }
  return newArr.join('');
}

convert(36);
