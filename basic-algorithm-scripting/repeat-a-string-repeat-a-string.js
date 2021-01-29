function repeatStringNumTimes(str, num) {
  let res = "";
  if (num <= 0) {
    return "";
  } else {
    for (let i = 0; i < num; i++)
     res += str;
  }
  return res;
}

console.log(repeatStringNumTimes("abc", 3));
console.log(repeatStringNumTimes("*", 3))
console.log(repeatStringNumTimes("abc", 4))
console.log(repeatStringNumTimes("abc", 1))
console.log(repeatStringNumTimes("*", 8))
console.log(repeatStringNumTimes("abc", -2))
console.log(repeatStringNumTimes("abc", 0))