function sumFibs(num) {
  var fibArr = [1,1],
      i = 2,
      fibSeq = function(seed){
    while (fibArr[i-2]+fibArr[i-1] <= seed){
      fibArr.push(fibArr[i-2]+fibArr[i-1]);
      i++;
    }
      };
  
  fibSeq(num);
  
  var odds = function(x){
    return x%2;
  };
  
  var sumOdds = function(prev,cur){
    return prev+cur;
  };
  
  var sumOddFibs = fibArr.filter(odds).reduce(sumOdds);
  return sumOddFibs;
}

sumFibs(4);
