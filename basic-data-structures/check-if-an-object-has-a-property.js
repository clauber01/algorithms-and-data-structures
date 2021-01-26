let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};



function isEveryoneHere(obj) {
  // Only change code below this line
// return 'Alan' in obj && 'Jeff' in obj && 'Sarah' in obj && 'Ryan' in obj;

let everyone = ['Alan','Jeff','Sarah','Ryan'];

for(let i = 0; i < everyone.length; i++) {
  let student = everyone[i];
  if ( users.hasOwnProperty(student) === false)
    return false;
}
return true

  // Only change code above this line
}

console.log(isEveryoneHere(users));