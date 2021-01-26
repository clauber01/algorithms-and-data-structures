function rot13(str) {
  
  let result = '';
  for(let j = 0; j < str.length; j++) {
    // console.log(str[j])
    switch(str[j]){
      case 'A': result += 'N'; break;
      case 'B': result += 'O'; break;
      case 'C': result += 'P'; break;
      case 'D': result += 'Q'; break;
      case 'E': result += 'R'; break;
      case 'F': result += 'S'; break;
      case 'G': result += 'T'; break;
      case 'H': result += 'U'; break;
      case 'I': result += 'V'; break;
      case 'J': result += 'W'; break;
      case 'K': result += 'X'; break;
      case 'L': result += 'Y'; break;
      case 'M': result += 'Z'; break;
      case 'N': result += 'A'; break;
      case 'O': result += 'B'; break;
      case 'P': result += 'C'; break;
      case 'Q': result += 'D'; break;
      case 'R': result += 'E'; break;
      case 'S': result += 'F'; break;
      case 'T': result += 'G'; break;
      case 'U': result += 'H'; break;
      case 'V': result += 'I'; break;
      case 'W': result += 'J'; break;
      case 'X': result += 'K'; break;
      case 'Y': result += 'L'; break;
      case 'Z': result += 'M'; break;
      
      default: result += str[j];
      
    }
  }
   return result;
}

console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."))
console.log(rot13("SERR YBIR?"))