function bouncer(arr) {
  let i = 0;
  while(i < arr.length) {
    if(arr[i] === false) {
      arr.splice(i,1);
    } else if (arr[i] === null) {
      arr.splice(i,1);
    } else if (arr[i] === 0) {
      arr.splice(i,1);
    } else if (arr[i] === "") {
      arr.splice(i,1)
    } else if (arr[i] === undefined) {
      
      arr.splice(i,1);
    } else if (isNaN(arr[i]) && typeof(arr[i]) != 'string') {
      
      arr.splice(i,1);
    } else {
      i++;
    }
  }
  return arr;
}

console.log(bouncer([false, null, 0, NaN, undefined, ""]));
console.log(bouncer(["a", "b", "c"]))
console.log(bouncer([null, NaN, 1, 2, undefined]))
console.log(bouncer([7, "ate", "", false, 9]))