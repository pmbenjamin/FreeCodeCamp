//Make a function that looks through a list (first argument) and returns an array of all objects that have equivalent property values (second argument).
function where(collection, source) {
  var arr = [];
//   console.log(collection[2].last);
  for (var c in Object.keys(collection)){
      if(collection[c].last === source.last){
          arr.push(collection[c]);
      }
  }
  return arr;
}

where([{ first: 'Romeo', last: 'Montague' }, { first: 'Mercutio', last: null }, { first: 'Tybalt', last: 'Capulet' }], { last: 'Capulet' });
