function largestOfFour(arr) {
    //create empty array to store largest number in.
    var lgArr = [];

    //create a sort function outside of loop
    function sortArr(sa){
        sa.sort(function(a,b){
            //sort in descending order
            return b-a;
        });
    }
    
    //loop through array
    for (var i = 0; i < arr.length; i++){
        //sort array
        sortArr(arr[i]);

        //store largest number in new array
        lgArr.push(arr[i][0]);
    }
    return lgArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
