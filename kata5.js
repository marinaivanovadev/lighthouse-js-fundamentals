const urlEncode = function(text) {
  let result = ' ';
  let start = 0;
  let end = text.length -1;
  // start of the string no whitespace
  while (text[start] === ' ' && start < text.length) {
    start++;
  }
  // end of the string no space
  while (text[end] === ' ' && end >= 0) {
    end --;
  }

  for(let i = start; i <= end; i++){
    if (text[i] === ' ') {
      result += "%20";
      }  else {
        result += text[i];
      }
  }
  return result;
};
console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));