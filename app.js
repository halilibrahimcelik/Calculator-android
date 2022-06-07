//Capturing method
const wrapperDiv = document.querySelector(".wrapper");
const numberDiv = document.querySelector(".number");
const resultDiv = document.querySelector("#resultDiv");
console.log(numberDiv);

wrapperDiv.addEventListener("click", point);
wrapperDiv.addEventListener("click", numbers);
wrapperDiv.addEventListener("click", operators);
wrapperDiv.addEventListener("click", equalSign);
wrapperDiv.addEventListener("click", resetCalculation);

function numbers(e) {
  if (e.target.classList.contains("numbers")) {
    if (numberDiv.outerText[numberDiv.outerText.length - 1] === ")") {
      return;
    }
    const number = e.target.innerText;
    numberDiv.innerHTML += `${number} `;
    // console.log(numberDiv.innerHTML);
    // console.dir(
    //   e.target
    //     .closest(".row")
    //     .previousElementSibling.classList.contains("pointDiv")
    // );
  }
}

function point(e) {
  if (
    numberDiv.innerText.includes(".") ||
    numberDiv.innerText === "" ||
    numberDiv.outerText[numberDiv.outerText.length - 1] === ")" ||
    numberDiv.outerText[0] === "("
  ) {
    return;
  }
  if (e.target.classList.contains("point")) {
    const point = e.target.innerText;
    numberDiv.innerText += ` ${point} `;
  }
}

let Parentheses = false;
function operators(e) {
  if (e.target.classList.contains("operations")) {
    let operator = e.target.innerText;
    if (operator === "+") {
      console.log(numberDiv.outerText);
      console.log(numberDiv.outerText[numberDiv.outerText.length - 1]);
      if (
        numberDiv.outerText[numberDiv.outerText.length - 1] === operator ||
        numberDiv.outerText[numberDiv.outerText.length - 1] === "-" ||
        numberDiv.outerText[numberDiv.outerText.length - 1] === "*" ||
        numberDiv.outerText[numberDiv.outerText.length - 1] === "/" ||
        numberDiv.outerText[numberDiv.outerText.length - 1] === "%"
      ) {
        return;
      }

      console.log("plus");
      numberDiv.innerText = ` ${numberDiv.textContent} ${operator} `;
    } else if (operator === "-") {
      if (
        numberDiv.outerText[numberDiv.outerText.length - 1] === operator ||
        numberDiv.outerText[numberDiv.outerText.length - 1] === "+" ||
        numberDiv.outerText[numberDiv.outerText.length - 1] === "*" ||
        numberDiv.outerText[numberDiv.outerText.length - 1] === "/" ||
        numberDiv.outerText[numberDiv.outerText.length - 1] === "%"
      ) {
        return;
      }

      numberDiv.innerText = ` ${numberDiv.textContent} ${operator} `;
    } else if (operator === "x") {
      //   console.log(numberDiv.innerHTML.replace(/\s/g, ""));
      operator = "*";
      if (
        numberDiv.outerText[numberDiv.outerText.length - 1] === undefined ||
        numberDiv.outerText[numberDiv.outerText.length - 1] === operator ||
        numberDiv.outerText[numberDiv.outerText.length - 1] === "-" ||
        numberDiv.outerText[numberDiv.outerText.length - 1] === "+" ||
        numberDiv.outerText[numberDiv.outerText.length - 1] === "/" ||
        numberDiv.outerText[numberDiv.outerText.length - 1] === "%" ||
        numberDiv.outerText[numberDiv.outerText.length - 1] === "("
      ) {
        return;
      }

      numberDiv.innerText = ` ${numberDiv.textContent}  ${operator} `;
    } else if (operator === "÷") {
      operator = "/";
      if (
        numberDiv.outerText[numberDiv.outerText.length - 1] === undefined ||
        numberDiv.outerText[numberDiv.outerText.length - 1] === operator ||
        numberDiv.outerText[numberDiv.outerText.length - 1] === "-" ||
        numberDiv.outerText[numberDiv.outerText.length - 1] === "+" ||
        numberDiv.outerText[numberDiv.outerText.length - 1] === "*" ||
        numberDiv.outerText[numberDiv.outerText.length - 1] === "%" ||
        numberDiv.outerText[numberDiv.outerText.length - 1] === "("
      ) {
        return;
      }

      numberDiv.innerText = ` ${numberDiv.textContent}  ${operator} `;
    } else if (operator === "%") {
      if (
        numberDiv.outerText[numberDiv.outerText.length - 1] === undefined ||
        numberDiv.outerText[numberDiv.outerText.length - 1] === operator ||
        numberDiv.outerText[numberDiv.outerText.length - 1] === "-" ||
        numberDiv.outerText[numberDiv.outerText.length - 1] === "+" ||
        numberDiv.outerText[numberDiv.outerText.length - 1] === "*" ||
        numberDiv.outerText[numberDiv.outerText.length - 1] === "/" ||
        numberDiv.outerText[numberDiv.outerText.length - 1] === "("
      ) {
        console.log("patladık");
        return;
      }

      numberDiv.innerText = ` ${numberDiv.textContent} *  ${1 / 100} `;
    } else if (operator === "()") {
      if (!Parentheses) {
        numberDiv.textContent = `( ${numberDiv.textContent} `;
        console.log(operator);
        if (numberDiv.outerText[numberDiv.outerText.length - 1] === operator) {
          console.log("lala");
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
      const resultText = addbits(total);

      resultDiv.innerText = resultText;
    } else {
      alert("Please Close Parentheses");
    }

    // eval(numberDiv.value);
  }
}

function resetCalculation(e) {
  if (e.target.classList.contains("operations")) {
    let operator = e.target.innerText;
    if (operator === "C") {
      numberDiv.innerHTML = "";
    }
  }
}

function addbits(s) {
  let total = 0;
  s = s.match(/[+\-\*\/]*(\.\d+|\d+(\.\d+)?)/g) || [];

  while (s.length) {
    const nv = s.shift();
    if (nv.startsWith("/")) {
      total /= parseFloat(nv.substring(1));
    } else if (nv.startsWith("*")) {
      total *= parseFloat(nv.substring(1));
    } else {
      total += parseFloat(nv);
    }
  }
  return total.toFixed(1);
}
