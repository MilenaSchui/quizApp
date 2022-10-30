const form = document.querySelector('[data-js="form-js"]');
let input;

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));
    input = data;
    console.log(input);
});

