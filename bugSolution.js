function foo(x){
  if (x === null || x === undefined) {
    return 0; // Handle null or undefined cases
  }
  return x.length; // Access length property
}