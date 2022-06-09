//Capturing method
const wrapperDiv = document.querySelector(".wrapper");
const numberDiv = document.querySelector(".number");
const prevNumber = document.querySelector(".prevNumber");
const resultDiv = document.querySelector("#resultDiv");
console.log(numberDiv);

wrapperDiv.addEventListener("click", point);
wrapperDiv.addEventListener("click", numbers);
wrapperDiv.addEventListener("click", operators);
wrapperDiv.addEventListener("click", equalSign);
wrapperDiv.addEventListener("click", resetCalculation);
wrapperDiv.addEventListener("click", decrement);

let isClicked = false;
let pointDone = false;
function conditionality(oper) {
  if (
    numberDiv.outerText[numberDiv.outerText.length - 1] === undefined ||
    numberDiv.outerText[numberDiv.outerText.length - 1] === oper ||
    numberDiv.outerText[numberDiv.outerText.length - 1] === "-" ||
    numberDiv.outerText[numberDiv.outerText.length - 1] === "+" ||
    numberDiv.outerText[numberDiv.outerText.length - 1] === "*" ||
    numberDiv.outerText[numberDiv.outerText.length - 1] === "%" ||
    numberDiv.outerText[numberDiv.outerText.length - 1] === "(" ||
    numberDiv.outerText[numberDiv.outerText.length - 1] === "." ||
    numberDiv.outerText[numberDiv.outerText.length - 1] === "/"
  ) {
    isClicked = true;
  }
  return isClicked;
}

function numbers(e) {
  if (e.target.classList.contains("numbers")) {
    if (numberDiv.outerText[numberDiv.outerText.length - 1] === ")") {
      return;
    }
    const number = e.target.innerText;

    numberDiv.innerHTML += `${number} `;
  }
}

function point(e) {
  let numbers = "1234567890";
  console.log();
  if (e.target.classList.contains("point")) {
    const point = e.target.innerText;

    if (numberDiv.outerText === "") {
      numberDiv.innerText += ` 0${point}`;

      if (numberDiv.outerText[numberDiv.outerText.length - 1] === ".") {
        return;
      }
    } else if (numberDiv.outerText) {
      if (
        numberDiv.outerText[numberDiv.outerText.length - 1] === "." ||
        numberDiv.outerText[numberDiv.outerText.length - 2] === "." ||
        numberDiv.outerText[numberDiv.outerText.length - 1] === ")" ||
        numberDiv.outerText[numberDiv.outerText.length - 1] === "-" ||
        numberDiv.outerText[numberDiv.outerText.length - 1] === "*" ||
        numberDiv.outerText[numberDiv.outerText.length - 1] === "/" ||
        numberDiv.outerText[numberDiv.outerText.length - 1] === "%"
      ) {
        return;
      }
      numberDiv.innerText += ` ${point}`;
    }

    console.log(numberDiv.outerText);
  }
  // if (
  //   numberDiv.outerText[numberDiv.outerText.length - 1] === "." ||
  //   numberDiv.innerText === "" ||
  //   numberDiv.outerText[numberDiv.outerText.length - 1] === ")" ||
  //   numberDiv.outerText[numberDiv.outerText.length - 1] === "-" ||
  //   numberDiv.outerText[numberDiv.outerText.length - 1] === "*" ||
  //   numberDiv.outerText[numberDiv.outerText.length - 1] === "/" ||
  //   numberDiv.outerText[numberDiv.outerText.length - 1] === "%" ||
  //   numberDiv.outerText[0] === "("
  // ) {
  //   return;
  // }
  // if (e.target.classList.contains("point")) {
  //   const point = e.target.innerText;

  //   numberDiv.innerText += ` ${point} `;
  // }
}

