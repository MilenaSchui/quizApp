const form = document.querySelector('[data-js="form-js"]');
const qInput = document.querySelector('[data-js="q-input"]');
const aInput = document.querySelector('[data-js="a-input"]');
const cardCreation = document.querySelector('[data-js="card-creation"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const newCard = document.createElement("section");
  newCard.classList.add("question-card");
  cardCreation.append(newCard);

  const question = document.createElement("p");
  question.textContent = qInput.value;
  question.classList.add("question-card");
  newCard.append(question);

  const bookmark = document.createElement("img");
  bookmark.classList.add("qc-bookmark-icon");
  newCard.append(bookmark);

  const answer = document.createElement("p");
  answer.textContent = aInput.value;
  answer.classList.add("question-card");
  newCard.append(answer);
});
