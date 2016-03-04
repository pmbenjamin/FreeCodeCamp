function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  var downCase = function(x){
    return x.toLowerCase();
  };
  
  return str.replace(/\_/g,' ').replace(/([a-z])([A-Z])/g,'$1 $2').split(' ').map(downCase).join('-');
}

spinalCase('This Is Spinal Tap');
