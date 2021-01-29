function largestOfFour(arr) {
  let largest = 0;
  let result = [];
  // console.log(arr.length);
  for(let i = 0; i < arr.length; i++) {
  	largest = -Infinity;
  	for(let j = 0; j < arr[i].length; j++) {
  		// console.log(arr[i][j])
  		if(largest < arr[i][j+1]) {
  			largest = arr[i][j];
  		}
  	}
  	result.push(largest)
  	// console.log(result)
  }
  return result;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
console.log(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]))
console.log(largestOfFour([[25, 7, 34, 48], [4, -10, 18, 21], [-80, -30, -1700, -1000]]))