let Parentheses = false;
function operators(e) {
  if (e.target.classList.contains("operations")) {
    let operator = e.target.innerText;
    if (operator === "+") {
      console.log(numberDiv.outerText);
      console.log(numberDiv.outerText[numberDiv.outerText.length - 1]);

      isClicked = false;
      const canbeDone = conditionality("+");
      if (canbeDone) {
        console.log("patladık2");
        return;
      }

      console.log("plus");
      numberDiv.innerText = ` ${numberDiv.textContent} ${operator} `;
    } else if (operator === "-") {
      isClicked = false;
      const canbeDone = conditionality("-");
      if (canbeDone) {
        console.log("patladık2");
        return;
      }

      numberDiv.innerText = ` ${numberDiv.textContent} ${operator} `;
    } else if (operator === "x") {
      operator = "*";

      isClicked = false;
      const canbeDone = conditionality("*");
      if (canbeDone) {
        console.log("patladık2");
        return;
      }

      numberDiv.innerText = ` ${numberDiv.textContent}  ${operator} `;
    } else if (operator === "÷") {
      operator = "/";

      isClicked = false;
      const canbeDone = conditionality("/");
      if (canbeDone) {
        console.log("patladık2");
        return;
      }

      numberDiv.innerText = ` ${numberDiv.textContent}  ${operator} `;
    } else if (operator === "%") {
      conditionality(operator);

      const total = numberDiv.innerText.replace(/\s/g, "");
      const resultText = correctTotal(total).toString();

      console.log(resultText);

      numberDiv.innerText = resultText * (1 / 100);
    } else if (operator === "()") {
      if (!Parentheses) {
        numberDiv.textContent = `( ${numberDiv.textContent} `;
        console.log(operator);
        if (numberDiv.outerText[numberDiv.outerText.length - 1] === operator) {
        }
        Parentheses = true;
      } else {
        if (
          numberDiv.outerText[numberDiv.outerText.length - 1] === "*" ||
          numberDiv.outerText[numberDiv.outerText.length - 1] === "-" ||
          numberDiv.outerText[numberDiv.outerText.length - 1] === "+" ||
          numberDiv.outerText[numberDiv.outerText.length - 1] === "(" ||
          numberDiv.outerText[numberDiv.outerText.length - 1] === "/"
        ) {
          return;
        }
        numberDiv.textContent = `${numberDiv.textContent} )`;
        Parentheses = false;
      }

      console.dir(numberDiv.outerText[numberDiv.outerText.length - 1]);
    }
  }
}

function equalSign(e) {
  if (e.target.classList.contains("equal")) {
    const total = numberDiv.innerText.replace(/\s/g, "");

    let countLeft = total.split("(").length - 1;
    let countRight = total.split(")").length - 1;
    let countTotal = countLeft + countRight;
    if (countTotal % 2 === 0) {
      if (
        numberDiv.outerText[numberDiv.outerText.length - 1] === "*" ||
        numberDiv.outerText[numberDiv.outerText.length - 1] === "-" ||
        numberDiv.outerText[numberDiv.outerText.length - 1] === "+" ||
        numberDiv.outerText[numberDiv.outerText.length - 1] === "/"
      ) {
        alert("Please complete your operation");
      }
      const resultText = correctTotal(total).toString();
      const dividedResultText = resultText.split("").join("");

      console.log(typeof resultText);

      resultDiv.innerHTML = `
      <br/>
      Current Result : ${dividedResultText} `;

      numberDiv.innerHTML = "";
    } else {
      alert("Please Close Parentheses");
    }
  }
}

function resetCalculation(e) {
  if (e.target.classList.contains("operations")) {
    let operator = e.target.innerText;
    if (operator === "C") {
      numberDiv.innerHTML = "";
      resultDiv.innerHTML = "";
    }
  }
}

//Total sum of Calculation
function correctTotal(str) {
  let total = 0;
  str = str.match(/[+\-\*\/]*(\.\d+|\d+(\.\d+)?)/g) || [];

  while (str.length) {
    const nv = str.shift();
    if (nv.startsWith("/")) {
      total /= parseFloat(nv.substring(1));
    } else if (nv.startsWith("*")) {
      total *= parseFloat(nv.substring(1));
    } else {
      total += parseFloat(nv);
    }
  }
  return total;
}

function decrement(e) {
  if (e.target.classList.contains("decrement")) {
    let operator = e.target.innerText;
    // operator = "-";

    console.log(numberDiv.outerText[0]);
    if (numberDiv.outerText[0] === "-" || numberDiv.outerText[0] === "(") {
      return;
    }
    if (operator === "+/-") {
      numberDiv.textContent = ` -${numberDiv.textContent}`;
    }
  }
}
