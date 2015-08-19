function convert(str) {
  var html = {'&':'&amp;', '<':'&lt;', '>':'&gt;', '\"':'&quot;', '\'':'&apos;'};
  return str.split('').map(function(x){
    if (html.hasOwnProperty(x)) return html[x];
    else return x;
  }).join('');
}

convert("Shindler's List");