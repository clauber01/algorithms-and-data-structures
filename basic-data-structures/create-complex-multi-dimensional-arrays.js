
/*
let nestedArray = 
[ // top, or first level - the outer most array
	['deep'], // an array within an array, 2 levels of depth
	[
		['deeper'],['deeper'] // 2 arrays nested 3 levels deep
	],
	[
		[
			['deepest'],['deepest'] // 2 arrays nested 4 levels deep
		],
		[
			[
				['deepest-est?'] // an array nested 5 levels deep
			]
		]
	]
];

console.log(nestedArray)
console.log(nestedArray[2][1][0][0][0])
console.log(nestedArray[2][1][0][0])

console.log(nestedArray[0].length)
console.log(nestedArray[1].length)
console.log(nestedArray[2].length)
// console.log(nestedArray[3].length)

nestedArray[2][1][0][0][0] = 'deeper still'
console.log(nestedArray[2][1][0][0][0])
console.log(nestedArray[2][1][0][0][0])
console.log(nestedArray[2][1][0])

*/

let myNestedArray = [ // 1 level
  // Only change code below this line
  ['unshift', false, 1, 2, 3, 'complex', 'nested'], // 2 level
  [
  	['deep', 'shift', 6, 7, 1000, 'method'] // 3 level
  ],
  [
  	[
  		['deeper', 'shift', 6, 7, 1000, 'method'] // 4 level
  	],
  	[
  		[
  			['deepest', 'shift', 6, 7, 1000, 'method'] // 5 level
  		]
  	]
  ],
  ['loop', 'shift', 6, 7, 1000, 'method'], // 2 level
  [
  	['loop', 'shift', 6, 7, 1000, 'method'], // 3 level
  	[
  		['loop', 'shift', 6, 7, 1000, 'method'], // 4 level
  		[
  			['loop', 'shift', 6, 7, 1000, 'method'] // 5level
  		]
  	]
  ]
  ['concat', false, true, 'spread', 'array'],
  ['mutate', 1327.98, 'splice', 'slice', 'push'],
  ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
  // Only change code above this line
];

console.log(myNestedArray.length)