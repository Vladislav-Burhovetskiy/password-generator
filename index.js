const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

const inputEl = document.querySelector(".input-length");
const firstPassword = document.getElementById("first-password");
const secondPassword = document.getElementById("second-password");
const body = document.querySelector("body");
const colorTitle = document.getElementById("title");
const colorDescription = document.getElementById("title-description");
const colorLength = document.querySelector(".input-title");
const inputLength = document.getElementById("input-length");
const tooltipOne = document.getElementById("tooltip-one");
const tooltipTwo = document.getElementById("tooltip-two");

const lightModeBtn = document.getElementById("btn-light-mode");
const darkModeBtn = document.getElementById("btn-dark-mode");
const generateBtn = document.getElementById("generate-btn");
const copyBtn1 = document.getElementById("copy-btn-1");
const copyBtn2 = document.getElementById("copy-btn-2");

lightModeBtn.addEventListener("click", lightMode);
darkModeBtn.addEventListener("click", darkMode);
generateBtn.addEventListener("click", generatePassword);
copyBtn1.addEventListener("click", () => {
  copyPassword(1);
});
copyBtn2.addEventListener("click", () => {
  copyPassword(2);
});

function randomNumber() {
  return Math.floor(Math.random() * characters.length);
}

function generatePassword() {
  let randomIndexOne = 0;
  let randomIndexTwo = 0;
  let passwordLength = 0;

  firstPassword.textContent = "";
  secondPassword.textContent = "";

  if (inputEl.value < 8) {
    passwordLength = 8;
  } else if (inputEl.value > 15) {
    passwordLength = 15;
  } else {
    passwordLength = +inputEl.value;
  }

  for (let i = 1; i <= passwordLength; i++) {
    randomIndexOne = randomNumber();
    randomIndexTwo = randomNumber();

    firstPassword.textContent += characters[randomIndexOne];
    secondPassword.textContent += characters[randomIndexTwo];
  }
}

function lightMode() {
  body.classList.add("light");
  body.classList.remove("dark");
  colorDescription.style.color = "#6B7280";
  colorLength.style.color = "#6B7280";
  colorTitle.style.color = "#1F2937";
  inputLength.style.border = "1px solid #6B7280";
}

function darkMode() {
  body.classList.add("dark");
  body.classList.remove("light");
  colorDescription.style.color = "#D5D4D8";
  colorLength.style.color = "#D5D4D8";
  colorTitle.style.color = "white";
}

function copyPassword(num) {
  let copyText = num === 1 ? firstPassword : secondPassword;
  const toolTip = num === 1 ? tooltipOne : tooltipTwo;

  navigator.clipboard
    .writeText(copyText.textContent)
    .then(() => {
      toolTip.classList.remove("hidden");
      setTimeout(() => {
        toolTip.classList.add("hidden");
      }, 500)
    })
    .catch((err) => {
      console.error("Unable to copy text", err);
    });
}
