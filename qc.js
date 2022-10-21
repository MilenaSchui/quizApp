const answerButton = document.querySelector(".answer-button");
const answerContainer = document.querySelector(".answer-container");
const answer1 = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";

answerButton.addEventListener("click", (event) => {
  event.preventDefault();
  answerContainer.innerHTML = `<li class="show-answer">${answer1}</li>`;
});
