function range(start, end, step) {
  let a = [];
  if (start === undefined && end === undefined || step === undefined) {
    return a;
    }
  if (start > end) {
    return a;
  } 
  if (step <= 0) {
  return a;
  }
  for(let i = start; i <= end; i+=step) {
      a.push(i);
  }
  return a;
}
console.log(range(-9, 3, 3));
