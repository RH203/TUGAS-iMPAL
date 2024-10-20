const buttons = document.querySelectorAll("main button");
const resultDisplay = document.getElementById("result");

const operatorCode = "*858#";

let currentValue = "0";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent.trim();

    if (!isNaN(value) || value === "*" || value === "#") {
      if (currentValue === "0") {
        currentValue = value;
      } else {
        currentValue += value;
      }
    } else if (value === "C") {
      currentValue = "0";
      prevValue = "";
      operator = "";
      result = "";
    }
    updateResult();
  });
});

function checkOperator(currentValue) {
  if (currentValue == operatorCode) {
    window.location.href = "../menu.html";
  }
}

function updateResult() {
  resultDisplay.textContent = currentValue;
}
