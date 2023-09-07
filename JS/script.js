const result = document.getElementById("result"),
  form = document.getElementById("form"),
  error = document.getElementById("error_mess");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let message = "",
    number1 = form.elements.number1.value.trim(),
    number2 = form.elements.number2.value.trim(),
    operand = form.elements.operand.value;
  if (!number1.length || !number2.length) {
    message = "please enter the numbers";
    console.log(message);
  } else if (isNaN(number1) || isNaN(number2))
    message = "please enter valid numbers";
  else {
    number1 = +number1;
    number2 = +number2;
    switch (operand) {
      case "+":
        result.innerText = number1 + number2;
        break;
      case "-":
        result.innerText = number1 - number2;
        break;
      case "*":
        result.innerText = number1 * number2;
        break;
      case "/":
        result.innerText = number1 / number2;
        break;
        message = "";
    }
  }
  if (message.length) {
    error.innerText = message;
    error.classList.remove("d-none");
    console.log("here");
  } else {
    error.innerText = message;
    error.classList.add("d-none");
  }
});
