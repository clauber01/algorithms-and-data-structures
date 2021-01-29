function frankenSplice(arr1, arr2, n) {
  let res = arr2.slice();  
  res.splice(n,0, ...arr1)
  console.log(arr2)
  return res;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
console.log(frankenSplice([1, 2], ["a", "b"], 1));
console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));