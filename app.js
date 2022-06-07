//Capturing method
const wrapperDiv = document.querySelector(".wrapper");
const numberDiv = document.querySelector(".number");
const operationDiv = document.querySelector("#operationDiv");
const pointDiv = document.querySelector("#pointDiv");
console.log(numberDiv);

wrapperDiv.addEventListener("click", point);
wrapperDiv.addEventListener("click", numbers);

function numbers(e) {
  if (e.target.classList.contains("numbers")) {
    const number = e.target.innerText;
    numberDiv.innerHTML += `${number} `;
    // console.dir(
    //   e.target
    //     .closest(".row")
    //     .previousElementSibling.classList.contains("pointDiv")
    // );
  } else if (e.target.classList.contains("operations")) {
    console.log("aa");
  }
}

function point(e) {
  if (numberDiv.innerText.includes(".") || numberDiv.innerText === "") {
    return;
  }
  if (e.target.classList.contains("point")) {
    const point = e.target.innerText;
    numberDiv.innerText += ` ${point} `;
  }
}
