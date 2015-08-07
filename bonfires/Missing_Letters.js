function fearNotLetter(str) {
    var strArr = str.split('');
    for (var s in strArr){
        if (str.charCodeAt(s)-str.charCodeAt(s-1)>1) return String.fromCharCode(str.charCodeAt(s)-1);
    }
}

fearNotLetter('abce');
