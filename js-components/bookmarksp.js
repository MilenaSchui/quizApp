const answerButtonEleven = document.querySelector(".answer-button-11");
const answerContainerEleven = document.querySelector(".answer-container-11");
const answerButtonTwelve = document.querySelector(".answer-button-12");
const answerContainerTwelve = document.querySelector(".answer-container-12");
const answerButtonThirteen = document.querySelector(".answer-button-13");
const answerContainerThirteen = document.querySelector(".answer-container-13");
const answerButtonFourteen = document.querySelector(".answer-button-14");
const answerContainerFourteen = document.querySelector(".answer-container-14");

const answer11 = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";
const answer12 = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";
const answer13 = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";
const answer14 = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";

answerButtonEleven.addEventListener("click", function handleClick() {
  answerContainerEleven.innerHTML = `<li class="answer">${answer11}</li>`;
  answerContainerEleven.hidden = !answerContainerEleven.hidden;
  const initialText = "Hide Answer";
  if (answerButtonEleven.textContent === initialText) {
    answerButtonEleven.textContent = "Show Answer";
  } else {
    answerButtonEleven.textContent = initialText;
  }
});

answerButtonTwelve.addEventListener("click", function handleClick() {
  answerContainerTwelve.innerHTML = `<li class="answer">${answer12}</li>`;
  answerContainerTwelve.hidden = !answerContainerTwelve.hidden;
  const initialText = "Hide Answer";
  if (answerButtonTwelve.textContent === initialText) {
    answerButtonTwelve.textContent = "Show Answer";
  } else {
    answerButtonTwelve.textContent = initialText;
  }
});

answerButtonThirteen.addEventListener("click", function handleClick() {
  answerContainerThirteen.innerHTML = `<li class="answer">${answer13}</li>`;
  answerContainerThirteen.hidden = !answerContainerThirteen.hidden;
  const initialText = "Hide Answer";
  if (answerButtonThirteen.textContent === initialText) {
    answerButtonThirteen.textContent = "Show Answer";
  } else {
    answerButtonThirteen.textContent = initialText;
  }
});

answerButtonFourteen.addEventListener("click", function handleClick() {
  answerContainerFourteen.innerHTML = `<li class="answer">${answer14}</li>`;
  answerContainerFourteen.hidden = !answerContainerFourteen.hidden;
  const initialText = "Hide Answer";
  if (answerButtonFourteen.textContent === initialText) {
    answerButtonFourteen.textContent = "Show Answer";
  } else {
    answerButtonFourteen.textContent = initialText;
  }
});
