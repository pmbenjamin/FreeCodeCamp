function truncate(str, num) {
  
  return str.length > num ? str.slice(0,num-3)+'...' : str;
}

truncate('A-tisket a-tasket A green and yellow basket', 11);
