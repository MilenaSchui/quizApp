const form = document.querySelector('[data-js="form-js"]');
const qInput = document.querySelector('[data-js="q-input"]');
const aInput = document.querySelector('[data-js="a-input"]');
const cardCreation = document.querySelector('[data-js="card-creation"]');
const bmicon = "/assets/bookmark-icon.jpeg";

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const newCard = document.createElement("section");
  newCard.classList.add("question-card");
  cardCreation.append(newCard);

  const question = document.createElement("p");
  question.textContent = "Question: " + qInput.value;
  newCard.append(question);

  const bookmark = document.createElement("img");
  bookmark.classList.add("qc-bookmark-icon");
  bookmark.src = bmicon;
  bookmark.alt = "bookmark icon";
  newCard.append(bookmark);

  const answer = document.createElement("ul");
  answer.textContent = "Answer: " + aInput.value;
  answer.classList.add("question-card");
  newCard.append(answer);

  const tagContainer = document.createElement("section");
  tagContainer.classList.add("container-categories");
  newCard.append(tagContainer);

  const tagHtml = document.createElement("button");
  tagHtml.textContent = "#html";
  tagHtml.classList.add("category-button");
  tagContainer.append(tagHtml);

  const tagFlexbox = document.createElement("button");
  tagFlexbox.textContent = "#flexbox";
  tagFlexbox.classList.add("category-button");
  tagContainer.append(tagFlexbox);

  const tagCss = document.createElement("button");
  tagCss.textContent = "#css";
  tagCss.classList.add("category-button");
  tagContainer.append(tagCss);

  const tagJs = document.createElement("button");
  tagJs.textContent = "#js";
  tagJs.classList.add("category-button");
  tagContainer.append(tagJs);
});
