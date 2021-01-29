function findLongestWordLength(str) {
	str = str.split(' ');
	console.log(str)
	let longest = 0;
	let word = '';
	// console.log(str[0+1].length)
	for (let i = 0; i < str.length ; i++) {
		if(longest < str[i].length) {
			longest = str[i].length;
			word = str[i];
		}
	}
	console.log(word)
  	return longest;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWordLength("May the force be with you"))
console.log(findLongestWordLength("Google do a barrel roll"))
console.log(findLongestWordLength("What is the average airspeed velocity of an unladen swallow"))
console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology"))