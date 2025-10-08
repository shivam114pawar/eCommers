const list = document.querySelector(".navlist");
const hamburger = document.querySelector(".fa-bars");


hamburger.addEventListener("click", () => {

    hamburger.classList.toggle("fa-bars");
    hamburger.classList.toggle("fa-xmark");
    list.classList.toggle("navlist-active");
})