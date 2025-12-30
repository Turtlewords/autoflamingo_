// Elements

const hamburger = document.querySelector(".hamburger")
const close = document.querySelector(".close")
const menu = document.querySelector(".mobile-menu")

// Event listeners

hamburger.addEventListener("click", () => {
    menu.style.transform = "translateX(0)";
})

close.addEventListener("click", () => {
    menu.style.transform = "translateX(-45vw)";
})