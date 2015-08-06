function palindrome(str) {
	//make word lower case & remove non-alphabet chars (aka special chars)
	str = str.toLowerCase().replace(/\W/g,'');

	//split the word into array of letters, reverse the order, join back to form a word
	var revStr = str.split('').reverse().join('');

	//if the reversed string is the same as original sting, then it's palindrome
	if (revStr === str){
		return true;
	}
	else {
		return false;
	}
}


palindrome("eye");
