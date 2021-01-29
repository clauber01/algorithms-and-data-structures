/*
function confirmEnding(str, target) {
  let arr = str.split('');
  target = target.split('').reverse();
  let status = false;
  let count = 1;
  for (let i =0; i < target.length; i++) {
    
    if (arr[arr.length - count] == target[i]) {
      status = true
      count += 1;
    } else {
      status = false;
    }

  }
  return status
}
*/

function confirmEnding(str, target) {
    console.log(target.length);
    console.log(str.length);
    let last = str.slice(str.length - target.length)
    console.log(last)
    if(last == target) {
      return true;
    } 
    return false;
    
 }

console.log(confirmEnding("Congratulation", "on"));