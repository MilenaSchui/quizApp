const answerButtonOne = document.querySelector(".answer-button-1");
const answerContainerOne = document.querySelector(".answer-container-1");
const answerButtonTwo = document.querySelector(".answer-button-2");
const answerContainerTwo = document.querySelector(".answer-container-2");
const answerButtonThree = document.querySelector(".answer-button-3");
const answerContainerThree = document.querySelector(".answer-container-3");
const answerButtonFour = document.querySelector(".answer-button-4");
const answerContainerFour = document.querySelector(".answer-container-4");
const answerButtonFive = document.querySelector(".answer-button-5");
const answerContainerFive = document.querySelector(".answer-container-5");
const answerButtonSix = document.querySelector(".answer-button-6");
const answerContainerSix = document.querySelector(".answer-container-6");
const answerButtonSeven = document.querySelector(".answer-button-7");
const answerContainerSeven = document.querySelector(".answer-container-7");
const answerButtonEight = document.querySelector(".answer-button-8");
const answerContainerEight = document.querySelector(".answer-container-8");
const answerButtonNine = document.querySelector(".answer-button-9");
const answerContainerNine = document.querySelector(".answer-container-9");
const answerButtonTen = document.querySelector(".answer-button-10");
const answerContainerTen = document.querySelector(".answer-container-10");

const answer1 = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";
const answer2 =
  "Totam eaque, non veritatis in odio impedit dolores veniam perspiciatis quis animi, officia quod excepturi recusandae? Quas temporibus similique praesentium distinctio illo?";
const answer3 = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";
const answer4 =
  "Totam eaque, non veritatis in odio impedit dolores veniam perspiciatis quis animi, officia quod excepturi recusandae? Quas temporibus similique praesentium distinctio illo?";
const answer5 = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";
const answer6 =
  "Totam eaque, non veritatis in odio impedit dolores veniam perspiciatis quis animi, officia quod excepturi recusandae? Quas temporibus similique praesentium distinctio illo?";
const answer7 = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";
const answer8 =
  "Totam eaque, non veritatis in odio impedit dolores veniam perspiciatis quis animi, officia quod excepturi recusandae? Quas temporibus similique praesentium distinctio illo?";
const answer9 = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";
const answer10 =
  "Totam eaque, non veritatis in odio impedit dolores veniam perspiciatis quis animi, officia quod excepturi recusandae? Quas temporibus similique praesentium distinctio illo?";

answerButtonOne.addEventListener("click", function handleClick() {
  answerContainerOne.innerHTML = `<li class="answer">${answer1}</li>`;
  answerContainerOne.hidden = !answerContainerOne.hidden;
  const initialText = "Hide Answer";
  if (answerButtonOne.textContent === initialText) {
    answerButtonOne.textContent = "Show Answer";
  } else {
    answerButtonOne.textContent = initialText;
  }
});

answerButtonTwo.addEventListener("click", function handleClick() {
  answerContainerTwo.innerHTML = `<li class="answer">${answer2}</li>`;
  answerContainerTwo.hidden = !answerContainerTwo.hidden;
  const initialText = "Hide Answer";
  if (answerButtonTwo.textContent === initialText) {
    answerButtonTwo.textContent = "Show Answer";
  } else {
    answerButtonTwo.textContent = initialText;
  }
});

answerButtonThree.addEventListener("click", function handleClick() {
  answerContainerThree.innerHTML = `<li class="answer">${answer3}</li>`;
  answerContainerThree.hidden = !answerContainerThree.hidden;
  const initialText = "Hide Answer";
  if (answerButtonThree.textContent === initialText) {
    answerButtonThree.textContent = "Show Answer";
  } else {
    answerButtonThree.textContent = initialText;
  }
});

answerButtonFour.addEventListener("click", function handleClick() {
  answerContainerFour.innerHTML = `<li class="answer">${answer4}</li>`;
  answerContainerFour.hidden = !answerContainerFour.hidden;
  const initialText = "Hide Answer";
  if (answerButtonFour.textContent === initialText) {
    answerButtonFour.textContent = "Show Answer";
  } else {
    answerButtonFour.textContent = initialText;
  }
});

answerButtonFive.addEventListener("click", function handleClick() {
  answerContainerFive.innerHTML = `<li class="answer">${answer5}</li>`;
  answerContainerFive.hidden = !answerContainerFive.hidden;
  const initialText = "Hide Answer";
  if (answerButtonFive.textContent === initialText) {
    answerButtonFive.textContent = "Show Answer";
  } else {
    answerButtonFive.textContent = initialText;
  }
});

answerButtonSix.addEventListener("click", function handleClick() {
  answerContainerSix.innerHTML = `<li class="answer">${answer6}</li>`;
  answerContainerSix.hidden = !answerContainerSix.hidden;
  const initialText = "Hide Answer";
  if (answerButtonSix.textContent === initialText) {
    answerButtonSix.textContent = "Show Answer";
  } else {
    answerButtonSix.textContent = initialText;
  }
});

answerButtonSeven.addEventListener("click", function handleClick() {
  answerContainerSeven.innerHTML = `<li class="answer">${answer7}</li>`;
  answerContainerSeven.hidden = !answerContainerSeven.hidden;
  const initialText = "Hide Answer";
  if (answerButtonSeven.textContent === initialText) {
    answerButtonSeven.textContent = "Show Answer";
  } else {
    answerButtonSeven.textContent = initialText;
  }
});

answerButtonEight.addEventListener("click", function handleClick() {
  answerContainerEight.innerHTML = `<li class="answer">${answer8}</li>`;
  answerContainerEight.hidden = !answerContainerEight.hidden;
  const initialText = "Hide Answer";
  if (answerButtonEight.textContent === initialText) {
    answerButtonEight.textContent = "Show Answer";
  } else {
    answerButtonEight.textContent = initialText;
  }
});

