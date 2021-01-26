
/*
let nestedObject = {
	id: 28802695164,
	data: 'December 31, 2016',
	data: {
		totalUsers: 99,
		online:80,
		onlineStatus: {
			active:67,
			away: 13,
			busy: 8
		}
	}
};

console.log(nestedObject)

nestedObject.data.onlineStatus.busy = 10;
console.log(nestedObject)

*/

let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};

// Only change code below this line
userActivity.data.online = 45;
// Only change code above this line

console.log(userActivity);