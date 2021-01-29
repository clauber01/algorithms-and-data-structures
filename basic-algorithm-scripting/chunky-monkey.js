function chunkArrayInGroups(arr, size) {
  let result = [];
  let i = 0;
  while(i < arr.length) {
    result.push(arr.splice(0,size))
    console.log(arr)
  }
  return result
}

//chunkArrayInGroups(["a", "b", "c", "d"], 2);
//console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3))

// console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2))
//console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2));
//console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4));

// console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));