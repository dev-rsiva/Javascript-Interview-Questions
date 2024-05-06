const userInput = document.getElementsByClassName("userInput")[0];
console.log(userInput);

const numbersEl = document.getElementsByClassName("numbers")[0];
console.log(numbersEl);

numbersEl.addEventListener("click", (e) => addNum(e.target.innerText));

const operatorsEl = document.getElementsByClassName("operators")[0];
console.log(operatorsEl);

operatorsEl.addEventListener("click", (e) => addOperator(e.target.innerText));

function addNum(text) {
  const ruleNo1 = userInput.innerText === "" && text === ".";

  const ruleNo2 =
    userInput.innerText[userInput.innerText.length - 1] === "." && text === ".";

  if (!ruleNo1 && !ruleNo2) {
    userInput.innerText += text;
    console.log(userInput);
  }
}

function addOperator(text) {
  let operators = ["+", "-", "*", "/"];
  console.log(text);

  const ruleNo1 = userInput.innerText[userInput.innerText.length - 1] === text;

  const ruleNo2 = userInput.innerText === "" && operators.includes(text);

  const ruleNo3 = operators.includes(
    userInput.innerText[userInput.innerText.length - 1]
  );

  console.log(userInput.innerText[userInput.innerText.length - 1]);
  console.log(text);
  console.log(ruleNo3);
  if (!ruleNo1 && !ruleNo2 && !ruleNo3) {
    userInput.innerText += text;
  }

  console.log(userInput.innerText);
}

const resultEl = document.getElementsByClassName("result")[0];
resultEl.addEventListener("click", calculate);
console.log(resultEl);
function calculate() {
  const result = eval(userInput.innerText);
  console.log(result);
  if (!isNaN(result)) {
    userInput.innerText = result;
  } else {
    alert("Input is invalid");
  }
}

const clearEl = document.getElementsByClassName("clear")[0];
clearEl.addEventListener("click", clearUserinput);

function clearUserinput() {
  userInput.innerText = "";
}

document.addEventListener("keydown", (e) => handleKeyPress(e.key));

function handleKeyPress(text) {
  console.log(text);

  switch (text) {
    case "0":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
      addNum(text);
      break;
    case "+":
    case "-":
    case "*":
    case "/":
      addOperator(text);
      break;
    case "C":
    case "Backspace":
      clearUserinput();
      break;
    case "=":
    case "Enter":
      calculate();
      break;
  }
}
