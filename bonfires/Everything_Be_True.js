function every(collection, pre) {
  // Does everyone have one of these?
  var preExists = false;
//   console.log(collection[0].hasOwnProperty(pre));
  for (var i = 0; i < collection.length; i++){
      if (collection[i].hasOwnProperty(pre)) preExists = true;
  }
  
  return preExists;
}

every([{'user': 'Tinky-Winky', 'sex': 'male'}, {'user': 'Dipsy', 'sex': 'male'}, {'user': 'Laa-Laa', 'sex': 'female'}, {'user': 'Po', 'sex': 'female'}], 'sex');