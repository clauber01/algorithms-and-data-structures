function findElement(arr, func) {
  let num = 0;
  for( let x in arr) {
    if(func(arr[x]) === true) 
      return  arr[x] 
  }
  return undefined;
}


console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }));
console.log(findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }))