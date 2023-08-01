function decimalToAny(num, base) {
  let sum = "";
  let num1 = num;
  let getbase = base;
  let newNum;
  while (num1 > 0) {
    if (isNaN != (Number(num1))) {
      newNum = num1 % getbase;
      if (newNum < 10) {
        sum = newNum + sum;
      }
      else if (newNum == 10) {
        sum += "A";
      }
      else if (newNum == 11) {
        sum += "B";
      }
      else if (newNum == 12) {
        sum += "C";
      }
      else if (newNum == 13) {
        sum += "D";
      }
      else if (newNum == 14) {
        sum += "E";
      }
      else if (newNum == 15) {
        sum += "F"
      }
      num1 = Math.floor(num1 / (getbase));
    }
    else {
      alert("valid input");
      break;
    }
  }
  return sum;
}
