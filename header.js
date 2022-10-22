const header = document.querySelector("#home");

function addAnimation(){
    header.classList.add("animation");
    setTimeout(removeAnimation, 1500)
}

function removeAnimation(){
    header.classList.remove("animation");
    setTimeout(addAnimation, 1500)
}

addAnimation();

