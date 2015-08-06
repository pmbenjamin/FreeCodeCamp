//We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.
function sumAll(arr) {
    var minNum = Math.min(arr[0],arr[1]),
        maxNum = Math.max(arr[0],arr[1]),
        numArr = [];
        
    for (i = minNum; i <= maxNum; i++){
        numArr.push(i);
    }
    
    
    var totalSum = numArr.reduce(function(x,y){
        return x+y;
    });
  
    return totalSum;
}

sumAll([1, 4]);
