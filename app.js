//Capturing method
const wrapperDiv = document.querySelector(".wrapper");
const numberDiv = document.querySelector(".number");
const secondNumberDiv = document.querySelector("#secondNumber");
const operationDiv = document.querySelector("#operationDiv");
const equal = document.querySelector("#equalDiv");
console.log(numberDiv);

wrapperDiv.addEventListener("click", point);
wrapperDiv.addEventListener("click", numbers);
wrapperDiv.addEventListener("click", operators);
wrapperDiv.addEventListener("click", equalSign);

function numbers(e) {
  if (e.target.classList.contains("numbers")) {
    const number = e.target.innerText;
    numberDiv.innerHTML += `${number} `;
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
      if (numberDiv.outerText[numberDiv.outerText.length - 1] === operator) {
        return;
      }
      if (numberDiv.outerText[numberDiv.outerText.length - 1] === "-") {
        operator = "";
      }
      console.log("plus");
      numberDiv.innerText = ` ${numberDiv.textContent} ${operator} `;
      //   operationDiv.innerText = operator;
    } else if (operator === "-") {
      if (numberDiv.outerText[numberDiv.outerText.length - 1] === operator) {
        return;
      }
      if (numberDiv.outerText[numberDiv.outerText.length - 1] === "-") {
        operator = "";
      }
      console.log("minus");
      numberDiv.innerText = ` ${numberDiv.textContent} ${operator} `;

      //   operationDiv.innerText = operator;
    } else if (operator === "x") {
      //   operationDiv.innerText = operator;
    } else if (operator === "%") {
      //   operationDiv.innerText = operator;
    } else if (operator === "()") {
      if (!Parentheses) {
        numberDiv.textContent = `( ${numberDiv.textContent} `;
        console.log(operator);
        if (numberDiv.outerText[numberDiv.outerText.length - 1] === operator) {
          console.log("lala");
        }
        Parentheses = true;
      } else {
        numberDiv.textContent = `${numberDiv.textContent} )`;
        Parentheses = false;
      }

      console.dir(numberDiv.outerText[numberDiv.outerText.length - 1]);
    }
  }
}

function equalSign(e) {
  if (e.target.classList.contains("equal")) {
    {
      console.log(eval(numberDiv.innerText.trim()));
      // eval(numberDiv.value);
    }
  }
}
