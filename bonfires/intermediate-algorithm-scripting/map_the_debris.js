function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var T = function(alt){
    return Math.round((2*Math.PI)*Math.sqrt(Math.pow(alt + earthRadius,3)/GM));
  };
  
  return arr.map(function(obj){
    obj.orbitalPeriod = T(obj.avgAlt);
    delete obj.avgAlt;
    return obj;
  });
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
