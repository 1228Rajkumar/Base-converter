let newNum;
const ERRORBOX = document.getElementById("error");
function convertToDecimal(num, base) {
  let sum = 0;
  let count = 0;
  num = String(num);
  for (let i = num.length - 1; i >= 0; i--) {
    let everynum = (num[i]);
    if (isNaN(Number(num)) && base != 16) {
      ERRORBOX.style.display = "block";
      break;
    }
    if (isNaN(Number(num)) || base == 16) {
      sum += Math.pow(base, count) * Number(hexadecimal(num[i]));
      count++;
    }
    else if (everynum > base && base == 2) {
      ERRORBOX.style.display = "block";
      break;
    }
    else if (everynum < base && base == 2) {
      sum += Math.pow(base, count) * Number(num[i]);
      count++;
      ERRORBOX.style.display = "none";
    }
    else if (base == 8 || base == 10) {
      sum += Math.pow(base, count) * Number(num[i]);
      count++;
      ERRORBOX.style.display = "none";
    }
  }
  return sum;
}

function hexadecimal(num) {
  newNum = num;
  if (isNaN(newNum)) {
    if (newNum == "A" || newNum == "a") {
      ERRORBOX.style.display = "none";
      newNum = 10;
    }
    else if (newNum == "B" || newNum == "b") {
      ERRORBOX.style.display = "none";
      newNum = 11;
    }
    else if (newNum == "C" || newNum == "c") {
      ERRORBOX.style.display = "none";
      newNum = 12;
    }
    else if (newNum == "D" || newNum == "d") {
      ERRORBOX.style.display = "none";
      newNum = 13;
    }
    else if (newNum == "E" || newNum == "e") {
      ERRORBOX.style.display = "none";
      newNum = 14;
    }
    else if (newNum == "F" || newNum == "f") {
      ERRORBOX.style.display = "none";
      newNum = 15;
    }
    else {
      ERRORBOX.style.display = "block";
    }
    return newNum;
  }
  else {
    ERRORBOX.style.display = "none";
    return newNum;
  }


}



































