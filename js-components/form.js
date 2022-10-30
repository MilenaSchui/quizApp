const form = document.querySelector('[data-js="form-js"]');
const qInput = document.querySelector('[data-js="q-input"]');
const aInput = document.querySelector('[data-js="a-input"]');
const cardCreation = document.querySelector('[data-js="card-creation"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const newCard = document.createElement("section");
  newCard.classList.add("form-style");

  cardCreation.append(newCard);

  const question = document.createElement("p");
  question.textContent = "Question: " + qInput.value;
  question.classList.add("question-card");

  newCard.append(question);

  const answer = document.createElement("li");
  answer.textContent = "Answer: " + aInput.value;
  answer.classList.add("question-card");

  newCard.append(answer);
});
