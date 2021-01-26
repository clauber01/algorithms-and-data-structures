/*
const numbers = [10, 11, 12, 12, 15];
const startIndex = 3; // o índice no qual começar a excluir os elementos
const amountToDelete = 1; // número de elementos a ser excluido

numbers.splice(startIndex,amountToDelete,13,14);
console.log(numbers)
*/

function htmlColorNames(arr) {
  	// Only change code below this line
	arr.splice(0,2,'DarkSalmon','BlanchedAlmond');
  	// Only change code above this line
  	return arr;
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));