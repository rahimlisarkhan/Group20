$(document).ready(() => {
  let firstNumber = "";
  let secondNumber = "";
  let activeOperator = false;

  let operator = null;

  let result = 0;

  $(document).on("click", ".btn", function (e) {
    const btn = $(this);

    const value = btn.val();

    if (btn.hasClass("number")) {
      console.log("This is number");

      addNumber(value);
    } else if (btn.hasClass("operator")) {
      operatorFN(value);
      console.log("This is operator");
    } else {
      console.log("This is equal");
      equalResult();
    }
  });

  function addNumber(num) {
    if (activeOperator) {
      secondNumber += num;
      console.log("secondNumber", secondNumber);
      $("#secondNumEl").text(secondNumber);

      return;
    }

    firstNumber += num;

    $("#firstNumEl").text(firstNumber);

    console.log("firstNumber", firstNumber);
  }

  function operatorFN(op) {
    operator = op;
    activeOperator = true;

    $("#operatorEl").text(op);
  }

  function equalResult() {
    switch (operator) {
      case "+":
        result = +firstNumber + +secondNumber;
        break;
      case "*":
        result = +firstNumber * +secondNumber;
        break;

      default:
        result = 0;
    }

    $("#result").fadeIn(500).text(result);

    console.log("resutt", result);
  }
});

// el.classlist.contain("")
