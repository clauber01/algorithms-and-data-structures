/*
function greaterThanTen(arr) {
	let newArr = [];
	for (let i = 0; i < arr.length; i++) 
		if (arr[i] > 10)
			newArr.push(arr[i]);
	return newArr;
}

console.log(greaterThanTen([2,12,8,14,80,0,1]));
*/


function filteredArray(arr, elem) {
  let newArr = [];
  // Only change code below this line
for(let i = 0; i < arr.length; i++) {
  //console.log(arr[i].indexOf(elem))
  if(arr[i].indexOf(elem) == -1) {
  	newArr.push(...arr[i])
  }
}
  // Only change code above this line
  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
console.log(filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18));
console.log(filteredArray([ ["trumpets", 2], ["flutes", 4], ["saxophones", 2] ], 2));
console.log(filteredArray([ ["amy", "beth", "sam"], ["dave", "sean", "peter"] ], "peter"));