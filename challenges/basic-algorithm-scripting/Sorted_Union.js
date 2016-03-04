//Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
function unite(arr1, arr2, arr3) {
    var newArr = [];
    for (var x in arr1){
        newArr.push(arr1[x]);
    }
    for (var y in arr2){
        if (newArr.indexOf(arr2[y]) === -1){
            newArr.push(arr2[y]);
        }
    }
    for (var z in arr3){
        if (newArr.indexOf(arr3[z]) === -1){
            newArr.push(arr3[z]);
        }
    }
    return newArr;
}

unite([1, 2, 3], [5, 2, 1, 4], [2, 1]);
