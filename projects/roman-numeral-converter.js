

function convertToRoman(num) {
     let objRoman = {
        'M':1000,
        'CM':900,
        'DCCC':800,
        'DCC':700,
        'DC':600,
        'D':500,
        'CD':400,
        'CCC':300,
        'CC':200,
        'C':100,
        'XC':90,
        'LXXX':80,
        'LXX':70,
        'LX':60,
        'L':50,
        'XL':40,
        'XXX':30,
        'XX':20,
        'X':10,
        'IX':9,
        'VIII':8,
        'VII':7,
        'VI':6,
        'V':5,
        'IV':4,
        'III':3,
        'II':2,
        'I':1
    }
    let result = '';

    //console.log(objRoman)
    for(let i in objRoman) {
        while(num >= objRoman[i]) {           
            result += i;
            num -= objRoman[i];
        }
    }

    return result;
}






console.log(convertToRoman(2));
console.log(convertToRoman(3));
console.log(convertToRoman(4));
console.log(convertToRoman(5));
console.log(convertToRoman(6));
console.log(convertToRoman(9));
console.log(convertToRoman(12));
console.log(convertToRoman(16));
console.log(convertToRoman(29));
console.log(convertToRoman(44));
console.log(convertToRoman(45));
console.log(convertToRoman(68));
console.log(convertToRoman(83));
console.log(convertToRoman(97));
console.log(convertToRoman(400));
console.log(convertToRoman(500));
console.log(convertToRoman(501));
console.log(convertToRoman(649));
console.log(convertToRoman(798));
console.log(convertToRoman(891));
console.log(convertToRoman(1000));
console.log(convertToRoman(1004));
console.log(convertToRoman(1006));
console.log(convertToRoman(1023));
console.log(convertToRoman(2014));
console.log(convertToRoman(3999));