const TYPEOFINPUT = getId("inputtype");
const INPUT = getId("inputnum");
const OUTPUT = getId("answerbox");
const BASEOFOUTPUT = getId("ans-base");
const BASESELECTER = getId("baseselect");
const BASESCONVERT = getId("baseconvert");
let inuputNumber;
let getbase;
let givebase;
let secondinput;

function getId(selector) {
  return document.getElementById(selector);
}

function selectBase() {
  return BASESELECTER.value;
}

function convertBase() {
  return BASESCONVERT.value;
}

function inputvalue() {
  return INPUT.value;
}

function convertor() {
  inuputNumber = inputvalue();
  getbase = selectBase();
  givebase = convertBase();
  secondinput = convertToDecimal(inuputNumber, getbase);
  let answer = decimalToAny(secondinput, givebase);
  OUTPUT.value = answer;
  answerbase();
  inputbase();
}

function cleardata() {
  OUTPUT.value = "";
  INPUT.value = "";
}

function answerbase() {
  if (givebase == 2) {
    BASEOFOUTPUT.innerText = "2";
  }
  else if (givebase == 8) {
    BASEOFOUTPUT.innerText = "8";
  }
  else if (givebase == 10) {
    BASEOFOUTPUT.innerText = "10";
  }
  else if (givebase == 16) {
    BASEOFOUTPUT.innerText = "16";
  }
  return BASEOFOUTPUT;
}
function inputbase() {
  if (getbase == 2) {
    TYPEOFINPUT.innerText = "Binary";
  }
  else if (getbase == 8) {
    TYPEOFINPUT.innerText = "Octal";
  }
  else if (getbase == 10) {
    TYPEOFINPUT.innerText = "Decimal";
  }
  else if (getbase == 16) {
    TYPEOFINPUT.innerText = "Hexadecimal";
  }
  return TYPEOFINPUT;
}


