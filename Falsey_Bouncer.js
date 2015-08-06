function bouncer(arr) {
  return arr.filter(function(x){
      if(x !== '' || x !== 0 || x !== 'undefined'){
          return x;
      }
  });
}

bouncer([7, 'ate', '', false, 9]);
