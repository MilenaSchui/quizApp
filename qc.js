const answerButton = document.querySelector(".answer-button");
const answerContainer = document.querySelector(".answer-container");
const answer1 = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";

answerButton.addEventListener("click", function handleClick() {
  answerContainer.innerHTML = `<li class="answer">${answer1}</li>`;
  answerContainer.hidden = !answerContainer.hidden;
  const initialText = "Show Answer";
  if (answerButton.textContent === initialText) {
    answerButton.textContent = "Hide Answer";
  } else {
    answerButton.textContent = initialText;
  }
});
