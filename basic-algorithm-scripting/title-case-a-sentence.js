function titleCase(str) {
  let arr = str.toLowerCase().split(' ')
  
  for (let i in arr) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1)
    
  }
  return str = arr.join(' ')
}

console.log(titleCase("sHoRt AnD sToUt"));
console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));