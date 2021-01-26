function checkCashRegister(price, cash, cid) {
  
  var change;
  let due = Math.round(cash * 100) - Math.round(price * 100);
  
  // console.log(due)
  let totalAmount = 0;

  for(let curr in cid) {
    totalAmount += Math.round(cid[curr][1] * 100)
    //  console.log(totalAmount)
  }

  if (totalAmount < due) {
    change = {status: "INSUFFICIENT_FUNDS", change: []}
    //return change;
  }

  if (totalAmount === due) {
    change = {status: "CLOSED", change: [...cid]}
    //return change;
  } else {
  	//console.log(totalAmount)
    var denom = [
       {name:"ONE HUNDRED" ,val:10000},
       {name:"TWENTY" ,val:2000},
       {name:"TEN" ,val:1000},
       {name:"FIVE" ,val:500},
       {name:"ONE" ,val:100},
       {name:"QUARTER" ,val:25},
       {name:"DIME" ,val:10},
       {name:"NICKEL" ,val:5},
       {name:"PENNY" ,val:1}
    ]
    var changeArr = [];
    for (let i = 0; i < denom.length; i++) {
    var currVal = 0;
    //  console.log(Math.round(cid[8 - i][1] * 100))
    //  console.log(denom[i].val)
    //  console.log(due)
    while (due >= denom[i].val && currVal < Math.round(cid[8 - i][1] * 100)) {
    	due -= denom[i].val;
        currVal += denom[i].val;
        //  console.log(currVal)
    }
    //console.log(currVal)
    if(currVal > 0) {
        changeArr.push([denom[i].name, currVal / 100]);
        //  console.log(changeArr)
    }

    }
    if (due === 0) {
    	change = {status: "OPEN", change: [...changeArr]}
    	//  console.log(change)
    } else {
    	change = {status: "INSUFFICIENT_FUNDS", change: []}
      	//  console.log(change)
    }
    
  }
  return change;
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))
console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