answerButtonNine.addEventListener("click", function handleClick() {
  answerContainerNine.innerHTML = `<li class="answer">${answer9}</li>`;
  answerContainerNine.hidden = !answerContainerNine.hidden;
  const initialText = "Hide Answer";
  if (answerButtonNine.textContent === initialText) {
    answerButtonNine.textContent = "Show Answer";
  } else {
    answerButtonNine.textContent = initialText;
  }
});

answerButtonTen.addEventListener("click", function handleClick() {
  answerContainerTen.innerHTML = `<li class="answer">${answer10}</li>`;
  answerContainerTen.hidden = !answerContainerTen.hidden;
  const initialText = "Hide Answer";
  if (answerButtonTen.textContent === initialText) {
    answerButtonTen.textContent = "Show Answer";
  } else {
    answerButtonTen.textContent = initialText;
  }
});

//Start code for bookmark buttons in QCs to change color

const bookmark1 = document.querySelector(".qc-bookmark-icon1");

bookmark1.addEventListener("click", () => {
  let img = document.getElementById("bookmark-img1").src;
  if (img.indexOf("bookmark-icon.jpeg") != -1) {
    document.getElementById("bookmark-img1").src =
      "assets/bookmark-icon-fullblack.jpeg";
  } else {
    document.getElementById("bookmark-img1").src = "assets/bookmark-icon.jpeg";
  }
});

const bookmark2 = document.querySelector(".qc-bookmark-icon2");

bookmark2.addEventListener("click", () => {
  let img = document.getElementById("bookmark-img2").src;
  if (img.indexOf("bookmark-icon.jpeg") != -1) {
    document.getElementById("bookmark-img2").src =
      "assets/bookmark-icon-fullblack.jpeg";
  } else {
    document.getElementById("bookmark-img2").src = "assets/bookmark-icon.jpeg";
  }
});

const bookmark3 = document.querySelector(".qc-bookmark-icon3");

bookmark3.addEventListener("click", () => {
  let img = document.getElementById("bookmark-img3").src;
  if (img.indexOf("bookmark-icon.jpeg") != -1) {
    document.getElementById("bookmark-img3").src =
      "assets/bookmark-icon-fullblack.jpeg";
  } else {
    document.getElementById("bookmark-img3").src = "assets/bookmark-icon.jpeg";
  }
});

const bookmark4 = document.querySelector(".qc-bookmark-icon4");

bookmark4.addEventListener("click", () => {
  let img = document.getElementById("bookmark-img4").src;
  if (img.indexOf("bookmark-icon.jpeg") != -1) {
    document.getElementById("bookmark-img4").src =
      "assets/bookmark-icon-fullblack.jpeg";
  } else {
    document.getElementById("bookmark-img4").src = "assets/bookmark-icon.jpeg";
  }
});

const bookmark5 = document.querySelector(".qc-bookmark-icon5");

bookmark5.addEventListener("click", () => {
  let img = document.getElementById("bookmark-img5").src;
  if (img.indexOf("bookmark-icon.jpeg") != -1) {
    document.getElementById("bookmark-img5").src =
      "assets/bookmark-icon-fullblack.jpeg";
  } else {
    document.getElementById("bookmark-img5").src = "assets/bookmark-icon.jpeg";
  }
});

const bookmark6 = document.querySelector(".qc-bookmark-icon6");

bookmark6.addEventListener("click", () => {
  let img = document.getElementById("bookmark-img6").src;
  if (img.indexOf("bookmark-icon.jpeg") != -1) {
    document.getElementById("bookmark-img6").src =
      "assets/bookmark-icon-fullblack.jpeg";
  } else {
    document.getElementById("bookmark-img6").src = "assets/bookmark-icon.jpeg";
  }
});

const bookmark7 = document.querySelector(".qc-bookmark-icon7");

bookmark7.addEventListener("click", () => {
  let img = document.getElementById("bookmark-img7").src;
  if (img.indexOf("bookmark-icon.jpeg") != -1) {
    document.getElementById("bookmark-img7").src =
      "assets/bookmark-icon-fullblack.jpeg";
  } else {
    document.getElementById("bookmark-img7").src = "assets/bookmark-icon.jpeg";
  }
});

const bookmark8 = document.querySelector(".qc-bookmark-icon8");

bookmark8.addEventListener("click", () => {
  let img = document.getElementById("bookmark-img8").src;
  if (img.indexOf("bookmark-icon.jpeg") != -1) {
    document.getElementById("bookmark-img8").src =
      "assets/bookmark-icon-fullblack.jpeg";
  } else {
    document.getElementById("bookmark-img8").src = "assets/bookmark-icon.jpeg";
  }
});
const bookmark9 = document.querySelector(".qc-bookmark-icon9");

bookmark9.addEventListener("click", () => {
  let img = document.getElementById("bookmark-img9").src;
  if (img.indexOf("bookmark-icon.jpeg") != -1) {
    document.getElementById("bookmark-img9").src =
      "assets/bookmark-icon-fullblack.jpeg";
  } else {
    document.getElementById("bookmark-img9").src = "assets/bookmark-icon.jpeg";
  }
});

const bookmark10 = document.querySelector(".qc-bookmark-icon10");

bookmark10.addEventListener("click", () => {
  let img = document.getElementById("bookmark-img10").src;
  if (img.indexOf("bookmark-icon.jpeg") != -1) {
    document.getElementById("bookmark-img10").src =
      "assets/bookmark-icon-fullblack.jpeg";
  } else {
    document.getElementById("bookmark-img10").src = "assets/bookmark-icon.jpeg";
  }
});

//End code for bookmark buttons in QCs to change color
