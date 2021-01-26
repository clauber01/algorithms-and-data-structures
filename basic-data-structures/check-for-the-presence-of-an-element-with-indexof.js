
/*
let fruits = ['apples','pears','oranges','peaches','pears'];

console.log(fruits.indexOf('dates')); // returns -1 : O elemento não existir na matriz.
console.log(fruits.indexOf('oranges')); // returns 2 : posição do elemento
console.log(fruits.indexOf('pears'));
*/

function quickCheck(arr, elem) {
  // Only change code below this line

if (arr.indexOf(elem) != -1)
	return true;
	
else
	return false;
  // Only change code above this line
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
console.log(quickCheck(["onions", "squash", "shallots"], "onions"));
console.log(quickCheck([3, 5, 9, 125, 45, 2], 125));
console.log(quickCheck([true, false, false], undefined));