const answerButton = document.querySelector(".answer-button");
const answerContainer = document.querySelector(".answer-container");
const answer1 = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";

answerButton.addEventListener("click", () => {
  answerContainer.innerHTML = `<li class="answer">${answer1}</li>`;
  // let getAnswer = document.querySelector(".show-answer");
  answerContainer.hidden = !answerContainer.hidden;
});
// let getAnswer = document.querySelector("li");
// let getClass = getAnswer.classList.value;
// console.log(getClass);
// if (getClass === "show-answer") {
//   getClass = "hide-answer";
// } else {
//   getClass = "show-answer";
// }

// answerContainer.innerHTML = `<li class="show-answer">${answer1}</li>`;
// if (getAnswer.style.display === "none") {
//   getAnswer.style.display = "block";
// } else {
//   getAnswer.style.display = "none";
// }

// let getAnswer = document.querySelector(".answer");
// console.log(getAnswer.style);

// if (getAnswer.style.display === "none") {
//   getAnswer.style.display = "block";
// } else {
//   getAnswer.style.display = "none";
// }

// answerContainer.innerHTML = `<li class="show-answer" id="show-answer">${answer1}</li>`;

// console.log(getAnswer.style);
// if (getAnswer.style.display === "") {
//   getAnswer.style.display = "block";
// } else {
//   getAnswer.style.display = "none";
// }

// const getAnswer = document.getElementById("show-answer");
// getAnswer.classList.replace("show-answer", "hide-answer");

// function myToggleFunction() {
//   answerContainer.innerHTML = `<li class="answer" id="show-answer">${answer1}</li>`;
//   const getAnswer = document.querySelector(".answer");
//   getAnswer.classList.toggle("answer");
// }
// console.log(answer.style.display.value);
// if (answer.style.display === "none") {
//   answer.style.display = "block";
// } else {
//   answer.style.display = "none";
// }

// answerButton.addEventListener("click", () => {
//   // answerContainer.innerHTML = `<li class="answer">${answer1}</li>`;
//   // const liElement = document.querySelector(".answer");
//   // answerContainer.classList.toggle("hide-answer");
// });

// function myToggleFunction() {
//   answerContainer.innerHTML = `<li class="answer" id="show-answer">${answer1}</li>`;
//   answer = document.getElementById("show-answer");
//   console.log(answer.style.display.value);
//   if (answer.style.display === "none") {
//     answer.style.display = "block";
//   } else {
//     answer.style.display = "none";
//   }
