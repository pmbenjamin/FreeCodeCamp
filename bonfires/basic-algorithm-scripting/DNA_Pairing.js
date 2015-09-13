function pair(str) {
  var strArr = str.split('');
  function base(x){
    var basePairs = [['A','T'],['T','A'],['C','G'],['G','C']];
      if (x==='A') return basePairs[0];
      else if (x==='T') return basePairs[1];
      else if (x==='C') return basePairs[2];
      else if (x==='G') return basePairs[3];
  }
  return strArr.map(base);
}
pair("GCG");
