const header = document.querySelector("[data-js='animation']");

function addAnimation(x){
    header.classList.add("animation");
    setTimeout(removeAnimation, x, 1500)
}

function removeAnimation(x){
    header.classList.remove("animation");
    setTimeout(addAnimation, x, 1500)
}

removeAnimation(100);
