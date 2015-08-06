function factorialize(num) {
  //if number is 0, then factorial is 1
  if (num === 0){
    return 1;
  }
  else {
  	//otherwise, recursively multiply the current number by its factorial number (which is number-1)
    return num * factorialize(num-1);
  }
}

factorialize(5);