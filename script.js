const submit = document.getElementById("submit");
const reset = document.getElementById("reset");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const result = document.getElementById("result");
const math_operators = document.getElementById("math_operators");

function inputLength() {
  return !input1.value.length
    ? input1.reportValidity()
    : !input2.value.length
    ? input2.reportValidity()
    : input1.value.length && input2.value.length !== 0;
}

function add() {
  return `Result: ${Math.round(+input1.value + +input2.value)}`;
}

function substract() {
  return `Result: ${Math.round(+input1.value - +input2.value)}`;
}

function multiply() {
  return `Result: ${Math.round(+input1.value * +input2.value)}`;
}

function divide() {
  return input2.value != 0
    ? `Result: ${Math.round(+input1.value / +input2.value)}`
    : "Can't divide by 0!";
}

function resetValue() {
  input1.value = "";
  input2.value = "";
  math_operators.value = "add";
  result.textContent = "";
}

function calculate() {
  return math_operators.value === "add"
    ? add()
    : math_operators.value === "substract"
    ? substract()
    : math_operators.value === "multiply"
    ? multiply()
    : math_operators.value === "divide"
    ? divide()
    : "error";
}

function showCalculation() {
  result.textContent = calculate();
}

function calculateAfterClick() {
  if (inputLength()) {
    showCalculation();
  }
}

function calculateAfterKeyPress(event) {
  if (inputLength() && event.keyCode === 13) {
    showCalculation();
  }
}

submit.addEventListener("click", calculateAfterClick);
reset.addEventListener("click", resetValue);
input1.addEventListener("keypress", calculateAfterKeyPress);
input2.addEventListener("keypress", calculateAfterKeyPress);
